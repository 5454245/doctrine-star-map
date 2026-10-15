import React, { useState, useMemo, useRef, useCallback } from 'react';
import { IsmNode, CategoryType } from '../types/ism';
import {
  Sparkles,
  Layers,
  Crosshair,
  ArrowUpRight,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';

interface CompassViewProps {
  nodes: IsmNode[];
  selectedNodeId: string | null;
  filterCategory: CategoryType | 'all';
  searchQuery: string;
  onSelectNode: (node: IsmNode) => void;
}

type AxisMode = 'classic' | 'cultural' | 'liberty_culture';
type ScopeMode = 'core' | 'all';
type LabelMode = 'smart' | 'all' | 'hover_only';
type QuadrantFilter = 'all' | 'q1' | 'q2' | 'q3' | 'q4';

// 42 精选最具标杆代表性的流派，在罗盘上作为常驻地标
const CORE_REPRESENTATIVE_IDS = new Set([
  'classical_liberalism',
  'neoliberalism',
  'libertarianism',
  'anarcho_capitalism',
  'socialism',
  'communism',
  'democratic_socialism',
  'marxism_leninism',
  'anarchism',
  'mutualism',
  'fascism',
  'national_socialism',
  'state_capitalism',
  'conservatism',
  'neoconservatism',
  'traditionalism',
  'progressivism',
  'social_democracy',
  'ordoliberalism',
  'syndicalism',
  'collectivism',
  'individualism',
  'communitarianism',
  'technocracy',
  'transhumanism',
  'accelerationism',
  'existentialism',
  'nihilism',
  'rationalism',
  'empiricism',
  'pragmatism',
  'postmodernism',
  'structuralism',
  'deconstruction',
  'stoicism',
  'epicureanism',
  'utilitarianism',
  'kantianism',
  'humanism',
  'cosmopolitanism',
  'nationalism',
  'ecologism',
]);

export const CompassView: React.FC<CompassViewProps> = ({
  nodes,
  selectedNodeId,
  filterCategory,
  searchQuery,
  onSelectNode,
}) => {
  const [axisMode, setAxisMode] = useState<AxisMode>('classic');
  const [scopeMode, setScopeMode] = useState<ScopeMode>('core');
  const [labelMode, setLabelMode] = useState<LabelMode>('smart');
  const [quadrantFilter, setQuadrantFilter] = useState<QuadrantFilter>('all');
  const [hoveredNode, setHoveredNode] = useState<IsmNode | null>(null);

  // Interactive Zoom & Pan State on Radar Board
  const [radarZoom, setRadarZoom] = useState<number>(1.0);
  const [radarPan, setRadarPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const isDraggingBoardRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  // Compute Axis definition according to axisMode
  const axisConfig = useMemo(() => {
    switch (axisMode) {
      case 'cultural':
        return {
          title: '文化观念与哲学本体罗盘 // CULTURAL & ONTOLOGICAL RADAR',
          desc: '横轴：理性客观 vs 感性建构；纵轴：传统保守 vs 激进未来',
          topLabel: '激进 / 未来主义 (RADICAL)',
          bottomLabel: '传统 / 秩序保守 (TRADITIONAL)',
          leftLabel: '理性 / 客观实在 (RATIONAL)',
          rightLabel: '感性 / 相对建构 (CONSTRUCTED)',
          q1: '激进理性 (Radical Rationalism)',
          q2: '激进建构 (Radical Deconstruction)',
          q3: '传统唯理 (Traditional Realism)',
          q4: '传统经验 (Traditional Romanticism)',
          getX: (node: IsmNode) => {
            const pol = node.spectrum?.political ?? 0;
            const soc = node.spectrum?.social ?? 0;
            return Math.max(-1, Math.min(1, pol * 0.4 + (1 - soc) * 0.6));
          },
          getY: (node: IsmNode) => {
            const soc = node.spectrum?.social ?? 0;
            return Math.max(-1, Math.min(1, soc));
          },
        };
      case 'liberty_culture':
        return {
          title: '公权边界与社会开放度罗盘 // AUTHORITY & SOCIAL OPENNESS',
          desc: '横轴：个体自主 vs 集中统合；纵轴：社会开放 vs 规范约束',
          topLabel: '高度开放 / 多元包容 (OPEN / PLURAL)',
          bottomLabel: '强力约束 / 一元统制 (AUTHORITY / UNIFIED)',
          leftLabel: '个体自主 / 权力消解 (AUTONOMY)',
          rightLabel: '国家统领 / 集中调控 (STATE CONTROL)',
          q1: '左翼自主 (Libertarian Left)',
          q2: '统合威权 (Authoritarian Statism)',
          q3: '多元公社 (Pluralist Commune)',
          q4: '秩序统制 (Totalitarian Order)',
          getX: (node: IsmNode) => -(node.spectrum?.political ?? 0),
          getY: (node: IsmNode) => node.spectrum?.social ?? 0,
        };
      case 'classic':
      default:
        return {
          title: '经典政治经济坐标罗盘 // CLASSICAL POLITICAL COMPASS',
          desc: '横轴：经济公有 ← → 自由私有；纵轴：自由自治 ← → 权威集权',
          topLabel: '威权 / 集权 (AUTHORITARIAN)',
          bottomLabel: '自由 / 自治 (LIBERTARIAN)',
          leftLabel: '经济公有 / 平等分配 (LEFT)',
          rightLabel: '经济私有 / 自由市场 (RIGHT)',
          q1: '威权左翼 (Auth-Left)',
          q2: '威权右翼 (Auth-Right)',
          q3: '自由意志左翼 (Lib-Left)',
          q4: '自由意志右翼 (Lib-Right)',
          getX: (node: IsmNode) => node.spectrum?.economic ?? 0,
          getY: (node: IsmNode) => node.spectrum?.political ?? 0,
        };
    }
  }, [axisMode]);

  // Handle quadrant focus & auto-zoom
  const handleSelectQuadrant = (q: QuadrantFilter) => {
    setQuadrantFilter(q);
    if (q === 'all') {
      setRadarZoom(1.0);
      setRadarPan({ x: 0, y: 0 });
    } else if (q === 'q1') {
      // Top-Left quadrant
      setRadarZoom(1.75);
      setRadarPan({ x: 22, y: 22 });
    } else if (q === 'q2') {
      // Top-Right quadrant
      setRadarZoom(1.75);
      setRadarPan({ x: -22, y: 22 });
    } else if (q === 'q3') {
      // Bottom-Left quadrant
      setRadarZoom(1.75);
      setRadarPan({ x: 22, y: -22 });
    } else if (q === 'q4') {
      // Bottom-Right quadrant
      setRadarZoom(1.75);
      setRadarPan({ x: -22, y: -22 });
    }
  };

  // Zoom handlers
  const handleZoom = (type: 'in' | 'out') => {
    setRadarZoom((prev) => {
      const next = type === 'in' ? prev * 1.25 : prev / 1.25;
      return Math.max(0.7, Math.min(3.0, next));
    });
  };

  const handleResetRadar = () => {
    setRadarZoom(1.0);
    setRadarPan({ x: 0, y: 0 });
    setQuadrantFilter('all');
  };

  // Wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const factor = e.deltaY > 0 ? 0.9 : 1.1;
    setRadarZoom((prev) => Math.max(0.7, Math.min(3.0, prev * factor)));
  };

  // Dragging / Panning radar board
  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.node-point-element')) return;
    isDraggingBoardRef.current = true;
    dragStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingBoardRef.current) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    setRadarPan((prev) => ({
      x: prev.x + (dx / 500) * 100,
      y: prev.y + (dy / 500) * 100,
    }));
  };

  const handleMouseUp = () => {
    isDraggingBoardRef.current = false;
  };

  // Filter nodes
  const filteredNodes = useMemo(() => {
    return nodes.filter((node) => {
      if (filterCategory !== 'all' && node.category !== filterCategory) {
        return false;
      }
      if (scopeMode === 'core' && !CORE_REPRESENTATIVE_IDS.has(node.id)) {
        if (selectedNodeId !== node.id) {
          return false;
        }
      }
      return true;
    });
  }, [nodes, filterCategory, scopeMode, selectedNodeId]);

  const queryLower = searchQuery.trim().toLowerCase();

  // Position calculation & boundary protection
  const placedNodes = useMemo(() => {
    const points: Array<{
      node: IsmNode;
      x: number; // percentage 0 - 100
      y: number; // percentage 0 - 100
      isCore: boolean;
      quadrant: 'q1' | 'q2' | 'q3' | 'q4';
    }> = [];

    for (let i = 0; i < filteredNodes.length; i++) {
      const node = filteredNodes[i];
      const rawX = axisConfig.getX(node);
      const rawY = axisConfig.getY(node);

      // Determine quadrant
      let q: 'q1' | 'q2' | 'q3' | 'q4' = 'q1';
      if (rawX <= 0 && rawY >= 0) q = 'q1';
      else if (rawX >= 0 && rawY >= 0) q = 'q2';
      else if (rawX <= 0 && rawY <= 0) q = 'q3';
      else q = 'q4';

      // Base percentage 9% ~ 91%
      const px = ((rawX + 1) / 2) * 82 + 9;
      const py = ((-rawY + 1) / 2) * 82 + 9;

      const isCore = CORE_REPRESENTATIVE_IDS.has(node.id);

      points.push({
        node,
        x: px,
        y: py,
        isCore,
        quadrant: q,
      });
    }

    return points;
  }, [filteredNodes, axisConfig]);

  const isDrawerOpen = !!selectedNodeId;

  return (
    <div
      className={`w-full h-full overflow-y-auto overflow-x-hidden bg-black px-2 md:px-6 py-2 flex flex-col items-center justify-between font-sans text-white select-none transition-all ${
        isDrawerOpen ? '2xl:pr-[500px]' : ''
      }`}
    >
      {/* 1. Header & Controls Integrated Telemetry Bar (Compact Height) */}
      <div className="w-full max-w-4xl flex flex-col gap-1.5 shrink-0 font-mono">
        {/* Title Bar */}
        <div className="flex items-center justify-between gap-2 px-1">
          <div className="flex items-center gap-2">
            <Crosshair className="w-4 h-4 text-cyan-400 shrink-0" />
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-wider text-white">
              {axisConfig.title}
            </h2>
          </div>
          <span className="text-[10px] text-zinc-400 hidden sm:inline">
            {axisConfig.desc}
          </span>
        </div>

        {/* Toolbar Controls */}
        <div className="flex flex-wrap items-center justify-between gap-1.5 bg-zinc-950/80 border border-white/10 rounded-xl p-1.5 shadow-lg backdrop-blur-xl">
          {/* Axis Mode */}
          <div className="flex items-center gap-1 bg-black/60 p-0.5 border border-white/10 rounded-lg">
            <button
              type="button"
              onClick={() => setAxisMode('classic')}
              className={`px-2 py-0.5 text-[11px] uppercase tracking-wider rounded-md transition-all ${
                axisMode === 'classic'
                  ? 'bg-white text-black font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              经典政治经济
            </button>
            <button
              type="button"
              onClick={() => setAxisMode('cultural')}
              className={`px-2 py-0.5 text-[11px] uppercase tracking-wider rounded-md transition-all ${
                axisMode === 'cultural'
                  ? 'bg-white text-black font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              文化观念谱系
            </button>
            <button
              type="button"
              onClick={() => setAxisMode('liberty_culture')}
              className={`px-2 py-0.5 text-[11px] uppercase tracking-wider rounded-md transition-all ${
                axisMode === 'liberty_culture'
                  ? 'bg-white text-black font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              公权与多元
            </button>
          </div>

          {/* Scope Mode & Label Mode */}
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-1 bg-black/60 p-0.5 border border-white/10 rounded-lg">
              <button
                type="button"
                onClick={() => setScopeMode('core')}
                className={`px-2 py-0.5 text-[11px] uppercase tracking-wider rounded-md transition-all flex items-center gap-1 ${
                  scopeMode === 'core'
                    ? 'bg-white text-black font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3 h-3" />
                <span>精简标杆 [{CORE_REPRESENTATIVE_IDS.size}]</span>
              </button>
              <button
                type="button"
                onClick={() => setScopeMode('all')}
                className={`px-2 py-0.5 text-[11px] uppercase tracking-wider rounded-md transition-all flex items-center gap-1 ${
                  scopeMode === 'all'
                    ? 'bg-white text-black font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Layers className="w-3 h-3" />
                <span>全谱系 [{nodes.length}]</span>
              </button>
            </div>

            <div className="hidden md:flex items-center gap-1 bg-black/60 p-0.5 border border-white/10 rounded-lg text-[11px] text-zinc-400">
              <button
                type="button"
                onClick={() => setLabelMode('smart')}
                className={`px-1.5 py-0.5 rounded-md ${
                  labelMode === 'smart' ? 'bg-white text-black font-bold' : 'hover:text-white'
                }`}
              >
                智能标签
              </button>
              <button
                type="button"
                onClick={() => setLabelMode('all')}
                className={`px-1.5 py-0.5 rounded-md ${
                  labelMode === 'all' ? 'bg-white text-black font-bold' : 'hover:text-white'
                }`}
              >
                常驻全显
              </button>
              <button
                type="button"
                onClick={() => setLabelMode('hover_only')}
                className={`px-1.5 py-0.5 rounded-md ${
                  labelMode === 'hover_only' ? 'bg-white text-black font-bold' : 'hover:text-white'
                }`}
              >
                仅悬停
              </button>
            </div>
          </div>

          {/* Quadrant Focus Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto text-[11px]">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest mr-0.5">象限:</span>
            <button
              type="button"
              onClick={() => handleSelectQuadrant('all')}
              className={`px-1.5 py-0.5 rounded border transition-all ${
                quadrantFilter === 'all'
                  ? 'border-white bg-white text-black font-bold shadow-sm'
                  : 'border-white/10 text-zinc-400 hover:text-white'
              }`}
            >
              全景
            </button>
            <button
              type="button"
              onClick={() => handleSelectQuadrant('q1')}
              className={`px-1.5 py-0.5 rounded border transition-all ${
                quadrantFilter === 'q1'
                  ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200 font-bold shadow-sm'
                  : 'border-white/10 text-zinc-400 hover:text-white'
              }`}
            >
              Q1
            </button>
            <button
              type="button"
              onClick={() => handleSelectQuadrant('q2')}
              className={`px-1.5 py-0.5 rounded border transition-all ${
                quadrantFilter === 'q2'
                  ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200 font-bold shadow-sm'
                  : 'border-white/10 text-zinc-400 hover:text-white'
              }`}
            >
              Q2
            </button>
            <button
              type="button"
              onClick={() => handleSelectQuadrant('q3')}
              className={`px-1.5 py-0.5 rounded border transition-all ${
                quadrantFilter === 'q3'
                  ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200 font-bold shadow-sm'
                  : 'border-white/10 text-zinc-400 hover:text-white'
              }`}
            >
              Q3
            </button>
            <button
              type="button"
              onClick={() => handleSelectQuadrant('q4')}
              className={`px-1.5 py-0.5 rounded border transition-all ${
                quadrantFilter === 'q4'
                  ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200 font-bold shadow-sm'
                  : 'border-white/10 text-zinc-400 hover:text-white'
              }`}
            >
              Q4
            </button>
          </div>
        </div>
      </div>

      {/* 2. Responsive Coordinate Radar Board (Guaranteed 100% Screen Fit) */}
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
        className="relative w-full max-w-4xl flex-1 min-h-[300px] max-h-[calc(100vh-185px)] bg-zinc-950/90 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center font-mono my-1 select-none cursor-grab active:cursor-grabbing shrink-0"
      >
        {/* Transform Container with Zoom & Pan */}
        <div
          className="relative w-full h-full transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${radarPan.x}%, ${radarPan.y}%) scale(${radarZoom})`,
            transformOrigin: 'center center',
          }}
        >
          {/* Radar Concentric Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div className="w-[85%] h-[85%] rounded-full border border-white/40 border-dashed" />
            <div className="absolute w-[60%] h-[60%] rounded-full border border-white/30" />
            <div className="absolute w-[35%] h-[35%] rounded-full border border-white/20 border-dotted" />
          </div>

          {/* Quadrant Watermark Labels */}
          <div
            className={`absolute top-0 left-0 w-1/2 h-1/2 border-r border-b border-white/10 p-3.5 transition-colors ${
              quadrantFilter === 'q1' || quadrantFilter === 'all' ? 'bg-white/[0.02]' : 'opacity-15'
            }`}
          >
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">{axisConfig.q1}</span>
          </div>
          <div
            className={`absolute top-0 right-0 w-1/2 h-1/2 border-b border-white/10 p-3.5 text-right transition-colors ${
              quadrantFilter === 'q2' || quadrantFilter === 'all' ? 'bg-white/[0.02]' : 'opacity-15'
            }`}
          >
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">{axisConfig.q2}</span>
          </div>
          <div
            className={`absolute bottom-0 left-0 w-1/2 h-1/2 border-r border-white/10 p-3.5 flex items-end transition-colors ${
              quadrantFilter === 'q3' || quadrantFilter === 'all' ? 'bg-white/[0.02]' : 'opacity-15'
            }`}
          >
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">{axisConfig.q3}</span>
          </div>
          <div
            className={`absolute bottom-0 right-0 w-1/2 h-1/2 p-3.5 flex items-end justify-end transition-colors ${
              quadrantFilter === 'q4' || quadrantFilter === 'all' ? 'bg-white/[0.02]' : 'opacity-15'
            }`}
          >
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">{axisConfig.q4}</span>
          </div>

          {/* Central Crosshair Axes */}
          <div className="absolute inset-x-6 top-1/2 h-[1px] bg-white/25 -translate-y-1/2 pointer-events-none" />
          <div className="absolute inset-y-6 left-1/2 w-[1px] bg-white/25 -translate-x-1/2 pointer-events-none" />

          {/* Center Origin Reticle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 border border-white/30 rounded-full pointer-events-none flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          </div>

          {/* Placed Nodes on the Coordinate Plane */}
          {placedNodes.map(({ node, x, y, isCore, quadrant }) => {
            const isSelected = selectedNodeId === node.id;
            const isHovered = hoveredNode?.id === node.id;
            const isOtherHovered = hoveredNode !== null && !isHovered && !isSelected;
            const isMatched = queryLower
              ? node.name.toLowerCase().includes(queryLower) ||
                node.englishName.toLowerCase().includes(queryLower)
              : false;

            // Quadrant filter visibility
            const isDimmedByQuadrant = quadrantFilter !== 'all' && quadrantFilter !== quadrant;

            const shouldShowLabel =
              !isDimmedByQuadrant &&
              (labelMode === 'all' ||
                isHovered ||
                isSelected ||
                isMatched ||
                (labelMode === 'smart' && isCore));

            // Smart anchor calculation to keep labels within bounds
            let alignClass = '-translate-x-1/2';
            if (x < 18) alignClass = 'translate-x-2 text-left';
            else if (x > 82) alignClass = '-translate-x-[calc(100%+8px)] text-right';

            let vAlignClass = '-top-5';
            if (y < 16) vAlignClass = 'top-4';
            else if (y > 84) vAlignClass = '-top-5';

            return (
              <div
                key={node.id}
                onClick={() => onSelectNode(node)}
                onMouseEnter={() => setHoveredNode(node)}
                onMouseLeave={() => setHoveredNode(null)}
                className={`node-point-element absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 group ${
                  isSelected
                    ? 'z-50 scale-125'
                    : isHovered
                    ? 'z-40 scale-115'
                    : isMatched
                    ? 'z-35 scale-110'
                    : isDimmedByQuadrant
                    ? 'opacity-20 pointer-events-none'
                    : isOtherHovered
                    ? 'opacity-25 z-10'
                    : isCore
                    ? 'z-25'
                    : 'z-20'
                }`}
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                }}
              >
                <div className="relative flex flex-col items-center">
                  {isSelected && (
                    <div
                      className="absolute -inset-2.5 rounded-full border animate-ping opacity-85 pointer-events-none"
                      style={{ borderColor: node.color }}
                    />
                  )}

                  {/* Node Dot in Authentic Chromatic Accent Color */}
                  <div
                    className={`w-3.5 h-3.5 rounded-full border transition-all ${
                      isSelected
                        ? 'scale-150 ring-2 ring-white/90 shadow-xl'
                        : isHovered
                        ? 'scale-140 ring-2 ring-white/50'
                        : isMatched
                        ? 'scale-130 ring-2 ring-cyan-400'
                        : isCore
                        ? 'shadow-md ring-1 ring-white/20'
                        : 'border-white/30'
                    }`}
                    style={{
                      backgroundColor: node.color,
                      borderColor: isSelected ? '#ffffff' : node.color,
                      boxShadow: isSelected || isHovered ? `0 0 14px ${node.color}` : 'none',
                    }}
                  />

                  {/* Node Text Label with Collision-Safe Alignment */}
                  {shouldShowLabel && (
                    <div
                      className={`absolute whitespace-nowrap pointer-events-none ${vAlignClass} ${alignClass}`}
                    >
                      <span
                        className={`px-2 py-0.5 rounded-md text-[10px] font-mono transition-all border shadow-sm ${
                          isSelected
                            ? 'bg-zinc-950 text-white font-bold border-cyan-400 ring-1 ring-cyan-400'
                            : isHovered
                            ? 'bg-zinc-950 text-white font-bold border-white'
                            : isMatched
                            ? 'bg-black text-cyan-300 font-bold border-cyan-400'
                            : isCore
                            ? 'bg-black/90 text-white border-white/30'
                            : 'bg-black/90 text-zinc-400 border-white/10 group-hover:text-white'
                        }`}
                        style={{
                          borderColor: isSelected || isHovered ? node.color : undefined,
                        }}
                      >
                        {node.name}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Fixed Perimeter Axis Badges (Stationary on Board Frame) */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-wider text-white bg-black/85 px-3 py-0.5 rounded-md border border-white/20 pointer-events-none z-30 shadow-md">
          {axisConfig.topLabel}
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-wider text-white bg-black/85 px-3 py-0.5 rounded-md border border-white/20 pointer-events-none z-30 shadow-md">
          {axisConfig.bottomLabel}
        </div>
        <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-wider text-white bg-black/85 px-2.5 py-0.5 rounded-md border border-white/20 pointer-events-none z-30 shadow-md">
          {axisConfig.leftLabel}
        </div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-wider text-white bg-black/85 px-2.5 py-0.5 rounded-md border border-white/20 pointer-events-none z-30 shadow-md">
          {axisConfig.rightLabel}
        </div>

        {/* Floating Zoom & Pan Controls (Bottom Right) */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-zinc-950/90 border border-white/15 rounded-lg p-1 z-30 shadow-xl backdrop-blur-md">
          <div className="px-1.5 text-[10px] text-zinc-400 border-r border-white/10 hidden sm:block">
            {Math.round(radarZoom * 100)}%
          </div>
          <button
            type="button"
            onClick={() => handleZoom('in')}
            className="w-6 h-6 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/10 rounded transition-colors"
            title="放大坐标系"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => handleZoom('out')}
            className="w-6 h-6 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/10 rounded transition-colors"
            title="缩小坐标系"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={handleResetRadar}
            className="w-6 h-6 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/10 rounded transition-colors border-l border-white/10"
            title="重置罗盘视角"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Hover Detailed Inspection Floating HUD */}
        {hoveredNode && (
          <div
            className="absolute bottom-4 left-4 right-4 sm:right-auto sm:w-80 bg-zinc-950/95 border rounded-xl p-3 shadow-2xl backdrop-blur-xl z-50 pointer-events-none font-mono animate-tooltip-fade-in"
            style={{
              borderColor: `${hoveredNode.color}60`,
              boxShadow: `0 15px 35px -5px rgba(0,0,0,0.9), 0 0 20px -2px ${hoveredNode.color}35`,
            }}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: hoveredNode.color }}
                />
                <h4 className="font-bold text-xs text-white">{hoveredNode.name}</h4>
              </div>

              <div className="text-[10px] text-cyan-400">
                X: {axisConfig.getX(hoveredNode) > 0 ? `+${axisConfig.getX(hoveredNode).toFixed(2)}` : axisConfig.getX(hoveredNode).toFixed(2)} | 
                Y: {axisConfig.getY(hoveredNode) > 0 ? `+${axisConfig.getY(hoveredNode).toFixed(2)}` : axisConfig.getY(hoveredNode).toFixed(2)}
              </div>
            </div>

            <p className="text-[11px] text-zinc-300 leading-snug line-clamp-2 font-sans mb-1.5">
              {hoveredNode.summary}
            </p>

            <div className="pt-1 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-400">
              <span>CLICK TO OPEN DOSSIER</span>
              <ArrowUpRight className="w-3 h-3 text-cyan-400" />
            </div>
          </div>
        )}
      </div>

      {/* 3. Subtle Status Footer */}
      <div className="w-full max-w-4xl flex items-center justify-between text-[10px] text-zinc-500 font-mono uppercase tracking-wider shrink-0 px-2 py-0.5">
        <span>SYS // 42 CORE LANDMARKS ACTIVE // DRAG OR WHEEL TO PAN & ZOOM</span>
        <span className="hidden sm:inline">RADAR CALIBRATION NOMINAL</span>
      </div>
    </div>
  );
};
