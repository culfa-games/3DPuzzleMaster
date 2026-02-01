
import React, { useRef, useState, useEffect } from 'react';
import { useFrame, ThreeEvent, useThree } from '@react-three/fiber';
import { RoundedBox, Sphere, Cylinder, Capsule, Html } from '@react-three/drei';
import * as THREE from 'three';
import { PuzzlePart } from '../types';
import { audioService } from '../services/audioService';

interface PuzzlePieceProps {
  part: PuzzlePart;
  onSnap: (id: string) => void;
  isSnapped: boolean;
  onDragStart: () => void;
  onDragEnd: () => void;
  isAutoSnap?: boolean;
  showDragIndicator?: boolean;
}

const PuzzlePiece: React.FC<PuzzlePieceProps> = ({ part, onSnap, isSnapped, onDragStart, onDragEnd, isAutoSnap, showDragIndicator }) => {
  const meshRef = useRef<THREE.Group>(null!);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null!);
  const { camera, raycaster } = useThree();
  const [position, setPosition] = useState<THREE.Vector3>(new THREE.Vector3(...part.initialPos));
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const dragPlane = useRef(new THREE.Plane());
  const dragOffset = useRef(new THREE.Vector3());
  const intersectionPoint = useRef(new THREE.Vector3());

  const SNAP_THRESHOLD = 0.6;

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    if (isSnapped) return;
    e.stopPropagation();

    // Tutorial Mode: Auto-snap on click
    if (isAutoSnap) {
      audioService.playSnapSound();
      onSnap(part.id);
      setPosition(new THREE.Vector3(...part.targetPos));
      return;
    }

    const normal = new THREE.Vector3().copy(camera.position).sub(meshRef.current.position).normalize();
    dragPlane.current.setFromNormalAndCoplanarPoint(normal, meshRef.current.position);

    if (raycaster.ray.intersectPlane(dragPlane.current, intersectionPoint.current)) {
      dragOffset.current.copy(meshRef.current.position).sub(intersectionPoint.current);
    }

    setIsDragging(true);
    onDragStart();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerUp = (e: ThreeEvent<PointerEvent>) => {
    if (isSnapped || !isDragging || isAutoSnap) return;

    setIsDragging(false);
    onDragEnd();
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);

    const targetVec = new THREE.Vector3(...part.targetPos);
    const dist = meshRef.current.position.distanceTo(targetVec);

    if (dist < SNAP_THRESHOLD) {
      audioService.playSnapSound();
      onSnap(part.id);
      setPosition(targetVec);
    }
  };

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (isDragging && !isSnapped && !isAutoSnap) {
      if (raycaster.ray.intersectPlane(dragPlane.current, intersectionPoint.current)) {
        const newPos = intersectionPoint.current.add(dragOffset.current);
        setPosition(newPos.clone());
      }
    }
  };

  useEffect(() => {
    if (isSnapped) {
      setPosition(new THREE.Vector3(...part.targetPos));
    }
  }, [isSnapped, part.targetPos]);

  const tutorialProgress = useRef(0);
  const tutorialGroupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    // Basic position interpolation
    if (!isSnapped && !isDragging) {
      const floatY = Math.sin(state.clock.elapsedTime + part.id.charCodeAt(0)) * 0.05;
      meshRef.current.position.y += (position.y + floatY - meshRef.current.position.y) * 0.1;
      meshRef.current.position.x += (position.x - meshRef.current.position.x) * 0.1;
      meshRef.current.position.z += (position.z - meshRef.current.position.z) * 0.1;
    } else {
      meshRef.current.position.lerp(position, 0.2);
    }

    // Tutorial Animation (Sliding Hand)
    if (showDragIndicator && !isSnapped && !isDragging && tutorialGroupRef.current) {
      tutorialProgress.current = (tutorialProgress.current + delta * 0.6) % 1;
      const targetVec = new THREE.Vector3(...part.targetPos);
      const currentPos = meshRef.current.position.clone();
      // Calculate offset based on progress (0 to 1)
      const offset = new THREE.Vector3().subVectors(targetVec, currentPos).multiplyScalar(tutorialProgress.current);
      tutorialGroupRef.current.position.copy(offset);

      // Optionally fade out at the end of the slide
      const opacity = tutorialProgress.current > 0.8 ? (1 - tutorialProgress.current) * 5 : 1;
      const indicatorEl = tutorialGroupRef.current.children[0] as any;
      if (indicatorEl && indicatorEl.element) {
        indicatorEl.element.style.opacity = opacity.toString();
      }
    }

    // SCALE & EMISSIVE INTENSITY (GLOW) LOGIC
    if (isSnapped) {
      meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      if (materialRef.current) materialRef.current.emissiveIntensity = THREE.MathUtils.lerp(materialRef.current.emissiveIntensity, 1.5, 0.1);
    } else if (isDragging) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 12) * 0.03;
      meshRef.current.scale.lerp(new THREE.Vector3(1.15 * pulse, 1.15 * pulse, 1.15 * pulse), 0.1);
      if (materialRef.current) materialRef.current.emissiveIntensity = THREE.MathUtils.lerp(materialRef.current.emissiveIntensity, 4.0, 0.1);
    } else if (isHovered) {
      meshRef.current.scale.lerp(new THREE.Vector3(1.05, 1.05, 1.05), 0.1);
      if (materialRef.current) materialRef.current.emissiveIntensity = THREE.MathUtils.lerp(materialRef.current.emissiveIntensity, 2.5, 0.1);
    } else {
      meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      if (materialRef.current) materialRef.current.emissiveIntensity = THREE.MathUtils.lerp(materialRef.current.emissiveIntensity, 1.0, 0.1);
    }
  });

  const renderGeometry = () => {
    const renderPrimitive = (type: string, dim: any, colorOverride?: string, offset?: [number, number, number], rot?: [number, number, number]) => {
      const materialProps = {
        color: isSnapped ? (colorOverride || part.color) : (isHovered ? '#ffffff' : (colorOverride || part.color)),
        emissive: isSnapped ? (colorOverride || part.color) : (isHovered ? '#ffffff' : (colorOverride || part.color)),
        transparent: true,
        opacity: isSnapped ? 1 : 0.9,
        metalness: 0.9,
        roughness: 0.05,
      };

      const material = <meshStandardMaterial ref={offset ? undefined : materialRef} {...materialProps} envMapIntensity={2} />;
      const groupProps = offset ? { position: new THREE.Vector3(...offset), rotation: rot ? new THREE.Euler(...rot) : undefined } : {};

      const geo = (() => {
        switch (type) {
          case 'sphere': return <Sphere args={[dim[0], 32, 32]}>{material}</Sphere>;
          case 'cylinder': return <Cylinder args={[dim[0], dim[1], dim[2], 32]}>{material}</Cylinder>;
          case 'capsule': return <Capsule args={[dim[0], dim[1]]}>{material}</Capsule>;
          default: return <RoundedBox args={dim} radius={0.05} smoothness={4}>{material}</RoundedBox>;
        }
      })();

      return offset ? <group {...groupProps}>{geo}</group> : geo;
    };

    if (part.type === 'group' && part.subParts) {
      return (
        <>
          {part.subParts.map((sp, idx) => (
            <React.Fragment key={idx}>
              {renderPrimitive(sp.type, sp.dim, sp.color, sp.pos, sp.rot)}
            </React.Fragment>
          ))}
        </>
      );
    }

    return renderPrimitive(part.type, part.dimensions);
  };

  return (
    // @ts-ignore
    <group
      ref={meshRef}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      onPointerOver={() => !isSnapped && setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
      rotation={part.rotation ? new THREE.Euler(...part.rotation) : undefined}
    >
      {renderGeometry()}

      {(isDragging || isSnapped) && (
        // @ts-ignore
        <pointLight
          intensity={isSnapped ? 0.8 : 2.5}
          distance={5}
          color={part.color}
          position={[0, 0, 0]}
        />
      )}

      {showDragIndicator && !isSnapped && !isDragging && (
        <group ref={tutorialGroupRef}>
          <Html distanceFactor={10}>
            <div className="flex flex-col items-center pointer-events-none select-none transition-opacity duration-300">
              <div className="text-5xl mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                👆
              </div>
              <div className="bg-white/90 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-xl border border-white/20 whitespace-nowrap">
                DRAG HERE
              </div>
            </div>
          </Html>
        </group>
      )}

      {isHovered && !isSnapped && !isDragging && !showDragIndicator && (
        <Html distanceFactor={10}>
          <div className="bg-black/90 text-white text-[12px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none transform -translate-y-12 -translate-x-1/2 shadow-xl border border-white/20 select-none">
            {part.name}
          </div>
        </Html>
      )}
    </group>
  );
};

export default PuzzlePiece;
