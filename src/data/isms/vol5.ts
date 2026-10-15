import { IsmNode } from '../../types/ism';

// 第五卷：社会主义、共产主义与无政府主义大族谱 (141 – 190)
export const VOL5_ISMS: IsmNode[] = [
  // 141. 社会主义 (Socialism)
  {
    id: 'socialism',
    name: '社会主义',
    englishName: 'Socialism',
    category: 'political',
    color: '#38bdf8',
    period: '19世纪工业革命反思至今',
    eraYear: 1848,
    summary: '生产资料社会共有或集体所有，按劳分配与社会保障，根除资本主义剥削。',
    elevatorPitch: '劳动创造了世间的一切繁荣，凭什么大部分剩余价值被不劳而获的资本寡头占有？生产资料应当归全社会公有，以社会需求而非资本逐利为生产导向，让每一个劳动者活得有尊严。',
    coreTenets: [
      '生产资料公有制或劳动者民主自治所有',
      '消灭雇佣劳动剥削，消除两极分化',
      '以全人类的真正物质与文化福祉为生产目的',
    ],
    internetReality: '当代欧美“千禧一代社会主义热”与中文互联网工人权益讨论的最核心共识支柱。',
    dailyLifeManifestation: '公立免费义务教育、全民医保、国家电网普惠补贴与工会带薪年假。',
    keyThinkers: [
      { name: '卡尔·马克思', era: '1818-1883', note: '科学社会主义奠基人' },
      { name: '罗伯特·欧文', era: '1771-1858', note: '新拉纳克合作社先驱' }
    ],
    famousQuote: { quote: '每个人的自由发展是一切人自由发展的条件。', author: '《共产党宣言》' },
    spectrum: { political: 0.1, economic: -0.85, social: 0.7 },
    initialPosition: { x: -650, y: 350 }
  },

  // 142. 空想社会主义 / 乌托邦社会主义 (Utopian Socialism)
  {
    id: 'utopian_socialism',
    name: '空想社会主义',
    englishName: 'Utopian Socialism',
    category: 'political',
    color: '#38bdf8',
    period: '19世纪上半叶圣西门、傅立叶、欧文',
    eraYear: 1820,
    summary: '寄希望于模范公社实验、道德感化与富豪良心发现，反对阶级斗争与暴力夺权。',
    elevatorPitch: '欧文花光积蓄在美国购买三万英亩土地建立“新和谐公社”，傅立叶规划人人各尽其能的“法朗吉（Phalanstère）”。他们最早揭露资本主义罪恶，但因脱离历史唯物主义与阶级斗争规律而终归破产。',
    coreTenets: [
      '用和平示范性的微观共产主义公社实验感召全世界',
      '诉诸博爱与理性，批判早期工业资本主义的野蛮血汗',
      '拒绝暴力革命与无产阶级独立政党组织',
    ],
    internetReality: '为马克思科学社会主义提供了三大直接理论思想来源之一。',
    dailyLifeManifestation: '现代以色列基布兹（Kibbutz）集体农庄或欧美生态公社的自给自足实践。',
    keyThinkers: [
      { name: '罗伯特·欧文 (Robert Owen)', era: '1771-1858', note: '新和谐公社创办者' },
      { name: '夏尔·傅立叶 (Charles Fourier)', era: '1772-1837', note: '法朗吉协作社设计' },
      { name: '圣西门 (Henri de Saint-Simon)', era: '1760-1825', note: '实业家与学者共治' }
    ],
    famousQuote: { quote: '协作代替竞争，友爱代替剥削。', author: '欧文' },
    spectrum: { political: 0.4, economic: -0.7, social: 0.8 },
    initialPosition: { x: -700, y: 300 }
  },

  // 143. 布朗基主义 (Blanquism)
  {
    id: 'blanquism',
    name: '布朗基主义',
    englishName: 'Blanquism',
    category: 'political',
    color: '#38bdf8',
    period: '19世纪中叶法国',
    eraYear: 1839,
    summary: '主张不依靠广大群众的自发觉醒，而由极少数铁血纪律的职业密谋家武装政变夺取政权并实行革命独裁。',
    elevatorPitch: '大众已经被长期的宗教迷信与统治阶级洗脑麻痹了！如果等待大众觉醒，革命将遥遥无期。唯有由少数意志如铁的密谋先锋队发动突然武装起义、攻占市政厅，夺取政权后再以革命专政启蒙大众！一生大半在牢狱中度过。',
    coreTenets: [
      '高度秘密、严密纪律的职业密谋家核心小组组织形态',
      '坚信暴力武装政变是夺取国家机器的唯一手段',
      '在夺权后实施无情的临时革命独裁过渡',
    ],
    internetReality: '巴黎公社的重要军事骨干，也成为后世马克思与列宁关于“先锋党与群众路线”争辩的关键参照系。',
    dailyLifeManifestation: '影视作品中一群戴着面具、分工严密的孤胆革命黑客奇袭网络中枢的行动狂热。',
    keyThinkers: [
      { name: '路易·奥古斯特·布朗基', era: '1805-1881', note: '“被囚禁的普罗米修斯”' }
    ],
    famousQuote: { quote: '手里有武器的人，桌上就有面包！', author: '布朗基' },
    spectrum: { political: -0.8, economic: -0.9, social: 0.4 },
    initialPosition: { x: -750, y: 330 }
  },

  // 144. 拉萨尔主义 (Lassallism)
  {
    id: 'lassallism',
    name: '拉萨尔主义',
    englishName: 'Lassallism',
    category: 'political',
    color: '#38bdf8',
    period: '1863年全德工人联合会成立',
    eraYear: 1863,
    summary: '提出“铁的工资规律”，主张通过争取普选权、依靠普鲁士国家贷款扶植工人生产合作社和平进入社会主义。',
    elevatorPitch: '在资本主义下，工人工资永远被“铁的规律”压制在维持生理生存的最低线上！如何破局？通过和平合法斗争争取普选权，让国家拨款出资为工人建立生产合作社，借助国家力量和平赎买资本。',
    coreTenets: [
      '铁的工资规律（Iron Law of Wages）：自由市场竞争必定把工资压至最低生存极限',
      '国家帮助论：崇拜国家机器，把普鲁士国家视作超阶级的仁慈中介',
      '马克思《哥达纲领批判》的正面阻击批判对象',
    ],
    internetReality: '德国早期工运主流，后来演化为魏玛共和国社民党议会合法斗争的思想前驱。',
    dailyLifeManifestation: '寄希望于政府对特定贫困群体发放财政专项低息贷款，扶植合作社自力更生。',
    keyThinkers: [
      { name: '斐迪南·拉萨尔 (Ferdinand Lassalle)', era: '1825-1864', note: '全德工人联合会主席' }
    ],
    famousQuote: { quote: '国家是实现人类自由与发展最崇高的道德组织。', author: '拉萨尔' },
    spectrum: { political: -0.4, economic: -0.7, social: 0.1 },
    initialPosition: { x: -680, y: 260 }
  },

  // 145. 共产主义 (Communism)
  {
    id: 'communism',
    name: '共产主义',
    englishName: 'Communism',
    category: 'political',
    color: '#38bdf8',
    period: '1848年《共产党宣言》至今',
    eraYear: 1848,
    summary: '彻底消灭私有制、阶级剥削、雇佣货币与国家暴力机器，实现“各尽所能，按需分配”的自由人联合体。',
    elevatorPitch: '人类社会演进的终极高级形态。生产力高度发达，物质财富如泉水般涌流；随着私有制与阶级的消灭，国家机器自然消亡。劳动不再是谋生异化的苦役，而成为生活的第一需要，每个人自由而全面地发展！',
    coreTenets: [
      '废除私有制与剥削阶级，生产资料由全社会共同直接占有',
      '从按劳分配过渡到“各尽所能，按需分配（From each according to his ability, to each according to his need）”',
      '国家的自行消亡（Withering away of the State）与自由人联合体',
    ],
    internetReality: '20世纪波澜壮阔的世界共运指导旗帜，也是互联网开源软件“人人贡献、自由下载”最生动的赛博现实映射。',
    dailyLifeManifestation: '开源社区如维基百科和Linux，不收分文、各展所长、全球任何人免费按需获取信息。',
    keyThinkers: [
      { name: '卡尔·马克思', era: '1818-1883', note: '科学社会主义与唯物史观' },
      { name: '弗里德里希·恩格斯', era: '1820-1895', note: '《社会主义从空想到科学的发展》' }
    ],
    famousQuote: { quote: '代替那存在着阶级和阶级对立的资产阶级旧社会的，将是这样一个联合体，在那里，每个人的自由发展是一切人的自由发展的条件。', author: '《共产党宣言》' },
    spectrum: { political: 0.0, economic: -1.0, social: 0.9 },
    initialPosition: { x: -800, y: 380 }
  },

  // 146. 马克思主义 (Marxism)
  {
    id: 'marxism',
    name: '马克思主义',
    englishName: 'Marxism',
    category: 'philosophical',
    color: '#a855f7',
    period: '19世纪中叶创立',
    eraYear: 1867,
    summary: '唯物史观、剩余价值论与阶级斗争学说构成的科学体系，揭示资本主义生产方式内在固有矛盾。',
    elevatorPitch: '马克思不是书斋里的伦理说教，而是对资本主义进行了最深刻的政治经济学病理解剖！《资本论》证明：利润不是来自资本家的聪明才智，而是工人在剩余劳动时间创造的无偿剩余价值。资本主义固有内在危机终将自我敲响丧钟。',
    coreTenets: [
      '辩证唯物主义与历史唯物主义的世界观与方法论',
      '剩余价值学说（Surplus Value）：资本积累与劳动异化',
      '无产阶级是资本主义的掘墓人，革命专政是历史过渡的桥梁',
    ],
    internetReality: '改变近现代人类世界地缘版图最深远庞大的哲学思想巨峰。',
    dailyLifeManifestation: '下班时看着公司净利润几十亿而员工只拿到几千块死工资，深刻顿悟剩余价值被无情吸血的真相。',
    keyThinkers: [
      { name: '卡尔·马克思 (Karl Marx)', era: '1818-1883', note: '千年第一思想家' },
      { name: '弗里德里希·恩格斯', era: '1820-1895', note: '亲密战友' }
    ],
    famousQuote: { quote: '全世界无产者，联合起来！', author: '马克思与恩格斯' },
    spectrum: { political: -0.2, economic: -0.95, social: 0.7 },
    initialPosition: { x: -740, y: 420 }
  },

  // 147. 考茨基主义 / 第二国际正统马克思主义 (Kautskyism)
  {
    id: 'kautskyism',
    name: '考茨基主义',
    englishName: 'Kautskyism',
    category: 'political',
    color: '#38bdf8',
    period: '第二国际时期（1889-1914）',
    eraYear: 1891,
    summary: '卡尔·考茨基代表，第二国际正统，强调生产力自然成熟规律，既反对公开放弃目标，又反对列宁暴力夺权。',
    elevatorPitch: '“马克思主义教皇”考茨基坚信：资本主义必然由于自身生产力发展而自然走向成熟危机，无产阶级只需在议会与工会中稳健组织积累力量，等待果实自然熟透落下。反对在落后的俄国搞布尔什维克冒险早产夺权。',
    coreTenets: [
      '经济决定论与历史进化渐进论：跨越资本主义成熟阶段注定走向专制畸形',
      '坚持普选制代议民主是走向社会主义的必由之路',
      '超帝国主义论（Ultra-imperialism）：各大帝国主义财阀可能联合和平瓜分世界',
    ],
    internetReality: '被列宁《无产阶级革命与叛徒考茨基》猛烈批判，但其对先锋队专政极权化风险的预言极具历史反思价值。',
    dailyLifeManifestation: '相信科技和生产力自然进步终会和平消灭匮乏，反对任何流血偏激的过激举动。',
    keyThinkers: [
      { name: '卡尔·考茨基 (Karl Kautsky)', era: '1854-1938', note: '爱尔福特纲领起草人' }
    ],
    famousQuote: { quote: '没有民主的社会主义，根本不是真正的社会主义。', author: '考茨基' },
    spectrum: { political: 0.2, economic: -0.7, social: 0.4 },
    initialPosition: { x: -680, y: 460 }
  },

  // 148. 修正主义 / 伯恩施坦主义 (Revisionism / Bernsteinism)
  {
    id: 'revisionism',
    name: '伯恩施坦修正主义',
    englishName: 'Revisionism',
    category: 'political',
    color: '#38bdf8',
    period: '1899年《社会主义的前提与社民党的任务》',
    eraYear: 1899,
    summary: '修正马克思的贫困化与崩溃论，名言“最终目的算不得什么，运动就是一切”，开创现代社会民主主义。',
    elevatorPitch: '马克思预言的资本主义迅速崩溃并未发生，工人的生活水平反而在工会斗争下显著提高了！为什么还要死抱暴力武装革命教条不放？通过议会民主立法、八小时工作制与税收改良，每天进步一点点。运动即是一切！',
    coreTenets: [
      '运动就是一切，最终目的算不得什么（The movement is everything, the final goal nothing）',
      '修正阶级极化与资本主义必然总崩溃的教条预言',
      '全面拥抱普选民主宪政，通过和平改良逐步实现社会主义理想',
    ],
    internetReality: '导致国际共运第一次大分裂，直接化身现代西欧北欧社会民主党执政纲领的真正摇篮。',
    dailyLifeManifestation: '不奢望一朝消灭资本，积极通过工会集体谈判为外卖骑手争取五险一金和高温补贴。',
    keyThinkers: [
      { name: '爱德华·伯恩施坦 (Eduard Bernstein)', era: '1850-1932', note: '修正主义鼻祖' }
    ],
    famousQuote: { quote: '最终目的算不得什么，运动就是一切。', author: '伯恩施坦' },
    spectrum: { political: 0.4, economic: -0.5, social: 0.6 },
    initialPosition: { x: -620, y: 490 }
  },

  // 149. 列宁主义 (Leninism)
  {
    id: 'leninism',
    name: '列宁主义',
    englishName: 'Leninism',
    category: 'political',
    color: '#38bdf8',
    period: '20世纪初帝国主义与无产阶级革命时代',
    eraYear: 1917,
    summary: '先锋队政党理论、帝国主义论、工农联盟与在资本主义薄弱链条突破夺取政权。',
    elevatorPitch: '自发工运只能产生工联主义，社会主义意识必须由职业革命家“先锋队政党”从外部灌输！帝国主义是垄断寄生的垂死资本主义，全球链条最脆弱的环节（如沙皇俄国）即便落后，无产阶级也能领导工农打响革命第一枪！',
    coreTenets: [
      '新型无产阶级先锋队政党理论（民主集中制 Democratic Centralism）',
      '帝国主义是资本主义发展的最高也是最后阶段',
      '暴力打碎旧国家机器，建立工兵农苏维埃无产阶级专政',
    ],
    internetReality: '十月革命一声炮响，彻底改变20世纪全球半壁江山政治版图的革命巨擘。',
    dailyLifeManifestation: '组织管理中推行“会前充分讨论，一旦表决通过全员无条件步调一致严格执行”的民主集中纪律。',
    keyThinkers: [
      { name: 'V.I. 列宁 (Vladimir Lenin)', era: '1870-1924', note: '《国家与革命》《帝国主义论》' }
    ],
    famousQuote: { quote: '没有革命的理论，就不会有革命的运动。', author: '列宁' },
    spectrum: { political: -0.85, economic: -0.95, social: 0.5 },
    initialPosition: { x: -820, y: 460 }
  },

  // 150. 马克思列宁主义 (Marxism-Leninism)
  {
    id: 'marxism_leninism',
    name: '马克思列宁主义',
    englishName: 'Marxism-Leninism',
    category: 'political',
    color: '#38bdf8',
    period: '20世纪社会主义国家正统指导思想',
    eraYear: 1924,
    summary: '马克思唯物史观与列宁先锋队国家学说的系统化正统整合，20世纪社会主义阵营官方基石。',
    elevatorPitch: '把马克思的政治经济学、辩证法与列宁的执政党建设、反帝民族解放理论铸造成不可分割的统一科学体系。指导了苏联、中国、越南、古巴等一系列社会主义国家的建党、建军与工业化现代化探索。',
    coreTenets: [
      '科学社会主义、辩证唯物主义与历史唯物主义统一体系',
      '共产党作为长期执政与领导社会主义现代化建设的核心先锋队',
      '无产阶级专政与工农联盟国家政权巩固',
    ],
    internetReality: '当代中国特色社会主义理论体系的根本指导思想源头。',
    dailyLifeManifestation: '基层党支部建设、“牢记初心使命”、坚持以人民为中心的发展理念。',
    keyThinkers: [
      { name: '卡尔·马克思', era: '1818-1883', note: '理论源头' },
      { name: 'V.I. 列宁', era: '1870-1924', note: '实践与先锋队建制' }
    ],
    famousQuote: { quote: '马列主义的普遍真理必须同本国的具体国情相结合。', author: '经典共运准则' },
    spectrum: { political: -0.8, economic: -0.9, social: 0.4 },
    initialPosition: { x: -780, y: 510 }
  },

  // 151. 斯大林主义 (Stalinism)
  {
    id: 'stalinism',
    name: '斯大林主义',
    englishName: 'Stalinism',
    category: 'political',
    color: '#38bdf8',
    period: '1920年代末至1953年苏联体制',
    eraYear: 1928,
    summary: '“一国建成社会主义”、指令性计划经济、农业全盘集体化、重工业狂飙与高度集权政治。',
    elevatorPitch: '在帝国主义严密包围封锁下，我们必须在十年内跑完西方一百年的工业化路程，否则就会被碾碎！国家强力集中一切资源，五年计划、重工业第一、集体农庄，用铁腕清洗异己，在卫国战争中打败纳粹德国崛起为超级大国。',
    coreTenets: [
      '一国建成社会主义论（Socialism in One Country）',
      '国家计委指令性高度集中计划经济与优先发展重工业国防',
      '高压行政命令体制、个人崇拜与尖锐阶级斗争扩大化',
    ],
    internetReality: '中文网络常被称作“慈父大林”，在反法西斯胜利功绩与大清洗、农业肃反悲剧之间引发极其激烈的两极评价。',
    dailyLifeManifestation: '宏伟冷峻的斯大林式帝国摩天大楼（莫斯科七姐妹）、钢铁洪流军事阅兵审美。',
    keyThinkers: [
      { name: '约瑟夫·斯大林 (Joseph Stalin)', era: '1878-1953', note: '苏联最高领导人' }
    ],
    famousQuote: { quote: '延缓速度就是落后，而落后者是要挨打的！', author: '斯大林' },
    spectrum: { political: -0.95, economic: -1.0, social: -0.6 },
    initialPosition: { x: -880, y: 530 }
  },

  // 152. 托洛茨基主义 (Trotskyism)
  {
    id: 'trotskyism',
    name: '托洛茨基主义',
    englishName: 'Trotskyism',
    category: 'political',
    color: '#38bdf8',
    period: '1920年代与斯大林决裂，第四国际成立',
    eraYear: 1938,
    summary: '托洛茨基创立，主张“不断革命论”、世界革命与工人民主，激烈批判苏联官僚特权堕落。',
    elevatorPitch: '“一国无法最终建成社会主义”！孤立的社会主义国家如果不把革命推向欧美发达工业国，就必然退化为一个寄生在工人阶级身上的官僚畸形国家。必须发动第四国际，坚持不断革命与无产阶级底层苏维埃民主！',
    coreTenets: [
      '不断革命论（Permanent Revolution）：落后国家的民主革命必须不间断演进为社会主义世界革命',
      '堕落的工人国家论：苏联经济基础是公有的，但上层建筑已被官僚阶层篡夺',
      '坚持工人民主、反对个人独裁与反对官僚特权分配制',
    ],
    internetReality: '全球各大高校激进左翼青年社团（托派）最热衷的理论旗帜，以热衷无限细分小宗派闻名。',
    dailyLifeManifestation: '组织跨国独立工人声援网络，拒绝为任何建制派官方工会背书。',
    keyThinkers: [
      { name: '列夫·托洛茨基 (Leon Trotsky)', era: '1879-1940', note: '红军缔造者，《被背叛的革命》' }
    ],
    famousQuote: { quote: '生活并没有那么糟糕，无论如何，不断革命万岁！', author: '托洛茨基' },
    spectrum: { political: 0.2, economic: -0.95, social: 0.8 },
    initialPosition: { x: -740, y: 560 }
  },

  // 153. 波萨达斯主义 (Posadism)
  {
    id: 'posadism',
    name: '波萨达斯主义',
    englishName: 'Posadism',
    category: 'contemporary',
    color: '#ec4899',
    period: '冷战时期第四国际分裂派别',
    eraYear: 1962,
    summary: '阿根廷托派波萨达斯创立，认为核战争将摧毁资本主义废墟，并坚信外星飞碟共产主义文明将降临拯救地球。',
    elevatorPitch: '冷战核阴云下的终极奇葩狂想！资本主义终将发动核战，但这正好扫清资本主义一切残余；更重要的是：能够造出飞碟跨越星际旅行的外星文明，在技术高度发达的前提下必然已经进入了共产主义大同！呼叫外星同志支援地球革命！与海豚心智交流。',
    coreTenets: [
      '革命灾难主义：全面核战争是催生全球社会主义新生的催化剂',
      '外星UFO共产主义说：掌握星际航行科技的外星文明必无私有制与阶级',
      '跨物种非人类沟通（海豚与鲸鱼的革命潜能）',
    ],
    internetReality: '当代欧美亚文化Meme界的无上狂欢神梗（“核弹、海豚、外星飞碟”三位一体）。',
    dailyLifeManifestation: '看科幻电影《降临》时认真思考七肢桶外星文明是否拥有星际公有制。',
    keyThinkers: [
      { name: 'J. 波萨达斯 (J. Posadas)', era: '1912-1981', note: '拉丁美洲第四国际怪杰' }
    ],
    famousQuote: { quote: '核大战不是终结，而是资本主义覆灭与真正自由世界诞生的开始。', author: '波萨达斯' },
    spectrum: { political: 0.5, economic: -1.0, social: 1.0 },
    initialPosition: { x: -700, y: 620 }
  },

  // 154. 布哈林主义 (Bukharinism)
  {
    id: 'bukharinism',
    name: '布哈林主义',
    englishName: 'Bukharinism',
    category: 'political',
    color: '#38bdf8',
    period: '1920年代苏联新经济政策（NEP）时期',
    eraYear: 1925,
    summary: '布哈林代表，主张延续列宁新经济政策，允许农民发家致富，通过工农联盟温和渐进长入社会主义。',
    elevatorPitch: '不要杀鸡取卵式地剥夺农民！列宁的新经济政策不能废弃。向农民喊出：“发财吧，积累吧，发展自己的经济吧！”让农村通过市场贸易积累资金，带动轻工业，再反哺重工业，如同“骑着蜗牛慢慢爬入社会主义”。',
    coreTenets: [
      '保护工农联盟：用市场交换代替强行征粮与流血剥夺',
      '利用商品货币关系与市场机制建设社会主义经济基础',
      '反对托洛茨基的超工业化与斯大林的农业全盘集体化暴力跃进',
    ],
    internetReality: '中国1978年改革开放实行家庭联产承包责任制与社会主义市场经济的重要历史理论参照。',
    dailyLifeManifestation: '允许农民把自己地里种的蔬菜直接挑到集市上自由摆摊卖钱，搞活地摊经济。',
    keyThinkers: [
      { name: '尼古拉·布哈林 (Nikolai Bukharin)', era: '1888-1938', note: '“党的最宠爱的理论家”' }
    ],
    famousQuote: { quote: '我们要向全体农民，向所有的农民说：发财吧，积累吧，发展自己的经济吧！', author: '布哈林' },
    spectrum: { political: -0.3, economic: -0.5, social: 0.3 },
    initialPosition: { x: -640, y: 540 }
  },

  // 155. 毛主义 (Maoism)
  {
    id: 'maoism',
    name: '毛主义 / 国际毛泽东主义',
    englishName: 'Maoism',
    category: 'political',
    color: '#38bdf8',
    period: '20世纪中叶中国革命至亚非拉第三世界运动',
    eraYear: 1949,
    summary: '农村包围城市、持久人民战争、群众路线、实事求是与社会主义时期继续革命理论。',
    elevatorPitch: '在半殖民地半封建国家，工人阶级必须深入广大农村发动亿万农民，开展游击战建立根据地，以农村包围城市最终夺取政权！“枪杆子里面出政权”，“一切反动派都是纸老虎”。强调主观能动性与深入群众打成一片。',
    coreTenets: [
      '农村包围城市武装夺取政权与持久人民战争（People\'s War）',
      '从群众中来，到群众中去：群众路线是党的最根本工作路线',
      '矛盾论与实践论：抓住主要矛盾，在实践中检验与发展真理',
    ],
    internetReality: '在尼泊尔、印度（纳萨尔派）、菲律宾以及欧美激进学生运动中拥有极强国际号召力。',
    dailyLifeManifestation: '遇到任何棘手问题亲自“下沉一线走访调研”，“没有调查就没有发言权”。',
    keyThinkers: [
      { name: '毛泽东 (Mao Zedong)', era: '1893-1976', note: '新中国缔造者，伟大战略家' }
    ],
    famousQuote: { quote: '星星之火，可以燎原。', author: '毛泽东' },
    spectrum: { political: -0.7, economic: -0.9, social: 0.6 },
    initialPosition: { x: -840, y: 600 }
  },

  // 156. 铁托主义 (Titoism)
  {
    id: 'titoism',
    name: '铁托主义',
    englishName: 'Titoism',
    category: 'political',
    color: '#38bdf8',
    period: '1948年苏南决裂后南斯拉夫实践',
    eraYear: 1950,
    summary: '南斯拉夫铁托创立，反抗苏联老子党指挥，推行“工人自治委员会管理工厂”与不结盟运动。',
    elevatorPitch: '社会主义工厂的主人不应是莫斯科派来的死板官僚，而应当是车间里的工人自己！工厂由工人自治委员会民主开会管理，自负盈亏；外交上绝不做任何超级大国的卫星国，联合广大第三世界发起不结盟运动。',
    coreTenets: [
      '社会所有制与工人自治（Workers\' Self-Management）：劳动者直接参与企业经营决策',
      '市场社会主义探索：引入价格机制调节消费品生产',
      '不结盟运动（Non-Aligned Movement）：保持国家完全独立自决',
    ],
    internetReality: '当代欧美“去中心化自治组织（DAO）”与企业民主改革争相借鉴的先驱样本。',
    dailyLifeManifestation: '全厂工人在礼堂投票表决工厂总经理任命与年终利润留存比例。',
    keyThinkers: [
      { name: '约瑟普·布罗兹·铁托', era: '1892-1980', note: '南斯拉夫联邦总统，不结盟之父' },
      { name: '爱德华·卡德尔 (Edvard Kardelj)', era: '1910-1979', note: '工人自治体制总设计师' }
    ],
    famousQuote: { quote: '把工厂交给工人，这是社会主义最庄严的誓言。', author: '铁托' },
    spectrum: { political: -0.2, economic: -0.6, social: 0.5 },
    initialPosition: { x: -780, y: 660 }
  },

  // 157. 霍查主义 (Hoxhaism)
  {
    id: 'hoxhaism',
    name: '霍查主义',
    englishName: 'Hoxhaism',
    category: 'political',
    color: '#38bdf8',
    period: '冷战中后期阿尔巴尼亚',
    eraYear: 1961,
    summary: '阿尔巴尼亚恩维尔·霍查创立，极端反修正主义，先后与南斯拉夫、苏联、中国决裂，坚守最正统斯大林路线。',
    elevatorPitch: '全世界都修正主义变修了，唯有阿尔巴尼亚是欧洲唯一的正统马列红旗！坚决杜绝一切妥协，消灭一切宗教教堂，在全国修建几十万个混凝土碉堡防范全球进攻。绝对闭关锁国的纯正原教旨堡垒。',
    coreTenets: [
      '最彻底坚决的反修正主义：批判赫鲁晓夫与一切国际改良路线',
      '激进世俗化：1967年宣布阿尔巴尼亚成为世界首个无神论国家，严厉铲除宗教',
      '全民皆兵、遍布全国数十万地堡的孤立防御战争体系',
    ],
    internetReality: '被称为“地堡之国”，是国际极左原教旨教条主义闭门造车的悲情绝唱。',
    dailyLifeManifestation: '如今阿尔巴尼亚遍布漫山遍野被改造成咖啡馆与青年旅舍的历史混凝土小碉堡。',
    keyThinkers: [
      { name: '恩维尔·霍查 (Enver Hoxha)', era: '1908-1985', note: '阿尔巴尼亚劳动党第一书记' }
    ],
    famousQuote: { quote: '哪怕吃草，我们也要保卫社会主义的绝对纯洁性！', author: '霍查' },
    spectrum: { political: -0.98, economic: -1.0, social: -0.7 },
    initialPosition: { x: -880, y: 640 }
  },

  // 158. 卡斯特罗主义 (Castroism)
  {
    id: 'castroism',
    name: '卡斯特罗主义',
    englishName: 'Castroism',
    category: 'political',
    color: '#38bdf8',
    period: '1959年古巴革命至今',
    eraYear: 1959,
    summary: '菲德尔·卡斯特罗领导，融合马列主义、拉美反帝民族主义何塞·马蒂传统与免费全民高质医疗教育。',
    elevatorPitch: '在距离美国佛罗里达仅90海里的加勒比小岛上，抵御世界第一霸权长达60多年的全面经济封锁！建立起全球最顶级的全民免费医疗与识字率体系，向全球数十个国家派出医疗队支援第三世界。',
    coreTenets: [
      '拉美独立先驱何塞·马蒂民族主义与科学社会主义的紧密结合',
      '国家将医疗、公共卫生、教育与体育视作至高神圣的全民基本权利',
      '不屈从美帝国主义封锁与制裁的持久抗争意志',
    ],
    internetReality: '新冠疫情期间古巴医生飞赴意大利伦巴第救援，在拉美左翼浪潮中享有极高精神威望。',
    dailyLifeManifestation: '古巴普通百姓人均预期寿命超越许多发达国家，家庭医生随叫随到免费上门。',
    keyThinkers: [
      { name: '菲利尔·卡斯特罗 (Fidel Castro)', era: '1926-2016', note: '《历史将宣判我无罪》' },
      { name: '何塞·马蒂 (José Martí)', era: '1853-1895', note: '古巴民族独立先驱' }
    ],
    famousQuote: { quote: '祖国或死亡，我们必胜！（Patria o Muerte, Venceremos!）', author: '卡斯特罗' },
    spectrum: { political: -0.7, economic: -0.9, social: 0.6 },
    initialPosition: { x: -820, y: 710 }
  },

  // 159. 格瓦拉主义 (Guevarism)
  {
    id: 'guevarism',
    name: '格瓦拉主义',
    englishName: 'Guevarism',
    category: 'political',
    color: '#38bdf8',
    period: '1960年代拉美游击战与浪漫革命',
    eraYear: 1960,
    summary: '切·格瓦拉创立，核心为“游击中心论（Foco Theory）”与依靠崇高道德精神塑造无私的“社会主义新人”。',
    elevatorPitch: '不要等待革命客观条件全部成熟，勇敢的游击中心（Foco）本身就是点燃革命燎原烈火的发电机！反对单纯靠物质利益刺激生产，那会把人腐蚀成自私动物；依靠崇高的革命激情与义务劳动，塑造纯洁无私的“社会主义新人”。',
    coreTenets: [
      '游击中心论（Foco Theory）：少数武装游击队可以主动制造革命主客观条件',
      '精神道德激励优先于物质刺激，塑造超越私利的社会主义新人（New Socialist Man）',
      '永不停歇的世界无产阶级国际主义战斗（在刚果和玻利维亚丛林献出生命）',
    ],
    internetReality: '切·格瓦拉戴贝雷帽的肖像成为全球青年反叛、摇滚与理想主义最著名的文化消费与信仰符号。',
    dailyLifeManifestation: '自愿利用周末参加无偿植树或义工劳动，认为为他人奉献是人生精神纯净的最高升华。',
    keyThinkers: [
      { name: '切·格瓦拉 (Che Guevara)', era: '1928-1967', note: '《游击战》《古巴社会主义与人》' },
      { name: '雷吉斯·德布雷 (Régis Debray)', era: '1940-', note: '《革命中的革命》' }
    ],
    famousQuote: { quote: '让我们面对现实，让我们忠于理想！', author: '切·格瓦拉' },
    spectrum: { political: -0.5, economic: -0.95, social: 0.8 },
    initialPosition: { x: -750, y: 740 }
  },

  // 160. 卢森堡主义 (Luxemburgism)
  {
    id: 'luxemburgism',
    name: '卢森堡主义',
    englishName: 'Luxemburgism',
    category: 'political',
    color: '#38bdf8',
    period: '20世纪初德国斯巴达克同盟',
    eraYear: 1918,
    summary: '罗莎·卢森堡创立，既反修正主义投降，又批评列宁集权专政，强调革命群众自发性与社会主义完全民主自由。',
    elevatorPitch: '“自由始终只是持不同见解者的自由！”没有言论自由、没有不受限制的新闻与集会出版自由，苏维埃政权就不可避免地退化为少数官僚寡头的死水专制。坚定相信底层群众在总罢工中的自发革命创造力。',
    coreTenets: [
      '群众自发性（Mass Spontaneity）与总罢工革命理论',
      '自由始终只是持异见者的自由（Freiheit ist immer Freiheit der Andersdenkenden）',
      '资本积累论：资本主义必须不断吞噬外部非资本主义市场方能维系',
    ],
    internetReality: '民主社会主义者与自由左翼共同的崇高圣女图腾，20世纪反官僚极权最犀利的马克思主义火种。',
    dailyLifeManifestation: '开会时即便所有人一致同意，也坚决捍卫那个唯一敢提出尖锐反对意见的下属发表意见的权利。',
    keyThinkers: [
      { name: '罗莎·卢森堡 (Rosa Luxemburg)', era: '1871-1919', note: '《社会改良还是革命》《论俄国革命》' },
      { name: '卡尔·李卜克内西', era: '1871-1919', note: '反战英雄，德国共产党创始人' }
    ],
    famousQuote: { quote: '自由始终只是持有不同思想者的自由。', author: '罗莎·卢森堡' },
    spectrum: { political: 0.5, economic: -0.9, social: 0.9 },
    initialPosition: { x: -680, y: 720 }
  },

  // 161. 左翼共产主义 / 博尔迪加主义 (Left Communism / Bordigism)
  {
    id: 'left_communism',
    name: '左翼共产主义 / 博尔迪加主义',
    englishName: 'Left Communism',
    category: 'political',
    color: '#38bdf8',
    period: '1920年代共产国际早期左派反对派',
    eraYear: 1920,
    summary: '意大利阿马德奥·博尔迪加代表，拒绝参加任何资产阶级议会选举与工会妥协，坚守绝对纯正的不妥协阶级立场。',
    elevatorPitch: '不要跟资产阶级议会玩虚伪的游戏！参加议会投票就是把工人阶级出卖给民主改良迷魂汤；拒绝同社会民主党搞任何统战妥协，反对任何形式的商品经济与民族主义。列宁曾专门撰写《共产主义运动中的“左派”幼稚病》予以驳斥。',
    coreTenets: [
      '反议会主义（Anti-parliamentarism）：彻底抵制资产阶级选举与改良骗局',
      '拒绝同工会改良派或资产阶级民主派建立统一战线',
      '无产阶级先锋党必须保持无任何妥协污染的绝对理论纯洁性',
    ],
    internetReality: '当今Reddit与网络理论圈被称为“终极键盘纯正马列主义者”，因反对一切现实政权而著名。',
    dailyLifeManifestation: '面对政客的一切所谓民生补贴福利法案，冷笑表示“这只是资本家延缓寿命的止痛药”。',
    keyThinkers: [
      { name: '阿马德奥·博尔迪加 (Amadeo Bordiga)', era: '1889-1970', note: '意大利共产党首任总书记' }
    ],
    famousQuote: { quote: '革命不需要任何民主的伪善包装，阶级专政就是真理本身。', author: '博尔迪加' },
    spectrum: { political: -0.6, economic: -1.0, social: 0.4 },
    initialPosition: { x: -740, y: 680 }
  },

  // 162. 委员会共产主义 (Council Communism)
  {
    id: 'council_communism',
    name: '委员会共产主义',
    englishName: 'Council Communism',
    category: 'political',
    color: '#38bdf8',
    period: '20世纪20-30年代荷德左翼',
    eraYear: 1920,
    summary: '潘涅库克、科尔施创立，反对列宁式先锋党专政，主张由工厂工人委员会直接掌握全部国家政权与生产管理。',
    elevatorPitch: '不要列宁先锋党，也不要国家官僚！政党夺权最终只会建立党专政的新压迫阶级。真正的社会主义必须是由每一个工厂的工人委员会（Councils / Räte）直接民主开会、直接接管机器，由联合公社自下而上横向组织生产！',
    coreTenets: [
      '工人委员会（Workers\' Councils）作为唯一的社会政治与经济权力机构',
      '坚决反抗职业先锋政党专政与官僚国家主义',
      '劳动者直接民主自发管理，无需职业官僚政客代理人',
    ],
    internetReality: '欧洲自由主义马克思主义（Libertarian Marxism）的明珠，彻底颠覆了“社会主义必然意味着大政府极权”的偏见。',
    dailyLifeManifestation: '程序员团队彻底抛弃所有项目经理与中层主管，依靠开源代码协作与全体投票直接推进系统迭代。',
    keyThinkers: [
      { name: '安东·潘涅库克 (Anton Pannekoek)', era: '1873-1960', note: '天文学家兼马克思主义理论家' },
      { name: '卡尔·科尔施 (Karl Korsch)', era: '1886-1961', note: '《马克思主义和哲学》' }
    ],
    famousQuote: { quote: '工人阶级必须由自己来解放自己，而不是依靠任何拯救者先锋党。', author: '潘涅库克' },
    spectrum: { political: 0.6, economic: -1.0, social: 0.9 },
    initialPosition: { x: -680, y: 670 }
  },

  // 163. 欧洲共产主义 (Eurocommunism)
  {
    id: 'eurocommunism',
    name: '欧洲共产主义',
    englishName: 'Eurocommunism',
    category: 'political',
    color: '#38bdf8',
    period: '1970年代意大利、西班牙、法国共产党',
    eraYear: 1975,
    summary: '贝林格代表，宣布彻底摆脱莫斯科苏联领导，接受多党议会民主制、尊重宗教信仰自由与法治人权。',
    elevatorPitch: '在发达西欧，复制俄国十月革命的武装夺权是行不通的！意大利共产党领袖贝林格提出“历史性妥协”：放弃苏联教条，承认多党轮替竞争、捍卫公民言论集会自由，在民主宪政框架内赢得执政权并推行渐进变革。',
    coreTenets: [
      '彻底摆脱苏联共产党老大哥监护与华约阵营控制',
      '接纳多党竞争体制与宪政民主程序',
      '通过广泛民主联盟与文化领导权实现向社会主义和平过渡',
    ],
    internetReality: '冷战时期意共成为西方世界最大共产党的辉煌密码，也为冷战后欧洲左翼转型铺垫了跑道。',
    dailyLifeManifestation: '共产党议员在议会里就养老金提高法案与天主教民主党议员举行文明握手辩论。',
    keyThinkers: [
      { name: '恩里科·贝林格 (Enrico Berlinguer)', era: '1922-1984', note: '意大利共产党总书记' },
      { name: '圣地亚哥·卡里略 (Santiago Carrillo)', era: '1915-2012', note: '《欧洲共产主义与国家》' }
    ],
    famousQuote: { quote: '民主绝不仅是资产阶级形式，民主是全人类历经千年斗争赢得的普遍价值。', author: '贝林格' },
    spectrum: { political: 0.3, economic: -0.6, social: 0.6 },
    initialPosition: { x: -620, y: 630 }
  },

  // 164. 西方马克思主义 (Western Marxism)
  {
    id: 'western_marxism',
    name: '西方马克思主义',
    englishName: 'Western Marxism',
    category: 'philosophical',
    color: '#a855f7',
    period: '1923年卢卡奇《历史与阶级意识》开创',
    eraYear: 1923,
    summary: '卢卡奇开创，走出苏东教条体系，把理论重心转向意识形态批判、商品拜物教物化（Reification）与文化异化。',
    elevatorPitch: '为什么西方工人阶级没有自发发动革命？因为资本主义早已将有毒的物化逻辑渗透进每一个人的骨髓！商品拜物教让人像看待客观物理定律一样看待资本压迫，连人的时间、情感与心智都被商品化为冷冰冰的数字。',
    coreTenets: [
      '物化理论（Reification）：资本主义商品结构对人性和主客体关系的全面侵蚀',
      '总体性范畴（Totality）：反对庸俗经济决定论，强调辩证总体性方法',
      '从政治经济学与武装暴动转向文化、哲学、美学与心理意识形态深层解剖',
    ],
    internetReality: '当代批判网络算法成瘾、消费异化与996牛马心态的无可替代的高级理论弹药库。',
    dailyLifeManifestation: '谈恋爱时双方潜意识里拿身高、存款、房产证算计评分，发现连爱情也被彻底物化为资产重组。',
    keyThinkers: [
      { name: '捷尔吉·卢卡奇 (György Lukács)', era: '1885-1971', note: '《历史与阶级意识》' },
      { name: '卡尔·科尔施 (Karl Korsch)', era: '1886-1961', note: '《马克思主义和哲学》' }
    ],
    famousQuote: { quote: '物化是生活在现代资本主义社会中的人普遍面临的根本命运。', author: '卢卡奇' },
    spectrum: { political: 0.2, economic: -0.85, social: 0.8 },
    initialPosition: { x: -560, y: 600 }
  },

  // 165. 葛兰西主义 (Gramscianism)
  {
    id: 'gramscianism',
    name: '葛兰西主义',
    englishName: 'Gramscianism',
    category: 'political',
    color: '#38bdf8',
    period: '1929-1935年葛兰西在法西斯监狱写下《狱中札记》',
    eraYear: 1930,
    summary: '葛兰西创立，提出“文化领导权（Hegemony）”、“有机知识分子”与市民社会意识形态“阵地战”。',
    elevatorPitch: '统治阶级不仅靠军队警察等硬暴力（统治），更依靠学校、教会、报刊传媒让被统治者自愿认同其统治价值（文化领导权）！夺取政权之前，必须先在市民社会中打响长期的意识形态“阵地战”，培养工农阶级自己的“有机知识分子”。',
    coreTenets: [
      '文化霸权/文化领导权（Cultural Hegemony）：依靠道德与智性威望制造大众共识',
      '阵地战（War of Position）优于暴力运动战（War of Movement）',
      '有机知识分子（Organic Intellectuals）：植根于具体阶级并为其赋予自我阶级意识',
    ],
    internetReality: '当今全球互联网“抓夺话语权”、“争夺认知战高地”与主流意识形态阵地战的最高理论指导。',
    dailyLifeManifestation: '通过影视剧、网络段子和科普漫画潜移默化传播正能量价值观，争取青年群体的心理共鸣。',
    keyThinkers: [
      { name: '安东尼奥·葛兰西 (Antonio Gramsci)', era: '1891-1937', note: '意共领袖，《狱中札记》' }
    ],
    famousQuote: { quote: '理智上保持悲观，意志上坚守乐观。', author: '葛兰西' },
    spectrum: { political: -0.2, economic: -0.85, social: 0.75 },
    initialPosition: { x: -500, y: 570 }
  },

  // 166. 新马克思主义 / 法兰克福批判理论 (Neo-Marxism)
  {
    id: 'frankfurt_school',
    name: '批判理论 / 法兰克福学派',
    englishName: 'Frankfurt School',
    category: 'philosophical',
    color: '#a855f7',
    period: '1930年代法兰克福社会研究所至今',
    eraYear: 1944,
    summary: '霍克海默、阿多诺、马尔库塞代表，结合弗洛伊德精神分析批判工具理性异化与资本主义“文化工业”。',
    elevatorPitch: '为什么现代科技越繁荣，人类反而越不自由？启蒙理性走向了自身的反面，沦为压榨统治的“工具理性”！好莱坞和流行乐等“文化工业”流水线量产廉价娱乐奶头乐，把反抗者抚慰阉割为温顺麻木的“单向度的人（One-Dimensional Man）”。',
    coreTenets: [
      '启蒙辩证法：理性神话破产，工具理性吞噬价值理性',
      '文化工业批判（Culture Industry）：大众文化成为麻痹阶级反抗意识的洗脑机器',
      '单向度的人与大拒绝（The Great Refusal）：呼唤边缘少数群体的彻底反叛',
    ],
    internetReality: '短视频算法成瘾、奶头乐沉迷与流行饭圈文化最犀利深邃的解剖手术刀。',
    dailyLifeManifestation: '下班刷了四个小时短视频哈哈大笑，关掉手机后突然被巨大的空虚感与异化感席卷。',
    keyThinkers: [
      { name: '西奥多·阿多诺 (Theodor W. Adorno)', era: '1903-1969', note: '《启蒙辩证法》《否定的辩证法》' },
      { name: '马克斯·霍克海默', era: '1895-1973', note: '批判理论开山领袖' },
      { name: '赫伯特·马尔库塞 (Herbert Marcuse)', era: '1898-1979', note: '《单向度的人》1968造反精神教父' }
    ],
    famousQuote: { quote: '在奥斯维辛之后，写诗是野蛮的。', author: '阿多诺' },
    spectrum: { political: 0.4, economic: -0.8, social: 0.9 },
    initialPosition: { x: -440, y: 540 }
  },

  // 167. 结构主义马克思主义 (Structural Marxism)
  {
    id: 'structural_marxism',
    name: '结构主义马克思主义',
    englishName: 'Structural Marxism',
    category: 'philosophical',
    color: '#a855f7',
    period: '20世纪60年代路易·阿尔都塞创立',
    eraYear: 1965,
    summary: '阿尔都塞创立，坚决反人道主义，提出意识形态国家机器（ISA）与“多元决定（Overdetermination）”。',
    elevatorPitch: '不要谈什么抽象人道主义的“人的本质复归”！马克思的伟大在于建立了历史科学。国家不仅有军队警察等“压迫性国家机器（RSA）”，更有学校、教会、家庭等“意识形态国家机器（ISA）”通过日常仪式将个体“传唤（Interpellation）”为主体。',
    coreTenets: [
      '认识论断裂（Epistemological Break）：青年马克思的人道主义到成熟期科学马克思的飞跃',
      '意识形态国家机器（Ideological State Apparatuses, ISA）',
      '传唤机制（Interpellation）：意识形态把个人召唤并建构为服从既有秩序的主体',
    ],
    internetReality: '齐泽克拉康主义政治哲学、现代电影意识形态批评与文化研究必读圣经。',
    dailyLifeManifestation: '路上听到交警喊一声“那位市民站住！”，你下意识停步回头心虚，这便是经典的“被意识形态传唤”。',
    keyThinkers: [
      { name: '路易·阿尔都塞 (Louis Althusser)', era: '1918-1990', note: '《保卫马克思》《读〈资本论〉》' }
    ],
    famousQuote: { quote: '意识形态表述的不是人与其实存条件的关系，而是他们体验这种关系的方式。', author: '阿尔都塞' },
    spectrum: { political: -0.4, economic: -0.9, social: 0.7 },
    initialPosition: { x: -380, y: 510 }
  },

  // 168. 分析马克思主义 (Analytical Marxism)
  {
    id: 'analytical_marxism',
    name: '分析马克思主义',
    englishName: 'Analytical Marxism',
    category: 'philosophical',
    color: '#a855f7',
    period: '1979年九月小组成立',
    eraYear: 1979,
    summary: 'G.A. 科恩、罗默代表，摒弃黑格尔晦涩辩证法，采用英美分析哲学、博弈论与理性选择理论重构马克思主义。',
    elevatorPitch: '谁说马克思主义必须用黑格尔式云遮雾罩的哲学黑话？我们要用最严谨无懈可击的现代数理逻辑、微观经济学博弈论和理性人假设，把历史唯物主义与剥削理论重构得像现代物理定理一样坚固自洽！',
    coreTenets: [
      '“无废话的马克思主义（Non-bullshit Marxism）”：追求最高度的概念明晰性与逻辑严密性',
      '方法论个人主义（Methodological Individualism）与博弈论阶级斗争模型',
      '科恩对历史唯物主义生产力决定生产关系首要性（Primacy Thesis）的功能解释辩护',
    ],
    internetReality: '英美顶尖名校哲学系（牛津、哈佛）研究马克思主义的核心规范主流学术范式。',
    dailyLifeManifestation: '用囚徒困境与集体行动的逻辑，严格数学推导工人罢工时为什么容易出现搭便车叛变。',
    keyThinkers: [
      { name: 'G.A. 科恩 (G.A. Cohen)', era: '1941-2009', note: '《卡尔·马克思的历史理论：一个辩护》' },
      { name: '约翰·罗默 (John Roemer)', era: '1945-', note: '《剥削与阶级的一般理论》' },
      { name: '乔恩·埃尔斯特 (Jon Elster)', era: '1940-', note: '理性选择马克思主义' }
    ],
    famousQuote: { quote: '如果一项社会主义命题是真的，它就应当经受住最严谨分析逻辑的无情审讯。', author: '科恩' },
    spectrum: { political: 0.1, economic: -0.85, social: 0.6 },
    initialPosition: { x: -320, y: 480 }
  },

  // 169. 自治主义马克思主义 (Autonomist Marxism)
  {
    id: 'autonomist_marxism',
    name: '自治主义马克思主义',
    englishName: 'Autonomist Marxism',
    category: 'political',
    color: '#38bdf8',
    period: '1960-70年代意大利工人物义（Operaismo）与当代《帝国》',
    eraYear: 1970,
    summary: '奈格里、哈特创立，强调工人阶级与非物质劳动“诸众（Multitude）”独立于政党与工会的自主反抗。',
    elevatorPitch: '资本主义从来不是主动创新的，资本主义的一切技术升级都是被工人阶级自发的罢工反抗给逼出来的！当今全球化时代，非物质劳动（代码、情感、符号）的“诸众”已经具备自我组织网络，无需列宁式政党代理，直接在网络中发起自治起义！',
    coreTenets: [
      '工人的斗争先于并驱动资本的发展（工人阶级首要性）',
      '非物质劳动（Immaterial Labor）成为剩余价值生产主导形式',
      '诸众（Multitude）概念：去中心化的平民网络打破传统阶级与帝国主权',
    ],
    internetReality: '从“占领华尔街”到欧洲无头抗议（黄色背心）背后的深层理论底气。',
    dailyLifeManifestation: '远程办公自由职业者通过开源聊天群组和DAO组织联合发起针对平台抽成霸王条款的集体罢工。',
    keyThinkers: [
      { name: '安东尼奥·奈格里 (Antonio Negri)', era: '1933-2023', note: '《帝国》《诸众》' },
      { name: '马里奥·特龙蒂 (Mario Tronti)', era: '1931-2023', note: '工人物义先驱' }
    ],
    famousQuote: { quote: '诸众不是一个被动的群体，诸众是一个充满创造力、自我生长的反叛网络。', author: '奈格里与哈特' },
    spectrum: { political: 0.85, economic: -0.9, social: 0.95 },
    initialPosition: { x: -260, y: 450 }
  },

  // 170. 民主社会主义 (Democratic Socialism)
  {
    id: 'democratic_socialism',
    name: '民主社会主义',
    englishName: 'Democratic Socialism',
    category: 'political',
    color: '#38bdf8',
    period: '20世纪至今欧美左翼',
    eraYear: 1951,
    summary: '坚持通过多党民主选举与宪政体制，逐步实现关键产业公有、工人合作社与全面消除资本主义不平等。',
    elevatorPitch: '把政治民主彻底扩展到经济领域！如果我们在政治上有权投票选总统，为什么在每天呆8小时的职场公司里必须任由资本家专制独裁？通过宪政立法让关键金融能源公有化，让工人参与管理董事会，兼顾人权与公有。',
    coreTenets: [
      '经济民主（Economic Democracy）：将民主原则引入工作场所与企业所有权',
      '坚定捍卫多党选举、言论自由与公民人权法治',
      '逐步取代资本主义私有制，实现生产资料的社会化共同占有',
    ],
    internetReality: '桑德斯（Bernie Sanders）掀起全美年轻人竞选狂潮与美国民主社会主义者（DSA）崛起的纲领。',
    dailyLifeManifestation: '员工持股信托制企业（ESOP），工人集体投票决定今年是否投资研发新型环保设备。',
    keyThinkers: [
      { name: '伯尼·桑德斯 (Bernie Sanders)', era: '1941-', note: '美国现代民主社会主义旗帜' },
      { name: '迈克尔·哈灵顿 (Michael Harrington)', era: '1928-1989', note: '美国民主社会主义者（DSA）创始人' }
    ],
    famousQuote: { quote: '民主若是止步于工厂大门前，就绝不是真正的民主。', author: '民主社会主义口号' },
    spectrum: { political: 0.5, economic: -0.85, social: 0.8 },
    initialPosition: { x: -580, y: 430 }
  },

  // 171. 社会民主主义 (Social Democracy)
  {
    id: 'social_democracy',
    name: '社会民主主义',
    englishName: 'Social Democracy',
    category: 'political',
    color: '#38bdf8',
    period: '二战后北欧模式鼎盛至今',
    eraYear: 1959,
    summary: '在完全保留资本主义私有制与自由市场的前提下，通过高累进税、强有力福利国家与劳资协商驯化资本。',
    elevatorPitch: '不要搞废除私有制的乌托邦革命！承认市场经济创造财富的无敌效率，但通过强大的工会集体谈判、高额累进税以及从摇篮到坟墓的全民免费高福利，抚平贫富差距，给资本主义戴上仁慈温良的人道项圈。',
    coreTenets: [
      '保留资本主义私有制市场经济，放弃全盘公有化教条（1959年哥德斯堡纲领）',
      '从摇篮到坟墓（Cradle to grave）的全能全民福利安全网',
      '高税收、高转移支付、三方协商机制实现基尼系数全球最低',
    ],
    internetReality: '被誉为全世界最宜居、最幸福的社会范式（瑞典、挪威、丹麦、芬兰模式）。',
    dailyLifeManifestation: '休长达一年的带薪产假，全家享受免费医疗教育，失业期间领取原工资80%的救济金。',
    keyThinkers: [
      { name: '奥洛夫·帕尔梅 (Olof Palme)', era: '1927-1986', note: '瑞典前首相，北欧模式典范' },
      { name: '维利·勃兰特 (Willy Brandt)', era: '1913-1992', note: '德国社民党总理，华沙之跪' }
    ],
    famousQuote: { quote: '只要可能，就尽可能实行市场经济；只要必要，就尽可能实行社会计划。', author: '哥德斯堡纲领口号' },
    spectrum: { political: 0.4, economic: -0.6, social: 0.75 },
    initialPosition: { x: -520, y: 400 }
  },

  // 172. 费边社会主义 (Fabianism)
  {
    id: 'fabianism',
    name: '费边社会主义',
    englishName: 'Fabianism',
    category: 'political',
    color: '#38bdf8',
    period: '1884年英国费边社成立',
    eraYear: 1884,
    summary: '萧伯纳、韦伯夫妇创立，以古罗马名将费边命名，主张放弃暴力革命，通过精英研究、市政改革与学术渗透渐进实现社会主义。',
    elevatorPitch: '古罗马将军费边靠拖死汉尼拔而闻名！不要搞流血暴动。创办顶尖大学（伦敦政经学院LSE）、撰写详实的社会统计报告，像水银泻地一样游说议员与公务员，把供水、煤气、电车收归市政公有（“煤气与自来水社会主义”）。',
    coreTenets: [
      '渐进主义必然性（Inevitability of Gradualism）：依靠制度渗透而非流血起义',
      '市政社会主义（Municipal Socialism）：优先将水电气暖公用事业收归市政公营',
      '精英专家调查研究与创办高等教育阵地（创办LSE与《新政治家》）',
    ],
    internetReality: '英国工党建立的思想母体，深度塑造了现代西方福利与公务员智库决策体系。',
    dailyLifeManifestation: '市议会通过专家严密论证，把全市公交系统与供暖管网改制为非营利性公共市政服务。',
    keyThinkers: [
      { name: '乔治·伯纳德·萧 (George Bernard Shaw)', era: '1856-1950', note: '诺贝尔文学奖得主兼费边主将' },
      { name: '悉尼·韦伯与比阿特丽斯·韦伯夫妇', era: '1859-1947', note: '费边社与LSE创始人' }
    ],
    famousQuote: { quote: '对于大问题，我们必须学会耐心地小步走。', author: '费边社箴言' },
    spectrum: { political: 0.2, economic: -0.5, social: 0.5 },
    initialPosition: { x: -460, y: 370 }
  },

  // 173. 基尔特社会主义 / 行会社会主义 (Guild Socialism)
  {
    id: 'guild_socialism',
    name: '行会社会主义 / 基尔特社会主义',
    englishName: 'Guild Socialism',
    category: 'political',
    color: '#38bdf8',
    period: '20世纪初英国',
    eraYear: 1914,
    summary: 'G.D.H. 科尔创立，融合中世纪行会工匠传统与社会主义，主张由全国行业自治行会管理生产，国家仅保留协调。',
    elevatorPitch: '既反对官僚集权的国家垄断，也反对资本主义老板的压榨！把每个行业（煤矿、机械、教师）组织成全行业自律工匠行会（Guild），行会自己选举管理者、决定生产工艺，国家只是代表消费者利益的松散协调人。',
    coreTenets: [
      '工业自决自治：生产由各行业工人与专业行会民主管理',
      '功能性民主：个人以生产者（行会成员）与消费者（公民）双重身份参与治理',
      '复兴工匠精神与劳动自豪感，抵御流水线流水作业的异化',
    ],
    internetReality: '对现代行业自律协会、专业资格认证准入与去中心化职业联合提供了丰富灵感。',
    dailyLifeManifestation: '建筑师事务所或独立会计师事务所完全由合伙人行会自治委员会决定执业规范与收入分成。',
    keyThinkers: [
      { name: 'G.D.H. 科尔 (G.D.H. Cole)', era: '1889-1959', note: '牛津社会理论教授' }
    ],
    famousQuote: { quote: '劳动者必须在自己的工作现场中成为真正有尊严的主人。', author: '科尔' },
    spectrum: { political: 0.5, economic: -0.7, social: 0.6 },
    initialPosition: { x: -400, y: 400 }
  },

  // 174. 市场社会主义 (Market Socialism)
  {
    id: 'market_socialism',
    name: '市场社会主义',
    englishName: 'Market Socialism',
    category: 'political',
    color: '#38bdf8',
    period: '1930年代奥斯卡·兰格模型至今',
    eraYear: 1936,
    summary: '奥斯卡·兰格提出，生产资料实行公有制或员工自治所有，但商品交换完全通过自由市场价格供求机制进行配置。',
    elevatorPitch: '哈耶克曾嘲笑计划经济算不清几亿种商品价格。经济学家兰格反戈一击：“兰格模型”证明：资本与企业归全社会所有，但工厂经理必须像资本家一样根据市场价格信号自主竞争买卖！既消除资本家私人剥削，又保留市场神准的资源配置效率。',
    coreTenets: [
      '生产资料公有制或集体合作社所有制（利润归劳动者或全民）',
      '保留市场价格供求竞争机制作为资源配置核心手段',
      '破解米塞斯与哈耶克的“社会主义经济计算不可行”难题',
    ],
    internetReality: '中国“社会主义市场经济”体制改革与南斯拉夫战后实践在经济学学理层面的最核心基座。',
    dailyLifeManifestation: '大型国有控股企业在公开股票市场上挂牌交易、按照市场供求与民企公平竞标。',
    keyThinkers: [
      { name: '奥斯卡·兰格 (Oskar Lange)', era: '1904-1965', note: '波兰经济学家，兰格模型创立者' },
      { name: '阿兰·诺夫 (Alec Nove)', era: '1915-1994', note: '《可行的社会主义经济学》' }
    ],
    famousQuote: { quote: '为了感谢哈耶克教授对社会主义计算的挑战，未来的中央计划委员会应当为他树立一座铜像。', author: '兰格' },
    spectrum: { political: -0.1, economic: -0.5, social: 0.4 },
    initialPosition: { x: -440, y: 450 }
  },

  // 175. 基督教社会主义 (Christian Socialism)
  {
    id: 'christian_socialism',
    name: '基督教社会主义',
    englishName: 'Christian Socialism',
    category: 'political',
    color: '#38bdf8',
    period: '19世纪中叶英国莫里斯、金斯利发端',
    eraYear: 1848,
    summary: '莫里斯、金斯利创立，认为耶稣福音本质上蕴含财产共有、扶助穷人与对资本主义贪婪剥削的深刻神圣定罪。',
    elevatorPitch: '早期耶路撒冷基督徒“人人凡物公用，按各人所需分给各人”（《使徒行传》）！耶稣基督一生同情麻风病人与渔夫穷人，斥责富人进天国比骆驼穿过针眼还难。将福音信仰与消除阶级贫困的社会主义运动结合。',
    coreTenets: [
      '耶稣基督的教导本质上与自由放任资本主义的自私贪婪根本水火不容',
      '恢复早期原始教会的凡物共有与博爱扶倾传统',
      '通过道德觉醒、工人工会与合作社运动和平改造资本主义',
    ],
    internetReality: '马丁·路德·金民权运动与欧美诸多反战反饥荒基督教慈善运动的深层精神支柱。',
    dailyLifeManifestation: '教会组织信徒集体开辟无家可归者免费收容所与食物银行（Food Bank）。',
    keyThinkers: [
      { name: 'F.D. 莫里斯 (F.D. Maurice)', era: '1805-1872', note: '英国基督教社会主义奠基人' },
      { name: '查尔斯·金斯利', era: '1819-1875', note: '小说家兼社会改革家' }
    ],
    famousQuote: { quote: '基督教是唯一的真正社会主义，而社会主义是基督教的完全实践。', author: '莫里斯' },
    spectrum: { political: 0.1, economic: -0.6, social: 0.1 },
    initialPosition: { x: -380, y: 470 }
  },

  // 176. 解放神学主义 (Liberation Theology)
  {
    id: 'liberation_theology',
    name: '解放神学',
    englishName: 'Liberation Theology',
    category: 'political',
    color: '#38bdf8',
    period: '1968年拉美麦德林主教会议后爆发',
    eraYear: 1971,
    summary: '古铁雷斯代表，天主教会必须“优先选择穷人”，拿起马克思主义阶级分析反抗军阀独裁与跨国财阀依附压迫。',
    elevatorPitch: '神父不仅在祭坛上念经，神父必须走到贫民窟和丛林里与被压迫的农民站在一起！“罪恶”不仅是个人的私德瑕疵，更是结构性的社会不公。耶稣是真正的穷人解放者，教会必须投身反抗军事独裁与帝国主义掠夺的革命斗争。',
    coreTenets: [
      '为穷人优先选择（Preferential Option for the Poor）',
      '结构性罪恶批判：贫困是资本主义不公制度造成的制度性谋杀',
      '融合圣经出埃及记解放叙事与现代马克思主义社会依附理论',
    ],
    internetReality: '当代教皇方济各深受其浸润熏陶，在拉美左翼运动与抗击军政府独裁中立下不可磨灭的功勋。',
    dailyLifeManifestation: '年轻神职人员脱下华丽圣袍，在泥泞破旧的贫民窟带领工人和矿工组建维权自卫工会。',
    keyThinkers: [
      { name: '古斯塔沃·古铁雷斯', era: '1928-2024', note: '《解放神学》奠基秘鲁神父' },
      { name: '莱昂纳多·博夫 (Leonardo Boff)', era: '1938-', note: '巴西生态解放神学巨擘' }
    ],
    famousQuote: { quote: '当我给穷人面包时，他们叫我圣人；当我问为什么穷人没有面包时，他们却叫我共产党人。', author: '埃尔德·卡马拉总主教' },
    spectrum: { political: 0.4, economic: -0.85, social: 0.8 },
    initialPosition: { x: -320, y: 520 }
  },

  // 177. 生态社会主义 (Eco-socialism)
  {
    id: 'eco_socialism',
    name: '生态社会主义',
    englishName: 'Eco-socialism',
    category: 'political',
    color: '#38bdf8',
    period: '20世纪末由奥康纳、福斯特倡导',
    eraYear: 1988,
    summary: '福斯特、洛维代表，指出资本无限资本积累扩张的死结必然与地球生态承载力发生根本性破裂（生态断裂）。',
    elevatorPitch: '绿水青山与资本增殖水火不容！资本主义的本质就是无限追求利润扩张，但这必然撞上有限地球物理承载力的坚硬铁墙。所谓的“绿色资本主义/碳交易”只是金融骗局；唯有推翻资本积累逻辑、建立生产资料公有与生态规划，才能拯救地球！',
    coreTenets: [
      '资本主义第二重矛盾：生产力无限扩张与生产自然生态条件有限性之间的不可调和矛盾',
      '马克思“新陈代谢断裂（Metabolic Rift）”理论的发掘与现代发展',
      '不仅消灭阶级人剥削人，更终结人对自然的掠夺性统治',
    ],
    internetReality: '全球气候大罢课运动（Fridays for Future）与欧美“绿色新政（Green New Deal）”激进派别的灵魂导师。',
    dailyLifeManifestation: '坚决反对私人跨国矿企在原始雨林开采锂矿，呼吁将关键新能源矿产转归公有生态保育。',
    keyThinkers: [
      { name: '约翰·贝拉米·福斯特', era: '1953-', note: '《马克思的生态学》' },
      { name: '迈克尔·洛维 (Michael Löwy)', era: '1938-', note: '《生态社会主义宣言》起草人' }
    ],
    famousQuote: { quote: '要生态，就必须消灭资本主义；在有限星球上追求无限扩张无异于自杀。', author: '生态社会主义宣言' },
    spectrum: { political: 0.6, economic: -0.9, social: 0.9 },
    initialPosition: { x: -360, y: 580 }
  },

  // 178. 阿拉伯社会主义 / 复兴党主义 (Ba'athism)
  {
    id: 'baathism',
    name: '复兴党主义 / 阿拉伯社会主义',
    englishName: 'Ba\'athism',
    category: 'political',
    color: '#38bdf8',
    period: '1947年叙利亚米歇尔·阿弗拉克创立',
    eraYear: 1947,
    summary: '阿弗拉克创立，口号“统一、自由、社会主义”，融合泛阿拉伯世俗民族主义与国家主导非马列国有经济。',
    elevatorPitch: '在西方殖民帝国与封建王公的压迫下，四分五裂的阿拉伯民族必须觉醒复兴！破除宗派部落割据，建立世俗化的阿拉伯大一统共和国；国家控股石油化工大企业，兼顾社会平等福利与强力军事国防。',
    coreTenets: [
      '统一（Wahda）：全阿拉伯民族超越现有国界走向完全政治统一',
      '世俗主义：坚决抵制极端伊斯兰宗教势力干政，推行世俗现代法律',
      '非马克思主义的国有制社会主义（承认私产，但国家控制核心经济命脉）',
    ],
    internetReality: '伊拉克萨达姆政权与叙利亚阿萨德政权的执政意识形态，在中东复杂地缘绞杀中走向军事独裁异化。',
    dailyLifeManifestation: '中东大城市街头随处可见巨型领袖画像与世俗女性自由上学工作，与宗教原教旨形成鲜明对比。',
    keyThinkers: [
      { name: '米歇尔·阿弗拉克 (Michel Aflaq)', era: '1910-1989', note: '叙利亚哲学家，阿拉伯复兴党之父' }
    ],
    famousQuote: { quote: '一个统一的阿拉伯民族，拥有永恒的使命。', author: '复兴党口号' },
    spectrum: { political: -0.85, economic: -0.5, social: 0.1 },
    initialPosition: { x: -420, y: 640 }
  },

  // 179. 非洲社会主义 / 乌贾马主义 (African Socialism / Ujamaa)
  {
    id: 'african_socialism',
    name: '非洲社会主义 / 乌贾马主义',
    englishName: 'African Socialism / Ujamaa',
    category: 'political',
    color: '#38bdf8',
    period: '1960年代非殖民化浪潮',
    eraYear: 1967,
    summary: '坦桑尼亚尼雷尔、加纳恩克鲁玛提出，主张基于非洲前殖民传统村落大家庭互助（Ujamaa）直接建设社会主义。',
    elevatorPitch: '非洲根本不需要阶级斗争！在欧洲殖民者到来之前，非洲传统大家庭村落里人人共同劳作、平均分配，本就是天然平等的社会主义。回归“乌贾马（斯瓦希里语：家族兄弟情谊）”，自力更生建立农村协作公社。',
    coreTenets: [
      '乌贾马精神（Ujamaa）：基于非洲传统村社大家庭亲情伦理构建公社',
      '反抗新老殖民主义剥削，坚持自力更生（Self-Reliance）',
      '拒绝苏联教条阶级斗争，强调非洲全民族天然团结一体',
    ],
    internetReality: '坦赞铁路修建的历史精神背景，非洲后殖民时代寻求独立本土现代化道路的最崇高哲学试验。',
    dailyLifeManifestation: '村民集体修缮水渠、全村儿童集中互助照料，洋溢着质朴的非洲原始公社温情。',
    keyThinkers: [
      { name: '朱利叶斯·尼雷尔 (Julius Nyerere)', era: '1922-1999', note: '坦桑尼亚国父，《阿鲁沙宣言》' },
      { name: '夸梅·恩克鲁玛 (Kwame Nkrumah)', era: '1909-1972', note: '加纳国父，泛非主义倡导者' }
    ],
    famousQuote: { quote: '社会主义是一种心灵的态度，而不是僵死的教科书公式。', author: '尼雷尔' },
    spectrum: { political: -0.3, economic: -0.6, social: 0.3 },
    initialPosition: { x: -480, y: 700 }
  },

  // 180. 民粹派社会主义 / 俄国人民党主义 (Narodnichestvo)
  {
    id: 'narodnichestvo',
    name: '民粹派社会主义',
    englishName: 'Narodnichestvo',
    category: 'political',
    color: '#38bdf8',
    period: '19世纪70年代沙俄知识分子“到民间去”运动',
    eraYear: 1874,
    summary: '赫尔岑、车尔尼雪夫斯基创立，主张俄国可绕过资本主义苦难，直接以传统农村村社（米尔 Mir）为基础和平进入社会主义。',
    elevatorPitch: '俄国青年知识分子脱下体面燕尾服，穿上农夫粗布衣，“到民间去（Idti v narod）”！俄国古老的农村公社（米尔）天然实行土地定期重分，是通往社会主义的现成胚胎。不必走西方资本主义工厂吃人血汗的老路！',
    coreTenets: [
      '以俄国传统农村村社（Mir）作为跨越资本主义的跳板基石',
      '“到民间去”：知识分子怀着愧疚忏悔之心反哺拯救受苦受难的农民',
      '后期演化出民意党极端秘密暗杀路线，最终被普列汉诺夫唯物史观超越',
    ],
    internetReality: '俄国革命最炽热悲壮的思想摇篮，孕育了后来的社会革命党（SR）与托尔斯泰主义。',
    dailyLifeManifestation: '名牌大学高材生放弃高薪，毅然前往偏远乡村担任第一书记，带领村民发展合作农业。',
    keyThinkers: [
      { name: '亚历山大·赫尔岑', era: '1812-1870', note: '俄国社会主义之父' },
      { name: '尼古拉·车尔尼雪夫斯基', era: '1828-1889', note: '《怎么办？》' }
    ],
    famousQuote: { quote: '到民间去！那是你们唯一的讲台，是洗净你们精神污浊的圣水。', author: '民粹派口号' },
    spectrum: { political: 0.4, economic: -0.7, social: 0.5 },
    initialPosition: { x: -540, y: 740 }
  },

  // 181. 无政府主义 (Anarchism)
  {
    id: 'anarchism',
    name: '无政府主义 / 安那其主义',
    englishName: 'Anarchism',
    category: 'political',
    color: '#38bdf8',
    period: '普鲁东、巴枯宁、克鲁泡特金大族谱',
    eraYear: 1840,
    summary: '戈德温、普鲁东开创，主张彻底废除国家机器、强制性法律、垄断财产与一切垂直等级统治。',
    elevatorPitch: '“既无主人，亦无奴隶（No Gods, No Masters）”！国家不是秩序的守护者，国家是暴力与特权的终极吸血鬼。人类天生具有互助协作的本能，废除所有官僚体制与强制警察，人类社会在自由公社横向自愿联合中自会繁荣井然。',
    coreTenets: [
      '对一切等级化国家、主权专制与强制公权力的根本否定',
      '自愿联合（Voluntary Association）与自由联邦契约取代强制法律',
      '直接行动（Direct Action）：不靠议会祈求恩赐，靠人民当场直接接管',
    ],
    internetReality: '开源软件黑客社区、网络去中心化协议与激进街头反威权青年的不熄旗帜。',
    dailyLifeManifestation: '几个音乐人自由聚集在地下车库即兴合奏，完全没有指挥家命令，依靠眼神与节奏自发合流。',
    keyThinkers: [
      { name: '皮埃尔-约瑟夫·普鲁东', era: '1809-1865', note: '自称无政府主义第一人，“财产即盗窃”' },
      { name: '米哈伊尔·巴枯宁 (Mikhail Bakunin)', era: '1814-1876', note: '第一国际集产无政府领袖' }
    ],
    famousQuote: { quote: '没有主人，没有上帝！（Ni Dieu ni maître!）', author: '无政府主义无上口号' },
    spectrum: { political: 1.0, economic: -0.8, social: 0.95 },
    initialPosition: { x: -850, y: 220 }
  },

  // 182. 互助主义 (Mutualism)
  {
    id: 'mutualism',
    name: '互助主义',
    englishName: 'Mutualism',
    category: 'political',
    color: '#38bdf8',
    period: '1840年普鲁东《什么是财产？》',
    eraYear: 1840,
    summary: '普鲁东创立，主张废除资本利息与地租剥削，个体劳动者与合作社通过“人民互助银行”实行按劳动价值等价交换。',
    elevatorPitch: '“财产就是盗窃！”但普鲁东反对的是依靠资本剥削躺赚的“非劳动财产”，他坚决捍卫手艺人对自己工具和产品的“占有权”。创办零利息互助银行，以劳动时间工分票自由等价交换，消灭银行金融高利贷寄生虫！',
    coreTenets: [
      '劳动价值论等价交换与建立无利息的人民人民互助信用银行（Mutual Credit）',
      '劳动者占有制取代资本主义大私有制与苏式国有制',
      '介于个人主义市场与共产主义公有制之间的平民自由联合',
    ],
    internetReality: '现代“时间银行（Time Bank）”（以服务小时换取他人服务）与点对点去中心化借贷（DeFi）的真正理论鼻祖。',
    dailyLifeManifestation: '社区木匠帮电工修好了木门，电工帮木匠重新布线，双方不涉及任何货币利息剥削，纯靠互助工时抵扣。',
    keyThinkers: [
      { name: '皮埃尔-约瑟夫·普鲁东', era: '1809-1865', note: '《贫困的哲学》《什么是所有权》' }
    ],
    famousQuote: { quote: '财产就是盗窃！自由就是无政府！', author: '普鲁东' },
    spectrum: { political: 0.95, economic: -0.5, social: 0.8 },
    initialPosition: { x: -800, y: 170 }
  },

  // 183. 利己无政府主义 (Egoist Anarchism)
  {
    id: 'egoist_anarchism',
    name: '利己无政府主义',
    englishName: 'Egoist Anarchism',
    category: 'political',
    color: '#38bdf8',
    period: '1844年麦克斯·施蒂纳《唯一者及其所有物》',
    eraYear: 1844,
    summary: '麦克斯·施蒂纳创立，拒绝国家、社会、宗教、道德与真理等一切束缚个人自主的脑中“幽灵（Spooks）”。',
    elevatorPitch: '世间除了“我这个唯一的个体”，没有任何神圣之物！国家、上帝、道德、祖国乃至人性，统统都是人们脑子里凭空捏造出来吓唬自己的“幽灵”！彻底驱散这些精神枷锁，把属于我的一切所有物夺回来，与其他唯一者建立平等的利己者联盟。',
    coreTenets: [
      '消灭幽灵（Spooks）：批判一切神圣化抽象概念对真实个体的精神压迫',
      '唯一者（The Unique One）：我是我自己的创造者与最高所有者',
      '利己者联盟（Union of Egoists）：基于各方纯粹自愿自利而临时缔结的协作关系',
    ],
    internetReality: '彻底解构一切政治正确与意识形态洗脑的终极解毒剂，深受极客独立黑客崇拜。',
    dailyLifeManifestation: '面对公司声泪俱下的“奉献大爱”团建鸡汤，内心毫无波澜，只在乎今天自己的身心愉快与实得收益。',
    keyThinkers: [
      { name: '麦克斯·施蒂纳 (Max Stirner)', era: '1806-1856', note: '《唯一者及其所有物》颠覆一切权威' }
    ],
    famousQuote: { quote: '我把我的事情建立在虚无之上；对我而言，没有什么比我自己更重要！', author: '施蒂纳' },
    spectrum: { political: 1.0, economic: 0.5, social: 1.0 },
    initialPosition: { x: -880, y: 130 }
  },

  // 184. 集产无政府主义 (Collectivist Anarchism)
  {
    id: 'collectivist_anarchism',
    name: '集产无政府主义',
    englishName: 'Collectivist Anarchism',
    category: 'political',
    color: '#38bdf8',
    period: '第一国际时期与马克思论战',
    eraYear: 1868,
    summary: '米哈伊尔·巴枯宁创立，主张立即暴力打碎国家，生产资料归劳动者集体所有，按劳动时间严格分配产品。',
    elevatorPitch: '巴枯宁警告：“如果在革命后建立所谓的无产阶级专政国家，这群以前的工人一旦成为官僚，就会比资本家更残暴地压迫人民！”坚决反对任何过渡阶段国家。在起义当天彻底摧毁国家印章与监狱，生产资料集体所有，按工时票报酬。',
    coreTenets: [
      '对“无产阶级过渡国家专政”的致命先觉预言与绝不妥协的反抗',
      '生产资料归自愿组织的劳动者公社集体共有',
      '产品分配实行按劳时间分配（区别于克鲁泡特金的完全按需分配）',
    ],
    internetReality: '历史上第一国际内部“马克思派 vs 巴枯宁派”大分裂的主角，安那其运动的铁血战神。',
    dailyLifeManifestation: '街头抗议运动中拒绝任何政党插旗招安，自发用燃烧瓶与路障对抗防暴警察。',
    keyThinkers: [
      { name: '米哈伊尔·巴枯宁 (Mikhail Bakunin)', era: '1814-1876', note: '《上帝与国家》狂暴革命者' }
    ],
    famousQuote: { quote: '破坏的激情，同时也就是一种创造的激情！', author: '巴枯宁' },
    spectrum: { political: 1.0, economic: -0.9, social: 0.9 },
    initialPosition: { x: -920, y: 190 }
  },

  // 185. 无政府共产主义 (Anarcho-communism)
  {
    id: 'anarcho_communism',
    name: '无政府共产主义',
    englishName: 'Anarcho-communism',
    category: 'political',
    color: '#38bdf8',
    period: '1892年克鲁泡特金《面包与自由》',
    eraYear: 1892,
    summary: '彼得·克鲁泡特金创立，主张立即废除国家、私有制与工资货币制度，依靠人类互助本能实现自由公社联合与“按需分配”。',
    elevatorPitch: '俄国贵族地理学家克鲁泡特金在西伯利亚动物考察中发现：物竞天择的根本不是自相残杀，而是“互助（Mutual Aid）”！既然财富是全人类千万代人共同创造的，任何工分票或工资制都是虚伪的。推翻国家，夺取面包，按需各取所需！',
    coreTenets: [
      '互助论（Mutual Aid）：互助是人类演化与社会进步的最根本法则',
      '彻底消灭货币、私有产权与工资雇佣制度',
      '直接走向“各尽所能，按需分配（Take from the pile）”的自由公社联邦网络',
    ],
    internetReality: '西班牙内战时期加泰罗尼亚公社（乔治·奥威尔《致敬加泰罗尼亚》亲历）的伟大现实奇迹。',
    dailyLifeManifestation: '免费食物分享冰箱（Community Fridge），人人自愿放入多余食物，任何需要的人无条件自取。',
    keyThinkers: [
      { name: '彼得·克鲁泡特金 (Peter Kropotkin)', era: '1842-1921', note: '“安那其王子”《互助论》《面包与自由》' },
      { name: '埃里克·马拉泰斯塔', era: '1853-1932', note: '意大利无政府共产主义鼓动家' },
      { name: '埃玛·戈尔德曼 (Emma Goldman)', era: '1869-1940', note: '“如果不能跳舞，我就不要你的革命”' }
    ],
    famousQuote: { quote: '一切属于大家！只要我们拥有工具与双手，面包与自由就永远属于人民。', author: '克鲁泡特金' },
    spectrum: { political: 1.0, economic: -1.0, social: 1.0 },
    initialPosition: { x: -950, y: 250 }
  },

  // 186. 无政府工团主义 (Anarcho-syndicalism)
  {
    id: 'anarcho_syndicalism',
    name: '无政府工团主义',
    englishName: 'Anarcho-syndicalism',
    category: 'political',
    color: '#38bdf8',
    period: '19世纪末至西班牙内战（CNT-FAI）',
    eraYear: 1910,
    summary: '鲁道夫·罗克尔代表，主张以革命革命工会（Syndicat）作为组织核心，通过革命总罢工瘫痪资本家并直接接管全部生产。',
    elevatorPitch: '工会不该是乞求施舍的谈判工具，革命工会就是未来自由社会的细胞！日常在车间怠工怠业抵制剥削，积累力量；当时机成熟，全行业打响“革命总罢工”，工厂停电、铁路停运，资本家立刻跪下，工会当场接管工厂自发运转！',
    coreTenets: [
      '革命工会（Syndicate）是阶级斗争战斗单位，也是未来自由生产的管理骨架',
      '直接行动（怠工 Sabotage、抵制 Boycott、总罢工 General Strike）',
      '坚决拒绝参加议会选举政党政治，在生产第一线直接清算剥削',
    ],
    internetReality: '西班牙CNT全国劳工联盟百万工人在内战中自主运转巴塞罗那交通工业的无上史诗。',
    dailyLifeManifestation: '法国全国交通工人为了抗议退休年龄延长，发动不间断大罢工让巴黎全城交通彻底瘫痪。',
    keyThinkers: [
      { name: '鲁道夫·罗克尔 (Rudolf Rocker)', era: '1873-1958', note: '《无政府工团主义：理论与实践》' },
      { name: '诺姆·乔姆斯基 (Noam Chomsky)', era: '1928-', note: '当代工团主义坚定理性捍卫者' }
    ],
    famousQuote: { quote: '工人的双手创造了世界，当这双手交叉停下来时，资本主义大厦便轰然崩塌。', author: '工团主义罢工口号' },
    spectrum: { political: 0.95, economic: -0.95, social: 0.9 },
    initialPosition: { x: -900, y: 300 }
  },

  // 187. 基督教无政府主义 (Christian Anarchism)
  {
    id: 'christian_anarchism',
    name: '基督教无政府主义',
    englishName: 'Christian Anarchism',
    category: 'political',
    color: '#38bdf8',
    period: '列夫·托尔斯泰晚年哲学体系',
    eraYear: 1894,
    summary: '列夫·托尔斯泰代表，基于《登山宝训》“勿抗恶”诫命，否定世俗政府、法庭、监狱、军队与一切强制税收。',
    elevatorPitch: '俄国文豪托尔斯泰在《天国在你们心中》疾呼：基督徒的唯一君王是上帝！世俗政府依靠军队杀戮、依靠法庭关押、依靠税吏掠夺，根本是反基督的罪恶暴力机器。基督徒应当拒绝服兵役、拒绝宣誓服从法官，以纯粹的爱与良知瓦解国家。',
    coreTenets: [
      '不以暴力抗恶（Non-resistance to evil by force）：否定一切国家合法暴力与军队',
      '唯一顺服上帝的神圣天国律法，彻底消解对世俗领袖效忠的神话',
      '简朴乡村劳动、退隐宗法皇权，身体力行基督教博爱实践',
    ],
    internetReality: '甘地非暴力抵抗与美国天主教工人运动（多萝西·戴伊 Dorothy Day）的最核心思想源泉。',
    dailyLifeManifestation: '因宗教良心彻底拒绝穿上军装服兵役扛枪（良心拒服兵役者 Conscientious Objector）。',
    keyThinkers: [
      { name: '列夫·托尔斯泰 (Leo Tolstoy)', era: '1828-1910', note: '《天国在你们心中》' },
      { name: '多萝西·戴伊 (Dorothy Day)', era: '1897-1980', note: '天主教工人运动创始人' }
    ],
    famousQuote: { quote: '国家就是那最大的暴力机器，真基督徒绝不能成为它杀人的枪炮齿轮。', author: '托尔斯泰' },
    spectrum: { political: 0.95, economic: -0.6, social: 0.2 },
    initialPosition: { x: -840, y: 150 }
  },

  // 188. 无政府和平主义 (Anarcho-pacifism)
  {
    id: 'anarcho_pacifism',
    name: '无政府和平主义',
    englishName: 'Anarcho-pacifism',
    category: 'political',
    color: '#38bdf8',
    period: '20世纪反核反战运动',
    eraYear: 1930,
    summary: '坚信手段必须与目的相匹配，主张唯有通过完全非暴力的公民不合作与直接行动，才能彻底废除国家暴力。',
    elevatorPitch: '用暴力夺权建立的政权，必定会用暴力来巩固自己，最终诞生一个更残暴的新国家！手段决定目的。你不能为了和平而杀戮，也不能为了消灭国家而建立革命军队。只有通过全社会的非暴力罢工、拒绝纳税与抗议，国家机器才能自然枯萎。',
    coreTenets: [
      '手段与目的统一论：绝不可采用不义的暴力手段去追求所谓的解放目的',
      '反军国主义与彻底废除常备军核武库',
      '非暴力直接行动（Nonviolent Direct Action）抵抗公权力压迫',
    ],
    internetReality: '反核游行、绿色和平环保行动中肉身堵截捕鲸船与核废料列车的无畏抗争者。',
    dailyLifeManifestation: '躺在军用基地铁轨前用身体阻挡运送导弹的列车开行，任由警方抬走绝不还手反抗。',
    keyThinkers: [
      { name: '巴特·德·利格特 (Bart de Ligt)', era: '1883-1938', note: '《和平的征服》' }
    ],
    famousQuote: { quote: '暴力是国家的精髓；只要你动用暴力，你就已经被国家同化了。', author: '德·利格特' },
    spectrum: { political: 0.95, economic: -0.7, social: 0.8 },
    initialPosition: { x: -780, y: 200 }
  },

  // 189. 无政府原始主义 (Anarcho-primitivism)
  {
    id: 'anarcho_primitivism',
    name: '无政府原始主义',
    englishName: 'Anarcho-primitivism',
    category: 'contemporary',
    color: '#ec4899',
    period: '20世纪后期约翰·泽尔赞与泰德·卡钦斯基',
    eraYear: 1985,
    summary: '认为农业革命、工业技术、劳动分工乃至语言符号文化本身就是人类堕落与被奴役之源，主张去文明化、重返采集狩猎。',
    elevatorPitch: '灾难不是从资本主义开始的，灾难是一万年前农业革命人类圈地定居开始的！农业带来了阶级、劳役与传染病；工业机器带来了对人性的全天候算力奴役。摧毁科技机器，炸碎工业文明锁链，回到远古采集狩猎的自由荒野大自然！',
    coreTenets: [
      '农业革命与技术文明是人类一切异化、阶级压迫与精神抑郁的总根源',
      '去工业化、去技术化、解构象征符号文化与时间钟表规训',
      '回归旧石器时代原始采集狩猎部落社群的自由本真生活',
    ],
    internetReality: '炸弹客泰德·卡钦斯基（Unabomber）《工业社会及其未来》在网民中引发关于“技术反乌托邦”的极度震撼共鸣。',
    dailyLifeManifestation: '彻底砸碎智能手机远离WiFi网络，在深山老林里搭木屋采集野果打猎隐居生活。',
    keyThinkers: [
      { name: '约翰·泽尔赞 (John Zerzan)', era: '1943-', note: '《未来原始人》' },
      { name: '泰德·卡钦斯基 (Ted Kaczynski)', era: '1942-2023', note: '数学天才炸弹客，《工业社会及其未来》' }
    ],
    famousQuote: { quote: '工业革命及其后果，对人类来说是一场灾难。', author: '卡钦斯基' },
    spectrum: { political: 1.0, economic: -0.9, social: 1.0 },
    initialPosition: { x: -920, y: 100 }
  },

  // 190. 市场无政府主义 / 广场主义 (Agorism)
  {
    id: 'agorism',
    name: '市场无政府主义 / 广场主义',
    englishName: 'Agorism',
    category: 'political',
    color: '#38bdf8',
    period: '1980年塞缪尔·爱德华·康金三世《新自由意志主义宣言》',
    eraYear: 1980,
    summary: '康金三世创立，主张通过不向国家缴税的地下灰色与黑色自由市场（反经济学 Counter-Economics），和平架空并瓦解国家。',
    elevatorPitch: '不要投票，也不要武装暴动！投票是向国家下跪，暴动是给国家镇压借口。革命就在每一个人的钱包里：用现金私下交易、用点对点去中心化加密货币结算、做不上税的自由兼职（反经济学）。当所有人都在黑市交易，国家收不到税收便自然破产崩塌！',
    coreTenets: [
      '反经济学（Counter-Economics）：通过和平隐秘的黑市与灰市规避国家税收与行政监管',
      '阿哥拉（Agora 古希腊露天自由集市）：所有商品与人际互动纯由开放自由交易达成',
      '反政治行动主义：拒绝组建政党参与体制选举，用商业黑市行动架空国家财政血液',
    ],
    internetReality: '暗网丝绸之路（Silk Road）、比特币P2P场外交易与逃税加密自由社区的真正底层政治哲学宣言。',
    dailyLifeManifestation: '买卖二手物品直接用现金或USDT钱包点对点转账，绝不开具任何发票，拒绝被征税。',
    keyThinkers: [
      { name: 'S.E. 康金三世 (Samuel Edward Konkin III)', era: '1947-2004', note: '《新自由意志主义宣言》' }
    ],
    famousQuote: { quote: '反经济学是走向自由最和平、最有效、不可阻挡的利剑。', author: '康金三世' },
    spectrum: { political: 1.0, economic: 1.0, social: 0.8 },
    initialPosition: { x: -820, y: 90 }
  }
];
