import React from 'react';
import { ViewMode } from '../types/ism';
import { Sparkles } from 'lucide-react';

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
    <header className="flex items-center justify-between gap-8 px-6 py-3.5 border-b border-stone-800 bg-stone-950/90 backdrop-blur-md shrink-0 z-30 select-none">
      {/* Zone 1: Single text element wordmark */}
      <div className="flex items-center gap-3 shrink-0">
        <a
          href="/"
          className="text-lg font-bold tracking-tight text-stone-100 font-serif-sc whitespace-nowrap shrink-0 hover:text-amber-400 transition-colors"
        >
          主义星图 · 思想全景图谱
        </a>
      </div>

      {/* Zone 2: 4 clean single-line navigation controls */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-400">
        <button
          onClick={() => onSelectView('constellation')}
          className={`hover:text-stone-100 transition-colors whitespace-nowrap shrink-0 ${
            currentView === 'constellation' ? 'text-amber-400 font-semibold' : ''
          }`}
        >
          意识形态星图
        </button>
        <button
          onClick={() => onSelectView('timeline')}
          className={`hover:text-stone-100 transition-colors whitespace-nowrap shrink-0 ${
            currentView === 'timeline' ? 'text-amber-400 font-semibold' : ''
          }`}
        >
          历史演化长河
        </button>
        <button
          onClick={() => onSelectView('compass')}
          className={`hover:text-stone-100 transition-colors whitespace-nowrap shrink-0 ${
            currentView === 'compass' ? 'text-amber-400 font-semibold' : ''
          }`}
        >
          哲学价值罗盘
        </button>
        <button
          onClick={onOpenCompare}
          className="hover:text-stone-100 transition-colors whitespace-nowrap shrink-0"
        >
          思想对决矩阵
        </button>
      </nav>

      {/* Zone 3: Actions */}
      <div className="flex items-center gap-2.5 shrink-0">
        <button
          onClick={onOpenMusic}
          className="px-3 py-2 text-xs font-medium text-stone-300 hover:text-white bg-stone-800/80 hover:bg-stone-700/80 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 border border-stone-700/60"
          title="生成时代氛围原声 (Lyria)"
        >
          <span>🎵 时代原声</span>
        </button>
        <button
          onClick={onOpenQuiz}
          className="px-4 py-2 text-xs font-medium text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-md shadow-amber-400/10 font-semibold"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>思想自测罗盘</span>
        </button>
      </div>
    </header>
  );
};
