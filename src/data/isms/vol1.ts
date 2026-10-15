import { IsmNode } from '../../types/ism';

// 第一卷：哲学本体论与形而上学 (001 – 035)
export const VOL1_ISMS: IsmNode[] = [
  // 001. 唯心主义 / 观念论 (Idealism)
  {
    id: 'idealism',
    name: '唯心主义 / 观念论',
    englishName: 'Idealism',
    category: 'philosophical',
    color: '#a855f7',
    period: '古典希腊至近代哲学',
    eraYear: -380,
    summary: '主张精神、理念或意识是宇宙的第一性本原，物质世界依附于心灵。',
    elevatorPitch: '物质世界并非独立自存的冰冷机械，而是心灵、理念或意识的展开与表象；没有主体认知与精神的观照，宇宙便失去了存在的根基与意义。',
    coreTenets: [
      '精神、意识或理念具有本体论的优先性',
      '感官经验所及的物理客体依存于精神认知',
      '追求终极真理与普遍共相，超越短暂表象',
    ],
    internetReality: '常被粗暴等同于“胡思乱想”或“唯心主义妄想症”；在哲学史上它实际上是极其严谨的概念论与先验认识批判。',
    dailyLifeManifestation: '相信信念能改变生活、重视精神追求高于物质欲望，以及唯意志论式的自我励志思维。',
    keyThinkers: [
      { name: '柏拉图 (Plato)', era: '前427-前347', note: '理型论创始人' },
      { name: '黑格尔 (G.W.F. Hegel)', era: '1770-1831', note: '绝对唯心主义辩证集大成者' },
    ],
    famousQuote: { quote: '肉眼可见的事物只是幻影，唯有理型世界才永恒常住。', author: '柏拉图' },
    spectrum: { political: 0.1, economic: 0.0, social: 0.2 },
    initialPosition: { x: -300, y: -520 }
  },

  // 002. 客观唯心主义 (Objective Idealism)
  {
    id: 'objective_idealism',
    name: '客观唯心主义',
    englishName: 'Objective Idealism',
    category: 'philosophical',
    color: '#a855f7',
    period: '古希腊至19世纪德国古典哲学',
    eraYear: -360,
    summary: '认为客观精神、理念或绝对理性先于并独立于个人心灵而存在。',
    elevatorPitch: '主张宇宙背后存在一个独立于任何个体的客观精神（如理型、天理、道或绝对精神），世界万物是这种超个人理性的外化和投影。',
    coreTenets: [
      '超个人的精神实体是宇宙第一性存在',
      '自然界与人类社会均是客观理念的历史展开',
      '个人理智通过反思能够逐步契合宇宙理性',
    ],
    internetReality: '常与迷信神创论混淆，实际探讨的是客观数学规律、道德规律与宇宙精神本体的同一性。',
    dailyLifeManifestation: '相信“冥冥之中有天理宿命”、“宇宙法则”以及理性必然胜利的历史目的论。',
    keyThinkers: [
      { name: '柏拉图 (Plato)', era: '古希腊', note: '理型先于感性实体' },
      { name: '黑格尔 (G.W.F. Hegel)', era: '19世纪', note: '绝对理念的自我异化与复归' },
      { name: '朱熹 (Zhu Xi)', era: '1130-1200', note: '“理在事先，理在气先”' }
    ],
    famousQuote: { quote: '未有天地之先，毕竟也只是理。', author: '朱熹' },
    spectrum: { political: -0.2, economic: 0.0, social: -0.3 },
    initialPosition: { x: -220, y: -600 }
  },

  // 003. 柏拉图主义 (Platonism)
  {
    id: 'platonism',
    name: '柏拉图主义',
    englishName: 'Platonism',
    category: 'philosophical',
    color: '#a855f7',
    period: '古希腊古典时期',
    eraYear: -387,
    summary: '认为可见世界只是永恒常住“理型（Forms）”的不完美摹本。',
    elevatorPitch: '我们肉眼看到的树、桌子与善行都是暂时的投影，唯有几何公理、正义与美的永恒“理型”才具备纯粹实在性。洞穴囚徒唯有走出洞穴仰望太阳才能得见真理。',
    coreTenets: [
      '二元世界观：感性可见世界与永恒可知理型界',
      '灵魂回忆说：一切求知本质上是对前世理型的重新忆起',
      '善的理型是至高无上的太阳，哲学王治理理想国',
    ],
    internetReality: '常被降格为“柏拉图式恋爱”（纯精神恋爱），忽略了其对数理本体、法治城邦与本体论阶梯的宏大构建。',
    dailyLifeManifestation: '数学家相信质数定理是独立于人类客观存在的宇宙结构，追求完美的理想主义强迫倾向。',
    keyThinkers: [
      { name: '柏拉图 (Plato)', era: '前427-前347', note: '《理想国》《会饮篇》' },
      { name: '苏格拉底 (Socrates)', era: '前469-前399', note: '精神助产术启发者' }
    ],
    famousQuote: { quote: '洞穴中的囚徒把墙壁上的影子当成了唯一的实在。', author: '柏拉图' },
    spectrum: { political: -0.4, economic: -0.2, social: -0.3 },
    initialPosition: { x: -140, y: -680 }
  },

  // 004. 新柏拉图主义 (Neoplatonism)
  {
    id: 'neoplatonism',
    name: '新柏拉图主义',
    englishName: 'Neoplatonism',
    category: 'philosophical',
    color: '#a855f7',
    period: '公元3-6世纪晚期古典时代',
    eraYear: 240,
    summary: '普罗提诺创立，提出超越存在的“太一（The One）”流溢出奴斯与灵魂。',
    elevatorPitch: '宇宙万物从神秘完满的至高“太一”如同太阳光芒般层层流溢而下（奴斯、世界灵魂、物质界），而人类修行的最高目的是通过默想狂喜重新回归太一。',
    coreTenets: [
      '太一超越一切命名与存在范畴，是纯粹丰盈之源',
      '宇宙通过“流溢（Emanation）”自然产生各层级',
      '灵魂通过内省、净化与神秘直观实现与神的合一',
    ],
    internetReality: '往往被当成古代邪典神秘学，其实是影响早期基督教教父哲学、伊斯兰哲学与文艺复兴人文主义的形而上学基石。',
    dailyLifeManifestation: '冥想灵修、万物互联的一体感灵性体验，以及向内追寻神性圣光的审美趣味。',
    keyThinkers: [
      { name: '普罗提诺 (Plotinus)', era: '约204-270', note: '《九章集》，太一流溢说' },
      { name: '波菲利 (Porphyry)', era: '234-305', note: '整理出版普罗提诺著作' },
      { name: '普罗克洛 (Proclus)', era: '412-485', note: '雅典学派晚期集大成者' }
    ],
    famousQuote: { quote: '闭上你的肉眼，唤醒那人人皆有却鲜少动用的另一种视力。', author: '普罗提诺' },
    spectrum: { political: -0.3, economic: 0.0, social: -0.5 },
    initialPosition: { x: -60, y: -740 }
  },

  // 005. 黑格尔主义 (Hegelianism)
  {
    id: 'hegelianism',
    name: '黑格尔主义',
    englishName: 'Hegelianism',
    category: 'philosophical',
    color: '#a855f7',
    period: '19世纪上半叶德国古典哲学',
    eraYear: 1807,
    summary: '认为历史是“绝对精神”通过否定之否定辩证自我实现的宏伟过程。',
    elevatorPitch: '“凡是合乎理性的都是现实的，凡是现实的都是合乎理性的”。实体即主体，矛盾是推进世界发展的动力，历史由正、反、合的辩证螺旋迈向人类自由意识的自我完满。',
    coreTenets: [
      '绝对精神（Geist）通过自然与人类历史实现自我认识',
      '辩证法三段论：正题、反题、合题（扬弃 Aufhebung）',
      '国家是伦理精神的最高实现，自由由法治体系保障',
    ],
    internetReality: '常被误解为对专制国家的无脑辩护；其辩证法直接催生了马克思主义唯物辩证法与现代历史社会学。',
    dailyLifeManifestation: '看待任何社会矛盾时强调“发展眼光”、“对立统一”与“螺旋式上升”的历史观。',
    keyThinkers: [
      { name: 'G.W.F. 黑格尔', era: '1770-1831', note: '《精神现象学》《逻辑学》' }
    ],
    famousQuote: { quote: '密涅瓦的猫头鹰在黄昏中才悄然起飞。', author: '黑格尔' },
    spectrum: { political: -0.3, economic: -0.2, social: -0.2 },
    initialPosition: { x: -180, y: -530 }
  },

  // 006. 新黑格尔主义 (Neo-Hegelianism)
  {
    id: 'neo_hegelianism',
    name: '新黑格尔主义',
    englishName: 'Neo-Hegelianism',
    category: 'philosophical',
    color: '#a855f7',
    period: '19世纪末至20世纪初英美',
    eraYear: 1890,
    summary: '英美唯心主义复兴学派，主张宇宙是一个不可分割的精神整体。',
    elevatorPitch: '反对经验主义的机械碎片论，强调任何孤立的经验事实脱离了与宇宙整体的关系都是抽象虚妄的；实在由有机统一的关系网络（绝对）构成。',
    coreTenets: [
      '内在关系说：事物的属性与其所处的关系不可分割',
      '绝对整体性（The Absolute）：多样性最终统一于精神整体',
      '对碎片化功利主义与经验主义常识哲学的彻底批判',
    ],
    internetReality: '在20世纪初被罗素与摩尔的分析哲学革命猛烈反叛，被视为“晦涩玄学”，后在社群主义中获得部分思想复苏。',
    dailyLifeManifestation: '强调人与家庭、社会环境不可切割的有机纽带，批判过度个人主义。',
    keyThinkers: [
      { name: 'F.H. 布拉德雷 (F.H. Bradley)', era: '1846-1924', note: '《现象与实在》' },
      { name: '约西亚·罗伊斯 (Josiah Royce)', era: '1855-1916', note: '美国唯心主义代表' },
      { name: '鲍桑葵 (Bernard Bosanquet)', era: '1848-1923', note: '《国家的哲学理论》' }
    ],
    famousQuote: { quote: '凡是不能在更高统合中得到融贯解释的，皆非完全的实在。', author: '布拉德雷' },
    spectrum: { political: -0.4, economic: -0.1, social: -0.4 },
    initialPosition: { x: -260, y: -620 }
  },

  // 007. 绝对唯心主义 (Absolute Idealism)
  {
    id: 'absolute_idealism',
    name: '绝对唯心主义',
    englishName: 'Absolute Idealism',
    category: 'philosophical',
    color: '#a855f7',
    period: '18-19世纪德国古典及后继哲学',
    eraYear: 1800,
    summary: '主张万事万物皆是单一绝对精神或无限全知的内在部分。',
    elevatorPitch: '有限事物没有独立存在的实体性，主体与客体、心灵与自然的分裂只是“绝对者”自我显现过程中的内在环节，最终一切对立皆在绝对全知中达成同一。',
    coreTenets: [
      '有限与无限的同一：现实即绝对精神的自我展示',
      '主客统一体：认知者与被认知者本质源自同一精神本体',
      '拒斥康德不可知的“物自体”，主张世界可知且必然融贯',
    ],
    internetReality: '常被指责为概念的空中楼阁，但深刻影响了从德国古典哲学到现代全息宇宙哲学的思考。',
    dailyLifeManifestation: '万物皆有联系的宏观视野，对“历史必然进程”的信念感。',
    keyThinkers: [
      { name: '谢林 (F.W.J. Schelling)', era: '1775-1854', note: '同一哲学体系' },
      { name: '黑格尔 (G.W.F. Hegel)', era: '1770-1831', note: '绝对精神辩证展开' }
    ],
    famousQuote: { quote: '自然是隐蔽的精神，精神是显露的自然。', author: '谢林' },
    spectrum: { political: -0.2, economic: 0.0, social: -0.2 },
    initialPosition: { x: -100, y: -570 }
  },

  // 008. 主观唯心主义 (Subjective Idealism)
  {
    id: 'subjective_idealism',
    name: '主观唯心主义',
    englishName: 'Subjective Idealism',
    category: 'philosophical',
    color: '#a855f7',
    period: '18世纪启蒙时代起',
    eraYear: 1710,
    summary: '认为外部物理世界依赖于个体主观心灵的感知、感觉与观念。',
    elevatorPitch: '我们从不能直接接触到所谓的“物质本身”，我们所接触到的永远只有自己的视觉、听觉与触觉观念；所谓客体，不过是一束感觉经验的集合。',
    coreTenets: [
      '心灵及其观念是唯一可确证的实在',
      '拒斥独立于任何感知之外的纯物理物质实体',
      '世界的存在性以被知觉为必要条件',
    ],
    internetReality: '常被网络梗讽刺为“闭上眼睛悬崖就不存在了”，但其对经验知识界限的批判极具逻辑冲击力。',
    dailyLifeManifestation: '“你眼中的世界就是你内心的投射”、“心态决定现实”等当代心理学表述。',
    keyThinkers: [
      { name: '乔治·贝克莱 (George Berkeley)', era: '1685-1753', note: '《人类知识原理》' },
      { name: '费希特 (J.G. Fichte)', era: '1762-1814', note: '从“本我”设定非我' },
      { name: '王阳明 (Wang Yangming)', era: '1472-1529', note: '“心外无物，心外无理”' }
    ],
    famousQuote: { quote: '你未看此花时，此花与汝心同归于寂；你来看此花时，此花颜色一时明白起来。', author: '王阳明' },
    spectrum: { political: 0.3, economic: 0.1, social: 0.4 },
    initialPosition: { x: -420, y: -480 }
  },

  // 009. 非物质主义 (Immaterialism)
  {
    id: 'immaterialism',
    name: '非物质主义',
    englishName: 'Immaterialism',
    category: 'philosophical',
    color: '#a855f7',
    period: '18世纪初',
    eraYear: 1710,
    summary: '贝克莱主教创立，核心命题“存在即被感知（Esse est percipi）”。',
    elevatorPitch: '物质概念是一个多余且充满逻辑漏洞的假定。桌子之所以存在，是因为我看到它、摸到它；即使没人看，它依然在上帝的永恒心智中被感知着。',
    coreTenets: [
      '存在即被感知，或感知他人（Esse est percipi aut percipere）',
      '物质实体是不存在也不可能被证明的抽象虚构',
      '上帝作为永恒的心灵维持着宇宙感知的稳定性与连贯性',
    ],
    internetReality: '曾被机械唯物主义者讽刺，但在量子力学“观察者效应”与模拟假说流行的今天引发全新讨论。',
    dailyLifeManifestation: '沉浸式VR体验或元宇宙中，数字资产与虚拟景观完全以“感知与代码呈现”为存在基础。',
    keyThinkers: [
      { name: '乔治·贝克莱 (George Berkeley)', era: '1685-1753', note: '爱尔兰哲学家兼神学家' }
    ],
    famousQuote: { quote: '事物的存在就在于它们被感知。', author: '贝克莱' },
    spectrum: { political: 0.1, economic: 0.0, social: 0.1 },
    initialPosition: { x: -480, y: -540 }
  },

  // 010. 唯我主义 / 唯我论 (Solipsism)
  {
    id: 'solipsism',
    name: '唯我主义 / 唯我论',
    englishName: 'Solipsism',
    category: 'philosophical',
    color: '#a855f7',
    period: '近代笛卡尔怀疑论以来的极端形态',
    eraYear: 1641,
    summary: '主张只有“我自己的心灵”是唯一能够确信存在的实体，他人皆为幻象。',
    elevatorPitch: '你能确知除了你此刻的主观意识流之外，整个宇宙、地球、以及身边的所有他人不是一个逼真的梦境或恶魔的欺骗吗？除了我自己的心灵，没有任何事物不可怀疑。',
    coreTenets: [
      '主观第一人称体验是唯一确凿无疑的证据',
      '无法证明他人存在意识（“哲学丧尸”困境）',
      '外在物理世界无法提供超越心灵表象的绝对实存证明',
    ],
    internetReality: '常被当作精神病学解离症候群或中二病语录，但在认识论上被视为最顽固不可彻底证伪的逻辑死角。',
    dailyLifeManifestation: '电影《楚门的世界》《黑客帝国》、孤独症感、深夜惊醒时怀疑世界真实性的虚幻体验。',
    keyThinkers: [
      { name: '笛卡尔 (Descartes)', era: '1596-1650', note: '通过普遍怀疑逼近唯我论悬崖' },
      { name: '麦克斯·施蒂纳 (Max Stirner)', era: '1806-1856', note: '唯意志论唯我自我所有' }
    ],
    famousQuote: { quote: '除了我自己的知觉状态，一切皆在不可验证的浓雾之中。', author: '唯我论经典命题' },
    spectrum: { political: 0.8, economic: 0.4, social: 0.9 },
    initialPosition: { x: -550, y: -450 }
  },

  // 011. 先验唯心主义 (Transcendental Idealism)
  {
    id: 'transcendental_idealism',
    name: '先验唯心主义',
    englishName: 'Transcendental Idealism',
    category: 'philosophical',
    color: '#a855f7',
    period: '18世纪启蒙运动晚期',
    eraYear: 1781,
    summary: '人类只能认识经先验时空感性与知性范畴建构的“现象界”，物自体不可知。',
    elevatorPitch: '时空与因果律不是客观世界自备的容器与铁律，而是人类心智用来组织经验的内置“一副有色眼镜”。我们认识的世界永远是“显现于人的世界”，而非物自体本身。',
    coreTenets: [
      '现象界（Phenomena）与物自体（Noumena）的严格区分',
      '时间和空间是先验感性直观形式，而非客观实在',
      '知性范畴（因果、必然、实体等）为自然立法',
    ],
    internetReality: '常被误以为是主观虚构世界，实际上康德坚决肯定物自体的客观存在，只是人类理性受先验硬件限制无法直接触碰。',
    dailyLifeManifestation: '理解人类的感知受限于感官生理通道与语言神经回路，保持对绝对客体认知的谦逊。',
    keyThinkers: [
      { name: '伊曼努尔·康德 (Immanuel Kant)', era: '1724-1804', note: '哥白尼式哲学革命' }
    ],
    famousQuote: { quote: '知性为自然立法，我们只能认识我们自己赋予事物的东西。', author: '康德' },
    spectrum: { political: 0.4, economic: 0.1, social: 0.5 },
    initialPosition: { x: -250, y: -440 }
  },

  // 012. 康德主义 (Kantianism)
  {
    id: 'kantianism',
    name: '康德主义',
    englishName: 'Kantianism',
    category: 'philosophical',
    color: '#a855f7',
    period: '18世纪末至今',
    eraYear: 1781,
    summary: '康德哲学体系，调和唯理论与经验论，确立先验认识论与绝对命令伦理学。',
    elevatorPitch: '完成了哲学史上的“哥白尼革命”：认识论上把目光从客体转向主体先天认识形式；伦理学上提出“人是目的而非工具”，用绝对律令奠定现代人权与法治尊严。',
    coreTenets: [
      '感性提供质料，知性提供形式，思维无内容则空，直观无概念则盲',
      '道德绝对命令：只依据你同时愿意它成为普遍法则的准则去行动',
      '永久和平构想与现代世界主义公民社会的法律保障',
    ],
    internetReality: '因其严苛的“绝不说谎哪怕救人”义务论而在电车难题讨论中屡成靶子，但构成了现代联合国宪章与人权哲学的底层骨架。',
    dailyLifeManifestation: '坚守底线原则不把他人当作利用工具、遵守契约准则与追求程序公正。',
    keyThinkers: [
      { name: '伊曼努尔·康德 (Immanuel Kant)', era: '1724-1804', note: '三大批判体系奠基者' }
    ],
    famousQuote: { quote: '有两样东西常驻我心：头顶浩瀚星空与心中道德法则。', author: '康德' },
    spectrum: { political: 0.5, economic: 0.1, social: 0.5 },
    initialPosition: { x: -170, y: -410 }
  },

  // 013. 新康德主义 (Neo-Kantianism)
  {
    id: 'neo_kantianism',
    name: '新康德主义',
    englishName: 'Neo-Kantianism',
    category: 'philosophical',
    color: '#a855f7',
    period: '19世纪末至20世纪初德国',
    eraYear: 1870,
    summary: '“回到康德去”，分为探讨自然科学逻辑的马堡学派与探讨文化价值的弗赖堡学派。',
    elevatorPitch: '面对唯物主义庸俗化与黑格尔玄学破产，重新搬出康德的批判理性工具，马堡学派将其用于清洗科学中的神秘论，西南学派则开辟了历史文化与自然科学的方法论界限。',
    coreTenets: [
      '马堡学派（柯亨、纳托普、卡西尔）：把哲学定位为科学知识的认识论逻辑奠基',
      '弗赖堡/西南学派（李凯尔特、文德尔班）：区别求规律的自然科学与求个性的历史文化科学',
      '彻底剔除物自体概念，把世界理解为文化符号与先验逻辑的建构产物',
    ],
    internetReality: '对现代社会学（马克斯·韦伯）、文化符号学（卡西尔）与现象学的发展起到了极为深远的关键铺路作用。',
    dailyLifeManifestation: '区分“自然事实”与“人文价值”，在讨论历史事件时注重文化意义而非单纯物理因果。',
    keyThinkers: [
      { name: '恩斯特·卡西尔 (Ernst Cassirer)', era: '1874-1945', note: '《符号形式的哲学》' },
      { name: '海因里希·李凯尔特 (Heinrich Rickert)', era: '1863-1936', note: '价值哲学与文化科学' },
      { name: '赫尔曼·柯亨 (Hermann Cohen)', era: '1842-1918', note: '马堡学派创立者' }
    ],
    famousQuote: { quote: '人是符号的动物，生活在自我编织的意义之网中。', author: '卡西尔' },
    spectrum: { political: 0.3, economic: 0.0, social: 0.4 },
    initialPosition: { x: -90, y: -450 }
  },

  // 014. 现象主义 (Phenomenalism)
  {
    id: 'phenomenalism',
    name: '现象主义',
    englishName: 'Phenomenalism',
    category: 'philosophical',
    color: '#a855f7',
    period: '19世纪下半叶至20世纪初',
    eraYear: 1886,
    summary: '密尔、马赫代表，主张物理对象只是“感觉经验的恒久可能性”。',
    elevatorPitch: '房间里有一张椅子，并不意味着它有某种超自然的物质实体潜伏在那里，而是指只要我走回房间睁开眼睛，我总会体验到那组视觉与触觉感觉。物理世界全由感觉要素构成。',
    coreTenets: [
      '所有关于物理世界的真命题都可以翻译为关于感官体验的命题',
      '拒斥形而上学实体，以“思维经济原则”清理不可观察的假定',
      '世界是感觉要素（颜色、声音、压力）的复合体',
    ],
    internetReality: '马赫的经验批判主义曾被列宁《唯物主义和经验批判主义》激烈批判，但深刻启发了爱因斯坦狭义相对论的时空观变革。',
    dailyLifeManifestation: 'UI/UX设计与虚拟现实研发中，将交互体验直接等同于设备“存在”的全部意义。',
    keyThinkers: [
      { name: '恩斯特·马赫 (Ernst Mach)', era: '1838-1916', note: '物理学家兼哲学家' },
      { name: 'J.S. 密尔 (J.S. Mill)', era: '1806-1873', note: '提出感觉的恒久可能性' }
    ],
    famousQuote: { quote: '世界是由我们的感觉构成的，除此以外无物存在。', author: '马赫' },
    spectrum: { political: 0.3, economic: 0.0, social: 0.5 },
    initialPosition: { x: -330, y: -410 }
  },

  // 015. 唯物主义 (Materialism)
  {
    id: 'materialism',
    name: '唯物主义',
    englishName: 'Materialism',
    category: 'philosophical',
    color: '#a855f7',
    period: '古希腊原子论至现代科学',
    eraYear: -400,
    summary: '主张物质是宇宙第一性存在与唯一实体，意识是高度组织化物质的产物。',
    elevatorPitch: '宇宙既不是上帝凭空创造的，也不是心灵投射的幻觉。物质世界客观自存、永恒运动，人的大脑、神经突触与意识本质上都是复杂的物理化学运动。',
    coreTenets: [
      '物质第一性，意识第二性并由物质决定',
      '物理自然界先于人类精神而存在',
      '通过实践与自然科学实验可以逐步认识客观规律',
    ],
    internetReality: '经常在世俗语境中与“拜金主义/拜物教”混为一谈；哲学上的唯物论是对世界本体的科学实在论追问。',
    dailyLifeManifestation: '相信现代医学检查结果、相信客观物理规律不会因主观愿望而改变的唯实作风。',
    keyThinkers: [
      { name: '德谟克利特 (Democritus)', era: '前460-前370', note: '原子论古希腊始祖' },
      { name: '费尔巴哈 (Ludwig Feuerbach)', era: '1804-1872', note: '人本主义唯物论' }
    ],
    famousQuote: { quote: '唯有原子和虚空真实存在，其余只是意见。', author: '德谟克利特' },
    spectrum: { political: -0.1, economic: -0.4, social: 0.3 },
    initialPosition: { x: -450, y: -260 }
  },

  // 016. 朴素唯物主义 (Naive Materialism)
  {
    id: 'naive_materialism',
    name: '朴素唯物主义',
    englishName: 'Naive Materialism',
    category: 'philosophical',
    color: '#a855f7',
    period: '先秦诸子与古希腊罗马自然哲学',
    eraYear: -500,
    summary: '把世界本质本原直接归结为某种具体的物理形态（如水、火、气或原子）。',
    elevatorPitch: '古希腊泰勒斯说“万物源于水”，赫拉克利特说“世界是一团永恒的活火”，中国古代以金木水火土五行解释宇宙。用直观的自然物质取代神话巫术，是人类理性的觉醒。',
    coreTenets: [
      '拒斥神创论，以自然界自身解释自然界',
      '将宇宙万物统一于一种或几种可见的具体物质原质',
      '带有自发的原始朴素辩证法色彩（万物皆流）',
    ],
    internetReality: '常被当作落后古代常识一笔带过，实为人类文明摆脱神话泛灵崇拜、走向理性探索的最早界碑。',
    dailyLifeManifestation: '中医疗法中的五行调和理念、朴素的万物相生相克直觉。',
    keyThinkers: [
      { name: '泰勒斯 (Thales)', era: '约前624-前546', note: '西方哲学之父，“水是万物始基”' },
      { name: '赫拉克利特 (Heraclitus)', era: '约前535-前475', note: '“万物皆流，无物常驻”' },
      { name: '王充 (Wang Chong)', era: '27-97', note: '东汉元气自然论' }
    ],
    famousQuote: { quote: '人不能两次踏进同一条河流。', author: '赫拉克利特' },
    spectrum: { political: 0.0, economic: -0.1, social: 0.0 },
    initialPosition: { x: -520, y: -330 }
  },

  // 017. 机械唯物主义 (Mechanical Materialism)
  {
    id: 'mechanical_materialism',
    name: '机械唯物主义',
    englishName: 'Mechanical Materialism',
    category: 'philosophical',
    color: '#a855f7',
    period: '17-18世纪欧洲启蒙时代',
    eraYear: 1748,
    summary: '用牛顿经典力学与机械齿轮运动解释一切自然、生命与人类心灵。',
    elevatorPitch: '拉美特利喊出“人是机器”！宇宙是一座精确啮合的巨型机械钟表，人体不过是发条、齿轮与液压管道的复合体，一切生命现象皆可还原为分子的物理位移与撞击。',
    coreTenets: [
      '用经典力学运动解释一切高阶生命与心理现象',
      '还原论与决定论：已知全部分子状态便能计算过去未来',
      '否认事物内部矛盾的自发发展，看待世界呈现孤立静止倾向',
    ],
    internetReality: '现代医学中把人体器官当零件机械修理的纯生化视角常被诟病为机械唯物主义遗毒。',
    dailyLifeManifestation: '把失眠、焦虑简单归结为“神经递质分泌失调”并期望仅靠单一片剂药片彻底解决。',
    keyThinkers: [
      { name: '拉美特利 (Julien de La Mettrie)', era: '1709-1751', note: '《人是机器》' },
      { name: '霍尔巴赫 (Baron d’Holbach)', era: '1723-1789', note: '《自然的体系》' },
      { name: '狄德罗 (Denis Diderot)', era: '1713-1784', note: '百科全书派领袖' }
    ],
    famousQuote: { quote: '人体不过是一架自己给发条上弦的机器。', author: '拉美特利' },
    spectrum: { political: 0.1, economic: 0.1, social: 0.2 },
    initialPosition: { x: -490, y: -190 }
  },

  // 018. 辩证唯物主义 (Dialectical Materialism)
  {
    id: 'dialectical_materialism',
    name: '辩证唯物主义',
    englishName: 'Dialectical Materialism',
    category: 'philosophical',
    color: '#a855f7',
    period: '19世纪中叶马克思恩格斯创立',
    eraYear: 1845,
    summary: '结合唯物主义与黑格尔辩证法，主张客观物质世界遵循对立统一等三大规律。',
    elevatorPitch: '物质不仅客观存在，而且处于永恒发展变化之中。事物发展的根本动因源自内部固有的矛盾对立，通过质量互变规律、对立统一规律与否定之否定规律螺旋上升。',
    coreTenets: [
      '世界的物质统一性：物质是不断运动发展的辩证过程',
      '对立统一规律是唯物辩证法的实质与核心',
      '认识源于社会实践、在实践中检验真理并反作用于世界',
    ],
    internetReality: '在中文互联网被广泛学习并成为官方哲学基石，常被作为分析复杂现实与社会矛盾的核心思维工具。',
    dailyLifeManifestation: '分析问题时辨析“主要矛盾与次要矛盾”、“量变引起质变”以及“事物两面性”。',
    keyThinkers: [
      { name: '卡尔·马克思 (Karl Marx)', era: '1818-1883', note: '唯物辩证法开创者' },
      { name: '弗里德里希·恩格斯', era: '1820-1895', note: '《自然辩证法》《反杜林论》' }
    ],
    famousQuote: { quote: '哲学家们只是用不同的方式解释世界，问题在于改变世界。', author: '马克思' },
    spectrum: { political: -0.2, economic: -0.9, social: 0.6 },
    initialPosition: { x: -380, y: -180 }
  },

  // 019. 历史唯物主义 (Historical Materialism)
  {
    id: 'historical_materialism',
    name: '历史唯物主义',
    englishName: 'Historical Materialism',
    category: 'philosophical',
    color: '#a855f7',
    period: '1848年《共产党宣言》创立',
    eraYear: 1859,
    summary: '社会存在决定社会意识，生产力决定生产关系，经济基础决定上层建筑。',
    elevatorPitch: '人类历史不是由伟大帝王的英明意志推动的，而是由人们吃喝住穿的物质生产活动奠定基础。当生产力发展突破了既有生产关系和阶级秩序的束缚，社会革命便必然爆发。',
    coreTenets: [
      '生产力与生产关系、经济基础与上层建筑的矛盾运动',
      '阶级斗争是阶级社会历史发展的直接动力',
      '人民群众是历史的真正创造者，而非英雄史观',
    ],
    internetReality: '常被庸俗经济决定论化（“一切都是利益分配”）；正统学说强调历史合力论与文化意识形态的相对独立能动性。',
    dailyLifeManifestation: '理解科技变革（如AI与互联网）如何颠覆既有就业体制、法律产权与家庭结构的底层变迁。',
    keyThinkers: [
      { name: '卡尔·马克思 (Karl Marx)', era: '1818-1883', note: '《资本论》《政治经济学批判序言》' },
      { name: '列宁 (V.I. Lenin)', era: '1870-1924', note: '帝国主义阶段历史唯物发展' }
    ],
    famousQuote: { quote: '手推磨产生的是封建主的社会，蒸汽磨产生的是工业资本家的社会。', author: '马克思' },
    spectrum: { political: -0.3, economic: -0.95, social: 0.6 },
    initialPosition: { x: -350, y: -100 }
  },

  // 020. 物理主义 (Physicalism)
  {
    id: 'physicalism',
    name: '物理主义',
    englishName: 'Physicalism',
    category: 'philosophical',
    color: '#a855f7',
    period: '20世纪维也纳学派至当代心灵哲学',
    eraYear: 1930,
    summary: '卡尔纳普、奎因代表，主张一切真实存在的事物皆不超出物理学解释的范畴。',
    elevatorPitch: '世上不存在超越时空的非物质幽灵。所有关于心理、社会、道德与生物现象的事实，根本上都“随附（supervene）”于基础物理微观粒子与其相互作用之上。',
    coreTenets: [
      '物理世界的因果封闭性（Causal Closure of the Physical）',
      '心理状态随附于物理状态：没有物理差异便不可能产生心理差异',
      '所有经验学科在原则上都能统一于物理学基本法则',
    ],
    internetReality: '面临现代哲学著名的“难问题（The Hard Problem of Consciousness）”挑战——物理粒子究竟如何涌现出主观感质（Qualia）？',
    dailyLifeManifestation: '深信一切心理障碍都能最终在脑成像和神经化学层面找到根源。',
    keyThinkers: [
      { name: '鲁道夫·卡尔纳普 (Rudolf Carnap)', era: '1891-1970', note: '语言与科学统一' },
      { name: 'W.V.O. 奎因 (W.V. Quine)', era: '1908-2000', note: '本体论承诺与自然化认识论' }
    ],
    famousQuote: { quote: '一切真实命题皆可用物理学的语言予以陈述。', author: '卡尔纳普' },
    spectrum: { political: 0.2, economic: 0.0, social: 0.4 },
    initialPosition: { x: -280, y: -220 }
  },

  // 021. 还原物理主义 (Reductive Physicalism)
  {
    id: 'reductive_physicalism',
    name: '还原物理主义',
    englishName: 'Reductive Physicalism',
    category: 'philosophical',
    color: '#a855f7',
    period: '20世纪50-60年代心灵哲学',
    eraYear: 1956,
    summary: '主张心理类型等同于神经生物物理类型（类型同一论 Type Identity Theory）。',
    elevatorPitch: '疼痛并不是什么神秘的情绪，疼痛在严格本体论意义上就是大脑中“C纤维神经的激活”；正如水就是H2O，闪电就是云层电荷放电。心理现象可以被无残留地还原为脑生理。',
    coreTenets: [
      '心理状态与特定神经大脑生理状态一一对应并完全等同',
      '高阶科学规律可依据桥接定律（Bridge Laws）彻底还原为低阶物理定律',
      '彻底消除心物二元论的神秘主义残留',
    ],
    internetReality: '受到“多重可实现性（Multiple Realizability）”的致命反驳：章鱼或外星人没有C纤维但依然能感受到痛苦，因此心理不能严格等同于某单一神经结构。',
    dailyLifeManifestation: '把爱情看作单纯的多巴胺与催产素化学反应的实用主义思维。',
    keyThinkers: [
      { name: 'U.T. 普莱斯 (U.T. Place)', era: '1924-2000', note: '《意识是大脑过程吗？》' },
      { name: 'J.J.C. 斯马特 (J.J.C. Smart)', era: '1920-2012', note: '心脑同一论代表' }
    ],
    famousQuote: { quote: '感觉无非就是大脑神经元复杂的生物电风暴。', author: '斯马特' },
    spectrum: { political: 0.1, economic: 0.1, social: 0.3 },
    initialPosition: { x: -210, y: -260 }
  },

  // 022. 取消唯物主义 (Eliminative Materialism)
  {
    id: 'eliminative_materialism',
    name: '取消唯物主义',
    englishName: 'Eliminative Materialism',
    category: 'philosophical',
    color: '#a855f7',
    period: '20世纪70年代至今',
    eraYear: 1981,
    summary: '丘奇兰德夫妇提出，认为常识中的“信念、欲望、希望”全是虚构伪概念，将被成熟神经科学彻底取缔。',
    elevatorPitch: '正如古代人相信的“燃素”和“以太”在现代科学建立后被证明根本不存在一样，我们日常使用的“我相信”、“我想吃”等常识心理学概念根本不存在实体对应物，未来人会直接用神经突触激活图谱取代所有心理词汇。',
    coreTenets: [
      '大众心理学（Folk Psychology）是一个充满深刻误导的古老伪科学理论',
      '精神状态不仅不可还原，而且应当被直接从科学本体论中清除剔除',
      '神经科学与计算认知科学将重构人类自我理解的全部词汇表',
    ],
    internetReality: '因过于激进而常被戏称“消灭了人类心灵自身的哲学”，常引发关于自我意识消失的科幻哲学狂想。',
    dailyLifeManifestation: '用佩戴的智能手环HRV心率变异性指数与脑电波波段，完全取代自己对“今天我开不开心”的主观评判。',
    keyThinkers: [
      { name: '保罗·丘奇兰德 (Paul Churchland)', era: '1942-', note: '《取消唯物主义与命题态度》' },
      { name: '帕特丽夏·丘奇兰德 (Patricia Churchland)', era: '1943-', note: '神经哲学开创者' }
    ],
    famousQuote: { quote: '常识心理学就像巫术一样，应当被彻底扔进历史垃圾堆。', author: '保罗·丘奇兰德' },
    spectrum: { political: 0.2, economic: 0.2, social: 0.6 },
    initialPosition: { x: -140, y: -290 }
  },

  // 023. 心灵功能主义 (Functionalism)
  {
    id: 'mind_functionalism',
    name: '心灵功能主义',
    englishName: 'Functionalism',
    category: 'philosophical',
    color: '#a855f7',
    period: '1960年代计算机科学与心灵哲学交叉诞生',
    eraYear: 1967,
    summary: '普特南提出，心理状态取决于其在系统中的因果“功能角色”，而非生物硬件构成。',
    elevatorPitch: '正如时钟可以用黄铜齿轮制造、也可以用石英震荡制造甚至可以用软件模拟，只要具备计时功能即可。同理，只要硅基芯片或复杂算法能执行与人类大脑相同的信息输入输出因果功能，它就具有真正的意识心灵！',
    coreTenets: [
      '多重可实现性（Multiple Realizability）：心智可脱离碳基生物载体',
      '心灵之于大脑，正如软件程序之于计算机硬件（图灵机心智隐喻）',
      '心理状态由其输入、内部状态转变及输出行动的因果功能网络严格定义',
    ],
    internetReality: '奠定了通用人工智能（AGI）与意识上传赛博格的全部哲学正当性，但也面临塞尔“中文屋实验”对符号语义理解的质疑。',
    dailyLifeManifestation: '与AI大语言模型对话时，相信当它的推理逻辑与情感交互足够逼真时，它便拥有实质心智。',
    keyThinkers: [
      { name: '希拉里·普特南 (Hilary Putnam)', era: '1926-2016', note: '机器功能主义奠基人' },
      { name: '杰瑞·福多 (Jerry Fodor)', era: '1935-2017', note: '心智模块性理论' },
      { name: '丹尼尔·丹尼特 (Daniel Dennett)', era: '1942-2024', note: '意向立场与意识解释' }
    ],
    famousQuote: { quote: '重要的是软件运作的因果网络，而不是承载它的硬件是肉脑还是硅晶。', author: '普特南' },
    spectrum: { political: 0.3, economic: 0.2, social: 0.8 },
    initialPosition: { x: -70, y: -240 }
  },

  // 024. 突现主义 / 涌现论 (Emergentism)
  {
    id: 'emergentism',
    name: '突现主义 / 涌现论',
    englishName: 'Emergentism',
    category: 'philosophical',
    color: '#a855f7',
    period: '19世纪末复杂系统科学至今',
    eraYear: 1920,
    summary: '复杂物质系统整体会涌现出组成部分在低层级所完全不具备的全新自主属性（如意识）。',
    elevatorPitch: '单个水分子不具备“湿润性”，大量水分子聚在一起才涌现出液态湿润；单个神经元只有离子交换，上百亿神经元形成自组织网络就涌现出了自我意识与痛苦！整体大于部分之和。',
    coreTenets: [
      '非还原性物理主义：承认物质基础，但否认高阶规律能被完全降维还原',
      '自下而上的突现（Bottom-up Emergence）与高阶向下的因果作用（Downward Causation）',
      '复杂性阈值是突破简单决定论死板模型的关键钥匙',
    ],
    internetReality: '是当前解释大语言模型“顿悟（Grokking）”与复杂社会群体智能的最主流科学哲学理论。',
    dailyLifeManifestation: '蚁群没有领袖却能造出精密地下城；股票市场由千万个体交易涌现出难以预测的周期狂澜。',
    keyThinkers: [
      { name: 'C.D. 布罗德 (C.D. Broad)', era: '1887-1971', note: '《心灵及其在自然界中的位置》' },
      { name: '菲利普·安德森 (P.W. Anderson)', era: '1923-2020', note: '诺奖物理学家，“多者异也 (More is different)”' }
    ],
    famousQuote: { quote: '多者异也：随着复杂度的层级递升，全新的规律在每一阶段涌现。', author: '安德森' },
    spectrum: { political: 0.2, economic: 0.0, social: 0.5 },
    initialPosition: { x: 0, y: -300 }
  },

  // 025. 新唯物主义 (New Materialism)
  {
    id: 'new_materialism',
    name: '新唯物主义',
    englishName: 'New Materialism',
    category: 'philosophical',
    color: '#a855f7',
    period: '21世纪前沿欧陆理论与后人类思潮',
    eraYear: 2010,
    summary: '巴拉德（Barad）、本内特代表，解构人类中心主义，强调非人自然与物质自身的活性与能动性。',
    elevatorPitch: '物质不是被动等待人类开采塑造的死物原料！塑料垃圾、电网微粒、病毒细菌、气候洋流都具备自身的“活力物质（Vibrant Matter）”，人与非人类物质纠缠共生于同一能动网络中。',
    coreTenets: [
      '活力物质与非人类行动元（Actor-Network）的政治本体论',
      '反思人类唯一能动者的自大幻想，把政治扩展至生态物态体系',
      '结合量子力学与女性主义批判传统机械笛卡尔二元论',
    ],
    internetReality: '深受气候危机、微塑料污染与全球大流行反思的推动，推动当代艺术与绿色生态哲学向“物”转向。',
    dailyLifeManifestation: '反思海洋塑料垃圾不仅是污染，更是参与地球地质演变的“新型造礁物质”。',
    keyThinkers: [
      { name: '凯伦·巴拉德 (Karen Barad)', era: '当代', note: '能动实在论（Agential Realism）' },
      { name: '简·本内特 (Jane Bennett)', era: '当代', note: '《活力物质》' },
      { name: '布鲁诺·拉图尔 (Bruno Latour)', era: '1947-2022', note: '行动者网络理论（ANT）' }
    ],
    famousQuote: { quote: '物质并不是被动静止的形体，而是永远在生成、纠缠与行动的力量。', author: '巴拉德' },
    spectrum: { political: 0.3, economic: -0.5, social: 0.9 },
    initialPosition: { x: 80, y: -260 }
  },

  // 026. 思辨实在论 (Speculative Realism)
  {
    id: 'speculative_realism',
    name: '思辨实在论',
    englishName: 'Speculative Realism',
    category: 'philosophical',
    color: '#a855f7',
    period: '2007年伦敦大学金史密斯学院会议发端',
    eraYear: 2007,
    summary: '梅亚苏（Meillassoux）、哈曼创立，打破康德以来“关联主义”，主张直接思辨独立于人类意识的绝对客观世界。',
    elevatorPitch: '康德以来的哲学患上了“关联主义（Correlationism）”绝症：坚称我们只能谈论“人眼中的世界”，谈不了“没有人时的世界”。思辨实在论通过“祖先性（地球在生命出现前的45亿年实存）”撕破人类中心主义滤镜！',
    coreTenets: [
      '批判关联主义：实在完全独立于任何人类思维或观察者',
      '面向对象的本体论（OOO）：人类只是无数客体中微不足道的一种，物与物之间有其独立秘密联系',
      '偶然性是宇宙中唯一的必然法则，自然法则并非永恒不变',
    ],
    internetReality: '在21世纪科技哲学、当代艺术策展、科幻洛夫克拉夫特文学研究中席卷全球前沿学界。',
    dailyLifeManifestation: '仰望数亿光年外的死寂星系时，真切体会到宇宙完全不需要任何人类意识来证明其存在。',
    keyThinkers: [
      { name: '甘丹·梅亚苏 (Quentin Meillassoux)', era: '1967-', note: '《有限性之后》' },
      { name: '格拉汉姆·哈曼 (Graham Harman)', era: '1968-', note: '面向对象的本体论（OOO）创始人' },
      { name: '雷·布拉西耶 (Ray Brassier)', era: '1965-', note: '《解开虚无》' }
    ],
    famousQuote: { quote: '必须走出我们自身的封闭循环，重新找回向广大户外的敞开。', author: '梅亚苏' },
    spectrum: { political: 0.2, economic: 0.0, social: 0.7 },
    initialPosition: { x: 150, y: -320 }
  },

  // 027. 哲学实在主义 / 实在论 (Realism)
  {
    id: 'philosophical_realism',
    name: '哲学实在论',
    englishName: 'Philosophical Realism',
    category: 'philosophical',
    color: '#a855f7',
    period: '中世纪经院哲学至现代科学实在论',
    eraYear: 1200,
    summary: '认为“共相（Universals）”与外部物理实体真实存在，不以人类心智主观为转移。',
    elevatorPitch: '科学理论之所以有效，是因为它发现的电子、引力波、原子以及数学规律是客观世界中真正存在的实体。无论有没有人类观察，“真理”始终安坐在客观实在之巅。',
    coreTenets: [
      '本体论独立性：世界的存在与属性独立于任何认识主体',
      '真理符合论：命题为真当且仅当它与客观世界的事实相符合',
      '在中世纪共相争论中主张“共相存在于个别事物之中或先于个别事物”',
    ],
    internetReality: '现代科学家的默认哲学立场（绝大多数物理学家都是不自觉的科学实在论者）。',
    dailyLifeManifestation: '坚信太阳明天一定照常升起，且升起与否绝对不取决于任何人的祈祷或心理状态。',
    keyThinkers: [
      { name: '托马斯·阿奎那 (Thomas Aquinas)', era: '1225-1274', note: '温和实在论集大成者' },
      { name: '理查德·博伊德 (Richard Boyd)', era: '当代', note: '科学实在论无奇迹论证' }
    ],
    famousQuote: { quote: '科学理论若未捕捉到客观实在，其技术成功便只能归结为奇迹。', author: '普特南（无奇迹论证）' },
    spectrum: { political: -0.1, economic: 0.0, social: -0.1 },
    initialPosition: { x: -380, y: -380 }
  },

  // 028. 唯名主义 / 唯名论 (Nominalism)
  {
    id: 'nominalism',
    name: '唯名主义 / 唯名论',
    englishName: 'Nominalism',
    category: 'philosophical',
    color: '#a855f7',
    period: '中世纪晚期至近代经验论先声',
    eraYear: 1320,
    summary: '奥卡姆的威廉代表，认为只有个别具体事物真实存在，共相和抽象概念只是人类人为创造的“名称符号”。',
    elevatorPitch: '世上只有“这匹白马”和“那匹黑马”客观存在，根本不存在一个漂浮在天上的抽象“马性”！“马”只是人类为了分类交流方便而发明的标签。奥卡姆剃刀：如无必要，勿增实体！',
    coreTenets: [
      '个别事物是唯一的实体，共相（Universals）只是声音（Flatus vocis）与语词标记',
      '奥卡姆剃刀原理（Occam\'s Razor）：以最精炼假设解释现象',
      '瓦解了经院哲学的抽象繁琐经院神学，直接为近代经验科学扫清路障',
    ],
    internetReality: '现代批判本质主义（如“什么是真正的某某人”）时最常用的解构工具。',
    dailyLifeManifestation: '拒绝被“好学生”、“精英”、“成功人士”等空洞标签绑架，只关注每个具体活生生的人。',
    keyThinkers: [
      { name: '奥卡姆的威廉 (William of Ockham)', era: '约1287-1347', note: '提出奥卡姆剃刀' },
      { name: '罗瑟林 (Roscellinus)', era: '约1050-1125', note: '极端唯名论先驱' }
    ],
    famousQuote: { quote: '如无必要，勿增实体。', author: '奥卡姆的威廉' },
    spectrum: { political: 0.4, economic: 0.2, social: 0.6 },
    initialPosition: { x: -440, y: -360 }
  },

  // 029. 概念主义 (Conceptualism)
  {
    id: 'conceptualism',
    name: '概念主义',
    englishName: 'Conceptualism',
    category: 'philosophical',
    color: '#a855f7',
    period: '12世纪经院哲学争论',
    eraYear: 1120,
    summary: '阿贝拉尔提出，调和实在论与唯名论，认为共相既非独立实体，亦非空洞声音，而是心灵中的普遍概念。',
    elevatorPitch: '共相确实不是外界漂浮的永恒神物（反实在论），但也绝非随意吐出的空气噪音（反唯名论）；它是人类心智通过对个别事物相似特征进行理性抽象加工后，形成于心灵内部的普遍认知范畴。',
    coreTenets: [
      '共相作为概念存在于主体心灵中，并在客观个别事物中拥有相似性客观基础',
      '介于柏拉图极端实在论与极端唯名论之间的中道智慧',
      '为近代经验主义认识论概念抽象过程奠定中介桥梁',
    ],
    internetReality: '在认知心理学探讨人类“原型理论（Prototype Theory）”与机器学习范畴分类时被广泛继承。',
    dailyLifeManifestation: '孩子通过看很多只狗，在脑中自主聚类形成“狗”的概念模型。',
    keyThinkers: [
      { name: '彼得·阿贝拉尔 (Peter Abelard)', era: '1079-1142', note: '中世纪最杰出逻辑辩手' }
    ],
    famousQuote: { quote: '共相不是个别事物之外的实体，而是心灵用以指称事物的意义内涵。', author: '阿贝拉尔' },
    spectrum: { political: 0.1, economic: 0.0, social: 0.2 },
    initialPosition: { x: -370, y: -450 }
  },

  // 030. 一元主义 / 一元论 (Monism)
  {
    id: 'monism',
    name: '一元主义 / 一元论',
    englishName: 'Monism',
    category: 'philosophical',
    color: '#a855f7',
    period: '巴门尼德、斯宾诺莎至现代全息理论',
    eraYear: -480,
    summary: '主张宇宙万物归根结底源于同一种唯一的终极实体或本原。',
    elevatorPitch: '无论是唯物主义的一元论（万物皆物质）、唯心主义的一元论（万物皆精神），还是斯宾诺莎的神即自然论，核心皆坚信宇宙绝不是割裂成两张皮的拼盘，而是一个完整不可分割的终极整全。',
    coreTenets: [
      '宇宙所有现象归根结底统摄于单一最高本原之下',
      '表面上的多样性与对立面是唯一本体在不同层面的属性显现',
      '坚决反抗心物不可沟通的二元论深渊',
    ],
    internetReality: '现代量子物理学家追求的“万物理论（Theory of Everything）”本质上就是一种现代物理一元论抱负。',
    dailyLifeManifestation: '相信身心同源、身心合一，坚信宇宙万物休戚相关的整体生态和谐感。',
    keyThinkers: [
      { name: '巴门尼德 (Parmenides)', era: '约前515-前445', note: '“存在是一，不生不灭”' },
      { name: '斯宾诺莎 (Baruch Spinoza)', era: '1632-1677', note: '单一实体“神即自然”' }
    ],
    famousQuote: { quote: '存在是一，连续完整，充溢于一切之中。', author: '巴门尼德' },
    spectrum: { political: 0.0, economic: 0.0, social: 0.1 },
    initialPosition: { x: -600, y: -280 }
  },

  // 031. 中立一元论 (Neutral Monism)
  {
    id: 'neutral_monism',
    name: '中立一元论',
    englishName: 'Neutral Monism',
    category: 'philosophical',
    color: '#a855f7',
    period: '19世纪末至20世纪初',
    eraYear: 1912,
    summary: '詹姆士、罗素提出，世界终极本原既非精神亦非物质，而是一种中立的“纯粹经验”。',
    elevatorPitch: '把世界分成“精神”与“物质”是人为制造的假象！宇宙的基础砖块既不带意识也不带纯物理硬度，而是中立的经验原料。当它们按照物理学因果规律排列时叫“物质”，按心理学记忆联想排列时叫“心灵”。',
    coreTenets: [
      '终极本原在本体论上既非物理亦非心理，而是中立的',
      '心灵与物质只是同一种中立要素在不同组织关系下的投影',
      '彻底消解笛卡尔两百年来的心身相互作用（Mind-Body Interaction）死结',
    ],
    internetReality: '为现代信息哲学理论奠基——“信息（It from Bit）”本身没有质量，也不分主体客体，构成了宇宙最纯粹的中立底层。',
    dailyLifeManifestation: '数字代码0和1既可以在屏幕显示成物理图像，也可以被大脑解析为艺术情绪，其本身中立纯粹。',
    keyThinkers: [
      { name: '威廉·詹姆士 (William James)', era: '1842-1910', note: '纯粹经验一元论' },
      { name: '伯特兰·罗素 (Bertrand Russell)', era: '1872-1970', note: '《心的分析》' },
      { name: '恩斯特·马赫 (Ernst Mach)', era: '1838-1916', note: '感觉要素中立论' }
    ],
    famousQuote: { quote: '同一块经验砖瓦，既能砌成物理的大厦，也能砌成心理的房间。', author: '詹姆士' },
    spectrum: { political: 0.3, economic: 0.1, social: 0.5 },
    initialPosition: { x: -550, y: -200 }
  },

  // 032. 二元主义 / 二元论 (Dualism)
  {
    id: 'dualism',
    name: '二元主义 / 二元论',
    englishName: 'Dualism',
    category: 'philosophical',
    color: '#a855f7',
    period: '笛卡尔以降至当代哲学',
    eraYear: 1641,
    summary: '笛卡尔代表，认为心灵（思想广度）与物质（物理广延）是两个彼此独立、互不还原的实体。',
    elevatorPitch: '我有自由意志，能思考、能怀疑，这是非物质的心灵（Res Cogitans）；但我的肉身受重力支配、占有空间，这是机械物理的物质（Res Extensa）。两者泾渭分明，通过松果体交汇。',
    coreTenets: [
      '实体二元论：世界上存在两种不可互相还原的本质实体',
      '精神无空间广延但有能动思考，物质占空间有广延但无主观意识',
      '人是“机器中的幽灵（Ghost in the Machine）”',
    ],
    internetReality: '在日常直觉中根深蒂固（人人直觉都觉得自己灵魂与肉体不同），但在现代神经科学冲击下面临巨大解释危机。',
    dailyLifeManifestation: '相信灵魂转世、濒死体验、以及“肉体不过是灵魂在这个世界的临时容器”。',
    keyThinkers: [
      { name: '勒内·笛卡尔 (René Descartes)', era: '1596-1650', note: '《第一哲学沉思集》心物二元论' }
    ],
    famousQuote: { quote: '一方面我有清晰明确的心灵观念，另一方面我有清晰明确的肉体观念。', author: '笛卡尔' },
    spectrum: { political: 0.2, economic: 0.0, social: 0.2 },
    initialPosition: { x: -480, y: -100 }
  },

  // 033. 多元主义 / 多元论 (Pluralism)
  {
    id: 'pluralism',
    name: '多元主义 / 多元论',
    englishName: 'Pluralism',
    category: 'philosophical',
    color: '#a855f7',
    period: '古希腊恩培多克勒至伯林价值多元论',
    eraYear: 1958,
    summary: '认为宇宙本原或真理价值存在多种互不相通、不可互相还原或排序的终极形态。',
    elevatorPitch: '宇宙既非单一的精神，也非单一的物质，更非黑白二元。世界充满多元异质的实体；在人类社会中，自由与平等、正义与仁慈等人类核心价值彼此冲突且不可通约，不存在一劳永逸的最佳公式。',
    coreTenets: [
      '实在在本质上是多元、分散、异质且去中心化的',
      '拒斥任何形式的终极极权一统论（Monism）与宏大单一救世蓝图',
      '伯林价值多元论（Value Pluralism）：终极价值之间存在不可避免的悲剧性张力',
    ],
    internetReality: '现代自由主义民主制度抵御法西斯与极权主义最深沉的哲学防御工事。',
    dailyLifeManifestation: '承认工作与生活、自由与秩序无法同时拿满分，学会坦然接受权衡与妥协的艺术。',
    keyThinkers: [
      { name: '以赛亚·伯林 (Isaiah Berlin)', era: '1909-1997', note: '价值多元主义与两种自由概念' },
      { name: '威廉·詹姆士 (William James)', era: '1842-1910', note: '《多元的宇宙》' },
      { name: '恩培多克勒 (Empedocles)', era: '前490-前430', note: '四根说（火水土气）' }
    ],
    famousQuote: { quote: '有些终极价值是相互冲突的，试图强行将它们合而为一必然带来暴政。', author: '伯林' },
    spectrum: { political: 0.6, economic: 0.3, social: 0.8 },
    initialPosition: { x: -390, y: -20 }
  },

  // 034. 泛心主义 / 泛心论 (Panpsychism)
  {
    id: 'panpsychism',
    name: '泛心主义 / 泛心论',
    englishName: 'Panpsychism',
    category: 'philosophical',
    color: '#a855f7',
    period: '古希腊物活论至当代分析心智哲学',
    eraYear: 2006,
    summary: '主张意识或主观体验是宇宙所有物理物质最基本的内禀属性，无处不在。',
    elevatorPitch: '既然死寂冰冷的纯物质无法解释意识为何凭空产生，最合理的推论是：基本粒子本身就蕴含着极其微弱的原始意识（Proto-consciousness）！宇宙从电子到人类大脑都流淌着心智之光。',
    coreTenets: [
      '心智不是复杂系统晚期进化出来的变戏法，而是宇宙宇宙学基础常数',
      '避免唯物主义无法跨越的“感质鸿沟”与二元论无法解释的“因果死锁”',
      '面临“组合问题（Combination Problem）”：微观小意识如何拼接成宏观统一自我？',
    ],
    internetReality: '近年来在神经科学整合信息理论（IIT）与知名哲学家查尔默斯（David Chalmers）推动下迅速重返学术聚光灯。',
    dailyLifeManifestation: '在森林漫步时感受到树木与岩石独特的内在灵性节奏与存在尊严。',
    keyThinkers: [
      { name: '大卫·查尔默斯 (David Chalmers)', era: '1966-', note: '意识难问题提出者' },
      { name: '菲利普·戈夫 (Philip Goff)', era: '当代', note: '《伽利略的错误》泛心论倡导者' },
      { name: '阿尔弗雷德·怀特海 (Alfred North Whitehead)', era: '1861-1947', note: '过程哲学有机宇宙' }
    ],
    famousQuote: { quote: '如果意识不能无中生有，那么它在最微小的物质积木中早已存在。', author: '戈夫' },
    spectrum: { political: 0.4, economic: -0.2, social: 0.7 },
    initialPosition: { x: -300, y: -30 }
  },

  // 035. 决定论 / 宿命主义 (Determinism)
  {
    id: 'determinism',
    name: '决定论 / 宿命论',
    englishName: 'Determinism',
    category: 'philosophical',
    color: '#a855f7',
    period: '拉普拉斯妖至现代物理量子争辩',
    eraYear: 1814,
    summary: '认为一切事件（包括人类意志抉择）皆由在先原因与物理定律不可动摇地严格决定。',
    elevatorPitch: '拉普拉斯妖假想：只要掌握宇宙中所有原子的初速度与受力方程，过去与未来皆一清二楚！所谓“自由意志”，只是我们对神经冲动深层因果链条的无知所产生的自欺错觉。',
    coreTenets: [
      '因果闭合性：每一状态都是前一状态在物理定律下的必然演进',
      '相容主义（Compatibilism）：自由并非脱离因果，而是免于外部强迫',
      '对道德责任与刑罚正义基础提出颠覆性挑战',
    ],
    internetReality: '现代物理学中的量子概率与退相干现象为其提供了非决定论出口；但在认知神经科学上决定论依然势头强劲。',
    dailyLifeManifestation: '面对人生重大遗憾时，用“一切已成定局，换一万次也是同一结果”释怀放下。',
    keyThinkers: [
      { name: '拉普拉斯 (Pierre-Simon Laplace)', era: '1749-1827', note: '拉普拉斯决定论妖' },
      { name: '斯宾诺莎 (Baruch Spinoza)', era: '1632-1677', note: '“自由是对必然性的认识”' }
    ],
    famousQuote: { quote: '如果一颗抛向空中的石头有意识，它也会以为是自己决定飞行的。', author: '斯宾诺莎' },
    spectrum: { political: -0.3, economic: 0.0, social: -0.4 },
    initialPosition: { x: -220, y: 50 }
  }
];
