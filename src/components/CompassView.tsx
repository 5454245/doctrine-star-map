import React, { useState, useMemo } from 'react';
import { IsmNode, CategoryType } from '../types/ism';
import { CATEGORIES } from '../data/ismsData';
import {
  Compass,
  ArrowUpRight,
  Layers,
  Sparkles,
  Search,
  ZoomIn,
  Target,
  Crosshair,
  Sliders
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
          desc: '横轴：经济所有制与分配模式（集体公有 ← → 自由私有）；纵轴：社会公权治理（自由民主 ← → 权威集权）',
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

  // Position calculation & smart collision avoidance for label layout
  const placedNodes = useMemo(() => {
    const points: Array<{
      node: IsmNode;
      x: number; // percentage 0 - 100
      y: number; // percentage 0 - 100
      labelPosition: 'top' | 'bottom';
      isCore: boolean;
    }> = [];

    for (let i = 0; i < filteredNodes.length; i++) {
      const node = filteredNodes[i];
      const rawX = axisConfig.getX(node);
      const rawY = axisConfig.getY(node);

      const px = ((rawX + 1) / 2) * 82 + 9;
      const py = ((-rawY + 1) / 2) * 82 + 9;

      const isCore = CORE_REPRESENTATIVE_IDS.has(node.id);
      const labelPos = py > 50 ? 'bottom' : 'top';

      points.push({
        node,
        x: px,
        y: py,
        labelPosition: labelPos,
        isCore,
      });
    }

    return points;
  }, [filteredNodes, axisConfig]);

  return (
    <div className="w-full h-full overflow-y-auto bg-black px-3 md:px-8 py-5 flex flex-col items-center font-sans text-white">
      {/* 1. Header */}
      <div className="text-center max-w-3xl mb-4 space-y-1.5 font-mono">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-cyan-400">
          <Crosshair className="w-3.5 h-3.5" />
          <span>TELEMETRY RADAR // 意识形态全景二维罗盘</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white">
          {axisConfig.title}
        </h2>
        <p className="text-zinc-400 text-xs leading-relaxed max-w-2xl mx-auto font-sans">
          {axisConfig.desc}
        </p>
      </div>

      {/* 2. Telemetry Control Toolbar */}
      <div className="w-full max-w-5xl flex flex-col gap-2.5 mb-4 bg-zinc-950/80 border border-white/10 rounded-xl p-3 font-mono shadow-xl backdrop-blur-xl">
        {/* Row 1: Mode Switchers */}
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          {/* Axis Mode */}
          <div className="flex items-center gap-1 bg-black/60 p-1 border border-white/10 rounded-lg">
            <button
              type="button"
              onClick={() => setAxisMode('classic')}
              className={`px-3 py-1 text-xs uppercase tracking-wider rounded-md transition-all ${
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
              className={`px-3 py-1 text-xs uppercase tracking-wider rounded-md transition-all ${
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
              className={`px-3 py-1 text-xs uppercase tracking-wider rounded-md transition-all ${
                axisMode === 'liberty_culture'
                  ? 'bg-white text-black font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              公权与多元
            </button>
          </div>

          {/* Scope Mode */}
          <div className="flex items-center gap-1 bg-black/60 p-1 border border-white/10 rounded-lg">
            <button
              type="button"
              onClick={() => setScopeMode('core')}
              className={`px-3 py-1 text-xs uppercase tracking-wider rounded-md transition-all flex items-center gap-1.5 ${
                scopeMode === 'core'
                  ? 'bg-white text-black font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>精简标杆 [{CORE_REPRESENTATIVE_IDS.size}]</span>
            </button>
            <button
              type="button"
              onClick={() => setScopeMode('all')}
              className={`px-3 py-1 text-xs uppercase tracking-wider rounded-md transition-all flex items-center gap-1.5 ${
                scopeMode === 'all'
                  ? 'bg-white text-black font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>全谱系 [{nodes.length}]</span>
            </button>
          </div>

          {/* Label Display Toggle */}
          <div className="flex items-center gap-1 bg-black/60 p-1 border border-white/10 rounded-lg text-xs text-zinc-400">
            <button
              type="button"
              onClick={() => setLabelMode('smart')}
              className={`px-2.5 py-1 uppercase tracking-wider rounded-md ${labelMode === 'smart' ? 'bg-white text-black font-bold shadow-sm' : 'hover:text-white'}`}
            >
              智能防重叠
            </button>
            <button
              type="button"
              onClick={() => setLabelMode('hover_only')}
              className={`px-2.5 py-1 uppercase tracking-wider rounded-md ${labelMode === 'hover_only' ? 'bg-white text-black font-bold shadow-sm' : 'hover:text-white'}`}
            >
              仅悬停显示
            </button>
            <button
              type="button"
              onClick={() => setLabelMode('all')}
              className={`px-2.5 py-1 uppercase tracking-wider rounded-md ${labelMode === 'all' ? 'bg-white text-black font-bold shadow-sm' : 'hover:text-white'}`}
            >
              全部常驻
            </button>
          </div>
        </div>

        {/* Row 2: Quadrant Focus Filter */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/10 text-xs">
          <div className="flex items-center gap-1 overflow-x-auto">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest mr-1">QUADRANT:</span>
            <button
              type="button"
              onClick={() => setQuadrantFilter('all')}
              className={`px-2.5 py-1 rounded-md border ${quadrantFilter === 'all' ? 'border-white bg-white text-black font-bold shadow-sm' : 'border-white/10 text-zinc-400 hover:text-white'}`}
            >
              ALL
            </button>
            <button
              type="button"
              onClick={() => setQuadrantFilter('q1')}
              className={`px-2.5 py-1 rounded-md border ${quadrantFilter === 'q1' ? 'border-white bg-white text-black font-bold shadow-sm' : 'border-white/10 text-zinc-400 hover:text-white'}`}
            >
              Q1 (威权集权)
            </button>
            <button
              type="button"
              onClick={() => setQuadrantFilter('q2')}
              className={`px-2.5 py-1 rounded-md border ${quadrantFilter === 'q2' ? 'border-white bg-white text-black font-bold shadow-sm' : 'border-white/10 text-zinc-400 hover:text-white'}`}
            >
              Q2 (传统资本)
            </button>
            <button
              type="button"
              onClick={() => setQuadrantFilter('q3')}
              className={`px-2.5 py-1 rounded-md border ${quadrantFilter === 'q3' ? 'border-white bg-white text-black font-bold shadow-sm' : 'border-white/10 text-zinc-400 hover:text-white'}`}
            >
              Q3 (自由互助)
            </button>
            <button
              type="button"
              onClick={() => setQuadrantFilter('q4')}
              className={`px-2.5 py-1 rounded-md border ${quadrantFilter === 'q4' ? 'border-white bg-white text-black font-bold shadow-sm' : 'border-white/10 text-zinc-400 hover:text-white'}`}
            >
              Q4 (自由市场)
            </button>
          </div>
        </div>
      </div>

      {/* 3. Coordinate Radar Board */}
      <div className="relative w-full max-w-5xl aspect-square md:aspect-[4/3] bg-zinc-950/90 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center font-mono select-none">
        {/* Radar Concentric Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <div className="w-[85%] h-[85%] rounded-full border border-white/40 border-dashed" />
          <div className="absolute w-[60%] h-[60%] rounded-full border border-white/30" />
          <div className="absolute w-[35%] h-[35%] rounded-full border border-white/20 border-dotted" />
        </div>

        {/* Quadrant Watermark Labels */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-1/2 border-r border-b border-white/10 p-4 transition-colors ${
            quadrantFilter === 'q1' || quadrantFilter === 'all' ? 'bg-white/[0.02]' : 'opacity-20'
          }`}
        >
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest">{axisConfig.q1}</span>
        </div>
        <div
          className={`absolute top-0 right-0 w-1/2 h-1/2 border-b border-white/10 p-4 text-right transition-colors ${
            quadrantFilter === 'q2' || quadrantFilter === 'all' ? 'bg-white/[0.02]' : 'opacity-20'
          }`}
        >
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest">{axisConfig.q2}</span>
        </div>
        <div
          className={`absolute bottom-0 left-0 w-1/2 h-1/2 border-r border-white/10 p-4 flex items-end transition-colors ${
            quadrantFilter === 'q3' || quadrantFilter === 'all' ? 'bg-white/[0.02]' : 'opacity-20'
          }`}
        >
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest">{axisConfig.q3}</span>
        </div>
        <div
          className={`absolute bottom-0 right-0 w-1/2 h-1/2 p-4 flex items-end justify-end transition-colors ${
            quadrantFilter === 'q4' || quadrantFilter === 'all' ? 'bg-white/[0.02]' : 'opacity-20'
          }`}
        >
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest">{axisConfig.q4}</span>
        </div>

        {/* Central Crosshairs Lines */}
        <div className="absolute inset-x-8 top-1/2 h-[1px] bg-white/20 -translate-y-1/2 pointer-events-none" />
        <div className="absolute inset-y-8 left-1/2 w-[1px] bg-white/20 -translate-x-1/2 pointer-events-none" />

        {/* Axis Perimeter Badges */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-wider text-white bg-black/80 px-3 py-1 rounded-lg border border-white/20 pointer-events-none z-20 shadow-md">
          {axisConfig.topLabel}
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-wider text-white bg-black/80 px-3 py-1 rounded-lg border border-white/20 pointer-events-none z-20 shadow-md">
          {axisConfig.bottomLabel}
        </div>
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-wider text-white bg-black/80 px-3 py-1 rounded-lg border border-white/20 pointer-events-none z-20 shadow-md">
          {axisConfig.leftLabel}
        </div>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-wider text-white bg-black/80 px-3 py-1 rounded-lg border border-white/20 pointer-events-none z-20 shadow-md">
          {axisConfig.rightLabel}
        </div>

        {/* Center Reticle */}
        <div className="absolute w-6 h-6 border border-white/30 rounded-full pointer-events-none flex items-center justify-center">
          <span className="w-1 h-1 rounded-full bg-white" />
        </div>

        {/* Placed Nodes on the Coordinate Plane */}
        {placedNodes.map(({ node, x, y, labelPosition, isCore }) => {
          const isSelected = selectedNodeId === node.id;
          const isHovered = hoveredNode?.id === node.id;
          const isOtherHovered = hoveredNode !== null && !isHovered && !isSelected;
          const isMatched = queryLower
            ? node.name.toLowerCase().includes(queryLower) ||
              node.englishName.toLowerCase().includes(queryLower)
            : false;

          const shouldShowLabel =
            labelMode === 'all' ||
            isHovered ||
            isSelected ||
            isMatched ||
            (labelMode === 'smart' && isCore);

          return (
            <div
              key={node.id}
              onClick={() => onSelectNode(node)}
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 group ${
                isSelected
                  ? 'z-50 scale-125'
                  : isHovered
                  ? 'z-40 scale-110'
                  : isMatched
                  ? 'z-35 scale-110'
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
                  <div className="absolute -inset-2.5 rounded-full border border-white animate-ping opacity-80 pointer-events-none" />
                )}

                <div
                  className={`w-3.5 h-3.5 rounded-full border transition-all ${
                    isSelected
                      ? 'scale-150 ring-2 ring-white border-white bg-white shadow-xl'
                      : isHovered
                      ? 'scale-150 ring-2 ring-white/60 border-white'
                      : isMatched
                      ? 'scale-135 ring-2 ring-cyan-400'
                      : isCore
                      ? 'border-white shadow-md'
                      : 'border-white/40'
                  }`}
                  style={{
                    backgroundColor: node.color,
                  }}
                />

                {shouldShowLabel && (
                  <div
                    className={`absolute whitespace-nowrap pointer-events-none ${
                      labelPosition === 'top' ? '-top-5' : 'top-4'
                    }`}
                  >
                    <span
                      className={`px-2 py-0.5 rounded-md text-[10px] font-mono transition-all border shadow-sm ${
                        isSelected
                          ? 'bg-white text-black font-bold border-white'
                          : isHovered
                          ? 'bg-white text-black font-bold border-white'
                          : isMatched
                          ? 'bg-black text-cyan-300 font-bold border-cyan-400'
                          : isCore
                          ? 'bg-black/90 text-white border-white/30'
                          : 'bg-black/90 text-zinc-400 border-white/10 group-hover:text-white'
                      }`}
                    >
                      {node.name}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Floating Detailed Inspection Card */}
        {hoveredNode && (
          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-80 bg-zinc-950/95 border border-white/15 rounded-xl p-3.5 shadow-2xl backdrop-blur-xl z-50 pointer-events-none font-mono">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: hoveredNode.color }}
                />
                <h4 className="font-bold text-xs text-white">
                  {hoveredNode.name}
                </h4>
              </div>

              <div className="text-[10px] text-cyan-400">
                X: {axisConfig.getX(hoveredNode) > 0 ? `+${axisConfig.getX(hoveredNode)}` : axisConfig.getX(hoveredNode)} | 
                Y: {axisConfig.getY(hoveredNode) > 0 ? `+${axisConfig.getY(hoveredNode)}` : axisConfig.getY(hoveredNode)}
              </div>
            </div>

            <p className="text-[11px] text-zinc-300 leading-snug line-clamp-2 font-sans mb-2">
              {hoveredNode.summary}
            </p>

            <div className="pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-400">
              <span>CLICK TO LOCK DOSSIER</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        )}
      </div>

      <div className="max-w-3xl text-center text-[10px] text-zinc-500 mt-3 font-mono uppercase tracking-wider">
        SYS // DEFAULT 42 CORE REPRESENTATIVE LANDMARKS ACTIVE // RADAR CALIBRATION NOMINAL
      </div>
    </div>
  );
};
