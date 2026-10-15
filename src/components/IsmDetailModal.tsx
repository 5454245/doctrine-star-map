import React from 'react';
import { IsmNode, IsmRelationship } from '../types/ism';
import { X, ArrowRight, BookOpen, Quote, ShieldAlert, Radio, Swords, GitCommit, Compass } from 'lucide-react';

interface IsmDetailModalProps {
  node: IsmNode | null;
  relationships: IsmRelationship[];
  allNodes: IsmNode[];
  onClose: () => void;
  onSelectNode: (node: IsmNode) => void;
  onOpenCompare: (node: IsmNode) => void;
  onOpenMusic: (node: IsmNode) => void;
}

export const IsmDetailModal: React.FC<IsmDetailModalProps> = ({
  node,
  relationships,
  allNodes,
  onClose,
  onSelectNode,
  onOpenCompare,
  onOpenMusic,
}) => {
  if (!node) return null;

  const relatedLinks = relationships.filter(
    (r) => r.source === node.id || r.target === node.id
  );

  const nodeMap = new Map(allNodes.map((n) => [n.id, n]));

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-[480px] lg:w-[540px] bg-zinc-950/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl z-40 flex flex-col transition-all duration-300 overflow-hidden text-white font-sans">
      {/* Telemetry Header Bar */}
      <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between shrink-0 bg-black/60">
        <div className="flex items-center gap-3">
          <div
            className="w-3 h-3 rounded-full shrink-0"
            style={{ backgroundColor: node.color, boxShadow: `0 0 12px ${node.color}` }}
          />
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
              DOSSIER // {node.period.split('（')[0]}
            </div>
            <div className="flex items-baseline gap-2">
              <h2 className="text-xl font-bold tracking-tight text-white font-mono">
                {node.name}
              </h2>
              <span className="text-xs font-mono text-zinc-400">
                [{node.englishName}]
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono">
          <button
            onClick={() => onOpenMusic(node)}
            className="px-3 py-1.5 text-xs uppercase tracking-wider text-zinc-300 hover:text-white hover:border-white/40 border border-white/15 bg-white/5 rounded-lg transition-all flex items-center gap-1.5"
            title="生成该主义时代原声"
          >
            <Radio className="w-3.5 h-3.5 text-cyan-400" />
            <span>原声</span>
          </button>
          <button
            onClick={() => onOpenCompare(node)}
            className="px-3 py-1.5 text-xs uppercase tracking-wider text-zinc-300 hover:text-white hover:border-white/40 border border-white/15 bg-white/5 rounded-lg transition-all flex items-center gap-1.5"
            title="思想对比模式"
          >
            <Swords className="w-3.5 h-3.5" />
            <span>对决</span>
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            title="关闭面板"
          >
            <X className="w-5 h-5" />
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

        {/* 2. Plain-Language Elevator Pitch */}
        <div>
          <h3 className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-2 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>OVERVIEW // 通俗白话详解</span>
          </h3>
          <p className="text-zinc-300 leading-relaxed text-xs bg-black/40 p-4 border border-white/10 rounded-xl font-sans">
            {node.elevatorPitch}
          </p>
        </div>

        {/* 3. Core Pillars / Tenets */}
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

        {/* 4. Internet Cliché & Misconceptions */}
        <div className="p-4 bg-rose-950/20 border border-rose-800/30 rounded-xl">
          <h3 className="text-[10px] font-mono uppercase tracking-widest text-rose-300 mb-1 flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
            <span>MISCONCEPTION // 互联网常见误区与泛化滥用</span>
          </h3>
          <p className="text-zinc-300 text-xs leading-relaxed font-sans mt-1.5">
            {node.internetReality}
          </p>
        </div>

        {/* 5. In Modern Everyday Life */}
        <div>
          <h3 className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-2 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>DAILY LIFE // 现实生活与当代切片</span>
          </h3>
          <p className="text-zinc-300 text-xs leading-relaxed bg-black/40 p-3.5 border border-white/10 rounded-xl font-sans">
            {node.dailyLifeManifestation}
          </p>
        </div>

        {/* 6. Famous Quote */}
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

        {/* 7. Key Thinkers */}
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

        {/* 8. Connected Isms */}
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
    </div>
  );
};
