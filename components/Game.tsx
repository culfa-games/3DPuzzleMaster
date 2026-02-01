
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, ContactShadows, Text, Center } from '@react-three/drei';
import * as THREE from 'three';
import { LevelData } from '../types';
import PuzzlePiece from './PuzzlePiece';
import UI from './UI';
import { getAnimalFact } from '../services/geminiService';
import { audioService } from '../services/audioService';

interface GameProps {
  level: LevelData;
  onLevelComplete: () => void;
  onExit: () => void;
  isLastLevel?: boolean;
  hintCount: number;
  onUseHint: () => void;
  /** 0-100: puzzle completion for screenshot preview. 100 = fully assembled, 50 = half done */
  previewProgress?: number;
}

const TutorialTracker: React.FC<{
  onRotate: () => void,
  onZoom: () => void,
  active: boolean,
  step: 'ROTATE' | 'ZOOM' | 'DRAG' | 'PLAY'
}> = ({ onRotate, onZoom, active, step }) => {
  const lastRotation = useRef(0);
  const lastDistance = useRef(0);
  const initialized = useRef(false);

  useFrame((state) => {
    if (!active) return;

    const camera = state.camera;
    const distance = camera.position.length();
    const rotation = Math.atan2(camera.position.x, camera.position.z);

    if (!initialized.current) {
      lastRotation.current = rotation;
      lastDistance.current = distance;
      initialized.current = true;
      return;
    }

    if (step === 'ROTATE') {
      const diff = Math.abs(rotation - lastRotation.current);
      if (diff > 0.5) {
        onRotate();
      }
    } else if (step === 'ZOOM') {
      const diff = Math.abs(distance - lastDistance.current);
      if (diff > 1.5) {
        onZoom();
      }
    }
  });

  return null;
};

const AutoRotate: React.FC<{ active: boolean }> = ({ active }) => {
  useFrame((state) => {
    if (!active) return;
    const t = state.clock.getElapsedTime();
    state.camera.position.x = Math.sin(t * 0.6) * 8;
    state.camera.position.z = Math.cos(t * 0.6) * 8;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
};

const Game: React.FC<GameProps> = ({ level, onLevelComplete, onExit, isLastLevel, hintCount, onUseHint, previewProgress }) => {
  const initialSnapped = React.useMemo(() => {
    if (previewProgress == null || previewProgress <= 0) return new Set<string>();
    const count = Math.round((previewProgress / 100) * level.parts.length);
    return new Set(level.parts.slice(0, Math.min(count, level.parts.length)).map((p) => p.id));
  }, [level.parts, previewProgress]);
  const [snappedIds, setSnappedIds] = useState<Set<string>>(initialSnapped);
  const [fact, setFact] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDraggingAny, setIsDraggingAny] = useState(false);

  // Tutorial State (skip in screenshot preview)
  const isTutorial = (level.id === 1 || level.id === 2) && previewProgress == null;
  const [tutorialStep, setTutorialStep] = useState<'ROTATE' | 'ZOOM' | 'DRAG' | 'PLAY'>(
    level.id === 1 ? 'ROTATE' : (level.id === 2 ? 'DRAG' : 'PLAY')
  );

  const handleSnap = useCallback((id: string) => {
    if (isTutorial && (tutorialStep === 'ROTATE' || tutorialStep === 'ZOOM')) return;

    setSnappedIds(prev => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });

    if (level.id === 2 && tutorialStep === 'DRAG') {
      // We keep the DRAG step active to show hands on remaining pieces, 
      // or we can transition to PLAY if desired. The user wants it shown for every piece.
      // So let's keep it DRAG for now.
    }
  }, [isTutorial, tutorialStep, level.id]);

  useEffect(() => {
    if (snappedIds.size === level.parts.length && !isCompleted && level.parts.length > 0) {
      setIsCompleted(true);
      audioService.playCompleteSound();
      const fetchFact = async () => {
        const animalFact = await getAnimalFact(level.title.split(' ').pop() || level.title);
        setFact(animalFact);
      };
      fetchFact();
    }
  }, [snappedIds.size, level.parts.length, level.title, isCompleted]);

  return (
    <div className="w-full h-full relative select-none">
      <Canvas shadows camera={{ position: [0, 2, 8], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} castShadow />
        <spotLight position={[-10, 15, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />

        <OrbitControls
          enabled={!isDraggingAny && previewProgress == null}
          enablePan={false}
          minDistance={3}
          maxDistance={15}
          makeDefault
        />

        {/* Auto-rotation for Promo Mode */}
        <AutoRotate active={previewProgress != null} />

        {/* 'city' preset ile parçaların üzerindeki parlamalar daha belirgin olacak */}
        <Environment preset="city" />

        <TutorialTracker
          active={isTutorial}
          step={tutorialStep}
          onRotate={() => setTutorialStep('ZOOM')}
          onZoom={() => setTutorialStep('PLAY')}
        />

        <group position={[0, 0, 0]}>
          {level.parts.map(part => {
            const renderGhostGeometry = (type: string, dim: any, pos?: [number, number, number], rot?: [number, number, number]) => {
              const geometry = (() => {
                switch (type) {
                  case 'sphere': return <sphereGeometry args={[dim[0], 16, 16]} />;
                  case 'cylinder': return <cylinderGeometry args={[dim[0], dim[1], dim[2], 16]} />;
                  case 'capsule': return <capsuleGeometry args={[dim[0], dim[1], 4, 8]} />;
                  default: return <boxGeometry args={dim} />;
                }
              })();

              return (
                <mesh position={pos ? new THREE.Vector3(...pos) : undefined} rotation={rot ? new THREE.Euler(...rot) : undefined}>
                  {geometry}
                  <meshStandardMaterial color="#ffffff" wireframe transparent opacity={0.2} />
                </mesh>
              );
            };

            return (
              <group key={`ghost-${part.id}`} position={part.targetPos} rotation={part.rotation ? new THREE.Euler(...part.rotation) : undefined}>
                {!snappedIds.has(part.id) && (
                  part.type === 'group' && part.subParts ? (
                    part.subParts.map((sp, idx) => (
                      <React.Fragment key={idx}>
                        {renderGhostGeometry(sp.type, sp.dim, sp.pos, sp.rot)}
                      </React.Fragment>
                    ))
                  ) : (
                    renderGhostGeometry(part.type, part.dimensions)
                  )
                )}
              </group>
            );
          })}

          {(() => {
            return level.parts.map(part => (
              <PuzzlePiece
                key={part.id}
                part={part}
                onSnap={handleSnap}
                isSnapped={snappedIds.has(part.id)}
                onDragStart={() => setIsDraggingAny(true)}
                onDragEnd={() => setIsDraggingAny(false)}
                isAutoSnap={level.id === 1 && tutorialStep === 'PLAY'}
                showDragIndicator={level.id === 2 && tutorialStep === 'DRAG' && !snappedIds.has(part.id)}
              />
            ));
          })()}
        </group>

        <ContactShadows opacity={0.5} scale={15} blur={2} far={10} resolution={512} color="#000000" position={[0, -2.5, 0]} />


      </Canvas>

      <UI
        level={level}
        snappedCount={snappedIds.size}
        totalCount={level.parts.length}
        fact={fact}
        isCompleted={isCompleted}
        onLevelComplete={onLevelComplete}
        onExit={onExit}
        isLastLevel={isLastLevel}
        tutorialStep={isTutorial ? tutorialStep : undefined}
        hintCount={hintCount}
        onUseHint={onUseHint}
      />
    </div>
  );
};

export default Game;
