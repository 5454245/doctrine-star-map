import React, { useState } from 'react';
import { IsmNode, IsmRelationship, ViewMode } from '../types/ism';
import {
  X,
  ArrowRight,
  BookOpen,
  Quote,
  ShieldAlert,
  Radio,
  Swords,
  GitCommit,
  Compass,
  Clock,
  Network,
  Maximize2,
  ChevronDown,
  Layers,
  Sparkles
} from 'lucide-react';

interface IsmDetailModalProps {
  node: IsmNode | null;
  relationships: IsmRelationship[];
  allNodes: IsmNode[];
  currentView?: ViewMode;
  onSelectView?: (view: ViewMode) => void;
  onClose: () => void;
  onSelectNode: (node: IsmNode) => void;
  onOpenCompare: (node: IsmNode) => void;
  onOpenMusic: (node: IsmNode) => void;
  isDocked?: boolean;
  onToggleDock?: () => void;
}

export const IsmDetailModal: React.FC<IsmDetailModalProps> = ({
  node,
  relationships,
  allNodes,
  currentView = 'constellation',
  onSelectView,
  onClose,
  onSelectNode,
  onOpenCompare,
  onOpenMusic,
  isDocked: controlledDocked,
  onToggleDock,
}) => {
  const [internalDocked, setInternalDocked] = useState(false);
  const isDocked = controlledDocked !== undefined ? controlledDocked : internalDocked;

  const handleToggleDock = () => {
    if (onToggleDock) {
      onToggleDock();
    } else {
      setInternalDocked((prev) => !prev);
    }
  };

  if (!node) return null;

  const relatedLinks = relationships.filter(
    (r) => r.source === node.id || r.target === node.id
  );

  const nodeMap = new Map(allNodes.map((n) => [n.id, n]));

  // When docked, display a sleek, non-intrusive floating HUD bar at the bottom
  // This allows 100% full-screen exploration of Timeline or Compass with zero obstruction!
  if (isDocked) {
    return (
      <aside
        aria-label="主义档案快捷底栏"
        className="fixed bottom-4 inset-x-3 sm:inset-x-8 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[760px] lg:w-[880px] bg-zinc-950/95 backdrop-blur-2xl border border-white/20 rounded-2xl px-4 py-3 shadow-2xl z-40 flex items-center justify-between gap-3 text-white font-mono animate-in fade-in slide-in-from-bottom-4 duration-200"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="w-3.5 h-3.5 rounded-full shrink-0 shadow-sm"
            style={{ backgroundColor: node.color, boxShadow: `0 0 10px ${node.color}` }}
          />
          <div className="min-w-0">
            <div className="flex items-baseline gap-2 truncate">
              <span className="font-bold text-sm text-white tracking-wide truncate">{node.name}</span>
              <span className="text-[10px] text-zinc-400 hidden sm:inline">[{node.englishName}]</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-cyan-300 border border-white/10 hidden md:inline">
                {node.period.split('（')[0]}
              </span>
            </div>
            <div className="text-[10px] text-zinc-400 font-sans truncate hidden sm:block">
              {node.summary}
            </div>
          </div>
        </div>

        {/* View Switchers & Controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Quick Jump Buttons */}
          <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-0.5 text-xs">
            <button
              type="button"
              onClick={() => onSelectView?.('constellation')}
              className={`px-2 py-1 rounded transition-colors flex items-center gap-1 text-[11px] ${
                currentView === 'constellation'
                  ? 'bg-white/20 text-white font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
              title="在星图中查看"
            >
              <Network className="w-3 h-3" />
              <span className="hidden lg:inline">星图</span>
            </button>
            <button
              type="button"
              onClick={() => onSelectView?.('timeline')}
              className={`px-2 py-1 rounded transition-colors flex items-center gap-1 text-[11px] ${
                currentView === 'timeline'
                  ? 'bg-cyan-500/25 text-cyan-300 font-bold border border-cyan-500/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
              title="在思想长河中回溯该主义历史"
            >
              <Clock className="w-3 h-3 text-cyan-400" />
              <span>长河</span>
            </button>
            <button
              type="button"
              onClick={() => onSelectView?.('compass')}
              className={`px-2 py-1 rounded transition-colors flex items-center gap-1 text-[11px] ${
                currentView === 'compass'
                  ? 'bg-emerald-500/25 text-emerald-300 font-bold border border-emerald-500/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
              title="在意识形态罗盘中定位该主义"
            >
              <Compass className="w-3 h-3 text-emerald-400" />
              <span>罗盘</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => onOpenCompare(node)}
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors hidden sm:flex items-center"
            title="思想对决模式"
          >
            <Swords className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => onOpenMusic(node)}
            className="p-1.5 text-cyan-400 hover:text-cyan-300 hover:bg-white/10 rounded-lg transition-colors hidden sm:flex items-center"
            title="时代原声"
          >
            <Radio className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={handleToggleDock}
            className="px-2.5 py-1.5 bg-white text-black hover:bg-zinc-200 rounded-lg font-bold text-xs flex items-center gap-1 transition-all shadow-sm"
            title="展开完整档案详情"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">展开档案</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            title="关闭面板"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </aside>
    );
  }

  // Expanded Right Side Drawer
  return (
    <aside
      aria-label="主义全维档案详情"
      className="fixed inset-y-0 right-0 w-full sm:w-[480px] lg:w-[540px] bg-zinc-950/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl z-40 flex flex-col transition-all duration-300 overflow-hidden text-white font-sans"
    >
      {/* Telemetry Header Bar */}
      <div className="px-5 py-3.5 border-b border-white/10 flex items-center justify-between shrink-0 bg-black/60">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="w-3 h-3 rounded-full shrink-0 shadow-sm"
            style={{ backgroundColor: node.color, boxShadow: `0 0 12px ${node.color}` }}
          />
          <div className="min-w-0">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
              DOSSIER // {node.period.split('（')[0]}
            </div>
            <div className="flex items-baseline gap-2 truncate">
              <h2 className="text-lg font-bold tracking-tight text-white font-mono truncate">
                {node.name}
              </h2>
              <span className="text-xs font-mono text-zinc-400 shrink-0">
                [{node.englishName}]
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 font-mono shrink-0">
          {/* Quick View Switchers */}
          <button
            onClick={() => onSelectView?.('timeline')}
            className={`px-2 py-1 text-xs uppercase tracking-wider rounded-lg transition-all flex items-center gap-1 border ${
              currentView === 'timeline'
                ? 'border-cyan-400/80 bg-cyan-950/40 text-cyan-300 font-bold'
                : 'border-white/15 bg-white/5 text-zinc-300 hover:text-white hover:border-white/40'
            }`}
            title="在思想长河中回溯该流派历史"
          >
            <Clock className="w-3 h-3 text-cyan-400" />
            <span className="hidden sm:inline">长河</span>
          </button>

          <button
            onClick={() => onSelectView?.('compass')}
            className={`px-2 py-1 text-xs uppercase tracking-wider rounded-lg transition-all flex items-center gap-1 border ${
              currentView === 'compass'
                ? 'border-emerald-400/80 bg-emerald-950/40 text-emerald-300 font-bold'
                : 'border-white/15 bg-white/5 text-zinc-300 hover:text-white hover:border-white/40'
            }`}
            title="在意识形态罗盘中定位该流派"
          >
            <Compass className="w-3 h-3 text-emerald-400" />
            <span className="hidden sm:inline">罗盘</span>
          </button>

          <button
            onClick={() => onOpenMusic(node)}
            className="p-1.5 text-xs text-zinc-300 hover:text-white hover:border-white/40 border border-white/15 bg-white/5 rounded-lg transition-all flex items-center"
            title="生成该主义时代原声"
          >
            <Radio className="w-3.5 h-3.5 text-cyan-400" />
          </button>
          <button
            onClick={() => onOpenCompare(node)}
            className="p-1.5 text-xs text-zinc-300 hover:text-white hover:border-white/40 border border-white/15 bg-white/5 rounded-lg transition-all flex items-center"
            title="思想对比模式"
          >
            <Swords className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleToggleDock}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            title="收起为底栏（全屏沉浸浏览长河与罗盘）"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            title="关闭面板"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Content Area (Scrollable) */}
      <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5 text-sm">
        {/* 1. Essence Kicker (The 1-Sentence Bottom Line) */}
        <div className="p-4 bg-black/60 border border-white/10 rounded-xl shadow-inner">
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1.5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
            <span>ESSENCE // 一句话本质底牌</span>
          </div>
          <p className="text-white text-sm font-sans leading-relaxed">
            {node.summary}
          </p>
        </div>

        {/* 2. Spatial & Chronological Localization Card (长河与罗盘双向定位) */}
        <div className="p-4 bg-gradient-to-br from-zinc-900/90 via-black to-zinc-950 border border-white/15 rounded-xl shadow-lg space-y-3 font-mono">
          <div className="flex items-center justify-between text-[11px] text-zinc-300">
            <span className="flex items-center gap-1.5 uppercase tracking-widest text-cyan-400 font-bold">
              <Layers className="w-3.5 h-3.5" />
              <span>SPATIAL & CHRONO MATRIX // 长河与罗盘定位</span>
            </span>
            <button
              type="button"
              onClick={handleToggleDock}
              className="text-[10px] text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
              title="收起侧栏以便全屏查看长河与罗盘"
            >
              <span>收起为底栏沉浸查看</span>
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* 1. Timeline River Card */}
            <div className="p-3 bg-black/60 border border-white/10 rounded-lg hover:border-cyan-500/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>思想长河定位</span>
                  </span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/50">
                    {node.period.split('（')[0]}
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 font-sans leading-relaxed mb-2.5">
                  年代原点: <span className="text-white font-mono font-medium">{node.eraYear ? `${node.eraYear < 0 ? `公元前 ${Math.abs(node.eraYear)}` : `公元 ${node.eraYear}`} 年` : node.period}</span>
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  onSelectView?.('timeline');
                }}
                className={`w-full py-1.5 px-2 rounded text-[11px] font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-1 font-bold shadow-sm ${
                  currentView === 'timeline'
                    ? 'bg-cyan-500 text-black hover:bg-cyan-400'
                    : 'bg-white/10 hover:bg-white text-zinc-200 hover:text-black'
                }`}
              >
                <span>{currentView === 'timeline' ? '当前正处于长河视角' : '在长河中回溯定位'}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* 2. Compass Radar Coordinates Card */}
            <div className="p-3 bg-black/60 border border-white/10 rounded-lg hover:border-emerald-500/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-emerald-400" />
                    <span>意识形态罗盘定位</span>
                  </span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/50 font-mono">
                    X: {node.spectrum.economic > 0 ? `+${node.spectrum.economic}` : node.spectrum.economic} | Y: {node.spectrum.political > 0 ? `+${node.spectrum.political}` : node.spectrum.political}
                  </span>
                </div>
                {/* Mini Visual Radar Crosshair */}
                <div className="relative w-full h-12 bg-zinc-950 border border-white/10 rounded flex items-center justify-center overflow-hidden mb-2">
                  <div className="absolute inset-x-0 top-1/2 h-px bg-white/15" />
                  <div className="absolute inset-y-0 left-1/2 w-px bg-white/15" />
                  <div
                    className="absolute w-2.5 h-2.5 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-sm animate-pulse"
                    style={{
                      backgroundColor: node.color,
                      left: `${50 + (node.spectrum.economic || 0) * 40}%`,
                      top: `${50 - (node.spectrum.political || 0) * 40}%`,
                      boxShadow: `0 0 8px ${node.color}`
                    }}
                  />
                  <span className="absolute bottom-1 right-1.5 text-[8px] text-zinc-600 font-mono">
                    RADAR
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  onSelectView?.('compass');
                }}
                className={`w-full py-1.5 px-2 rounded text-[11px] font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-1 font-bold shadow-sm ${
                  currentView === 'compass'
                    ? 'bg-emerald-500 text-black hover:bg-emerald-400'
                    : 'bg-white/10 hover:bg-white text-zinc-200 hover:text-black'
                }`}
              >
                <span>{currentView === 'compass' ? '当前正处于罗盘视角' : '在罗盘中锁定坐标'}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* 3. Plain-Language Elevator Pitch */}
        <div>
          <h3 className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-2 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>OVERVIEW // 通俗白话详解</span>
          </h3>
          <p className="text-zinc-300 leading-relaxed text-xs bg-black/40 p-4 border border-white/10 rounded-xl font-sans">
            {node.elevatorPitch}
          </p>
        </div>

        {/* 4. Core Pillars / Tenets */}
        <div>
          <h3 className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-2 flex items-center gap-1.5">
            <GitCommit className="w-3.5 h-3.5 text-white" />
            <span>CORE TENETS // 三大核心主张与支柱</span>
          </h3>
          <div className="space-y-2">
            {node.coreTenets.map((tenet, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-zinc-300 bg-black/40 p-3 border border-white/10 rounded-xl text-xs font-sans"
              >
                <span className="w-4 h-4 shrink-0 rounded-md border border-white/20 text-white text-[10px] flex items-center justify-center font-mono bg-white/5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{tenet}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Internet Cliché & Misconceptions */}
        <div className="p-4 bg-rose-950/20 border border-rose-800/30 rounded-xl">
          <h3 className="text-[10px] font-mono uppercase tracking-widest text-rose-300 mb-1 flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
            <span>MISCONCEPTION // 互联网常见误区与泛化滥用</span>
          </h3>
          <p className="text-zinc-300 text-xs leading-relaxed font-sans mt-1.5">
            {node.internetReality}
          </p>
        </div>

        {/* 6. In Modern Everyday Life */}
        <div>
          <h3 className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>DAILY LIFE // 现实生活与当代切片</span>
          </h3>
          <p className="text-zinc-300 text-xs leading-relaxed bg-black/40 p-3.5 border border-white/10 rounded-xl font-sans">
            {node.dailyLifeManifestation}
          </p>
        </div>

        {/* 7. Famous Quote */}
        {node.famousQuote && (
          <div className="relative p-4 bg-black/50 border border-white/10 rounded-xl shadow-inner">
            <Quote className="w-5 h-5 text-zinc-600 absolute top-3 right-3" />
            <blockquote className="text-zinc-200 italic font-serif-sc text-xs leading-relaxed pr-6">
              “{node.famousQuote.quote}”
            </blockquote>
            <cite className="block text-right text-[11px] text-zinc-400 mt-2 font-mono not-italic">
              —— {node.famousQuote.author}
            </cite>
          </div>
        )}

        {/* 8. Key Thinkers */}
        <div>
          <h3 className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-2">
            PROTAGONISTS // 代表人物与奠基者
          </h3>
          <div className="grid grid-cols-1 gap-2 font-mono">
            {node.keyThinkers.map((thinker, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-2.5 bg-black/40 border border-white/10 rounded-lg text-xs"
              >
                <div>
                  <span className="font-bold text-white">{thinker.name}</span>
                  {thinker.note && (
                    <span className="text-zinc-400 ml-2 font-sans">· {thinker.note}</span>
                  )}
                </div>
                {thinker.era && (
                  <span className="text-zinc-500 text-[10px] shrink-0">{thinker.era}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 9. Connected Isms */}
        <div className="pt-2 border-t border-white/10 font-mono">
          <div className="flex items-center justify-between mb-2.5">
            <h3 className="text-[11px] uppercase tracking-widest text-zinc-300">
              CONSTELLATION LINKS // 星轨关联 ({relatedLinks.length})
            </h3>
            <span className="text-[10px] text-zinc-500">点击穿梭</span>
          </div>

          <div className="space-y-2">
            {relatedLinks.map((rel) => {
              const otherId = rel.source === node.id ? rel.target : rel.source;
              const otherNode = nodeMap.get(otherId);
              if (!otherNode) return null;

              let badgeStyle = 'border-white/20 text-zinc-300';
              if (rel.type === 'opposition') badgeStyle = 'border-rose-500 text-rose-300';
              else if (rel.type === 'evolution') badgeStyle = 'border-cyan-400 text-cyan-300';
              else if (rel.type === 'fusion') badgeStyle = 'border-emerald-400 text-emerald-300';
              else if (rel.type === 'catalyst') badgeStyle = 'border-white text-white';

              return (
                <div
                  key={rel.id}
                  onClick={() => onSelectNode(otherNode)}
                  className="group p-3.5 bg-black/40 hover:bg-white/5 border border-white/10 hover:border-white/30 rounded-xl transition-all cursor-pointer shadow-sm"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: otherNode.color }}
                      />
                      <span className="font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {otherNode.name}
                      </span>
                      <span className="text-[10px] text-zinc-500">
                        [{otherNode.englishName}]
                      </span>
                    </div>

                    <span className={`text-[9px] px-2 py-0.5 rounded border uppercase ${badgeStyle}`}>
                      {rel.label}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-snug line-clamp-2 group-hover:text-zinc-200 font-sans">
                    {rel.description}
                  </p>

                  <div className="flex justify-end mt-2 text-[10px] text-zinc-500 group-hover:text-white items-center gap-1">
                    <span>EXPLORE DOSSIER</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
};
