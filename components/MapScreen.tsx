
import React, { useState, useRef, useEffect } from 'react';
import { LEVELS } from '../constants';

import { audioService } from '../services/audioService';

interface MapScreenProps {
  unlockedLevelIdx: number;
  onPlayLevel: (index: number) => void;
  onGoHome: () => void;
  coins: number;
  stars: number;
  lives: number;
  hintCount: number;
  onAddCoins?: (amount: number) => void;
  onSpendCoins?: (amount: number) => boolean;
  onAddLife?: () => void;
  onUnlockNextLevel?: () => void;
  onAddHints?: (count: number) => void;
}

const MapScreen: React.FC<MapScreenProps> = ({
  unlockedLevelIdx, onPlayLevel, onGoHome, coins, stars, lives, hintCount,
  onAddCoins, onSpendCoins, onAddLife, onUnlockNextLevel, onAddHints
}) => {
  const [selectedIdx, setSelectedIdx] = useState(unlockedLevelIdx);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);

  // Auto-scroll to current level
  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollRef.current) {
        const selectedEl = document.getElementById(`level-node-${selectedIdx}`);
        if (selectedEl) {
          selectedEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [unlockedLevelIdx]);

  const handleScroll = () => {
    if (scrollRef.current) {
      setScrollTop(scrollRef.current.scrollTop);
    }
  };

  const handleSelect = (idx: number) => {
    if (idx > unlockedLevelIdx) return;
    audioService.playClickSound();
    if (idx === selectedIdx) {
      onPlayLevel(idx);
    } else {
      setSelectedIdx(idx);
    }
  };

  const handlePlay = () => {
    audioService.playClickSound();
    onPlayLevel(selectedIdx);
  };

  const [showShop, setShowShop] = useState(false);
  const [shopMessage, setShopMessage] = useState<string | null>(null);
  const LAST_DAILY_KEY = 'lastDailyRewardDate';

  const getCanClaimDaily = (): boolean => {
    try {
      const last = localStorage.getItem(LAST_DAILY_KEY);
      const today = new Date().toDateString();
      return last !== today;
    } catch { return true; }
  };
  const claimDailyReward = () => {
    if (!getCanClaimDaily() || !onAddCoins) return;
    localStorage.setItem(LAST_DAILY_KEY, new Date().toDateString());
    onAddCoins(100);
    audioService.playClickSound();
    setShopMessage('+100 coins claimed!');
    setTimeout(() => setShopMessage(null), 2000);
  };
  const buyItem = (cost: number, action: () => void, label: string): boolean => {
    if (!onSpendCoins || cost > coins) return false;
    const ok = onSpendCoins(cost);
    if (ok) {
      action();
      audioService.playClickSound();
      setShopMessage(label);
      setTimeout(() => setShopMessage(null), 2000);
    }
    return ok;
  };
  const canClaimDaily = getCanClaimDaily();

  return (
    <div className="fixed inset-0 bg-[#F0F2F5] flex flex-col overflow-hidden select-none font-sans text-slate-800">

      {/* 2. BACKGROUND: Parallax Abstract Orbs */}
      <div className="absolute inset-0 bg-slate-50 z-0 overflow-hidden">
        {/* We translate these subtle orbs based on scroll position to create depth (parallax) */}
        <div
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[40%] bg-purple-200/50 rounded-full blur-[100px] animate-pulse-slow transition-transform duration-100 ease-out"
          style={{ transform: `translateY(${scrollTop * 0.2}px)` }}
        ></div>
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[40%] bg-blue-200/50 rounded-full blur-[100px] animate-pulse-slow transition-transform duration-100 ease-out"
          style={{ animationDelay: '2s', transform: `translateY(${-scrollTop * 0.15}px)` }}
        ></div>
        <div
          className="absolute top-[40%] left-[30%] w-[40%] h-[30%] bg-pink-200/30 rounded-full blur-[80px] animate-pulse-slow transition-transform duration-100 ease-out"
          style={{ animationDelay: '4s', transform: `translateY(${scrollTop * 0.05}px)` }}
        ></div>

        {/* Subtle Grid - Fixed */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
      </div>

      {/* 3. HEADER */}
      <header
        className="relative z-50 flex justify-between items-center px-6 pt-safe-top pb-4"
        style={{ paddingTop: 'max(env(safe-area-inset-top, 20px), 24px)' }}
      >
        <button
          onClick={onGoHome}
          className="flex flex-col items-start group active:scale-95 transition-transform"
        >
          <div className="text-2xl font-black italic tracking-tighter text-slate-800 leading-none drop-shadow-sm">
            3D MASTER <span className="text-indigo-600">JINGO</span>
          </div>
        </button>

        <div className="flex items-center gap-3">
          {/* Mute Toggle Button - Small & Round */}
          <button
            onClick={() => {
              const isMuted = audioService.toggleMute();
              const icon = document.getElementById('mute-icon');
              if (icon) icon.innerText = isMuted ? '🔇' : '🔊';
            }}
            className="w-10 h-10 bg-white/50 backdrop-blur-md rounded-full shadow-sm flex items-center justify-center text-lg active:scale-95 transition-all outline-none border border-slate-200/50"
            title="Toggle Music"
          >
            <span id="mute-icon">{audioService.isMuted() ? '🔇' : '🔊'}</span>
          </button>

          <div className="bg-white/80 backdrop-blur-md rounded-full pl-2 pr-4 py-1.5 flex items-center gap-2 shadow-lg border border-slate-100">
            <div className="w-7 h-7 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs shadow-inner text-white font-bold">
              C
            </div>
            <span className="font-bold text-slate-700">{coins}</span>
          </div>

          <button
            onClick={() => {
              audioService.playClickSound();
              setShowShop(true);
            }}
            className="w-11 h-11 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg shadow-indigo-200 flex items-center justify-center text-white active:scale-95 transition-all"
          >
            <span className="text-xl">🛍️</span>
          </button>
        </div>
      </header>

      {/* 4. MAIN SCROLL */}
      <main
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto no-scrollbar relative w-full"
      >
        <div className="flex flex-col items-center w-full pb-44 pt-10 px-4 relative max-w-md mx-auto">

          {/* SVG Connector Path with animated dash */}
          <div className="absolute top-0 bottom-0 left-0 right-0 z-0 pointer-events-none">
            <svg className="w-full h-full overflow-visible">
              <path
                d={generateSmoothPath(LEVELS.length)}
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d={generateSmoothPath(LEVELS.length)}
                fill="none"
                stroke="white"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="15 15"
                className="animate-dash-flow"
              />
            </svg>
          </div>

          {LEVELS.map((level, idx) => {
            const isUnlocked = idx <= unlockedLevelIdx;
            const isSelected = idx === selectedIdx;
            const isCurrent = idx === unlockedLevelIdx;

            const xOffset = Math.sin(idx * 0.9) * 80;

            return (
              <div
                key={idx}
                id={`level-node-${idx}`}
                className="relative z-10 my-8 flex justify-center w-full"
                style={{ transform: `translateX(${xOffset}px)` }}
              >
                {isCurrent && (
                  /* Ripple Effect for Current Level */
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                    <div className="w-24 h-24 rounded-full border-4 border-indigo-400 opacity-0 animate-ripple"></div>
                    <div className="w-24 h-24 rounded-full border-4 border-purple-400 opacity-0 animate-ripple delay-500 absolute"></div>
                  </div>
                )}

                <button
                  onClick={() => handleSelect(idx)}
                  className={`
                                group relative w-20 h-20 rounded-[28px] transition-all duration-300
                                ${isUnlocked ? 'cursor-pointer hover:-translate-y-1' : 'cursor-not-allowed opacity-80'}
                                ${isSelected ? 'scale-110 z-20' : 'hover:scale-105 z-10'}
                            `}
                >
                  {/* Card Shadow */}
                  <div className={`absolute inset-0 top-3 rounded-[28px] transition-all duration-300
                                ${isCurrent ? 'bg-indigo-400 blur-lg opacity-60' : 'bg-slate-300 blur-md opacity-40'}
                            `}></div>

                  {/* Main Card Body with 3D bevel look */}
                  <div className={`
                                absolute inset-0 rounded-[28px] flex flex-col items-center justify-center border-b-[6px] transition-all overflow-hidden
                                ${isCurrent
                      ? 'bg-gradient-to-br from-indigo-500 to-purple-600 border-indigo-800 shadow-inner'
                      : isUnlocked
                        ? 'bg-white border-slate-200'
                        : 'bg-slate-100 border-slate-200'}
                            `}>
                    {/* Reflection Shine */}
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>

                    {isUnlocked ? (
                      <>
                        <span className={`text-2xl font-black drop-shadow-sm ${isCurrent ? 'text-white' : 'text-slate-700'}`}>
                          {level.id}
                        </span>
                        {!isCurrent && (
                          <div className="flex gap-0.5 mt-1">
                            <span className="text-[8px] text-yellow-400">★</span>
                            <span className="text-[8px] text-yellow-400">★</span>
                            <span className="text-[8px] text-yellow-400">★</span>
                          </div>
                        )}
                        {isCurrent && (
                          <span className="text-[8px] text-white/90 font-bold uppercase tracking-widest mt-1 animate-pulse">Play</span>
                        )}
                      </>
                    ) : (
                      <span className="text-xl text-slate-300">🔒</span>
                    )}
                  </div>

                  {/* Selection Glow */}
                  {isSelected && (
                    <div className="absolute -inset-1 border-2 border-indigo-400/50 rounded-[32px] animate-pulse"></div>
                  )}
                </button>
              </div>
            )
          })}
        </div>
      </main>

      {/* 5. FOOTER */}
      <div className="absolute bottom-8 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
        <button
          onClick={handlePlay}
          className="pointer-events-auto w-full max-w-xs group relative active:scale-95 transition-transform"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-md opacity-40 group-hover:opacity-70 transition-opacity"></div>
          <div className="relative bg-gradient-to-r from-indigo-600 to-purple-700 h-16 rounded-2xl flex items-center justify-center gap-3 shadow-xl overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"></div>

            <span className="text-white font-bold text-lg tracking-widest uppercase relative z-10">Start Level {selectedIdx + 1}</span>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white text-sm relative z-10">▶</div>
          </div>
        </button>
      </div>

      {showShop && (
        <div
          className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-4 animate-in fade-in duration-200"
          onClick={() => setShowShop(false)}
        >
          <div
            className="bg-white w-full sm:max-w-sm sm:rounded-[2rem] rounded-t-[2rem] shadow-2xl relative overflow-hidden max-h-[90vh] flex flex-col animate-in slide-in-from-bottom"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
              <div>
                <h2 className="text-2xl font-black text-slate-800 tracking-tight">Shop</h2>
                <p className="text-slate-500 text-sm font-medium">Balance: <span className="text-indigo-600 font-bold">{coins}</span> coins</p>
              </div>
              <button
                onClick={() => { audioService.playClickSound(); setShowShop(false); }}
                className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-200 transition-colors"
              >✕</button>
            </div>

            <div className="p-6 space-y-4 overflow-y-auto">
              {shopMessage && (
                <div className="bg-emerald-50 text-emerald-600 text-center py-3 rounded-xl text-sm font-bold border border-emerald-100 animate-in fade-in">
                  {shopMessage}
                </div>
              )}


              <div
                onClick={claimDailyReward}
                className={`relative overflow-hidden p-5 rounded-2xl border-2 transition-all group
                        ${canClaimDaily
                    ? 'border-indigo-100 bg-indigo-50/50 cursor-pointer hover:border-indigo-200'
                    : 'border-slate-100 bg-slate-50 cursor-not-allowed opacity-70'}
                    `}
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl">🎁</div>
                  <div className="flex-1">
                    <div className="text-base font-bold text-slate-800">Daily Gift</div>
                    <div className="text-xs text-slate-500 font-medium">Come back every day!</div>
                  </div>
                  <div className={`px-3 py-1.5 rounded-lg text-xs font-bold ${canClaimDaily ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-slate-200 text-slate-400'}`}>
                    {canClaimDaily ? 'CLAIM' : 'DONE'}
                  </div>
                </div>
              </div>

              <div className="text-center p-6 text-slate-400 text-sm">
                Watch ads to earn rewards! 📺
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global CSS */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.1); opacity: 0.7; }
        }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }

        @keyframes dash-flow {
            to { stroke-dashoffset: -30; }
        }
        .animate-dash-flow { animation: dash-flow 1s linear infinite; }

        @keyframes ripple {
            0% { transform: scale(0.8); opacity: 1; border-width: 4px; }
            100% { transform: scale(2); opacity: 0; border-width: 0px; }
        }
        .animate-ripple { animation: ripple 2s cubic-bezier(0, 0.2, 0.8, 1) infinite; }

        @keyframes shimmer {
            0% { transform: translateX(-150%); }
            100% { transform: translateX(150%); }
        }
        .animate-shimmer { animation: shimmer 2s infinite linear; }
      `}</style>
    </div>
  );
};

// SVG Path Generator Helper
const generateSmoothPath = (levelCount: number) => {
  // Let's assume a width of 400 for the SVG coordinate system
  const mid = 200;
  let d = `M ${mid} 40 `;

  for (let i = 0; i < levelCount - 1; i++) {
    const yStart = 40 + i * 112 + 40;
    const yEnd = 40 + (i + 1) * 112 + 40;

    const xStart = mid + Math.sin(i * 0.9) * 80;
    const xEnd = mid + Math.sin((i + 1) * 0.9) * 80;

    const cpY1 = yStart + 50;
    const cpY2 = yEnd - 50;

    d += `M ${xStart} ${yStart} C ${xStart} ${cpY1}, ${xEnd} ${cpY2}, ${xEnd} ${yEnd} `;
  }
  return d;
}

const ModernShopItem = ({ icon, title, sub, cost, canBuy, action, buyItem }: any) => {
  return (
    <button
      onClick={() => buyItem(cost, action, `${title} purchased!`)}
      disabled={!canBuy}
      className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all active:scale-[0.98]
            ${canBuy
          ? 'bg-white border-slate-100 hover:border-indigo-100 shadow-sm'
          : 'bg-slate-50 border-slate-100 opacity-60 cursor-not-allowed'}
            `}
    >
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl
                    ${canBuy ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-200 text-slate-400'}
                `}>{icon}</div>
        <div className="text-left">
          <div className="font-bold text-slate-800 text-sm">{title}</div>
          <div className="text-xs text-slate-500 font-medium">{sub}</div>
        </div>
      </div>

      <div className={`font-black text-sm px-3 py-1 rounded-full
                 ${canBuy ? 'bg-slate-800 text-white' : 'bg-slate-200 text-slate-400'}
            `}>
        {cost}
      </div>
    </button>
  );
}

export default MapScreen;