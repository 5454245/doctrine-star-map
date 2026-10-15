import React, { useEffect, useRef, useMemo } from 'react';
import { IsmNode, IsmRelationship, CategoryType } from '../types/ism';
import { Sparkles, ArrowRight, Clock, Search, Target, Compass } from 'lucide-react';

interface TimelineViewProps {
  nodes: IsmNode[];
  relationships: IsmRelationship[];
  searchQuery?: string;
  selectedNodeId?: string | null;
  filterCategory?: CategoryType | 'all';
  onSelectNode: (node: IsmNode) => void;
}

interface EpochGroup {
  id: string;
  epochName: string;
  timeRange: string;
  description: string;
  nodes: IsmNode[];
}

export const TimelineView: React.FC<TimelineViewProps> = ({
  nodes,
  relationships,
  searchQuery = '',
  selectedNodeId,
  filterCategory = 'all',
  onSelectNode,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Filter nodes based on category first
  const categoryFilteredNodes = useMemo(() => {
    if (filterCategory === 'all') return nodes;
    return nodes.filter((n) => n.category === filterCategory);
  }, [nodes, filterCategory]);

  // Group nodes chronologically into 5 historical epochs
  const epochs: EpochGroup[] = useMemo(() => {
    return [
      {
        id: 'ancient',
        epochName: '古代与古典源流',
        timeRange: '公元前300年 - 公元1500年',
        description: '城邦政治哲学、自然神圣秩序、沉思德性与早期人文觉醒',
        nodes: categoryFilteredNodes
          .filter((n) => n.eraYear < 1600)
          .sort((a, b) => a.eraYear - b.eraYear),
      },
      {
        id: 'enlightenment',
        epochName: '理性与启蒙曙光',
        timeRange: '17世纪 - 18世纪末',
        description: '科学革命、理性法庭、社会契约与近代资本主义萌芽',
        nodes: categoryFilteredNodes
          .filter((n) => n.eraYear >= 1600 && n.eraYear < 1800)
          .sort((a, b) => a.eraYear - b.eraYear),
      },
      {
        id: 'industrial',
        epochName: '工业狂飙与大革命时代',
        timeRange: '19世纪 (1800 - 1899)',
        description: '机器大工业异化、阶级斗争、浪漫主义反叛与虚无深渊的揭幕',
        nodes: categoryFilteredNodes
          .filter((n) => n.eraYear >= 1800 && n.eraYear < 1900)
          .sort((a, b) => a.eraYear - b.eraYear),
      },
      {
        id: 'wars_coldwar',
        epochName: '两次大战与冷战争锋',
        timeRange: '20世纪前半至中叶 (1900 - 1970)',
        description: '极权灾难的反思、存在主义抉择、福利国家实践与现代主义秩序',
        nodes: categoryFilteredNodes
          .filter((n) => n.eraYear >= 1900 && n.eraYear < 1970)
          .sort((a, b) => a.eraYear - b.eraYear),
      },
      {
        id: 'postmodern_ai',
        epochName: '后现代与数字智能时代',
        timeRange: '20世纪末至今 (1970 - 2026+)',
        description: '宏大叙事解体、新自由主义全球化、气候焦虑与硅基AI奇点狂想',
        nodes: categoryFilteredNodes
          .filter((n) => n.eraYear >= 1970)
          .sort((a, b) => a.eraYear - b.eraYear),
      },
    ];
  }, [categoryFilteredNodes]);

  // Determine which nodes match search query
  const queryLower = searchQuery.trim().toLowerCase();
  const matchedNodeIds = useMemo(() => {
    if (!queryLower) return new Set<string>();
    const matched = new Set<string>();
    for (const node of categoryFilteredNodes) {
      const match =
        node.name.toLowerCase().includes(queryLower) ||
        node.englishName.toLowerCase().includes(queryLower) ||
        node.summary.toLowerCase().includes(queryLower) ||
        node.elevatorPitch.toLowerCase().includes(queryLower) ||
        node.keyThinkers.some((t) => t.name.toLowerCase().includes(queryLower)) ||
        (node.coreTenets && node.coreTenets.some((t) => t.toLowerCase().includes(queryLower)));
      if (match) {
        matched.add(node.id);
      }
    }
    return matched;
  }, [queryLower, categoryFilteredNodes]);

  // Auto-scroll to selectedNodeId or first search match
  useEffect(() => {
    let targetId: string | null = null;

    if (selectedNodeId && cardRefs.current.has(selectedNodeId)) {
      targetId = selectedNodeId;
    } else if (queryLower && matchedNodeIds.size > 0) {
      // Find the first matched node in chronological order
      for (const epoch of epochs) {
        const found = epoch.nodes.find((n) => matchedNodeIds.has(n.id));
        if (found) {
          targetId = found.id;
          break;
        }
      }
    }

    if (targetId) {
      const el = cardRefs.current.get(targetId);
      if (el) {
        // Delay slightly to ensure layout rendering
        const timer = setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 80);
        return () => clearTimeout(timer);
      }
    }
  }, [selectedNodeId, queryLower, matchedNodeIds, epochs]);

  // Quick jump to epoch
  const handleJumpToEpoch = (epochId: string) => {
    const el = document.getElementById(`epoch-${epochId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full overflow-y-auto bg-stone-950 px-4 md:px-12 py-8 scroll-smooth"
    >
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Intro Banner */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
            <Clock className="w-3.5 h-3.5" />
            <span>思想演化时间线 · 历史长河定位</span>
          </div>
          <h2 className="text-3xl font-bold font-serif-sc text-stone-100">
            人类意识形态演进史诗
          </h2>
          <p className="text-stone-400 text-sm max-w-2xl mx-auto leading-relaxed">
            任何一种“主义”都是特定历史危机的产物。在时间长河中搜索、回溯与定位每一个思想流派的诞生原点与传承演进。
          </p>

          {/* Quick Epoch Jump Bar & Search Status Indicator */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            {epochs.map((ep) => (
              <button
                key={ep.id}
                type="button"
                onClick={() => handleJumpToEpoch(ep.id)}
                className="px-3 py-1.5 rounded-lg bg-stone-900/90 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>{ep.epochName}</span>
                <span className="text-[10px] text-amber-400/80 font-mono">({ep.nodes.length})</span>
              </button>
            ))}
          </div>

          {/* Search Result Feedback Badge */}
          {queryLower && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs mt-2">
              <Search className="w-3.5 h-3.5" />
              <span>
                在历史长河中匹配到 <strong className="text-white font-mono">{matchedNodeIds.size}</strong> 个思想流派
              </span>
              {selectedNodeId && (
                <span className="text-stone-400 border-l border-amber-500/30 pl-2">
                  已定位选定节点
                </span>
              )}
            </div>
          )}
        </div>

        {/* Epoch Segments */}
        <div className="relative border-l border-stone-800 ml-4 md:ml-32 pl-6 md:pl-10 space-y-16">
          {epochs.map((epoch) => (
            <div key={epoch.id} id={`epoch-${epoch.id}`} className="relative scroll-mt-6">
              {/* Epoch node indicator */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-stone-900 border-2 border-amber-500/80 shadow-lg shadow-amber-500/20 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              </div>

              {/* Epoch Label */}
              <div className="mb-6">
                <div className="text-xs font-mono text-amber-400/90 tracking-wider">
                  {epoch.timeRange}
                </div>
                <h3 className="text-xl font-bold text-stone-100 font-serif-sc mt-0.5">
                  {epoch.epochName}
                </h3>
                <p className="text-xs text-stone-400 mt-1">
                  {epoch.description}
                </p>
              </div>

              {/* Isms Cards in this Epoch */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {epoch.nodes.map((node) => {
                  const nodeLinks = relationships.filter(
                    (r) => r.source === node.id || r.target === node.id
                  );
                  const isSelected = selectedNodeId === node.id;
                  const isMatched = queryLower ? matchedNodeIds.has(node.id) : false;
                  const isDimmed = queryLower && !isMatched && !isSelected;

                  return (
                    <div
                      key={node.id}
                      ref={(el) => {
                        if (el) cardRefs.current.set(node.id, el);
                        else cardRefs.current.delete(node.id);
                      }}
                      onClick={() => onSelectNode(node)}
                      className={`group p-5 rounded-xl transition-all cursor-pointer shadow-sm flex flex-col justify-between ${
                        isSelected
                          ? 'bg-amber-950/40 border-2 border-amber-400 ring-4 ring-amber-400/20 shadow-2xl scale-[1.01]'
                          : isMatched
                          ? 'bg-amber-950/20 border-2 border-amber-500/70 ring-2 ring-amber-500/20 shadow-lg'
                          : isDimmed
                          ? 'opacity-35 bg-stone-900/30 border border-stone-800/50 hover:opacity-80'
                          : 'bg-stone-900/60 hover:bg-stone-800/80 border border-stone-800 hover:border-stone-700 hover:shadow-xl'
                      }`}
                    >
                      <div>
                        {/* Highlight & Positioning Badge */}
                        {(isSelected || isMatched) && (
                          <div className="flex items-center gap-1 text-[11px] font-semibold text-amber-400 mb-2 font-mono">
                            <Target className="w-3.5 h-3.5 animate-pulse" />
                            <span>{isSelected ? '当前正在查看档案' : '搜索匹配命中定位'}</span>
                          </div>
                        )}

                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span
                              className="w-2.5 h-2.5 rounded-full shrink-0"
                              style={{ backgroundColor: node.color }}
                            />
                            <h4
                              className={`text-base font-bold font-serif-sc transition-colors ${
                                isSelected || isMatched
                                  ? 'text-amber-300'
                                  : 'text-stone-100 group-hover:text-amber-300'
                              }`}
                            >
                              {node.name}
                            </h4>
                            <span className="text-xs text-stone-400 font-sans truncate max-w-[140px]">
                              {node.englishName}
                            </span>
                          </div>
                          <span className="text-[11px] text-stone-500 font-mono shrink-0">
                            {node.period.split('（')[0]}
                          </span>
                        </div>

                        <p className="text-xs text-stone-300 leading-relaxed mb-3">
                          {node.summary}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-400">
                        <span>关联 {nodeLinks.length} 条思想星轨</span>
                        <span className="text-amber-400/90 font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                          进入星辰档案 <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
