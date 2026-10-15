import React from 'react';
import { IsmNode, IsmRelationship } from '../types/ism';
import { X, ArrowRight, BookOpen, Quote, ShieldAlert, Sparkles, Compass, GitCommit, Split } from 'lucide-react';

interface IsmDetailModalProps {
  node: IsmNode | null;
  allNodes: IsmNode[];
  relationships: IsmRelationship[];
  onClose: () => void;
  onSelectNode: (node: IsmNode) => void;
  onOpenCompare: (nodeA: IsmNode, nodeB?: IsmNode) => void;
  onOpenMusic: (node: IsmNode) => void;
}

export const IsmDetailModal: React.FC<IsmDetailModalProps> = ({
  node,
  allNodes,
  relationships,
  onClose,
  onSelectNode,
  onOpenCompare,
  onOpenMusic,
}) => {
  if (!node) return null;

  // Find all related relationships
  const relatedLinks = relationships.filter(
    (rel) => rel.source === node.id || rel.target === node.id
  );

  const nodeMap = new Map(allNodes.map((n) => [n.id, n]));

  // Group connected isms by relationship type
  const evolutionLinks = relatedLinks.filter((l) => l.type === 'evolution');
  const oppositionLinks = relatedLinks.filter((l) => l.type === 'opposition');
  const catalystLinks = relatedLinks.filter((l) => l.type === 'catalyst');
  const fusionLinks = relatedLinks.filter((l) => l.type === 'fusion');
  const dialecticalLinks = relatedLinks.filter((l) => l.type === 'dialectical');

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-[480px] lg:w-[540px] bg-stone-900/95 backdrop-blur-xl border-l border-stone-800 shadow-2xl z-40 flex flex-col transition-all duration-300 overflow-hidden">
      {/* Top Header Bar */}
      <div className="px-6 py-5 border-b border-stone-800/80 flex items-center justify-between shrink-0 bg-stone-900/60">
        <div className="flex items-center gap-3">
          <div
            className="w-3.5 h-3.5 rounded-full shadow-lg"
            style={{ backgroundColor: node.color, boxShadow: `0 0 14px ${node.color}` }}
          />
          <div>
            <span className="text-xs uppercase tracking-widest text-stone-400 font-sans">
              思想档案 · {node.period}
            </span>
            <div className="flex items-baseline gap-2">
              <h2 className="text-2xl font-bold text-stone-100 font-serif-sc tracking-wide">
                {node.name}
              </h2>
              <span className="text-sm font-medium text-stone-400 font-sans">
                {node.englishName}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenMusic(node)}
            className="px-2 py-1.5 text-xs font-medium text-stone-300 hover:text-white bg-stone-800/80 hover:bg-stone-700/80 rounded-md transition-colors flex items-center gap-1 border border-stone-700/50"
            title="生成该主义专属时代原声"
          >
            <span>🎵</span>
            <span>原声</span>
          </button>
          <button
            onClick={() => onOpenCompare(node)}
            className="px-2.5 py-1.5 text-xs font-medium text-stone-300 hover:text-white bg-stone-800/80 hover:bg-stone-700/80 rounded-md transition-colors flex items-center gap-1.5 border border-stone-700/50"
            title="思想对比模式"
          >
            <Split className="w-3.5 h-3.5 text-amber-400" />
            <span>思想对决</span>
          </button>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-100 rounded-lg hover:bg-stone-800 transition-colors"
            title="关闭面板"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content Area (Scrollable) */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 text-sm">
        {/* 1. Essence Kicker (The 1-Sentence Bottom Line) */}
        <div className="p-4 rounded-xl bg-stone-800/40 border border-stone-700/50">
          <div className="text-[11px] font-semibold text-amber-400/90 tracking-wider uppercase mb-1 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>一句话本质底牌</span>
          </div>
          <p className="text-stone-200 text-base font-serif-sc leading-relaxed">
            {node.summary}
          </p>
        </div>

        {/* 2. Plain-Language Elevator Pitch */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-sky-400" />
            <span>通俗大白话详解</span>
          </h3>
          <p className="text-stone-300 leading-relaxed text-sm bg-stone-950/40 p-3.5 rounded-lg border border-stone-800/80">
            {node.elevatorPitch}
          </p>
        </div>

        {/* 3. Core Pillars / Tenets */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2.5 flex items-center gap-1.5">
            <GitCommit className="w-3.5 h-3.5 text-emerald-400" />
            <span>三大核心主张与支柱</span>
          </h3>
          <div className="space-y-2">
            {node.coreTenets.map((tenet, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-stone-300 bg-stone-800/20 p-2.5 rounded-lg border border-stone-800"
              >
                <span className="w-5 h-5 shrink-0 rounded-full bg-stone-800 text-stone-400 text-xs flex items-center justify-center font-mono">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{tenet}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Internet Cliché & Misconceptions (Direct user pain point) */}
        <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-rose-400 mb-1.5 flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
            <span>互联网常见误区与泛化滥用</span>
          </h3>
          <p className="text-stone-300 text-xs leading-relaxed">
            {node.internetReality}
          </p>
        </div>

        {/* 5. In Modern Everyday Life */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-violet-400" />
            <span>现实生活与当代切片</span>
          </h3>
          <p className="text-stone-300 text-xs leading-relaxed bg-stone-950/40 p-3 rounded-lg border border-stone-800/60">
            {node.dailyLifeManifestation}
          </p>
        </div>

        {/* 6. Famous Quote */}
        {node.famousQuote && (
          <div className="relative p-4 rounded-xl bg-stone-800/30 border border-stone-800">
            <Quote className="w-6 h-6 text-stone-600/40 absolute top-3 right-3" />
            <blockquote className="text-stone-200 italic font-serif-sc text-sm leading-relaxed">
              “{node.famousQuote.quote}”
            </blockquote>
            <cite className="block text-right text-xs text-stone-400 mt-2 font-sans not-italic">
              —— {node.famousQuote.author}
            </cite>
          </div>
        )}

        {/* 7. Key Thinkers */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
            代表人物与奠基者
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {node.keyThinkers.map((thinker, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-2.5 rounded-lg bg-stone-800/20 border border-stone-800/60 text-xs"
              >
                <div>
                  <span className="font-semibold text-stone-200">{thinker.name}</span>
                  {thinker.note && (
                    <span className="text-stone-400 ml-2">· {thinker.note}</span>
                  )}
                </div>
                {thinker.era && (
                  <span className="text-stone-500 font-mono shrink-0">{thinker.era}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 8. Connected Isms (The Core Relationship Constellation) */}
        <div className="pt-2 border-t border-stone-800">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-300">
              思想星轨关联 ({relatedLinks.length} 个直接连线)
            </h3>
            <span className="text-[11px] text-stone-500">点击星辰节点即可穿梭</span>
          </div>

          <div className="space-y-2.5">
            {relatedLinks.map((rel) => {
              const otherId = rel.source === node.id ? rel.target : rel.source;
              const otherNode = nodeMap.get(otherId);
              if (!otherNode) return null;

              // Type badge color
              let badgeColor = 'bg-stone-800 text-stone-300 border-stone-700';
              let badgeText = rel.label;

              if (rel.type === 'opposition') {
                badgeColor = 'bg-red-950/40 text-red-400 border-red-800/50';
              } else if (rel.type === 'evolution') {
                badgeColor = 'bg-sky-950/40 text-sky-400 border-sky-800/50';
              } else if (rel.type === 'catalyst') {
                badgeColor = 'bg-amber-950/40 text-amber-400 border-amber-800/50';
              } else if (rel.type === 'fusion') {
                badgeColor = 'bg-emerald-950/40 text-emerald-400 border-emerald-800/50';
              } else if (rel.type === 'dialectical') {
                badgeColor = 'bg-purple-950/40 text-purple-400 border-purple-800/50';
              }

              return (
                <div
                  key={rel.id}
                  onClick={() => onSelectNode(otherNode)}
                  className="group p-3 rounded-xl bg-stone-800/30 hover:bg-stone-800/70 border border-stone-800/80 hover:border-stone-700 transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: otherNode.color }}
                      />
                      <span className="font-semibold text-stone-100 group-hover:text-amber-300 transition-colors">
                        {otherNode.name}
                      </span>
                      <span className="text-[11px] text-stone-400 font-sans">
                        {otherNode.englishName}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-medium px-2 py-0.5 rounded border ${badgeColor}`}
                    >
                      {badgeText}
                    </span>
                  </div>

                  <p className="text-xs text-stone-400 leading-relaxed line-clamp-2 group-hover:text-stone-300 transition-colors">
                    {rel.description}
                  </p>

                  <div className="flex justify-end mt-1.5">
                    <span className="text-[10px] text-stone-500 group-hover:text-amber-400 flex items-center gap-1 transition-colors">
                      进入该主义档案 <ArrowRight className="w-3 h-3" />
                    </span>
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
