import React, { useState } from 'react';
import { 
  QUIZ_MODES, 
  getQuizQuestionsByMode, 
  QuizModeId, 
  QuizQuestion,
  QuizOption
} from '../data/ismsData';
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
  Crosshair,
  Check,
  Award,
  BookOpen,
  Send,
  Loader2
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

export const PhilosophyQuizModal: React.FC<PhilosophyQuizModalProps> = ({
  allNodes,
  onClose,
  onSelectNode,
  onOpenCompare,
}) => {
  // Mode selection: 'island_5' | 'roommate_10' | 'nation_16'
  const [quizMode, setQuizMode] = useState<QuizModeId | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  
  // Analyzing state (suspense delay before showing results)
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Active question set based on chosen mode
  const activeQuestions: QuizQuestion[] = quizMode
    ? getQuizQuestionsByMode(quizMode)
    : [];

  const currentQ = activeQuestions[currentQuestionIndex];
  const activeModeMeta = QUIZ_MODES.find((m) => m.id === quizMode);

  // Handle option selection
  const handleSelectOption = (optionIndex: number) => {
    const updated = [...selectedAnswers];
    updated[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(updated);
  };

  // Move to next question or submit
  const handleNext = () => {
    if (selectedAnswers[currentQuestionIndex] === undefined) return;

    if (currentQuestionIndex + 1 < activeQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Final submission: start analyzing transition, reveal results only after complete!
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setIsCompleted(true);
        confetti({
          particleCount: 75,
          spread: 85,
          origin: { y: 0.6 },
          colors: ['#38bdf8', '#10b981', '#a855f7', '#f59e0b', '#ec4899'],
        });
      }, 700);
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
    setIsAnalyzing(false);
    setIsCompleted(false);
  };

  // Weighted Ideological Scoring Algorithm (政治、经济、社会三维加权解算)
  const calculateDiagnosis = (): DiagnosisResult => {
    const dimWeightedSums = { political: 0, economic: 0, social: 0 };
    const dimTotalWeights = { political: 0, economic: 0, social: 0 };
    const directAffinityMap: Record<string, number> = {};
    const letterCounts: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 };

    allNodes.forEach((node) => {
      directAffinityMap[node.id] = 0;
    });

    selectedAnswers.forEach((ansIndex, qIdx) => {
      letterCounts[ansIndex] = (letterCounts[ansIndex] || 0) + 1;
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
      const isPolFocus = q.dimensionCategory === 'political';
      const isEcoFocus = q.dimensionCategory === 'economic';
      const isSocFocus = q.dimensionCategory === 'social';

      const polMultiplier = isPolFocus ? 1.6 : 0.8;
      const ecoMultiplier = isEcoFocus ? 1.6 : 0.8;
      const socMultiplier = isSocFocus ? 1.6 : 0.8;

      dimWeightedSums.political += opt.weights.political * polMultiplier;
      dimTotalWeights.political += polMultiplier;

      dimWeightedSums.economic += opt.weights.economic * ecoMultiplier;
      dimTotalWeights.economic += ecoMultiplier;

      dimWeightedSums.social += opt.weights.social * socMultiplier;
      dimTotalWeights.social += socMultiplier;
    });

    // 3. User coordinates normalized in [-1, 1]
    const userCoords = {
      political: Math.max(
        -1,
        Math.min(1, dimTotalWeights.political ? dimWeightedSums.political / dimTotalWeights.political : 0)
      ),
      economic: Math.max(
        -1,
        Math.min(1, dimTotalWeights.economic ? dimWeightedSums.economic / dimTotalWeights.economic : 0)
      ),
      social: Math.max(
        -1,
        Math.min(1, dimTotalWeights.social ? dimWeightedSums.social / dimTotalWeights.social : 0)
      ),
    };

    // 4. Max possible direct affinity
    const maxDirectAffinity = Math.max(...Object.values(directAffinityMap), 1);

    // 5. Calculate 3D Euclidean distance & combined score for all nodes in star map
    const MAX_DISTANCE = Math.sqrt(12);

    const scoredNodes = allNodes.map((node) => {
      const nodeSpectrum = node.spectrum || { political: 0, economic: 0, social: 0 };
      const dP = userCoords.political - nodeSpectrum.political;
      const dE = userCoords.economic - nodeSpectrum.economic;
      const dS = userCoords.social - nodeSpectrum.social;

      const distance = Math.sqrt(dP * dP + dE * dE + dS * dS);
      const spatialProximity = Math.max(0, 1 - distance / MAX_DISTANCE);

      const normalizedAffinity = (directAffinityMap[node.id] || 0) / maxDirectAffinity;
      const combinedScore = spatialProximity * 0.6 + normalizedAffinity * 0.4;

      return {
        node,
        distance: Number(distance.toFixed(3)),
        spatialProximity: Number(spatialProximity.toFixed(3)),
        score: combinedScore,
      };
    });

    scoredNodes.sort((a, b) => b.score - a.score);
    const highestScore = scoredNodes[0]?.score || 1;

    // Top 3 matches
    const topMatches = scoredNodes.slice(0, 3).map((item, idx) => {
      const basePercentage = Math.round((item.score / highestScore) * 96);
      const percentage = Math.min(98 - idx * 5, Math.max(68, basePercentage));
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
      Math.min(24, Math.round((antithesisItem.score / highestScore) * 25))
    );
    const antithesis = {
      node: antithesisItem.node,
      score: antithesisItem.score,
      percentage: antithesisPercentage,
      distance: antithesisItem.distance,
    };

    // Dimension qualitative summaries
    const getPoliticalSummary = (val: number) => {
      if (val < -0.35) return { label: '秩序统领与集体本位', desc: '注重社会稳定、集体纪律与权威统筹' };
      if (val < 0.25) return { label: '程序正义与有限治理', desc: '主张在法治与制度规范下实现公共利益平衡' };
      if (val < 0.6) return { label: '宪政自由与权利分立', desc: '强调对公权力的严格防范与公民自决' };
      return { label: '绝对自决与横向自治', desc: '崇尚个体意志不受干涉，倾向自发自治与互助' };
    };

    const getEconomicSummary = (val: number) => {
      if (val < -0.35) return { label: '公有共济与平等兜底', desc: '警惕资本过度集中，主张全民基本保障与劳动者实质平等' };
      if (val < 0.25) return { label: '混合制度与福利改良', desc: '兼顾市场竞争效率与社会弱者兜底的平衡' };
      if (val < 0.6) return { label: '自由市场与产权激励', desc: '相信价格机制与竞争创新是繁荣的最有效引擎' };
      return { label: '绝对私有与放任自由', desc: '反对一切干预，信奉自由自愿交易与神圣私产' };
    };

    const getSocialSummary = (val: number) => {
      if (val < -0.35) return { label: '敬畏传统与秩序沉淀', desc: '珍视历史经验、伦理伦常与渐进改良的温和智慧' };
      if (val < 0.25) return { label: '理性温和与务实求真', desc: '基于现实效果审慎对待观念变革与社会新潮' };
      if (val < 0.6) return { label: '多元包容与个体自决', desc: '尊重个体生命差异，倡导宽容、平权与自我表达' };
      return { label: '激进解构与前卫反叛', desc: '打破固定陈规与中心叙事，拥抱技术奇点与生命多元飞升' };
    };

    const polSummary = getPoliticalSummary(userCoords.political);
    const ecoSummary = getEconomicSummary(userCoords.economic);
    const socSummary = getSocialSummary(userCoords.social);

    // Dynamic Archetype generation according to mode and choices
    let archetypeTitle = '【人间清醒师 · 社民宪政派】';
    let archetypeSubtitle = '社会民主主义 / 现代自由主义 / 功利主义';
    let archetypeDescription =
      '你不走极端，既讨厌弱肉强食的冷血，又害怕无法无天的混乱，是天生的“端水大师”与制度设计师。';

    if (quizMode === 'island_5') {
      // 5-Q Rule: Check letter with maximum choices
      let maxCount = -1;
      let dominantLetter = 0; // 0=A, 1=B, 2=C, 3=D
      for (let i = 0; i <= 3; i++) {
        if ((letterCounts[i] || 0) > maxCount) {
          maxCount = letterCounts[i];
          dominantLetter = i;
        }
      }

      if (dominantLetter === 0) {
        archetypeTitle = '【铁血大管家 · 集体/威权/传统派】';
        archetypeSubtitle = '国家社会主义 / 法家主义 / 传统集体主义';
        archetypeDescription =
          '你最看不惯一盘散沙和自私鬼，坚信“只要大家听指挥、有锅同吃，就没有过不去的坎”。在危机面前，秩序与集体的存续高于一切。';
      } else if (dominantLetter === 1) {
        archetypeTitle = '【人间清醒师 · 社民/宪政/功利派】';
        archetypeSubtitle = '社会民主主义 (北欧模式) / 现代自由主义 / 功利主义';
        archetypeDescription =
          '你不走极端，既讨厌弱肉强食的冷血，又害怕无法无天的混乱，是天生的“端水大师”与制度设计师。';
      } else if (dominantLetter === 2) {
        archetypeTitle = '【狂野资本家 · 新自由/客观/加速派】';
        archetypeSubtitle = '新自由主义 / 兰德客观主义 / 有效加速主义 (e/acc)';
        archetypeDescription =
          '你信奉“强者恒强、明码标价”，讨厌圣母心和虚伪道德说教，觉得世界是由野心家、企业家和科技狂人推动的。';
      } else {
        archetypeTitle = '【自由流浪汉 · 安那其/道家/存在主义派】';
        archetypeSubtitle = '无政府互助主义 / 乔治主义 / 道家自然主义 / 存在主义';
        archetypeDescription =
          '你骨子里反感一切管束和权威，既不想当老板剥削别人，也不想当奴隶听人使唤，只想在自由的旷野里吹风。';
      }
    } else {
      // Dynamic spectrum mapping for 10-Q & 16-Q modes
      if (userCoords.political > 0.3 && userCoords.economic < -0.2 && userCoords.social > 0.3) {
        archetypeTitle = '【民主人道先驱 · 左翼自由共济派】';
        archetypeSubtitle = '民主社会主义 / 左翼自由意志 · 捍卫底层实质平等与个体尊严';
        archetypeDescription =
          '你极度珍视个体的人格尊严与生命体验，痛恨资本对劳动者的无情物化；深信唯有通过社会制度性兜底与公共福利，才能让每个人真正享有不被生存威胁胁迫的自由。';
      } else if (userCoords.political > 0.3 && userCoords.economic > 0.3 && userCoords.social > 0.2) {
        archetypeTitle = '【狂野资本开拓家 · 自由意志加速派】';
        archetypeSubtitle = '新自由主义 / 自由意志资本主义 / 有效加速 (e/acc)';
        archetypeDescription =
          '你崇尚自力更生与契约精神，坚信自由竞争、明码标价与科技创新是人类繁荣的最强引擎。主张权力最小化，反对保姆式监管。';
      } else if (userCoords.social < -0.3 && userCoords.political < 0) {
        archetypeTitle = '【铁血大当家 · 秩序沉淀与审慎保守派】';
        archetypeSubtitle = '传统主义 / 经典保守主义 · 敬畏历史经验，警惕激进乌托邦';
        archetypeDescription =
          '你深谙人类理性的有限性，敬畏数千年沉淀的历史传统、制度习俗与家庭伦理，主张渐进改良而非激进的乌托邦推倒重来。';
      } else if (userCoords.social > 0.5 && userCoords.political > 0.2) {
        archetypeTitle = '【先锋批判客 · 后现代解构与自由漫游派】';
        archetypeSubtitle = '后现代批判哲学 / 酷儿先锋 · 洞察话语缝隙，打破陈规枷锁';
        archetypeDescription =
          '你善于洞察既定观念背后的话语权力缝隙，拒绝将任何陈规当成理所当然，拥有敏锐的批判性思维与前卫审美。';
      } else if (userCoords.economic > 0.3 && userCoords.social > 0.4) {
        archetypeTitle = '【奇点飞升客 · 超人类主义与科技加速派】';
        archetypeSubtitle = '有效加速主义 (e/acc) / 超人类主义 · 拥抱AI奇点与跨界飞升';
        archetypeDescription =
          '你对科技爆炸抱有极大热情，坚信技术进步是破除人类生物局限与文明停滞的唯一解，渴望加速驶向未知的星辰大海。';
      } else {
        archetypeTitle = '【人间清醒师 · 务实社民与中道践行者】';
        archetypeSubtitle = '社会民主主义 / 实用主义 · 有效即真理，拒绝非黑即白极端';
        archetypeDescription =
          '你不轻易被极端的意识形态狂热裹挟，善于在互相冲突的价值之间寻求务实的公约数与可落地的建设性方案。';
      }
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
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
              <p className="text-[11px] text-zinc-400">
                {quizMode && activeModeMeta
                  ? `${activeModeMeta.title} // ${activeModeMeta.badge}`
                  : '沉浸式情境推演 · 测出你的思想本命星辰与潜意识宿敌'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Step 1: Mode Selection Cards */}
          {!quizMode && !isCompleted && (
            <div className="space-y-4">
              <div className="text-center max-w-lg mx-auto space-y-1.5 font-mono">
                <span className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-bold">
                  CHOOSE YOUR SCRIPT // 选择测评剧场
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white">
                  拒绝刻板问卷，投身人类命运的思想大戏
                </h3>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  置身于荒岛风暴、奇葩合租屋或50年建国史诗的具体抉择中，测试完毕后一次性解密你的完整三维思想图谱。
                </p>
              </div>

              {/* 3 Story Mode Cards */}
              <div className="grid grid-cols-1 gap-3.5 pt-1 font-mono">
                {QUIZ_MODES.map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => {
                      setQuizMode(mode.id);
                      setCurrentQuestionIndex(0);
                      setSelectedAnswers([]);
                    }}
                    className="p-4 md:p-5 bg-black/40 hover:bg-white/5 border border-white/15 hover:border-cyan-400/60 rounded-xl text-left transition-all group flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer shadow-sm hover:shadow-cyan-950/20"
                  >
                    <div className="flex items-start gap-3.5">
                      <span className="text-2xl p-2.5 rounded-xl bg-white/5 border border-white/10 shrink-0">
                        {mode.icon}
                      </span>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-white uppercase tracking-wider group-hover:text-cyan-300 transition-colors">
                            {mode.name}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded border border-white/15 bg-white/10 text-zinc-300 font-mono">
                            {mode.badge}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white mb-1">
                          {mode.title}
                        </h4>
                        <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                          {mode.desc}
                        </p>
                      </div>
                    </div>

                    <div className="text-xs font-bold text-zinc-400 group-hover:text-white flex items-center gap-1 shrink-0 self-end md:self-center transition-colors">
                      <span>ENTER</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Answering Questions (NO REAL-TIME SCORE SPOILERS) */}
          {quizMode && !isCompleted && !isAnalyzing && currentQ && (
            <div className="space-y-5">
              {/* Act Header & Progress */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded border border-cyan-400/30 bg-cyan-950/40 text-cyan-300 text-[11px] font-bold">
                      {currentQ.actTitle || activeModeMeta?.name}
                    </span>
                    <span className="text-zinc-400 text-[11px] hidden sm:inline">
                      全维沉浸推演 · 凭第一直觉抉择
                    </span>
                  </div>
                  <div className="text-zinc-400 text-xs">
                    第 <strong className="text-white text-sm">{currentQuestionIndex + 1}</strong> / {activeQuestions.length} 幕
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="flex items-center gap-1 w-full">
                  {activeQuestions.map((_, idx) => {
                    const isAnswered = selectedAnswers[idx] !== undefined;
                    const isCurrent = currentQuestionIndex === idx;
                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          if (selectedAnswers[idx] !== undefined || idx <= selectedAnswers.length) {
                            setCurrentQuestionIndex(idx);
                          }
                        }}
                        className={`h-1.5 flex-1 rounded-full transition-all cursor-pointer ${
                          isCurrent
                            ? 'bg-cyan-400 ring-2 ring-white scale-y-125'
                            : isAnswered
                            ? 'bg-cyan-500/70'
                            : 'bg-zinc-800 hover:bg-zinc-700'
                        }`}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Question Scene / Backdrop */}
              <div className="p-4 md:p-5 bg-black/60 border border-white/15 rounded-xl shadow-inner space-y-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest">
                    {currentQ.title}
                  </span>
                </div>
                <h3 className="text-sm md:text-base font-normal text-zinc-100 leading-relaxed font-serif-sc">
                  {currentQ.scenario}
                </h3>
              </div>

              {/* Option Cards (Clean, Zero Spoiler: Labels and Tags are hidden until final diagnosis report) */}
              <div className="space-y-2.5">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedAnswers[currentQuestionIndex] === idx;
                  const cleanOptionText = option.text.replace(/^【.*?】\s*/, '');
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-3.5 md:p-4 rounded-xl border transition-all text-xs md:text-sm leading-relaxed group flex items-start gap-3.5 cursor-pointer ${
                        isSelected
                          ? 'bg-cyan-950/30 border-cyan-400 text-white ring-1 ring-cyan-400/50 shadow-md'
                          : 'bg-black/40 hover:bg-white/5 border-white/10 hover:border-white/30 text-zinc-300'
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-md border flex items-center justify-center shrink-0 text-xs font-mono mt-0.5 transition-colors ${
                          isSelected
                            ? 'bg-cyan-400 text-black border-cyan-400 font-bold'
                            : 'border-white/20 group-hover:border-white/40 text-zinc-400 group-hover:text-white'
                        }`}
                      >
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <div className="flex-1 space-y-1">
                        <p className="text-zinc-200 group-hover:text-white font-sans text-xs md:text-sm leading-relaxed">
                          {cleanOptionText}
                        </p>
                      </div>
                      {isSelected && (
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Navigation Action Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-white/10 font-mono">
                <button
                  type="button"
                  onClick={handlePrevQuestion}
                  disabled={currentQuestionIndex === 0}
                  className="px-3.5 py-1.5 text-xs text-zinc-400 hover:text-white disabled:opacity-30 disabled:hover:text-zinc-400 flex items-center gap-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>上一幕</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  放弃重选剧场
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={selectedAnswers[currentQuestionIndex] === undefined}
                  className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-40 ${
                    currentQuestionIndex + 1 === activeQuestions.length
                      ? 'bg-cyan-400 text-black hover:bg-cyan-300 shadow-md shadow-cyan-950/40'
                      : 'bg-white text-black hover:bg-zinc-200'
                  }`}
                >
                  {currentQuestionIndex + 1 === activeQuestions.length ? (
                    <>
                      <span>揭晓思想底牌</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  ) : (
                    <>
                      <span>下一幕</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Step 2.5: Analyzing Transition */}
          {isAnalyzing && (
            <div className="py-16 flex flex-col items-center justify-center space-y-4 font-mono text-center">
              <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white tracking-widest uppercase">
                  CALCULATING COSMIC RESONANCE...
                </h4>
                <p className="text-xs text-zinc-400 font-sans">
                  正在汇总你的历史决策，向 310+ 颗思想星辰引力场求导中...
                </p>
              </div>
            </div>
          )}

          {/* Step 3: Comprehensive Diagnostic Result Report (Shown Only After Full Completion) */}
          {isCompleted && diagnosis && (
            <div className="space-y-6">
              {/* Soulmate Archetype Banner */}
              <div className="p-5 md:p-6 bg-black/60 border border-cyan-500/30 rounded-2xl text-center space-y-2 relative overflow-hidden shadow-2xl font-mono">
                <div className="inline-flex items-center gap-1.5 text-xs text-cyan-400 px-3 py-0.5 rounded-full border border-cyan-400/30 bg-cyan-950/40 uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  <span>SPECTRUM RESOLUTION // 专属思想底牌</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white">
                  {diagnosis.archetypeTitle}
                </h3>
                <p className="text-xs text-cyan-300/80 font-mono">
                  {diagnosis.archetypeSubtitle}
                </p>
                <p className="text-xs text-zinc-300 max-w-lg mx-auto leading-relaxed pt-2 font-sans">
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
                      className="px-4 py-2 text-xs font-bold bg-white text-black hover:bg-zinc-200 rounded-lg transition-colors flex items-center gap-1.5 shrink-0 self-start md:self-auto shadow-sm cursor-pointer"
                    >
                      <span>在星图中定位</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {diagnosis.topMatches[0].node.famousQuote && (
                    <div className="p-3 bg-white/5 border border-white/10 rounded-lg text-xs italic text-zinc-300 font-sans flex items-start gap-2">
                      <span className="text-zinc-500 font-serif text-sm">“</span>
                      <span>{diagnosis.topMatches[0].node.famousQuote.quote}</span>
                      <span className="not-italic text-zinc-400 shrink-0 ml-auto font-mono text-[11px]">
                        —— {diagnosis.topMatches[0].node.famousQuote.author}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Dialectic Nemesis (潜意识宿敌) */}
              <div className="p-4 md:p-5 bg-rose-950/20 border border-rose-900/40 rounded-xl space-y-3 font-mono shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-rose-400 font-bold flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-rose-400" />
                    <span>DIALECTIC NEMESIS // 潜意识宿敌</span>
                  </span>
                  <span className="text-xs font-bold text-rose-300 border border-rose-800/40 px-2 py-0.5 rounded bg-rose-950/40">
                    极低契合 ({diagnosis.antithesis.percentage}%)
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <span
                      className="w-4 h-4 rounded-full shadow-lg shrink-0 mt-1"
                      style={{
                        backgroundColor: diagnosis.antithesis.node.color,
                        boxShadow: `0 0 16px ${diagnosis.antithesis.node.color}`,
                      }}
                    />
                    <div>
                      <div className="flex items-baseline gap-2">
                        <h4 className="text-sm md:text-base font-bold text-white">
                          {diagnosis.antithesis.node.name}
                        </h4>
                        <span className="text-xs text-zinc-400">
                          [{diagnosis.antithesis.node.englishName}]
                        </span>
                      </div>
                      <p className="text-xs text-zinc-300 mt-1 leading-relaxed font-sans">
                        {diagnosis.antithesis.node.summary}
                      </p>
                    </div>
                  </div>

                  {onOpenCompare && diagnosis.topMatches[0] && (
                    <button
                      type="button"
                      onClick={() => {
                        onOpenCompare(diagnosis.topMatches[0].node, diagnosis.antithesis.node);
                        onClose();
                      }}
                      className="px-3.5 py-1.5 text-xs text-rose-200 border border-rose-500/40 bg-rose-950/40 hover:bg-rose-900/40 rounded-lg transition-colors flex items-center gap-1.5 shrink-0 self-start md:self-auto cursor-pointer"
                    >
                      <Swords className="w-3.5 h-3.5 text-rose-400" />
                      <span>与宿敌开启辩证对决</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Other High-Resonance Constellation Matches */}
              <div className="space-y-2.5 font-mono">
                <span className="text-xs uppercase tracking-wider text-zinc-400 font-bold block">
                  SECONDARY CONSTELLATION NODES // 伴生共鸣思想族系
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {diagnosis.topMatches.slice(1).map((match, idx) => (
                    <div
                      key={match.node.id}
                      onClick={() => {
                        onSelectNode(match.node);
                        onClose();
                      }}
                      className="p-3.5 bg-black/40 hover:bg-white/5 border border-white/10 hover:border-white/30 rounded-xl transition-all cursor-pointer flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: match.node.color }}
                        />
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {match.node.name}
                          </div>
                          <div className="text-[10px] text-zinc-500">
                            {match.node.englishName}
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-zinc-400 group-hover:text-white">
                        {match.percentage}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Revealed Decision Dossier (Only Shown in Final Report) */}
              <div className="space-y-3 font-mono pt-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-zinc-300 font-bold flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    <span>DECISION DOSSIER // 历史抉择解析与思想溯源</span>
                  </span>
                  <span className="text-[10px] text-zinc-500">测试已完成 · 全面解密</span>
                </div>

                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {activeQuestions.map((q, idx) => {
                    const ansIdx = selectedAnswers[idx];
                    const chosenOption = ansIdx !== undefined ? q.options[ansIdx] : null;
                    if (!chosenOption) return null;
                    const cleanText = chosenOption.text.replace(/^【.*?】\s*/, '');
                    return (
                      <div
                        key={q.id}
                        className="p-3 bg-black/50 border border-white/10 rounded-xl space-y-1.5 text-xs"
                      >
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-cyan-400 font-bold">
                            第 {idx + 1} 幕 · {q.title}
                          </span>
                          <span className="text-zinc-500 text-[10px]">
                            {q.dimensionLabel}
                          </span>
                        </div>
                        <p className="text-zinc-300 font-sans text-xs line-clamp-2">
                          <strong className="text-white font-mono mr-1">
                            [{String.fromCharCode(65 + ansIdx)}]
                          </strong>
                          {cleanText}
                        </p>
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          {chosenOption.label && (
                            <span className="px-2 py-0.5 rounded bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-[10px] font-bold">
                              {chosenOption.label}
                            </span>
                          )}
                          {chosenOption.tag && (
                            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400 text-[10px]">
                              {chosenOption.tag}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 font-mono">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 text-xs text-zinc-300 hover:text-white border border-white/20 bg-white/5 hover:bg-white/10 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>切换其他故事剧场重新测评</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 text-xs bg-white text-black font-bold hover:bg-zinc-200 rounded-lg transition-all shadow-md cursor-pointer"
                >
                  返回思想全景星图
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
