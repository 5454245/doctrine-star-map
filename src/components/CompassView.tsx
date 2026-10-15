import React, { useState, useMemo } from 'react';
import { IsmNode, CategoryType } from '../types/ism';
import { CATEGORIES } from '../data/ismsData';
import {
  Compass,
  ArrowUpRight,
  Layers,
  Sparkles,
  SlidersHorizontal,
  Eye,
  EyeOff,
  Search,
  Filter,
  ZoomIn,
  Target,
} from 'lucide-react';

interface CompassViewProps {
  nodes: IsmNode[];
  searchQuery?: string;
  selectedNodeId?: string | null;
  onSelectNode: (node: IsmNode) => void;
}

type CompassAxisMode = 'classic' | 'cultural' | 'liberty_culture';
type ScopeMode = 'core' | 'all';
type QuadrantFilter = 'all' | 'q1' | 'q2' | 'q3' | 'q4';

interface PlacedNode {
  node: IsmNode;
  x: number; // percentage 8% to 92%
  y: number; // percentage 8% to 92%
  rawX: number;
  rawY: number;
  labelPosition: 'top' | 'bottom' | 'left' | 'right';
  isCore: boolean;
}

// Landmark core representative ideologies across ideological quadrants
const CORE_REPRESENTATIVE_IDS = new Set([
  // 第一象限：威权左翼 / 国家计划 / 强秩序
  'marxism',
  'marxism_leninism',
  'maoism',
  'stalinism',
  'state_socialism',
  'legalism',
  // 第二象限：威权右翼 / 传统威权 / 国家资本
  'fascism',
  'nazism',
  'monarchism',
  'authoritarianism',
  'clerical_fascism',
  'mercantilism',
  'theocracy',
  'reactionism',
  // 第三象限：自由左翼 / 民主社会主义 / 存在自决
  'social_democracy',
  'democratic_socialism',
  'nordic_model_socialism',
  'anarcho_communism',
  'mutualism',
  'left_libertarianism',
  'eco_socialism',
  'existentialism',
  'atheistic_existentialism',
  'christian_existentialism',
  'third_way_socialism',
  // 第四象限：自由右翼 / 自由市场 / 极端个人自决
  'classical_liberalism',
  'libertarianism',
  'right_libertarianism',
  'anarcho_capitalism',
  'minarchism',
  'paleolibertarianism',
  'bleeding_heart_libertarianism',
  'geo_libertarianism',
  'agorism',
  // 中心与哲学经典坐标
  'stoicism',
  'cynicism',
  'epicureanism',
  'utilitarianism',
  'nihilism',
  'optimistic_nihilism',
  'passive_nihilism',
  'absurdism',
  'pragmatism',
  'humanism',
  'transhumanism',
  'postmodernism',
]);

export const CompassView: React.FC<CompassViewProps> = ({
  nodes,
  searchQuery = '',
  selectedNodeId,
  onSelectNode,
}) => {
  const [hoveredNode, setHoveredNode] = useState<IsmNode | null>(null);
  const [axisMode, setAxisMode] = useState<CompassAxisMode>('classic');
  const [scopeMode, setScopeMode] = useState<ScopeMode>('core');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'all'>('all');
  const [quadrantFilter, setQuadrantFilter] = useState<QuadrantFilter>('all');
  const [labelMode, setLabelMode] = useState<'smart' | 'all' | 'hover_only'>('smart');

  // Axis configuration based on mode
  const axisConfig = useMemo(() => {
    if (axisMode === 'classic') {
      return {
        title: '经典政治经济罗盘（经济制度 × 政治公权）',
        desc: '横轴为经济所有制与分配机制，纵轴为公权力集权与个人自由边界。经典政治科学二维谱系。',
        topLabel: '🏛️ 威权秩序 / 国家集权',
        bottomLabel: '🕊️ 自由意志 / 个人自治',
        leftLabel: '🤝 公有共济 / 计划兜底',
        rightLabel: '📈 自由市场 / 资本私有',
        q1: '公有制 · 强秩序集权',
        q2: '国家资本 · 传统秩序',
        q3: '公有互助 · 自由自治',
        q4: '自由市场 · 极端自决',
        getX: (n: IsmNode) => n.spectrum?.economic ?? 0,
        getY: (n: IsmNode) => -(n.spectrum?.political ?? 0),
        xName: '经济制度',
        yName: '政治公权',
      };
    } else if (axisMode === 'cultural') {
      return {
        title: '社会文化与经济罗盘（经济制度 × 文化观念）',
        desc: '横轴为经济所有制模式，纵轴为对历史传统习俗的敬畏 vs 对既有陈规与本质的激进解构。',
        topLabel: '📜 历史传统 / 秩序守成',
        bottomLabel: '⚡ 激进解构 / 多元进步',
        leftLabel: '🤝 公有共济 / 劳工福利',
        rightLabel: '📈 自由市场 / 资本竞争',
        q1: '传统社群 · 道德纪律',
        q2: '自由保守 · 传统道德',
        q3: '左翼进步 · 多元平权',
        q4: '技术资本 · 后现代前卫',
        getX: (n: IsmNode) => n.spectrum?.economic ?? 0,
        getY: (n: IsmNode) => -(n.spectrum?.social ?? 0),
        xName: '经济制度',
        yName: '文化观念',
      };
    } else {
      return {
        title: '自由意志与文化创新罗盘（政治公权 × 文化观念）',
        desc: '横轴为公权力集中程度，纵轴为文化观念的传统保守度与激进解构度。',
        topLabel: '📜 历史传统 / 礼法守成',
        bottomLabel: '⚡ 激进多元 / 存在自决',
        leftLabel: '🏛️ 威权统治 / 集体意志',
        rightLabel: '🕊️ 自由意志 / 权利自决',
        q1: '传统威权 · 封闭秩序',
        q2: '古典守成 · 自由宪政',
        q3: '进步集体 · 激进平等',
        q4: '前卫自决 · 彻底解放',
        getX: (n: IsmNode) => n.spectrum?.political ?? 0,
        getY: (n: IsmNode) => -(n.spectrum?.social ?? 0),
        xName: '政治公权',
        yName: '文化观念',
      };
    }
  }, [axisMode]);

  const queryLower = searchQuery.trim().toLowerCase();

  // Filter nodes by spectrum, scopeMode, category, and quadrant
  const filteredNodes = useMemo(() => {
    return nodes.filter((n) => {
      if (!n.spectrum) return false;
      if (selectedCategory !== 'all' && n.category !== selectedCategory) return false;

      // If user typed search query, always include matching nodes!
      const isSearchMatch =
        queryLower &&
        (n.name.toLowerCase().includes(queryLower) ||
          n.englishName.toLowerCase().includes(queryLower) ||
          n.summary.toLowerCase().includes(queryLower));

      if (queryLower && !isSearchMatch && n.id !== selectedNodeId) {
        return false;
      }

      // If in 'core' mode and no active search query, only display representative nodes
      if (scopeMode === 'core' && !queryLower) {
        if (!CORE_REPRESENTATIVE_IDS.has(n.id) && n.id !== selectedNodeId) {
          return false;
        }
      }

      // Quadrant filtering
      const rawX = axisConfig.getX(n);
      const rawY = axisConfig.getY(n);
      if (quadrantFilter === 'q1' && !(rawX <= 0.05 && rawY <= 0.05)) return false;
      if (quadrantFilter === 'q2' && !(rawX >= -0.05 && rawY <= 0.05)) return false;
      if (quadrantFilter === 'q3' && !(rawX <= 0.05 && rawY >= -0.05)) return false;
      if (quadrantFilter === 'q4' && !(rawX >= -0.05 && rawY >= -0.05)) return false;

      return true;
    });
  }, [nodes, selectedCategory, scopeMode, queryLower, selectedNodeId, quadrantFilter, axisConfig]);

  // Anti-Collision Layout Calculation Engine (改进型动态防重叠物理排布)
  const placedNodes: PlacedNode[] = useMemo(() => {
    // 1. Initial percentage placement with deterministic hash jitter for overlapping coordinates
    const points: PlacedNode[] = filteredNodes.map((node, index) => {
      const rawValX = axisConfig.getX(node);
      const rawValY = axisConfig.getY(node);

      // Micro hash jitter to separate perfectly overlapping coordinates (e.g. identical (0,0))
      const hash = ((node.id.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) * 17) % 100) / 100;
      const jitterX = (hash - 0.5) * 1.8;
      const jitterY = (((hash * 3.7) % 1) - 0.5) * 1.8;

      // Map [-1, 1] to percentage range [13%, 87%]
      const px = ((rawValX + 1) / 2) * 74 + 13 + jitterX;
      const py = ((rawValY + 1) / 2) * 74 + 13 + jitterY;

      return {
        node,
        rawX: rawValX,
        rawY: rawValY,
        x: px,
        y: py,
        labelPosition: py > 52 ? 'bottom' : 'top',
        isCore: CORE_REPRESENTATIVE_IDS.has(node.id),
      };
    });

    // 2. Dynamic Minimum Distance based on node count
    const minDistance = points.length > 80 ? 3.8 : points.length > 40 ? 5.2 : 6.8;
    const iterations = points.length > 80 ? 25 : 35;

    for (let iter = 0; iter < iterations; iter++) {
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const pA = points[i];
          const pB = points[j];

          const dx = pB.x - pA.x;
          const dy = pB.y - pA.y;
          const dist = Math.hypot(dx, dy);

          if (dist < minDistance && dist > 0.0001) {
            const overlap = (minDistance - dist) / 2;
            const nx = dx / dist;
            const ny = dy / dist;

            // Nudge apart softly
            pA.x -= nx * overlap * 0.45;
            pA.y -= ny * overlap * 0.45;
            pB.x += nx * overlap * 0.45;
            pB.y += ny * overlap * 0.45;

            // Safety boundary clamping [9%, 91%]
            pA.x = Math.max(9, Math.min(91, pA.x));
            pA.y = Math.max(9, Math.min(91, pA.y));
            pB.x = Math.max(9, Math.min(91, pB.x));
            pB.y = Math.max(9, Math.min(91, pB.y));
          }
        }
      }
    }

    // 3. Smart label orientation
    points.forEach((p, idx) => {
      const hasPointBelow = points.some(
        (other, oIdx) => oIdx !== idx && Math.abs(other.x - p.x) < 4.5 && other.y > p.y && other.y - p.y < 7
      );
      const hasPointAbove = points.some(
        (other, oIdx) => oIdx !== idx && Math.abs(other.x - p.x) < 4.5 && other.y < p.y && p.y - other.y < 7
      );

      if (hasPointBelow && !hasPointAbove) {
        p.labelPosition = 'top';
      } else if (hasPointAbove && !hasPointBelow) {
        p.labelPosition = 'bottom';
      } else {
        p.labelPosition = p.y > 52 ? 'bottom' : 'top';
      }
    });

    return points;
  }, [filteredNodes, axisConfig]);

  return (
    <div className="w-full h-full overflow-y-auto bg-stone-950 px-3 md:px-8 py-5 flex flex-col items-center">
      {/* 1. Header & Guide */}
      <div className="text-center max-w-3xl mb-4 space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-sky-400">
          <Compass className="w-3.5 h-3.5" />
          <span>意识形态全景二维罗盘 · 清晰防重叠架构</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold font-serif-sc text-stone-100">
          {axisConfig.title}
        </h2>
        <p className="text-stone-400 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto">
          {axisConfig.desc}
        </p>
      </div>

      {/* 2. Interactive Control Toolbar */}
      <div className="w-full max-w-5xl flex flex-col gap-2.5 mb-4 bg-stone-900/80 border border-stone-800 p-3 rounded-2xl backdrop-blur-md shadow-lg">
        {/* Row 1: Axis Mode Switcher & Scope Mode (Core vs All) */}
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          {/* Axis Mode */}
          <div className="flex items-center gap-1 bg-stone-950/80 p-1 rounded-xl border border-stone-800">
            <button
              type="button"
              onClick={() => setAxisMode('classic')}
              className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-all cursor-pointer ${
                axisMode === 'classic'
                  ? 'bg-sky-500 text-stone-950 font-bold shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              经典政治经济
            </button>
            <button
              type="button"
              onClick={() => setAxisMode('cultural')}
              className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-all cursor-pointer ${
                axisMode === 'cultural'
                  ? 'bg-purple-500 text-stone-950 font-bold shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              文化观念谱系
            </button>
            <button
              type="button"
              onClick={() => setAxisMode('liberty_culture')}
              className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-all cursor-pointer ${
                axisMode === 'liberty_culture'
                  ? 'bg-emerald-500 text-stone-950 font-bold shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              公权与多元
            </button>
          </div>

          {/* Scope Mode (Core Landmarks vs All Isms) */}
          <div className="flex items-center gap-1 bg-stone-950/80 p-1 rounded-xl border border-stone-800">
            <button
              type="button"
              onClick={() => setScopeMode('core')}
              className={`px-3 py-1 text-xs rounded-lg font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                scopeMode === 'core'
                  ? 'bg-amber-400 text-stone-950 font-bold shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>精简核心标杆 ({CORE_REPRESENTATIVE_IDS.size}派)</span>
            </button>
            <button
              type="button"
              onClick={() => setScopeMode('all')}
              className={`px-3 py-1 text-xs rounded-lg font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                scopeMode === 'all'
                  ? 'bg-amber-400 text-stone-950 font-bold shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>全谱系呈现 ({nodes.length}派)</span>
            </button>
          </div>

          {/* Label Display Toggle */}
          <div className="flex items-center gap-1 bg-stone-950/80 p-1 rounded-xl border border-stone-800 text-xs text-stone-400">
            <button
              type="button"
              onClick={() => setLabelMode('smart')}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                labelMode === 'smart' ? 'bg-stone-800 text-stone-100 font-semibold' : 'hover:text-stone-200'
              }`}
            >
              智能防重叠
            </button>
            <button
              type="button"
              onClick={() => setLabelMode('hover_only')}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                labelMode === 'hover_only' ? 'bg-stone-800 text-stone-100 font-semibold' : 'hover:text-stone-200'
              }`}
            >
              仅悬停显示
            </button>
            <button
              type="button"
              onClick={() => setLabelMode('all')}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                labelMode === 'all' ? 'bg-stone-800 text-stone-100 font-semibold' : 'hover:text-stone-200'
              }`}
            >
              全部常驻
            </button>
          </div>
        </div>

        {/* Row 2: Quadrant Focus Filter & Category Filter */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-stone-800/80">
          {/* Quadrant Focus Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto text-xs py-0.5">
            <span className="text-[11px] text-stone-400 mr-1 flex items-center gap-1">
              <ZoomIn className="w-3 h-3" /> 聚焦象限:
            </span>
            <button
              type="button"
              onClick={() => setQuadrantFilter('all')}
              className={`px-2 py-0.5 rounded-md transition-colors cursor-pointer ${
                quadrantFilter === 'all'
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 font-semibold'
                  : 'text-stone-400 hover:bg-stone-800'
              }`}
            >
              全四象限
            </button>
            <button
              type="button"
              onClick={() => setQuadrantFilter('q1')}
              className={`px-2 py-0.5 rounded-md transition-colors cursor-pointer ${
                quadrantFilter === 'q1'
                  ? 'bg-red-500/20 text-red-300 border border-red-500/40 font-semibold'
                  : 'text-stone-400 hover:bg-stone-800'
              }`}
            >
              第一象限 (左上·威权集权)
            </button>
            <button
              type="button"
              onClick={() => setQuadrantFilter('q2')}
              className={`px-2 py-0.5 rounded-md transition-colors cursor-pointer ${
                quadrantFilter === 'q2'
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40 font-semibold'
                  : 'text-stone-400 hover:bg-stone-800'
              }`}
            >
              第二象限 (右上·传统国家资本)
            </button>
            <button
              type="button"
              onClick={() => setQuadrantFilter('q3')}
              className={`px-2 py-0.5 rounded-md transition-colors cursor-pointer ${
                quadrantFilter === 'q3'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                  : 'text-stone-400 hover:bg-stone-800'
              }`}
            >
              第三象限 (左下·自由社民/互助)
            </button>
            <button
              type="button"
              onClick={() => setQuadrantFilter('q4')}
              className={`px-2 py-0.5 rounded-md transition-colors cursor-pointer ${
                quadrantFilter === 'q4'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                  : 'text-stone-400 hover:bg-stone-800'
              }`}
            >
              第四象限 (右下·自由市场/个人自决)
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1 overflow-x-auto py-0.5 ml-auto">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-2 py-0.5 text-xs rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-stone-100 text-stone-950 font-bold'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
              }`}
            >
              全部领域
            </button>
            {CATEGORIES.map((cat) => {
              const count = nodes.filter((n) => n.category === cat.id).length;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-2 py-0.5 text-xs rounded-md transition-colors cursor-pointer flex items-center gap-1 whitespace-nowrap ${
                    isSelected
                      ? 'text-stone-950 font-bold'
                      : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
                  }`}
                  style={isSelected ? { backgroundColor: cat.color } : {}}
                >
                  <span>{cat.name.split('与')[0]}</span>
                  <span className="opacity-70 text-[10px]">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Spacious 2D Compass Grid Stage */}
      <div className="relative w-full max-w-5xl aspect-[16/11] min-h-[560px] md:min-h-[620px] bg-stone-900/70 border border-stone-800 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden flex items-center justify-center">
        {/* Subtle Quadrant Background Tints */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-1/2 border-r border-b border-stone-800/70 p-4 transition-colors ${
            quadrantFilter === 'q1' || quadrantFilter === 'all' ? 'bg-red-950/15' : 'bg-stone-950/60 opacity-40'
          }`}
        >
          <span className="text-[11px] font-mono text-stone-400/90 tracking-wider">
            {axisConfig.q1}
          </span>
        </div>
        <div
          className={`absolute top-0 right-0 w-1/2 h-1/2 border-b border-stone-800/70 p-4 text-right transition-colors ${
            quadrantFilter === 'q2' || quadrantFilter === 'all' ? 'bg-blue-950/15' : 'bg-stone-950/60 opacity-40'
          }`}
        >
          <span className="text-[11px] font-mono text-stone-400/90 tracking-wider">
            {axisConfig.q2}
          </span>
        </div>
        <div
          className={`absolute bottom-0 left-0 w-1/2 h-1/2 border-r border-stone-800/70 p-4 flex items-end transition-colors ${
            quadrantFilter === 'q3' || quadrantFilter === 'all' ? 'bg-emerald-950/15' : 'bg-stone-950/60 opacity-40'
          }`}
        >
          <span className="text-[11px] font-mono text-stone-400/90 tracking-wider">
            {axisConfig.q3}
          </span>
        </div>
        <div
          className={`absolute bottom-0 right-0 w-1/2 h-1/2 p-4 flex items-end justify-end transition-colors ${
            quadrantFilter === 'q4' || quadrantFilter === 'all' ? 'bg-amber-950/15' : 'bg-stone-950/60 opacity-40'
          }`}
        >
          <span className="text-[11px] font-mono text-stone-400/90 tracking-wider">
            {axisConfig.q4}
          </span>
        </div>

        {/* Central Crosshairs Lines */}
        <div className="absolute inset-x-8 top-1/2 h-[1px] bg-stone-700/50 -translate-y-1/2 pointer-events-none" />
        <div className="absolute inset-y-8 left-1/2 w-[1px] bg-stone-700/50 -translate-x-1/2 pointer-events-none" />

        {/* Outer Perimeter Axis Indicators */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 text-xs font-semibold text-rose-300 bg-stone-950/90 px-3 py-1 rounded-full border border-rose-900/50 shadow-lg pointer-events-none z-20">
          {axisConfig.topLabel}
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs font-semibold text-emerald-300 bg-stone-950/90 px-3 py-1 rounded-full border border-emerald-900/50 shadow-lg pointer-events-none z-20">
          {axisConfig.bottomLabel}
        </div>
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-sky-300 bg-stone-950/90 px-2.5 py-1 rounded-full border border-sky-900/50 shadow-lg pointer-events-none z-20">
          {axisConfig.leftLabel}
        </div>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-amber-300 bg-stone-950/90 px-2.5 py-1 rounded-full border border-amber-900/50 shadow-lg pointer-events-none z-20">
          {axisConfig.rightLabel}
        </div>

        {/* Compass Center Neutral Zone Indicator */}
        <div className="absolute w-8 h-8 rounded-full border border-stone-700/40 pointer-events-none flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-stone-600/60" />
        </div>

        {/* Placed Nodes on the Coordinate Plane */}
        {placedNodes.map(({ node, x, y, rawX, rawY, labelPosition, isCore }) => {
          const isSelected = selectedNodeId === node.id;
          const isHovered = hoveredNode?.id === node.id;
          const isOtherHovered = hoveredNode !== null && !isHovered && !isSelected;
          const isMatched = queryLower
            ? node.name.toLowerCase().includes(queryLower) ||
              node.englishName.toLowerCase().includes(queryLower)
            : false;

          // Determine label visibility
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
                  ? 'opacity-30 z-10'
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
                {/* Selected Reticle Pulse Ring */}
                {isSelected && (
                  <div className="absolute -inset-2.5 rounded-full border-2 border-amber-400 animate-ping opacity-75 pointer-events-none" />
                )}

                {/* Node Star Circle */}
                <div
                  className={`w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border transition-all duration-200 flex items-center justify-center ${
                    isSelected
                      ? 'scale-150 ring-4 ring-amber-400 border-white shadow-xl bg-amber-400'
                      : isHovered
                      ? 'scale-150 ring-4 ring-amber-400/60 border-white shadow-lg'
                      : isMatched
                      ? 'scale-135 ring-3 ring-amber-400/50 border-amber-300'
                      : isCore
                      ? 'border-white/90 shadow-md ring-1 ring-white/30'
                      : 'border-white/50 group-hover:scale-125'
                  }`}
                  style={{
                    backgroundColor: node.color,
                    boxShadow: isSelected || isHovered ? `0 0 16px ${node.color}` : `0 0 6px ${node.color}66`,
                  }}
                />

                {/* Node Text Label */}
                {shouldShowLabel && (
                  <div
                    className={`absolute whitespace-nowrap transition-all duration-150 pointer-events-none ${
                      labelPosition === 'top' ? '-top-6' : 'top-5'
                    }`}
                  >
                    <span
                      className={`px-2 py-0.5 rounded-md text-[10px] md:text-[11px] font-serif-sc font-medium transition-all shadow-md flex items-center gap-1 ${
                        isSelected
                          ? 'bg-amber-400 text-stone-950 font-bold border border-amber-300 shadow-amber-400/30'
                          : isHovered
                          ? 'bg-amber-400 text-stone-950 font-bold border border-amber-300 shadow-amber-400/20'
                          : isMatched
                          ? 'bg-amber-500/90 text-stone-950 font-bold border border-amber-300'
                          : isCore
                          ? 'bg-stone-950/90 text-stone-100 border border-stone-700/90 shadow-sm'
                          : 'bg-stone-950/80 text-stone-300 border border-stone-800/80 group-hover:border-stone-600 group-hover:text-white'
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

        {/* Floating Detailed Inspection Card when a Node is Hovered */}
        {hoveredNode && (
          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-88 bg-stone-900/95 border border-stone-700 rounded-2xl p-4 shadow-2xl backdrop-blur-md z-50 pointer-events-none animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <span
                  className="w-3.5 h-3.5 rounded-full shadow-lg"
                  style={{
                    backgroundColor: hoveredNode.color,
                    boxShadow: `0 0 12px ${hoveredNode.color}`,
                  }}
                />
                <div>
                  <h4 className="font-bold text-base text-stone-100 font-serif-sc">
                    {hoveredNode.name}
                  </h4>
                  <span className="text-[10px] text-stone-400">
                    {hoveredNode.englishName} · {hoveredNode.period.split('（')[0]}
                  </span>
                </div>
              </div>

              {/* Exact Spectrum Coordinates Badge */}
              <div className="text-[10px] font-mono text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                {axisConfig.xName}: {axisConfig.getX(hoveredNode) > 0 ? `+${axisConfig.getX(hoveredNode)}` : axisConfig.getX(hoveredNode)} | 
                {axisConfig.yName}: {axisConfig.getY(hoveredNode) > 0 ? `+${axisConfig.getY(hoveredNode)}` : axisConfig.getY(hoveredNode)}
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed line-clamp-2">
              {hoveredNode.summary}
            </p>

            <div className="mt-3 pt-2 border-t border-stone-800 flex items-center justify-between text-[11px] text-amber-400 font-medium">
              <span>点击直接在右侧查阅完整思想档案</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        )}
      </div>

      {/* 4. Bottom Clarification */}
      <div className="max-w-3xl text-center text-[11px] text-stone-400 mt-3 leading-relaxed">
        提示：默认精选呈现具有里程碑意义的 <strong className="text-stone-300">42 个核心标杆流派</strong>，消除视觉杂乱与重叠碰撞；您可随时点击上方「全谱系呈现」查看全量 310+ 主义，或点击「聚焦象限」深度探索特定意识形态阵营。
      </div>
    </div>
  );
};
