import React, { useState, useEffect } from 'react';
import { ViewMode } from '../types/ism';
import { Sparkles, Radio, Swords, Compass, Clock, Network, Volume2, VolumeX } from 'lucide-react';
import { audioEngine, BackgroundAudioState } from '../utils/audioEngine';

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
  const [bgAudio, setBgAudio] = useState<BackgroundAudioState>(() => audioEngine.getBackgroundState());

  useEffect(() => {
    return audioEngine.subscribeBackgroundState((state) => {
      setBgAudio(state);
    });
  }, []);

  const handleToggleBgMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    audioEngine.toggleMute();
  };

  const isAudioActive = bgAudio.isPlaying && !bgAudio.isMuted;

  return (
    <header className="flex items-center justify-between gap-4 px-4 md:px-6 py-3 border-b border-white/10 bg-black/90 backdrop-blur-xl shrink-0 z-30 select-none text-white font-mono">
      {/* Zone 1: Minimalist Wordmark */}
      <div className="flex items-center gap-3 shrink-0">
        <a
          href="/"
          className="flex items-center gap-2 text-white tracking-[0.16em] uppercase hover:opacity-85 transition-opacity"
        >
          <span className="font-extrabold text-sm tracking-[0.24em] text-white">
            IDEOLOGY
          </span>
          <span className="text-zinc-600 font-light">/</span>
          <span className="text-xs font-medium tracking-wider text-zinc-300 hidden sm:inline">
            主义星图 · 思想全景图谱
          </span>
        </a>
      </div>

      {/* Zone 2: Navigation Tabs */}
      <nav className="flex items-center gap-4 md:gap-7 text-xs uppercase tracking-[0.16em]">
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
          <span className="text-[10px] text-zinc-500 hidden md:inline">// 星图</span>
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
          <span className="text-[10px] text-zinc-500 hidden md:inline">// 长河</span>
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
          <span className="text-[10px] text-zinc-500 hidden md:inline">// 罗盘</span>
        </button>

        <button
          onClick={onOpenCompare}
          className="pb-1 transition-all flex items-center gap-1.5 text-zinc-400 hover:text-white"
        >
          <Swords className="w-3.5 h-3.5 opacity-70" />
          <span>MATRIX</span>
          <span className="text-[10px] text-zinc-500 hidden md:inline">// 对决</span>
        </button>
      </nav>

      {/* Zone 3: Background Music & Action Controls */}
      <div className="flex items-center gap-2.5 shrink-0">
        {/* Background Ambient Audio & Era Soundtrack Controller */}
        <div className="flex items-center bg-white/5 border border-white/15 rounded-lg overflow-hidden shadow-sm hover:border-white/35 transition-all">
          <button
            onClick={handleToggleBgMusic}
            className={`px-2.5 py-1.5 transition-colors flex items-center justify-center gap-1.5 ${
              isAudioActive
                ? 'text-cyan-400 bg-cyan-500/15 hover:bg-cyan-500/25'
                : 'text-zinc-400 hover:text-white hover:bg-white/10'
            }`}
            title={isAudioActive ? '点击静音背景音乐 (Mute)' : '点击开启背景音乐 (Play)'}
          >
            {isAudioActive ? (
              <span className="flex items-center gap-1.5">
                <Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span className="flex items-center gap-0.5">
                  <span className="w-0.5 h-2 bg-cyan-400 animate-[bounce_1s_infinite_100ms]" />
                  <span className="w-0.5 h-3 bg-cyan-400 animate-[bounce_1s_infinite_250ms]" />
                  <span className="w-0.5 h-1.5 bg-cyan-400 animate-[bounce_1s_infinite_400ms]" />
                </span>
                <span className="text-[10px] hidden sm:inline text-cyan-300 font-medium">原声: 播放中</span>
              </span>
            ) : (
              <span className="flex items-center gap-1 text-zinc-400">
                <VolumeX className="w-3.5 h-3.5 text-rose-400/90" />
                <span className="text-[10px] hidden sm:inline">背景已静音</span>
                <span className="text-[9px] px-1 py-0.5 rounded bg-white/10 text-zinc-300 hidden md:inline ml-0.5">播放</span>
              </span>
            )}
          </button>
          <button
            onClick={onOpenMusic}
            className="px-2.5 py-1.5 text-[11px] uppercase tracking-wider text-zinc-300 hover:text-white border-l border-white/10 flex items-center gap-1.5 hover:bg-white/5 transition-colors"
            title="时代原声中心 // 更改背景音乐曲目、暂停播放或调节音量"
          >
            <Radio className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="text-zinc-400 text-[10px] hidden lg:inline">时代原声:</span>
            <span className="text-white font-medium max-w-[85px] sm:max-w-[125px] truncate">
              {bgAudio.currentTrackName.split('//')[0].trim()}
            </span>
          </button>
        </div>

        <button
          onClick={onOpenQuiz}
          className="px-3.5 py-1.5 text-[11px] uppercase tracking-[0.14em] text-black bg-white hover:bg-zinc-200 font-bold rounded-lg transition-all flex items-center gap-1.5 shadow-sm hover:shadow-md"
          title="意识形态全维自测"
        >
          <Sparkles className="w-3.5 h-3.5 text-black" />
          <span className="hidden sm:inline">思想自测 // </span>
          <span>TEST</span>
        </button>
      </div>
    </header>
  );
};
