
import React, { useState, useEffect } from 'react';
import { LEVELS } from './constants';
import { GameState } from './types';
import Game from './components/Game';
import MapScreen from './components/MapScreen';
import PromoMode from './components/PromoMode';
import { audioService } from './services/audioService';
import { adMobService } from './services/adMobService';

function getScreenshotParams(): { view: 'menu' | 'map' | 'game' | 'promo'; level: number; progress: number } | null {
  const params = new URLSearchParams(window.location.search);
  if (params.get('promo') === '1') return { view: 'promo', level: 1, progress: 0 };
  if (params.get('screenshot') !== '1') return null;
  const view = (params.get('view') || 'menu') as 'menu' | 'map' | 'game' | 'promo';
  const level = Math.max(1, Math.min(LEVELS.length, parseInt(params.get('level') || '1', 10)));
  const progress = Math.max(0, Math.min(100, parseInt(params.get('progress') || '100', 10)));
  return { view, level, progress };
}

const App: React.FC = () => {
  const screenshot = React.useMemo(getScreenshotParams, []);
  const [gameState, setGameState] = useState<GameState>(
    screenshot?.view === 'map' ? GameState.MAP : screenshot?.view === 'game' ? GameState.PLAYING : GameState.MENU
  );
  const [currentLevelIdx, setCurrentLevelIdx] = useState(screenshot?.view === 'game' ? (screenshot.level - 1) : 0);

  useEffect(() => {
    adMobService.initialize();
  }, []);

  const [unlockedLevelIdx, setUnlockedLevelIdx] = useState(() => {
    const scr = getScreenshotParams();
    if (scr?.view === 'map' || scr?.view === 'game') return Math.max(14, LEVELS.length - 1);
    const saved = localStorage.getItem('unlockedLevelIdx');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [coins, setCoins] = useState(() => {
    const saved = localStorage.getItem('coins');
    return saved ? parseInt(saved, 10) : 760;
  });

  const [stars, setStars] = useState(3);
  const [lives, setLives] = useState(() => {
    const saved = localStorage.getItem('lives');
    return saved ? parseInt(saved, 10) : 4;
  });
  const [hintCount, setHintCount] = useState(() => {
    const saved = localStorage.getItem('hintCount');
    return saved ? parseInt(saved, 10) : 0;
  });

  const handleAddHints = (count: number) => {
    setHintCount(prev => prev + count);
  };



  useEffect(() => {
    localStorage.setItem('lives', lives.toString());
  }, [lives]);
  useEffect(() => {
    localStorage.setItem('hintCount', hintCount.toString());
  }, [hintCount]);

  const startLevel = (index: number) => {
    if (index > unlockedLevelIdx) return;
    audioService.playClickSound();
    setCurrentLevelIdx(index);
    setGameState(GameState.PLAYING);
    window.scrollTo(0, 0);
  };

  const handleLevelComplete = () => {
    setCoins(prev => {
      const newCoins = prev + 150;
      localStorage.setItem('coins', newCoins.toString());
      return newCoins;
    });
    setStars(prev => prev + 1);

    const nextIdx = currentLevelIdx + 1;
    if (nextIdx > unlockedLevelIdx && nextIdx < LEVELS.length) {
      setUnlockedLevelIdx(nextIdx);
      localStorage.setItem('unlockedLevelIdx', nextIdx.toString());
    }
    setGameState(GameState.MAP);
  };

  const exitToMap = () => {
    setGameState(GameState.MAP);
  };

  const goHome = () => {
    audioService.playClickSound();
    setGameState(GameState.MENU);
  };

  const handleAddCoins = (amount: number) => {
    setCoins(prev => {
      const newCoins = prev + amount;
      localStorage.setItem('coins', newCoins.toString());
      return newCoins;
    });
  };

  const handleSpendCoins = (amount: number): boolean => {
    if (coins < amount) return false;
    setCoins(prev => {
      const newCoins = prev - amount;
      localStorage.setItem('coins', newCoins.toString());
      return newCoins;
    });
    return true;
  };

  const handleAddLife = () => {
    setLives(prev => prev + 1);
  };

  const handleUnlockNextLevel = async () => {
    // Show Ad before next level ONLY if player has passed Level 3 (index 2)
    // unlockedLevelIdx starts at 0 (Level 1).
    // So if unlockedLevelIdx is 0 (Level 1) -> No Ad
    // If unlockedLevelIdx is 1 (Level 2) -> No Ad
    // If unlockedLevelIdx is 2 (Level 3) -> Show Ad
    if (unlockedLevelIdx >= 2) {
      await adMobService.showInterstitial();
    }

    if (unlockedLevelIdx < LEVELS.length - 1) {
      setUnlockedLevelIdx(prev => {
        const next = prev + 1;
        localStorage.setItem('unlockedLevelIdx', next.toString());
        return next;
      });
    }
  };

  const handleUseHint = () => {
    setHintCount(prev => Math.max(0, prev - 1));
  };

  if (screenshot?.view === 'promo') {
    return <PromoMode />;
  }

  if (gameState === GameState.MAP) {
    return (
      <MapScreen
        unlockedLevelIdx={unlockedLevelIdx}
        onPlayLevel={startLevel}
        onGoHome={goHome}
        coins={coins}
        stars={stars}
        lives={lives}
        hintCount={hintCount}
        onAddCoins={handleAddCoins}
        onSpendCoins={handleSpendCoins}
        onAddLife={handleAddLife}
        onUnlockNextLevel={handleUnlockNextLevel}
        onAddHints={handleAddHints}
      />
    );
  }

  if (gameState === GameState.PLAYING) {
    const currentLevel = LEVELS[currentLevelIdx];
    const previewProgress = screenshot?.view === 'game' ? screenshot.progress : undefined;
    return (
      <div className="fixed inset-0 w-full h-screen bg-[#020617] overflow-hidden">
        <Game
          key={`${currentLevel.id}-${previewProgress ?? 0}`}
          level={currentLevel}
          onLevelComplete={handleLevelComplete}
          onExit={exitToMap}
          isLastLevel={currentLevelIdx === LEVELS.length - 1}
          hintCount={hintCount}
          onUseHint={handleUseHint}
          previewProgress={previewProgress}
        />
      </div>
    );
  }

  // REDESIGNED MAIN MENU (START SCREEN)
  return (
    <div className="fixed inset-0 bg-[#4C1D95] flex flex-col items-center justify-center overflow-hidden font-sans text-white select-none">
      {/* Purple/Violet Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#8B5CF6_0%,#4C1D95_100%)]"></div>

      {/* Floating Hexagons for Aesthetic Depth */}
      <div className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute border-4 border-white rotate-45 rounded-[1.5rem]"
            style={{
              width: `${60 + Math.random() * 80}px`,
              height: `${60 + Math.random() * 80}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-anim ${10 + Math.random() * 20}s infinite linear`,
              opacity: 0.1 + Math.random() * 0.2
            }}
          ></div>
        ))}
      </div>

      {/* Title/Branding Section */}
      <div className="relative z-10 text-center mb-16 px-6 animate-in fade-in zoom-in duration-1000">
        <div className="flex items-center justify-center gap-2 mb-4 opacity-70">
          <div className="h-1 w-6 bg-white/30 rounded-full"></div>
          <span className="text-[10px] font-black tracking-[0.6em] uppercase">3D Master Jingo</span>
          <div className="h-1 w-6 bg-white/30 rounded-full"></div>
        </div>

        <h1 className="text-7xl md:text-8xl font-black italic tracking-tighter text-white drop-shadow-[0_10px_0_#000] leading-none mb-2">
          3D MASTER <span className="text-yellow-400">JINGO</span>
        </h1>
        <p className="text-white/80 text-sm font-bold uppercase tracking-widest italic drop-shadow-lg">
          Discover and Build Models
        </p>
      </div>

      {/* Main Action Button Area */}
      <div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-10 animate-in slide-in-from-bottom-12 fade-in duration-1000 delay-300">

        {/* The Big BAŞLA Button (Styled exactly like the reference map button) */}
        <button
          onClick={() => {
            audioService.playClickSound();
            audioService.startBackgroundMusic();
            setGameState(GameState.MAP);
          }}
          className="group relative w-full px-4 active:translate-y-2 transition-all"
        >
          {/* 3D Black Depth Shadow */}
          <div className="absolute inset-x-4 inset-y-0 bg-black rounded-[2.2rem] translate-y-3 shadow-2xl"></div>

          {/* Main Button Body - Yellow Gradient */}
          <div className="relative bg-gradient-to-b from-[#FFEA4D] via-[#FFD600] to-[#F9A825] border-[6px] border-black rounded-[2.2rem] py-6 flex items-center justify-center">
            <span className="text-white font-[1000] text-6xl tracking-tighter uppercase italic drop-shadow-[0_5px_0_rgba(0,0,0,1)] [-webkit-text-stroke:3px_black]">
              START
            </span>

            {/* Top Gloss Highlight */}
            <div className="absolute top-2 left-10 right-10 h-5 bg-white/40 rounded-full blur-[2px]"></div>
          </div>
        </button>


      </div>

      <div className="absolute bottom-8 text-center opacity-50 px-6">
        <p className="text-[10px] font-black tracking-[0.4em] uppercase text-white drop-shadow-md">
          © 2026 IROKA GAMES // ALL RIGHTS RESERVED
        </p>
      </div>

      <style>{`
        @keyframes float-anim {
          from { transform: rotate(45deg) translate(0, 0); }
          to { transform: rotate(405deg) translate(20px, 40px); }
        }
      `}</style>
    </div>
  );
};

export default App;
