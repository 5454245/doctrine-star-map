import { IsmNode } from '../../types/ism';

// 第三卷：伦理学、人生哲学与存在价值 (071 – 105 & 衍生分支)
export const VOL3_ISMS: IsmNode[] = [
  // 071. 犬儒主义 (Cynicism)
  {
    id: 'cynicism',
    name: '犬儒主义',
    englishName: 'Cynicism',
    category: 'ethical',
    color: '#10b981',
    period: '古希腊第欧根尼至现代愤世嫉俗',
    eraYear: -390,
    summary: '古典蔑视世俗习俗与虚伪权贵以回归极简自然；现代演变为解构一切崇高的看透反讽心态。',
    elevatorPitch: '第欧根尼住在木桶里，亚历山大大帝问他需要什么，他说“请你走开，不要挡住我的阳光”。古典犬儒用极致的简朴向世界展示自由；现代犬儒则看穿了世道不公却无能为力，以玩世不恭和黑色幽默消解内耗。',
    coreTenets: [
      '古典形态：回归简朴德性，蔑视财富、权力与繁文缛节',
      '现代形态（斯洛特戴克）：启蒙理性的反讽自嘲（“我知道现实很假，但我依然假装配合”）',
      '拒绝被任何宏大神圣的道德绑架',
    ],
    internetReality: '现代打工人的自我调侃保护色——“累了，毁灭吧”，用冷嘲热讽抵御过度内卷与虚假叙事。',
    dailyLifeManifestation: '对领导画的大饼心知肚明，表面点头微笑着回复“收到”，心里早已准备好下班摸鱼。',
    keyThinkers: [
      { name: '第欧根尼 (Diogenes)', era: '约前412-前323', note: '木桶里的希腊哲人' },
      { name: '安提斯泰尼 (Antisthenes)', era: '约前445-前365', note: '苏格拉底弟子，学派奠基人' }
    ],
    famousQuote: { quote: '请走开一点，你挡住了我的阳光。', author: '第欧根尼对亚历山大大帝' },
    spectrum: { political: 0.7, economic: -0.2, social: 0.8 },
    initialPosition: { x: 420, y: 80 }
  },

  // 072. 斯多葛主义 (Stoicism)
  {
    id: 'stoicism',
    name: '斯多葛主义',
    englishName: 'Stoicism',
    category: 'ethical',
    color: '#10b981',
    period: '希腊化与古罗马帝国时代',
    eraYear: -300,
    summary: '顺应宇宙理性（Logos），区分“可控与不可控之事”，以不动心（Apatheia）保持内心坚不可摧。',
    elevatorPitch: '世界上的事情分为两类：你能控制的（你的态度、判断与选择），和你无法控制的（天气、他人看法、意外与死亡）。对不可控之事泰然顺应，对可控之事竭尽全力。不为外物所动，心如静水深流。',
    coreTenets: [
      '控制二分法（Dichotomy of Control）：将心力聚焦于唯一可控的自我意志',
      '不动心（Apatheia）：消除由非理性欲望与虚假判断引起的狂乱激情',
      '顺应自然（Amor Fati）：热爱命运，把一切磨难视作锤炼品格的试金石',
    ],
    internetReality: '硅谷投资人与创业者几乎人手一本《沉思录》，被视为数字高压时代最硬核的心智操作系统。',
    dailyLifeManifestation: '航班延误或遇到杠精辱骂时，不在无意义的愤怒中消耗自己，平静看书或调整呼吸。',
    keyThinkers: [
      { name: '马可·奥勒留 (Marcus Aurelius)', era: '121-180', note: '古罗马哲人皇帝，《沉思录》' },
      { name: '爱比克泰德 (Epictetus)', era: '约50-135', note: '奴隶出身的斯多葛宗师' },
      { name: '塞涅卡 (Seneca)', era: '前4-65', note: '罗马政治家兼悲剧作家' }
    ],
    famousQuote: { quote: '伤害你的从来不是事物本身，而是你对事物的看法。', author: '爱比克泰德' },
    spectrum: { political: -0.2, economic: 0.1, social: -0.4 },
    initialPosition: { x: 350, y: 150 }
  },

  // 073. 伊壁鸠鲁主义 (Epicureanism)
  {
    id: 'epicureanism',
    name: '伊壁鸠鲁主义',
    englishName: 'Epicureanism',
    category: 'ethical',
    color: '#10b981',
    period: '古希腊化时代发端',
    eraYear: -307,
    summary: '主张追求“身体无痛苦、灵魂无纷扰（Ataraxia）”的静态温和快乐，崇尚极简友谊与避世。',
    elevatorPitch: '常被误解为花天酒地纵欲，其实伊壁鸠鲁提倡的是极其节制的快乐！山珍海味带来日后的消化不良与虚荣焦虑；唯有面包、清水、三两知己在花园中畅谈哲学，才拥有最持久纯净的平静宁谧。',
    coreTenets: [
      '身体无痛苦（Aponia）与灵魂无纷扰（Ataraxia）是幸福的终极判准',
      '欲望分类学：满足自然且必需的欲望，摈弃虚妄无尽的虚荣野心',
      '四药方（Tetrapharmakos）：神不足惧，死不足畏，乐极易求，苦极易忍',
    ],
    internetReality: '被基督教早期恶意抹黑为“猪圈哲学”；在当今现代人被房贷和消费主义压垮时引发深切回响。',
    dailyLifeManifestation: '周末关掉工作手机，泡一壶清茶，与好友在阳台听雨闲聊，感受最平实的惬意。',
    keyThinkers: [
      { name: '伊壁鸠鲁 (Epicurus)', era: '前341-前270', note: '“花园学派”创始人' },
      { name: '卢克莱修 (Lucretius)', era: '约前99-前55', note: '《物性论》长诗' }
    ],
    famousQuote: { quote: '死对我们而言一无所有：我们存在时，死不存在；死降临时，我们已不复存在。', author: '伊壁鸠鲁' },
    spectrum: { political: 0.5, economic: -0.2, social: 0.6 },
    initialPosition: { x: 420, y: 220 }
  },

  // 074. 享乐主义 / 快乐主义 (Hedonism)
  {
    id: 'hedonism',
    name: '享乐主义 / 快乐主义',
    englishName: 'Hedonism',
    category: 'ethical',
    color: '#10b981',
    period: '古希腊昔兰尼学派至今',
    eraYear: -400,
    summary: '认为快乐是人生的最高善与唯一内在价值，痛苦是唯一的内在恶。',
    elevatorPitch: '人生苦短，韶华易逝！为什么要把宝贵生命浪费在虚无缥缈的来世奖赏或道德说教中？抓住当下的每一口美酒、每一首动听旋律与每一寸肌肤相亲。快乐的强度与即时性高于一切抽象规训。',
    coreTenets: [
      '快乐是唯一的内在善（Intrinsic Good）',
      '昔兰尼学派（Cyrenaics）：推崇当下的直接感官肉体愉悦',
      '面临“享乐主义悖论”：一味狂热追逐快乐往往导致空虚麻木与幸福的反噬',
    ],
    internetReality: '短视频时代的即时多巴胺狂欢，当代都市消费夜生活的底层情感寄托。',
    dailyLifeManifestation: '发了年终奖后立刻奖励自己一顿米其林大餐或飞去热带海岛度假冲浪。',
    keyThinkers: [
      { name: '阿里斯提卜 (Aristippus)', era: '约前435-前356', note: '昔兰尼学派奠基人' }
    ],
    famousQuote: { quote: '最好的事情就是掌握当下的快乐，而不为它所掌控。', author: '阿里斯提卜' },
    spectrum: { political: 0.4, economic: 0.3, social: 0.7 },
    initialPosition: { x: 500, y: 260 }
  },

  // 075. 幸福主义 / 完善论 (Eudaimonism)
  {
    id: 'eudaimonism',
    name: '幸福主义 / 完善论',
    englishName: 'Eudaimonism',
    category: 'ethical',
    color: '#10b981',
    period: '亚里士多德古典德性论',
    eraYear: -350,
    summary: '亚里士多德提出，人生的最高目的是通过实践理性与卓越美德，实现人类生命潜能的完满绽放（Eudaimonia）。',
    elevatorPitch: '幸福不是吃喝玩乐的即时爽感（Hedonia），而是“生命潜能的卓越绽放（Eudaimonia）”。一把好刀的德性是锋利，一个好人的德性是依照实践理性过一种有意义、有尊严且符合美德的高贵人生。',
    coreTenets: [
      '灵魂依德性而活动是人生的至善（The Supreme Good）',
      '中庸之道（Golden Mean）：美德是过分与不足两个极端之间的黄金平衡',
      '终身自我潜能的卓越实现（Self-actualization），人是城邦政治动物',
    ],
    internetReality: '现代积极心理学“心流（Flow）”理论与自我决定理论（SDT）最正统的哲学渊薮。',
    dailyLifeManifestation: '数十年如一日钻研手艺与学识，在解决深奥挑战中感受自我潜能全面盛开的崇高充盈。',
    keyThinkers: [
      { name: '亚里士多德 (Aristotle)', era: '前384-前322', note: '《尼各马可伦理学》' }
    ],
    famousQuote: { quote: '一只燕子捎不来春天，短暂的快乐构不成整个人生的幸福。', author: '亚里士多德' },
    spectrum: { political: -0.1, economic: 0.0, social: -0.1 },
    initialPosition: { x: 300, y: 190 }
  },

  // 076. 悲观主义 (Pessimism)
  {
    id: 'pessimism',
    name: '哲学悲观主义',
    englishName: 'Pessimism',
    category: 'ethical',
    color: '#10b981',
    period: '19世纪叔本华哲学',
    eraYear: 1819,
    summary: '叔本华代表，认为盲目的生存意志本质上是痛苦之源，人生如欲望钟摆，在痛苦与无聊之间徘徊。',
    elevatorPitch: '世界是一场永不停歇的残酷内耗。生存意志驱使着每一个生命争夺有限资源；欲望未满足时是痛苦，欲望一旦被满足紧接着就是无尽的无聊。人生最好的状态不是盲目乐观，而是看清现实、寄情艺术或看破执念。',
    coreTenets: [
      '盲目盲动的“生存意志（Will to Live）”是苦难宇宙的永动机',
      '钟摆定律：人生在求不得的痛苦与满足后的无聊虚无之间摇摆',
      '通过审美沉思（音乐艺术）与禁欲同情心获得有限的意志解脱',
    ],
    internetReality: '失恋、失业、内卷失落年轻人的深夜精神归宿，反击“虚假成功学鸡汤”的无情理论耳光。',
    dailyLifeManifestation: '对世界的一切浮夸宣传保持冷眼旁观，在莫扎特的交响乐中寻求精神的超脱避难所。',
    keyThinkers: [
      { name: '阿图尔·叔本华 (Arthur Schopenhauer)', era: '1788-1860', note: '《作为意志和表象的世界》' },
      { name: '爱德华·冯·哈特曼', era: '1842-1906', note: '《无意识哲学》' },
      { name: '埃米尔·齐奥朗 (Emil Cioran)', era: '1911-1995', note: '绝望与出生的烦恼' }
    ],
    famousQuote: { quote: '人生就像一架钟摆，在痛苦和无聊之间摇摆。', author: '叔本华' },
    spectrum: { political: 0.3, economic: -0.1, social: 0.5 },
    initialPosition: { x: 480, y: 140 }
  },

  // 077. 虚无主义 (Nihilism)
  {
    id: 'nihilism',
    name: '虚无主义',
    englishName: 'Nihilism',
    category: 'ethical',
    color: '#10b981',
    period: '屠格涅夫造词，尼采宣告“上帝已死”',
    eraYear: 1882,
    summary: '否定终极意义、客观真理或既定神圣价值，传统价值体系轰然倒塌的时代宿命。',
    elevatorPitch: '“上帝死了，最崇高的价值贬值了，我们往何处去？”当过去支撑人类千百年的宗教与道德支柱土崩瓦解，浩瀚宇宙冷漠沉默，一切既无前因亦无目的。虚无主义是现代人精神必经的炼狱。',
    coreTenets: [
      '消极虚无主义：因失去旧神而绝望迷茫、意志麻痹瘫痪',
      '积极虚无主义（尼采）：在废墟上摧毁旧偶像，重估一切价值，依靠权力意志自我赋魅',
      '拒斥任何预设的来世救赎或宇宙终极目的论',
    ],
    internetReality: '网络上泛指“活着没意思、无所谓”的心态，实质是反思西方文明价值危机的最强命题。',
    dailyLifeManifestation: '在深夜突然意识到百年之后所有人都化为尘土，功名利禄不过是宇宙微尘中一场虚妄表演。',
    keyThinkers: [
      { name: '弗里德里希·尼采 (Friedrich Nietzsche)', era: '1844-1900', note: '《查拉图斯特拉如是说》重估一切价值' },
      { name: '伊万·屠格涅夫 (Ivan Turgenev)', era: '1818-1883', note: '《父与子》巴扎罗夫形象' }
    ],
    famousQuote: { quote: '虚无主义正站在门口：这最阴森的客人从何而来？', author: '尼采' },
    spectrum: { political: 0.6, economic: 0.0, social: 0.9 },
    initialPosition: { x: 550, y: 70 }
  },

  // 078. 存在论虚无主义 (Existential Nihilism)
  {
    id: 'existential_nihilism',
    name: '存在论虚无主义',
    englishName: 'Existential Nihilism',
    category: 'ethical',
    color: '#10b981',
    period: '现代世俗化浪潮',
    eraYear: 1900,
    summary: '认为人生在本体论层面没有任何内在目的、客观意义或崇高使命，纯属偶然涌现。',
    elevatorPitch: '人类并非为了完成某种神圣使命被造出来的。大自然没有目的，地球在45亿年演化中冷酷运转，人类只是物理化学偶然碰撞出的自指意识奇迹。死亡意味着彻底终结，没有任何死后审判或救赎。',
    coreTenets: [
      '人类生命的起源、演化与终结完全不含预设的形而上学目的',
      '宇宙对人类的悲欢离合完全冷漠不仁',
      '要么导向无尽虚空绝望，要么导向存在主义的彻底自由选择',
    ],
    internetReality: '当代天文学“暗淡蓝点”照片常常激发出全球网民对存在论虚无的强烈共鸣。',
    dailyLifeManifestation: '仰望哈勃深空场成千上万个星系，平静接受自己一生的微不足道。',
    keyThinkers: [
      { name: '让-保罗·萨特 (Jean-Paul Sartre)', era: '1905-1980', note: '人是一团无用的激情' }
    ],
    famousQuote: { quote: '宇宙是一场盛大的偶然，我们在无意义的深渊边缘跳舞。', author: '存在论虚无经典命题' },
    spectrum: { political: 0.6, economic: 0.0, social: 0.8 },
    initialPosition: { x: 620, y: 40 }
  },

  // 079. 道德虚无主义 (Moral Nihilism)
  {
    id: 'moral_nihilism',
    name: '道德虚无主义',
    englishName: 'Moral Nihilism',
    category: 'ethical',
    color: '#10b981',
    period: '20世纪元伦理学',
    eraYear: 1977,
    summary: '麦基（J.L. Mackie）“错误理论”代表，认为客观世界中根本不存在任何道德上的“善与恶、对与错”。',
    elevatorPitch: '你可以在物理世界找到电子、质量与DNA，但你能从任何显微镜下找到哪怕一克“善良”或“邪恶”吗？客观道德属性不过是人类演化出的心理投射。所有关于客观道德事实的陈述在严格意义上全都是假的（错误理论）。',
    coreTenets: [
      '道德错误论（Error Theory）：所有积极的道德判断都是虚假陈述',
      '奇异性论证（Argument from Queerness）：若存在客观道德事实，那它将是宇宙中最离奇古怪的不可思议之物',
      '道德规范本质上是人类演化、部落认同与文化建构的控制工具',
    ],
    internetReality: '常被指责为反社会人格辩护，但它深刻迫使当代伦理学家重新思考道德规范性的真正支点。',
    dailyLifeManifestation: '看国际新闻利益倾轧时，看透各国政要嘴上的道德正义不过是服务地缘利益的包装修辞。',
    keyThinkers: [
      { name: 'J.L. 麦基 (J.L. Mackie)', era: '1917-1981', note: '《伦理学：发明对与错》错误理论' }
    ],
    famousQuote: { quote: '世上本无客观道德价值，所有道德主张都在描述一个不存在的幽灵。', author: '麦基' },
    spectrum: { political: 0.7, economic: 0.2, social: 0.8 },
    initialPosition: { x: 680, y: 80 }
  },

  // 080. 俄国政治虚无主义 (Russian Nihilism)
  {
    id: 'russian_nihilism',
    name: '俄国政治虚无主义',
    englishName: 'Russian Nihilism',
    category: 'political',
    color: '#38bdf8',
    period: '1860年代沙皇俄国',
    eraYear: 1862,
    summary: '19世纪60年代俄国激进青年知识分子，全面否定沙皇专制、教会权威、传统家庭与陈腐道德。',
    elevatorPitch: '屠格涅夫笔下的巴扎罗夫宣告：“虚无主义者就是一个不向任何权威低头的人，哪怕这个权威多么崇高！”崇尚自然科学实验与解剖青蛙，拒绝一切虚饰的贵族浪漫主义，誓要用炸弹与真理推翻腐朽沙皇专制。',
    coreTenets: [
      '对沙皇专制政权、东正教会与宗法家庭的彻底无情反叛',
      '唯尊自然科学与唯物主义，把解剖刀视作破除迷信的最佳法宝',
      '通过直接行动与革命密谋摧毁旧俄国社会结构',
    ],
    internetReality: '直接孕育了俄国后来的民意党人暗杀运动、列宁布尔什维克革命前奏，是近代反体制青年的精神狂暴源头。',
    dailyLifeManifestation: '朋克青年砸烂旧习俗、蔑视权威长辈道德绑架时的愤怒激进姿态。',
    keyThinkers: [
      { name: '德米特里·皮萨列夫', era: '1840-1868', note: '俄国虚无主义最杰出批评家' },
      { name: '谢尔盖·涅恰耶夫', era: '1847-1882', note: '《革命者教条》无情革命家' }
    ],
    famousQuote: { quote: '凡是可以砸烂的，尽管去砸烂好了！凡是经受得住打击的，才是真正有用的。', author: '皮萨列夫' },
    spectrum: { political: 0.9, economic: -0.6, social: 0.95 },
    initialPosition: { x: 590, y: 130 }
  },

  // 081. 宇宙主义 (Cosmicism)
  {
    id: 'cosmicism',
    name: '宇宙主义 / 克苏鲁存在主义',
    englishName: 'Cosmicism',
    category: 'philosophical',
    color: '#a855f7',
    period: '20世纪初H.P.洛夫克拉夫特发端',
    eraYear: 1926,
    summary: '强调在不可名状的浩瀚古老宇宙面前，人类文明及其道德观念不过是转瞬即逝的微末尘埃。',
    elevatorPitch: '人类自以为是宇宙的中心，实际上盲目痴愚的神明（阿撒托斯）只是在梦境中打了个瞌睡。真正的恐惧不是来自肉体伤害，而是意识到人类的全部理性与科学，在无边无际的克苏鲁黑暗真相面前不堪一击。',
    coreTenets: [
      '人类最古老而强烈的情感是恐惧，而最强烈的恐惧是对未知的恐惧',
      '反人类中心主义的极端形态：人类在宇宙尺度上毫无意义且脆弱可悲',
      '不可名状（Unnamable）：宇宙深层真理超越人类感官与语言处理上限',
    ],
    internetReality: '克苏鲁神话体系在当代桌游跑团、主机游戏（《血源诅咒》）与赛博文化中化作全球顶流暗黑图腾。',
    dailyLifeManifestation: '观看深海潜水拍摄的巨型乌贼与深渊纪录片时，泛起的阵阵巨物幽闭恐惧感。',
    keyThinkers: [
      { name: 'H.P. 洛夫克拉夫特', era: '1890-1937', note: '克苏鲁神话创始人' },
      { name: '托马斯·利戈蒂 (Thomas Ligotti)', era: '1953-', note: '《反对人类的阴谋》' }
    ],
    famousQuote: { quote: '人类最古老而强烈的情绪是恐惧，而最古老最强烈的恐惧是对未知的恐惧。', author: '洛夫克拉夫特' },
    spectrum: { political: 0.8, economic: 0.0, social: 1.0 },
    initialPosition: { x: 650, y: 160 }
  },

  // 082. 存在主义 (Existentialism)
  {
    id: 'existentialism',
    name: '存在主义',
    englishName: 'Existentialism',
    category: 'ethical',
    color: '#10b981',
    period: '20世纪中叶萨特、加缪代表',
    eraYear: 1943,
    summary: '“存在先于本质”，人在没有上帝的荒谬世界中通过自由选择定义自我，并承担全部责任。',
    elevatorPitch: '一把裁纸刀，是工匠先有了概念（本质）才造出实体（存在）。但人不同！人首先存在、在世界上遭遇自我，然后通过自己一次次的选择来定义自己“到底是谁”。人被判定为自由，逃避选择就是自欺（Mauvaise foi）。',
    coreTenets: [
      '存在先于本质（L\'existence précède l\'essence）',
      '人被判处自由（Condemned to be free），无处借口推卸责任',
      '自欺（Bad faith）：借口客观环境或本能而放弃主体责任是可耻的沉沦',
    ],
    internetReality: '现代青年遭遇“就业、考公、考研还是躺平”重大选择时的终极心灵自救武器。',
    dailyLifeManifestation: '辞掉别人眼里光鲜但毫无意义的体制内工作，勇敢追寻自己认定的生活方式并自己买单。',
    keyThinkers: [
      { name: '让-保罗·萨特 (Jean-Paul Sartre)', era: '1905-1980', note: '《存在与虚无》《存在主义是一种人道主义》' },
      { name: '西蒙娜·德·波伏娃', era: '1908-1986', note: '《第二性》存在主义女性主义' },
      { name: '索伦·克尔凯郭尔', era: '1813-1855', note: '基督教存在主义先驱' }
    ],
    famousQuote: { quote: '人被判处自由，因为一旦被扔进这个世界，他就必须对自己的所作所为负全部责任。', author: '萨特' },
    spectrum: { political: 0.7, economic: -0.2, social: 0.9 },
    initialPosition: { x: 520, y: 0 }
  },

  // 083. 荒谬主义 (Absurdism)
  {
    id: 'absurdism',
    name: '荒谬主义',
    englishName: 'Absurdism',
    category: 'ethical',
    color: '#10b981',
    period: '1942年阿尔贝·加缪《西西弗神话》',
    eraYear: 1942,
    summary: '人类对意义的绝望渴求与宇宙冷酷沉默之间的撞击即为“荒诞”，主张像西西弗一样清醒反抗。',
    elevatorPitch: '真正严肃的哲学问题只有一个：那就是自杀。既然人生注定徒劳，我们为什么不自杀？加缪给出的答案是：活着并清醒反抗！像西西弗一样日复一日把巨石推上山顶，哪怕巨石必然滚落，推石过程本身就足以充实心灵。',
    coreTenets: [
      '荒诞源于人类追求意义与世界不可理喻之间的碰撞',
      '三种出路：生理自杀（懦夫）、哲学自杀（遁入宗教虚假信仰）、清醒反抗（英雄）',
      '西西弗的幸福：蔑视众神、热爱大地，在反抗中赢得尊严',
    ],
    internetReality: '当代打工人日复一日挤早高峰地铁却依然热爱生活的最真实写照。',
    dailyLifeManifestation: '深知内卷无法改变世界，但依然把手头工作做到极致，下班后痛快喝啤酒大笑。',
    keyThinkers: [
      { name: '阿尔贝·加缪 (Albert Camus)', era: '1913-1960', note: '《西西弗神话》《局外人》诺贝尔文学奖' }
    ],
    famousQuote: { quote: '登上顶峰的斗争足以充实一个人的心灵。我们必须想象西西弗是幸福的。', author: '加缪' },
    spectrum: { political: 0.6, economic: 0.0, social: 0.85 },
    initialPosition: { x: 580, y: -20 }
  },

  // 084. 结果主义 / 后果论 (Consequentialism)
  {
    id: 'consequentialism',
    name: '结果主义 / 后果论',
    englishName: 'Consequentialism',
    category: 'ethical',
    color: '#10b981',
    period: '启蒙时代伦理学革新',
    eraYear: 1789,
    summary: '认为任何行为在道德上的对错，完全且唯一取决于该行为所带来的后果好坏。',
    elevatorPitch: '动机多么高尚并不重要，重要的事实是：你的举动究竟是让世界变得更好了还是更糟了？不看道德教条是否被死守，只用冷峻的算盘计算行为产出的实际收益与危害。以成败论善恶。',
    coreTenets: [
      '行为的道德价值严格由其事后产生的总体效应决定',
      '善（Good）先于并定义了对（Right）',
      '反抗义务论盲目遵守抽象戒律的教条主义',
    ],
    internetReality: '公共政策制定、大流行防疫措施权衡与现代宏观经济调控的默认逻辑。',
    dailyLifeManifestation: '善意的谎言（白谎言）：告诉病危老人子女很平安，因为这样能让老人在最后时刻免于惊恐痛苦。',
    keyThinkers: [
      { name: '杰里米·边沁 (Jeremy Bentham)', era: '1748-1832', note: '功利算度奠基人' },
      { name: 'G.E. 摩尔 (G.E. Moore)', era: '1873-1958', note: '理想后果主义' }
    ],
    famousQuote: { quote: '行为的正当性全在于它所产生的善果之多寡。', author: '后果主义公理' },
    spectrum: { political: 0.1, economic: 0.2, social: 0.3 },
    initialPosition: { x: 380, y: 310 }
  },

  // 085. 功利主义 (Utilitarianism)
  {
    id: 'utilitarianism',
    name: '功利主义 / 效益主义',
    englishName: 'Utilitarianism',
    category: 'ethical',
    color: '#10b981',
    period: '18-19世纪英国',
    eraYear: 1789,
    summary: '边沁、密尔创立，道德的最高准则是追求“最大多数人的最大幸福（Greatest Happiness）”。',
    elevatorPitch: '把社会的幸福感和痛苦感当成数学账本：任何能够增加净快乐、减少净痛苦的政策或行为就是善的，反之就是恶的。边沁讲求快乐的纯数量计算，密尔则提出智性与精神快乐高于动物性肉体快乐。',
    coreTenets: [
      '最大幸福原则（Greatest Happiness Principle）',
      '快乐与免除痛苦是唯一的终极目的',
      '公正与平等的考量：每一个人的痛苦与快乐在天平上具有相同权重（Everyone to count for one）',
    ],
    internetReality: '电车难题拉杆辩论中“拉杆拯救5人牺牲1人”的经典代言学派；常被指责容易滑向“多数人暴政牺牲少数无辜”。',
    dailyLifeManifestation: '城市规划中修建垃圾焚烧厂，虽然邻近少数居民抗议，但为了千万市民整体卫生福祉仍坚决推进。',
    keyThinkers: [
      { name: '杰里米·边沁 (Jeremy Bentham)', era: '1748-1832', note: '功利计算法' },
      { name: '约翰·斯图尔特·密尔', era: '1806-1873', note: '《功利主义》高质量精神快乐论' }
    ],
    famousQuote: { quote: '做痛苦的苏格拉底，远胜过做一只快乐的猪。', author: '密尔' },
    spectrum: { political: 0.2, economic: 0.1, social: 0.4 },
    initialPosition: { x: 440, y: 350 }
  },

  // 086. 行为功利主义 (Act Utilitarianism)
  {
    id: 'act_utilitarianism',
    name: '行为功利主义',
    englishName: 'Act Utilitarianism',
    category: 'ethical',
    color: '#10b981',
    period: '20世纪中叶伦理学争论',
    eraYear: 1960,
    summary: '主张直接评估当下每一个具体的个别行为，只要该具体行为产生的净快乐大于其他选项即为正当。',
    elevatorPitch: '不要照搬死板的社会规则！每次面临抉择时，针对当下情境单独计算：如果此刻违背诺言能产生更多净善意，那就果断违背！道德判断必须根据个案具体情境实时求导计算。',
    coreTenets: [
      '对每一个孤立的行为单独运用功利原则',
      '规则仅仅是行之有效的经验总结拇指法则（Rules of thumb），随时可以特事特办打破',
      '面临算力爆炸与难以预测连带恶劣示范后果的质疑',
    ],
    internetReality: '常被指责缺乏确定预期（“如果法官每次都算计杀害一个无辜流浪汉能平息暴动，司法公信力何在？”）。',
    dailyLifeManifestation: '急诊科医生面对病患蜂拥，直接按照幸存概率当场分配有限的呼吸机资源。',
    keyThinkers: [
      { name: 'J.J.C. 斯马特 (J.J.C. Smart)', era: '1920-2012', note: '《功利主义：赞成与反对》' }
    ],
    famousQuote: { quote: '评估必须落在当下这一具体行动的结果之上，而不是盲从所谓的抽象禁令。', author: '斯马特' },
    spectrum: { political: 0.1, economic: 0.1, social: 0.3 },
    initialPosition: { x: 500, y: 390 }
  },

  // 087. 规则功利主义 (Rule Utilitarianism)
  {
    id: 'rule_utilitarianism',
    name: '规则功利主义',
    englishName: 'Rule Utilitarianism',
    category: 'ethical',
    color: '#10b981',
    period: '20世纪50年代起',
    eraYear: 1956,
    summary: '认为行为的正当性取决于它是否遵循了一套“一旦被全社会普遍遵从就能带来最大效益”的规则体系。',
    elevatorPitch: '我们不能每次都临时算计！如果人人都随时违约或说谎，全社会的信任基石就崩溃了。因此，我们应该遵循“普遍诚实、信守契约”的规则，因为“信守规则这一长远制度”带来的社会总体福祉远远高于短期特事特办。',
    coreTenets: [
      '功利原则运用于规则遴选，而非直接运用于具体行为',
      '即便在某一具体情境下遵守规则看似带来局部损失，仍需坚决服从规则',
      '调和了功利主义与宪政法治、权利保障之间的张力',
    ],
    internetReality: '现代法治宪政的底层逻辑——遵守红绿灯规则哪怕大半夜没车，因为全社会普遍遵守红绿灯才能换来整体交通安全。',
    dailyLifeManifestation: '考试哪怕作弊一次能拿奖学金也绝不作弊，因为只有维护考试公平规则，学历才具备全社会含金量。',
    keyThinkers: [
      { name: '理查德·布兰特 (Richard Brandt)', era: '1910-1997', note: '规则功利主义系统奠基' }
    ],
    famousQuote: { quote: '道德不是看你这一步怎么走，而是看大家如果都这么走，世界会变成什么样。', author: '规则功利主义准则' },
    spectrum: { political: 0.0, economic: 0.2, social: 0.1 },
    initialPosition: { x: 420, y: 420 }
  },

  // 088. 偏好功利主义 (Preference Utilitarianism)
  {
    id: 'preference_utilitarianism',
    name: '偏好功利主义',
    englishName: 'Preference Utilitarianism',
    category: 'ethical',
    color: '#10b981',
    period: '20世纪70年代至今',
    eraYear: 1979,
    summary: '彼得·辛格代表，将“幸福”重新定义为“所有感知生命内在个体偏好（Preferences）的最大满足”。',
    elevatorPitch: '不要傲慢地替别人定义什么是快乐！一个人想登顶珠峰受苦受冻，只要这是他的真实偏好，满足这种偏好就是善。既然动物也有免受痛苦、活下去的强烈偏好，偏好功利主义必然推导出“反物种歧视与动物福利”。',
    coreTenets: [
      '以个体的自我偏好满足程度取代主观快乐感受作为评价标尺',
      '平等考虑利益原则（Principle of Equal Consideration of Interests）',
      '将道德关怀范围从智人扩张至一切具备痛苦感知的有情生命（Sentient beings）',
    ],
    internetReality: '现代纯素主义运动（Veganism）、反动物农场残酷饲养与有效利他主义的直接哲学动力舵手。',
    dailyLifeManifestation: '拒绝购买盲盒宠物或使用动物测试的化妆品，尊重非人类生物的生存权益偏好。',
    keyThinkers: [
      { name: '彼得·辛格 (Peter Singer)', era: '1946-', note: '《实践伦理学》《动物解放》' },
      { name: 'R.M. 黑尔 (R.M. Hare)', era: '1919-2002', note: '理性偏好满足理论' }
    ],
    famousQuote: { quote: '如果一个生命感受不到痛苦，它就没有什么需要考虑的；但只要它能感受痛苦，它的痛苦就必须被平等考量。', author: '彼得·辛格' },
    spectrum: { political: 0.4, economic: -0.2, social: 0.8 },
    initialPosition: { x: 480, y: 460 }
  },

  // 089. 消极功利主义 (Negative Utilitarianism)
  {
    id: 'negative_utilitarianism',
    name: '消极功利主义',
    englishName: 'Negative Utilitarianism',
    category: 'ethical',
    color: '#10b981',
    period: '卡尔·波普尔《开放社会及其敌人》提出',
    eraYear: 1945,
    summary: '波普尔提出，认为在道德上“减轻现实中的痛苦”远比“增加抽象未来的快乐”更迫切、更具有不对称性优先权。',
    elevatorPitch: '追求最大幸福的狂想往往带来人间地狱（为了虚构乌托邦屠杀当下异己）！痛苦与快乐在道德上根本不对称：人类没有义务强迫别人享受快乐，但人类拥有绝对紧迫的道德义务去拯救正在受折磨的人。最小化苦难！',
    coreTenets: [
      '苦乐不对称性：消除痛苦是绝对紧迫的义务，增进快乐只是锦上添花',
      '反乌托邦社会工程：防范打着“让子孙万代享福”旗号牺牲当下活着的人',
      '渐进社会工程（Piecemeal Social Engineering）：专注于一项一项消除具体苦难',
    ],
    internetReality: '常被推向逻辑极端衍生出“反出生主义”甚至“毁灭地球以消灭所有痛苦”的思想实验争辩。',
    dailyLifeManifestation: '做慈善时优先将善款捐给战乱饥荒救援与临终关怀，而不是资助奢华艺术展。',
    keyThinkers: [
      { name: '卡尔·波普尔 (Karl Popper)', era: '1902-1994', note: '首提消极功利准则' },
      { name: 'R.N. 斯马特 (R.N. Smart)', era: '1927-2001', note: '仁慈世界毁灭者假想探讨' }
    ],
    famousQuote: { quote: '从道德视角来看，痛苦不能被快乐所抵消；我们应当致力于消除苦难，而非扩大幸福。', author: '波普尔' },
    spectrum: { political: 0.5, economic: 0.0, social: 0.7 },
    initialPosition: { x: 550, y: 420 }
  },

  // 090. 有效利他主义 (Effective Altruism)
  {
    id: 'effective_altruism',
    name: '有效利他主义',
    englishName: 'Effective Altruism',
    category: 'ethical',
    color: '#10b981',
    period: '2010年代牛津大学兴起',
    eraYear: 2011,
    summary: '运用严谨的科学证据与成本效益实证分析，寻找用有限资源拯救最多生命、最大化善行效率的方式。',
    elevatorPitch: '仅凭热情善心做慈善是不够的！花4万美元训练一只导盲犬帮助一位盲人，还是花20美元在非洲购买防疟疾蚊帐拯救一位儿童？用理性的成本效益分析计算每花1美元所能购买的“伤残调整生命年（DALYs）”。',
    coreTenets: [
      '用理性与实证数据指引善行（Evidence-based Altruism）',
      '事业选择赚大钱去捐赠（Earning to give）：高薪职业捐出大半收入比亲自当下层义工效率高出百倍',
      '聚焦重大边缘领域：全球贫困疾病、工厂化养殖痛苦、人类存在性风险（AI失控）',
    ],
    internetReality: '在硅谷精英、OpenAI员工与华尔街量化交易员中极具号召力，也因FTX崩溃事件经历过剧烈伦理反思。',
    dailyLifeManifestation: '捐款前在GiveWell等评级网站仔细对比每个公益基金会拯救每条生命的真实资金成本。',
    keyThinkers: [
      { name: '威廉·麦克阿斯吉尔', era: '1987-', note: '《你能做出的最好善行》《我们欠未来什么》' },
      { name: '托比·奥德 (Toby Ord)', era: '1979-', note: '《悬崖边缘：存在性风险与人类未来》' }
    ],
    famousQuote: { quote: '做好事，并且用最科学的方式把它做到极致。', author: '麦克阿斯吉尔' },
    spectrum: { political: 0.3, economic: 0.4, social: 0.8 },
    initialPosition: { x: 610, y: 460 }
  },

  // 091. 反出生主义 / 反生育主义 (Antinatalism)
  {
    id: 'antinatalism',
    name: '反出生主义',
    englishName: 'Antinatalism',
    category: 'ethical',
    color: '#10b981',
    period: '大卫·贝纳塔1997年《最好别出生》系统化',
    eraYear: 2006,
    summary: '基于“痛苦与快乐的不对称性”，认为将新生命带到充满苦难的人世间在道德上是不可逆的伤害。',
    elevatorPitch: '存在充满了不可避免的痛苦、疾病、衰老与死亡。没有出生的人并不会因为错失快乐而感到遗憾，但出生的人却必定承受切肤之痛！痛苦的存在是纯恶，痛苦的缺席是善；因此，制造新生命在伦理上构成伤害。',
    coreTenets: [
      '苦乐不对称论证（Asymmetry Argument）：未出生者的痛苦缺席是极好，快乐缺席并不构成损失',
      '同意困境：任何父母都无法在孩子出生前征得其对承受人间苦难的知情同意',
      '人类应通过停止繁殖让智人种族走向有尊严的和平退隐与自然熄灭',
    ],
    internetReality: '全球各大社交平台Subreddit社群爆发式增长，反映当代年轻人在气候恶化与高压生活下的决绝生存伦理。',
    dailyLifeManifestation: '坚决选择丁克（DINK），认为“不把新生命带到这个内卷内耗的世界受罪”是对生命最深沉的仁慈。',
    keyThinkers: [
      { name: '大卫·贝纳塔 (David Benatar)', era: '1966-', note: '开普敦大学哲学院长，《最好别出生》' }
    ],
    famousQuote: { quote: '诞生于世从来不是一件恩赐，而是一场不可抗拒的悲剧强加。', author: '贝纳塔' },
    spectrum: { political: 0.5, economic: -0.2, social: 0.95 },
    initialPosition: { x: 680, y: 420 }
  },

  // 092. 道德绝对主义 (Moral Absolutism)
  {
    id: 'moral_absolutism',
    name: '道德绝对主义 / 义务论',
    englishName: 'Moral Absolutism',
    category: 'ethical',
    color: '#10b981',
    period: '康德道德哲学体系',
    eraYear: 1785,
    summary: '康德义务论代表，认为某些伦理道德律令在任何情境下都绝对无条件有效，绝不可拿后果做交易。',
    elevatorPitch: '无论能拯救多少人，说谎、背叛、滥杀无辜本身就是绝对错误的！“人是目的本身，任何时候都不能单纯被当成达到某种后果的手段工具”。道德不是为了换取幸福的讨价还价，而是纯粹出于对义务的无条件敬重。',
    coreTenets: [
      '绝对命令（Categorical Imperative）：出于纯粹义务行动，排除一切功利算计',
      '普遍法则公式：你的准则必须能够毫无矛盾地成为自然普遍法则',
      '道德原则的不可通约性：原则具有绝对神圣性，不接受任何形式的代价权衡',
    ],
    internetReality: '现代刑法无罪推定、严禁刑讯逼供、禁止拿无辜活人体做致命医学试验的绝对底线防火墙。',
    dailyLifeManifestation: '哪怕面临被解雇的巨大威胁，也坚决拒绝在商业造假审计报告上签字造假。',
    keyThinkers: [
      { name: '伊曼努尔·康德 (Immanuel Kant)', era: '1724-1804', note: '《道德形而上学奠基》' },
      { name: '托马斯·内格尔 (Thomas Nagel)', era: '1937-', note: '当代义务论防御' }
    ],
    famousQuote: { quote: '即使天塌下来，正义也必须实现。', author: '康德' },
    spectrum: { political: 0.2, economic: 0.1, social: 0.3 },
    initialPosition: { x: 300, y: 380 }
  },

  // 093. 契约主义伦理学 (Contractualism)
  {
    id: 'contractualism',
    name: '契约主义伦理学',
    englishName: 'Contractualism',
    category: 'ethical',
    color: '#10b981',
    period: '1982年斯坎伦《契约主义与功利主义》',
    eraYear: 1982,
    summary: 'T.M. 斯坎伦代表，认为行为在道德上的对错，取决于它是否违反了任何理性人在平等地位下“无法合理拒绝的普遍原则”。',
    elevatorPitch: '道德不是上帝刻在石头上的诫命，也不是快乐算盘。我们之所以讲道德，是因为我们渴望向彼此合理证明自己行动的正当性。行为必须建立在那些任何处于你所影响位置的人都无法提出合理论证拒绝的共识准则之上。',
    coreTenets: [
      '无法合理拒绝原则（Reasonably Rejectable）：从任何受影响个体的立场审查准则',
      '彼此正当证明的动机：人类具有作为道德行动者与他人和谐共处的内在渴望',
      '避免功利主义将个体权利打包牺牲的缺陷，也避免康德绝对律令的脱节严苛',
    ],
    internetReality: '罗尔斯正义论无知之幕在微观日常伦理学中的完美镜像。',
    dailyLifeManifestation: '制定办公室公共规则时，确保即使是实习生或保洁阿姨从其切身利益出发也无法合理反驳该准则。',
    keyThinkers: [
      { name: 'T.M. 斯坎伦 (T.M. Scanlon)', era: '1940-', note: '《我们彼此由什么理由要求对方》' }
    ],
    famousQuote: { quote: '行为的正当性取决于它所依据的原则是否无法被他人合理拒绝。', author: '斯坎伦' },
    spectrum: { political: 0.5, economic: -0.1, social: 0.6 },
    initialPosition: { x: 260, y: 320 }
  },

  // 094. 情感主义 (Emotivism)
  {
    id: 'emotivism',
    name: '情感主义',
    englishName: 'Emotivism',
    category: 'ethical',
    color: '#10b981',
    period: '20世纪30年代逻辑实证主义元伦理学',
    eraYear: 1936,
    summary: '艾耶尔、史蒂文森代表，认为道德命题不陈述任何事实，本质上只是个人情感的宣泄或“呸/好哇”的声音叫喊（Boo/Hooray理论）。',
    elevatorPitch: '你说“杀人是错的”，你并没有陈述任何类似“水是湿的”一样的客观事实；你只是在带着厌恶情绪喊了一声：“杀人，呸！”。道德语言的功能不是求真，而是发泄说话者的情绪冲动并试图操纵感染听众态度。',
    coreTenets: [
      '嘘/哇理论（Boo/Hooray Theory）：道德词汇没有认知事实意义，只有情感表达功能',
      '道德分歧本质上是态度的对立冲突，而非对事实真伪的逻辑分歧',
      '彻底打破了传统道德实在论的神圣光环',
    ],
    internetReality: '当今社交媒体（微博、推特评论区）情绪对喷、站队撕裂现状的最精准元伦理学写照。',
    dailyLifeManifestation: '吵架时听到对方喊“你太自私了！”，立刻听出这只是他因利益受挫而发出的宣泄嘘声。',
    keyThinkers: [
      { name: 'A.J. 艾耶尔 (A.J. Ayer)', era: '1910-1989', note: '《语言、真理与逻辑》' },
      { name: 'C.L. 史蒂文森 (C.L. Stevenson)', era: '1908-1979', note: '《伦理学与语言》' }
    ],
    famousQuote: { quote: '陈述“你偷钱是错的”，并不比说“你偷了钱！”外加某种怪异嫌恶的语气表达了更多的事实。', author: '艾耶尔' },
    spectrum: { political: 0.4, economic: 0.1, social: 0.8 },
    initialPosition: { x: 210, y: 260 }
  },

  // 095. 规定主义 (Prescriptivism)
  {
    id: 'prescriptivism',
    name: '规定主义',
    englishName: 'Prescriptivism',
    category: 'ethical',
    color: '#10b981',
    period: '1952年R.M.黑尔《道德语言》',
    eraYear: 1952,
    summary: '牛津哲学家黑尔创立，认为道德语言不是纯粹的情感嚎叫，而是一种要求普遍化的“行动祈使命令句”。',
    elevatorPitch: '道德语言不是“呸！”，而是“请这样做！”。当你说“讲诚信是好的”，你本质上是在颁布一条祈使命令：“请去讲诚信！”。规定主义的核心在于“普遍化能力”：如果你命令别人在某种情况下不许撒谎，你也必须愿意这个命令对自己同样生效。',
    coreTenets: [
      '规定性（Prescriptivity）：道德判断旨在指导行动，类似于可普遍遵从的祈使句',
      '可普遍化性（Universalizability）：如果你对某人做出的评价有效，在相同情境下对所有人都必然有效',
      '将逻辑严谨性重新带回非认知主义伦理学大厦',
    ],
    internetReality: '双标行为（宽以待己严以待人）之所以被所有人唾弃，其底层逻辑正是规定主义的可普遍化审判。',
    dailyLifeManifestation: '在排队劝阻插队者时理直气壮，因为“遵守排队秩序”是一条人人必须平等执行的普遍命令。',
    keyThinkers: [
      { name: 'R.M. 黑尔 (R.M. Hare)', era: '1919-2002', note: '牛津道德哲学讲座教授' }
    ],
    famousQuote: { quote: '道德语言的逻辑在于：若我对你下达此命令，我必须准备好接受此命令在同等情况下落在我自己头上。', author: '黑尔' },
    spectrum: { political: 0.3, economic: 0.0, social: 0.5 },
    initialPosition: { x: 170, y: 210 }
  },

  // 096. 利他主义 (Altruism)
  {
    id: 'pure_altruism',
    name: '利他主义',
    englishName: 'Altruism',
    category: 'ethical',
    color: '#10b981',
    period: '1851年奥古斯特·孔德造词',
    eraYear: 1851,
    summary: '孔德造词，主张将他人乃至全人类的福祉置于自己之上，以无私奉献作为道德最高境界。',
    elevatorPitch: '孔德提出口号：“为他人而活（Vivre pour autrui）”！人性中固然有自私的动物性倾向，但唯有通过理性培养与同理心将注意力转移到扶助弱小、关怀他人的痛苦之上，文明才能战胜野蛮野兽本能。',
    coreTenets: [
      '无私性：为了他人的利益行动，即便该行动会损害自身的物质利益',
      '同理心与利他共情作为社会凝聚力的终极道德黏合剂',
      '进化生物学互惠利他（Reciprocal Altruism）与亲缘选择理论支撑',
    ],
    internetReality: '抗震救灾、无偿献血、志愿者群体最神圣的道德信标，也是网络辩论中测试人性光辉的锚点。',
    dailyLifeManifestation: '下雨天看到路边陌生流浪猫狗或摔倒老人，本能上前撑伞扶起而不图任何回报。',
    keyThinkers: [
      { name: '奥古斯特·孔德 (Auguste Comte)', era: '1798-1857', note: '实证利他伦理学' },
      { name: '理查德·道金斯 (Richard Dawkins)', era: '1941-', note: '《自私的基因》利他进化论解构' }
    ],
    famousQuote: { quote: '为他人而活，这是唯一真正配得上人类尊严的道德律令。', author: '孔德' },
    spectrum: { political: 0.1, economic: -0.6, social: 0.7 },
    initialPosition: { x: 120, y: 150 }
  },

  // 097. 利己主义 (Egoism)
  {
    id: 'social_egoism',
    name: '利己主义 / 合理利己主义',
    englishName: 'Egoism',
    category: 'ethical',
    color: '#10b981',
    period: '霍布斯、车尔尼雪夫斯基至现代理性选择理论',
    eraYear: 1651,
    summary: '主张自我利益是人类一切行为的内在根本驱动力，合理追求自利有助于促进社会总体福祉。',
    elevatorPitch: '不要用虚伪的道德绑架自欺欺人！人人都以自我为中心。承认并保护每个人正当追求自身利益的权利，通过透明平等的市场交换与契约合作，反而比满嘴仁义道德更能创造井然有序的社会繁荣。',
    coreTenets: [
      '自我保全与自我利益最大化是理性行为的不可动摇公理',
      '合理利己不等于损人利己：理性人明白长期的互利共赢远胜过短视的背叛掠夺',
      '祛除将“自私自利”污名化的传统封建宗法说教枷锁',
    ],
    internetReality: '常被网络误传为“精致利己主义”，但在微观经济学博弈论中是纳什均衡与理性经济人假设的基石。',
    dailyLifeManifestation: '谈合作时直接把双方利益分成写在白纸黑字合同里，不搞“谈钱伤感情”的情感捆绑。',
    keyThinkers: [
      { name: '托马斯·霍布斯 (Thomas Hobbes)', era: '1588-1679', note: '《利维坦》自我保全第一原理' },
      { name: '车尔尼雪夫斯基', era: '1828-1889', note: '合理利己主义理论' }
    ],
    famousQuote: { quote: '如果所有人都不顾自身利益，世上将充满一堆毫无生存能力的废人。', author: '利己主义辩护' },
    spectrum: { political: 0.4, economic: 0.7, social: 0.3 },
    initialPosition: { x: 80, y: 80 }
  },

  // 098. 心理利己主义 (Psychological Egoism)
  {
    id: 'psychological_egoism',
    name: '心理利己主义',
    englishName: 'Psychological Egoism',
    category: 'ethical',
    color: '#10b981',
    period: '描述性人类心理学假说',
    eraYear: 1739,
    summary: '描述性理论，坚称人类在心理机制上永远且必然只能做出自己认为对自己最有利的行动。',
    elevatorPitch: '世上从来没有真正的纯粹利他！即使一个人跳下铁轨救人牺牲了，那也是因为在那个瞬间，他如果不救人将承受更无法忍受的良心自责折磨，或者他从中获得了崇高的自我价值确认。所有善行背后都有自利的心理回路。',
    coreTenets: [
      '普遍决定论心理假说：所有人的一切自觉行为均由潜意识自我利益驱动',
      '即便是最伟大的牺牲与捐赠，本质上也是为了换取内心的平静、自尊或免除负罪感',
      '面临“不可证伪性”批评（无论举什么反例，都能硬解释为利己）',
    ],
    internetReality: '几乎是当代互联网阴谋论与“看透人性黑暗面”大V的最常用话术模板。',
    dailyLifeManifestation: '看到富豪捐款数十亿，脱口而出：“他无非是为了避税和企业公关作秀买名声罢了。”',
    keyThinkers: [
      { name: '拉罗什福科 (La Rochefoucauld)', era: '1613-1680', note: '《道德箴言录》' }
    ],
    famousQuote: { quote: '我们所谓的善行，往往只是换了包装的自私自利。', author: '拉罗什福科' },
    spectrum: { political: 0.3, economic: 0.6, social: 0.2 },
    initialPosition: { x: 30, y: 30 }
  },

  // 099. 伦理利己主义 (Ethical Egoism)
  {
    id: 'ethical_egoism',
    name: '伦理利己主义',
    englishName: 'Ethical Egoism',
    category: 'ethical',
    color: '#10b981',
    period: '规范性伦理学派',
    eraYear: 1874,
    summary: '规范性伦理理论，主张每个人在道德责任上都“应当”且唯一应当追求自身长远的最大利益。',
    elevatorPitch: '牺牲自己去成全他人不仅愚蠢，而且在道德上是有害的！伦理利己主义主张：你有绝对的道德责任去把自己的一生过得最精彩、最丰盛。利他主义把人变成寄生虫与自虐狂，唯有追求自利才是正义的善行。',
    coreTenets: [
      '唯一的道德基本原则：促进自己长远总体利益最大化',
      '帮助他人仅当且仅当这样做能促进自己的长远利益时才具有道德正当性',
      '彻底否定自我牺牲的所谓崇高性',
    ],
    internetReality: '常被指责无法解决人际利益根本冲突，但它为安·兰德的客观主义哲学提供了核心砖石。',
    dailyLifeManifestation: '绝不为了迎合亲戚长辈的期望牺牲自己的职业与爱情，坚定走自己的道路。',
    keyThinkers: [
      { name: '亨利·西季威克 (Henry Sidgwick)', era: '1838-1900', note: '《伦理学方法》利己主义与功利主义二元论' }
    ],
    famousQuote: { quote: '我有权利追求我的幸福，这不是对世人的亏欠，而是我的最高天职。', author: '伦理利己主义宣言' },
    spectrum: { political: 0.6, economic: 0.85, social: 0.5 },
    initialPosition: { x: 50, y: -40 }
  },

  // 100. 客观主义 (Objectivism)
  {
    id: 'objectivism',
    name: '客观主义',
    englishName: 'Objectivism',
    category: 'ethical',
    color: '#10b981',
    period: '20世纪安·兰德创立',
    eraYear: 1957,
    summary: '安·兰德创立，主张理性利己是最高美德，崇尚自由放任资本主义与英雄般的创造性个体。',
    elevatorPitch: '《阿特拉斯耸耸肩》的誓言：“我以我的生命以及对它的爱发誓，我绝不为他人而活，也绝不要求他人为我而活！”客观实在不依赖于人的愿望，人类唯一的生存工具是理性，商业交换是唯一正义的人际关系。',
    coreTenets: [
      '形而上学客观实在：A就是A，事实客观自存，拒绝任何神秘主义',
      '理性自私的美德（The Virtue of Selfishness）：个人的幸福是人生的最高道德目的',
      '绝对自由放任资本主义：政权唯一正当职能是保护私产权免受暴力侵犯',
    ],
    internetReality: '硅谷科技巨头、马斯克与华尔街交易员的狂热圣经，被学术界正统哲学批判但也极具世俗号召力。',
    dailyLifeManifestation: '坚信凭借自己的天才技术与卓越硬核实力赢得亿万身家是天地间最高尚的成就，毫不自愧。',
    keyThinkers: [
      { name: '安·兰德 (Ayn Rand)', era: '1905-1982', note: '《源泉》《阿特拉斯耸耸肩》' }
    ],
    famousQuote: { quote: '创造者不为他人服务，他生活在自己的创造之中。', author: '安·兰德' },
    spectrum: { political: 0.9, economic: 1.0, social: 0.4 },
    initialPosition: { x: -20, y: -90 }
  },

  // 101. 个人主义 (Individualism)
  {
    id: 'individualism',
    name: '个人主义',
    englishName: 'Individualism',
    category: 'ethical',
    color: '#10b981',
    period: '文艺复兴至现代启蒙核心',
    eraYear: 1789,
    summary: '主张个人具有终极独立价值，个人权利高于集体意志，每个人是自身命运的逻辑起点。',
    elevatorPitch: '社会不是一个凌驾于所有人之上的神圣巨兽，社会只是千千万万独立个体的联合体！任何集体（国家、家族、企业）都不能以“大局为重”的借口肆意践踏无辜个体的尊严与合法自由。个人是目的，非工具。',
    coreTenets: [
      '个人道德自治与自主选择权至高无上',
      '反对将个人强行化约为某种集体身份或齿轮螺丝钉',
      '私域生活神圣不可侵犯，抵御公权力全面渗透',
    ],
    internetReality: '常被东方集体主义语境误读为自私冷漠；其本质是捍卫人的尊严与多样性发展的宪政基石。',
    dailyLifeManifestation: '坚持在婚育、求学与生活方式上完全由自己做主，不向家族同侪压力低头。',
    keyThinkers: [
      { name: '约翰·洛克 (John Locke)', era: '1632-1704', note: '个人天赋权利' },
      { name: 'J.S. 密尔 (J.S. Mill)', era: '1806-1873', note: '《论自由》个性的自由发展' },
      { name: '托克维尔 (Alexis de Tocqueville)', era: '1805-1859', note: '《论美国的民主》个人主义分析' }
    ],
    famousQuote: { quote: '对于他自己，对于他自己的身心，个人乃是最高主权者。', author: '密尔' },
    spectrum: { political: 0.8, economic: 0.5, social: 0.8 },
    initialPosition: { x: -80, y: -20 }
  },

  // 102. 集体主义 (Collectivism)
  {
    id: 'collectivism',
    name: '集体主义',
    englishName: 'Collectivism',
    category: 'ethical',
    color: '#10b981',
    period: '古典城邦、传统东方至现代社会主义实践',
    eraYear: 1848,
    summary: '主张集体、民族、国家或阶级整体利益高于个人私利，个人价值唯有在奉献集体中才能完满实现。',
    elevatorPitch: '一滴水只有融入大海才永远不会干涸！孤立的原子化个人是脆弱无力的，唯有凝聚成一个意志统一、纪律严明的集体，才能战胜残酷自然灾害、抵御强敌并完成移山填海的伟业。大河有水小河满。',
    coreTenets: [
      '集体利益优先性：在公共危机与重大战略关头个人应服从大局',
      '集体归属与团结互助高于资本主义冷酷冰冷的竞争内耗',
      '强调社会连带责任与共同命运共同体',
    ],
    internetReality: '在应对大型突发疫情、航天大工程与重大基建中展现出惊人高效动员力，也面临压抑个性异见的担忧。',
    dailyLifeManifestation: '全民核酸检测志愿通宵排班、“舍小家为大家”在戈壁滩深耕数十年的奉献精神。',
    keyThinkers: [
      { name: '让-雅克·卢梭 (Jean-Jacques Rousseau)', era: '1712-1778', note: '公意（General Will）至上' },
      { name: '列宁 (V.I. Lenin)', era: '1870-1924', note: '无产阶级高度组织纪律性' }
    ],
    famousQuote: { quote: '只有在集体中，个人才能获得全面发展其才能的手段。', author: '马克思' },
    spectrum: { political: -0.7, economic: -0.6, social: -0.5 },
    initialPosition: { x: -150, y: 30 }
  },

  // 103. 社群主义 (Communitarianism)
  {
    id: 'communitarianism',
    name: '社群主义 / 共同体主义',
    englishName: 'Communitarianism',
    category: 'ethical',
    color: '#10b981',
    period: '20世纪80年代反思罗尔斯自由主义而兴起',
    eraYear: 1982,
    summary: '桑德尔、麦金太尔代表，批判自由主义虚构的“脱离环境原子人”，强调历史共同体对自我的深层塑造与道德义务。',
    elevatorPitch: '自由主义假设人是一个生来赤条条、自由签订契约的无负担自我（Unencumbered Self）。但实际上，我们生来就嵌入在特定的家庭、语言、历史传统与故土社群之中！没有社群共同善的滋养，所谓的个人选择只是空洞的任性。',
    coreTenets: [
      '嵌入式自我（Embedded Self）：自我由所处的历史文化角色深刻构成',
      '共同善（The Common Good）优先于中立抽象的正当性（The Right）',
      '对过度商业化导致的传统乡村、邻里社区瓦解与道德冷漠发起深刻批判',
    ],
    internetReality: '现代人逃离北上广深大都市的冰冷原子化、重回有温度的熟人社区与地方文化的哲学寄托。',
    dailyLifeManifestation: '主动参与街道社区公约、重温传统节日宗族仪式感，寻求真切的归属与安全感。',
    keyThinkers: [
      { name: '迈克尔·桑德尔 (Michael Sandel)', era: '1953-', note: '《自由主义与正义的局限》《公正》' },
      { name: '阿拉斯代尔·麦金太尔', era: '1929-', note: '《追寻美德》叙事性自我想象' },
      { name: '查尔斯·泰勒 (Charles Taylor)', era: '1931-', note: '本真性伦理与承认的政治' }
    ],
    famousQuote: { quote: '若将我与我的家庭、城市、部落和民族割裂开来，我就失去了自我理解的全部坐标。', author: '麦金太尔' },
    spectrum: { political: -0.2, economic: -0.3, social: -0.5 },
    initialPosition: { x: -100, y: 100 }
  },

  // 104. 和平主义 (Pacifism)
  {
    id: 'pacifism',
    name: '和平主义',
    englishName: 'Pacifism',
    category: 'ethical',
    color: '#10b981',
    period: '古典宗教传统至甘地非暴力抵抗',
    eraYear: 1914,
    summary: '坚决反对一切形式的战争、军事侵略与致命暴力，主张用非暴力与对话化解人类冲突。',
    elevatorPitch: '暴力只会滋生更多暴力的恶性循环！以暴制暴犹如饮鸩止渴，战争机器一旦启动，最先牺牲的永远是无辜平民。无论打着多么神圣崇高的借口，杀戮在道德上都是无法洗脱的滔天之罪。爱与非暴力抵抗才能真正唤醒人心。',
    coreTenets: [
      '彻底否定战争作为解决国际政治争端合法手段的正当性',
      '非暴力不合作（Ahimsa / Satyagraha）：通过坚韧受难唤醒压迫者的道德良知',
      '废除核武器与常规军队，建设全球永久和平法治秩序',
    ],
    internetReality: '在俄乌冲突等当下地缘战争中屡被嘲笑为“天真乌托邦书生之见”，但它是人类阻止自我核毁灭的最高道德警戒线。',
    dailyLifeManifestation: '拒绝参与任何网络网暴人肉、在家庭矛盾中坚决不动手、积极投身反战反核游行。',
    keyThinkers: [
      { name: '圣雄甘地 (Mahatma Gandhi)', era: '1869-1948', note: '非暴力抵抗运动奠基人' },
      { name: '列夫·托尔斯泰 (Leo Tolstoy)', era: '1828-1910', note: '基督教勿抗恶哲学' },
      { name: '马丁·路德·金 (Martin Luther King Jr.)', era: '1929-1968', note: '美国民权非暴力抗争' }
    ],
    famousQuote: { quote: '以眼还眼，只会让整个世界陷入黑暗与失明。', author: '甘地' },
    spectrum: { political: 0.6, economic: -0.2, social: 0.8 },
    initialPosition: { x: -30, y: 160 }
  },

  // 105. 反物种歧视主义 / 纯素伦理主义 (Anti-speciesism / Veganism)
  {
    id: 'anti_speciesism',
    name: '反物种歧视主义 / 纯素伦理',
    englishName: 'Anti-speciesism / Veganism',
    category: 'ethical',
    color: '#10b981',
    period: '1970年理查德·莱德造词，彼得·辛格推动',
    eraYear: 1975,
    summary: '反对人类基于物种生物学分类而肆意剥夺非人动物免受痛苦的权利，主张将道德共同体扩及所有有情生命。',
    elevatorPitch: '种族主义基于肤色歧视他人，性别主义基于性别压迫他人；而“物种歧视（Speciesism）”则是人类基于物种DNA差异，残忍虐待、圈禁并屠宰数以百亿计的动物！痛苦就是痛苦，与它长着两只脚还是四只爪毫无关系。',
    coreTenets: [
      '物种歧视与种族主义、性别歧视在道德结构上完全同构',
      '感知痛苦的能力（Sentience）是享有道德关怀的唯一充分必要门槛',
      '坚决废除工业化现代养殖场的集中营式折磨、活体动物实验与皮草消费',
    ],
    internetReality: '全球各大城市纯素饮食、人造肉科技投资与动物权利保护法的核心推动力，也屡遭传统饮食文化抵触。',
    dailyLifeManifestation: '践行纯素生活方式（Vegan），拒绝穿动物真皮大衣，收养流浪动物反对遗弃。',
    keyThinkers: [
      { name: '理查德·莱德 (Richard Ryder)', era: '1940-', note: '造词Speciesism' },
      { name: '彼得·辛格 (Peter Singer)', era: '1946-', note: '《动物解放》圣经' },
      { name: '汤姆·雷根 (Tom Regan)', era: '1938-2017', note: '《动物权利的辩护》' }
    ],
    famousQuote: { quote: '问题不在于它们能否推理，也不在于它们能否说话，而在于它们能否感受痛苦？', author: '边沁' },
    spectrum: { political: 0.6, economic: -0.4, social: 0.95 },
    initialPosition: { x: 30, y: 220 }
  },

  // 扩展：历史虚无主义 (historical_nihilism)
  {
    id: 'historical_nihilism',
    name: '历史虚无主义',
    englishName: 'Historical Nihilism',
    category: 'philosophical',
    color: '#a855f7',
    period: '20世纪后期意识形态争锋',
    eraYear: 1989,
    summary: '以主观价值判断否定历史发展的客观规律，解构民族历史共识、颠覆英雄人物叙事。',
    elevatorPitch: '主张“历史只是任人打扮的小姑娘”。通过选择性放大局部阴暗细节，解构一个国家与民族历经艰辛建立的历史合法性，把所有英雄人物戏谑庸俗化，以此瓦解共同体的历史认同根基。',
    coreTenets: [
      '否定历史发展的必然因果联系与规律性',
      '用碎片化野史、微观八卦颠覆宏大历史定论与英雄形象',
      '将意识形态解构隐藏于所谓的“纯客观民间重评”之中',
    ],
    internetReality: '常出现在针对烈士、历史重大革命节点的网络戏谑翻案帖中，屡引发社会法律与学界严肃声讨。',
    dailyLifeManifestation: '轻信网络短视频中“教科书骗了你、某反派其实是大善人”的夺眼球阴谋论翻案剪辑。',
    keyThinkers: [
      { name: '历史解构倾向思潮', era: '当代', note: '对传统历史唯物主义与民族叙事的消解' }
    ],
    famousQuote: { quote: '欲灭其国，必先去其史。', author: '龚自珍古训警言' },
    spectrum: { political: 0.8, economic: 0.2, social: 0.9 },
    initialPosition: { x: 620, y: 100 }
  },

  // 扩展：文化虚无主义 (cultural_nihilism)
  {
    id: 'cultural_nihilism',
    name: '文化虚无主义',
    englishName: 'Cultural Nihilism',
    category: 'cultural',
    color: '#f59e0b',
    period: '近代激进反传统思潮',
    eraYear: 1919,
    summary: '认为本土传统文化是一文不值的陈腐糟粕与吃人礼教，主张彻底砸烂焚毁旧文化。',
    elevatorPitch: '在新旧文明撞击的极端危机中，认为传统文言、经学、礼俗与艺术是阻碍现代化的罪魁祸首，主张不破不立、“全盘推翻西化”。它既是痛苦的反思，也是激进的文化断奶阵痛。',
    coreTenets: [
      '对自身民族传统文化价值的全面绝望与彻底自我否定',
      '把现代性落后的一切症结皆归咎于传统文化的劣根性',
      '渴望在白纸废墟上移植全新的外来文明范式',
    ],
    internetReality: '在键盘政治讨论中表现为极端“逆向民族主义”或对一切本土传统艺术的盲目嗤之以鼻。',
    dailyLifeManifestation: '逢年过节一律斥之为落后陈规陋习，认为只有西式派对才算现代高级。',
    keyThinkers: [
      { name: '激进反传统先锋', era: '20世纪初', note: '五四极端化派别主张废除汉字等论点' }
    ],
    famousQuote: { quote: '旧文化若不彻底破除，新文明便永无诞生之日。', author: '激进文化反思口号' },
    spectrum: { political: 0.7, economic: -0.1, social: 0.95 },
    initialPosition: { x: 660, y: 130 }
  },

  // 扩展：民族虚无主义 (national_nihilism)
  {
    id: 'national_nihilism',
    name: '民族虚无主义',
    englishName: 'National Nihilism',
    category: 'political',
    color: '#38bdf8',
    period: '全球化冲击时代',
    eraYear: 1990,
    summary: '抹煞民族特征与民族差异，否定民族独立主权与民族文化尊严，视民族概念为完全无意义的包袱。',
    elevatorPitch: '主张民族只是人为制造的牢笼。民族自豪感无非是统治者用来动员民众牺牲的廉价鸦片；否定本民族的一切光荣与生存利益，在跨国资本与全球化叙事面前彻底缴械投降。',
    coreTenets: [
      '全面否定民族共同体的历史认同感与凝聚价值',
      '将民族自决与爱国情感一律污名化为沙文主义劣根',
      '无条件顺从优势外来霸权文化的全面同化与改造',
    ],
    internetReality: '网络神评中的“下辈子美利坚/润人”狂欢，将本国人种与文化贬损为劣等种族。',
    dailyLifeManifestation: '盲目崇拜外国一切商品制度，对本国任何技术突破与文化成就冷嘲热讽。',
    keyThinkers: [
      { name: '极端全球化至上论', era: '当代', note: '民族国家消亡论' }
    ],
    famousQuote: { quote: '哪里有自由，哪里就是我的祖国。', author: '极端口号' },
    spectrum: { political: 0.9, economic: 0.5, social: 0.95 },
    initialPosition: { x: 700, y: 160 }
  },

  // 扩展：法律虚无主义 (legal_nihilism)
  {
    id: 'legal_nihilism',
    name: '法律虚无主义',
    englishName: 'Legal Nihilism',
    category: 'political',
    color: '#38bdf8',
    period: '俄国革命初期及激进反法理思潮',
    eraYear: 1918,
    summary: '视制定法与司法程序为纯粹资产阶级骗术或阻碍革命专政的绊脚石，主张靠阶级直觉裁决。',
    elevatorPitch: '认为法律条文不过是剥削阶级掩盖残酷压迫的华丽遮羞布！真正的革命正义不需要繁琐的书呆子程序和律师辩护；法律最终注定随着国家的消亡而消亡，当下应凭群众直觉意志直接清算。',
    coreTenets: [
      '否认法律的独立相对自主性，将其贬低为纯粹赤裸的统治阶级工具',
      '蔑视正当法律程序、证据规则与法治制衡框架',
      '以政治狂热或领袖口谕直接替代严格的成文法典',
    ],
    internetReality: '网络“民愤判死刑”的大众私刑冲动，遇到恶性案件就叫嚣“枪毙了事还要什么审判”。',
    dailyLifeManifestation: '遇事不找律师不走法院打官司，只信托关系、找熟人甚至雇佣水军人肉威胁。',
    keyThinkers: [
      { name: '叶夫根尼·帕舒卡尼斯', era: '1891-1937', note: '《法的一般理论与马克思主义》商品交换法学' }
    ],
    famousQuote: { quote: '法律只是阶级意志的体现，在终极理想社会中它将化为灰烬。', author: '帕舒卡尼斯' },
    spectrum: { political: -0.6, economic: -0.8, social: 0.3 },
    initialPosition: { x: 530, y: 180 }
  },

  // 扩展：朋克精神 / 摇滚反叛 (punk_rebellion)
  {
    id: 'punk_rebellion',
    name: '朋克精神 / 摇滚反叛',
    englishName: 'Punk Rebellion',
    category: 'cultural',
    color: '#f59e0b',
    period: '1970年代中叶英美地下车库',
    eraYear: 1976,
    summary: '“No Future”！以极速刺耳的三和弦、撕裂的别针皮衣与DIY精神，反抗中产阶级伪善与体制机器。',
    elevatorPitch: '音乐不需要高深学院技巧，拿上吉他扫三个和弦就上台嘶吼！伦敦与纽约失业青年面对经济崩溃与阶级固化，用最肮脏粗粝的噪音、莫霍克发型与对建制的无情狂吐，向无望的世界宣告不服。DIY自制磁带，夺回属于街头的声音！',
    coreTenets: [
      'DIY（Do It Yourself）：反抗大商业唱片工业垄断，自己印传单、自己录磁带',
      '无情砸碎中产阶级精英审美的体面伪善假面具',
      '反威权反建制，在绝望中爆发原始激进的生命冲动',
    ],
    internetReality: '演化为赛博朋克（高科技低生活）、蒸汽朋克与废土美学，是独立亚文化反抗资本收编的灵感圣火。',
    dailyLifeManifestation: '买二手皮夹克自己手缝金属徽章铆钉，拒绝被算法流水线流行神曲洗脑。',
    keyThinkers: [
      { name: '性手枪乐队 (Sex Pistols)', era: '1975-', note: '《God Save The Queen》颠覆英伦' },
      { name: '冲撞乐队 (The Clash)', era: '1976-', note: '政治朋克良心' },
      { name: '雷蒙斯 (The Ramones)', era: '1974-', note: '纽约CBGB三和弦极速鼻祖' }
    ],
    famousQuote: { quote: '这里有三个和弦，现在去组个乐队吧！', author: '朋克早期地下杂志宣言' },
    spectrum: { political: 0.9, economic: -0.5, social: 0.95 },
    initialPosition: { x: 720, y: 220 }
  },

  // 扩展：躺平主义 (tangpingism)
  {
    id: 'tangpingism',
    name: '躺平主义 / 佛系哲学',
    englishName: 'Tangpingism',
    category: 'ethical',
    color: '#10b981',
    period: '2021年中国网络发端',
    eraYear: 2021,
    summary: '以极低消费、拒绝内卷、退出过度竞争为武器，面对阶层固化与资本榨取时的无声非暴力抵抗。',
    elevatorPitch: '“既然努力并不能改变阶层命运，反倒加速成为资本收割的韭菜，那我就选择主动躺平。”不买房、不买车、不结婚、不生子、不过度消费，用最低维持成本过一种安然平和的极简低欲望人生。躺平是穷人唯一的智性自卫。',
    coreTenets: [
      '退出恶性零和博弈（Zero-sum Rat Race），拒绝沦为异化工具人',
      '极简物质消费，追求精神自主与自由时间支配权',
      '弱者的非暴力不合作抵抗：你拥有剥削手段，但我拥有拒绝被收割的自由',
    ],
    internetReality: '火爆全网并蔓延至日韩（三弃世代）与欧美（Quiet Quitting 积极摸鱼），触动全球青年阶级焦虑神经。',
    dailyLifeManifestation: '准点下班打卡关机，租住在三线小城一个月花一千块钱，每天看书散步晒太阳。',
    keyThinkers: [
      { name: '网络倡导者“好心旅行家”', era: '2021', note: '《躺平即是正义》帖文发起者' },
      { name: '韩炳哲 (Byung-Chul Han)', era: '1959-', note: '《倦怠社会》自我剥削批判' }
    ],
    famousQuote: { quote: '躺平就是我的智友运动，只有躺平，万物才能化作我的审美。', author: '躺平宣言' },
    spectrum: { political: 0.6, economic: -0.4, social: 0.7 },
    initialPosition: { x: 380, y: 120 }
  },

  // 扩展：禁欲主义 (asceticism)
  {
    id: 'asceticism',
    name: '禁欲主义',
    englishName: 'Asceticism',
    category: 'ethical',
    color: '#10b981',
    period: '古代各大轴心宗教修道院传统',
    eraYear: -500,
    summary: '通过节制肉体欲望、苦修冥想与自我规训，达到精神超越与神圣灵魂净化。',
    elevatorPitch: '肉体欲望如贪得无厌的深渊，满足得越多，人就越沦为本能的囚徒。唯有通过断食、冥想、节制物欲与肉体试炼，熄灭烦恼之火，才能让蒙尘的心灵重见神圣光明。',
    coreTenets: [
      '节制口腹与感官享乐，破除对物质外物的贪恋执着',
      '身体苦修作为精神意志提升的熔炉炼狱',
      '马克斯·韦伯新教伦理世俗禁欲主义：努力赚钱但不挥霍，成为资本积累发动机',
    ],
    internetReality: '现代“数字戒毒（Dopamine Detox）”与生酮极简断食狂热背后的哲学远亲。',
    dailyLifeManifestation: '连续周末关闭手机屏幕、不刷短视频不吃垃圾食品，在素食禅修中清空脑雾。',
    keyThinkers: [
      { name: '马克斯·韦伯 (Max Weber)', era: '1864-1920', note: '《新教伦理与资本主义精神》世俗禁欲主义' }
    ],
    famousQuote: { quote: '克制欲望并非惩罚自己，而是让灵魂摆脱肉身镣铐的起飞。', author: '禁欲修道院铭言' },
    spectrum: { political: -0.3, economic: 0.1, social: -0.7 },
    initialPosition: { x: 280, y: 110 }
  },

  // 扩展：美德伦理学 (virtue_ethics)
  {
    id: 'virtue_ethics',
    name: '美德伦理学',
    englishName: 'Virtue Ethics',
    category: 'ethical',
    color: '#10b981',
    period: '亚里士多德发端，20世纪麦金太尔复兴',
    eraYear: -350,
    summary: '反对孤立算计行为后果或死守义务律令，关注“我应当成为一个什么样品质的人”。',
    elevatorPitch: '面对道德抉择，功利主义在算账，康德在翻法典，而美德伦理学问：“一个具备勇气、仁慈与节制品质的高尚之人，在此刻会怎么做？”道德不在于死背规则，而在于一辈子在日常实践中打磨出卓越的人格美德。',
    coreTenets: [
      '品格（Character）与美德（Arete）优先于行为对错的规则推导',
      '实践智慧（Phronesis）：在复杂现实情境中精准拿捏分寸的道德直觉能力',
      '复兴亚里士多德传统，抵御现代功利主义与义务论的冷血异化',
    ],
    internetReality: '当代职场对“情绪稳定、做事靠谱、有担当”等人格魅力的推崇远超单项KPI考核指标。',
    dailyLifeManifestation: '教育孩子不是背诵行为守则，而是通过父母榜样培养其同情弱者、勇于担当的内在品行。',
    keyThinkers: [
      { name: '亚里士多德', era: '前384-前322', note: '伦理美德与理智美德' },
      { name: '阿拉斯代尔·麦金太尔', era: '1929-', note: '《追寻美德》当代复兴领袖' },
      { name: '伊丽莎白·安斯康姆', era: '1919-2001', note: '《现代道德哲学》论文重燃战火' }
    ],
    famousQuote: { quote: '美德不是一种偶发的行为，而是一种经过长期磨砺形成的习惯。', author: '亚里士多德' },
    spectrum: { political: 0.1, economic: 0.0, social: 0.0 },
    initialPosition: { x: 230, y: 140 }
  }
];
