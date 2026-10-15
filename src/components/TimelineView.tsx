import React, { useEffect, useRef, useMemo } from 'react';
import { IsmNode, IsmRelationship, CategoryType } from '../types/ism';
import { ArrowRight, Clock, Search, Target } from 'lucide-react';

interface TimelineViewProps {
  nodes: IsmNode[];
  relationships: IsmRelationship[];
  selectedNodeId: string | null;
  filterCategory: CategoryType | 'all';
  searchQuery: string;
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
  selectedNodeId,
  filterCategory,
  searchQuery,
  onSelectNode,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Filter nodes according to active category and search
  const filteredNodes = useMemo(() => {
    return nodes.filter((node) => {
      if (filterCategory !== 'all' && node.category !== filterCategory) {
        return false;
      }
      return true;
    });
  }, [nodes, filterCategory]);

  // Group nodes into chronological epochs
  const epochs = useMemo(() => {
    const list: EpochGroup[] = [
      {
        id: 'ancient',
        epochName: '古典与轴心时代 // AXIAL AGE',
        timeRange: '公元前 800 年 – 公元 500 年',
        description: '苏格拉底、柏拉图、亚里士多德与诸子百家奠定人类本体论与伦理学最初基石。',
        nodes: [],
      },
      {
        id: 'medieval',
        epochName: '中世纪与信仰思辨 // SCHOLASTIC ERA',
        timeRange: '500 年 – 1500 年',
        description: '神学唯名论与实在论大论战，经院哲学与阿拉伯理性复兴。',
        nodes: [],
      },
      {
        id: 'enlightenment',
        epochName: '理性启蒙与近代科学 // AGE OF REASON',
        timeRange: '1500 年 – 1800 年',
        description: '经验主义、唯理论、社会契约论诞生，笛卡尔与康德重构人类理性边界。',
        nodes: [],
      },
      {
        id: '19th',
        epochName: '19世纪大工业与思潮裂变 // INDUSTRIAL CRUCIBLE',
        timeRange: '1800 年 – 1900 年',
        description: '德国古典哲学、唯物辩证法、功利主义、浪漫主义与意志哲学激烈交锋。',
        nodes: [],
      },
      {
        id: 'early_20th',
        epochName: '20世纪前半叶危局与重构 // MODERN CRISIS',
        timeRange: '1900 年 – 1950 年',
        description: '现象学、逻辑实证主义、早期存在主义、法兰克福学派与现代极权批判。',
        nodes: [],
      },
      {
        id: 'post_war',
        epochName: '后现代解构与冷战时代 // POSTMODERN DISPERSION',
        timeRange: '1950 年 – 2000 年',
        description: '结构主义、解构主义、后殖民主义、女性主义与新自由主义全球扩展。',
        nodes: [],
      },
      {
        id: 'digital',
        epochName: '21世纪数字智能与当代激进思潮 // CYBER & ANTHROPOCENE',
        timeRange: '2000 年 – 至今',
        description: '赛博控制论、加速主义、推测实在论、超人类主义与人工智能生存伦理。',
        nodes: [],
      },
    ];

    filteredNodes.forEach((node) => {
      const year = node.eraYear ?? 1850;
      if (year < 500) {
        list[0].nodes.push(node);
      } else if (year < 1500) {
        list[1].nodes.push(node);
      } else if (year < 1800) {
        list[2].nodes.push(node);
      } else if (year < 1900) {
        list[3].nodes.push(node);
      } else if (year < 1950) {
        list[4].nodes.push(node);
      } else if (year < 2000) {
        list[5].nodes.push(node);
      } else {
        list[6].nodes.push(node);
      }
    });

    list.forEach((epoch) => {
      epoch.nodes.sort((a, b) => (a.eraYear ?? 1800) - (b.eraYear ?? 1800));
    });

    return list.filter((ep) => ep.nodes.length > 0);
  }, [filteredNodes]);

  // Set of matched node IDs
  const queryLower = searchQuery.trim().toLowerCase();
  const matchedNodeIds = useMemo(() => {
    if (!queryLower) return new Set<string>();
    const set = new Set<string>();
    filteredNodes.forEach((node) => {
      const match =
        node.name.toLowerCase().includes(queryLower) ||
        node.englishName.toLowerCase().includes(queryLower) ||
        node.summary.toLowerCase().includes(queryLower) ||
        node.elevatorPitch.toLowerCase().includes(queryLower) ||
        node.keyThinkers.some((t) => t.name.toLowerCase().includes(queryLower));
      if (match) set.add(node.id);
    });
    return set;
  }, [filteredNodes, queryLower]);

  // Scroll to selected node card if selected
  useEffect(() => {
    if (!selectedNodeId) return;
    const cardEl = cardRefs.current.get(selectedNodeId);
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedNodeId]);

  const handleJumpToEpoch = (epochId: string) => {
    const el = document.getElementById(`epoch-${epochId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full overflow-y-auto bg-black px-4 md:px-12 py-8 scroll-smooth font-sans text-white"
    >
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Intro Banner */}
        <div className="text-center space-y-3 font-mono">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan-400">
            <Clock className="w-3.5 h-3.5" />
            <span>CHRONOLOGY // 思想流派历史长河</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-white">
            IDEOLOGY EVOLUTION CHRONOLOGY
          </h2>
          <p className="text-zinc-400 text-xs max-w-2xl mx-auto leading-relaxed font-sans">
            任何一种“主义”都是特定历史危机的产物。在时间长河中搜索、回溯与定位每一个思想流派的诞生原点与传承演进。
          </p>

          {/* Quick Epoch Jump Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            {epochs.map((ep) => (
              <button
                key={ep.id}
                type="button"
                onClick={() => handleJumpToEpoch(ep.id)}
                className="px-3.5 py-1.5 bg-zinc-950/80 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 hover:border-white/30 rounded-lg text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span>{ep.epochName.split('//')[0]}</span>
                <span className="text-[10px] text-cyan-400">[{ep.nodes.length}]</span>
              </button>
            ))}
          </div>

          {/* Search Feedback Badge */}
          {queryLower && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 border border-white/20 rounded-lg text-white text-xs mt-2 font-mono shadow-sm">
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span>
                MATCHED NODES: <strong className="text-white font-bold">{matchedNodeIds.size}</strong>
              </span>
              {selectedNodeId && (
                <span className="text-zinc-400 border-l border-white/20 pl-2">
                  TARGET LOCKED
                </span>
              )}
            </div>
          )}
        </div>

        {/* Epoch Segments */}
        <div className="relative border-l border-white/15 ml-4 md:ml-32 pl-6 md:pl-10 space-y-16">
          {epochs.map((epoch) => (
            <div key={epoch.id} id={`epoch-${epoch.id}`} className="relative scroll-mt-6">
              {/* Epoch node indicator */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-white shadow-lg flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              {/* Epoch Label */}
              <div className="mb-6 font-mono">
                <div className="text-xs text-cyan-400 tracking-widest uppercase">
                  ERA // {epoch.timeRange}
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider mt-0.5">
                  {epoch.epochName}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 font-sans">
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
                      className={`group p-5 rounded-xl transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-zinc-900 border-2 border-cyan-400 ring-2 ring-cyan-400/30 shadow-2xl'
                          : isMatched
                          ? 'bg-zinc-950 border-2 border-cyan-400/80 shadow-lg'
                          : isDimmed
                          ? 'opacity-30 bg-black/40 border border-white/5 hover:opacity-80'
                          : 'bg-zinc-950/70 hover:bg-white/5 border border-white/10 hover:border-white/30 shadow-sm'
                      }`}
                    >
                      <div>
                        {(isSelected || isMatched) && (
                          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-cyan-400 mb-2 uppercase tracking-widest">
                            <Target className="w-3.5 h-3.5 animate-pulse" />
                            <span>{isSelected ? 'TARGET LOCKED // 当前档案' : 'SEARCH HIT // 命中定位'}</span>
                          </div>
                        )}

                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span
                              className="w-2.5 h-2.5 rounded-full shrink-0"
                              style={{ backgroundColor: node.color }}
                            />
                            <h4
                              className={`text-sm font-bold font-mono transition-colors ${
                                isSelected || isMatched
                                  ? 'text-white'
                                  : 'text-zinc-200 group-hover:text-white'
                              }`}
                            >
                              {node.name}
                            </h4>
                            <span className="text-[11px] text-zinc-500 font-mono truncate max-w-[130px]">
                              [{node.englishName}]
                            </span>
                          </div>
                          <span className="text-[10px] text-zinc-500 font-mono shrink-0">
                            {node.period.split('（')[0]}
                          </span>
                        </div>

                        <p className="text-xs text-zinc-400 leading-relaxed mb-3 font-sans">
                          {node.summary}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                        <span>LINKS // {nodeLinks.length}</span>
                        <span className="text-zinc-400 group-hover:text-white font-medium flex items-center gap-1 transition-colors">
                          <span>OPEN DOSSIER</span>
                          <ArrowRight className="w-3 h-3" />
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
