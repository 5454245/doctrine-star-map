import { IsmNode } from '../../types/ism';

// 第二卷：认识论、科学哲学与方法论 (036 – 070)
export const VOL2_ISMS: IsmNode[] = [
  // 036. 理性主义 / 唯理论 (Rationalism)
  {
    id: 'rationalism',
    name: '理性主义 / 唯理论',
    englishName: 'Rationalism',
    category: 'philosophical',
    color: '#a855f7',
    period: '17-18世纪欧陆哲学',
    eraYear: 1637,
    summary: '主张先天理性与逻辑演绎是可靠真理的唯一真正源泉，感官经验易被蒙蔽。',
    elevatorPitch: '感官会受骗（筷子在水里变弯），唯有清晰分明的数学公理与纯粹理性推导才能建构不可动摇的真理大厦。人类生来拥有天赋观念，认识就是理性的自然烛照。',
    coreTenets: [
      '天赋观念论：某些基本真理（逻辑、数学、神）先验根植于心智',
      '从自明的第一公理出发进行严格公理化演绎',
      '感官经验仅提供偶然素材，无法证明必然性与普遍性',
    ],
    internetReality: '常被误解为冷酷机械无情，实为推崇人类智力自律与独立于宗教启示的理性尊严。',
    dailyLifeManifestation: '遇到复杂难题时通过结构化第一性原理拆解，而非单凭经验直觉拍脑袋。',
    keyThinkers: [
      { name: '勒内·笛卡尔 (René Descartes)', era: '1596-1650', note: '“我思故我在”' },
      { name: '斯宾诺莎 (Baruch Spinoza)', era: '1632-1677', note: '几何学证明体系' },
      { name: '莱布尼茨 (G.W. Leibniz)', era: '1646-1716', note: '单子论与充足理由律' }
    ],
    famousQuote: { quote: '我思故我在。', author: '笛卡尔' },
    spectrum: { political: 0.2, economic: 0.0, social: 0.5 },
    initialPosition: { x: 50, y: -650 }
  },

  // 037. 笛卡尔主义 (Cartesianism)
  {
    id: 'cartesianism',
    name: '笛卡尔主义',
    englishName: 'Cartesianism',
    category: 'philosophical',
    color: '#a855f7',
    period: '17世纪中叶',
    eraYear: 1637,
    summary: '以普遍方法怀疑与“我思故我在”为认识绝对支点，推导心物二元与世界秩序。',
    elevatorPitch: '把所有的传统成见、感官直觉乃至“我是不是在做梦”全部扫地出门！最后唯一无法怀疑的，就是“正在怀疑的这个怀疑者本身必定存在”。以我思为阿基米德支点撬起整个哲学。',
    coreTenets: [
      '方法怀疑（Methodic Doubt）：怀疑到无可再疑之处即为自明真理',
      '清楚明确的观念（Clear and Distinct Ideas）作为判断真伪的标准',
      '几何分析与机械自然观的严格结合',
    ],
    internetReality: '现代计算机之父图灵与乔姆斯基转换生成语法深原理性主义的鼻祖源流。',
    dailyLifeManifestation: '破除所有未经严谨审视的前提预设，用白板心态重新复盘项目可行性。',
    keyThinkers: [
      { name: '笛卡尔 (Descartes)', era: '1596-1650', note: '《谈谈方法》《第一哲学沉思集》' }
    ],
    famousQuote: { quote: '绝不接受任何我没有明确确证为真的事物。', author: '笛卡尔' },
    spectrum: { political: 0.3, economic: 0.1, social: 0.4 },
    initialPosition: { x: 120, y: -720 }
  },

  // 038. 斯宾诺莎主义 (Spinozism)
  {
    id: 'spinozism',
    name: '斯宾诺莎主义',
    englishName: 'Spinozism',
    category: 'philosophical',
    color: '#a855f7',
    period: '17世纪荷兰',
    eraYear: 1677,
    summary: '用严格几何公理体系证明“神即自然”，单一绝对实体，自由是对必然性的理性认识。',
    elevatorPitch: '宇宙没有坐在宝座上的上帝，宇宙本身就是唯一无尽的实体（Deus sive Natura）。人类受激情摆布时是自然的奴隶，唯有通过理性洞彻万物的必然因果秩序，并在智性沉思中与宇宙相爱（Amor Dei Intellectualis），才能获得真正的宁静解脱。',
    coreTenets: [
      '泛神论一元论：世界上只有一个实体，思维与广延是其两种属性',
      '彻底的决定论：世上绝无偶然，万物依必然法则运动',
      '智性对神的爱与自由心境',
    ],
    internetReality: '爱因斯坦公开宣称：“我相信斯宾诺莎的上帝，那个在存在物有序的和谐中显现的神。”',
    dailyLifeManifestation: '面对逆境不抱怨不愤怒，像研究自然界打雷闪电一样冷静客观地审视他人脾气与世态炎凉。',
    keyThinkers: [
      { name: '巴鲁赫·斯宾诺莎 (Baruch Spinoza)', era: '1632-1677', note: '《伦理学》几何学演绎法' }
    ],
    famousQuote: { quote: '对于人类的行动，不要笑，不要哭，也不要恨，而要理解。', author: '斯宾诺莎' },
    spectrum: { political: 0.5, economic: 0.0, social: 0.8 },
    initialPosition: { x: 180, y: -640 }
  },

  // 039. 莱布尼茨乐观主义 (Philosophical Optimism)
  {
    id: 'leibnizian_optimism',
    name: '莱布尼茨乐观主义',
    englishName: 'Philosophical Optimism',
    category: 'philosophical',
    color: '#a855f7',
    period: '17-18世纪之交',
    eraYear: 1710,
    summary: '莱布尼茨提出单子论与神圣算计，“现存世界是一切可能世界中最好的世界”。',
    elevatorPitch: '上帝在创世时推演了无数种可能宇宙的草稿，最终选择将其创造出来的这一个，必定是包含了最大丰富多样性与最简洁法则统合的“最优解”；世间局部之恶是衬托整体神圣和谐的阴影。',
    coreTenets: [
      '充足理由律（Principle of Sufficient Reason）：任何事实的存在皆有其解释理由',
      '预定和谐（Pre-established Harmony）：单子没有窗户，神设定好了同步轨道',
      '最优世界神义论（Theodicy）：局部缺陷服务于宏观最高完善',
    ],
    internetReality: '被伏尔泰写进名作《老实人（Candide）》狠狠反讽嘲弄；但在现代最优算法与热力学熵极值中展现出惊人数学智慧。',
    dailyLifeManifestation: '相信“事出必有因”、“一切发生皆有利于我”的心灵慰藉疗愈信条。',
    keyThinkers: [
      { name: '戈特弗里德·莱布尼茨 (G.W. Leibniz)', era: '1646-1716', note: '微积分与二进制造物主' }
    ],
    famousQuote: { quote: '一切可能世界中最美好的世界。', author: '莱布尼茨' },
    spectrum: { political: 0.0, economic: 0.1, social: 0.1 },
    initialPosition: { x: 230, y: -700 }
  },

  // 040. 批判理性主义 (Critical Rationalism)
  {
    id: 'critical_rationalism',
    name: '批判理性主义',
    englishName: 'Critical Rationalism',
    category: 'philosophical',
    color: '#a855f7',
    period: '20世纪科学哲学与开放社会政治哲学',
    eraYear: 1945,
    summary: '卡尔·波普尔创立，认为理性的精髓不是证明自己绝对正确，而是无情地猜想与批判反驳。',
    elevatorPitch: '无论你看到过多少只白天鹅，都无法在逻辑上绝对证明“天鹅全是白的”；但只要看到一只黑天鹅，就能彻底打破旧假说。人类知识永远是试探性的猜想，通过不断试错与批评逼近真理。',
    coreTenets: [
      '反对归纳主义：科学始于问题与理论猜想，而非纯粹空白的观察积累',
      '反本质主义与反历史宿命论：人类未来不被任何客观历史铁律绑架',
      '捍卫“开放社会”：唯有允许多元竞争与自由批评，制度才能纠错演化',
    ],
    internetReality: '索罗斯将其运用于金融投资并创立“开放社会基金会”；是硅谷工程师与科学界反伪科学的核心旗帜。',
    dailyLifeManifestation: '做产品时推行快速A/B测试小步迭代，随时准备根据用户数据枪毙自己的原方案。',
    keyThinkers: [
      { name: '卡尔·波普尔 (Karl Popper)', era: '1902-1994', note: '《科学发现的逻辑》《开放社会及其敌人》' }
    ],
    famousQuote: { quote: '我们可能会犯错，你可能是对的，只要我们共同努力，就能更接近真理。', author: '波普尔' },
    spectrum: { political: 0.7, economic: 0.5, social: 0.8 },
    initialPosition: { x: 270, y: -600 }
  },

  // 041. 证伪主义 (Falsificationism)
  {
    id: 'falsificationism',
    name: '证伪主义',
    englishName: 'Falsificationism',
    category: 'philosophical',
    color: '#a855f7',
    period: '20世纪30年代起',
    eraYear: 1934,
    summary: '以“可否被经验反驳（可证伪性）”作为划定科学与非科学（伪科学）的唯一黄金分界线。',
    elevatorPitch: '一个永远正确、在任何情况下都能自圆其说的理论（如街头算命或庸俗星座），不是科学，而是巫术！真正的科学理论必须勇敢指出：“在何种具体观察结果出现时，我承认我自己是错的。”',
    coreTenets: [
      '可证伪性（Falsifiability）是科学理论的充分必要分水岭',
      '理论的不可反驳性绝非优点，而是最大的逻辑瑕疵',
      '科学是在“猜想—反驳—再猜想”的无尽革命中前进',
    ],
    internetReality: '几乎是当今互联网知乎、B站科技评测中辨识“伪科学、养生谣言与民科”的最高尚方宝剑。',
    dailyLifeManifestation: '评估某个商业承诺或医学传言时反问：“如果出现什么证据，你会承认你这套理论无效？”',
    keyThinkers: [
      { name: '卡尔·波普尔 (Karl Popper)', era: '1902-1994', note: '划界标准确立者' }
    ],
    famousQuote: { quote: '不能被任何可想象的事件所反驳的陈述，不是科学陈述。', author: '波普尔' },
    spectrum: { political: 0.6, economic: 0.3, social: 0.7 },
    initialPosition: { x: 330, y: -650 }
  },

  // 042. 经验主义 / 经验论 (Empiricism)
  {
    id: 'empiricism',
    name: '经验主义 / 经验论',
    englishName: 'Empiricism',
    category: 'philosophical',
    color: '#a855f7',
    period: '17-18世纪不列颠群岛哲学',
    eraYear: 1690,
    summary: '洛克、休谟代表，主张一切知识源于后天感官经验，“人心如同一块白板（Tabula Rasa）”。',
    elevatorPitch: '婴儿降生时大脑空无一物，没有任何与生俱来的抽象教条。我们的一切概念、思想与因果推论，无一不是感官在白板上刻画下的印象痕迹。没有感官经验的检验，理性便只是空转。',
    coreTenets: [
      '白板说：拒斥任何神秘的天赋观念，感觉是认识的源头',
      '简单观念经过心智反省、联想与组合形成复杂知识',
      '休谟怀疑论：因果关系本质上只是习惯性心理联想，无法逻辑证明',
    ],
    internetReality: '是现代实验物理学、大数据机器学习算法与统计归纳推断的哲学母胎。',
    dailyLifeManifestation: '相信事实数据和亲眼所见，反感闭门造车与空洞不落地的空中楼阁理论。',
    keyThinkers: [
      { name: '约翰·洛克 (John Locke)', era: '1632-1704', note: '白板说奠基人' },
      { name: '大卫·休谟 (David Hume)', era: '1711-1776', note: '《人类理解研究》温和怀疑' }
    ],
    famousQuote: { quote: '凡在理智之中的，无一不曾先在感官之中。', author: '经验论古老格言' },
    spectrum: { political: 0.5, economic: 0.4, social: 0.6 },
    initialPosition: { x: 320, y: -520 }
  },

  // 043. 感觉主义 (Sensationalism)
  {
    id: 'sensationalism',
    name: '感觉主义',
    englishName: 'Sensationalism',
    category: 'philosophical',
    color: '#a855f7',
    period: '18世纪法国启蒙时代',
    eraYear: 1754,
    summary: '孔狄亚克代表，将洛克的心智反省能力彻底剥离，把一切精神活动无保留地还原为感官刺激的变形。',
    elevatorPitch: '孔狄亚克假想了一尊大理石雕像：赋予它嗅觉（玫瑰花香），它便有了注意、记忆、比较与判断；赋予所有五感，整个人类全部精神殿堂便自动建立。意识不过是变形了的感觉总和。',
    coreTenets: [
      '彻底的感觉一元论：记忆、欲望与抽象逻辑全是感官感觉的化身',
      '拒斥洛克赋予心灵的主动“反省独立机能”',
      '推动了唯物主义感觉生理心理学的诞生',
    ],
    internetReality: '在短视频时代引起共鸣——高度密集的视听刺激是如何瞬间操纵和重塑人类注意力和神经回路的。',
    dailyLifeManifestation: '香薰精油、白噪音音频对心理情绪立竿见影的生理重塑效应。',
    keyThinkers: [
      { name: '孔狄亚克 (Étienne Bonnot de Condillac)', era: '1714-1780', note: '《感觉论》大理石雕像思想实验' },
      { name: '爱尔维修 (Helvétius)', era: '1715-1771', note: '教育万能与感官环境塑造' }
    ],
    famousQuote: { quote: '只要把感觉赋予大理石雕像，整个人类的灵魂便诞生了。', author: '孔狄亚克' },
    spectrum: { political: 0.3, economic: 0.0, social: 0.5 },
    initialPosition: { x: 390, y: -570 }
  },

  // 044. 实证主义 (Positivism)
  {
    id: 'positivism',
    name: '实证主义',
    englishName: 'Positivism',
    category: 'philosophical',
    color: '#a855f7',
    period: '19世纪中叶',
    eraYear: 1848,
    summary: '奥古斯特·孔德创立，拒斥神学与形而上学本体虚构，主张知识必须且仅限于可观察验证的事实。',
    elevatorPitch: '人类知识演进经历了三大阶段：神学阶段（靠神迹解释）、形而上学阶段（靠抽象实体解释），最终进入成熟的“实证阶段”——不再问“世界本质为什么”，只实证观察“现象如何发生”。',
    coreTenets: [
      '人类精神发展的三阶段定律：神学—形而上学—实证科学',
      '科学的任务是发现事物之间恒常联系的规律，以预见来指导行动',
      '奠定现代社会学独立科学门类（社会物理学）',
    ],
    internetReality: '至今仍是实证社会学、计量经济学与循证医学的最高操作规范。',
    dailyLifeManifestation: '看病时要求出具CT核磁化验单数据，不听玄虚莫测的口头揣测。',
    keyThinkers: [
      { name: '奥古斯特·孔德 (Auguste Comte)', era: '1798-1857', note: '实证哲学与现代社会学创立者' }
    ],
    famousQuote: { quote: '知以预见，见以预谋。', author: '孔德' },
    spectrum: { political: -0.1, economic: 0.1, social: 0.3 },
    initialPosition: { x: 260, y: -450 }
  },

  // 045. 经验批判主义 (Empiriocriticism)
  {
    id: 'empiriocriticism',
    name: '经验批判主义',
    englishName: 'Empiriocriticism',
    category: 'philosophical',
    color: '#a855f7',
    period: '19世纪末至20世纪初',
    eraYear: 1894,
    summary: '马赫、阿芬那留斯创立，主张以“思维经济原则”清除科学中的绝对时空等形而上学假定。',
    elevatorPitch: '科学定律不是上帝写在自然里的天书，而是人类为了用最少脑力记住最多事实而发明的“思维简写符”。一切超出纯粹感觉要素经验的预设（如牛顿的绝对时空、不可分割的质点）都应当被批判剔除。',
    coreTenets: [
      '思维经济原则（Principle of Economy of Thought）',
      '原则同格说：自我与环境相互依存，不可割裂出独立的孤立客体',
      '对经典物理学形而上学绝对时空观发起致命认识论清算',
    ],
    internetReality: '虽然在列宁的哲学著作中遭遇严厉阻击，但在量子力学矩阵力学与相对论创立中起到了决定性思想助产作用。',
    dailyLifeManifestation: '设计软件架构时奉行极简KISS原则，砍掉一切用不上的过度设计假定。',
    keyThinkers: [
      { name: '恩斯特·马赫 (Ernst Mach)', era: '1838-1916', note: '批判经典力学力与时空' },
      { name: '理查德·阿芬那留斯', era: '1843-1896', note: '《纯粹经验批判》' }
    ],
    famousQuote: { quote: '科学的目的在于以最小的思维代价，掌握尽可能多的事实经验。', author: '马赫' },
    spectrum: { political: 0.2, economic: 0.0, social: 0.4 },
    initialPosition: { x: 330, y: -460 }
  },

  // 046. 逻辑实证主义 / 逻辑经验主义 (Logical Positivism)
  {
    id: 'logical_positivism',
    name: '逻辑实证主义',
    englishName: 'Logical Positivism',
    category: 'philosophical',
    color: '#a855f7',
    period: '20世纪20-30年代维也纳学派',
    eraYear: 1929,
    summary: '维也纳学派将经验主义与现代数理逻辑结合，提出“可证实性原则”，宣告形而上学全是无意义废话。',
    elevatorPitch: '一个命题要么是分析真的（如数学逻辑重言式：单身汉是未婚者），要么在经验上可以被证实（如外面正在下雨）；除此之外关于灵魂、上帝、宇宙本质的宏大哲学命题，既无法证实又非重言式，纯属毫无认知意义的语词垃圾！',
    coreTenets: [
      '证实原则（Verification Criterion of Meaning）：意义即证实方法',
      '形而上学之清除：哲学不是建构体系，而是通过语言逻辑分析澄清思维混乱',
      '统一科学运动：一切经验学科终归还原为物理语言',
    ],
    internetReality: '最终因“证实原则自身既非重言式也无法被经验证实”而陷入自我指涉困境崩溃，但它催生了席卷英美的现代分析哲学传统。',
    dailyLifeManifestation: '跟人辩论时要求对方：“请说人话，给出具体判断指标，不要堆砌毫无定义的空洞大词。”',
    keyThinkers: [
      { name: '莫里茨·石里克 (Moritz Schlick)', era: '1882-1936', note: '维也纳学派核心发起人' },
      { name: '鲁道夫·卡尔纳普 (Rudolf Carnap)', era: '1891-1970', note: '《世界的逻辑构造》' },
      { name: 'A.J. 艾耶尔 (A.J. Ayer)', era: '1910-1989', note: '《语言、真理与逻辑》' }
    ],
    famousQuote: { quote: '对于不可言说之物，必须保持沉默。', author: '维特根斯坦（早期启发者）' },
    spectrum: { political: 0.3, economic: 0.0, social: 0.6 },
    initialPosition: { x: 400, y: -490 }
  },

  // 047. 操作主义 (Operationalism)
  {
    id: 'operationalism',
    name: '操作主义',
    englishName: 'Operationalism',
    category: 'philosophical',
    color: '#a855f7',
    period: '1927年由诺贝尔物理学家布里奇曼提出',
    eraYear: 1927,
    summary: '认为任何科学概念的真正含义，完全且严格等同于测量或生成它的实验操作步骤。',
    elevatorPitch: '什么是“长度”？长度不是什么抽象玄妙的实体，长度就是你拿一把尺子从A端比划到B端的一连串操作规范；没有操作步骤的概念就是幽灵。一个概念若无法给出具体测量程序，便没有任何物理科学意义。',
    coreTenets: [
      '概念等同于一系列对应的操作（Operations）',
      '不同的测量操作意味着不同概念（尺子测出的长度与雷达测出的长度在严格定义上不同）',
      '防止物理学引入无法被实验检验的幽灵变量',
    ],
    internetReality: '奠定了现代心理学量表测量、社会学问卷变量“操作化定义（Operationalization）”的全部方法论根基。',
    dailyLifeManifestation: '公司考核绩效时把抽象的“团队凝聚力”直接操作化定义为“员工主动周报提交率与跨组答疑次数”。',
    keyThinkers: [
      { name: '珀西·布里奇曼 (Percy Bridgman)', era: '1882-1961', note: '《现代物理学的逻辑》' }
    ],
    famousQuote: { quote: '我们所指的任何概念，不过是一组具体操作而已。', author: '布里奇曼' },
    spectrum: { political: 0.1, economic: 0.1, social: 0.3 },
    initialPosition: { x: 470, y: -520 }
  },

  // 048. 科学主义 (Scientism)
  {
    id: 'scientism',
    name: '唯科学主义 / 科学主义',
    englishName: 'Scientism',
    category: 'philosophical',
    color: '#a855f7',
    period: '20世纪至今',
    eraYear: 1940,
    summary: '认为自然科学实证方法是获取全人类一切有效知识的唯一合法途径，贬低人文与伦理直觉。',
    elevatorPitch: '哲学、艺术、宗教与伦理学不过是人类未成熟时期的过渡产物；唯有通过数学建模、双盲实验与实证证据取得的自然科学结论，才配称作真理。一切社会与心理问题最终都将由科技和自然科学彻底解决。',
    coreTenets: [
      '自然科学方法具有全域适用性与排他性霸权',
      '非科学认知方式（直觉、美学体验、伦理感悟）被视为非理性或无意义',
      '技术与科学进步是人类社会通往终极救赎的唯一真理之道',
    ],
    internetReality: '网络科技狂热者常用科学主义武器打击传统民俗与人文思辨，哈耶克等学者则专门著书批判其对社会人性的傲慢盲区。',
    dailyLifeManifestation: '遇事必问“有发过Nature/Science论文吗？”，拒绝承认任何尚未被实验数据量化的人类深层情感体验。',
    keyThinkers: [
      { name: 'E.O. 威尔逊 (E.O. Wilson)', era: '1929-2021', note: '《知识大融通》主张社会人文化入生物学' },
      { name: '理查德·道金斯 (Richard Dawkins)', era: '1941-', note: '新无神论与纯实证论代表' }
    ],
    famousQuote: { quote: '如果有什么事情是不可用科学方法衡量的，那它大概率不值得我们去了解。', author: '科学主义典型宣言' },
    spectrum: { political: 0.1, economic: 0.3, social: 0.5 },
    initialPosition: { x: 440, y: -430 }
  },

  // 049. 建构经验主义 (Constructive Empiricism)
  {
    id: 'constructive_empiricism',
    name: '建构经验主义',
    englishName: 'Constructive Empiricism',
    category: 'philosophical',
    color: '#a855f7',
    period: '1980年范·弗拉森提出',
    eraYear: 1980,
    summary: '范·弗拉森提出，科学的目的不是追求不可观察微观领域的“绝对为真”，而是追求“经验上的适当性（Empirical Adequacy）”。',
    elevatorPitch: '科学理论不需要去证明电子或夸克真的实体存在！科学的目的只是提供一个能够精准预测所有可见实验现象的数学模型。只要它在可观察的世界里好用就行，我们只需接纳它“经验适当”，无需迷信它揭示了上帝秘密。',
    coreTenets: [
      '划清“可观察物”与“不可观察物”的认知边界',
      '对不可观察微观实体的真理性保持反实在论的不可知悬置态度',
      '反对逻辑实证主义的极端无意义论，也反对科学实在论的本体自负',
    ],
    internetReality: '在现代量子力学“闭嘴并且计算（Shut up and calculate）”的哥本哈根诠释中获得最完美的对应注脚。',
    dailyLifeManifestation: '开发复杂的机器学习推荐黑盒模型时，只要预测点击率极高即可，不纠结模型内部参数的“终极物理实在意义”。',
    keyThinkers: [
      { name: '巴斯·范·弗拉森 (Bas van Fraassen)', era: '1941-', note: '《科学的形象》现代反实在论代表作' }
    ],
    famousQuote: { quote: '科学的目的不是给予我们真实的故事，而是给予经验上适宜的模型。', author: '范·弗拉森' },
    spectrum: { political: 0.3, economic: 0.0, social: 0.6 },
    initialPosition: { x: 500, y: -470 }
  },

  // 050. 实用主义 (Pragmatism)
  {
    id: 'pragmatism',
    name: '实用主义',
    englishName: 'Pragmatism',
    category: 'philosophical',
    color: '#a855f7',
    period: '19世纪末美国发端至今',
    eraYear: 1878,
    summary: '皮尔士、詹姆士创立，主张观念的意义与真理性取决于它在行动中所产生的实际效果。',
    elevatorPitch: '真理不是高悬于天堂的抽象石碑，而是能够引导我们成功行动的假说。如果一个信念在你的生活中起作用、能帮助你解决具体问题并产生良好后果，它在实用意义上就是“真的”。行之有效即真理！',
    coreTenets: [
      '实用主义准则：澄清概念只需考虑它可能引起的一切实际可察差异',
      '真理的工具性与动态生成：真理是实践中被制造出来的，而非被动发现的',
      '可错论与反基础主义：知识在持续经验探索中自我修正',
    ],
    internetReality: '常被庸俗化为“只要赚钱就是真理、投机取巧”，实质上是美国最深厚的探究共同体与民主协商认识论。',
    dailyLifeManifestation: '不争辩无休止的纯形而上学定义，直接问：“按照你的方案做，明天具体会有什么不同？”',
    keyThinkers: [
      { name: '查尔斯·桑德斯·皮尔士 (C.S. Peirce)', era: '1839-1914', note: '实用主义准则奠基人' },
      { name: '威廉·詹姆士 (William James)', era: '1842-1910', note: '真理的兑现价值（Cash Value）' },
      { name: '约翰·杜威 (John Dewey)', era: '1859-1952', note: '工具主义与民主教育学' }
    ],
    famousQuote: { quote: '真理是在实践中被证实的观念，它具有可兑现的价值。', author: '詹姆士' },
    spectrum: { political: 0.3, economic: 0.2, social: 0.5 },
    initialPosition: { x: 280, y: -360 }
  },

  // 051. 实效主义 (Pragmaticism)
  {
    id: 'pragmaticism',
    name: '实效主义',
    englishName: 'Pragmaticism',
    category: 'philosophical',
    color: '#a855f7',
    period: '1905年由皮尔士重新命名',
    eraYear: 1905,
    summary: '皮尔士为抗议詹姆士将实用主义通俗化庸俗化，专门造词创立的严格数理逻辑符号分支。',
    elevatorPitch: '皮尔士宣称造出“Pragmaticism”这个丑得没人想偷的名字！他强调概念的意义不是带来某种主观舒服的情绪体验，而是指向一个经过无限探究共同体严格科学实验验证后形成的“客观习惯性行动准则”。',
    coreTenets: [
      '客观科学探究共同体（Community of Inquiry）的长期收敛极限即为真理',
      '三元符号学（符号表现体、对象、解释项）的奠基',
      '严拒詹姆士式的个人主观主义兑现，强调普遍逻辑规律',
    ],
    internetReality: '计算机科学符号学、现代统计假设检验与人工智能知识图谱的核心先驱。',
    dailyLifeManifestation: '制定标准化实验协议，确保任何合格研究员重复实验均能获得相同的操作结果。',
    keyThinkers: [
      { name: '查尔斯·桑德斯·皮尔士', era: '1839-1914', note: '美国最伟大的逻辑学家与符号学家' }
    ],
    famousQuote: { quote: '真理是那些注定最终会被所有从事科学探究的人所共同认可的意见。', author: '皮尔士' },
    spectrum: { political: 0.2, economic: 0.1, social: 0.4 },
    initialPosition: { x: 350, y: -390 }
  },

  // 052. 工具主义 (Instrumentalism)
  {
    id: 'instrumentalism',
    name: '工具主义',
    englishName: 'Instrumentalism',
    category: 'philosophical',
    color: '#a855f7',
    period: '20世纪前半叶杜威创立',
    eraYear: 1925,
    summary: '约翰·杜威创立，主张逻辑概念、科学理论与道德准则都只是人类适应环境、摆脱困境的“适应工具”。',
    elevatorPitch: '思维始于疑惑与麻烦（困境情境）。就像扳手和钳子用来修理水管一样，理论是人类为了把混乱的现实改造为有序的和谐而制造出来的“思维工具”。工具无所谓永恒对错，只有好用与不好用之别。',
    coreTenets: [
      '思维是机体适应与改造不确定环境的工具性探索活动',
      '做中学（Learning by doing）：知识在实际操作解决问题中习得',
      '民主不仅是投票制度，更是社区共同体解决冲突的最佳工具生活方式',
    ],
    internetReality: '对现代教育改革（PBL项目制学习、探究式学习）产生全球性主导影响。',
    dailyLifeManifestation: '学习新技能时直接通过动手做项目来掌握，而不是死记硬背枯燥理论手册。',
    keyThinkers: [
      { name: '约翰·杜威 (John Dewey)', era: '1859-1952', note: '《确定性的寻求》《民主与教育》' }
    ],
    famousQuote: { quote: '教育即生活，教育即生长，教育即经验的不断改造。', author: '杜威' },
    spectrum: { political: 0.4, economic: -0.2, social: 0.7 },
    initialPosition: { x: 380, y: -310 }
  },

  // 053. 新实用主义 (Neo-pragmatism)
  {
    id: 'neo_pragmatism',
    name: '新实用主义',
    englishName: 'Neo-pragmatism',
    category: 'philosophical',
    color: '#a855f7',
    period: '20世纪70年代至今',
    eraYear: 1979,
    summary: '理查德·罗蒂创立，结合语言哲学放弃“自然之镜”的表象主义认识论，主张哲学是平等的无尽对话。',
    elevatorPitch: '心智根本不是反映客观世界的一面镜子！不要再幻想着找到某种能直通客观上帝视角的“绝对基石词汇”。真理只是人类群体内部能够达成自由同行的谈话共识，哲学家应是博学的文化对话协调人。',
    coreTenets: [
      '反表象主义（Anti-representationalism）：语言不是指涉客体的标签，而是用来应付世界的工具',
      '自由主义反讽者（Liberal Ironist）：坚守民主自由信念，同时深知信念没有形而上学特权担保',
      '以“团结（Solidarity）”取代对“客观性”的虚妄追求',
    ],
    internetReality: '罗蒂因打破分析与欧陆哲学的门户藩篱并拥抱后现代自由主义，在学界引发旷日持久的巨浪辩论。',
    dailyLifeManifestation: '不再执着于“客观唯一的绝对正确答案”，而是通过真诚沟通建立彼此理解与同理心。',
    keyThinkers: [
      { name: '理查德·罗蒂 (Richard Rorty)', era: '1931-2007', note: '《哲学与自然之镜》' },
      { name: '希拉里·普特南 (Hilary Putnam)', era: '1926-2016', note: '内在实在论与新实用主义' }
    ],
    famousQuote: { quote: '照顾好自由，真理就会照顾好它自己。', author: '罗蒂' },
    spectrum: { political: 0.6, economic: 0.1, social: 0.8 },
    initialPosition: { x: 440, y: -350 }
  },

  // 054. 怀疑主义 (Skepticism)
  {
    id: 'skepticism',
    name: '怀疑主义',
    englishName: 'Skepticism',
    category: 'philosophical',
    color: '#a855f7',
    period: '古希腊皮浪主义至休谟',
    eraYear: -320,
    summary: '质疑人类获取任何绝对确定知识的可能性，主张对终极判断悬搁（Epoché）以获内心宁静。',
    elevatorPitch: '每一种看似天衣无缝的言之成理，背后都能找到同样有力的反驳证据。既然我们无法跳出自身认知机制来验证认知的保真度，不如悬置一切教条判断。不妄下断言，灵魂便得安宁（Ataraxia）。',
    coreTenets: [
      '悬置判断（Epoché）：对无法证明的真理问题保持不判断',
      '反教条主义：对所有宣称掌握终极真理的狂妄学派发起审问',
      '心境宁静（Ataraxia）作为怀疑生活的终极精神奖赏',
    ],
    internetReality: '信息过载时代对抗谣言、伪科学与信息茧房的第一道免疫抗体。',
    dailyLifeManifestation: '在看到惊天爆料反转新闻时“让子弹飞一会儿”，绝不急于站队表态。',
    keyThinkers: [
      { name: '皮浪 (Pyrrho)', era: '约前360-前270', note: '古希腊皮浪学派创始人' },
      { name: '塞克斯都·恩披里柯', era: '约160-210', note: '《皮浪学说概要》' },
      { name: '大卫·休谟 (David Hume)', era: '1711-1776', note: '对归纳与因果律的怀疑论重击' }
    ],
    famousQuote: { quote: '对于任何命题，我们都可以提出相反且同样成立的论据。', author: '塞克斯都' },
    spectrum: { political: 0.5, economic: 0.2, social: 0.7 },
    initialPosition: { x: 200, y: -450 }
  },

  // 055. 不可知主义 / 不可知论 (Agnosticism)
  {
    id: 'agnosticism',
    name: '不可知主义 / 不可知论',
    englishName: 'Agnosticism',
    category: 'philosophical',
    color: '#a855f7',
    period: '1869年托马斯·赫胥黎造词',
    eraYear: 1869,
    summary: '主张人类理性受认识能力局限，原则上无法确知神是否存在或终极实在的真相。',
    elevatorPitch: '既不狂妄地宣称“上帝必定存在”（宗教有神论），也不盲目下结论“绝对没有神”（教条无神论）。我们坦承证据不足：“我不知道，且人类目前的理性工具根本没有能力知道。”',
    coreTenets: [
      '证据不足时保持理智的诚实：不承认未经经验检验的超验命题',
      '严格区分“主观信仰”与“客观确凿知识”',
      '认识边界论：超验本体问题不在经验科学的射程之内',
    ],
    internetReality: '现代绝大多数理性知识分子、程序员与受过良好科学训练公民的真实底色。',
    dailyLifeManifestation: '谈及宇宙大爆炸之前有什么、是否有死后灵魂时，平静表示“我们不知道”。',
    keyThinkers: [
      { name: '托马斯·赫胥黎 (T.H. Huxley)', era: '1825-1895', note: '达尔文的斗犬，造词Agnostic' },
      { name: '康德 (Immanuel Kant)', era: '1724-1804', note: '划定理智的边界' }
    ],
    famousQuote: { quote: '不要假装你拥有任何你无法拿出合理论据证明的确定知识。', author: '赫胥黎' },
    spectrum: { political: 0.4, economic: 0.1, social: 0.6 },
    initialPosition: { x: 140, y: -420 }
  },

  // 056. 直觉主义 (Intuitionism)
  {
    id: 'intuitionism',
    name: '直觉主义',
    englishName: 'Intuitionism',
    category: 'philosophical',
    color: '#a855f7',
    period: '20世纪初生命哲学与数学哲学',
    eraYear: 1907,
    summary: '柏格森（生命绵延直觉）与布劳威尔（数学直觉主义），主张直接纯粹直觉先于并高于死板逻辑。',
    elevatorPitch: '理性逻辑就像电影胶片，把活生生的流动生命切碎成一帧帧静止冰冷的死物。唯有直觉能钻入事物内部，直接把握“生命的绵延（Durée）”与涌流冲力。在数学中，对象只有被心智实际构造出来才是实在的。',
    coreTenets: [
      '柏格森生命哲学：直觉是本能通过反思升华为对生命冲动的同情共感',
      '布劳威尔数学直觉主义：拒绝排中律在无限集合上的盲目应用，主张构造性证明',
      '反抗智力对生命的工具性空间化与机械化扭曲',
    ],
    internetReality: '在东方禅宗顿悟体验、现代艺术创造力以及对AI机器算法缺乏灵光反思中大放异彩。',
    dailyLifeManifestation: '艺术家在画布前无需精密计算构图，凭借难以言说的瞬间通感一挥而就。',
    keyThinkers: [
      { name: '亨利·柏格森 (Henri Bergson)', era: '1859-1941', note: '《创造进化论》诺贝尔文学奖得主' },
      { name: 'L.E.J. 布劳威尔 (L.E.J. Brouwer)', era: '1881-1966', note: '数学直觉主义学派创始人' }
    ],
    famousQuote: { quote: '智力让我们把握物质，唯有直觉让我们深入生命的心跳。', author: '柏格森' },
    spectrum: { political: 0.3, economic: 0.0, social: 0.8 },
    initialPosition: { x: 70, y: -380 }
  },

  // 057. 现象学主义 (Phenomenology)
  {
    id: 'phenomenology',
    name: '现象学',
    englishName: 'Phenomenology',
    category: 'philosophical',
    color: '#a855f7',
    period: '20世纪初胡塞尔创立',
    eraYear: 1900,
    summary: '胡塞尔创立，口号“回到事物本身”，通过现象学悬置（Epoché）精确描述纯粹意识体验结构。',
    elevatorPitch: '把所有的科学理论、物理预设与世俗成见全部“放入括号（悬置）”，只专注于意识当下呈现出的第一人称直接纯粹体验。意识永远是“对某物的意识（意向性 Intentionality）”，由此奠定全部知识的自明地基。',
    coreTenets: [
      '回到事物本身（Zu den Sachen selbst）：排除预设，如其所现地直观本质',
      '意向性（Intentionality）：意识活动（Noesis）与意识对象（Noema）的统一',
      '生活世界（Lebenswelt）：被自然科学抽象数学化掩盖的原始感性大地',
    ],
    internetReality: '催生了海德格尔存在论、梅洛-庞蒂身体现象学与萨特存在主义，是欧陆哲学的参天大树。',
    dailyLifeManifestation: '品尝一口咖啡时，不分析其咖啡因分子，全身心沉浸在香气与味觉的自明呈现之中。',
    keyThinkers: [
      { name: '埃德蒙德·胡塞尔 (Edmund Husserl)', era: '1859-1938', note: '《逻辑研究》《纯粹现象学通论》' },
      { name: '莫里斯·梅洛-庞蒂 (Maurice Merleau-Ponty)', era: '1908-1961', note: '《知觉现象学》身体图式' }
    ],
    famousQuote: { quote: '回到事物本身！', author: '胡塞尔' },
    spectrum: { political: 0.3, economic: 0.0, social: 0.6 },
    initialPosition: { x: 120, y: -320 }
  },

  // 058. 诠释学 / 解释学主义 (Hermeneutics)
  {
    id: 'hermeneutics',
    name: '诠释学 / 解释学',
    englishName: 'Hermeneutics',
    category: 'philosophical',
    color: '#a855f7',
    period: '从圣经注释演进至伽达默尔哲学解释学',
    eraYear: 1960,
    summary: '海德格尔、伽达默尔代表，认为理解不是旁观者复制事实，而是历史前见下的“视域融合”。',
    elevatorPitch: '没有无前设的纯白解读！我们带着自己的历史经验与偏见走进文本，理解是读者视域与文本历史视域的撞击与“视域融合”。解释学循环：整体通过局部理解，局部在整体中显现。理解即生存。',
    coreTenets: [
      '视域融合（Horizontverschmelzung）：历史传承物与当下理解者的辩证交融',
      '合法的前见（Prejudices）：偏见不是错误的罪过，而是理解展开的先行条件',
      '语言是存在的家园，能够被理解的存在就是语言',
    ],
    internetReality: '法律判决（宪法原旨派 vs 动态解释派）与文学批评不可替代的哲学法宝。',
    dailyLifeManifestation: '重读十几岁时看过的经典名著，发现自己读出的全是自己这十几年人生沧桑的倒影。',
    keyThinkers: [
      { name: '汉斯-格奥尔格·伽达默尔', era: '1900-2002', note: '《真理与方法》' },
      { name: '威廉·狄尔泰 (Wilhelm Dilthey)', era: '1833-1911', note: '精神科学方法论奠基' },
      { name: '保罗·利科 (Paul Ricœur)', era: '1913-2005', note: '文本诠释与叙事认同' }
    ],
    famousQuote: { quote: '能够被理解的存在就是语言。', author: '伽达默尔' },
    spectrum: { political: 0.3, economic: 0.0, social: 0.6 },
    initialPosition: { x: 180, y: -350 }
  },

  // 059. 结构主义 (Structuralism)
  {
    id: 'structuralism',
    name: '结构主义',
    englishName: 'Structuralism',
    category: 'philosophical',
    color: '#a855f7',
    period: '20世纪50-60年代法国全盛',
    eraYear: 1958,
    summary: '索绪尔、列维-斯特劳斯创立，认为人类语言、亲属神话与社会表象由深层潜意识二元对立结构决定。',
    elevatorPitch: '不要迷信个体的主观自由意志！你以为是你自己在说话，实际上是语言的深层结构在通过你说话。音素的差异网络决定了词义，亲属关系的交换网络决定了部落形态。人不过是结构交叉点上的一个节点。',
    coreTenets: [
      '共时性研究优于历时性：整体系统的结构关系先于单个要素',
      '能指（Signifier）与所指（Signified）的任意性与二元对立网络',
      '反人道主义主体论：主体的幻觉由无意识结构生成（“人的终结”）',
    ],
    internetReality: '彻底革新了现代人类学、叙事学与符号学，直接拉开了法国黄金一代“高阶理论”大幕。',
    dailyLifeManifestation: '看好莱坞超级英雄电影，一眼看破所有剧情无非是“正义/邪恶”、“父/子”神话结构的排列组合。',
    keyThinkers: [
      { name: '费尔迪南·德·索绪尔', era: '1857-1913', note: '现代语言学之父' },
      { name: '克劳德·列维-斯特劳斯', era: '1908-2009', note: '结构人类学巨擘' },
      { name: '雅克·拉康 (Jacques Lacan)', era: '1901-1981', note: '“无意识如语言般结构而成”' }
    ],
    famousQuote: { quote: '在语言中只有差异，没有肯定性的实体。', author: '索绪尔' },
    spectrum: { political: 0.2, economic: -0.2, social: 0.7 },
    initialPosition: { x: 100, y: -200 }
  },

  // 060. 后结构主义 (Post-structuralism)
  {
    id: 'post_structuralism',
    name: '后结构主义',
    englishName: 'Post-structuralism',
    category: 'philosophical',
    color: '#a855f7',
    period: '1968年法国五月风暴之后',
    eraYear: 1968,
    summary: '福柯、德勒兹代表，反叛静态二元结构，揭示权力、欲望、话语与差异的无尽流动。',
    elevatorPitch: '结构主义妄图建立一种科学的“终极超级结构”，这本身就是一种微观权力的规训！世上没有固定的中心与闭合结构，只有差异的狂舞、话语的争夺与欲望的机器。主体是权力规训的产物，意义永远在延异。',
    coreTenets: [
      '反中心论（Decentering）：破除形而上学第一原理与稳定二元对立',
      '权力与知识不可分割（福柯的“微观权力运作与全景敞视机制”）',
      '多重的游牧游民思维（Nomadology），反对总体化霸权',
    ],
    internetReality: '在文化研究、性别理论与文学解构批评中拥有无可撼动的崇高统治地位。',
    dailyLifeManifestation: '审视学校、医院乃至智能手环时，警惕其背后无处不在的健康数据打分与隐形微观规训。',
    keyThinkers: [
      { name: '米歇尔·福柯 (Michel Foucault)', era: '1926-1984', note: '《规训与惩罚》《疯癫与文明》' },
      { name: '吉尔·德勒兹 (Gilles Deleuze)', era: '1925-1995', note: '根茎（Rhizome）与块茎理论' }
    ],
    famousQuote: { quote: '人就像大海边沙滩上画出的一张脸，正在被涌来的浪潮无情抹去。', author: '福柯' },
    spectrum: { political: 0.8, economic: -0.4, social: 0.95 },
    initialPosition: { x: 160, y: -150 }
  },

  // 061. 解构主义 (Deconstructionism)
  {
    id: 'deconstructionism',
    name: '解构主义',
    englishName: 'Deconstructionism',
    category: 'philosophical',
    color: '#a855f7',
    period: '20世纪60年代末至今',
    eraYear: 1967,
    summary: '雅克·德里达创立，揭示文本内部裂隙与矛盾，批判西方两千年“逻各斯中心主义”。',
    elevatorPitch: '西方传统总妄图抓住一个最终在场的“第一因/逻各斯/本源”，但意义其实永远处于“延异（Différance）”之中——既在空间上互有差异，又在时间上被无限推迟。文本总在自我拆台，没有终极权威定论。',
    coreTenets: [
      '批判在场形而上学与语音中心主义（Phonocentrism）',
      '延异（Différance）：意义永远在语境链条中滑移，不可彻底锁定',
      '“文本之外无一物（Il n\'y a pas de hors-texte）”',
    ],
    internetReality: '常被保守派痛斥为“无理取闹的虚无把戏”，但也彻底解放了当代先锋建筑设计与文本批评视角。',
    dailyLifeManifestation: '从一部官方宣传片中，找出它刻意遮蔽遗漏的边缘小角色，发现叙事底层无法自圆其说的缝隙。',
    keyThinkers: [
      { name: '雅克·德里达 (Jacques Derrida)', era: '1930-2004', note: '《论文字学》《声音与现象》' }
    ],
    famousQuote: { quote: '解构不是破坏，而是显露那自以为坚不可摧的建筑是如何自行产生裂纹的。', author: '德里达' },
    spectrum: { political: 0.7, economic: -0.2, social: 0.95 },
    initialPosition: { x: 220, y: -120 }
  },

  // 062. 后现代主义 (Postmodernism)
  {
    id: 'postmodernism',
    name: '后现代主义',
    englishName: 'Postmodernism',
    category: 'cultural',
    color: '#f59e0b',
    period: '20世纪70年代后至今',
    eraYear: 1979,
    summary: '利奥塔、鲍德里亚代表，拒斥一切理性解放与历史进步的“宏大叙事”，沉浸于拟像与碎片化拼贴。',
    elevatorPitch: '启蒙理性的宏大叙事破产了！人类不会迈入某个天下大同的黄金乌托邦。世界变成了迪士尼乐园式的“拟像（Simulacra）”，符号比现实更像现实（超真实 Hyperreality）。剩下的是反讽、戏仿、拼贴与多元微型叙事。',
    coreTenets: [
      '对宏大叙事的极度怀疑（Incredulity towards metanarratives）',
      '超真实与拟像（Simulacra）：现实被消费主义符号全面吞噬',
      '反抗现代性对理性和效率的标准化专政，拥抱碎片化异质性',
    ],
    internetReality: '几乎就是当今短视频、迷因文化（Meme）、弹幕戏仿、赛博反讽现实的精准文化画像。',
    dailyLifeManifestation: '打卡网红店并不在乎食物好不好吃，只在乎拍照发到社交平台上的“滤镜符号”是否逼真高级。',
    keyThinkers: [
      { name: '让-弗朗索瓦·利奥塔', era: '1924-1998', note: '《后现代状态》' },
      { name: '让·鲍德里亚 (Jean Baudrillard)', era: '1929-2007', note: '《拟像与仿真》《消费社会》' },
      { name: '弗雷德里克·詹姆逊', era: '1934-2024', note: '晚期资本主义文化逻辑' }
    ],
    famousQuote: { quote: '拟像从来不是掩盖真理的东西，它就是真理掩盖无物存在的事实。', author: '鲍德里亚' },
    spectrum: { political: 0.5, economic: 0.0, social: 0.9 },
    initialPosition: { x: 280, y: -90 }
  },

  // 063. 相对主义 (Relativism)
  {
    id: 'relativism',
    name: '相对主义',
    englishName: 'Relativism',
    category: 'philosophical',
    color: '#a855f7',
    period: '古希腊智者普罗泰戈拉至今',
    eraYear: -450,
    summary: '“人是万物的尺度”，主张真理、道德与审美绝无普遍客观标准，随文化、阶级或视角而变。',
    elevatorPitch: '风吹过来，觉得冷的人它就是冷的，觉得热的人它就是热的。不存在超越一切具体立场的“上帝视角的绝对标尺”。每个时代的道德、每个部落的禁忌都有其合理性，切莫用你的标准裁判他者。',
    coreTenets: [
      '认识的主体相对性：感知因认识者的状态与视角而异',
      '文化相对论：没有优越或低劣的文化，只有不同环境下的生活习俗',
      '拒斥普世主义与绝对道德教条',
    ],
    internetReality: '常被指责导致道德虚无与价值虚无（“如果一切都是相对的，杀人放火难道也是文化差异吗？”）。',
    dailyLifeManifestation: '面对不同人的生活习惯时说：“尊重理解他人命运，每个人站的立场不同罢了。”',
    keyThinkers: [
      { name: '普罗泰戈拉 (Protagoras)', era: '约前490-前420', note: '“人是万物的尺度”' },
      { name: '弗朗茨·鲍阿斯 (Franz Boas)', era: '1858-1942', note: '现代文化相对论人类学奠基' }
    ],
    famousQuote: { quote: '人是万物的尺度，是存在者存在的尺度，也是不存在者不存在的尺度。', author: '普罗泰戈拉' },
    spectrum: { political: 0.5, economic: 0.1, social: 0.8 },
    initialPosition: { x: 340, y: -130 }
  },

  // 064. 社会建构主义 (Social Constructivism)
  {
    id: 'social_constructivism',
    name: '社会建构主义',
    englishName: 'Social Constructivism',
    category: 'philosophical',
    color: '#a855f7',
    period: '20世纪60年代社会学认识论革命',
    eraYear: 1966,
    summary: '伯格与卢克曼代表，认为许多被视为“天然理所应当”的现实其实全由人类社会符号互动制度化建构而成。',
    elevatorPitch: '货币只是一张纸，它之所以值钱是因为大家共同相信；国界只是一张地图线条；性别气质、精神疾病标准乃至种族划分，没有一个是天然不变的物理石头，全是人类社会在漫长历史中集体建构出来的“社会事实”！',
    coreTenets: [
      '现实的社会建构：外在化、客观化与内在化的三元辩证过程',
      '批判将历史偶然建构物“自然化（Naturalization）”的意识形态自欺',
      '既然由人类社会建构，就意味着人类完全有能力通过批判重新解构与重组',
    ],
    internetReality: '现代性别平权、种族正义与制度反思最强大的理论武器，尤瓦尔·赫拉利《人类简史》虚构故事理论的底色。',
    dailyLifeManifestation: '意识到“30岁必须买房结婚生子”不是大自然的法则，而是房地产与宗族传统建构的规训脚本。',
    keyThinkers: [
      { name: '彼得·伯格 (Peter L. Berger)', era: '1929-2017', note: '《现实的社会建构》' },
      { name: '托马斯·卢克曼 (Thomas Luckmann)', era: '1927-2016', note: '知识社会学集大成者' }
    ],
    famousQuote: { quote: '社会是人类的产物，社会又是一种客观现实，而人是社会的产物。', author: '伯格与卢克曼' },
    spectrum: { political: 0.5, economic: -0.3, social: 0.9 },
    initialPosition: { x: 260, y: -20 }
  },

  // 065. 还原主义 / 还原论 (Reductionism)
  {
    id: 'reductionism',
    name: '还原论 / 还原主义',
    englishName: 'Reductionism',
    category: 'philosophical',
    color: '#a855f7',
    period: '笛卡尔方法论至分子生物学全盛',
    eraYear: 1953,
    summary: '认为复杂宏观系统可以且必须完全拆解还原为其最底层基本构件的物理性质之和。',
    elevatorPitch: '想理解生命？拆成细胞；想理解细胞？拆成分子与DNA双螺旋；想理解分子？拆成量子微观粒子！把大钟表拆成每一个独立齿轮逐个排查，高层级的规律无非是低层级零件撞击的机械组合。',
    coreTenets: [
      '方法论还原：把复杂庞大的未知系统分解为简单可控的局部模块研究',
      '本体论还原：除最基础物理积木外，不存在真正独立自存的特殊高阶实体',
      '近四百年来自然科学技术大爆炸最根本的方法论发动机',
    ],
    internetReality: '面对复杂性科学（如脑意识、生态崩溃、经济危机）时常显出捉襟见肘的机械片面性。',
    dailyLifeManifestation: '汽车坏了换个火花塞；把整个人体健康精细分解为几十项体检生化指标指标分析。',
    keyThinkers: [
      { name: '勒内·笛卡尔 (René Descartes)', era: '1596-1650', note: '分析还原方法四原则' },
      { name: '弗朗西斯·克里克 (Francis Crick)', era: '1916-2004', note: 'DNA双螺旋发现者，《惊人的假说》' }
    ],
    famousQuote: { quote: '你，你的喜悦与悲伤，不过是庞大神经元群及其相关分子的集合行为。', author: '克里克' },
    spectrum: { political: 0.1, economic: 0.1, social: 0.2 },
    initialPosition: { x: 420, y: -240 }
  },

  // 066. 整体主义 (Holism)
  {
    id: 'holism',
    name: '整体主义',
    englishName: 'Holism',
    category: 'philosophical',
    color: '#a855f7',
    period: '1926年扬·斯穆茨造词，系统论兴起',
    eraYear: 1926,
    summary: '“整体大于部分之和”，反对机械拆解，强调系统非线性涌现与不可分割的关系网络。',
    elevatorPitch: '把活生生的人体拆成一堆碳水化合物和铁元素，你得到的只是一堆烂泥，而不是人！整体不仅包含了零件，更包含了零件之间错综复杂的网络关系；单个命题或器官绝不能脱离其所在的生态网络被单独评估。',
    coreTenets: [
      '整体性先于且大于孤立部分算术总和（The whole is greater than the sum of its parts）',
      '系统自组织性：动态反馈回路产生独特的系统级稳态与进化',
      '认识论整体主义（奎因）：我们的信念系统面对经验法庭检验时是一个整体网状结构',
    ],
    internetReality: '现代生态文明、复杂系统网络科学与中西医结合整体辨证治疗的思想旗帜。',
    dailyLifeManifestation: '治理城市拥堵不单单拓宽一条路，而是结合地铁、公交、职住平衡进行全网综合交通运筹。',
    keyThinkers: [
      { name: '扬·斯穆茨 (Jan Smuts)', era: '1870-1950', note: '《整体论与进化》造词人' },
      { name: '路德维希·冯·贝塔朗菲', era: '1901-1972', note: '一般系统论创始人' }
    ],
    famousQuote: { quote: '整体不仅大于部分之和，而且决定着各部分的性质与演变。', author: '斯穆茨' },
    spectrum: { political: -0.1, economic: -0.3, social: 0.4 },
    initialPosition: { x: 360, y: -190 }
  },

  // 067. 基础主义 (Foundationalism)
  {
    id: 'foundationalism',
    name: '基础主义',
    englishName: 'Foundationalism',
    category: 'philosophical',
    color: '#a855f7',
    period: '传统经典认识论建筑模型',
    eraYear: 1641,
    summary: '认为人类合理的知识体系必须像高楼大厦一样，牢固奠基在少数不证自明、不可怀疑的“基石信念”之上。',
    elevatorPitch: '建高楼必须挖地基，否则万丈高楼平地塌！笛卡尔的“我思”是理性基石，经验论的“直接感官知觉”是经验基石。所有推导出的信念都必须能回溯追溯到这层无可动摇的基石上面，避免无限倒退。',
    coreTenets: [
      '知识大厦金字塔模型：区分为“基础信念”与“非基础派生信念”',
      '基础信念具有无需其他信念支持的特权自明性（如直接感觉直观、逻辑自同律）',
      '杜绝无穷后退困境与循环论证陷阱',
    ],
    internetReality: '受到奎因、塞拉斯“经验所与神话（The Myth of the Given）”的激烈攻讦，但至今仍是数学公理化体系的直观典范。',
    dailyLifeManifestation: '推导数学定理时，从欧几里得几何五大公理一步步严谨下行推导。',
    keyThinkers: [
      { name: '亚里士多德 (Aristotle)', era: '前384-前322', note: '《后分析篇》公理第一原理' },
      { name: '勒内·笛卡尔 (Descartes)', era: '1596-1650', note: '寻找知识无可怀疑的第一块砖' }
    ],
    famousQuote: { quote: '必须找到一块坚不可摧的磐石，方能在此之上奠定科学的永恒圣殿。', author: '笛卡尔' },
    spectrum: { political: -0.2, economic: 0.1, social: -0.2 },
    initialPosition: { x: 480, y: -180 }
  },

  // 068. 融贯主义 (Coherentism)
  {
    id: 'coherentism',
    name: '融贯主义',
    englishName: 'Coherentism',
    category: 'philosophical',
    color: '#a855f7',
    period: '20世纪分析认识论革新',
    eraYear: 1951,
    summary: '反对基础主义，认为信念之所以为真，不靠单块孤立基石，而在于它与整个信念网络命题之间的相互交织与一致融贯。',
    elevatorPitch: '知识不是高塔，而是漂浮在海上的木筏（纽拉特之舟）！我们无法回到岸上重新从龙骨造船，只能在惊涛骇浪中逐根更换腐烂的木板。一个信念是否站得住脚，取决于它是否与我们现有的全部信念系统融洽相扣。',
    coreTenets: [
      '纽拉特之舟（Neurath\'s boat）：知识在运动中自我修补，没有绝对特权基石',
      '融贯性（Coherence）：逻辑一致性、相互解释支持与系统全面性',
      '奎因“信念之网（Web of Belief）”：经验冲击只发生在网络边缘，核心概念牵一发动全身',
    ],
    internetReality: '现代法庭审判采信间接证据链的核心理论：没有单个决定性铁证，但上百个证据细节严丝合缝融贯拼图，便足以定罪。',
    dailyLifeManifestation: '审查侦探悬疑小说或破案线索时，看凶手的口供是否与案发现场所有时间线细节严密自洽。',
    keyThinkers: [
      { name: '奥托·纽拉特 (Otto Neurath)', era: '1882-1945', note: '纽拉特之舟比喻创立者' },
      { name: 'W.V.O. 奎因 (W.V. Quine)', era: '1908-2000', note: '《经验主义的两个教条》信念之网' },
      { name: '劳伦斯·邦茹 (Laurence BonJour)', era: '当代', note: '现代经验融贯论代表' }
    ],
    famousQuote: { quote: '我们就像水手，必须在公海上修理我们的船，而永远不能在干船坞里拆开它从头重建。', author: '纽拉特' },
    spectrum: { political: 0.4, economic: 0.0, social: 0.6 },
    initialPosition: { x: 540, y: -150 }
  },

  // 069. 可错主义 (Fallibilism)
  {
    id: 'fallibilism',
    name: '可错主义',
    englishName: 'Fallibilism',
    category: 'philosophical',
    color: '#a855f7',
    period: '皮尔士创立，波普尔继承',
    eraYear: 1897,
    summary: '皮尔士提出，认为即便拥有最确凿的证据，人类所有的经验知识在原则上依然永远保有犯错的可能性。',
    elevatorPitch: '人类永远不可能拥有百分之百绝对确定、刀枪不入的知识！但这并不意味着我们要坠入绝望的虚无怀疑论。我们可以怀抱高度自信去行动，但内心深处永远保留一把随时被更优经验证据推翻的谦卑余地。',
    coreTenets: [
      '彻底告别绝对确定性的幻想：所有科学结论都是暂时有效的最佳猜测',
      '反教条与反狂热：承认自己的局限是持续求知探索的先决条件',
      '探究是一个永不完结的自我修正开放进程',
    ],
    internetReality: '现代科学探索的核心精神图腾，也是抵御任何政治、宗教与意识形态极端狂热的清凉油。',
    dailyLifeManifestation: '哪怕经过长达一年的详尽尽职调查，在签署投资协议时依然清醒预留应对极端风险的容错空间。',
    keyThinkers: [
      { name: '查尔斯·桑德斯·皮尔士', era: '1839-1914', note: '“我们不能确知任何经验事物”' },
      { name: '卡尔·波普尔 (Karl Popper)', era: '1902-1994', note: '知识猜想与反驳演进' }
    ],
    famousQuote: { quote: '通往真理的第一法则，就是不要阻断探究的道路。', author: '皮尔士' },
    spectrum: { political: 0.6, economic: 0.2, social: 0.7 },
    initialPosition: { x: 460, y: -80 }
  },

  // 070. 认识论无政府主义 (Epistemological Anarchism)
  {
    id: 'epistemological_anarchism',
    name: '认识论无政府主义',
    englishName: 'Epistemological Anarchism',
    category: 'philosophical',
    color: '#a855f7',
    period: '1975年费耶阿本德《反对方法》',
    eraYear: 1975,
    summary: '费耶阿本德提出，认为科学史上绝无固定不变的方法论铁律，唯一的最高原则就是“怎么都行（Anything goes）”。',
    elevatorPitch: '如果历史证明伽利略和爱因斯坦的成功恰恰是因为他们公然践踏了当时的逻辑规则与既有规范，那么凭什么给未来的科学定下死板法则？科学不是神圣祭坛，科学、巫术、神话与艺术都是人类平等的认知游戏！',
    coreTenets: [
      '怎么都行（Anything goes）：不存在超越历史语境的绝对科学方法论',
      '理论不可通约性（Incommensurability）：不同范式之间没有中立标尺换算',
      '科学与国家分离：将社会从科学教条的专制神话中解放出来',
    ],
    internetReality: '科学界著名的“可怕的科学叛徒”，但在科技黑客文化、艺术跨界颠覆创新中被奉为神明圣经。',
    dailyLifeManifestation: '搞原创科研或艺术创作时，故意抛弃所有教科书标准流程，靠野路子实验撞大运寻找突破。',
    keyThinkers: [
      { name: '保罗·费耶阿本德 (Paul Feyerabend)', era: '1924-1994', note: '《反对方法》《自由社会中的科学》' }
    ],
    famousQuote: { quote: '在一切环境和人类发展的各个阶段都可以捍卫的唯一原则就是：怎么都行！', author: '费耶阿本德' },
    spectrum: { political: 0.9, economic: 0.0, social: 1.0 },
    initialPosition: { x: 520, y: -30 }
  }
];
