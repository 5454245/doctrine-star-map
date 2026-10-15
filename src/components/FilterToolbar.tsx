import React, { useState, useEffect, useRef, useMemo } from 'react';
import { CategoryType, ViewMode, IsmNode, IsmRelationship } from '../types/ism';
import { CATEGORIES, ISMS_DATA, ISM_RELATIONSHIPS } from '../data/ismsData';
import { 
  Search, 
  X, 
  Sparkles, 
  Network, 
  Clock, 
  Compass, 
  ArrowRight, 
  GitFork,
  User,
  Calendar,
  Layers
} from 'lucide-react';

interface FilterToolbarProps {
  currentCategory: CategoryType | 'all';
  onSelectCategory: (cat: CategoryType | 'all') => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  currentView: ViewMode;
  onSelectView: (view: ViewMode) => void;
  totalCount: number;
  nodes?: IsmNode[];
  relationships?: IsmRelationship[];
  onSelectNode?: (node: IsmNode) => void;
}

export const FilterToolbar: React.FC<FilterToolbarProps> = ({
  currentCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  currentView,
  onSelectView,
  totalCount,
  nodes = ISMS_DATA,
  relationships = ISM_RELATIONSHIPS,
  onSelectNode,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Category map for quick color and name lookup
  const categoryMap = useMemo(() => {
    return new Map(CATEGORIES.map((c) => [c.id, c]));
  }, []);

  // Node map for fast relation target lookup
  const nodeMap = useMemo(() => {
    return new Map(nodes.map((n) => [n.id, n]));
  }, [nodes]);

  // Fuzzy matching scoring algorithm
  const matchedResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];

    const scored = nodes
      .map((node) => {
        let score = 0;
        const name = node.name.toLowerCase();
        const en = node.englishName.toLowerCase();
        const summary = (node.summary || '').toLowerCase();
        const pitch = (node.elevatorPitch || '').toLowerCase();
        const categoryMeta = categoryMap.get(node.category);
        const catName = (categoryMeta?.name || '').toLowerCase();
        const thinkers = node.keyThinkers.map((t) => t.name.toLowerCase()).join(' ');
        const tenets = (node.coreTenets || []).join(' ').toLowerCase();

        // 1. Exact match
        if (name === q) score += 1000;
        else if (en === q) score += 900;
        // 2. Starts with query
        else if (name.startsWith(q)) score += 800;
        else if (en.startsWith(q)) score += 750;
        // 3. Name contains query
        else if (name.includes(q)) score += 600 + (30 - Math.min(name.length, 30));
        // 4. English name contains query
        else if (en.includes(q)) score += 500;
        // 5. Thinker matches
        else if (thinkers.includes(q)) score += 420;
        // 6. Category matches
        else if (catName.includes(q)) score += 360;
        // 7. Core tenets or summary matches
        else if (summary.includes(q)) score += 300;
        else if (pitch.includes(q)) score += 260;
        else if (tenets.includes(q)) score += 200;
        else {
          // 8. Fuzzy subsequence matching
          let qIdx = 0;
          for (let i = 0; i < name.length && qIdx < q.length; i++) {
            if (name[i] === q[qIdx]) qIdx++;
          }
          if (qIdx === q.length) {
            score += 150;
          }
        }

        return { node, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);

    return scored.slice(0, 8); // Top 8 matches for clean viewport
  }, [searchQuery, nodes, categoryMap]);

  // Reset highlight index when matches change
  useEffect(() => {
    setSelectedIndex(0);
  }, [matchedResults]);

  // Click outside listener to dismiss preview
  useEffect(() => {
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
    };
  }, []);

  // Handle keyboard navigation in search preview
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || matchedResults.length === 0) {
      if (e.key === 'ArrowDown' && matchedResults.length > 0) {
        setIsOpen(true);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % matchedResults.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + matchedResults.length) % matchedResults.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const current = matchedResults[selectedIndex];
      if (current) {
        handleSelectMatchedNode(current.node);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  // Jump to node on select
  const handleSelectMatchedNode = (node: IsmNode) => {
    setIsOpen(false);
    if (onSelectNode) {
      onSelectNode(node);
    }
  };

  // Get concise relationships for a node (top 2 related connections)
  const getNodeRelationsSummary = (nodeId: string) => {
    const rels = relationships.filter((r) => r.source === nodeId || r.target === nodeId);
    if (rels.length === 0) return [];

    return rels.slice(0, 2).map((rel) => {
      const isSource = rel.source === nodeId;
      const otherId = isSource ? rel.target : rel.source;
      const otherNode = nodeMap.get(otherId);
      const otherName = otherNode ? otherNode.name : otherId;

      let typeLabel = '关联';
      let tagBg = 'bg-stone-800 text-stone-300 border-stone-700';

      switch (rel.type) {
        case 'evolution':
          typeLabel = isSource ? '演进为' : '衍生自';
          tagBg = 'bg-sky-950/60 text-sky-300 border-sky-800/60';
          break;
        case 'opposition':
          typeLabel = '对立批判';
          tagBg = 'bg-rose-950/60 text-rose-300 border-rose-800/60';
          break;
        case 'catalyst':
          typeLabel = isSource ? '催生' : '反拨自';
          tagBg = 'bg-amber-950/60 text-amber-300 border-amber-800/60';
          break;
        case 'fusion':
          typeLabel = '融合交汇';
          tagBg = 'bg-purple-950/60 text-purple-300 border-purple-800/60';
          break;
        case 'dialectical':
          typeLabel = '辩证呼应';
          tagBg = 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60';
          break;
      }

      return {
        typeLabel,
        targetName: otherName,
        tagBg,
        desc: rel.label || rel.description,
      };
    });
  };

  // Highlight matched keyword characters
  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={i} className="text-amber-400 font-bold underline decoration-amber-400/50 underline-offset-2">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div className="px-6 py-3 border-b border-stone-800 bg-stone-900/40 backdrop-blur-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 shrink-0 z-30 relative">
      {/* Category Segmented Filter Buttons */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
        <button
          onClick={() => onSelectCategory('all')}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
            currentCategory === 'all'
              ? 'bg-stone-200 text-stone-900 font-semibold'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
          }`}
        >
          全域星系 ({totalCount})
        </button>

        {CATEGORIES.map((cat) => {
          const isActive = currentCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                isActive
                  ? 'bg-stone-800 text-stone-100 font-semibold border border-stone-700'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/40'
              }`}
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: cat.color }}
              />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Right Zone: Search Box & View Mode switcher on mobile */}
      <div className="flex items-center gap-3">
        {/* Mobile View Toggle */}
        <div className="flex md:hidden items-center bg-stone-800/60 p-1 rounded-lg border border-stone-700">
          <button
            onClick={() => onSelectView('constellation')}
            className={`p-1.5 rounded ${
              currentView === 'constellation' ? 'bg-stone-700 text-amber-400' : 'text-stone-400'
            }`}
            title="星图"
          >
            <Network className="w-4 h-4" />
          </button>
          <button
            onClick={() => onSelectView('timeline')}
            className={`p-1.5 rounded ${
              currentView === 'timeline' ? 'bg-stone-700 text-amber-400' : 'text-stone-400'
            }`}
            title="时间线"
          >
            <Clock className="w-4 h-4" />
          </button>
          <button
            onClick={() => onSelectView('compass')}
            className={`p-1.5 rounded ${
              currentView === 'compass' ? 'bg-stone-700 text-amber-400' : 'text-stone-400'
            }`}
            title="罗盘"
          >
            <Compass className="w-4 h-4" />
          </button>
        </div>

        {/* Search input with Fuzzy Match Preview Dropdown */}
        <div ref={containerRef} className="relative flex-1 md:w-72">
          <Search className="w-3.5 h-3.5 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onFocus={() => {
              if (searchQuery.trim().length > 0) {
                setIsOpen(true);
              }
            }}
            onChange={(e) => {
              const val = e.target.value;
              onSearchChange(val);
              if (val.trim().length > 0) {
                setIsOpen(true);
              } else {
                setIsOpen(false);
              }
            }}
            onKeyDown={handleKeyDown}
            placeholder="搜索主义、思想家或概念..."
            className="w-full bg-stone-900/80 border border-stone-700/80 rounded-lg pl-8 pr-8 py-1.5 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-400/80 transition-colors shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => {
                onSearchChange('');
                setIsOpen(false);
              }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-300"
              title="清空搜索"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Fuzzy Matching Realtime Preview Floating Layer */}
          {isOpen && searchQuery.trim().length > 0 && (
            <div 
              className="absolute right-0 top-full mt-2 w-[calc(100vw-3rem)] sm:w-[420px] max-w-[92vw] bg-stone-900/95 border border-stone-700/90 rounded-xl shadow-2xl backdrop-blur-xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
              style={{ boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.7), 0 0 15px rgba(245, 158, 11, 0.1)' }}
            >
              {/* Header Bar */}
              <div className="px-3.5 py-2 bg-stone-950/80 border-b border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
                <div className="flex items-center gap-1.5 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>思想星图模糊匹配 ({matchedResults.length})</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-stone-500">
                  <span className="hidden sm:inline">↑↓ 切换</span>
                  <span className="hidden sm:inline">↵ 直达</span>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="hover:text-stone-300 transition-colors"
                  >
                    Esc 关闭
                  </button>
                </div>
              </div>

              {/* Matches List */}
              {matchedResults.length > 0 ? (
                <div className="max-h-[380px] overflow-y-auto divide-y divide-stone-800/50 scrollbar-thin scrollbar-thumb-stone-700 scrollbar-track-transparent">
                  {matchedResults.map(({ node }, idx) => {
                    const isHighlighted = idx === selectedIndex;
                    const catMeta = categoryMap.get(node.category);
                    const relations = getNodeRelationsSummary(node.id);
                    const keyThinker = node.keyThinkers?.[0]?.name;

                    return (
                      <div
                        key={node.id}
                        onClick={() => handleSelectMatchedNode(node)}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`p-3 cursor-pointer transition-all duration-150 group relative ${
                          isHighlighted 
                            ? 'bg-amber-950/20 text-stone-100' 
                            : 'hover:bg-stone-800/40 text-stone-300'
                        }`}
                      >
                        {/* Selected Indicator left border bar */}
                        {isHighlighted && (
                          <div 
                            className="absolute left-0 top-0 bottom-0 w-1 rounded-r"
                            style={{ backgroundColor: node.color || '#f59e0b' }}
                          />
                        )}

                        {/* Top Row: Name + English Name + Category Badge + Era */}
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <div className="flex items-center gap-2 min-w-0 flex-1">
                            {/* Color Dot with glow */}
                            <span
                              className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm"
                              style={{ 
                                backgroundColor: node.color,
                                boxShadow: `0 0 8px ${node.color}88` 
                              }}
                            />
                            <h4 className="text-xs font-semibold text-stone-100 truncate flex items-center gap-1.5">
                              {highlightMatch(node.name, searchQuery)}
                              <span className="text-[10px] text-stone-400 font-normal truncate">
                                ({node.englishName})
                              </span>
                            </h4>
                          </div>

                          {/* Category Badge & Era Tag */}
                          <div className="flex items-center gap-1.5 shrink-0">
                            {catMeta && (
                              <span 
                                className="text-[10px] px-1.5 py-0.5 rounded border font-medium flex items-center gap-1"
                                style={{
                                  color: catMeta.color,
                                  borderColor: `${catMeta.color}40`,
                                  backgroundColor: `${catMeta.color}15`
                                }}
                              >
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: catMeta.color }} />
                                {catMeta.name}
                              </span>
                            )}
                            {node.period && (
                              <span className="text-[9px] text-stone-500 bg-stone-800/80 px-1 py-0.5 rounded border border-stone-700/50 hidden sm:inline-block">
                                {node.period}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Middle Row: Concise Relation Explanation */}
                        {relations.length > 0 && (
                          <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                            <span className="text-[10px] text-stone-500 font-medium flex items-center gap-1">
                              <GitFork className="w-2.5 h-2.5 text-stone-400" />
                              关联流派:
                            </span>
                            {relations.map((rel, rIdx) => (
                              <span 
                                key={rIdx}
                                className={`text-[10px] px-1.5 py-0.5 rounded border flex items-center gap-1 ${rel.tagBg}`}
                                title={rel.desc}
                              >
                                <span className="opacity-75">{rel.typeLabel}</span>
                                <span className="font-medium underline decoration-dotted underline-offset-1">{rel.targetName}</span>
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Bottom Row: Brief Summary & Thinkers */}
                        <p className="text-[11px] text-stone-400 line-clamp-2 leading-relaxed mb-1.5">
                          {highlightMatch(node.summary || node.elevatorPitch, searchQuery)}
                        </p>

                        {/* Footer: Thinkers & Jump CTA */}
                        <div className="flex items-center justify-between text-[10px] text-stone-500 pt-1 border-t border-stone-800/40">
                          {keyThinker ? (
                            <span className="flex items-center gap-1 truncate text-stone-400">
                              <User className="w-2.5 h-2.5 text-stone-500 shrink-0" />
                              <span>代表人物: {keyThinker}</span>
                              {node.keyThinkers.length > 1 && (
                                <span className="text-stone-500">等{node.keyThinkers.length}人</span>
                              )}
                            </span>
                          ) : (
                            <span className="text-stone-500">核心观念与实践体系</span>
                          )}

                          <span className={`flex items-center gap-1 text-[10px] font-medium transition-colors ${
                            isHighlighted ? 'text-amber-400' : 'text-stone-500 group-hover:text-amber-400'
                          }`}>
                            <span>直达星图</span>
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* Empty state */
                <div className="p-6 text-center text-xs text-stone-400">
                  <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center mx-auto mb-2 text-stone-500">
                    <Search className="w-4 h-4" />
                  </div>
                  <p className="text-stone-300 font-medium mb-1">
                    未在星图中找到与 “{searchQuery}” 直接匹配的主义
                  </p>
                  <p className="text-[11px] text-stone-500 max-w-xs mx-auto">
                    可尝试搜索核心词，例如：虚无、朋克、唯物、功利、自由、萨特、尼采 或 存在主义
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
