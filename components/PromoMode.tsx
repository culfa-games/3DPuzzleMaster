
import React, { useState, useEffect } from 'react';
import { LEVELS } from '../constants';
import Game from './Game';
import { audioService } from '../services/audioService';

const PROMO_STAGES = [
    { levelId: 10, duration: 4000 }, // Rocket
    { levelId: 11, duration: 4000 }, // Robot
    { levelId: 1, duration: 4000 },  // Horse
    { levelId: 15, duration: 4000 }  // Dragon
];

const PromoMode: React.FC = () => {
    const [stageIdx, setStageIdx] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        // Start background music for the promo video
        audioService.startBackgroundMusic();
    }, []);

    useEffect(() => {
        const stage = PROMO_STAGES[stageIdx];
        let startTime = Date.now();

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const p = Math.min(100, (elapsed / (stage.duration - 2000)) * 100);
            setProgress(p);

            if (elapsed > stage.duration) {
                setIsTransitioning(true);
                setTimeout(() => {
                    setStageIdx((prev) => (prev + 1) % PROMO_STAGES.length);
                    setProgress(0);
                    setIsTransitioning(false);
                    startTime = Date.now();
                }, 1000);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [stageIdx]);

    const currentLevel = LEVELS.find(l => l.id === PROMO_STAGES[stageIdx].levelId) || LEVELS[0];

    return (
        <div className={`fixed inset-0 bg-black transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <div className="absolute top-10 left-0 right-0 z-50 text-center pointer-events-none">
                <h1 className="text-4xl font-black italic text-white drop-shadow-[0_4px_0_#000] tracking-tighter uppercase">
                    {currentLevel.title}
                </h1>
                <p className="text-yellow-400 font-bold tracking-[0.3em] text-sm mt-2 animate-pulse">
                    BUILDING YOUR MASTERPIECE...
                </p>
            </div>

            <Game
                key={currentLevel.id}
                level={currentLevel}
                onLevelComplete={() => { }}
                onExit={() => { }}
                hintCount={0}
                onUseHint={() => { }}
                previewProgress={progress}
            />

            <div className="absolute bottom-10 left-0 right-0 z-50 flex flex-col items-center pointer-events-none">
                <div className="bg-black/50 backdrop-blur-md border border-white/20 rounded-full px-8 py-3">
                    <span className="text-white font-black italic tracking-widest text-xl">
                        3D PUZZLE MASTER
                    </span>
                </div>
            </div>

            {/* Decorative Overlays for "Video" feel */}
            <div className="absolute inset-0 pointer-events-none border-[20px] border-white/5"></div>
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
    );
};

export default PromoMode;
