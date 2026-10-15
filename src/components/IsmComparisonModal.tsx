import React, { useState } from 'react';
import { IsmNode, IsmRelationship } from '../types/ism';
import { X, Swords, ArrowRightLeft, Sparkles, Activity } from 'lucide-react';

interface IsmComparisonModalProps {
  initialNodeA: IsmNode;
  initialNodeB?: IsmNode;
  allNodes: IsmNode[];
  relationships: IsmRelationship[];
  onClose: () => void;
}

export const IsmComparisonModal: React.FC<IsmComparisonModalProps> = ({
  initialNodeA,
  initialNodeB,
  allNodes,
  relationships,
  onClose,
}) => {
  const [selectedIdA, setSelectedIdA] = useState<string>(initialNodeA.id);
  const [selectedIdB, setSelectedIdB] = useState<string>(() => {
    if (initialNodeB) return initialNodeB.id;
    const defaultCounter = relationships.find(
      (r) => r.source === initialNodeA.id || r.target === initialNodeA.id
    );
    if (defaultCounter) {
      return defaultCounter.source === initialNodeA.id
        ? defaultCounter.target
        : defaultCounter.source;
    }
    const other = allNodes.find((n) => n.id !== initialNodeA.id);
    return other ? other.id : initialNodeA.id;
  });

  const nodeMap = new Map(allNodes.map((n) => [n.id, n]));
  const nodeA = nodeMap.get(selectedIdA) || initialNodeA;
  const nodeB = nodeMap.get(selectedIdB) || (allNodes.find((n) => n.id !== nodeA.id) || nodeA);

  const directLink = relationships.find(
    (r) =>
      (r.source === nodeA.id && r.target === nodeB.id) ||
      (r.source === nodeB.id && r.target === nodeA.id)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md font-sans text-white">
      <div className="w-full max-w-4xl bg-zinc-950/95 border border-white/10 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between shrink-0 bg-black/50 font-mono">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
              <Swords className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase">
              MATRIX // 思想辩证与对决矩阵
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selector Bar */}
        <div className="px-6 py-3.5 bg-black/40 border-b border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="text-zinc-400 shrink-0 uppercase tracking-widest text-[11px]">PARADIGM A:</span>
            <select
              value={selectedIdA}
              onChange={(e) => setSelectedIdA(e.target.value)}
              className="w-full bg-black/60 border border-white/15 rounded-lg p-2 text-white font-mono text-xs focus:outline-none focus:border-white shadow-inner"
            >
              {allNodes.map((n) => (
                <option key={n.id} value={n.id} disabled={n.id === selectedIdB}>
                  {n.name} [{n.englishName}]
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-zinc-400 shrink-0 uppercase tracking-widest text-[11px]">PARADIGM B:</span>
            <select
              value={selectedIdB}
              onChange={(e) => setSelectedIdB(e.target.value)}
              className="w-full bg-black/60 border border-white/15 rounded-lg p-2 text-white font-mono text-xs focus:outline-none focus:border-white shadow-inner"
            >
              {allNodes.map((n) => (
                <option key={n.id} value={n.id} disabled={n.id === selectedIdA}>
                  {n.name} [{n.englishName}]
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Dynamic Direct Link Banner if exists */}
        {directLink ? (
          <div className="px-6 py-3 bg-cyan-950/20 border-b border-cyan-800/30 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <ArrowRightLeft className="w-4 h-4 text-cyan-400" />
              <span className="text-zinc-400 uppercase tracking-wider">HISTORICAL TETHER:</span>
              <span className="text-cyan-300 font-bold px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/50">
                {directLink.label}
              </span>
            </div>
            <p className="text-zinc-300 hidden md:block text-xs font-sans">
              {directLink.description}
            </p>
          </div>
        ) : (
          <div className="px-6 py-2 bg-black/40 border-b border-white/10 text-[11px] font-mono text-zinc-500 text-center uppercase tracking-wider">
            NO DIRECT LINK IN ATLAS // 跨星区宏观思潮比对
          </div>
        )}

        {/* Content Body: Side by Side Matrix */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Box A */}
            <div className="p-5 bg-black/40 border border-white/10 rounded-xl space-y-4 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: nodeA.color }}
                  />
                  <h3 className="text-lg font-bold font-mono text-white">
                    {nodeA.name}
                  </h3>
                </div>
                <span className="text-[11px] text-zinc-400 font-mono">{nodeA.period.split('（')[0]}</span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
                  ESSENCE // 核心底牌
                </span>
                <p className="text-zinc-200 text-xs leading-relaxed">{nodeA.summary}</p>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
                  CORE TENETS // 核心支撑主张
                </span>
                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {nodeA.coreTenets.map((t, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-zinc-500 font-mono">[{idx + 1}]</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
                  FIGURES // 代表思想家
                </span>
                <div className="text-xs text-zinc-300 font-mono">
                  {nodeA.keyThinkers.map((t) => t.name).join(' / ')}
                </div>
              </div>

              {nodeA.famousQuote && (
                <div className="p-3.5 bg-black/60 border border-white/10 rounded-lg text-xs italic text-zinc-300 font-serif-sc">
                  “{nodeA.famousQuote.quote}”
                </div>
              )}
            </div>

            {/* Box B */}
            <div className="p-5 bg-black/40 border border-white/10 rounded-xl space-y-4 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: nodeB.color }}
                  />
                  <h3 className="text-lg font-bold font-mono text-white">
                    {nodeB.name}
                  </h3>
                </div>
                <span className="text-[11px] text-zinc-400 font-mono">{nodeB.period.split('（')[0]}</span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
                  ESSENCE // 核心底牌
                </span>
                <p className="text-zinc-200 text-xs leading-relaxed">{nodeB.summary}</p>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
                  CORE TENETS // 核心支撑主张
                </span>
                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {nodeB.coreTenets.map((t, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-zinc-500 font-mono">[{idx + 1}]</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
                  FIGURES // 代表思想家
                </span>
                <div className="text-xs text-zinc-300 font-mono">
                  {nodeB.keyThinkers.map((t) => t.name).join(' / ')}
                </div>
              </div>

              {nodeB.famousQuote && (
                <div className="p-3.5 bg-black/60 border border-white/10 rounded-lg text-xs italic text-zinc-300 font-serif-sc">
                  “{nodeB.famousQuote.quote}”
                </div>
              )}
            </div>
          </div>

          {/* Dialectical Synthesis Box */}
          <div className="p-4 bg-black/50 border border-white/10 rounded-xl space-y-2 font-mono shadow-inner">
            <div className="flex items-center gap-2 text-xs font-bold text-white">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span className="uppercase tracking-widest">DIALECTIC // 思辨启发：历史正反合</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed font-sans">
              思想史从不是非黑即白的零和博弈。正如黑格尔所言“正、反、合”，一种主义的兴起往往是对前一种思潮弊端的校准反拨。理解两者不可调和的分歧与彼此互补的视阈，是建立高阶理性认知框架的基石。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
