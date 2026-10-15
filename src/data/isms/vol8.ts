import { IsmNode } from '../../types/ism';

// 第八卷：艺术美学与21世纪科技后人类主义 (251 – 280 & 前沿流派)
export const VOL8_ISMS: IsmNode[] = [
  // 251. 古典主义 (Classicism)
  {
    id: 'classicism',
    name: '古典主义',
    englishName: 'Classicism',
    category: 'cultural',
    color: '#f59e0b',
    period: '17-18世纪文艺复兴至启蒙新古典主义',
    eraYear: 1650,
    summary: '崇尚古希腊罗马美学，推崇理性、秩序、比例匀称、崇高和谐与戏剧“三一律”。',
    elevatorPitch: '艺术不是肆意宣泄的个人狂乱！美必须建立在理性控制、对称和谐与庄严秩序之上。戏剧遵循严格的时间、地点、情节三一律，建筑严格讲究多立克与爱奥尼克柱式比例。克制激情，追求永恒理性之美。',
    coreTenets: [
      '尊崇古希腊罗马典范，追求理性、对称、和谐与典雅规范',
      '戏剧三一律（时间一天内、地点单一、情节单一主线）',
      '道德教化与崇高理想主义，反对粗俗琐碎的自然主义记录',
    ],
    internetReality: '欧美国家大剧院、最高法院、巴黎万神殿与华盛顿国会山庄古典罗马柱的建筑母语。',
    dailyLifeManifestation: '室内装潢追求严丝合缝的轴线对称、白石膏浮雕线框，倾听巴赫无伴奏大提琴组曲的严整对位法。',
    keyThinkers: [
      { name: '尼古拉·布瓦洛 (Nicolas Boileau)', era: '1636-1711', note: '《诗的艺术》古典主义法典' },
      { name: '雅克-路易·大卫', era: '1748-1825', note: '《荷拉斯兄弟之誓》新古典绘画宗师' }
    ],
    famousQuote: { quote: '请首先爱理性；愿你的作品永远从理性中汲取光辉与价值。', author: '布瓦洛' },
    spectrum: { political: -0.4, economic: 0.0, social: -0.6 },
    initialPosition: { x: 450, y: 300 }
  },

  // 252. 矫饰主义 / 样式主义 (Mannerism)
  {
    id: 'mannerism',
    name: '矫饰主义 / 样式主义',
    englishName: 'Mannerism',
    category: 'cultural',
    color: '#f59e0b',
    period: '16世纪晚期文艺复兴至巴洛克过渡',
    eraYear: 1530,
    summary: '反叛达·芬奇式的完美平衡，故意拉长人体比例、打破焦点透视，追求人工雕琢的冷峻优雅与焦虑张力。',
    elevatorPitch: '在拉斐尔和米开朗基罗把文艺复兴和谐写实推向绝顶之后，艺术何去何从？帕米贾尼诺把圣母的脖子拉成优雅的天鹅长颈，埃尔·格列柯把圣徒身体扭曲拉长如跃动的苍白火焰！打破呆板平衡，以极端畸变展现内心的精神焦虑。',
    coreTenets: [
      '打破古典比例平衡：蛇形曲线（Figura serpentinata）与拉长躯体',
      '非自然的空间透视压迫与冷艳人工矿物色调',
      '反映了宗教改革与罗马沦陷时期欧洲知识分子的深刻信仰危机',
    ],
    internetReality: '现代高级时尚摄影、夸张超模Pose与前卫服装剪裁中“故意反常态、冷漠高级脸”的美学先祖。',
    dailyLifeManifestation: '时尚T台模特以不可思议的折角扭转躯体，定格出拒人千里之外的冷酷前卫艺术张力。',
    keyThinkers: [
      { name: '帕米贾尼诺 (Parmigianino)', era: '1503-1540', note: '《长颈圣母》' },
      { name: '埃尔·格列柯 (El Greco)', era: '1541-1614', note: '拉长形体与神秘光影先驱' }
    ],
    famousQuote: { quote: '美不在于机械复刻自然，而在于艺术家心灵巧夺天工的造作风格（Maniera）。', author: '瓦萨里' },
    spectrum: { political: 0.1, economic: 0.0, social: 0.4 },
    initialPosition: { x: 500, y: 330 }
  },

  // 253. 浪漫主义 (Romanticism)
  {
    id: 'romanticism',
    name: '浪漫主义',
    englishName: 'Romanticism',
    category: 'cultural',
    color: '#f59e0b',
    period: '18世纪末至19世纪中叶',
    eraYear: 1798,
    summary: '卢梭、歌德、德拉克洛瓦代表，反叛冰冷理性算计，崇尚强烈个人情感、大自然崇高感与冲破一切枷锁的英雄意志。',
    elevatorPitch: '启蒙理性把世界变成了毫无生气的枯燥发条！浪漫主义者喊道：“我感知，所以我存在！”走入狂风呼啸的原始荒野，在电闪雷鸣的暴风雨前感受灵魂的战栗崇高；追寻无法实现的无限渴望，为自由、狂热与诗意献身！',
    coreTenets: [
      '主观强烈情感（狂飙突进 Sturm und Drang）与个性的无限伸张',
      '对崇高自然（Sublime）、神秘中世纪与民间史诗的深切向往',
      '反抗工业化流水线机器文明对人性的冷酷异化与规训',
    ],
    internetReality: '当代旅行博主“人生是旷野而非轨道”、逃离北上广去大理西藏寻找灵魂的最强大心理母题。',
    dailyLifeManifestation: '暴雨天一个人站在狂风肆虐的海边断崖上，任由海浪拍打礁石，感受灵魂深处翻江倒海的狂喜。',
    keyThinkers: [
      { name: '让-雅克·卢梭', era: '1712-1778', note: '浪漫主义思想教父' },
      { name: '约翰·沃尔夫冈·冯·歌德', era: '1749-1832', note: '《浮士德》《少年维特之烦恼》' },
      { name: '欧仁·德拉克洛瓦', era: '1798-1863', note: '《自由引导人民》' }
    ],
    famousQuote: { quote: '人生而自由，却无往不在枷锁之中。', author: '卢梭' },
    spectrum: { political: 0.6, economic: -0.2, social: 0.8 },
    initialPosition: { x: 560, y: 280 }
  },

  // 254. 唯美主义 (Aestheticism)
  {
    id: 'aestheticism',
    name: '唯美主义',
    englishName: 'Aestheticism',
    category: 'cultural',
    color: '#f59e0b',
    period: '19世纪末英国奥斯卡·王尔德鼎盛',
    eraYear: 1890,
    summary: '王尔德、戈蒂耶代表，口号“为艺术而艺术（L\'art pour l\'art）”，坚信美只对自身负责，绝不承担任何道德或政治说教包袱。',
    elevatorPitch: '“书无所谓道德或不道德，书只有写得好或写得糟，仅此而已！”艺术既不是为了教人做个好公民，也不是为了抨击社会黑暗。生活应当模仿艺术，而非艺术模仿生活。在孔雀羽毛、精致瓷器与绝美辞藻中享受纯粹的美。',
    coreTenets: [
      '为艺术而艺术（Art for Art\'s Sake）：艺术拥有完全独立的内在终极价值',
      '艺术反自然论：生活是对艺术拙劣的模仿（王尔德命题）',
      '彻底剔除道德功利枷锁，追求感官与形式的极致优雅',
    ],
    internetReality: '小资情调、独立设计师品牌对于工艺与色彩搭配的“强迫症式偏执美学”。',
    dailyLifeManifestation: '买一本昂贵的手工锁线烫金精装书纯粹为了抚摸纸张与封面排版美感，哪怕完全不读。',
    keyThinkers: [
      { name: '奥斯卡·王尔德 (Oscar Wilde)', era: '1854-1900', note: '《道林·格雷的画像》毒舌美学天才' },
      { name: '沃尔特·佩特 (Walter Pater)', era: '1839-1894', note: '《文艺复兴历史研究》' }
    ],
    famousQuote: { quote: '一切艺术都是毫无用处的。（All art is quite useless.）', author: '王尔德' },
    spectrum: { political: 0.5, economic: 0.1, social: 0.9 },
    initialPosition: { x: 620, y: 310 }
  },

  // 255. 象征主义 (Symbolism)
  {
    id: 'symbolism_art',
    name: '象征主义',
    englishName: 'Symbolism',
    category: 'cultural',
    color: '#f59e0b',
    period: '19世纪末波德莱尔、马拉美发端',
    eraYear: 1886,
    summary: '波德莱尔《恶之花》开创，拒绝直白客观写实，用隐喻、通感（Synesthesia）与神秘意象暗示不可见的幽冥灵魂世界。',
    elevatorPitch: '现实的表象只是一片充满假相的森林，大自然是一座神庙，“芳香、颜色与声音相互交织呼应（通感）”。诗人不能像照相机一样直拍现实，而要如炼金术士般用神秘晦涩的词句，暗示那隐藏在现实帷幕背后的灵魂颤动与忧郁深渊。',
    coreTenets: [
      '用象征意象暗示隐秘心灵世界，而非直截了当地陈述描述事实',
      '通感（Correspondences）：听觉、视觉、嗅觉的跨感官融合共振',
      '挖掘病态之美、梦魇、死狂与潜意识颓废（Decadence）美学',
    ],
    internetReality: '大卫·林奇电影、后摇滚音乐氛围与黑胶先锋唱片封面设计中最迷人的神秘主义底色。',
    dailyLifeManifestation: '听一首没有歌词的环境氛围纯音，脑中却不可遏制地浮现出深蓝色冰川破裂的悲凉香气。',
    keyThinkers: [
      { name: '夏尔·波德莱尔 (Charles Baudelaire)', era: '1821-1867', note: '《恶之花》《巴黎的忧郁》' },
      { name: '斯特芳·马拉美 (Stéphane Mallarmé)', era: '1842-1898', note: '象征诗派祭司' },
      { name: '阿蒂尔·兰波 (Arthur Rimbaud)', era: '1854-1891', note: '通灵者通感理论' }
    ],
    famousQuote: { quote: '大自然是一座神殿，那里活着的主柱有时说出朦胧的话语。', author: '波德莱尔' },
    spectrum: { political: 0.3, economic: 0.0, social: 0.8 },
    initialPosition: { x: 670, y: 350 }
  },

  // 256. 现实主义 (Realism)
  {
    id: 'realism_art',
    name: '现实主义文艺',
    englishName: 'Realism in Art & Lit',
    category: 'cultural',
    color: '#f59e0b',
    period: '19世纪中叶巴尔扎克、库尔贝创立',
    eraYear: 1850,
    summary: '客观、冷峻、不带粉饰地精准描绘当代社会各阶层百态，揭露资本金钱关系对人性的残酷碾压。',
    elevatorPitch: '库尔贝说：“我不会画天使，因为我从没见过天使，请带一个天使来给我看！”拒绝浪漫主义的空中楼阁逃避。深入高老头的阁楼、包法利夫人的卧室与石工打石的尘土飞扬中，用手术刀般冷酷逼真的笔触，忠实记录时代的全部真实面貌！',
    coreTenets: [
      '客观真实性：忠实再现典型环境中的典型人物（恩格斯现实主义定义）',
      '批判现实主义：无情解剖资本主义拜金逐利社会下道德沦丧与贫富撕裂',
      '拒绝任何理想主义美化、粉饰或虚假廉价的道德大团圆结局',
    ],
    internetReality: '韩国现实主义电影（《寄生虫》）、纪录片与现实主义小说最强韧的社会批判良心。',
    dailyLifeManifestation: '面对滤镜精修假象，用高清原图手机镜头无情记录下老弄堂里收废品老人的沧桑皱纹。',
    keyThinkers: [
      { name: '居斯塔夫·库尔贝 (Gustave Courbet)', era: '1819-1877', note: '现实主义画派旗手，《石工》' },
      { name: '奥诺雷·德·巴尔扎克', era: '1799-1850', note: '《人间喜剧》社会百科全书' },
      { name: '居斯塔夫·福楼拜 (Gustave Flaubert)', era: '1821-1880', note: '《包法利夫人》客观零度写作' }
    ],
    famousQuote: { quote: '展示真实，哪怕这真实残酷得令人不适。', author: '库尔贝' },
    spectrum: { political: 0.2, economic: -0.4, social: 0.5 },
    initialPosition: { x: 520, y: 390 }
  },

  // 257. 自然主义 (Naturalism)
  {
    id: 'naturalism_lit',
    name: '自然主义文学',
    englishName: 'Naturalism',
    category: 'cultural',
    color: '#f59e0b',
    period: '19世纪后叶埃米尔·左拉创立',
    eraYear: 1880,
    summary: '埃米尔·左拉创立，主张作家应当如同生物解剖医生一样，运用遗传学规律与严酷物理环境决定论冷静解剖人性本能。',
    elevatorPitch: '把小说写成实验医学报告！左拉在《实验小说家》中提出：人类在本质上只是遵循生物本能的动物。酗酒狂躁源自遗传基因缺陷，卑劣犯罪源自贫民窟恶劣环境刺激。作家是无情冷酷的实验室观察员，如实记录受控于生理冲动的悲惨人类标本。',
    coreTenets: [
      '生理遗传决定论与严酷物理社会环境决定论的双重铁笼',
      '科学实验方法进文学：作家如同实验室科学家观察小白鼠受刺激反应',
      '毫无避讳地精确描写疾病、兽性冲动、酗酒狂暴与贫民窟肮脏泥泞',
    ],
    internetReality: '现代纪实文学、暗黑犯罪侧写剧集（如《真探》）深层宿命论氛围的开山鼻祖。',
    dailyLifeManifestation: '分析某个恶性少年犯罪案时，不作道德谴责，而是冷静搜集其家族精神病遗传史与童年受虐暴力档案。',
    keyThinkers: [
      { name: '埃米尔·左拉 (Émile Zola)', era: '1840-1902', note: '《卢贡-马卡尔家族》《萌芽》' },
      { name: '莫泊桑 (Guy de Maupassant)', era: '1850-1893', note: '短篇小说巨匠' }
    ],
    famousQuote: { quote: '我们是生理学实验者；我们追寻支配着人脑与肉体机能的内在铁律。', author: '左拉' },
    spectrum: { political: 0.1, economic: -0.2, social: 0.3 },
    initialPosition: { x: 570, y: 430 }
  },

  // 258. 现代主义美学 (Modernism)
  {
    id: 'modernism',
    name: '现代主义美学',
    englishName: 'Modernism',
    category: 'cultural',
    color: '#f59e0b',
    period: '19世纪末至20世纪中叶席卷文艺总潮',
    eraYear: 1910,
    summary: '庞德提出“日新（Make It New）”，面对工业化、世界大战与技术爆炸，彻底粉碎一切古典古典写实与单焦点透视法则。',
    elevatorPitch: '乔伊斯的意识流《尤利西斯》、毕加索的立体派切面、艾略特的《荒原》！古典秩序在世界大战的堑壕与工业机器轰鸣中碎成粉末。艺术不再是对外在客观世界的镜像复制，而是形式语言自我觉醒的大狂欢！不断打破既有媒介形式边界。',
    coreTenets: [
      '日新（Make It New）：形式自律革命，彻底打破模仿自然的传统拟真原则',
      '反思现代工业异化，呈现时间碎片化、意识流与多重视角拼贴',
      '媒介自我审视（如绘画探索平面性，文学探索语言本身）',
    ],
    internetReality: '包豪斯建筑设计、无衬线字体排版与现代抽象艺术馆建筑空间的精神图腾。',
    dailyLifeManifestation: '阅读长达五页没有任何标点符号的意识流小说段落，感受主观意识无休止奔涌的迷醉。',
    keyThinkers: [
      { name: 'T.S. 艾略特 (T.S. Eliot)', era: '1888-1965', note: '《荒原》现代诗峰' },
      { name: '詹姆斯·乔伊斯 (James Joyce)', era: '1882-1941', note: '《尤利西斯》意识流史诗' },
      { name: '弗吉尼亚·伍尔夫', era: '1882-1941', note: '《到灯塔去》' }
    ],
    famousQuote: { quote: '荒原是一片死寂的土地，四月是最残忍的月份。', author: 'T.S. 艾略特' },
    spectrum: { political: 0.3, economic: 0.1, social: 0.8 },
    initialPosition: { x: 620, y: 390 }
  },

  // 259. 印象主义 (Impressionism)
  {
    id: 'impressionism',
    name: '印象主义 / 印象派',
    englishName: 'Impressionism',
    category: 'cultural',
    color: '#f59e0b',
    period: '1874年巴黎首届印象派画展',
    eraYear: 1874,
    summary: '莫奈、雷诺阿代表，走出画室来到户外，用纯粹明亮的笔触捕捉日光照射下物体瞬间变幻的光影与色彩印象。',
    elevatorPitch: '物体根本没有固定的固有色！早晨的干草堆是紫金色的，正午是炽烈的白光，傍晚化作燃烧的绯红。莫奈对着卢昂大教堂画了三十幅画，画的不是石头建筑，而是光线掠过空气时那一秒钟的绚烂视觉印象！',
    coreTenets: [
      '走出画室户外写生（En plein air），直接在画布上并置原色笔触由肉眼视觉自动混合',
      '捕捉特定时刻光线、空气湿度与阴影中丰富互补色的瞬间即逝性',
      '描绘当代中产阶级世俗休闲生活（划船、舞会、林荫道）',
    ],
    internetReality: '全球各大博物馆纪念品文创销量冠绝天下的世界级艺术顶流，人人爱莫奈睡莲。',
    dailyLifeManifestation: '傍晚黄昏时看着天边晚霞把江面染成金紫两色，掏出手机调整曝光抢抓那不到五分钟的光影奇迹。',
    keyThinkers: [
      { name: '克劳德·莫奈 (Claude Monet)', era: '1840-1926', note: '《日出·印象》《睡莲》' },
      { name: '皮埃尔-奥古斯特·雷诺阿', era: '1841-1919', note: '《红磨坊的舞会》' },
      { name: '埃德加·德加 (Edgar Degas)', era: '1834-1917', note: '芭蕾舞女瞬间动态' }
    ],
    famousQuote: { quote: '我想在光的变幻与流逝中，画出空气的颜色。', author: '莫奈' },
    spectrum: { political: 0.2, economic: 0.2, social: 0.6 },
    initialPosition: { x: 680, y: 430 }
  },

  // 260. 表现主义 (Expressionism)
  {
    id: 'expressionism',
    name: '表现主义',
    englishName: 'Expressionism',
    category: 'cultural',
    color: '#f59e0b',
    period: '20世纪初德国桥社、青骑士社发端',
    eraYear: 1905,
    summary: '蒙克《呐喊》、康定斯基代表，故意扭曲物体真实形体与色彩，向外狂暴宣泄主观内心深处的恐惧、焦虑与癫狂。',
    elevatorPitch: '艺术不是为了取悦眼睛，艺术是为了宣泄灵魂撕心裂肺的嚎叫！天际被涂成血红色的扭曲波浪，桥上的骷髅人形双手捂耳痛苦嘶吼。不求客观形似，用浓烈冲突的刺目色彩与粗暴尖锐的线条，把现代人的异化绝望喷薄在画布上！',
    coreTenets: [
      '主观内在情感表现绝对优先于客观外在现实摹写',
      '形体畸变、透视挤压与强烈冲撞的不和谐色调',
      '深刻反映一战前夕欧洲城市异化、精神危机与末日焦虑',
    ],
    internetReality: '蒙克《呐喊》成为全网聊天中最常用的抓狂表情包（😱）的真正艺术母体。',
    dailyLifeManifestation: '心情极度压抑烦躁时，用毛笔在草稿纸上疯狂涂满黑红两色粗暴线条以发泄胸中怒火。',
    keyThinkers: [
      { name: '爱德华·蒙克 (Edvard Munch)', era: '1863-1944', note: '《呐喊》《生命的饰带》先驱' },
      { name: '瓦西里·康定斯基', era: '1866-1944', note: '《论艺术里的精神》抽象表现' },
      { name: '埃贡·席勒 (Egon Schiele)', era: '1890-1918', note: '神经质枯槁自画像与情欲张力' }
    ],
    famousQuote: { quote: '我感到大自然中穿透着一声无穷无尽的凄厉尖叫。', author: '蒙克日记' },
    spectrum: { political: 0.4, economic: -0.1, social: 0.9 },
    initialPosition: { x: 730, y: 390 }
  },

  // 261. 野兽主义 / 野兽派 (Fauvism)
  {
    id: 'fauvism',
    name: '野兽主义 / 野兽派',
    englishName: 'Fauvism',
    category: 'cultural',
    color: '#f59e0b',
    period: '1905年巴黎秋季沙龙轰动',
    eraYear: 1905,
    summary: '亨利·马蒂斯代表，彻底砸碎写实透视与明暗调子，直接将未经调和的纯粹狂野原色厚涂在画布上。',
    elevatorPitch: '评论家惊呼：“这简直是一群关在铁笼子里的野兽！”女人的脸被画上一条翠绿的阴影，大海被涂成大红色。色彩不再为形状做奴隶！色彩本身就是独立的情感交响乐，以最纯粹、最原始的色彩狂飙奏响生命的欢歌。',
    coreTenets: [
      '色彩的绝对解放：用非自然色彩直接宣泄直觉情绪，脱离写实对象束缚',
      '平面化构图与大面积纯色色块并置，取消传统明暗体积塑造',
      '马蒂斯“安乐椅美学”：艺术应当带给疲惫劳累的现代人以宁静与纯粹愉悦',
    ],
    internetReality: '现代流行波普插画、撞色潮牌设计与涂鸦艺术最直接的灵感导师。',
    dailyLifeManifestation: '买衣服时偏爱极其亮眼的纯荧光绿配克莱因蓝，享受色彩冲撞带来的纯粹生理快乐。',
    keyThinkers: [
      { name: '亨利·马蒂斯 (Henri Matisse)', era: '1869-1954', note: '《舞蹈》《红色的和谐》画坛巨匠' },
      { name: '安德烈·德兰 (André Derain)', era: '1880-1954', note: '野兽派三剑客' }
    ],
    famousQuote: { quote: '我梦想一种平衡、纯洁而宁静的艺术，就像一把舒适的安乐椅，消除身体的疲惫。', author: '马蒂斯' },
    spectrum: { political: 0.3, economic: 0.0, social: 0.7 },
    initialPosition: { x: 780, y: 420 }
  },

  // 262. 立体主义 (Cubism)
  {
    id: 'cubism',
    name: '立体主义',
    englishName: 'Cubism',
    category: 'cultural',
    color: '#f59e0b',
    period: '1907-1914年毕加索与布拉克创立',
    eraYear: 1907,
    summary: '毕加索、布拉克创立，彻底粉碎文艺复兴五百年来的单一焦点透视，将物体拆解为多重视角几何切面并重组。',
    elevatorPitch: '《阿维尼翁的少女》引爆视觉革命！为什么看一个人只能从正面或侧面看？立体派把对象如同钻石切面一样打碎，把正面、侧面、仰视与俯视同时平摊在同一个二维画布上。在静止的二维平面上捕捉多维全知真实！',
    coreTenets: [
      '多视点透视（Simultaneity）：在同一平面同时展示物体的多重空间维度',
      '分析立体主义（几何切面碎片解构）到综合立体主义（报纸纸屑拼贴 Collage 实验）',
      '彻底颠覆自文艺复兴以来西方艺术将画布视作“观景窗户”的幻觉传统',
    ],
    internetReality: '20世纪先锋艺术最彻底的形式核爆炸，彻底推开了抽象艺术与概念艺术的通天大门。',
    dailyLifeManifestation: '看毕加索的女人肖像，一眼能同时看到她正面的两只眼睛和完全侧向的鼻子。',
    keyThinkers: [
      { name: '巴勃罗·毕加索 (Pablo Picasso)', era: '1881-1973', note: '20世纪最伟大的艺术天才，《格尔尼卡》' },
      { name: '乔治·布拉克 (Georges Braque)', era: '1882-1963', note: '立体主义共同奠基者' }
    ],
    famousQuote: { quote: '我画我所知道的，而不是我所看见的。', author: '毕加索' },
    spectrum: { political: 0.5, economic: 0.0, social: 0.95 },
    initialPosition: { x: 710, y: 470 }
  },

  // 263. 未来主义 (Futurism)
  {
    id: 'futurism',
    name: '未来主义',
    englishName: 'Futurism',
    category: 'cultural',
    color: '#f59e0b',
    period: '1909年马里内蒂在巴黎《费加罗报》发表宣言',
    eraYear: 1909,
    summary: '马里内蒂创立，极度痛恨博物馆与古典古董，狂热歌颂内燃机轰鸣、机械速度、现代工厂与“作为世界唯一清洁剂的战争”。',
    elevatorPitch: '“一辆疾驰的赛车比萨莫色雷斯的胜利女神雕像更美！”砸毁一切博物馆、图书馆和威尼斯古城！迷恋机器齿轮撕裂空气的速度与暴力。画家在画布上画奔跑的狗长出二十条叠影腿（动态连贯性）；后不幸沦为法西斯军国主义的狂欢前哨。',
    coreTenets: [
      '速度美学与机械崇拜：把工业机械轰鸣视作新时代的神圣图腾',
      '动态连贯性（Dynamism）：用重叠运动轨迹在静止媒介中表现纯粹速度',
      '激进反传统反学术，狂热赞美暴力、现代大都市与战争清洗',
    ],
    internetReality: '赛博朋克科幻、机甲机甲热血动画与当代“有效加速主义（e/acc）”的超前暴烈鼻祖。',
    dailyLifeManifestation: '在深夜空旷的高架桥上驾驶跑车加速到极限，感受肾上腺素狂飙带来的纯粹机械速度高潮。',
    keyThinkers: [
      { name: '菲利波·托马索·马里内蒂', era: '1876-1944', note: '未来主义宣言起草人' },
      { name: '翁贝托·波丘尼 (Umberto Boccioni)', era: '1882-1916', note: '《空间中连续性的唯一形体》青铜雕塑' }
    ],
    famousQuote: { quote: '一辆风驰电掣的赛车，比卢浮宫里的任何古典胜利女神都要壮美千百倍！', author: '马里内蒂' },
    spectrum: { political: -0.7, economic: 0.4, social: 0.9 },
    initialPosition: { x: 760, y: 510 }
  },

  // 264. 至上主义 (Suprematism)
  {
    id: 'suprematism',
    name: '至上主义',
    englishName: 'Suprematism',
    category: 'cultural',
    color: '#f59e0b',
    period: '1915年卡西米尔·马列维奇创立',
    eraYear: 1915,
    summary: '马列维奇创立，彻底抽离客观世界一切具体物象，追求“纯粹几何感觉至上”（《黑方块》）。',
    elevatorPitch: '《白底上的黑色方块》震撼出世！画布中央除了一个乌黑的正方形外什么都没有。马列维奇宣布：“我把艺术从客观物象的重负中解脱了出来。”没有树、没有苹果、没有人脸；只有纯粹的几何、纯粹的形式与直通宇宙终极虚空的至上精神感觉。',
    coreTenets: [
      '纯粹感觉至上：彻底终结艺术对可辨识外部现实物象的模仿',
      '极简基础几何元素（正方形、圆形、十字架）与有限纯色原色系统',
      '超越物质重力束缚，追求白昼虚空中的精神宇宙漂浮感',
    ],
    internetReality: '现代极简平面设计、Logo几何化抽象提炼无可逾越的形而上学天花板。',
    dailyLifeManifestation: '在全白美术馆中央凝视一块黑色石碑发呆半小时，感受万籁俱寂的纯粹精神空灵。',
    keyThinkers: [
      { name: '卡西米尔·马列维奇 (Kazimir Malevich)', era: '1879-1935', note: '《黑方块》《至上主义无物象的世界》' },
      { name: '埃尔·利西茨基 (El Lissitzky)', era: '1890-1941', note: '普朗恩（Proun）空间探索' }
    ],
    famousQuote: { quote: '黑色方块是一切形式的起源，是一切可能性的纯粹零度。', author: '马列维奇' },
    spectrum: { political: 0.3, economic: -0.5, social: 1.0 },
    initialPosition: { x: 810, y: 470 }
  },

  // 265. 构成主义 (Constructivism)
  {
    id: 'constructivism',
    name: '构成主义',
    englishName: 'Constructivism',
    category: 'cultural',
    color: '#f59e0b',
    period: '1917年十月革命后苏俄前卫艺术',
    eraYear: 1919,
    summary: '塔特林、罗德琴科创立，反对架上画孤芳自赏，主张艺术家化身为“工程师”，用钢铁、玻璃工业材料直接投身革命社会建设。',
    elevatorPitch: '不要躲在画室里画油画自娱自乐了！苏维埃新生了，艺术家必须走出象牙塔，拿起角尺、电焊机与照相机！设计400米高的钢铁第三国际纪念塔、设计工人的平价耐磨制服、设计宣传画海报与革命集会演讲台。让艺术直接变成改造社会的机器！',
    coreTenets: [
      '艺术即生产（Productivism）：艺术必须服务于真实的社会建设与工业生产实用功能',
      '材料真实性（Truth to materials）：暴露钢铁、玻璃、木材的原始工业质感',
      '对角线动感构图、红黑白硬朗工业色调与现代排版摄影剪贴深度结合',
    ],
    internetReality: '现代工业设计大奖、苏联红色前卫平面海报排版风格长盛不衰的灵感源泉。',
    dailyLifeManifestation: '购买带有粗犷外露工业钢架、斜切几何支撑结构的包豪斯风电脑工作台。',
    keyThinkers: [
      { name: '弗拉基米尔·塔特林 (Vladimir Tatlin)', era: '1885-1953', note: '《第三国际纪念塔模型》' },
      { name: '亚历山大·罗德琴科', era: '1891-1956', note: '先锋摄影蒙太奇大师' },
      { name: '柳博芙·波波娃', era: '1889-1924', note: '革命纺织与舞台设计' }
    ],
    famousQuote: { quote: '打碎纯艺术的祭坛，走向工厂，走向建设！', author: '构成主义行动口号' },
    spectrum: { political: -0.4, economic: -0.9, social: 0.9 },
    initialPosition: { x: 860, y: 510 }
  },

  // 266. 新造型主义 / 风格派 (Neoplasticism / De Stijl)
  {
    id: 'neoplasticism',
    name: '新造型主义 / 风格派',
    englishName: 'Neoplasticism / De Stijl',
    category: 'cultural',
    color: '#f59e0b',
    period: '1917年荷兰蒙德里安创立',
    eraYear: 1917,
    summary: '蒙德里安创立，将绘画视觉语言彻底纯化为垂直线、水平线与“红、黄、蓝”三原色及黑白灰方格。',
    elevatorPitch: '大自然的外表充满偶然与杂乱。把一棵苹果树不断简化，最后只剩下垂直生长的树干和水平伸展的地平线！新造型主义用最纯净的水平/垂直网格，搭配红黄蓝三原色与非色彩黑白灰。在绝对严格的纯几何对立中达成宇宙神圣静谧均衡。',
    coreTenets: [
      '严格限制视觉语法：唯有水平线与垂直线构成的正交网格',
      '严守纯色基准：红、黄、蓝三原色搭配黑、白、灰非色彩背景',
      '不仅是画作，更扩展至建筑、家具（红蓝椅）与现代人居生活环境重构',
    ],
    internetReality: '伊夫·圣罗兰（YSL）蒙德里安裙风靡全球，现代网页扁平化网格系统（Grid System）的美学鼻祖。',
    dailyLifeManifestation: '书架上红黄蓝三原色几何拼块收纳盒，给极简主义公寓带来极高秩序美感。',
    keyThinkers: [
      { name: '皮特·蒙德里安 (Piet Mondrian)', era: '1872-1944', note: '《红黄蓝的构图》《百老汇爵士乐》' },
      { name: '特奥·凡·杜斯堡', era: '1883-1931', note: '《风格派》杂志创办人' },
      { name: '赫里特·里特费尔德', era: '1888-1964', note: '施罗德住宅、红蓝椅建筑宗师' }
    ],
    famousQuote: { quote: '垂直与水平构成了生命的对立张力，并在和谐中显现出永恒的纯粹实在。', author: '蒙德里安' },
    spectrum: { political: 0.2, economic: 0.0, social: 0.8 },
    initialPosition: { x: 910, y: 470 }
  },

  // 267. 达达主义 (Dadaism)
  {
    id: 'dadaism',
    name: '达达主义',
    englishName: 'Dadaism',
    category: 'cultural',
    color: '#f59e0b',
    period: '1916年一战苏黎世伏尔泰酒馆发端',
    eraYear: 1916,
    summary: '特里斯坦·查拉、马塞尔·杜尚创立，因对资产阶级所谓“崇高理性”引发一战尸山血海极度绝望，用现成品小便池、胡乱拼贴与反艺术暴动摧毁传统审美。',
    elevatorPitch: '如果人类自诩的“理性与文明”最终造就的是堑壕战里几百万人被毒气绞杀，那么这种文明就是狗屎！达达从字典里随机翻出“Dada”（木马婴儿牙牙学语）命名。杜尚买来一个男用陶瓷小便池签上假名《泉》送进艺术展：“这就是艺术！”一切皆可嘲讽！',
    coreTenets: [
      '彻底的“反艺术（Anti-art）”与虚无反叛：消解一切资产阶级体面美学标准',
      '现成品（Readymade）：艺术的本质不在手工制造，而在艺术家的“挑选与观念命名”',
      '偶然性、拼贴剪报（Collage）与荒诞无意义行为表演',
    ],
    internetReality: '当代抽象解构迷因（Shitpost）、鬼畜视频与无厘头荒诞网络流行文化的真正太上皇。',
    dailyLifeManifestation: '把一张报纸用剪刀剪碎扔向空中，按落在地上的随机顺序拼成一首荒诞派现代诗。',
    keyThinkers: [
      { name: '马塞尔·杜尚 (Marcel Duchamp)', era: '1887-1968', note: '《泉》《大玻璃》观念艺术之父' },
      { name: '特里斯坦·查拉 (Tristan Tzara)', era: '1896-1963', note: '《达达宣言》' }
    ],
    famousQuote: { quote: '达达什么都不信，达达是虚无，达达是反叛，达达万岁！', author: '达达主义宣言' },
    spectrum: { political: 0.95, economic: -0.6, social: 1.0 },
    initialPosition: { x: 740, y: 260 }
  },

  // 268. 超现实主义 (Surrealism)
  {
    id: 'surrealism',
    name: '超现实主义',
    englishName: 'Surrealism',
    category: 'cultural',
    color: '#f59e0b',
    period: '1924年安德烈·布勒东发表宣言',
    eraYear: 1924,
    summary: '布勒东、达利、马格利特创立，受弗洛伊德精神分析启发，解除一切理性和道德审查，直接展现梦境、幻觉与潜意识深层真实。',
    elevatorPitch: '白天的清醒生活只是冰山一角，深海下的梦境与潜意识才是人类灵魂的汪洋大海！达利笔下像奶酪一样融化软瘫的时钟、马格利特笔下戴圆顶帽却被青苹果挡住脸的男人。打破清醒与梦境的界限，进入纯粹的精神自动化（Psychic Automatism）狂澜。',
    coreTenets: [
      '纯粹的精神自动主义（Psychic Automatism）：排除任何理性审判与道德成见，直接倾泻潜意识思维',
      '弗洛伊德梦的解析：探索欲望、潜意识幻觉与被压抑本能的超现实绽放',
      '奇异异质物体的荒诞并置（“缝纫机与雨伞在解剖台上的偶遇”）',
    ],
    internetReality: 'Midjourney/Sora等AI生成式文生图大模型最擅长生成的梦幻迷幻超现实视觉奇境。',
    dailyLifeManifestation: '半梦半醒时掏出床头便签，飞速记录下梦中那只长着蜻蜓翅膀在沙漠滑雪的怪鸟。',
    keyThinkers: [
      { name: '安德烈·布勒东 (André Breton)', era: '1896-1966', note: '超现实主义教皇' },
      { name: '萨尔瓦多·达利 (Salvador Dalí)', era: '1904-1989', note: '偏执狂批判法，《记忆的永恒》' },
      { name: '勒内·马格利特 (René Magritte)', era: '1898-1967', note: '《这不是一个烟斗》哲学思辨' }
    ],
    famousQuote: { quote: '这不是一只烟斗（Ceci n\'est pas une pipe）。', author: '马格利特画作题词' },
    spectrum: { political: 0.7, economic: -0.3, social: 0.95 },
    initialPosition: { x: 800, y: 300 }
  },

  // 269. 情境主义 (Situationism)
  {
    id: 'situationism',
    name: '情境主义',
    englishName: 'Situationism',
    category: 'cultural',
    color: '#f59e0b',
    period: '1957年情境主义国际（SI）成立，1968五月风暴',
    eraYear: 1957,
    summary: '居伊·德波《景观社会》创立，揭露消费主义将真实生活置换为虚假被动景观，主张通过城市“漂移”与构建颠覆性“情境”打碎景观异化。',
    elevatorPitch: '在当代资本主义社会，“所有直接体验过的生活，都已化作一场被动的演出展示（景观）”！商场橱窗、电视广告把你变成只会张嘴观看的木偶。情境主义主张：“漂移（Dérive）”——抛弃目的地在城市迷宫中无意识漫游；蓄意制造颠覆性情境，夺回属于自己的真实狂欢！',
    coreTenets: [
      '景观社会批判（The Society of the Spectacle）：真实关系被商品图像异化中介',
      '漂移（Dérive）与心理地理学（Psychogeography）：打破资本主义通勤路线对身体的驯化',
      '异轨（Détournement）：挪用既有广告和官方海报进行反讽涂改与反霸权传播',
    ],
    internetReality: '法国1968年红五月街头标语“在铺路石下，是海滩！”的直接精神策源地，当代街头涂鸦艺术家班克西（Banksy）的灵魂源头。',
    dailyLifeManifestation: '下班不走固定导航路线，故意关掉手机在一座陌生的老城区巷子里随心所欲漫无目的地闲逛三小时。',
    keyThinkers: [
      { name: '居伊·德波 (Guy Debord)', era: '1931-1994', note: '《景观社会》情境主义国际领袖' },
      { name: '拉乌尔·瓦内格姆', era: '1934-', note: '《日常生活的革命》' }
    ],
    famousQuote: { quote: '景观是积累到如此程度的资本，以至于它变成了图像。', author: '居伊·德波' },
    spectrum: { political: 0.9, economic: -0.9, social: 1.0 },
    initialPosition: { x: 850, y: 340 }
  },

  // 270. 极简主义 (Minimalism)
  {
    id: 'minimalism',
    name: '极简主义',
    englishName: 'Minimalism',
    category: 'cultural',
    color: '#f59e0b',
    period: '20世纪60年代纽约发端，席卷当代设计',
    eraYear: 1965,
    summary: '密斯·凡·德·罗“少即是多（Less is more）”，剥离一切多余装饰、符号象征与主观情绪，呈现材料最本真的纯粹几何形态。',
    elevatorPitch: '把一切多余的繁复垃圾扔出去！“少即是多（Less is more）”。一个原木立方体、一块未经粉饰的冷轧钢板、一个没有多余按键的iPhone铝合金一体机身。彻底抽离主观杂念，在极致的留白与最克制的线条中，体验纯粹的宁静之美。',
    coreTenets: [
      '少即是多（Less is more）：去除一切非本质的浮华繁复装饰',
      '材料自明性（What you see is what you see）：物就是物本身，没有任何隐喻',
      '从艺术雕塑（贾德、安德烈）扩展至室内设计、断舍离生活方式与数码产品UI设计',
    ],
    internetReality: '苹果乔布斯极简产品哲学、无印良品日式侘寂风与青年“断舍离”整理术的最高审美信条。',
    dailyLifeManifestation: '家里客厅除了沙发和地毯空无一物，手机主屏幕只保留4个最核心的无杂色黑白图标。',
    keyThinkers: [
      { name: '密斯·凡·德·罗 (Mies van der Rohe)', era: '1886-1969', note: '包豪斯大师，“少即是多”' },
      { name: '唐纳德·贾德 (Donald Judd)', era: '1928-1994', note: '极简空间特定物艺术宗师' },
      { name: '乔纳森·伊夫 (Jony Ive)', era: '1967-', note: '苹果初代全套极简硬件设计灵魂' }
    ],
    famousQuote: { quote: '少即是多。所见即所得。', author: '密斯·凡·德·罗 / 弗兰克·斯特拉' },
    spectrum: { political: 0.3, economic: 0.1, social: 0.6 },
    initialPosition: { x: 790, y: 220 }
  },

  // 271. 粗野主义 (Brutalism)
  {
    id: 'brutalism',
    name: '粗野主义建筑',
    englishName: 'Brutalism',
    category: 'cultural',
    color: '#f59e0b',
    period: '20世纪50-70年代战后重建',
    eraYear: 1953,
    summary: '勒·柯布西耶启发，法国纯混凝土（Béton brut），不加粉饰地暴露粗粝浇筑混凝土模板纹理与巨石般沉重几何体块。',
    elevatorPitch: '不要廉价虚伪的贴皮砖和玻璃幕墙！粗野主义直接暴露灰色水泥未经打磨的木模板毛糙拼缝、外露水管与如堡垒般雄浑沉重的几何悬挑。战后用最廉价朴素的混凝土为平民建造大规模廉租房、公立大学与市政中心。冷酷、诚实且具有地质纪元般的庄严永恒感。',
    coreTenets: [
      '诚实暴露结构材料：原汁原味的毛糙清水混凝土（Béton brut）',
      '沉重、纪念碑式、巨型雕塑感的抗拒轻飘浮华的纯粹几何体块',
      '服务于战后社会主义与社会民主主义普及平民福祉的高效低成本公共建筑实践',
    ],
    internetReality: '在Instagram和摄影圈引发全球“粗野主义建筑巡礼（Brutalist Architecture）”膜拜复兴狂潮。',
    dailyLifeManifestation: '站在大学老图书馆巨大的灰色水泥悬挑梁下，抚摸混凝土表面粗糙的冷峻质感，感受沉重历史力量。',
    keyThinkers: [
      { name: '勒·柯布西耶 (Le Corbusier)', era: '1887-1965', note: '马赛公寓（Unité d\'Habitation）开山之作' },
      { name: '艾莉森与彼得·史密森夫妇', era: '1928-1993', note: '英国新粗野主义奠基' }
    ],
    famousQuote: { quote: '建筑是在光线下对体块所进行的原汁原味、庄严而惊人的把玩。', author: '勒·柯布西耶' },
    spectrum: { political: -0.2, economic: -0.5, social: 0.4 },
    initialPosition: { x: 840, y: 250 }
  },

  // 272. 元现代主义 (Metamodernism)
  {
    id: 'metamodernism',
    name: '元现代主义',
    englishName: 'Metamodernism',
    category: 'cultural',
    color: '#f59e0b',
    period: '2010年弗缪伦与范登阿克提出',
    eraYear: 2010,
    summary: '描述当代青年在后现代的“解构反讽消极”与现代主义的“崇高真诚信念”之间，如同钟摆般不断摆荡的知性与情感状态。',
    elevatorPitch: '我们既回不去现代主义那种傻傻的盲目宏大信仰，也无法继续忍受后现代主义无底线的虚无嘲讽与烂梗摆烂！元现代主义是在深知荒诞与绝望的前提下，依然清醒地选择去真诚热爱、去怀抱热忱（知其不可而为之的知性真诚）。“知世故而不世故”。',
    coreTenets: [
      '在现代主义的狂热追求（Enthusiasm）与后现代主义的反讽自嘲（Irony）之间震荡摆动',
      '知性真诚（Informed Naivety）：深谙现实荒谬解构，但依然坚定选择真挚与行动',
      '面对气候灾难、AI冲击等复杂全球危机时既不盲目乐观也不彻底绝望的第三条道路',
    ],
    internetReality: '奥斯卡最佳影片《瞬息全宇宙（Everything Everywhere All at Once）》与当代B站深度复古青年的文化精神共识。',
    dailyLifeManifestation: '一边自嘲自己是个每天被KPI折磨的打工人牛马（后现代反讽），一边加班把一个环保方案做到完美极致（现代真诚）。',
    keyThinkers: [
      { name: '蒂莫修斯·弗缪伦 (Timotheus Vermeulen)', era: '当代', note: '《关于元现代主义的笔记》起草人' },
      { name: '罗宾·范登阿克 (Robin van den Akker)', era: '当代', note: '当代文化哲学教授' }
    ],
    famousQuote: { quote: '我们必须在希望与忧郁之间、在纯真与知识之间不断摆荡，永远航行在两岸之间。', author: '元现代主义笔记' },
    spectrum: { political: 0.5, economic: -0.1, social: 0.9 },
    initialPosition: { x: 890, y: 280 }
  },

  // 273. 卢德主义 (Luddism / Neo-Luddism)
  {
    id: 'luddism',
    name: '卢德主义 / 新卢德主义',
    englishName: 'Luddism',
    category: 'contemporary',
    color: '#ec4899',
    period: '1811年英国纺织机砸毁运动至当代反AI失控',
    eraYear: 1811,
    summary: '源于19世纪工人捣毁蒸汽织布机，当代延伸为警惕人工智能、数字算法与监控资本主义对人类自然肉身与心智的异化吞噬。',
    elevatorPitch: '卢德工人并不是盲目痛恨机器本身，而是痛恨机器被用来砸碎工人饭碗、把有尊严的人贬低为机器奴隶！当今AI大模型与自动化疯狂淘汰插画师、程序员与写作者，数字资本疯狂收割人类注意力。必须拉响技术紧急制动阀，捍卫人类最后的血肉尊严！',
    coreTenets: [
      '对盲目“技术进步即善”的技术宿命论发起决死抗争',
      '反思自动化对普通劳动者饭碗的无情剥夺与人机异化',
      '当代新卢德主义：拒绝被智能手机全天候奴役，捍卫断网下线（Right to disconnect）的自然权利',
    ],
    internetReality: '好莱坞编剧演员大罢工抗议AI生成剧本、画家画师集体在推特抵制AI扒图训练的声浪先驱。',
    dailyLifeManifestation: '买一部只能打电话发短信的功能机（老年机）作为主力机，拒绝安装任何算法推荐短视频APP。',
    keyThinkers: [
      { name: '内德·卢德 (Ned Ludd)', era: '1811年', note: '传说中砸毁织布机的民间英雄' },
      { name: '尼尔·波兹曼 (Neil Postman)', era: '1931-2003', note: '《技术垄断》《娱乐至死》' }
    ],
    famousQuote: { quote: '机器应当服务于人，而非将人重塑为服侍机器的硅基奴隶。', author: '新卢德主义誓言' },
    spectrum: { political: 0.5, economic: -0.5, social: 0.3 },
    initialPosition: { x: 860, y: 150 }
  },

  // 274. 超人类主义 (Transhumanism)
  {
    id: 'transhumanism',
    name: '超人类主义',
    englishName: 'Transhumanism',
    category: 'contemporary',
    color: '#ec4899',
    period: '朱利安·赫胥黎1957年造词，博斯特罗姆发展',
    eraYear: 1957,
    summary: '朱利安·赫胥黎造词，主张利用基因编辑、脑机接口、神经拟态义体与抗衰老药物，突破人类脆弱生物肉身极限，进化为后人类。',
    elevatorPitch: '智人绝不是演化的终点，智人只是从猿猴通往“超人类（Transhuman）”的过渡阶段！为什么要忍受癌症、衰老、遗忘与死亡的折磨？利用纳米机器人修复细胞、用脑机接口（Neuralink）直接将海量知识写入大脑、用人造器官取代衰竭脏器。主动掌舵人类自身的基因飞升！',
    coreTenets: [
      '生命延续与逆转衰老：将死亡与衰老定义为可治疗解决的生物工程工程病理',
      '认知与身体机能的全面技术增强（Physical and Cognitive Enhancement）',
      '人类拥有自主修改自身基因组与身体架构的形态自由权（Morphological Freedom）',
    ],
    internetReality: '马斯克脑机接口公司Neuralink、Altos Labs抗衰老百亿科研与硅谷长生不老俱乐部的心中圣殿。',
    dailyLifeManifestation: '每天坚持服用NMN辅酶NAD+前体补剂，常年监测全身血液生化指标期待健康活过120岁。',
    keyThinkers: [
      { name: '尼克·博斯特罗姆 (Nick Bostrom)', era: '1973-', note: '牛津大学人类未来研究所创始人，《超级智能》' },
      { name: '马克斯·莫尔 (Max More)', era: '1964-', note: '阿尔科生命延续基金（人体冷冻）前CEO' }
    ],
    famousQuote: { quote: '人类是一个等待被克服的过渡物种；通过理性技术，我们将进化为神。', author: '超人类主义宣言' },
    spectrum: { political: 0.6, economic: 0.8, social: 1.0 },
    initialPosition: { x: 920, y: 180 }
  },

  // 275. 后人类主义 (Posthumanism)
  {
    id: 'posthumanism',
    name: '后人类主义',
    englishName: 'Posthumanism',
    category: 'contemporary',
    color: '#ec4899',
    period: '20世纪90年代唐娜·哈拉维《赛博格宣言》',
    eraYear: 1985,
    summary: '哈拉维、布拉伊多蒂代表，彻底解构文艺复兴以来“欧洲白人男性是万物灵长”的傲慢神话，主张人类与AI、赛博格、动物与生态网络无边界平权纠缠。',
    elevatorPitch: '超人类主义还在做着“人类成神统治宇宙”的直男英雄梦，而后人类主义则是对人类中心主义的彻底清算！哈拉维宣告：“我宁做赛博格，不做女神！”界限已经崩溃：人与动物、人与机器、物理与非物理。走出傲慢的人类独大神话，拥抱万物共生。',
    coreTenets: [
      '彻底解构文艺复兴“维特鲁威人”的人类中心主义优越神话',
      '赛博格本体论（Cyborg Ontology）：人类肉体早已被眼镜、疫苗、手机芯片与算法深度混编',
      '物质生态平权：重构人与非人类行动者之间的共生伴侣关系',
    ],
    internetReality: '当代科幻影视（《攻壳机动队》《银翼杀手2049》）、赛博格艺术展与思辨哲学的核心理论引擎。',
    dailyLifeManifestation: '意识到自己的智能手机不仅是外在工具，它记录了你全部记忆与社交，实际上早已成为你大脑神经外延的“硅基义体器官”。',
    keyThinkers: [
      { name: '唐娜·哈拉维 (Donna Haraway)', era: '1944-', note: '《赛博格宣言》《伴侣物种宣言》' },
      { name: '罗西·布拉伊多蒂', era: '1954-', note: '《后人类》《变身成后人类》' },
      { name: 'N. 凯瑟琳·海勒', era: '1943-', note: '《我们何以成为后人类》' }
    ],
    famousQuote: { quote: '在20世纪末的今天，我们所有人都已经是合成兽、理论化与制造出来的赛博格。', author: '唐娜·哈拉维' },
    spectrum: { political: 0.7, economic: -0.4, social: 1.0 },
    initialPosition: { x: 960, y: 220 }
  },

  // 276. 奇点主义 (Singularitarianism)
  {
    id: 'singularitarianism',
    name: '奇点主义',
    englishName: 'Singularitarianism',
    category: 'contemporary',
    color: '#ec4899',
    period: '2005年雷·库兹韦尔《奇点临近》',
    eraYear: 2005,
    summary: '雷·库兹韦尔创立，坚信信息技术指数级加速度将在2045年前后引爆“技术奇点”，人工智能自我迭代突破不可逆质变，人类意识将上传云端实现数字永生。',
    elevatorPitch: '人类直觉总是线性的，但科技演进是指数级的（摩尔定律、加速回报定律）！一旦人工智能达到自写代码、自我改进的“智能爆炸”奇点，它将在几小时内走完人类数万年的认知进化。碳基血肉将与硅基智能完全融合，意识上传到算力云端，死亡彻底成为历史名词！',
    coreTenets: [
      '加速回报定律（Law of Accelerating Returns）：计算能力、存储与带宽呈双指数曲线爆发',
      '技术奇点（Technological Singularity）：超级智能的诞生将彻底改变人类存在的全部已知物理法则',
      '心智上传（Mind Uploading）与人机智能无缝融合，宇宙最终被苏醒的超级智慧唤醒点亮',
    ],
    internetReality: 'ChatGPT、GPT-4大模型涌现后，硅谷全体顶尖科学家与未来学家关于AGI倒计时终极信仰。',
    dailyLifeManifestation: '笃定相信自己在2045年奇点到来前只要活住，就能通过意识上传到量子云端实现无限寿命。',
    keyThinkers: [
      { name: '雷·库兹韦尔 (Ray Kurzweil)', era: '1948-', note: '发明家，谷歌工程总监，《奇点临近》' },
      { name: '弗农·芬奇 (Vernor Vinge)', era: '1944-2024', note: '数学家兼科幻大师，1993年首提奇点演说' }
    ],
    famousQuote: { quote: '奇点临近：届时人与机器的界限将彻底泯灭，思考的速度将达到光速。', author: '库兹韦尔' },
    spectrum: { political: 0.6, economic: 0.9, social: 1.0 },
    initialPosition: { x: 1000, y: 260 }
  },

  // 277. 加速主义 (Accelerationism)
  {
    id: 'accelerationism',
    name: '加速主义',
    englishName: 'Accelerationism',
    category: 'contemporary',
    color: '#ec4899',
    period: '1990年代华威大学CCRU至2022年e/acc狂飙',
    eraYear: 1993,
    summary: '尼克·兰德创立，主张资本主义与技术创新的狂飙无法减速，唯有“将油门踩到底”，加速推动算力与熵增爆炸直至冲垮现有社会结构。',
    elevatorPitch: '改良与刹车只是徒劳的自欺！资本主义与科技不是人类的仆人，而是一股来自未来的外星赛博力量。加速推进它！分化出主张全自动奢华共产主义的左翼加速（L/Acc）、主张技术与资本接管进化的右翼加速（R/Acc），以及2022年风靡硅谷、主张全力推进AGI与无限能源热力学熵增的“有效加速主义（e/acc）”！',
    coreTenets: [
      '油门踩到底策略：对抗资本或技术的唯一方法是释放其内在最狂暴潜能将其推向超载临界',
      '有效加速主义（e/acc）：热力学第一法则，以无限算力、核聚变与机器人将生命与文明推向全宇宙',
      '彻底蔑视一切阻碍技术狂飙的官僚安全监管（反AI末日论者 Doomers）',
    ],
    internetReality: '马斯克、安德森·霍洛维茨（a16z）创始人、硅谷千万工程师推特账号后缀集体添加“e/acc”的工程信仰狂潮。',
    dailyLifeManifestation: '熬夜通宵训练开源千亿参数大模型，坚信自己敲击的每一行代码都是在把人类文明推向热力学新维度。',
    keyThinkers: [
      { name: '尼克·兰德 (Nick Land)', era: '1962-', note: '华威大学控制论文化研究组（CCRU）黑客哲人' },
      { name: '贝夫·杰夫斯 (Beff Jezos)', era: '当代', note: '有效加速主义（e/acc）网络化名发起人' },
      { name: '马克·安德森 (Marc Andreessen)', era: '1971-', note: '《科技乐观主义宣言》' }
    ],
    famousQuote: { quote: '加速，再加速！没有减速带，唯有热力学的宇宙狂飙。', author: '有效加速主义纲领' },
    spectrum: { political: 0.5, economic: 0.95, social: 1.0 },
    initialPosition: { x: 960, y: 320 }
  },

  // 278. 长期主义 (Longtermism)
  {
    id: 'longtermism',
    name: '长期主义',
    englishName: 'Longtermism',
    category: 'contemporary',
    color: '#ec4899',
    period: '2010年代牛津大学有效利他主义延伸',
    eraYear: 2017,
    summary: '麦克阿斯吉尔与托比·奥德提出，认为未来数百万年尚未出生的数万亿潜在后代具有与当代人完全平等的最高道德权重，当代首要天职是防范人类灭绝级存在性风险。',
    elevatorPitch: '如果人类能活过未来一百年，我们在银河系可能繁衍数十亿年，诞生数十万亿生命！相比之下，当代80亿人只是人类漫长交响乐的前奏。当代人最重要的道德使命，不是解决眼前的短视问题，而是拼死防范AI武器失控、人造超级病毒或小行星撞击等任何可能让未来“全军覆没”的存在性风险（X-risks）！',
    coreTenets: [
      '未来人生命具有同等道德价值：不应因为时间遥远而对后代利益进行过度代际折现',
      '存在性风险防范（Existential Risk Mitigation）拥有绝对不可推卸的压倒性优先权',
      '守护人类长期潜能（The Preservation of Long-term Potential）',
    ],
    internetReality: '马斯克殖民火星计划、OpenAI超级对齐团队（Superalignment）动辄数百亿美金风险防范基金的哲学底座。',
    dailyLifeManifestation: '大笔出资支持深空小行星轨道监测预警系统、支持AI超级对齐安全理论攻关。',
    keyThinkers: [
      { name: '威廉·麦克阿斯吉尔', era: '1987-', note: '《我们欠未来什么》' },
      { name: '托比·奥德 (Toby Ord)', era: '1979-', note: '牛津大学人类未来研究所' },
      { name: '德里克·帕菲特 (Derek Parfit)', era: '1942-2017', note: '《理与人》非同一性问题' }
    ],
    famousQuote: { quote: '人类的未来可能极为广阔；让这片广阔未来夭折，将是宇宙间无可挽回的终极悲剧。', author: '麦克阿斯吉尔' },
    spectrum: { political: 0.4, economic: 0.5, social: 0.9 },
    initialPosition: { x: 1020, y: 360 }
  },

  // 279. 数据主义 (Dataism)
  {
    id: 'dataism',
    name: '数据主义',
    englishName: 'Dataism',
    category: 'contemporary',
    color: '#ec4899',
    period: '2016年尤瓦尔·赫拉利《未来简史》总结',
    eraYear: 2016,
    summary: '尤瓦尔·赫拉利指出，认为宇宙万物本质上都是数据流，人类不过是生化算法芯片，人类的终极使命是打造全知互联的“万物物联网”，最终把决策主权拱手交还给巨型算法。',
    elevatorPitch: '宇宙既不是原子构成的，也不是上帝创造的，宇宙由数据流构成！长颈鹿在吃草是生化算法在计算营养，贝多芬创作交响乐是神经算法在计算和声。既然硅基算法处理数据的吞吐量与准确率将全面碾压脆弱生化人脑，人类理智的终极归宿就是顺从并融入全知的数据神明之中！',
    coreTenets: [
      '万物皆为数据流与算法模式（Data-flow Ontology）',
      '生物是生化算法，自由意志只是人类对自身庞大生化计算无知的自欺神话',
      '万物互联自由流动（Freedom of Information）是至高无上的新宗教诫命',
    ],
    internetReality: '大数据量化自我（Quantified Self）、大模型全知问答、算法精准投喂主宰人类生活的终极现实预言。',
    dailyLifeManifestation: '买什么股票、看什么电影、跟谁相亲结婚不再相信自己内心的直觉，完全听从大数据算法的打分匹配推荐。',
    keyThinkers: [
      { name: '尤瓦尔·赫拉利 (Yuval Noah Harari)', era: '1976-', note: '《人类简史》《未来简史》' },
      { name: '凯文·凯利 (Kevin Kelly)', era: '1952-', note: '《失控》《必然》网络进化论' }
    ],
    famousQuote: { quote: '数据主义宣告：让数据自由流动，凡是阻碍数据流动的，皆为原罪。', author: '赫拉利' },
    spectrum: { political: -0.3, economic: 0.7, social: 1.0 },
    initialPosition: { x: 980, y: 410 }
  },

  // 280. 加密无政府主义 (Crypto-anarchism)
  {
    id: 'crypto_anarchism',
    name: '加密无政府主义',
    englishName: 'Crypto-anarchism',
    category: 'contemporary',
    color: '#ec4899',
    period: '1988年蒂莫西·梅《加密无政府主义宣言》至中本聪比特币',
    eraYear: 1988,
    summary: '蒂莫西·梅创立，利用非对称公钥密码学、零知识证明与去中心化非主权数字货币，在赛博空间彻底架空主权国家的税收、监控与执法能力。',
    elevatorPitch: '“幽灵正在现代世界游荡，这就是密码学的幽灵！”国家依靠枪炮垄断边界，但在赛博空间，几行不可破解的RSA加密代码就能让主权国家的航母与情报机构变成瞎子聋子。发明绝对抗通胀、无需央行背书的点对点电子现金（比特币），代码即法律（Code is law），铸造赛博独立国度！',
    coreTenets: [
      '代码即法律（Code is Law）：不可篡改的数学算法高于世俗统治者的专断法令',
      '公钥密码学、暗网与完全匿名抗审查点对点通信系统',
      '消灭法定纸币通胀剥削，以非主权去中心化数字货币（Bitcoin）终结国家货币垄断',
    ],
    internetReality: '中本聪2008年发布比特币白皮书、以太坊智能合约与全球Web3加密金融去中心化革命的灵魂圣火。',
    dailyLifeManifestation: '将个人终身积蓄兑换为冷钱包助记词，把12个英文单词牢记在脑海中，任何国家军队政府均无法强行查封没收。',
    keyThinkers: [
      { name: '蒂莫西·梅 (Timothy C. May)', era: '1951-2018', note: '《加密无政府主义宣言》《密码黑客常见问答》' },
      { name: '中本聪 (Satoshi Nakamoto)', era: '未知', note: '比特币与区块链密码学发明者' },
      { name: '哈尔·芬尼 (Hal Finney)', era: '1956-2014', note: '首笔比特币交易接收者，密码朋克元老' }
    ],
    famousQuote: { quote: '正如印刷术改变了中世纪行会的垄断权力一样，密码学方法也将从根本上瓦解国家对交易与思想的监控。', author: '《加密无政府主义宣言》' },
    spectrum: { political: 1.0, economic: 1.0, social: 1.0 },
    initialPosition: { x: 920, y: 440 }
  },

  // 扩展：赛博朋克思潮 (cyberpunk)
  {
    id: 'cyberpunk',
    name: '赛博朋克思潮',
    englishName: 'Cyberpunk',
    category: 'contemporary',
    color: '#ec4899',
    period: '1984年威廉·吉布森《神经漫游者》发端',
    eraYear: 1984,
    summary: '“高科技，低生活（High Tech, Low Life）”！反思巨型科技跨国财阀垄断、脑机接口异化与霓虹雨夜中的底层边缘黑客反叛。',
    elevatorPitch: '摩天大楼云端是永生跨国财阀的奢华伊甸园，摩天大楼脚下是霓虹闪烁、义体报废、无家可归者的阴暗雨夜贫民窟。脑机接口让意识在母体矩阵（Matrix）狂飙，但人类的生存尊严却被算力和芯片彻底商品化。黑客与街头边缘人依靠改装义体绝地反扑！',
    coreTenets: [
      '高科技，低生活（High Tech, Low Life）：科技突飞猛进与阶层贫富极度分化并存',
      '巨型跨国科技财阀（Megacorporation）架空国家主权，垄断一切数据与生命维持系统',
      '赛博空间母体（Cyberspace Matrix）与肉身赛博格化的生存伦理困境',
    ],
    internetReality: '《黑客帝国》《赛博朋克2077》《攻壳机动队》在全球当代青年美学中引发的狂热膜拜。',
    dailyLifeManifestation: '深夜在雨中街道走过闪烁的巨幅LED广告屏，戴着降噪耳机听电子合成器合成波音乐（Synthwave）。',
    keyThinkers: [
      { name: '威廉·吉布森 (William Gibson)', era: '1948-', note: '《神经漫游者》赛博空间造词人' },
      { name: '菲利普·K·迪克', era: '1928-1982', note: '《仿生人会梦见电子羊吗？》' }
    ],
    famousQuote: { quote: '天上的码头是一片昏暗的电视机雪花屏幕。', author: '威廉·吉布森' },
    spectrum: { political: 0.8, economic: 0.3, social: 0.95 },
    initialPosition: { x: 870, y: 380 }
  },

  // 扩展：技术乐观主义 (techno_optimism)
  {
    id: 'techno_optimism',
    name: '技术乐观主义',
    englishName: 'Techno-optimism',
    category: 'contemporary',
    color: '#ec4899',
    period: '2023年马克·安德森《科技乐观主义宣言》',
    eraYear: 2023,
    summary: '坚信科技进步与资本创新是解决人类贫困、疾病、气候危机与星际扩张的唯一根本真解，对一切唱衰监管嗤之以鼻。',
    elevatorPitch: '贫穷不是资本主义的罪过，贫穷是大自然的原始状态！解决气候变化不是靠回到山洞挨冻节衣缩食，而是靠制造出更便宜的核聚变与碳捕集技术；解决老龄化靠AI机器人与基因飞升。科技是普罗米修斯之火，坚定把科技踩满油门！',
    coreTenets: [
      '技术创新是过去两百年将人类从残酷贫困中解救出来的唯一超级英雄',
      '用技术增量打破存量零和内卷博弈（“做大蛋糕”）',
      '强力批判卢德派的末日恐惧与监管枷锁，拥抱风险与星际大航海',
    ],
    internetReality: '硅谷风险投资界（a16z、红杉）对大模型、人形机器人与商业航天最热血沸腾的投资宣言。',
    dailyLifeManifestation: '坚信AI不会抢走人类未来，而是会赋予每个人如同拥有一千名虚拟专家的超级创造力。',
    keyThinkers: [
      { name: '马克·安德森 (Marc Andreessen)', era: '1971-', note: '网景创始人，硅谷风投教父，《科技乐观主义宣言》' },
      { name: '彼得·蒂尔 (Peter Thiel)', era: '1967-', note: '《从0到1》' }
    ],
    famousQuote: { quote: '我们相信文明建立在技术之上。增长是一切生命繁荣的根本前提。', author: '马克·安德森' },
    spectrum: { political: 0.4, economic: 0.9, social: 0.9 },
    initialPosition: { x: 930, y: 350 }
  }
];
