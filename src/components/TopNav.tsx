import React from 'react';
import { ViewMode } from '../types/ism';
import { Sparkles, Radio, Swords, Compass, Clock, Network } from 'lucide-react';

interface TopNavProps {
  currentView: ViewMode;
  onSelectView: (view: ViewMode) => void;
  onOpenCompare: () => void;
  onOpenQuiz: () => void;
  onOpenMusic: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  currentView,
  onSelectView,
  onOpenCompare,
  onOpenQuiz,
  onOpenMusic,
}) => {
  return (
    <header className="flex items-center justify-between gap-6 px-6 py-3 border-b border-white/10 bg-black/90 backdrop-blur-xl shrink-0 z-30 select-none text-white font-mono">
      {/* Zone 1: Minimalist Wordmark */}
      <div className="flex items-center gap-3 shrink-0">
        <a
          href="/"
          className="flex items-center gap-2.5 text-white tracking-[0.16em] uppercase hover:opacity-85 transition-opacity"
        >
          <span className="font-extrabold text-sm tracking-[0.24em] text-white">
            IDEOLOGY
          </span>
          <span className="text-zinc-600 font-light">/</span>
          <span className="text-xs font-medium tracking-wider text-zinc-300">
            主义星图 · 思想全景图谱
          </span>
        </a>
      </div>

      {/* Zone 2: Navigation Tabs */}
      <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.18em]">
        <button
          onClick={() => onSelectView('constellation')}
          className={`pb-1 transition-all flex items-center gap-1.5 ${
            currentView === 'constellation'
              ? 'text-white border-b-2 border-white font-bold'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Network className="w-3.5 h-3.5 opacity-70" />
          <span>CONSTELLATION</span>
          <span className="text-[10px] text-zinc-500">// 星图</span>
        </button>

        <button
          onClick={() => onSelectView('timeline')}
          className={`pb-1 transition-all flex items-center gap-1.5 ${
            currentView === 'timeline'
              ? 'text-white border-b-2 border-white font-bold'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Clock className="w-3.5 h-3.5 opacity-70" />
          <span>TIMELINE</span>
          <span className="text-[10px] text-zinc-500">// 长河</span>
        </button>

        <button
          onClick={() => onSelectView('compass')}
          className={`pb-1 transition-all flex items-center gap-1.5 ${
            currentView === 'compass'
              ? 'text-white border-b-2 border-white font-bold'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Compass className="w-3.5 h-3.5 opacity-70" />
          <span>COMPASS</span>
          <span className="text-[10px] text-zinc-500">// 罗盘</span>
        </button>

        <button
          onClick={onOpenCompare}
          className="pb-1 transition-all flex items-center gap-1.5 text-zinc-400 hover:text-white"
        >
          <Swords className="w-3.5 h-3.5 opacity-70" />
          <span>MATRIX</span>
          <span className="text-[10px] text-zinc-500">// 对决</span>
        </button>
      </nav>

      {/* Zone 3: Softened Action Controls */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={onOpenMusic}
          className="px-3.5 py-1.5 text-[11px] uppercase tracking-wider text-zinc-300 hover:text-white hover:border-white/40 border border-white/15 bg-white/5 hover:bg-white/10 rounded-lg transition-all flex items-center gap-1.5 shadow-sm"
          title="启动时代原声谐波合成器"
        >
          <Radio className="w-3.5 h-3.5 text-cyan-400" />
          <span>时代原声 // AUDIO</span>
        </button>

        <button
          onClick={onOpenQuiz}
          className="px-4 py-1.5 text-[11px] uppercase tracking-[0.14em] text-black bg-white hover:bg-zinc-200 font-bold rounded-lg transition-all flex items-center gap-1.5 shadow-sm hover:shadow-md"
          title="意识形态全维自测"
        >
          <Sparkles className="w-3.5 h-3.5 text-black" />
          <span>思想自测 // TEST</span>
        </button>
      </div>
    </header>
  );
};
