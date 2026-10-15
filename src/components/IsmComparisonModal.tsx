import React, { useState } from 'react';
import { IsmNode, IsmRelationship } from '../types/ism';
import { X, Swords, ArrowRightLeft, Sparkles, BookOpen } from 'lucide-react';

interface IsmComparisonModalProps {
  nodeA: IsmNode;
  nodeB?: IsmNode;
  allNodes: IsmNode[];
  relationships: IsmRelationship[];
  onClose: () => void;
  onSelectNode: (node: IsmNode) => void;
}

export const IsmComparisonModal: React.FC<IsmComparisonModalProps> = ({
  nodeA: initialNodeA,
  nodeB: initialNodeB,
  allNodes,
  relationships,
  onClose,
  onSelectNode,
}) => {
  // If initialNodeB wasn't provided, pick a directly related node or default to another prominent ism
  const defaultOpponent =
    initialNodeB ||
    allNodes.find(
      (n) =>
        n.id !== initialNodeA.id &&
        relationships.some(
          (r) =>
            (r.source === initialNodeA.id && r.target === n.id) ||
            (r.target === initialNodeA.id && r.source === n.id)
        )
    ) ||
    allNodes.find((n) => n.id !== initialNodeA.id)!;

  const [selectedIdA, setSelectedIdA] = useState(initialNodeA.id);
  const [selectedIdB, setSelectedIdB] = useState(defaultOpponent.id);

  const nodeA = allNodes.find((n) => n.id === selectedIdA) || initialNodeA;
  const nodeB = allNodes.find((n) => n.id === selectedIdB) || defaultOpponent;

  // Check if there is a direct relationship between nodeA and nodeB
  const directLink = relationships.find(
    (r) =>
      (r.source === nodeA.id && r.target === nodeB.id) ||
      (r.target === nodeA.id && r.source === nodeB.id)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-4xl bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-800 flex items-center justify-between shrink-0 bg-stone-900/90">
          <div className="flex items-center gap-2 text-stone-200">
            <Swords className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-bold font-serif-sc">思想辩证与对决矩阵</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-100 hover:bg-stone-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selector Bar */}
        <div className="px-6 py-4 bg-stone-950/60 border-b border-stone-800 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-400 shrink-0">阵营甲：</span>
            <select
              value={selectedIdA}
              onChange={(e) => setSelectedIdA(e.target.value)}
              className="w-full bg-stone-800 border border-stone-700 rounded-lg px-3 py-1.5 text-stone-100 text-sm font-serif-sc focus:outline-none focus:border-amber-400"
            >
              {allNodes.map((n) => (
                <option key={n.id} value={n.id} disabled={n.id === selectedIdB}>
                  {n.name} ({n.englishName})
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-400 shrink-0">阵营乙：</span>
            <select
              value={selectedIdB}
              onChange={(e) => setSelectedIdB(e.target.value)}
              className="w-full bg-stone-800 border border-stone-700 rounded-lg px-3 py-1.5 text-stone-100 text-sm font-serif-sc focus:outline-none focus:border-amber-400"
            >
              {allNodes.map((n) => (
                <option key={n.id} value={n.id} disabled={n.id === selectedIdA}>
                  {n.name} ({n.englishName})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Direct Link Banner */}
        {directLink ? (
          <div className="px-6 py-3 bg-amber-950/20 border-b border-amber-900/40 flex items-center gap-3">
            <ArrowRightLeft className="w-4 h-4 text-amber-400 shrink-0" />
            <div className="text-xs">
              <span className="font-semibold text-amber-300 mr-2">
                [{directLink.label}]
              </span>
              <span className="text-stone-300">{directLink.description}</span>
            </div>
          </div>
        ) : (
          <div className="px-6 py-2 bg-stone-950/40 border-b border-stone-800 text-xs text-stone-500 text-center">
            两者在星图中无直接连线，属于跨领域或间接演化的宏观对比。
          </div>
        )}

        {/* Content Body: Side by Side Matrix */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm">
          {/* Side by side titles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Box A */}
            <div className="p-5 rounded-xl bg-stone-800/30 border border-stone-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: nodeA.color }}
                  />
                  <h3 className="text-xl font-bold font-serif-sc text-stone-100">
                    {nodeA.name}
                  </h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">{nodeA.period}</span>
              </div>

              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400/90 block mb-1">
                  核心底牌定义
                </span>
                <p className="text-stone-200 text-xs leading-relaxed">{nodeA.summary}</p>
              </div>

              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block mb-1">
                  核心支撑主张
                </span>
                <ul className="space-y-1.5 text-xs text-stone-300">
                  {nodeA.coreTenets.map((t, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-stone-500 font-mono">·</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block mb-1">
                  代表思想家
                </span>
                <div className="text-xs text-stone-300">
                  {nodeA.keyThinkers.map((t) => t.name).join('、')}
                </div>
              </div>

              {nodeA.famousQuote && (
                <div className="p-2.5 rounded bg-stone-900/60 border border-stone-800/80 text-xs italic text-stone-300 font-serif-sc">
                  “{nodeA.famousQuote.quote}”
                </div>
              )}
            </div>

            {/* Box B */}
            <div className="p-5 rounded-xl bg-stone-800/30 border border-stone-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: nodeB.color }}
                  />
                  <h3 className="text-xl font-bold font-serif-sc text-stone-100">
                    {nodeB.name}
                  </h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">{nodeB.period}</span>
              </div>

              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400/90 block mb-1">
                  核心底牌定义
                </span>
                <p className="text-stone-200 text-xs leading-relaxed">{nodeB.summary}</p>
              </div>

              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block mb-1">
                  核心支撑主张
                </span>
                <ul className="space-y-1.5 text-xs text-stone-300">
                  {nodeB.coreTenets.map((t, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-stone-500 font-mono">·</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block mb-1">
                  代表思想家
                </span>
                <div className="text-xs text-stone-300">
                  {nodeB.keyThinkers.map((t) => t.name).join('、')}
                </div>
              </div>

              {nodeB.famousQuote && (
                <div className="p-2.5 rounded bg-stone-900/60 border border-stone-800/80 text-xs italic text-stone-300 font-serif-sc">
                  “{nodeB.famousQuote.quote}”
                </div>
              )}
            </div>
          </div>

          {/* Dialectical Synthesis Box */}
          <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span>思辨启发：如何看两者的历史对话？</span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              思想史从不是非黑即白的零和游戏。正如黑格尔所言“正、反、合”，一种主义的兴起往往是对前一种思潮弊端的矫枉过正。理解两者不可调和的分歧与彼此互补的视阈，是破除互联网二极管思维的最优解药。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
