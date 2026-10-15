import { IsmNode } from '../../types/ism';

// 第七卷：经济学、宗教神学与东方本土思想主义 (226 – 250)
export const VOL7_ISMS: IsmNode[] = [
  // 226. 重商主义 (Mercantilism)
  {
    id: 'mercantilism',
    name: '重商主义',
    englishName: 'Mercantilism',
    category: 'political',
    color: '#38bdf8',
    period: '16-18世纪早期现代欧洲',
    eraYear: 1600,
    summary: '认为世界总财富固定，国家国力取决于国库金银储备多寡与持续贸易顺差，“奖出限入”。',
    elevatorPitch: '国际贸易就是一场零和博弈！我卖给你东西赚你的真金白银，我就变强；我买你的东西金银外流，我就变弱。国家必须动用关税壁垒、特许专营垄断公司（东印度公司）疯狂争夺海外市场，金银满仓才是国家强盛的真谛。',
    coreTenets: [
      '金银货币（Bullion）是衡量国家财富的唯一真正尺度',
      '对外贸易顺差神圣原则：出口最大化，高关税严格限制进口制成品',
      '国家军事力量为海外商路与特许垄断殖民贸易强力护航',
    ],
    internetReality: '现代东亚经济体（日韩、中国早期）出口导向型工业化模式常被经济学界冠以“新重商主义（Neo-mercantilism）”。',
    dailyLifeManifestation: '自豪于国家外汇储备突破数万亿美元大关，对贸易逆差本能感到不安与警惕。',
    keyThinkers: [
      { name: '让-巴蒂斯特·柯尔贝尔', era: '1619-1683', note: '法王路易十四财政总管，柯尔贝尔主义' },
      { name: '托马斯·孟 (Thomas Mun)', era: '1571-1641', note: '《英国得自对外贸易的财富》' }
    ],
    famousQuote: { quote: '对外贸易是增加我们财富与国库金银唯一的普通手段。', author: '托马斯·孟' },
    spectrum: { political: -0.6, economic: 0.3, social: -0.4 },
    initialPosition: { x: -300, y: -200 }
  },

  // 227. 重农主义 (Physiocracy)
  {
    id: 'physiocracy',
    name: '重农主义',
    englishName: 'Physiocracy',
    category: 'political',
    color: '#38bdf8',
    period: '18世纪法国弗朗索瓦·魁奈创立',
    eraYear: 1758,
    summary: '弗朗索瓦·魁奈创立，反驳重商主义，认为唯有土地农业生产才能产生“纯产品”，主张自然秩序与自由放任。',
    elevatorPitch: '商人和手工业者只是在加工转移原材料，金银不过是流通符号；唯有大自然的土地，投入一颗种子产出十颗麦穗，才创造了真实的“纯产品（Produit net）”！开创人类首张《经济表》宏观循环图，最早喊出“放任自由（Laissez-faire）”！',
    coreTenets: [
      '自然秩序（Natural Order）：人类社会经济受上帝设定的客观自然法则支配',
      '只有农业是唯一能够产生净剩余价值的“生产阶级”，工业与商业只是不毛阶级',
      '首倡自由放任（Laissez-faire, laissez-passer）：取消一切对粮食谷物买卖的行政关卡',
    ],
    internetReality: '现代宏观经济学国民经济核算投入产出表（瓦尔拉斯一般均衡、列昂惕夫模型）的真正老祖宗。',
    dailyLifeManifestation: '坚信“民以食为天、无农不稳”，把耕地红线与粮食自给率视作经济最底层的绝对生命线。',
    keyThinkers: [
      { name: '弗朗索瓦·魁奈 (François Quesnay)', era: '1694-1774', note: '法王路易十五御医，《经济表》创立者' },
      { name: '杜尔哥 (Turgot)', era: '1727-1781', note: '法国财政大臣，重农学派实践者' }
    ],
    famousQuote: { quote: '放手去做，放任通行，世界自会运转！（Laissez faire et laissez passer!）', author: '古尔奈 / 魁奈' },
    spectrum: { political: 0.1, economic: 0.7, social: 0.1 },
    initialPosition: { x: -240, y: -160 }
  },

  // 228. 贸易保护主义 (Protectionism)
  {
    id: 'protectionism',
    name: '贸易保护主义',
    englishName: 'Protectionism',
    category: 'political',
    color: '#38bdf8',
    period: '19世纪弗里德里希·李斯特体系成型',
    eraYear: 1841,
    summary: '李斯特提出“幼稚产业保护论”，主张后发国家必须通过关税壁垒保护本土民族工业，反对被英美自由贸易收割。',
    elevatorPitch: '英国自己靠几百年的高关税把棉纺织和钢铁工业养壮了，反过来就逼着后发国家搞零关税自由贸易，这是“踢掉自己登顶后踩过的梯子”！后发国家的本土工业如同婴儿，必须用高关税筑起防风墙悉心呵护，壮大后方能出海搏击。',
    coreTenets: [
      '幼稚产业保护论（Infant Industry Argument）：对成长中的新兴战略工业实施关税护航',
      '财富的生产力比财富本身（金钱）要重要千百倍（李斯特生产力论）',
      '关税同盟（Zollverein）：先对内统一自由贸易，对外筑起统一关税高墙',
    ],
    internetReality: '美国、欧洲近年来对电动汽车、光伏芯片加征高额惩罚性关税背后的绝对地缘经济学基石。',
    dailyLifeManifestation: '外国进口高端轿车被征收高达25%以上的综合关税，以此倒逼外企在本土建厂合资。',
    keyThinkers: [
      { name: '弗里德里希·李斯特', era: '1789-1846', note: '《政治经济学的国民体系》德国崛起导师' },
      { name: '亚历山大·汉密尔顿', era: '1755-1804', note: '《关于制造业的报告》首倡关税保护' }
    ],
    famousQuote: { quote: '一个人若在登顶之后，把让他登上顶峰的梯子一脚踢开，这是极其自私狡黠的策略。', author: '李斯特' },
    spectrum: { political: -0.5, economic: 0.0, social: -0.3 },
    initialPosition: { x: -180, y: -130 }
  },

  // 229. 自由放任资本主义 (Laissez-faire Capitalism)
  {
    id: 'laissez_faire',
    name: '自由放任资本主义',
    englishName: 'Laissez-faire Capitalism',
    category: 'political',
    color: '#38bdf8',
    period: '18世纪亚当·斯密至今',
    eraYear: 1776,
    summary: '亚当·斯密开创，坚信自由市场价格机制自发协调供求，“看不见的手”比任何集中计划指令更能创造最大社会总财富。',
    elevatorPitch: '屠夫、酿酒师和面包师给我们提供晚饭，绝不是出于善心，而是为了他们自身的利益！每个人在不受管制的市场中追求自身利益最大化，被一只看不见的手牵引着，不知不觉间增进了全人类的福祉。政府管得越少越好！',
    coreTenets: [
      '“看不见的手（Invisible Hand）”：价格信号自发调节供求与资源最优配置',
      '契约自由、私有财产神圣、自由竞争与自由择业',
      '彻底消除国家对价格、工资、利率与进出口的垄断与行政干涉',
    ],
    internetReality: '近代两次工业革命财富狂飙突进的核心发动机，也是激进社会主义反思剥削危机的主要坐标。',
    dailyLifeManifestation: '股市交易大厅与期货市场中，毫秒级跳动的红绿K线由全球数千万买家卖家自发博弈确定。',
    keyThinkers: [
      { name: '亚当·斯密 (Adam Smith)', era: '1723-1790', note: '现代经济学之父，《国富论》' },
      { name: '让-巴蒂斯特·萨伊', era: '1767-1832', note: '“供给创造其自身的需求”（萨伊定律）' }
    ],
    famousQuote: { quote: '每个人追求自身利益，往往比他真想促进公共利益时，能更有效地促进社会的利益。', author: '亚当·斯密' },
    spectrum: { political: 0.6, economic: 1.0, social: 0.3 },
    initialPosition: { x: -120, y: -90 }
  },

  // 230. 凯恩斯主义 (Keynesianism)
  {
    id: 'keynesianism',
    name: '凯恩斯主义',
    englishName: 'Keynesianism',
    category: 'political',
    color: '#38bdf8',
    period: '1936年凯恩斯《通论》拯救大萧条',
    eraYear: 1936,
    summary: '约翰·梅纳德·凯恩斯创立，打破自由放任神话，指出有效需求不足导致危机，主张国家通过财政赤字举债与降息积极干预经济周期。',
    elevatorPitch: '市场根本不会自动自我出清！面对大萧条遍地失业工厂倒闭，如果死守预算平衡等市场自愈，“在长期，我们都死了（In the long run we are all dead）”！国家必须主动举债修公路、办基建（甚至挖坑再填坑），注入流动性拉动有效需求。',
    coreTenets: [
      '有效需求不足理论（Effective Demand）：消费倾向递减、资本边际效率递减与流动性偏好',
      '反周期宏观调控（Counter-cyclical Policy）：萧条时扩大财政赤字投资，过热时增税降温',
      '彻底粉碎“萨伊定律”，开创现代宏观经济学范式',
    ],
    internetReality: '罗斯福新政、战后黄金三十年与2008年全球四万亿大基建救市的唯一绝对理论教条。',
    dailyLifeManifestation: '经济低迷期政府发放全民数十亿消费券、央行连续降息降准、国家启动万亿超级高铁大工程。',
    keyThinkers: [
      { name: '约翰·梅纳德·凯恩斯', era: '1883-1946', note: '《就业、利息和货币通论》宏观经济学之父' },
      { name: '保罗·萨缪尔森', era: '1915-2009', note: '新古典综合派集大成者' }
    ],
    famousQuote: { quote: '在长期，我们都死了。', author: '凯恩斯' },
    spectrum: { political: -0.1, economic: -0.4, social: 0.4 },
    initialPosition: { x: -60, y: -60 }
  },

  // 231. 货币主义 (Monetarism)
  {
    id: 'monetarism',
    name: '货币主义',
    englishName: 'Monetarism',
    category: 'political',
    color: '#38bdf8',
    period: '20世纪60-70年代米尔顿·弗里德曼创立',
    eraYear: 1963,
    summary: '弗里德曼代表，痛批凯恩斯财政干预导致滞胀，主张“通货膨胀无论何时何地都是一种货币现象”，央行唯一任务是保持货币量稳定低速增长。',
    elevatorPitch: '凯恩斯主义的大手大脚财政支出与央行滥发货币，是70年代全球大滞胀的罪魁祸首！政府不要妄图微调经济，那只会制造更大暴击。废除政府自由裁量权，给央行定下死板的“单一规则（k百分比规则）”——每年货币供给恒定增长3%-5%，让市场自愈。',
    coreTenets: [
      '通货膨胀无论何时何地都是一种货币现象（Excessive money supply）',
      '单一货币规则（k-percent rule）：用死板机械的固定货币增长率取代人为干预',
      '自然失业率假说（Natural Rate of Unemployment）：菲利普斯曲线在长期是垂直的',
    ],
    internetReality: '美联储保罗·沃尔克以20%超高基准利率彻底击碎恶性通胀历史传奇的理论支柱。',
    dailyLifeManifestation: '买菜发现物价暴涨一倍，第一反应不是怪菜农贪心，而是痛骂央行去年货币超发大放水。',
    keyThinkers: [
      { name: '米尔顿·弗里德曼 (Milton Friedman)', era: '1912-2006', note: '《美国货币史》《自由选择》' },
      { name: '安娜·施瓦茨 (Anna Schwartz)', era: '1915-2012', note: '货币史合作撰写者' }
    ],
    famousQuote: { quote: '通货膨胀无论何时何地都是一种货币现象。', author: '弗里德曼' },
    spectrum: { political: 0.3, economic: 0.9, social: 0.4 },
    initialPosition: { x: 0, y: -90 }
  },

  // 232. 乔治主义 (Georgism)
  {
    id: 'georgism',
    name: '乔治主义 / 土地单一税',
    englishName: 'Georgism',
    category: 'political',
    color: '#38bdf8',
    period: '1879年亨利·乔治《进步与贫困》',
    eraYear: 1879,
    summary: '亨利·乔治创立，人对自身劳动成果享有绝对私产，但大自然土地属于全人类，国家应免除所有劳动所得税、只征收“单一土地价值税（LVT）”。',
    elevatorPitch: '为什么现代科技越进步，贫困反而越蔓延？因为绝大部分发展红利全被躺着不动的地主炒房客以地租形式吸走了！土地是上帝赐予所有人的，地皮升值全靠城市公共建设。消灭所有劳动税、增值税，只对未经改良的纯土地价值征收100%单一地租税！',
    coreTenets: [
      '人身与劳动成果绝对私有，自然土地与自然资源全人类共有',
      '单一土地价值税（Land Value Tax, LVT）：不向建筑物征税，只向土地天然区位级差地租征税',
      '彻底消除炒房炒地寄生虫，激发企业实体创业与劳动者最大活力',
    ],
    internetReality: '风靡全球的桌游《大富翁（Monopoly 原名地主游戏 The Landlord\'s Game）》最初正是乔治主义者为了揭露地主吸血而设计的教学教具！',
    dailyLifeManifestation: '支持对市中心闲置囤积地皮的开发商征收极重空置暴利地租税，逼其赶快开发盖楼。',
    keyThinkers: [
      { name: '亨利·乔治 (Henry George)', era: '1839-1897', note: '《进步与贫困》百万畅销奇书作者' }
    ],
    famousQuote: { quote: '我们将土地归还给人民，不是通过没收土地，而是通过征收地租。', author: '亨利·乔治' },
    spectrum: { political: 0.6, economic: -0.2, social: 0.7 },
    initialPosition: { x: 60, y: -120 }
  },

  // 233. 分配主义 (Distributism)
  {
    id: 'distributism',
    name: '分配主义',
    englishName: 'Distributism',
    category: 'political',
    color: '#38bdf8',
    period: '19世纪末教皇通谕《新事》与切斯特顿倡导',
    eraYear: 1891,
    summary: '切斯特顿、贝洛克创立，既反对垄断资本主义也反对国有集权，主张“人人当小老板”，让每个家庭都拥有小块土地、作坊与合作社股份。',
    elevatorPitch: '资本主义的问题不是私有财产太多，而是拥有私有财产的人太少了！几大寡头占有了一切，老百姓沦为打工人奴隶；而苏式社会主义又把一切交给国家官僚。真正的自由是：每个家庭都拥有自己的小土地、小作坊或家族小店，人人自立为王！',
    coreTenets: [
      '三亩地与一头奶牛（Three acres and a cow）：广泛分散生产资料至千家万户',
      '辅助性原则：权力下沉至家庭与小型合作社，反抗超级大托拉斯与利维坦大政府',
      '以天主教社会训导为道德底色，捍卫家庭生活的自治与尊严',
    ],
    internetReality: '西班牙蒙德拉贡（Mondragon）工人大型合作社联合体长达半个世纪的成功现实写照。',
    dailyLifeManifestation: '支持家门口独立咖啡馆、独立书店和小农市集，坚决抵制沃尔玛星巴克等巨型跨国连锁巨头的垄断吞噬。',
    keyThinkers: [
      { name: 'G.K. 切斯特顿 (G.K. Chesterton)', era: '1874-1936', note: '英国文学巨匠兼社会批评家' },
      { name: '希莱尔·贝洛克 (Hilaire Belloc)', era: '1870-1953', note: '《奴役的国家》' }
    ],
    famousQuote: { quote: '资本主义的问题不是私有制太多，而是拥有私产的人太少。', author: '切斯特顿' },
    spectrum: { political: 0.4, economic: -0.4, social: -0.4 },
    initialPosition: { x: 120, y: -150 }
  },

  // 234. 指导主义 (Dirigisme)
  {
    id: 'dirigisme',
    name: '指导主义 / 法国统制主义',
    englishName: 'Dirigisme',
    category: 'political',
    color: '#38bdf8',
    period: '二战后法国戴高乐“辉煌三十年（Trente Glorieuses）”',
    eraYear: 1945,
    summary: '二战后法国戴高乐模式，在市场经济框架内，由国家发改机构制定“指示性国家计划”，国家控股并大力扶植战略产业。',
    elevatorPitch: '自由放任会让法国沦为平庸！战后废墟上，戴高乐将军建立“指示性计划总署”：国家不剥夺民企，但由国家精准主导核电、高铁（TGV）、航空航天（空中客车）、电信等大项目国家队投资，带领法国打赢战后三十年经济奇迹！',
    coreTenets: [
      '指示性五年计划（Indicative Planning）：给市场指明战略方向而非搞死板配给',
      '国家冠军企业（National Champions）：倾斜全部科技资金扶植超级战略托拉斯出海竞争',
      '强大的技术精英官僚系统（巴黎综合理工与法国国家行政学院ENA校友共治）',
    ],
    internetReality: '现代大国在半导体芯片、人工智能自主可控与大飞机制造中“新型举国体制”的直接西方先例。',
    dailyLifeManifestation: '法国高铁TGV准点飞驰、全法国80%电力来自安全高效的国有核电站集团。',
    keyThinkers: [
      { name: '夏尔·戴高乐 (Charles de Gaulle)', era: '1890-1970', note: '法兰西第五共和国总统' },
      { name: '让·莫内 (Jean Monnet)', era: '1888-1979', note: '首任法国计划总署署长，欧盟之父' }
    ],
    famousQuote: { quote: '计划不是扼杀市场，计划是照亮市场前路的国家火炬。', author: '让·莫内' },
    spectrum: { political: -0.5, economic: -0.3, social: 0.1 },
    initialPosition: { x: -30, y: -30 }
  },

  // 235. 福特主义 (Fordism)
  {
    id: 'fordism',
    name: '福特主义',
    englishName: 'Fordism',
    category: 'political',
    color: '#38bdf8',
    period: '20世纪初亨利·福特T型车流水线',
    eraYear: 1914,
    summary: '以标准化传送带流水线大规模生产，搭配“日薪五美元”高工资，让一线产业工人买得起自己制造的工业耐用品。',
    elevatorPitch: '亨利·福特做出震惊世界的决定：把流水线工人工资翻倍提高到日薪5美元！为什么？如果工人累得半死又穷得叮当响，谁来买车库里源源不断下线的T型车？大规模生产必须搭配大规模消费，资本主义劳资良性循环由传送带铸就！',
    coreTenets: [
      '高度标准化的移动传送带流水线分工装配（Extreme Division of Labor）',
      '高工资机制培育国内大众消费市场，形成“大生产—大消费”飞轮',
      '二战后演化为后福特主义（弹性专业化生产、柔性制造与外包）',
    ],
    internetReality: '现代消费主义社会成型、汽车普及中产阶级生活方式的真正母胎制度。',
    dailyLifeManifestation: '汽车4S店每家都能买到价格亲民的家庭代步轿车、现代工业品极低廉的标准件超市。',
    keyThinkers: [
      { name: '亨利·福特 (Henry Ford)', era: '1863-1947', note: '汽车大王，流水线革命者' },
      { name: '安东尼奥·葛兰西', era: '1891-1937', note: '《美国主义和福特主义》深度剖析' }
    ],
    famousQuote: { quote: '顾客可以选择任何他喜欢的颜色，只要它是黑色的。', author: '亨利·福特' },
    spectrum: { political: -0.2, economic: 0.5, social: -0.1 },
    initialPosition: { x: 30, y: -60 }
  },

  // 236. 泰勒主义 (Taylorism)
  {
    id: 'taylorism',
    name: '泰勒主义 / 科学管理',
    englishName: 'Taylorism',
    category: 'political',
    color: '#38bdf8',
    period: '1911年弗雷德里克·泰勒《科学管理原理》',
    eraYear: 1911,
    summary: '手持秒表与皮尺对工人每一个操作动作进行微观时间与动作分解，消除一切摸鱼浪费以榨取最高生产效率。',
    elevatorPitch: '把工人从手艺人彻底改造为精确零件！拿着秒表站在车间，记录工人弯腰铲煤需要多少秒、转动螺丝需要几度。用科学实验制定出“唯一最佳作业法（One Best Way）”，将体力劳动与大脑规划彻底切开，开启了现代管理学。',
    coreTenets: [
      '时间与动作研究（Time and Motion Study）：消除一切磨洋工（Soldiering）',
      '计划职能（工程师）与执行职能（流水线工人）的彻底分离',
      '差别计件工资制：达标者重赏，未达标者重罚',
    ],
    internetReality: '卓别林《摩天时代》被传送带齿轮卷入的发疯工人，当今外卖平台骑手被“算法困在系统里”的元凶。',
    dailyLifeManifestation: '办公室电脑被安装键盘监控软件，HR精确统计员工工位离座上厕所的具体分钟数。',
    keyThinkers: [
      { name: '弗雷德里克·温斯洛·泰勒', era: '1856-1915', note: '现代科学管理之父' }
    ],
    famousQuote: { quote: '在过去，人是第一位的；在未来，系统必须是第一位的。', author: '泰勒' },
    spectrum: { political: -0.6, economic: 0.6, social: -0.4 },
    initialPosition: { x: 90, y: -90 }
  },

  // 237. 消费主义 (Consumerism)
  {
    id: 'consumerism',
    name: '消费主义',
    englishName: 'Consumerism',
    category: 'cultural',
    color: '#f59e0b',
    period: '20世纪中叶至今现代商业社会',
    eraYear: 1955,
    summary: '将无休止地购买超出生活必需的商品与符号体验，等同于衡量个人幸福感、人生成功与社会阶层地位的现代意识形态。',
    elevatorPitch: '“我买，故我在！”在消费社会，你购买一件商品不仅仅是为了它的实用功能，更是为了消费它所附带的精致身份符号。广告商精心制造容貌焦虑与中产阶层危机感，诱导你不断用信用卡透支劳动时间去填补虚空的欲望黑洞。',
    coreTenets: [
      '符号消费（Symbolic Consumption）：商品的使用价值退居其次，身份地位符号主宰一切',
      '人为制造的陈旧淘汰（Planned Obsolescence）：不断推出微调新品让旧款贬值',
      '将消费等同于自我实现的现代世俗宗教化自欺',
    ],
    internetReality: '双十一狂欢、各大带货主播直播间疯狂“买它”、社交平台开箱晒单的最强商业催眠曲。',
    dailyLifeManifestation: '衣柜里塞满了只穿过一次的当季流行衣服，手机每年准时以旧换新购买最新旗舰款。',
    keyThinkers: [
      { name: '托斯丹·凡勃伦 (Thorstein Veblen)', era: '1857-1929', note: '《有闲阶级论》炫耀性消费' },
      { name: '让·鲍德里亚 (Jean Baudrillard)', era: '1929-2007', note: '《消费社会》符号交换' }
    ],
    famousQuote: { quote: '广告教导我们去购买我们不需要的东西，用我们没有的钱，去给那些我们讨厌的人留下好印象。', author: '《搏击俱乐部》经典台词' },
    spectrum: { political: 0.1, economic: 0.8, social: 0.4 },
    initialPosition: { x: 150, y: -60 }
  },

  // 238. 退增长主义 (Degrowth)
  {
    id: 'degrowth',
    name: '退增长主义 / 去增长',
    englishName: 'Degrowth / Décroissance',
    category: 'contemporary',
    color: '#ec4899',
    period: '2000年代法国发端，近年席卷欧洲学界',
    eraYear: 2002,
    summary: '高兹、拉图什创立，认为地球生态绝无可能承受GDP无休止指数级狂飙增长，主张有计划主动缩减生产与能源消耗规模。',
    elevatorPitch: '如果盲目追求GDP无限增长就像癌细胞疯狂扩散一样杀死宿主，为什么还要以此为国家唯一KPI？退增长不是经济危机悲惨萧条，而是主动踩刹车！缩短每周法定工作时间、修复旧物、发展本地慢生活，以幸福指数取代冷血GDP。',
    coreTenets: [
      '彻底打破“GDP无限增长等同于社会进步”的现代迷思',
      '有计划缩减破坏生态的高耗能部门，扩大护理、教育与艺术等慢部门',
      '从资本积累导向彻底转向人类与地球生态的繁衍修复',
    ],
    internetReality: '当今联合国IPCC气候报告引述与欧洲绿党激进青年最追捧的颠覆性后资本主义理论。',
    dailyLifeManifestation: '全城推行每周4天工作制、大规模普及二手循环跳蚤市场与共享维修工具车间。',
    keyThinkers: [
      { name: '塞尔日·拉图什 (Serge Latouche)', era: '1940-', note: '《告别增长》' },
      { name: '杰森·希克尔 (Jason Hickel)', era: '1982-', note: '《少即是多：去增长如何拯救世界》' }
    ],
    famousQuote: { quote: '在有限的地球上相信无限增长的人，要么是疯子，要么是经济学家。', author: '肯尼思·博尔丁' },
    spectrum: { political: 0.7, economic: -0.9, social: 0.95 },
    initialPosition: { x: 210, y: -30 }
  },

  // 239. 人文主义 / 人道主义 (Humanism)
  {
    id: 'humanism',
    name: '人文主义 / 人道主义',
    englishName: 'Humanism',
    category: 'philosophical',
    color: '#a855f7',
    period: '文艺复兴发端，贯穿现代启蒙',
    eraYear: 1400,
    summary: '彼特拉克、伊拉斯谟开创，把目光从神界拉回现世人类的内在尊严、理性潜能与世俗幸福追求。',
    elevatorPitch: '普罗泰戈拉说“人是万物的尺度”，莎士比亚赞叹：“人类是一件多么了不起的杰作！”打破中世纪把人踩在尘埃里的原罪自卑，人拥有理性、拥有自由意志、拥有创造美与追寻真理的无限天赋与神圣尊严。',
    coreTenets: [
      '人的尊严（Dignity of Man）高于一切神权戒律与盲目教条',
      '肯定现世世俗生活的正当价值（求知、恋爱、艺术创作与世俗幸福）',
      '以自由博雅教育（Liberal Arts）启迪人类完整心智与批判精神',
    ],
    internetReality: '世界红十字会、国际人道主义法与当代世俗社会全人类共同价值的终极基石。',
    dailyLifeManifestation: '无论罪犯犯下何等重罪，在刑罚和看押中依然严禁施加肉体折磨，保全最起码的人性尊严。',
    keyThinkers: [
      { name: '弗朗切斯科·彼特拉克', era: '1304-1374', note: '文艺复兴人文主义之父' },
      { name: '德西德里乌斯·伊拉斯谟', era: '1466-1536', note: '《愚人颂》人文主义泰斗' },
      { name: '皮科·德拉·米兰多拉', era: '1463-1494', note: '《论人的尊严》' }
    ],
    famousQuote: { quote: '人类是一件多么了不起的杰作！多么高贵的理性！多么伟大的力量！', author: '莎士比亚《哈姆雷特》' },
    spectrum: { political: 0.4, economic: 0.0, social: 0.8 },
    initialPosition: { x: -280, y: -10 }
  },

  // 240. 自然神论 (Deism)
  {
    id: 'deism',
    name: '自然神论',
    englishName: 'Deism',
    category: 'philosophical',
    color: '#a855f7',
    period: '17-18世纪启蒙哲学家广泛信奉',
    eraYear: 1734,
    summary: '伏尔泰、杰斐逊信奉，认为上帝是造出钟表并上紧发条的“钟表匠”，创造了自然法则后便不再干涉人间。',
    elevatorPitch: '宇宙就像一座精密绝伦的巨大机械钟表，上帝造好它、上满发条、设定好物理定律后，就背着手走开了！上帝绝不会搞什么分开红海、处女怀孕等违背自己定律的荒唐神迹，更不在乎教士的祷告祈求。以理性自然律敬畏神。',
    coreTenets: [
      '钟表匠上帝比喻（The Watchmaker Analogy）：神是最高理性设计者',
      '彻底否定任何超自然神迹、复活启示录与教会神职中介特权',
      '道德来自人类理性与良心，无需神罚地狱的恐吓维持',
    ],
    internetReality: '美国建国先父们起草《独立宣言》（“人人生而平等，造物主赋予他们某些不可剥夺的权利”）时的真实宗教信仰底色。',
    dailyLifeManifestation: '在自然探索中感受大自然数学对称之美，毫不相信任何江湖算命或祈雨仪式。',
    keyThinkers: [
      { name: '伏尔泰 (Voltaire)', era: '1694-1778', note: '粉碎迷信的启蒙旗手' },
      { name: '托马斯·杰斐逊', era: '1743-1826', note: '剪掉所有神迹段落的《杰斐逊圣经》' }
    ],
    famousQuote: { quote: '如果上帝不存在，我们就必须把他发明出来。', author: '伏尔泰' },
    spectrum: { political: 0.5, economic: 0.2, social: 0.7 },
    initialPosition: { x: -220, y: 20 }
  },

  // 241. 泛神论 (Pantheism)
  {
    id: 'pantheism',
    name: '泛神论',
    englishName: 'Pantheism',
    category: 'philosophical',
    color: '#a855f7',
    period: '斯宾诺莎、布鲁诺至浪漫派自然哲学',
    eraYear: 1677,
    summary: '斯宾诺莎代表，认为上帝与整个自然宇宙完全等同同一，“神即自然（Deus sive Natura）”，神无处不在。',
    elevatorPitch: '不要去教堂找上帝！上帝不是天空中长白胡子的老爷爷。每一棵大树、每一颗流星、每一次潮汐涨落乃至你此刻的一呼一吸，整个壮丽的大自然本身就是上帝！神没有拟人化的人格与怒火，神就是大自然和谐运转的全部本身。',
    coreTenets: [
      '神与自然世界的绝对等同同一性（Deus sive Natura）',
      '否定拟人化的人格神与超越世界的外部造物主',
      '万物皆流转于神性之中，激发深刻的宇宙宗教敬畏感',
    ],
    internetReality: '爱因斯坦在被记者追问是否信神时，明确回答：“我相信斯宾诺莎的泛神论上帝。”',
    dailyLifeManifestation: '站在崇山峻岭之巅感受浩瀚无垠天地，内心涌现出无与伦比的崇高安详与神圣融合感。',
    keyThinkers: [
      { name: '巴鲁赫·斯宾诺莎', era: '1632-1677', note: '泛神论集大成者' },
      { name: '乔尔丹诺·布鲁诺', era: '1548-1600', note: '无限宇宙泛神论殉道者' }
    ],
    famousQuote: { quote: '神即自然，自然即神。', author: '斯宾诺莎' },
    spectrum: { political: 0.4, economic: 0.0, social: 0.8 },
    initialPosition: { x: -160, y: 50 }
  },

  // 242. 无神论 (Atheism)
  {
    id: 'atheism',
    name: '无神论',
    englishName: 'Atheism',
    category: 'philosophical',
    color: '#a855f7',
    period: '启蒙运动至21世纪新无神论',
    eraYear: 1770,
    summary: '霍尔巴赫、费尔巴哈代表，明确否定任何人格化神明、造物主或超自然鬼神实体的客观存在。',
    elevatorPitch: '不是神创造了人，而是人按照自己的模样创造了神！费尔巴哈一针见血：人把自己最好的品质（全知、全善、全爱）投影到天空中，然后反过来跪拜自己头脑制造的幻象。驱散一切宗教迷信的麻醉剂，直面真实严酷但自由的自然世界！',
    coreTenets: [
      '神明概念缺乏任何经验实证与逻辑合理性支持',
      '宗教是人类在异化苦难世界中自我慰藉的精神鸦片（马克思宗教批判）',
      '新无神论（道金斯、哈里斯）：主动运用演化生物学与理性铲除宗教教条对人类社会的毒害',
    ],
    internetReality: '当代科学理性主义者、科普博主击碎封建迷信与邪教洗脑的最坚决锋刃。',
    dailyLifeManifestation: '遭遇人生挫折从不上香求神保佑，完全依靠现代医学诊疗与自身努力寻找现实出路。',
    keyThinkers: [
      { name: '路德维希·费尔巴哈', era: '1804-1872', note: '《基督教的本质》宗教投影论' },
      { name: '理查德·道金斯', era: '1941-', note: '《上帝错觉》' },
      { name: '克里斯托弗·希钦斯', era: '1949-2011', note: '《上帝不伟大》' }
    ],
    famousQuote: { quote: '宗教是受压迫生灵的叹息，是没有情义世界里的温情，它是人民的鸦片。', author: '马克思' },
    spectrum: { political: 0.2, economic: -0.2, social: 0.9 },
    initialPosition: { x: -100, y: 80 }
  },

  // 243. 世俗主义 (Secularism)
  {
    id: 'secularism',
    name: '世俗主义',
    englishName: 'Secularism',
    category: 'political',
    color: '#38bdf8',
    period: '1851年乔治·霍利奥克造词，法国莱西泰（Laïcité）',
    eraYear: 1851,
    summary: '主张政教完全分离，国家公权力、公立教育与法律体系彻底脱离任何宗教干预，信仰退回私人领域。',
    elevatorPitch: '“上帝的归上帝，恺撒的归恺撒！”任何宗教教义都不准写进国家刑法！法官审判不翻圣经或可兰经，学校黑板前不悬挂宗教十字架；公共空间中人人遵守中立平等的世俗宪法，信教与不信教拥有完全相同的平等公民权利。',
    coreTenets: [
      '政教分离原则（Separation of Church and State）',
      '公共领域严格中立，确保一切宗教派系与无神论者平等共处',
      '法国激进政教分离主义（Laïcité）：公立学校严禁佩戴任何明显宗教服饰符号',
    ],
    internetReality: '现代文明宪政民主区别于中世纪政教合一神权国家的绝对制度门槛。',
    dailyLifeManifestation: '公立大学课堂上讲授达尔文生物进化论，严禁任何宗教神创论在必修课中强行加塞。',
    keyThinkers: [
      { name: '乔治·雅各布·霍利奥克', era: '1817-1906', note: 'Secularism造词人' }
    ],
    famousQuote: { quote: '世俗主义不是对抗宗教，而是确保任何宗教都不能把自身的教条强加给全体公民。', author: '霍利奥克' },
    spectrum: { political: 0.4, economic: 0.0, social: 0.8 },
    initialPosition: { x: -40, y: 110 }
  },

  // 244. 原教旨主义 (Fundamentalism)
  {
    id: 'fundamentalism',
    name: '宗教原教旨主义',
    englishName: 'Fundamentalism',
    category: 'philosophical',
    color: '#a855f7',
    period: '20世纪初反抗现代世俗化起',
    eraYear: 1910,
    summary: '主张严格按古代宗教圣典的字面无误字句解读信仰，彻底敌视现代世俗化、达尔文科学与道德堕落。',
    elevatorPitch: '拒绝任何所谓的现代折衷解读！古老圣典上的每一个字都是造物主一字不差的真理启示。坚信神六天创世、圣徒神迹；指责现代世俗社会道德沦丧、女性解放是魔鬼引诱，渴望建立严格执行古代教法的神权社会。',
    coreTenets: [
      '圣典无误论（Biblical / Scriptural Inerrancy）：字面字字皆真，拒绝任何科学隐喻化解释',
      '激烈对抗现代启蒙世俗化、进化论与世俗道德相对主义',
      '涵盖基督教创世论、伊斯兰原教旨瓦哈比派等各派宗教复古思潮',
    ],
    internetReality: '美国圣经带反对学校讲授进化论、阿富汗塔利班全面剥夺女性受教育权的现实政治推手。',
    dailyLifeManifestation: '坚决要求学校把达尔文进化论从生物课本删除，代之以神创论圣经字面教学。',
    keyThinkers: [
      { name: '《基本要道》编写群', era: '1910-1915', note: '美国加州保守派基督教小册子确立根本原则' }
    ],
    famousQuote: { quote: '回到圣典的字面原初去，任何一星半点的妥协都是对真理的叛逆！', author: '原教旨主义纲领' },
    spectrum: { political: -0.9, economic: 0.0, social: -1.0 },
    initialPosition: { x: 20, y: 140 }
  },

  // 245. 神秘主义 (Mysticism)
  {
    id: 'mysticism',
    name: '神秘主义',
    englishName: 'Mysticism',
    category: 'philosophical',
    color: '#a855f7',
    period: '古今跨文化普遍灵性现象',
    eraYear: 500,
    summary: '主张人类能够通过冥想静修、超常意识恍惚或神圣狂喜，超越语言逻辑障碍，直接与宇宙神圣本体合二为一。',
    elevatorPitch: '理性语言在终极真理面前太笨拙了！正如爱克哈特大师所言：“我眼中的上帝，就是上帝看我时的同一只眼睛。”放下所有思辨争吵，通过内省、禅修或迷醉，让自我的渺小幻象如水滴般融入终极神圣意识的浩瀚汪洋。',
    coreTenets: [
      '不可言说性（Ineffability）：直接灵性体验无法用日常逻辑概念精准转述',
      '神人合一（Unio Mystica）：打破主客二元对立，体验与宇宙本质的完全同一',
      '涵盖诺斯替主义（Gnosticism）、伊斯兰苏菲派（Sufism）、犹太卡巴拉（Kabbalah）与禅宗顿悟',
    ],
    internetReality: '当代神经科学探索致幻剂（Psilocybin）与深层禅修时脑网络DMN默认模式网络静息的前沿理论对话者。',
    dailyLifeManifestation: '深层冥想中体验到时间空间的彻底消融、自我与整个天地浑然一体的狂喜泪流。',
    keyThinkers: [
      { name: '埃克哈特大师 (Meister Eckhart)', era: '约1260-1328', note: '莱茵兰天主教神秘神学大师' },
      { name: '鲁米 (Rumi)', era: '1207-1273', note: '波斯苏菲派旋转舞灵性诗人' }
    ],
    famousQuote: { quote: '你不是茫茫大海中的一滴水，你是蕴含在一滴水中的整个汪洋。', author: '鲁米' },
    spectrum: { political: 0.4, economic: 0.0, social: 0.7 },
    initialPosition: { x: 80, y: 170 }
  },

  // 246. 儒家主义 / 孔教思想 (Confucianism)
  {
    id: 'confucianism',
    name: '儒家主义 / 孔教思想',
    englishName: 'Confucianism',
    category: 'philosophical',
    color: '#a855f7',
    period: '先秦孔孟创立，宋明理学至现代新儒家',
    eraYear: -500,
    summary: '孔子、孟子创立，以“仁义礼智信”为道德核心，推崇修齐治平、德治仁政与宗法伦理天下秩序。',
    elevatorPitch: '“克己复礼为仁，天下归仁焉。”人不是孤立的原子动物，人生活在父子、君臣、夫妇、兄弟、朋友的五伦关系网络中。由内圣（格物致知正心修身）推向外王（齐家治国平天下），以仁心铸就生生不息的文明道统。',
    coreTenets: [
      '仁者爱人：以同理心（“己所不欲，勿施于人”）为道德仁心总源头',
      '礼制教化与德治仁政（以德服人者王，以力服人者霸）',
      '内圣外王：宋明理学（存天理灭人欲）到熊十力、牟宗三现代新儒家的心性论突进',
    ],
    internetReality: '东亚文化圈（中日韩越）尊师重教、家庭责任、秩序自律最深厚的潜意识DNA。',
    dailyLifeManifestation: '过年回家毕恭毕敬向长辈敬酒问安、再穷也要全力供子女读书出人头地的家庭执念。',
    keyThinkers: [
      { name: '孔子 (Confucius)', era: '前551-前479', note: '至圣先师，《论语》' },
      { name: '孟子 (Mencius)', era: '约前372-前289', note: '“民为贵，社稷次之，君为轻”' },
      { name: '朱熹 (Zhu Xi)', era: '1130-1200', note: '理学集大成者' }
    ],
    famousQuote: { quote: '为天地立心，为生民立命，为往圣继绝学，为万世开太平。', author: '张载（横渠四句）' },
    spectrum: { political: -0.4, economic: -0.2, social: -0.7 },
    initialPosition: { x: 140, y: 200 }
  },

  // 247. 道家自然主义 (Daoism / Taoism)
  {
    id: 'daoism',
    name: '道家自然主义',
    englishName: 'Daoism',
    category: 'philosophical',
    color: '#a855f7',
    period: '先秦老庄创立',
    eraYear: -500,
    summary: '老子、庄子创立，主张“道法自然”、“无为而无不为”、齐物逍遥，反对人为矫饰礼法对天性生命的扭曲。',
    elevatorPitch: '“人法地，地法天，天法道，道法自然。”天地不仁，以万物为刍狗！世间一切功名利禄与人定戒律，在浩瀚天道面前不过是扰乱本性的蜘蛛网。上善若水，处众人之所恶而无争；像庄周梦蝶般打破是非物我界限，畅游于逍遥天地间。',
    coreTenets: [
      '道法自然：宇宙终极本原“道”自生自化、无为而运',
      '无为而治：不瞎折腾、不搞过度专制干预，让万物按自身天性休养生息',
      '齐物论（逍遥游）：超越世俗功利是非利害分别心，安时处顺',
    ],
    internetReality: '当代青年内卷疲惫后重读《道德经》汲取生存智慧、躺平调养身心的最高精神解药。',
    dailyLifeManifestation: '看开职场晋升与名利得失，周末去溪边垂钓发呆，体会“天地有大美而不言”。',
    keyThinkers: [
      { name: '老子 (Laozi)', era: '先秦', note: '《道德经》五千言' },
      { name: '庄子 (Zhuangzi)', era: '约前369-前286', note: '《庄子》逍遥游、齐物论' }
    ],
    famousQuote: { quote: '上善若水。水善利万物而不争，处众人之所恶，故几于道。', author: '老子' },
    spectrum: { political: 0.9, economic: 0.2, social: 0.8 },
    initialPosition: { x: 200, y: 230 }
  },

  // 248. 法家主义 (Legalism)
  {
    id: 'legalism_china',
    name: '法家主义',
    englishName: 'Legalism',
    category: 'political',
    color: '#38bdf8',
    period: '战国商鞅变法至韩非集大成',
    eraYear: -230,
    summary: '商鞅、韩非子创立，认为人性皆趋利避害，主张以公开严刑峻法（法）、君王御下权术（术）、绝对王权势能（势）兼并天下。',
    elevatorPitch: '不要指望仁义道德感化臣民！人性自私，儿子贪图父亲家产，君臣犹如利益猎人。治理大国唯有靠“法、术、势”三位一体：法令明确公之于众，以刑去刑；君王深藏不露操纵权术；耕战一体，让国家变成最强悍精密的战争兼并机器！',
    coreTenets: [
      '性恶功利论：民之性，饥而求食，劳而求佚，唯有赏罚信赏必罚方能驱使',
      '法、术、势结合：法莫如显，术莫如隐，势者胜众之资也',
      '富国强兵与重农抑商耕战政策，打破贵族世袭特权推行军功爵制',
    ],
    internetReality: '秦始皇统一中国车同轨书同文的铁血底色，中国两千年“外儒内法”政治运作的暗黑操作系统。',
    dailyLifeManifestation: '公司制度化改革，取消任何人情面子，KPI指标与全勤迟到罚款软件严格透明自动扣罚。',
    keyThinkers: [
      { name: '韩非子 (Han Feizi)', era: '约前280-前233', note: '法家集大成者' },
      { name: '商鞅 (Shang Yang)', era: '约前390-前338', note: '商鞅变法奠定大秦霸业' },
      { name: '李斯 (Li Si)', era: '约前284-前208', note: '秦朝丞相，废分封立郡县' }
    ],
    famousQuote: { quote: '法不阿贵，绳不挠曲。法之所加，智者弗能辞，勇者弗敢争。', author: '韩非子' },
    spectrum: { political: -1.0, economic: -0.6, social: -0.9 },
    initialPosition: { x: 260, y: 260 }
  },

  // 249. 墨家主义 (Mohism)
  {
    id: 'mohism',
    name: '墨家主义',
    englishName: 'Mohism',
    category: 'philosophical',
    color: '#a855f7',
    period: '先秦墨翟创立',
    eraYear: -450,
    summary: '墨翟创立，主张“兼爱、非攻、尚贤、尚同、节用”，中国古典最具平民纪律、功利主义与科学逻辑色彩的平民学派。',
    elevatorPitch: '穿粗布草鞋、日夜奔走救难的墨者军团！反对儒家有等差的爱，主张视人之国若视其国、视人之身若视其身的“兼相爱，交相利”；痛恨大国攻小国的不义战争，亲自奔赴战场守城（墨守成规）；钻研小孔成像力学光学，追求平民互助大同。',
    coreTenets: [
      '兼爱非攻：无差别的博爱并坚决反对非正义的侵略战争',
      '尚贤与尚同：打破门阀血统唯贤是用，统一百姓思想与社会公义',
      '科学工程探索：中国最早系统研究光学、力学杠杆与形式逻辑推理的学派',
    ],
    internetReality: '当代极客、公益行动派与守卫和平反侵略者最为神往与惋惜的先秦绝响学派。',
    dailyLifeManifestation: '面对强凌弱见义勇为挺身而出，日常极度节俭生活但把节省下来的收入全用于公益援助。',
    keyThinkers: [
      { name: '墨子 (Mozi)', era: '约前476-前390', note: '墨家学派领袖兼科学家' }
    ],
    famousQuote: { quote: '兼相爱，交相利。天下兼相爱则治，交相恶则乱。', author: '墨子' },
    spectrum: { political: 0.3, economic: -0.8, social: 0.7 },
    initialPosition: { x: 320, y: 290 }
  },

  // 250. 三民主义 (Tridemism / Three Principles of the People)
  {
    id: 'tridemism',
    name: '三民主义',
    englishName: 'Tridemism',
    category: 'political',
    color: '#38bdf8',
    period: '孙中山创立，辛亥革命指导思想',
    eraYear: 1905,
    summary: '孙中山创立，融合西方宪政民主、亨利·乔治土地思想与中国大同传统，拆解为民族主义、民权主义、民生主义。',
    elevatorPitch: '推翻两千年满清帝制建立亚洲第一共和国！民族主义（驱除鞑虏，恢复中华，民族平等）；民权主义（主权在民，创立五权宪法，人民有选举、罢免、创制、复决权）；民生主义（平均地权、节制资本、耕者有其田），铸就走向现代中国的伟大航灯。',
    coreTenets: [
      '民族主义：对外争取中华民族完全独立自决平等，对内实现国内各民族平等团结',
      '民权主义：政权在民（人民行使四权）与治权在政府（五权分立宪法）',
      '民生主义：平均地权（照价纳税、涨价归公）与节制资本，防范贫富两极撕裂',
    ],
    internetReality: '两岸中国人共同尊敬的孙中山先生留下的最宝贵现代政治制度思想遗产。',
    dailyLifeManifestation: '城市规划中政府征收土地涨价归公用于全民养老与保障房建设。',
    keyThinkers: [
      { name: '孙中山 (Sun Yat-sen)', era: '1866-1925', note: '中国民主革命伟大先行者' }
    ],
    famousQuote: { quote: '天下为公。革命尚未成功，同志仍须努力。', author: '孙中山' },
    spectrum: { political: 0.2, economic: -0.4, social: 0.4 },
    initialPosition: { x: 380, y: 320 }
  }
];
