import React, { useState } from 'react';
import { PHILOSOPHY_QUIZ_QUESTIONS, QuizQuestion } from '../data/ismsData';
import { IsmNode } from '../types/ism';
import confetti from 'canvas-confetti';
import {
  X,
  Sparkles,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Flame,
  Swords,
  Compass,
  Layers,
  Quote,
  Target,
  Crosshair,
  Check,
  Award,
} from 'lucide-react';

interface PhilosophyQuizModalProps {
  allNodes: IsmNode[];
  onClose: () => void;
  onSelectNode: (node: IsmNode) => void;
  onOpenCompare?: (nodeA: IsmNode, nodeB?: IsmNode) => void;
}

interface DiagnosisResult {
  topMatches: {
    node: IsmNode;
    score: number;
    percentage: number;
    distance: number;
    spatialProximity: number;
  }[];
  antithesis: {
    node: IsmNode;
    score: number;
    percentage: number;
    distance: number;
  };
  archetypeTitle: string;
  archetypeSubtitle: string;
  archetypeDescription: string;
  coordinates: {
    political: number; // -1 (Authoritarian/Order) to 1 (Libertarian/Autonomy)
    economic: number;  // -1 (Collectivist/Planned) to 1 (Free Market/Capitalist)
    social: number;    // -1 (Traditional/Conservative) to 1 (Progressive/Pluralist)
  };
  dimensionSummaries: {
    political: { label: string; desc: string; score: number };
    economic: { label: string; desc: string; score: number };
    social: { label: string; desc: string; score: number };
  };
}

const DIMENSION_CONFIGS = {
  political: {
    name: '政治公权',
    icon: '🏛️',
    color: '#38bdf8',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/30',
    text: 'text-sky-400',
    leftLabel: '威权秩序 / 集体集权',
    rightLabel: '自由意志 / 个人自治',
  },
  economic: {
    name: '经济分配',
    icon: '💰',
    color: '#10b981',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    text: 'text-emerald-400',
    leftLabel: '公有共济 / 计划兜底',
    rightLabel: '自由市场 / 资本竞争',
  },
  social: {
    name: '社会文化',
    icon: '🌿',
    color: '#c084fc',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    text: 'text-purple-400',
    leftLabel: '传统礼法 / 秩序守成',
    rightLabel: '多元解构 / 个体自决',
  },
};

export const PhilosophyQuizModal: React.FC<PhilosophyQuizModalProps> = ({
  allNodes,
  onClose,
  onSelectNode,
  onOpenCompare,
}) => {
  // Mode: 'deep' = full 12 questions, 'fast' = 6 questions
  const [quizMode, setQuizMode] = useState<'deep' | 'fast' | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  // Filter questions based on mode (deep = all 12 questions; fast = 6 questions across dimensions)
  const activeQuestions: QuizQuestion[] =
    quizMode === 'fast'
      ? PHILOSOPHY_QUIZ_QUESTIONS.filter((_, i) => i % 2 === 0)
      : PHILOSOPHY_QUIZ_QUESTIONS;

  const currentQ = activeQuestions[currentQuestionIndex];
  const dimConfig = currentQ ? DIMENSION_CONFIGS[currentQ.dimensionCategory] : DIMENSION_CONFIGS.political;

  // Handle option click
  const handleSelectOption = (optionIndex: number) => {
    const updated = [...selectedAnswers];
    updated[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(updated);

    if (currentQuestionIndex + 1 < activeQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsCompleted(true);
      confetti({
        particleCount: 65,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#10b981', '#a855f7', '#f59e0b'],
      });
    }
  };

  // Back to previous question
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Reset quiz
  const handleReset = () => {
    setQuizMode(null);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setIsCompleted(false);
  };

  // Weighted Ideological Scoring Algorithm (政治、经济、社会三维加权解算)
  const calculateDiagnosis = (): DiagnosisResult => {
    const dimWeightedSums = { political: 0, economic: 0, social: 0 };
    const dimTotalWeights = { political: 0, economic: 0, social: 0 };
    const directAffinityMap: Record<string, number> = {};

    allNodes.forEach((node) => {
      directAffinityMap[node.id] = 0;
    });

    selectedAnswers.forEach((ansIndex, qIdx) => {
      const q = activeQuestions[qIdx];
      if (!q) return;
      const opt = q.options[ansIndex];
      if (!opt) return;

      // 1. Direct alignment accumulation
      if (opt.alignsWith && Array.isArray(opt.alignsWith)) {
        opt.alignsWith.forEach((ismId, rank) => {
          const rankWeight = rank === 0 ? 3.5 : rank === 1 ? 2.2 : 1.2;
          directAffinityMap[ismId] = (directAffinityMap[ismId] || 0) + rankWeight;
        });
      }

      // 2. Dimension-weighted coordinate calculation
      // If the question belongs to this dimension, apply higher focus weight (1.75x)
      const isPolFocus = q.dimensionCategory === 'political';
      const isEcoFocus = q.dimensionCategory === 'economic';
      const isSocFocus = q.dimensionCategory === 'social';

      const polMultiplier = isPolFocus ? 1.75 : 0.75;
      const ecoMultiplier = isEcoFocus ? 1.75 : 0.75;
      const socMultiplier = isSocFocus ? 1.75 : 0.75;

      dimWeightedSums.political += opt.weights.political * polMultiplier;
      dimTotalWeights.political += polMultiplier;

      dimWeightedSums.economic += opt.weights.economic * ecoMultiplier;
      dimTotalWeights.economic += ecoMultiplier;

      dimWeightedSums.social += opt.weights.social * socMultiplier;
      dimTotalWeights.social += socMultiplier;
    });

    // 3. User coordinates normalized in [-1, 1]
    const userCoords = {
      political: Math.max(-1, Math.min(1, dimTotalWeights.political ? dimWeightedSums.political / dimTotalWeights.political : 0)),
      economic: Math.max(-1, Math.min(1, dimTotalWeights.economic ? dimWeightedSums.economic / dimTotalWeights.economic : 0)),
      social: Math.max(-1, Math.min(1, dimTotalWeights.social ? dimWeightedSums.social / dimTotalWeights.social : 0)),
    };

    // 4. Max possible direct affinity
    const maxDirectAffinity = Math.max(...Object.values(directAffinityMap), 1);

    // 5. Calculate 3D Euclidean distance & combined score for all nodes in star map
    // Maximum distance in [-1, 1]^3 cube is sqrt(2^2 + 2^2 + 2^2) = sqrt(12) ≈ 3.4641
    const MAX_DISTANCE = Math.sqrt(12);

    const scoredNodes = allNodes.map((node) => {
      const nodeSpectrum = node.spectrum || { political: 0, economic: 0, social: 0 };
      const dP = userCoords.political - nodeSpectrum.political;
      const dE = userCoords.economic - nodeSpectrum.economic;
      const dS = userCoords.social - nodeSpectrum.social;

      const distance = Math.sqrt(dP * dP + dE * dE + dS * dS);
      const spatialProximity = Math.max(0, 1 - distance / MAX_DISTANCE); // 0 to 1

      const normalizedAffinity = (directAffinityMap[node.id] || 0) / maxDirectAffinity;

      // 60% spatial distance proximity + 40% direct option alignment
      const combinedScore = spatialProximity * 0.6 + normalizedAffinity * 0.4;

      return {
        node,
        distance: Number(distance.toFixed(3)),
        spatialProximity: Number(spatialProximity.toFixed(3)),
        score: combinedScore,
      };
    });

    // Sort descending by score
    scoredNodes.sort((a, b) => b.score - a.score);

    const highestScore = scoredNodes[0]?.score || 1;

    // Top 3 matches
    const topMatches = scoredNodes.slice(0, 3).map((item, idx) => {
      // Percentage scaling: 96% down to ~65%
      const basePercentage = Math.round((item.score / highestScore) * 96);
      const percentage = Math.min(98 - idx * 5, Math.max(65, basePercentage));
      return {
        node: item.node,
        score: item.score,
        percentage,
        distance: item.distance,
        spatialProximity: item.spatialProximity,
      };
    });

    // Antithesis: Node with lowest score / maximum ideological distance
    const antithesisItem = scoredNodes[scoredNodes.length - 1];
    const antithesisPercentage = Math.max(
      6,
      Math.min(25, Math.round((antithesisItem.score / highestScore) * 25))
    );
    const antithesis = {
      node: antithesisItem.node,
      score: antithesisItem.score,
      percentage: antithesisPercentage,
      distance: antithesisItem.distance,
    };

    // Dimension qualitative summaries
    const getPoliticalSummary = (val: number) => {
      if (val < -0.4) return { label: '威权秩序与国家本位', desc: '注重社会稳定、集体纪律与强力公权力协调' };
      if (val < 0.2) return { label: '程序正义与有限治理', desc: '主张在法治与制度规范下实现公共利益平衡' };
      if (val < 0.6) return { label: '宪政自由与权利分立', desc: '强调对公权力的严格防范与公民权利保障' };
      return { label: '绝对自决与去中心化', desc: '崇尚个体意志不受干涉，倾向自发协商与自治' };
    };

    const getEconomicSummary = (val: number) => {
      if (val < -0.4) return { label: '公有共济与平等再分配', desc: '警惕资本过度集中，主张高福利兜底与劳动者实质平等' };
      if (val < 0.2) return { label: '混合经济与审慎调控', desc: '主张兼顾市场效率与社会基本保障的动态平衡' };
      if (val < 0.6) return { label: '自由市场与产权激励', desc: '相信价格机制与竞争创新是繁荣的最有效引擎' };
      return { label: '放任资本与绝对私有', desc: '反对一切政府对自由交易与财富积累的干预' };
    };

    const getSocialSummary = (val: number) => {
      if (val < -0.4) return { label: '敬畏传统与秩序沉淀', desc: '珍视历史经验、伦理伦常与渐进改良的温和智慧' };
      if (val < 0.2) return { label: '理性温和与务实求真', desc: '基于现实效果审慎对待观念变革与社会新潮' };
      if (val < 0.6) return { label: '人文关怀与多元包容', desc: '尊重个体生命差异，倡导宽容、平权与自我表达' };
      return { label: '激进解构与前卫反叛', desc: '打破固定本质与中心叙事，追求彻底的主体自由与科技飞升' };
    };

    const polSummary = getPoliticalSummary(userCoords.political);
    const ecoSummary = getEconomicSummary(userCoords.economic);
    const socSummary = getSocialSummary(userCoords.social);

    // Dynamic Archetype generation
    let archetypeTitle = '自由存在主义漫游者';
    let archetypeSubtitle = '在荒谬与喧嚣中直面自我，拒绝机械规训与教条定义';
    let archetypeDescription = '你在精神上追求个体的高维自由与生命自决，对机械死板的权威规训保持本能警惕；同时拥有直面世界复杂性的清醒勇气，不随波逐流。';

    if (userCoords.political > 0.3 && userCoords.economic < -0.2 && userCoords.social > 0.3) {
      archetypeTitle = '民主人道与社会共济先驱';
      archetypeSubtitle = '左翼自由意志 · 捍卫底层实质平等与个体充分尊严';
      archetypeDescription = '你极度珍视个体的人格尊严与生命体验，痛恨资本对劳动者的无情物化；深信唯有通过社会制度性兜底与公共福利，才能让每个人真正享有不被生存威胁胁迫的自由。';
    } else if (userCoords.political > 0.3 && userCoords.economic > 0.3 && userCoords.social > 0.2) {
      archetypeTitle = '自由意志与市场理性探索者';
      archetypeSubtitle = '古典自由主义 · 崇尚自力更生、契约精神与创造性破坏';
      archetypeDescription = '你崇尚自力更生与契约精神，坚信自由竞争与产权保护是社会繁荣与个人创造力的发动机。你主张权力最小化，反对保姆式监管。';
    } else if (userCoords.social < -0.3 && userCoords.political < 0) {
      archetypeTitle = '审慎文明与秩序守护者';
      archetypeSubtitle = '温和保守主义 · 敬畏历史经验，警惕激进乌托邦的破坏性';
      archetypeDescription = '你深谙人类理性的有限性，敬畏数千年沉淀的历史传统、制度习俗与家庭伦理，主张渐进改良而非激进的乌托邦推倒重来。';
    } else if (userCoords.social > 0.5 && userCoords.political > 0.2) {
      archetypeTitle = '批判解构与现代性反思者';
      archetypeSubtitle = '后现代批判哲学 · 洞察话语权力缝隙，破除本质主义枷锁';
      archetypeDescription = '你善于洞察既定观念背后的话语权力缝隙，拒绝将任何陈规当成理所当然，拥有敏锐的批判性思维与审美敏锐度。';
    } else if (userCoords.economic > 0.4 && userCoords.social > 0.4) {
      archetypeTitle = '技术加速与超人类前沿客';
      archetypeSubtitle = '加力主义与技术乐观 · 拥抱AI奇点与人类认知跃迁';
      archetypeDescription = '你对科技爆炸抱有极大热情，坚信技术进步是破除人类生物局限与文明停滞的唯一解，渴望加速驶向未知的星辰大海。';
    } else if (Math.abs(userCoords.political) < 0.3 && Math.abs(userCoords.economic) < 0.3) {
      archetypeTitle = '务实理性与中道践行者';
      archetypeSubtitle = '实用主义与多元平衡 · 有效即真理，拒绝非黑即白的极端教条';
      archetypeDescription = '你不轻易被极端的意识形态狂热裹挟，善于在互相冲突的价值之间寻求务实的公约数与可落地的建设性方案。';
    }

    return {
      topMatches,
      antithesis,
      archetypeTitle,
      archetypeSubtitle,
      archetypeDescription,
      coordinates: {
        political: Number(userCoords.political.toFixed(2)),
        economic: Number(userCoords.economic.toFixed(2)),
        social: Number(userCoords.social.toFixed(2)),
      },
      dimensionSummaries: {
        political: { ...polSummary, score: userCoords.political },
        economic: { ...ecoSummary, score: userCoords.economic },
        social: { ...socSummary, score: userCoords.social },
      },
    };
  };

  const diagnosis = isCompleted ? calculateDiagnosis() : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="w-full max-w-2xl bg-zinc-950/95 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh] font-sans text-white">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between shrink-0 bg-black/60 font-mono">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm md:text-base font-bold text-white flex items-center gap-2 uppercase tracking-wider">
                <span>IDEOLOGY DIAGNOSTIC // 思想自测</span>
                <span className="text-[10px] px-2 py-0.5 rounded border border-white/15 bg-white/10 text-white font-mono">
                  3D SPECTRUM
                </span>
              </h2>
              <span className="text-[11px] text-zinc-400">
                基于「政治公权 · 经济分配 · 社会文化」三维坐标加权解算，精准映射星图本命星辰
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="关闭测试"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Container */}
        <div className="flex-1 overflow-y-auto p-5 md:p-6">
          {/* Step 1: Mode Selection & Intro */}
          {!quizMode && !isCompleted && (
            <div className="space-y-6 py-2">
              <div className="text-center space-y-2.5 font-mono">
                <div className="w-14 h-14 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-center text-cyan-400 mx-auto shadow-inner">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white">
                  DIAGNOSE YOUR IDEOLOGICAL STAR
                </h3>
                <p className="text-xs text-zinc-400 max-w-lg mx-auto leading-relaxed font-sans">
                  互联网充斥着各种主义的标签与争吵。本测试采用多维加权评分算法，通过直面你在权力边界、劳动分配、电车难题与科技未来等真实困境中的抉择，精准计算你的三维思想坐标，并在星图中点亮与你灵魂共鸣的节点。
                </p>
              </div>

              {/* 3 Dimensions Preview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 font-mono">
                <div className="p-3.5 bg-black/40 border border-white/10 rounded-xl text-left shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 mb-1">
                    <span>POLITICAL // 政治公权</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-snug font-sans">
                    公权力边界、言论与秩序冲突、国家主权与治理机制
                  </p>
                </div>
                <div className="p-3.5 bg-black/40 border border-white/10 rounded-xl text-left shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 mb-1">
                    <span>ECONOMIC // 经济分配</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-snug font-sans">
                    劳动异化、财富分配与税收、关键基础设施产权
                  </p>
                </div>
                <div className="p-3.5 bg-black/40 border border-white/10 rounded-xl text-left shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-purple-400 mb-1">
                    <span>CULTURAL // 社会文化</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-snug font-sans">
                    历史传统、多元平权、电车难题伦理与AI奇点狂飙
                  </p>
                </div>
              </div>

              {/* Mode Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 font-mono">
                <button
                  type="button"
                  onClick={() => setQuizMode('deep')}
                  className="p-5 bg-black/40 hover:bg-white/5 border border-white/15 hover:border-white/40 rounded-xl text-left transition-all group flex flex-col justify-between cursor-pointer shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] px-2 py-0.5 rounded border border-white/15 bg-white/10 text-white font-mono uppercase tracking-widest">
                        STANDARD // 12 QUESTIONS
                      </span>
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1.5 uppercase tracking-wider">
                      全景三维思想画像 (推荐)
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                      完整答完全部 12 道精心设计的哲学困境，生成高精度三维谱系坐标、首要本命星辰、思想三棱镜与对立面宿敌。
                    </p>
                  </div>
                  <div className="mt-4 text-xs font-bold text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>COMMENCE 12-Q DIAGNOSTIC</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setQuizMode('fast')}
                  className="p-5 bg-black/40 hover:bg-white/5 border border-white/15 hover:border-white/40 rounded-xl text-left transition-all group flex flex-col justify-between cursor-pointer shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] px-2 py-0.5 rounded border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono uppercase tracking-widest">
                        EXPRESS // 6 QUESTIONS
                      </span>
                      <Flame className="w-4 h-4 text-cyan-400 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1.5 uppercase tracking-wider">
                      核心矛盾快速定位
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                      从政治、经济、社会三维度各精选 2 道最尖锐矛盾，2分钟快速初探你的思想光谱。
                    </p>
                  </div>
                  <div className="mt-4 text-xs font-bold text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>COMMENCE 6-Q DIAGNOSTIC</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Answering Questions */}
          {quizMode && !isCompleted && (
            <div className="space-y-5">
              {/* Dimension Phase & Progress */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2.5 py-0.5 rounded font-mono text-[11px] border font-medium flex items-center gap-1.5 ${dimConfig.bg} ${dimConfig.border} ${dimConfig.text}`}
                    >
                      <span>{dimConfig.icon}</span>
                      <span>{currentQ.dimensionLabel}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs">
                    <span>
                      第 <strong className="text-white">{currentQuestionIndex + 1}</strong> / {activeQuestions.length} 题
                    </span>
                  </div>
                </div>

                {/* 12-Segment Visual Progress Bar */}
                <div className="flex items-center gap-1 w-full">
                  {activeQuestions.map((q, idx) => {
                    const isAnswered = selectedAnswers[idx] !== undefined;
                    const isCurrent = currentQuestionIndex === idx;
                    const cat = q.dimensionCategory;
                    let activeBg = 'bg-cyan-400';
                    if (cat === 'economic') activeBg = 'bg-emerald-400';
                    if (cat === 'social') activeBg = 'bg-purple-400';

                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          if (selectedAnswers[idx] !== undefined || idx <= selectedAnswers.length) {
                            setCurrentQuestionIndex(idx);
                          }
                        }}
                        title={`第 ${idx + 1} 题: ${q.dimensionLabel}`}
                        className={`h-1.5 flex-1 transition-all cursor-pointer ${
                          isCurrent
                            ? `${activeBg} ring-2 ring-white scale-y-125`
                            : isAnswered
                            ? activeBg
                            : 'bg-neutral-800 hover:bg-neutral-700'
                        }`}
                      />
                    );
                  })}
                </div>

                {/* Dimension Phase Steps Indicator */}
                <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-0.5 px-0.5 font-mono">
                  <span className={currentQ.dimensionCategory === 'political' ? 'text-cyan-400 font-bold' : ''}>
                    POLITICAL // 政治秩序
                  </span>
                  <span className={currentQ.dimensionCategory === 'economic' ? 'text-emerald-400 font-bold' : ''}>
                    ECONOMIC // 经济分配
                  </span>
                  <span className={currentQ.dimensionCategory === 'social' ? 'text-purple-400 font-bold' : ''}>
                    CULTURAL // 社会文化
                  </span>
                </div>
              </div>

              {/* Question Scenario */}
              <div className="p-4 bg-black/50 border border-white/10 rounded-xl shadow-inner">
                <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 block mb-1">
                  SCENARIO // 思想实验与现实困境
                </span>
                <h3 className="text-sm md:text-base font-semibold text-white leading-relaxed">
                  {currentQ.scenario}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedAnswers[currentQuestionIndex] === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-3.5 md:p-4 rounded-xl border transition-all text-xs md:text-sm leading-relaxed group flex items-start gap-3 cursor-pointer ${
                        isSelected
                          ? 'bg-white/10 border-white text-white ring-1 ring-white/50 shadow-md'
                          : 'bg-black/40 hover:bg-white/5 border-white/10 hover:border-white/30 text-zinc-300'
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-md border flex items-center justify-center shrink-0 text-xs font-mono mt-0.5 transition-colors ${
                          isSelected
                            ? 'bg-white text-black border-white font-bold'
                            : 'border-white/20 group-hover:border-white/40 text-zinc-400 group-hover:text-white'
                        }`}
                      >
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1 group-hover:text-white">
                        {option.text}
                      </span>
                      {isSelected && (
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Navigation Bar */}
              <div className="flex items-center justify-between pt-1 font-mono">
                <button
                  type="button"
                  onClick={handlePrevQuestion}
                  disabled={currentQuestionIndex === 0}
                  className="px-3.5 py-1.5 text-xs text-zinc-400 hover:text-white disabled:opacity-30 disabled:hover:text-zinc-400 flex items-center gap-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>上一题</span>
                </button>

                <div className="text-[11px] text-zinc-500">
                  选择选项后将自动进入下一题
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  重新选择模式
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Comprehensive Diagnostic Result Report */}
          {isCompleted && diagnosis && (
            <div className="space-y-6">
              {/* Soulmate Archetype Banner */}
              <div className="p-5 md:p-6 bg-black/50 border border-white/10 rounded-xl text-center space-y-2 relative overflow-hidden shadow-xl font-mono">
                <div className="inline-flex items-center gap-1.5 text-xs text-cyan-400 px-3 py-0.5 rounded-full border border-cyan-400/30 bg-cyan-950/40 uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  <span>SPECTRUM RESOLUTION // 解算完成</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white">
                  {diagnosis.archetypeTitle}
                </h3>
                <p className="text-xs text-zinc-400">
                  {diagnosis.archetypeSubtitle}
                </p>
                <p className="text-xs text-zinc-300 max-w-lg mx-auto leading-relaxed pt-1 font-sans">
                  {diagnosis.archetypeDescription}
                </p>
              </div>

              {/* 3D Ideological Coordinates HUD */}
              <div className="p-4 bg-black/40 border border-white/10 rounded-xl space-y-3 font-mono shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Crosshair className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs uppercase tracking-wider text-white font-bold">
                      3D SPECTRUM COORDINATES // 三维思想坐标
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400">
                    P: {diagnosis.coordinates.political > 0 ? `+${diagnosis.coordinates.political}` : diagnosis.coordinates.political} | 
                    E: {diagnosis.coordinates.economic > 0 ? `+${diagnosis.coordinates.economic}` : diagnosis.coordinates.economic} | 
                    S: {diagnosis.coordinates.social > 0 ? `+${diagnosis.coordinates.social}` : diagnosis.coordinates.social}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                  {/* Political */}
                  <div className="p-3.5 rounded-xl bg-sky-950/20 border border-sky-800/30 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-sky-400 font-semibold flex items-center gap-1">
                        <span>🏛️</span>
                        <span>政治公权</span>
                      </span>
                      <span className="font-mono text-zinc-300 font-bold">
                        {diagnosis.coordinates.political > 0 ? `+${diagnosis.coordinates.political}` : diagnosis.coordinates.political}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-sky-400 rounded-full transition-all duration-500"
                        style={{ width: `${((diagnosis.coordinates.political + 1) / 2) * 100}%` }}
                      />
                    </div>
                    <p className="text-[11px] font-medium text-zinc-300">
                      {diagnosis.dimensionSummaries.political.label}
                    </p>
                    <p className="text-[10px] text-zinc-400 leading-tight">
                      {diagnosis.dimensionSummaries.political.desc}
                    </p>
                  </div>

                  {/* Economic */}
                  <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-800/30 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <span>💰</span>
                        <span>经济分配</span>
                      </span>
                      <span className="font-mono text-zinc-300 font-bold">
                        {diagnosis.coordinates.economic > 0 ? `+${diagnosis.coordinates.economic}` : diagnosis.coordinates.economic}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-400 rounded-full transition-all duration-500"
                        style={{ width: `${((diagnosis.coordinates.economic + 1) / 2) * 100}%` }}
                      />
                    </div>
                    <p className="text-[11px] font-medium text-zinc-300">
                      {diagnosis.dimensionSummaries.economic.label}
                    </p>
                    <p className="text-[10px] text-zinc-400 leading-tight">
                      {diagnosis.dimensionSummaries.economic.desc}
                    </p>
                  </div>

                  {/* Social */}
                  <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-800/30 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-purple-400 font-semibold flex items-center gap-1">
                        <span>🌿</span>
                        <span>社会文化</span>
                      </span>
                      <span className="font-mono text-zinc-300 font-bold">
                        {diagnosis.coordinates.social > 0 ? `+${diagnosis.coordinates.social}` : diagnosis.coordinates.social}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-400 rounded-full transition-all duration-500"
                        style={{ width: `${((diagnosis.coordinates.social + 1) / 2) * 100}%` }}
                      />
                    </div>
                    <p className="text-[11px] font-medium text-zinc-300">
                      {diagnosis.dimensionSummaries.social.label}
                    </p>
                    <p className="text-[10px] text-zinc-400 leading-tight">
                      {diagnosis.dimensionSummaries.social.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Primary Match Card (首要本命星辰) */}
              {diagnosis.topMatches[0] && (
                <div className="p-4 md:p-5 bg-black/50 border border-white/10 rounded-xl space-y-3 relative font-mono shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-white font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>PRIMARY ALIGNMENT // 首要本命星辰</span>
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-zinc-400">
                        DIST: {diagnosis.topMatches[0].distance}
                      </span>
                      <span className="text-xs font-bold text-white border border-white/15 px-2.5 py-0.5 rounded-md bg-white/10">
                        {diagnosis.topMatches[0].percentage}% MATCH
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <span
                        className="w-4 h-4 rounded-full shadow-lg shrink-0 mt-1"
                        style={{
                          backgroundColor: diagnosis.topMatches[0].node.color,
                          boxShadow: `0 0 16px ${diagnosis.topMatches[0].node.color}`,
                        }}
                      />
                      <div>
                        <div className="flex items-baseline gap-2">
                          <h4 className="text-base font-bold text-white">
                            {diagnosis.topMatches[0].node.name}
                          </h4>
                          <span className="text-xs text-zinc-400">
                            [{diagnosis.topMatches[0].node.englishName}]
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded border border-white/15 text-zinc-400">
                            {diagnosis.topMatches[0].node.period.split('（')[0]}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-300 mt-1.5 leading-relaxed font-sans">
                          {diagnosis.topMatches[0].node.summary}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        onSelectNode(diagnosis.topMatches[0].node);
                        onClose();
                      }}
                      className="px-4 py-2 text-xs uppercase tracking-wider font-bold text-black bg-white hover:bg-zinc-200 rounded-lg transition-all whitespace-nowrap shrink-0 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Target className="w-3.5 h-3.5" />
                      <span>LOCK ON STARFIELD</span>
                    </button>
                  </div>

                  {diagnosis.topMatches[0].node.famousQuote && (
                    <div className="p-3 rounded-lg bg-black/60 border border-white/10 text-xs italic text-zinc-300 font-serif-sc flex items-start gap-2">
                      <Quote className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                      <div>
                        <span>“{diagnosis.topMatches[0].node.famousQuote.quote}”</span>
                        <span className="text-zinc-500 not-italic ml-2 font-sans">
                          —— {diagnosis.topMatches[0].node.famousQuote.author}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Top 3 Resonances List */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between font-mono">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>思想三棱镜 · 契合度榜单 (点击在星图查看)</span>
                  </span>
                  <span className="text-[11px] text-zinc-500">
                    基于空间坐标加权距离排序
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {diagnosis.topMatches.map((item, idx) => (
                    <div
                      key={item.node.id}
                      onClick={() => {
                        onSelectNode(item.node);
                        onClose();
                      }}
                      className="p-3.5 bg-black/40 hover:bg-white/5 border border-white/10 hover:border-white/30 rounded-xl transition-all cursor-pointer group flex flex-col justify-between font-mono shadow-sm"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] text-zinc-400 uppercase tracking-widest">
                            RANK 0{idx + 1}
                          </span>
                          <span className="text-xs font-bold text-white">
                            {item.percentage}%
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: item.node.color }}
                          />
                          <h5 className="font-bold text-xs text-white group-hover:text-cyan-300 transition-colors">
                            {item.node.name}
                          </h5>
                        </div>
                        <p className="text-[11px] text-zinc-400 line-clamp-2 leading-snug font-sans">
                          {item.node.summary}
                        </p>
                      </div>

                      <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-500">
                        <span>DIST: {item.distance}</span>
                        <span className="text-zinc-400 group-hover:text-white flex items-center gap-0.5">
                          <span>EXPLORE</span>
                          <ArrowRight className="w-2.5 h-2.5" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideological Antithesis */}
              {diagnosis.antithesis && (
                <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/30 space-y-2">
                  <div className="flex items-center justify-between font-mono">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-400">
                      <Swords className="w-4 h-4" />
                      <span>潜意识中距离最远的思想宿敌</span>
                    </div>
                    <span className="text-xs text-rose-400/80">
                      契合度仅 {diagnosis.antithesis.percentage}% (空间距离: {diagnosis.antithesis.distance})
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: diagnosis.antithesis.node.color }}
                        />
                        <span className="font-bold text-zinc-100">
                          {diagnosis.antithesis.node.name}
                        </span>
                        <span className="text-xs text-zinc-400">
                          ({diagnosis.antithesis.node.englishName})
                        </span>
                      </div>
                      <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                        {diagnosis.antithesis.node.summary}
                      </p>
                    </div>

                    {onOpenCompare && diagnosis.topMatches[0] && (
                      <button
                        type="button"
                        onClick={() => {
                          onOpenCompare(
                            diagnosis.topMatches[0].node,
                            diagnosis.antithesis.node
                          );
                          onClose();
                        }}
                        className="px-3.5 py-1.5 text-xs text-rose-200 hover:text-white bg-red-900/40 hover:bg-red-800/60 rounded-lg border border-red-800/60 transition-colors whitespace-nowrap shrink-0 flex items-center justify-center gap-1 cursor-pointer font-mono"
                      >
                        <Swords className="w-3.5 h-3.5" />
                        <span>开启两极思想辩战</span>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Bottom Actions */}
              <div className="flex items-center justify-between pt-2 border-t border-white/10 font-mono">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg border border-white/10 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>重新测试</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-white bg-white/10 hover:bg-white/20 rounded-lg border border-white/15 transition-colors cursor-pointer"
                >
                  关闭报告并漫游星图
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
