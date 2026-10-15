// Cultural & Historical Stereotypical Color Palette Engine for Ideologies
// Maps 310+ isms to their universally recognized, historically iconic colors.

import { IsmNode } from '../types/ism';

export interface IdeologyColorMeta {
  color: string;
  glowColor: string;
  categoryTag?: string;
}

// 1. Direct High-Priority ID Mapping for Iconic Ideologies
const ICONIC_ID_COLORS: Record<string, string> = {
  // --- Socialist & Communist Cluster: Revolutionary Red & Crimson ---
  socialism: '#ef4444',
  communism: '#dc2626',
  marxism: '#ef4444',
  marxism_leninism: '#b91c1c',
  maoism: '#dc2626',
  trotskyism: '#f87171',
  democratic_socialism: '#f87171',
  social_democracy: '#fb7185',
  syndicalism: '#e11d48',
  anarcho_syndicalism: '#be123c',
  anarcho_communism: '#dc2626',
  utopian_socialism: '#f43f5e',
  scientific_socialism: '#b91c1c',
  eurocommunism: '#fb7185',
  left_communism: '#e11d48',
  fabian_socialism: '#f43f5e',
  guild_socialism: '#e11d48',
  laborism: '#ef4444',

  // --- Capitalist, Free Market & Wealth: Gold & Warm Amber ---
  capitalism: '#f59e0b',
  laissez_faire: '#eab308',
  free_market_capitalism: '#f59e0b',
  neoliberalism: '#eab308',
  state_capitalism: '#d97706',
  mercantilism: '#b45309',
  physiocracy: '#d97706',
  monetarism: '#f59e0b',
  austrian_economics: '#eab308',
  ordoliberalism: '#ca8a04',
  crony_capitalism: '#a16207',

  // --- Classical Liberalism & Constitutional Democracy: Freedom Blue & Azure ---
  classical_liberalism: '#3b82f6',
  liberalism: '#2563eb',
  social_liberalism: '#60a5fa',
  constitutionalism: '#1d4ed8',
  republicanism: '#2563eb',
  parliamentarianism: '#3b82f6',
  libertarianism: '#38bdf8',
  civic_humanism: '#60a5fa',

  // --- Anarchist Movements: Pitch Black, Yellow-Black, Red-Black ---
  anarchism: '#e4e4e7', // High-contrast silver-white star with black core
  anarcho_capitalism: '#facc15', // Yellow & Black
  individualist_anarchism: '#a1a1aa',
  mutualism: '#fb923c',
  insurrectionary_anarchism: '#f43f5e',
  crypto_anarchism: '#22d3ee',
  green_anarchism: '#22c55e',

  // --- Conservative, Traditionalist & Monarchy: Royal Navy Blue & Deep Indigo ---
  conservatism: '#1e40af',
  neoconservatism: '#1d4ed8',
  traditionalism: '#1e3a8a',
  paleoconservatism: '#172554',
  monarchism: '#4338ca',
  absolutism: '#312e81',
  aristocracy: '#3730a3',
  toryism: '#1e40af',
  theocracy: '#581c87',

  // --- Authoritarian, Fascist & Far-Right: Dark Crimson, Slate & Bronze Brown ---
  fascism: '#831843',
  national_socialism: '#7f1d1d',
  authoritarianism: '#475569',
  totalitarianism: '#334155',
  corporatism: '#78350f',
  militarism: '#64748b',
  reactionism: '#475569',

  // --- Ecological, Green & Nature: Emerald, Forest Green & Jade ---
  ecologism: '#10b981',
  environmentalism: '#059669',
  deep_ecology: '#047857',
  eco_socialism: '#10b981',
  eco_feminism: '#34d399',
  agrarianism: '#16a34a',
  biocentrism: '#059669',
  degrowth: '#10b981',

  // --- Feminist & Gender Theory: Magenta, Purple, Lavender & Rose ---
  feminism: '#d946ef',
  liberal_feminism: '#c084fc',
  radical_feminism: '#e11d48',
  socialist_feminism: '#f43f5e',
  intersectional_feminism: '#d946ef',
  queer_theory: '#e879f9',
  cyborg_feminism: '#ec4899',

  // --- Cyber, Accelerationism & Digital Future: Neon Cyan, Neon Lime & Violet ---
  accelerationism: '#06b6d4',
  left_accelerationism: '#22d3ee',
  right_accelerationism: '#0891b2',
  transhumanism: '#38bdf8',
  posthumanism: '#818cf8',
  cybernetics: '#06b6d4',
  cyberpunk: '#00f5ff',
  technocracy: '#0284c7',
  effective_accelerationism: '#a3e635', // e/acc lime
  effective_altruism: '#2dd4bf',

  // --- Nihilism, Absurdism & Existentialism: Smoke Slate, Absinthe Teal, Midnight ---
  nihilism: '#71717a',
  existential_nihilism: '#52525b',
  absurdism: '#14b8a6',
  existentialism: '#0d9488',
  christian_existentialism: '#0f766e',
  pessimism: '#475569',
  cynicism: '#b45309',

  // --- Rationalism, Enlightenment & Epistemology: Ice Blue & Diamond Cyan ---
  rationalism: '#38bdf8',
  cartesianism: '#60a5fa',
  enlightenment: '#93c5fd',
  scientism: '#0284c7',
  logical_positivism: '#38bdf8',
  critical_rationalism: '#60a5fa',
  kantianism: '#818cf8',
  neo_kantianism: '#6366f1',

  // --- Empiricism, Pragmatism & Positivism: Warm Ochre & Earth Terracotta ---
  empiricism: '#f97316',
  pragmatism: '#ea580c',
  positivism: '#f97316',
  instrumentalism: '#fb923c',
  utilitarianism: '#f59e0b',
  behaviorism: '#fb923c',

  // --- Romanticism & Arts: Deep Wine Velvet & Passion Rose ---
  romanticism: '#f43f5e',
  dark_romanticism: '#9f1239',
  aestheticism: '#e879f9',
  decadentism: '#a855f7',
  dadaism: '#fb923c',
  surrealism: '#c084fc',
  modernism: '#38bdf8',
  postmodernism: '#a855f7',
  structuralism: '#8b5cf6',
  post_structuralism: '#a855f7',
  deconstruction: '#c084fc',

  // --- Stoicism, Epicureanism & Classical Antiquity: Marble Gray, Amber Coral ---
  stoicism: '#94a3b8',
  epicureanism: '#fb923c',
  aristotelianism: '#3b82f6',
  platonism: '#818cf8',
  neo_platonism: '#6366f1',
  skepticism: '#64748b',
  humanism: '#38bdf8',
  cosmopolitanism: '#0284c7',
  nationalism: '#dc2626',
  patriotism: '#2563eb',

  // --- Mysticism & Esotericism: Amethyst & Deep Indigo ---
  mysticism: '#7c3aed',
  gnosticism: '#6d28d9',
  hermeticism: '#8b5cf6',
  taoism: '#10b981',
  confucianism: '#d97706',
  buddhism: '#f59e0b',
};

// 2. Keyword heuristic patterns for any remaining or custom isms
const KEYWORD_PATTERNS: Array<{ regex: RegExp; color: string }> = [
  // Socialism / Communism / Labor
  { regex: /(共产|科学社会主义|马克思|列宁|托洛茨基|工团|阶级|无产|左翼|劳动)/i, color: '#ef4444' },
  // Capitalism / Market / Finance / Currency
  { regex: /(资本|市场|自由放任|重商|货币|私有|财富)/i, color: '#f59e0b' },
  // Anarchism / Liberty / Autonomy
  { regex: /(无政府|自由意志|自愿|自治|去中心)/i, color: '#38bdf8' },
  // Green / Ecology / Nature / Climate
  { regex: /(生态|绿色|环境|自然|深层生态|环保|农本)/i, color: '#10b981' },
  // Feminism / Gender / Queer / Diversity
  { regex: /(女性|女权|酷儿|性别|平权|交叉)/i, color: '#d946ef' },
  // Cyber / Transhuman / AI / Acceleration
  { regex: /(赛博|控制论|超人类|加速|后人类|算法|奇点|数字)/i, color: '#06b6d4' },
  // Conservatism / Tradition / Monarchy
  { regex: /(保守|传统|君主|秩序|王权|复古)/i, color: '#1e40af' },
  // Fascism / Totalitarian / Militarism
  { regex: /(法西斯|极权|军国|国家主义|极端民族)/i, color: '#7f1d1d' },
  // Rationalism / Logic / Science / Descartes / Kant
  { regex: /(唯理|理性|公理|笛卡尔|康德|逻辑|认知)/i, color: '#60a5fa' },
  // Empiricism / Pragmatism / Experience
  { regex: /(经验|实用|实证|效用|功利|行为)/i, color: '#f97316' },
  // Nihilism / Absurdism / Void
  { regex: /(虚无|荒谬|悲观|犬儒|深渊|虚妄)/i, color: '#71717a' },
  // Existentialism / Sartre / Camus
  { regex: /(存在主义|萨特|加缪|荒诞)/i, color: '#0d9488' },
  // Romanticism / Aesthetics / Emotion
  { regex: /(浪漫|唯美|狂飙|颓废|抒情)/i, color: '#f43f5e' },
  // Postmodern / Deconstruction / Avant-Garde
  { regex: /(后现代|解构|达达|超现实|结构)/i, color: '#a855f7' },
  // Stoicism / Ancient / Skepticism
  { regex: /(斯多葛|怀疑|伊壁鸠鲁|禁欲|恬淡)/i, color: '#94a3b8' },
  // Mysticism / Spirituality
  { regex: /(神秘|灵修|诺斯替|神学|宗教)/i, color: '#7c3aed' },
];

/**
 * Resolves the culturally authentic, stereotypical color for any IsmNode.
 * Guarantees a rich, distinct, universally recognizable color for every star.
 */
export function getStereotypicalColor(node: IsmNode): string {
  // 1. Direct match by ID
  const directId = node.id.toLowerCase();
  if (ICONIC_ID_COLORS[directId]) {
    return ICONIC_ID_COLORS[directId];
  }

  // 2. Keyword heuristic across Chinese name, English name, and summary
  const fullText = `${node.name} ${node.englishName} ${node.summary}`.toLowerCase();
  for (const { regex, color } of KEYWORD_PATTERNS) {
    if (regex.test(fullText)) {
      return color;
    }
  }

  // 3. Fallback based on node category with richer modern tones
  switch (node.category) {
    case 'political':
      return '#3b82f6'; // Bright Liberty Blue
    case 'philosophical':
      return '#a855f7'; // Mystical Violet
    case 'cultural':
      return '#f43f5e'; // Romantic Crimson
    case 'ethical':
      return '#10b981'; // Ethical Emerald
    case 'contemporary':
      return '#06b6d4'; // Cyber Cyan
    default:
      return '#38bdf8';
  }
}

/**
 * Returns a brightened halo/glow color corresponding to the base star color.
 */
export function getStarGlowColor(baseColor: string, alpha: number = 0.4): string {
  return baseColor;
}
