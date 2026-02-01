
import React, { useState, useEffect } from 'react';
import { LevelData } from '../types';
import { getHint } from '../services/geminiService';
import { audioService } from '../services/audioService';

interface UIProps {
  level: LevelData;
  snappedCount: number;
  totalCount: number;
  fact: string | null;
  isCompleted: boolean;
  onLevelComplete: () => void;
  onExit: () => void;
  isLastLevel?: boolean;
  tutorialStep?: 'ROTATE' | 'ZOOM' | 'DRAG' | 'PLAY';
  hintCount: number;
  onUseHint: () => void;
}

const UI: React.FC<UIProps> = ({ level, snappedCount, totalCount, fact, isCompleted, onLevelComplete, onExit, isLastLevel, tutorialStep, hintCount, onUseHint }) => {
  const [hint, setHint] = useState<string | null>(null);
  const [loadingHint, setLoadingHint] = useState(false);
  const [noHintMessage, setNoHintMessage] = useState<string | null>(null);

  const isTutorial = level.id === 1 || level.id === 2;

  useEffect(() => {
    if (isTutorial && !isCompleted) {
      if (level.id === 1) {
        if (tutorialStep === 'ROTATE') {
          setHint("Swipe on screen to rotate the camera!");
        } else if (tutorialStep === 'ZOOM') {
          setHint("Pinch with two fingers to zoom in or out!");
        } else if (tutorialStep === 'PLAY') {
          if (snappedCount === 0) {
            setHint("Great! Now tap the pieces to snap them automatically.");
          } else {
            setHint(null);
          }
        }
      } else if (level.id === 2) {
        setHint(null);
      }
    }
  }, [isTutorial, tutorialStep, snappedCount, isCompleted, level.id]);

  const fetchHint = async () => {
    if (loadingHint || isCompleted || isTutorial) return;
    if (hintCount <= 0) {
      audioService.playClickSound();
      setNoHintMessage('No hints left. Buy more in the shop!');
      setTimeout(() => setNoHintMessage(null), 2500);
      return;
    }
    audioService.playClickSound();
    onUseHint();
    setLoadingHint(true);
    const h = await getHint(level.title, totalCount - snappedCount);
    setHint(h);
    setLoadingHint(false);
    setTimeout(() => setHint(null), 4000);
  };

  const handleLevelComplete = () => {
    audioService.playClickSound();
    onLevelComplete();
  };

  const handleExit = () => {
    audioService.playClickSound();
    onExit();
  };

  const progress = (snappedCount / totalCount) * 100;

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 font-sans">
      {/* Top HUD - Optimized for iPhone 16 Pro Max */}
      <div
        className="flex justify-between items-start pointer-events-auto"
        style={{ paddingTop: 'calc(env(safe-area-inset-top, 20px) + 12px)' }}
      >
        <button
          onClick={handleExit}
          className="bg-black/30 hover:bg-black/50 backdrop-blur-xl text-white px-5 py-2.5 rounded-2xl border border-white/10 shadow-xl transition-all flex items-center gap-2 active:scale-95 group"
        >
          <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">EXIT</span>
        </button>

        <div className="text-right">
          {isTutorial && (
            <p className="text-yellow-400 text-[8px] font-black uppercase tracking-[0.4em] animate-pulse">TUTORIAL</p>
          )}
          {!isTutorial && (
            <p className="text-blue-400 text-[8px] font-black uppercase tracking-[0.4em] opacity-60">CURRENT MISSION</p>
          )}
          <h1 className="text-white text-2xl md:text-3xl font-black italic tracking-tighter drop-shadow-2xl uppercase leading-none">
            LEVEL {level.id}
          </h1>
        </div>
      </div>

      {/* Central Notification Area */}
      <div className="flex flex-col items-center justify-center gap-4">
        {noHintMessage && (
          <div className="backdrop-blur-2xl bg-amber-600/95 text-white px-8 py-5 rounded-[2.5rem] shadow-2xl border border-amber-400/30 animate-in fade-in slide-in-from-top-4 pointer-events-auto max-w-xs text-center">
            <p className="font-bold leading-relaxed tracking-tight italic text-sm">"{noHintMessage}"</p>
          </div>
        )}
        {hint && (
          <div className={`
            backdrop-blur-2xl text-white px-8 py-5 rounded-[2.5rem] shadow-2xl border border-white/20 animate-in fade-in slide-in-from-top-4 pointer-events-auto max-w-xs text-center
            ${isTutorial ? 'bg-indigo-600/95 shadow-indigo-500/40 border-indigo-400/30' : 'bg-blue-600/95 shadow-blue-500/40'}
          `}>
            <div className="flex flex-col items-center gap-2">
              {isTutorial && (
                <div className="text-4xl mb-2 animate-bounce">
                  {tutorialStep === 'ROTATE' ? '🔄' : (tutorialStep === 'ZOOM' ? '🔍' : (tutorialStep === 'DRAG' ? '👆' : '👉'))}
                </div>
              )}
              <p className="font-bold leading-relaxed tracking-tight italic text-sm">"{hint}"</p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Interface */}
      <div className="space-y-6 max-w-2xl mx-auto w-full" style={{ paddingBottom: 'env(safe-area-inset-bottom, 20px)' }}>
        {!isCompleted && (
          <div className="flex justify-between items-end pointer-events-auto">
            {/* Progress Visualization */}
            <div className="bg-black/40 backdrop-blur-xl p-4 rounded-3xl border border-white/10 flex flex-col gap-1">
              <span className="text-blue-400 text-[8px] font-black uppercase tracking-[0.3em]">ASSEMBLY STATUS</span>
              <div className="w-40 md:w-48 h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 transition-all duration-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-[10px] font-bold text-white/60 mt-1 uppercase tracking-wider">
                <span>{snappedCount} Parts</span>
                <span>{totalCount} Total</span>
              </div>
            </div>

            {/* Hint Trigger */}
            <div className="flex flex-col items-center gap-1">
              <button
                onClick={fetchHint}
                disabled={loadingHint || isTutorial}
                className={`
                  w-14 h-14 md:w-16 md:h-16 bg-white/10 hover:bg-white/20 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-xl flex items-center justify-center transition-all active:scale-90 group disabled:opacity-30
                  ${isTutorial ? 'cursor-not-allowed opacity-20' : 'cursor-pointer'}
                `}
              >
                <span className={`text-2xl transition-transform ${loadingHint ? 'animate-spin' : 'group-hover:rotate-12'}`}>💡</span>
              </button>
              {!isTutorial && (
                <span className="text-[10px] font-bold text-white/70">Hints: {hintCount}</span>
              )}
            </div>
          </div>
        )}

        {isCompleted && fact && (
          <div className="bg-slate-900/95 backdrop-blur-3xl p-8 md:p-10 rounded-[3rem] shadow-2xl pointer-events-auto border border-white/10 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-blue-600 text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(37,99,235,0.4)]">DID YOU KNOW?</span>
            </div>
            <p className="text-white text-xl md:text-2xl leading-relaxed font-bold italic mb-8 md:mb-10 tracking-tight">"{fact}"</p>
            <button
              onClick={handleLevelComplete}
              className="w-full bg-white text-black font-black py-5 md:py-6 rounded-[2rem] text-lg md:text-xl tracking-tighter transition-all hover:bg-blue-100 shadow-[0_15px_35px_rgba(255,255,255,0.2)] active:scale-95 uppercase italic"
            >
              {isLastLevel ? "FINISH" : "NEXT LEVEL"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UI;