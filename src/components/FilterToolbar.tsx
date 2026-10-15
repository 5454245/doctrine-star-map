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
  Activity
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

  const categoryMap = useMemo(() => {
    return new Map(CATEGORIES.map((c) => [c.id, c]));
  }, []);

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

        if (name === q) score += 1000;
        else if (en === q) score += 900;
        else if (name.startsWith(q)) score += 800;
        else if (en.startsWith(q)) score += 750;
        else if (name.includes(q)) score += 600;
        else if (en.includes(q)) score += 500;
        else if (thinkers.includes(q)) score += 420;
        else if (catName.includes(q)) score += 360;
        else if (summary.includes(q)) score += 300;
        else if (pitch.includes(q)) score += 260;
        else if (tenets.includes(q)) score += 200;
        else {
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

    return scored.slice(0, 8);
  }, [searchQuery, nodes, categoryMap]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [matchedResults]);

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

  const handleSelectMatchedNode = (node: IsmNode) => {
    setIsOpen(false);
    if (onSelectNode) {
      onSelectNode(node);
    }
  };

  const getNodeRelationsSummary = (nodeId: string) => {
    const rels = relationships.filter((r) => r.source === nodeId || r.target === nodeId);
    if (rels.length === 0) return [];

    return rels.slice(0, 2).map((rel) => {
      const isSource = rel.source === nodeId;
      const otherId = isSource ? rel.target : rel.source;
      const otherNode = nodeMap.get(otherId);
      const otherName = otherNode ? otherNode.name : otherId;

      let typeLabel = '关联';
      let tagBg = 'bg-white/5 text-zinc-300 border-white/20';

      switch (rel.type) {
        case 'evolution':
          typeLabel = isSource ? '演进为' : '衍生自';
          tagBg = 'bg-cyan-950/40 text-cyan-300 border-cyan-800/40';
          break;
        case 'opposition':
          typeLabel = '对立批判';
          tagBg = 'bg-rose-950/40 text-rose-300 border-rose-800/40';
          break;
        case 'catalyst':
          typeLabel = isSource ? '催生' : '反拨自';
          tagBg = 'bg-white/10 text-white border-white/30';
          break;
        case 'fusion':
          typeLabel = '融合交汇';
          tagBg = 'bg-emerald-950/40 text-emerald-300 border-emerald-800/40';
          break;
        case 'dialectical':
          typeLabel = '辩证呼应';
          tagBg = 'bg-purple-950/40 text-purple-300 border-purple-800/40';
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

  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={i} className="text-white font-bold bg-white/20 px-0.5">
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
    <div className="px-6 py-2.5 border-b border-white/10 bg-black/90 backdrop-blur-xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 shrink-0 z-30 relative font-mono">
      {/* Category Filter Buttons (Monospace Technical Bar) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
        <button
          onClick={() => onSelectCategory('all')}
          className={`px-3 py-1.5 text-xs uppercase tracking-wider rounded-lg transition-all whitespace-nowrap shrink-0 border ${
            currentCategory === 'all'
              ? 'bg-white text-black border-white font-bold shadow-sm'
              : 'text-zinc-400 border-white/10 hover:border-white/30 hover:text-white bg-black/40'
          }`}
        >
          ALL SPECTRUM [{totalCount}]
        </button>

        {CATEGORIES.map((cat) => {
          const isActive = currentCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider rounded-lg transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 border ${
                isActive
                  ? 'bg-white text-black border-white font-bold shadow-sm'
                  : 'text-zinc-400 border-white/10 hover:border-white/30 hover:text-white bg-black/40'
              }`}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: cat.color }}
              />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Right Zone: Search Box & Mobile Switcher */}
      <div className="flex items-center gap-3">
        {/* Mobile View Toggle */}
        <div className="flex md:hidden items-center bg-black/60 p-0.5 border border-white/10 rounded-lg">
          <button
            onClick={() => onSelectView('constellation')}
            className={`p-1.5 rounded-md ${currentView === 'constellation' ? 'bg-white text-black' : 'text-zinc-400'}`}
          >
            <Network className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onSelectView('timeline')}
            className={`p-1.5 rounded-md ${currentView === 'timeline' ? 'bg-white text-black' : 'text-zinc-400'}`}
          >
            <Clock className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onSelectView('compass')}
            className={`p-1.5 rounded-md ${currentView === 'compass' ? 'bg-white text-black' : 'text-zinc-400'}`}
          >
            <Compass className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Telemetry Search input */}
        <div ref={containerRef} className="relative flex-1 md:w-80">
          <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onFocus={() => {
              if (searchQuery.trim().length > 0) setIsOpen(true);
            }}
            onChange={(e) => {
              const val = e.target.value;
              onSearchChange(val);
              setIsOpen(val.trim().length > 0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="SEARCH // 搜索主义、思想家或概念..."
            className="w-full bg-neutral-950/90 border border-white/10 rounded-lg pl-8 pr-8 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/50 font-mono transition-colors shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => {
                onSearchChange('');
                setIsOpen(false);
              }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Search Results Floating Layer */}
          {isOpen && searchQuery.trim().length > 0 && (
            <div 
              className="absolute right-0 top-full mt-2 w-[calc(100vw-3rem)] sm:w-[440px] max-w-[92vw] bg-zinc-950/95 border border-white/15 rounded-xl shadow-2xl backdrop-blur-xl z-50 overflow-hidden font-mono"
            >
              {/* Header Bar */}
              <div className="px-3.5 py-2 bg-black/60 border-b border-white/10 flex items-center justify-between text-[11px] text-zinc-400 uppercase tracking-widest">
                <div className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  <span>SEARCH RESULTS [{matchedResults.length}]</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-zinc-500">
                  <span className="hidden sm:inline">↑↓ NAV</span>
                  <span className="hidden sm:inline">↵ LOCK</span>
                  <button onClick={() => setIsOpen(false)} className="hover:text-white">
                    ESC
                  </button>
                </div>
              </div>

              {/* Matches List */}
              {matchedResults.length > 0 ? (
                <div className="max-h-[360px] overflow-y-auto divide-y divide-white/10">
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
                        className={`p-3 cursor-pointer transition-all ${
                          isHighlighted 
                            ? 'bg-white/10 text-white' 
                            : 'hover:bg-white/5 text-zinc-300'
                        }`}
                      >
                        {/* Top Row */}
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <div className="flex items-center gap-2 min-w-0 flex-1">
                            <span
                              className="w-2 h-2 rounded-full shrink-0"
                              style={{ backgroundColor: node.color }}
                            />
                            <h4 className="text-xs font-bold text-white truncate flex items-center gap-1.5">
                              {highlightMatch(node.name, searchQuery)}
                              <span className="text-[10px] text-zinc-500 font-normal truncate">
                                [{node.englishName}]
                              </span>
                            </h4>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            {catMeta && (
                              <span className="text-[9px] px-1 py-0.5 border border-white/20 text-zinc-300 uppercase">
                                {catMeta.name}
                              </span>
                            )}
                            {node.period && (
                              <span className="text-[9px] text-zinc-500 border border-white/10 px-1 py-0.5 hidden sm:inline-block">
                                {node.period.split('（')[0]}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Middle Row */}
                        {relations.length > 0 && (
                          <div className="flex flex-wrap items-center gap-1.5 my-1">
                            <span className="text-[9px] text-zinc-500 uppercase">
                              LINK:
                            </span>
                            {relations.map((rel, rIdx) => (
                              <span 
                                key={rIdx}
                                className={`text-[9px] px-1.5 py-0.2 border flex items-center gap-1 ${rel.tagBg}`}
                              >
                                <span className="opacity-70">{rel.typeLabel}</span>
                                <span className="font-bold">{rel.targetName}</span>
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Summary */}
                        <p className="text-[11px] text-zinc-400 line-clamp-2 leading-snug my-1 font-sans">
                          {highlightMatch(node.summary || node.elevatorPitch, searchQuery)}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-1 border-t border-white/10">
                          {keyThinker ? (
                            <span>FIGURE // {keyThinker}</span>
                          ) : (
                            <span>CORE PARADIGM</span>
                          )}

                          <span className="text-cyan-400 flex items-center gap-1 text-[10px] uppercase tracking-wider">
                            <span>LOCK & VIEW</span>
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="p-6 text-center text-xs text-zinc-400">
                  <p className="text-white font-mono mb-1">
                    NO DIRECT TARGET MATCH FOR “{searchQuery}”
                  </p>
                  <p className="text-[11px] text-zinc-500">
                    TRY: 存在主义, 唯物, 赛博, 虚无, 自由意志, 康德, 尼采
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
