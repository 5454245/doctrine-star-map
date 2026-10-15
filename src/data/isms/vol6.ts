import { IsmNode } from '../../types/ism';

// 第六卷：民族主义、地缘政治、威权与身份思潮 (191 – 225)
export const VOL6_ISMS: IsmNode[] = [
  // 191. 民族主义 (Nationalism)
  {
    id: 'nationalism',
    name: '民族主义',
    englishName: 'Nationalism',
    category: 'political',
    color: '#38bdf8',
    period: '18世纪法国大革命后席卷全球',
    eraYear: 1789,
    summary: '主张“民族（Nation）”与“国家（State）”的政治边界应当重合，民族拥有自决主权与最高忠诚。',
    elevatorPitch: '我们不是帝国皇帝治下的散兵游勇臣民，我们是拥有共同历史命运、语言文化与自决权力的伟大民族！民族利益高于一切，民族必须拥有完全属于自己的独立主权国家。',
    coreTenets: [
      '民族自决原则：每个民族拥有自主决定自身政治前途与建国权',
      '政治与民族单位的一致性（欧内斯特·盖尔纳定义）',
      '国家对公民拥有最高忠诚优先索取权',
    ],
    internetReality: '现代国际地缘政治、奥运会金牌榜、进出口贸易战中最强大的集体情绪聚焦点。',
    dailyLifeManifestation: '世界杯足球赛时，全国人民自发披上国旗在广场狂欢呐喊，休戚与共。',
    keyThinkers: [
      { name: '约翰·戈特弗里德·赫尔德', era: '1744-1803', note: '民族精神（Volksgeist）之父' },
      { name: '本尼迪克特·安德森', era: '1936-2015', note: '《想象的共同体》' },
      { name: '欧内斯特·盖尔纳', era: '1925-1995', note: '工业化与民族主义理论' }
    ],
    famousQuote: { quote: '民族是一种想象的政治共同体。', author: '安德森' },
    spectrum: { political: -0.6, economic: 0.1, social: -0.7 },
    initialPosition: { x: -200, y: 400 }
  },

  // 192. 公民民族主义 (Civic Nationalism)
  {
    id: 'civic_nationalism',
    name: '公民民族主义 / 自由民族主义',
    englishName: 'Civic Nationalism',
    category: 'political',
    color: '#38bdf8',
    period: '卢梭、雷南至今',
    eraYear: 1882,
    summary: '以共同的公民政治权利、法治宪法忠诚与政治意愿定义民族，不分血统种族。',
    elevatorPitch: '法国哲学家勒南名言：“民族的存在就是一场每日举行的全民公决！”只要你认同这个国家的宪法、遵纪守法并愿意共同建设未来，无论你来自哪个大洲、流淌着什么血统，你都是我们平等的同胞！',
    coreTenets: [
      '民族由自愿认同宪法价值的公民共同体（Civic Community）构成',
      '包容性与开放性：通过入籍宣誓接纳异族移民同化',
      '主权在民与保护基本人权程序优先于血统纯洁性',
    ],
    internetReality: '传统移民国家（如美国、加拿大）融炉政策与法国世俗共和国模式的立国哲学根基。',
    dailyLifeManifestation: '新移民在法官面前庄严宣誓效忠宪法，手捧国旗与法官合影获得正式公民身份证。',
    keyThinkers: [
      { name: '厄内斯特·勒南 (Ernest Renan)', era: '1823-1892', note: '《什么是民族？》' },
      { name: '尤尔根·哈贝马斯', era: '1929-', note: '宪政爱国主义（Constitutional Patriotism）' }
    ],
    famousQuote: { quote: '一个民族的存在，是一场每日都在进行的公民投票。', author: '勒南' },
    spectrum: { political: 0.3, economic: 0.1, social: 0.6 },
    initialPosition: { x: -140, y: 430 }
  },

  // 193. 族裔民族主义 (Ethnic Nationalism)
  {
    id: 'ethnic_nationalism',
    name: '族裔民族主义 / 族群民族主义',
    englishName: 'Ethnic Nationalism',
    category: 'political',
    color: '#38bdf8',
    period: '19世纪中欧东欧发端',
    eraYear: 1848,
    summary: '以共同的生物遗传血统、祖先谱系传承与先天的族裔起源来严格界定民族归属。',
    elevatorPitch: '国籍证书可以伪造，宪法宣誓可以撒谎，但你骨子里流淌的祖先血液永远无法改变！民族是一个天然生成的血缘命运共同体。外族人就算在我们的土地住一百年，其根本灵魂也不是我们的族人。',
    coreTenets: [
      '血统原则（Jus sanguinis）：公民身份与民族属性由亲代血缘决定',
      '强调共同的先祖神话、祖坟故土与先天的生物遗传联系',
      '对外部异族移民保持高度警惕排斥甚至强制同化隔离',
    ],
    internetReality: '巴尔干半岛冲突、卢旺达种族悲剧与当前极右翼白人民族主义（White Nationalism）的理论底色。',
    dailyLifeManifestation: '结婚相亲时严格要求对方必须是本族裔纯血后代，否则逐出宗族家谱。',
    keyThinkers: [
      { name: '约翰·戈特利布·费希特', era: '1762-1814', note: '《对德意志民族的演讲》' }
    ],
    famousQuote: { quote: '流淌在我们血管里的鲜血，比任何墨水写成的法律都更加庄严。', author: '族裔民族主义口号' },
    spectrum: { political: -0.8, economic: 0.0, social: -1.0 },
    initialPosition: { x: -80, y: 460 }
  },

  // 194. 文化民族主义 (Cultural Nationalism)
  {
    id: 'cultural_nationalism',
    name: '文化民族主义',
    englishName: 'Cultural Nationalism',
    category: 'cultural',
    color: '#f59e0b',
    period: '赫尔德反抗法兰西霸权发端',
    eraYear: 1784,
    summary: '以共同的母语语言、民间传说、历史集体记忆与生活美学方式作为民族凝聚的核心灵魂。',
    elevatorPitch: '赫尔德认为：每一个民族都是上帝花园里一朵独一无二的花朵！不要用冷冰冰的法国式通用理性抹杀千差万别的文化个性。收集各民族的古老民歌、整理本民族史诗语言，保护在母语摇篮里跳跃的民族灵魂。',
    coreTenets: [
      '语言是民族思想的圣殿（Language as the vessel of the soul）',
      '收集整理民间童话史诗（如格林兄弟搜集日耳曼童话）作为民族觉醒号角',
      '强调文化独立自主性，抵抗强势外来文化的语言同化与美学殖民',
    ],
    internetReality: '汉服复兴运动、威尔士语保护运动与各国申遗“非物质文化遗产”的最高精神共鸣。',
    dailyLifeManifestation: '坚持给新生儿取古色古香的纯正母语名字、极力推动地方方言与非遗戏曲进中小学课堂。',
    keyThinkers: [
      { name: '约翰·戈特弗里德·赫尔德', era: '1744-1803', note: '民间文学收集与语言哲学' },
      { name: '格林兄弟 (Brothers Grimm)', era: '1785-1863', note: '通过搜集日耳曼童话唤醒民族意识' }
    ],
    famousQuote: { quote: '只要一个民族还保留着自己的母语，就等于掌握了打开自身自由牢门的钥匙。', author: '赫尔德' },
    spectrum: { political: -0.2, economic: 0.0, social: -0.6 },
    initialPosition: { x: -20, y: 490 }
  },

  // 195. 后殖民主义 (Postcolonialism)
  {
    id: 'postcolonialism',
    name: '后殖民主义',
    englishName: 'Postcolonialism',
    category: 'cultural',
    color: '#f59e0b',
    period: '20世纪70年代末萨义德《东方学》奠基',
    eraYear: 1978,
    summary: '法农、萨义德代表，批判西方宗主国在枪炮撤走后，对第三世界在文化话语、他者想象与学术权力上的持续殖民。',
    elevatorPitch: '殖民军官虽然撤走了，但殖民的幽灵依然盘踞在第三世界人民的心灵深处！西方把东方虚构成“神秘、落后、蒙昧、需要被西方文明拯救的他者（东方学 Orientalism）”。必须彻底解构西方中心主义的文化霸权！',
    coreTenets: [
      '东方学（Orientalism）：西方用来支配、重构和凌驾于东方之上的霸权话语体系',
      '杂合性（Hybridity）与模仿（Mimicry）：殖民地人群在服从中的颠覆性戏仿',
      '底层属民能否发声？（斯皮瓦克）：追问被双重压迫的边缘群体的主体性',
    ],
    internetReality: '批判好莱坞电影中的亚裔刻板印象、博物馆拒不归还掠夺第三世界文物的最强批判理论核武。',
    dailyLifeManifestation: '审视西方奢侈品牌广告时，敏锐识别出其画面中暗藏的殖民猎奇与“白人拯救者”傲慢叙事。',
    keyThinkers: [
      { name: '爱德华·萨义德 (Edward Said)', era: '1935-2003', note: '《东方学》《文化与帝国主义》' },
      { name: '弗朗茨·法农 (Frantz Fanon)', era: '1925-1961', note: '《黑皮肤，白面具》《大地上的受苦者》' },
      { name: '佳亚特里·斯皮瓦克', era: '1942-', note: '属民研究与后殖民解构' }
    ],
    famousQuote: { quote: '东方不是一个纯粹的地理事实，东方是一种被西方建构出来的话语体系。', author: '萨义德' },
    spectrum: { political: 0.7, economic: -0.5, social: 0.95 },
    initialPosition: { x: 40, y: 520 }
  },

  // 196. 泛民族主义 (Pan-nationalism)
  {
    id: 'pan_nationalism',
    name: '泛民族主义',
    englishName: 'Pan-nationalism',
    category: 'political',
    color: '#38bdf8',
    period: '19-20世纪跨国民族大合并思潮',
    eraYear: 1878,
    summary: '主张将跨越现有主权国界、拥有同源语族或地理人种的各个分散人群合并为超级庞大的政治联盟。',
    elevatorPitch: '现有被列强切割的碎片化国界是历史的耻辱！所有斯拉夫人应当在沙皇俄罗斯旗帜下团结（泛斯拉夫主义）；所有阿拉伯兄弟应当打破中东殖民线条走向一统（泛阿拉伯主义）；所有黑人同胞应当共同捍卫非洲大陆尊严（泛非主义）。',
    coreTenets: [
      '以超越既定主权边界的宏大宏观语族（斯拉夫、突厥、阿拉伯、日耳曼）为认同单位',
      '主张修改甚至暴力打破二战或殖民时代遗留的国际公认国界',
      '极易被强势核心区域霸权大国借机用作对外地缘扩张兼并的意识形态工具',
    ],
    internetReality: '当今俄罗斯“欧亚主义”、泛突厥地缘梦想及纳赛尔主义历史回响的根源。',
    dailyLifeManifestation: '在国际论坛上激情呼吁跨国界同胞“血浓于水，迟早合并建立大一统联邦”。',
    keyThinkers: [
      { name: '达尼列夫斯基 (Nikolai Danilevsky)', era: '1822-1885', note: '《俄罗斯与欧洲》泛斯拉夫主义教父' },
      { name: '加迈勒·阿卜杜勒·纳赛尔', era: '1918-1970', note: '阿拉伯联合共和国创立者' }
    ],
    famousQuote: { quote: '让所有同根同源的溪流，最终汇入统一民族的辽阔汪洋！', author: '泛民族主义诗句' },
    spectrum: { political: -0.7, economic: 0.0, social: -0.8 },
    initialPosition: { x: 100, y: 550 }
  },

  // 197. 锡安主义 / 犹太复国主义 (Zionism)
  {
    id: 'zionism',
    name: '锡安主义 / 犹太复国主义',
    englishName: 'Zionism',
    category: 'political',
    color: '#38bdf8',
    period: '1897年西奥多·赫茨尔发起首届锡安主义大会',
    eraYear: 1897,
    summary: '西奥多·赫茨尔创立，主张流散世界近两千年的犹太民族必须在巴勒斯坦圣经故土重建属于自己的独立主权国家。',
    elevatorPitch: '面对欧洲数百年不散的反犹排犹阴云与德雷福斯冤案，赫茨尔认识到：犹太人融入欧洲的幻想彻底破灭了！犹太人必须像其他正常民族一样，在自己祖先的故土（锡安山）建立军队、农庄与主权国家，自己保卫自己的同胞！',
    coreTenets: [
      '在先祖土地（厄立茨以色列）建立并保卫犹太人多数的主权庇护所',
      '回归（Aliyah）：呼唤全球流散犹太人移民回归以色列',
      '分为工党锡安主义（基布兹集体）、修正锡安主义（强硬安全鹰派）与宗教锡安主义',
    ],
    internetReality: '当代中东巴以冲突最核心、撕裂感最强的全球地缘舆论风暴眼。',
    dailyLifeManifestation: '全球犹太青年通过“生来权利（Birthright）”计划免费前往以色列耶路撒冷哭墙朝圣寻根。',
    keyThinkers: [
      { name: '西奥多·赫茨尔 (Theodor Herzl)', era: '1860-1904', note: '《犹太国》现代锡安主义之父' },
      { name: '泽埃夫·亚博廷斯基', era: '1880-1940', note: '修正派锡安主义铁壁防御理论' }
    ],
    famousQuote: { quote: '只要你们愿意，这就不是一个神话。', author: '赫茨尔' },
    spectrum: { political: -0.5, economic: 0.2, social: -0.6 },
    initialPosition: { x: 160, y: 580 }
  },

  // 198. 爱国主义 (Patriotism)
  {
    id: 'patriotism',
    name: '爱国主义',
    englishName: 'Patriotism',
    category: 'political',
    color: '#38bdf8',
    period: '古典城邦公民美德至现代国家认同',
    eraYear: 1776,
    summary: '对祖国土地、同胞福祉与宪政体制的深沉情感依恋、忠诚奉献，区别于侵略排他的狭隘民族主义。',
    elevatorPitch: '奥威尔曾精准区分：“爱国主义本质上是防御性的，是对某种特定生活方式的热爱，绝不强加于他人；而民族主义则沉迷于权力和优越感，总是渴望征服支配他者。”健康的爱国主义是对公共家园的责任担当。',
    coreTenets: [
      '对本土社区、历史文化、秀美山川与共同体公民的深沉赤子之爱',
      '公民义务与公益担当：在危机面前挺身而出保卫家园',
      '哈贝马斯“宪政爱国主义”：将忠诚建立在民主法治普遍人权基石之上',
    ],
    internetReality: '常遭遇“到底是爱国还是爱体制”的深刻思辨辩论，是维系任何主权国家不散架的基本凝聚力。',
    dailyLifeManifestation: '在外敌侵略或重大天灾袭来时，青年自发排长队报名参军奔赴抗灾救灾最前线。',
    keyThinkers: [
      { name: '乔治·奥威尔 (George Orwell)', era: '1903-1950', note: '《论民族主义》区分爱国与盲目民族狂热' },
      { name: '尤尔根·哈贝马斯', era: '1929-', note: '剥离血统沙文主义的宪政爱国主义' }
    ],
    famousQuote: { quote: '爱国主义是对你自己土地的热爱，而民族主义则是对其他人土地的仇恨。', author: '戴高乐' },
    spectrum: { political: -0.3, economic: 0.0, social: -0.4 },
    initialPosition: { x: 80, y: 440 }
  },

  // 199. 沙文主义 (Chauvinism)
  {
    id: 'chauvinism',
    name: '沙文主义',
    englishName: 'Chauvinism',
    category: 'political',
    color: '#38bdf8',
    period: '源于拿破仑军中老兵尼古拉·沙文',
    eraYear: 1831,
    summary: '狂热、盲目且具有极强侵略性、排他性的极端优越感，坚信自己群体至高无上、一切过错皆在他者。',
    elevatorPitch: '拿破仑的一位狂热老兵沙文，哪怕帝国战败一贫如洗，依然狂热高呼皇帝英明无敌、对外征服万岁！沙文主义指那种丧失了基本同理心与客观理智的狂热偏执——盲信本国、本民族、本性别天然优越，动辄主张用铁拳消灭异己。',
    coreTenets: [
      '盲目狂热与道德优越论：自居文明中心，视外界他者为低劣下等群体',
      '对外具有强烈挑衅侵略倾向，对内残酷打压任何理性反思与自省声音',
      '延伸出大国沙文主义、男性沙文主义（大男子主义）等概念',
    ],
    internetReality: '键盘战争、粉圈互撕与极端民粹极端言论中最刺眼的暴戾底色。',
    dailyLifeManifestation: '在国际论坛上到处叫嚣“迟早灭了你们、把你们国家从地图上抹去”的狂热引战键盘侠。',
    keyThinkers: [
      { name: '尼古拉·沙文 (Nicolas Chauvin)', era: '19世纪初', note: '盲目狂热士兵原型' }
    ],
    famousQuote: { quote: '沙文主义是一种道德瘫痪，它用狂热的集体自大扼杀了人类的同理心。', author: '经典批判格言' },
    spectrum: { political: -0.9, economic: 0.1, social: -0.9 },
    initialPosition: { x: 140, y: 470 }
  },

  // 200. 侵略性爱国主义 / 穷兵黩武主义 (Jingoism)
  {
    id: 'jingoism',
    name: '穷兵黩武主义',
    englishName: 'Jingoism',
    category: 'political',
    color: '#38bdf8',
    period: '1877年俄土战争英国流行歌曲发端',
    eraYear: 1878,
    summary: '源于英国酒吧战歌“By Jingo”，特指在外交上极度好战、动辄宣扬以武力威胁甚至全面发动战争的狂热民族主义。',
    elevatorPitch: '1878年英国流行一首酒吧战歌：“只要我们愿意（By Jingo）！我们有战舰，我们有战士，我们有金钱！”指那种狂妄自信、把国家对外开战视作宣泄精力与掠夺光荣的极端好战情绪。叫嚣武力解决一切争端。',
    coreTenets: [
      '极度崇尚军事力量展示与对外发动预防性战争',
      '视外交和平谈判、国际妥协为软弱可耻的投降主义',
      '利用煽动性大众传媒（黄色新闻报纸）在民间制造全民战争狂热',
    ],
    internetReality: '美西战争前夕赫斯特黄色新闻报纸的煽动狂欢，也是现代军工复合体游说战争的舆论帮凶。',
    dailyLifeManifestation: '遇到哪怕最微小的渔业争端，网络大V立刻煽动“立刻派核潜艇开火击沉”的叫嚣流量。',
    keyThinkers: [
      { name: '威廉·赫斯特 (William Randolph Hearst)', era: '1863-1951', note: '煽动美西战争的黄色报业大亨' }
    ],
    famousQuote: { quote: '你给我提供照片，我来给你制造一场战争！', author: '报业大亨赫斯特名言' },
    spectrum: { political: -0.85, economic: 0.3, social: -0.8 },
    initialPosition: { x: 200, y: 500 }
  },

  // 201. 领土收复主义 (Irredentism)
  {
    id: 'irredentism',
    name: '领土收复主义',
    englishName: 'Irredentism',
    category: 'political',
    color: '#38bdf8',
    period: '源于19世纪意大利统一运动（Italia irredenta）',
    eraYear: 1877,
    summary: '主张以历史上曾属本国管辖、或邻国境内聚居本族同胞为由，必须通过外交或武装战争将其领土并吞收复。',
    elevatorPitch: '“未收复的土地（Terra irredenta）”！祖辈曾经拥有的疆域哪怕丢了一百年，也必须夺回来；隔壁邻国边界那一侧住着讲我们母语的几千个老乡，那一整块土地就必须划归我们！成为近代欧亚大陆无休止地缘战争的火药引线。',
    coreTenets: [
      '历史疆域合法性高于现存国际法与联合国公认现有国界',
      '以跨境同胞遭受压迫为借口发动边境特别军事行动或公投合并',
      '沉湎于古代帝国鼎盛时期的庞大地图怀旧病',
    ],
    internetReality: '俄乌冲突对克里米亚与顿巴斯的争夺、亚美尼亚与阿塞拜疆对纳卡冲突的最直接理论依据。',
    dailyLifeManifestation: '天天在历史地图上画大圈圈，坚信邻国某几个省份自古以来都是自己的神圣故土。',
    keyThinkers: [
      { name: '马泰奥·雷纳托·因布里亚尼', era: '1843-1901', note: '提出“未收复的意大利”口号' }
    ],
    famousQuote: { quote: '祖先曾踏足的每一寸土地，都是我们不可放弃的神圣遗产。', author: '领土收复主义信条' },
    spectrum: { political: -0.7, economic: 0.1, social: -0.7 },
    initialPosition: { x: 260, y: 530 }
  },

  // 202. 本土主义 / 排外主义 (Nativism)
  {
    id: 'nativism',
    name: '本土主义 / 排外主义',
    englishName: 'Nativism',
    category: 'political',
    color: '#38bdf8',
    period: '19世纪美国“一无所知党”至今',
    eraYear: 1854,
    summary: '主张优先保护本土原住居民（特指先到定居族群）的政治与经济利益，强烈排斥与敌视外来新移民与多元文化。',
    elevatorPitch: '外来移民抢走了我们的工作，降低了我们的工资，稀释了我们的纯正文化与信仰！国家是属于我们这些世世代代在此生息繁衍的本土老住户的。必须筑起高墙、严格驱逐无证非法移民，杜绝多元文化破坏家园。',
    coreTenets: [
      '本土地位特权论：早先定居的群体拥有超越后来者的绝对政治与文化优先权',
      '大替代恐慌（The Great Replacement）：深恐本土群体在人口学上被异族新移民反超淹没',
      '将社会治安恶化、就业困难与福利开支飙升一律甩锅给外来移民',
    ],
    internetReality: '欧美大选中“修筑边境隔离墙”、全面收紧难民庇护审批的最强大选民基本盘。',
    dailyLifeManifestation: '在社区集会上抗议当地政府修建难民庇护所，要求把公共资源全部优先留给本国纳税人。',
    keyThinkers: [
      { name: '萨缪尔·P·亨廷顿', era: '1927-2008', note: '《我们是谁？美国国家认同面临的挑战》' }
    ],
    famousQuote: { quote: '如果敞开国门任由异质文化泛滥，我们将彻底失去原本的自己。', author: '亨廷顿' },
    spectrum: { political: -0.6, economic: 0.2, social: -0.9 },
    initialPosition: { x: 220, y: 440 }
  },

  // 203. 分离主义 (Separatism)
  {
    id: 'separatism',
    name: '分离主义',
    englishName: 'Separatism',
    category: 'political',
    color: '#38bdf8',
    period: '近代主权国家内部族群与区域运动',
    eraYear: 1960,
    summary: '主张特定族群、宗教或地理区域从现有主权国家中脱离出去，建立独立主权国家或高度排他性政治实体的政治思潮。',
    elevatorPitch: '该思潮主张由于历史文化、语言习俗或经济诉求等差异，特定地理区域或族群应当寻求脱离所属主权国家。在现代政治学与国际法学中，该学说通常被置于国家主权原则、宪法秩序不可分性与地缘安全稳定的复杂交织中进行研判；其单方面主张往往与国际法公认的领土完整原则产生深刻冲突。',
    coreTenets: [
      '区域自主张力：主张区域特殊文化或历史认同高于现有主权国家的政治整合',
      '指控中央政权存在文化同化、资源分配不均或政治代表权局限',
      '探讨通过地方公投或法律诉求寻求政治地位变动的理论路径',
      '【主权与宪法边界注记】：国家主权、统一和领土完整是现代国际法基本准则与各国宪法确立的最高原则。《联合国宪章》明确确立尊重国家领土完整与主权平等原则，任何单方面分裂国家的非法行径均受国家法律坚决制止与严惩。在我国法律法规下，维护国家主权、统一和领土完整是包括港澳同胞和台湾同胞在内的全中国人民的共同义务，任何分裂国家的行径都将受到《中华人民共和国宪法》《反分裂国家法》《刑法》等法律的坚决依法惩处。本条目仅作为比较政治学思想史客观梳理'
    ],
    internetReality: '国际公法与比较政治学中关于苏格兰、魁北克、加泰罗尼亚等地方公投的法理研判表明，主权国家的宪法秩序与领土完整具有不可动摇的最高法律效力，单方分裂主张在绝大多数法域均被裁定违宪非法。',
    dailyLifeManifestation: '在国际新闻与比较政治研究中，表现为观察地方区域自治诉求与国家主权宪制秩序之间的司法博弈与制度协调。',
    keyThinkers: [
      { name: '区域自治与国际法理学者', era: '现代', note: '救济性分离（Remedial Secession）与宪制秩序法理辩论' }
    ],
    famousQuote: { quote: '主权国家的领土完整与宪法秩序是维系现代国际法与和平稳定的基石。', author: '国际法公理评述' },
    spectrum: { political: 0.8, economic: 0.0, social: 0.7 },
    initialPosition: { x: 180, y: 380 }
  },

  // 204. 帝国主义 (Imperialism)
  {
    id: 'imperialism',
    name: '帝国主义',
    englishName: 'Imperialism',
    category: 'political',
    color: '#38bdf8',
    period: '19世纪末列强瓜分世界全盛',
    eraYear: 1898,
    summary: '一国通过军事武装征服、政治强制控制、金融资本垄断或文化渗透，将霸权意志强加于别国领土与人民。',
    elevatorPitch: '列宁定义：“帝国主义是资本主义的垄断寄生阶段。”资本在国内过度积累利润率下降，催生了跨国金融垄断寡头勾结军政国家机器，疯狂在海外划分势力范围、掠夺原材料产地与资本倾销市场。强权即公理。',
    coreTenets: [
      '经济扩张冲动：金融资本寡头垄断与资本输出取代普通商品输出',
      '地缘霸权与划分殖民地势力范围，建立跨国霸权金字塔等级依附结构',
      '当代演化为新帝国主义（金融美元霸权、IMF债务陷阱与文化可口可乐殖民）',
    ],
    internetReality: '第三世界反抗金融收割、西方对外武力推翻主权政权时全球左翼最响亮的讨伐檄文。',
    dailyLifeManifestation: '跨国金融财团通过高额高利贷债务条约控制某发展中国家核心港口长达99年经营权。',
    keyThinkers: [
      { name: 'V.I. 列宁 (Vladimir Lenin)', era: '1870-1924', note: '《帝国主义是资本主义的最高阶段》' },
      { name: '约翰·霍布森 (John A. Hobson)', era: '1858-1940', note: '《帝国主义：一项研究》' },
      { name: '大卫·哈维 (David Harvey)', era: '1935-', note: '《新帝国主义》剥夺性积累' }
    ],
    famousQuote: { quote: '帝国主义意味着资本从国内有限市场向全球空间的无情暴力掠夺。', author: '列宁' },
    spectrum: { political: -0.9, economic: 0.8, social: -0.6 },
    initialPosition: { x: 280, y: 410 }
  },

  // 205. 殖民主义 (Colonialism)
  {
    id: 'colonialism',
    name: '殖民主义',
    englishName: 'Colonialism',
    category: 'political',
    color: '#38bdf8',
    period: '大航海时代至二战后非殖民化',
    eraYear: 1492,
    summary: '通过直接派遣武装移民定居点建立殖民地，暴力剥夺原住民土地，建立种族不平等的直接异族统治。',
    elevatorPitch: '哥伦布踏上美洲、英国东印度公司征服印度！殖民主义不仅掠夺黄金、香料与橡胶，更用枪炮将原住民屠杀驱逐至保留地（定居者殖民），扶植买办总督统治。近代资本主义原始积累浸透着殖民地人民的斑斑血泪。',
    coreTenets: [
      '直接宗主国政治与军事异族全面统治（剥夺当地主权）',
      '定居者殖民主义（Settler Colonialism）：通过人口置换将原住民边缘化',
      '强行建立原材料单一产地与商品倾销的依附型殖民地种植园经济',
    ],
    internetReality: '全球各大博物馆掠夺文物归还运动、美洲原住民寄宿学校历史悲剧清算的风口浪尖。',
    dailyLifeManifestation: '加勒比海岛国大片甘蔗农场遗址，见证当年黑人奴隶在皮鞭下为欧洲贵族生产白糖的残酷岁月。',
    keyThinkers: [
      { name: '巴托洛梅·德拉斯·卡萨斯', era: '1484-1566', note: '最早控诉西班牙西印度殖民屠杀的多明我会修士' },
      { name: '艾梅·塞泽尔 (Aimé Césaire)', era: '1913-2008', note: '《论殖民主义》' }
    ],
    famousQuote: { quote: '殖民主义不仅摧毁了受害者的土地，而且彻底野蛮化了殖民者自身的灵魂。', author: '塞泽尔' },
    spectrum: { political: -0.95, economic: 0.7, social: -0.9 },
    initialPosition: { x: 340, y: 440 }
  },

  // 206. 军国主义 (Militarism)
  {
    id: 'militarism',
    name: '军国主义',
    englishName: 'Militarism',
    category: 'political',
    color: '#38bdf8',
    period: '普鲁士传统与旧日本昭和军国主义',
    eraYear: 1931,
    summary: '主张把国家政治生活完全置于军事组织控制之下，将对外侵略扩张、武力崇拜视作立国最高目标。',
    elevatorPitch: '普鲁士不是一个拥有军队的国家，而是一支拥有国家的军队！在军国主义国家，文官政府被军部架空，国家全部经济与教育沦为战争机器的燃料。崇尚武士道与牺牲，把侵略屠杀他国美化为神圣的开疆拓土圣战。',
    coreTenets: [
      '军队统帅权独立于议会与内阁宪政监督，军部独揽国家最高大权',
      '国民教育全面军事化操练，神化战死效忠的军人荣誉感',
      '对外发动疯狂侵略战争，掠夺“生存空间”与战略资源',
    ],
    internetReality: '二战德意日法西斯给全人类带来数千万生命伤亡浩劫的最暴戾军事形态。',
    dailyLifeManifestation: '学校中小学生不穿校服改穿微缩版军装踢正步，课本充斥着征服邻国地图的狂暴宣传。',
    keyThinkers: [
      { name: '阿尔弗雷德·冯·瓦德西', era: '1832-1904', note: '普鲁士军国主义总参谋长' },
      { name: '荒木贞夫 (Sadao Araki)', era: '1877-1966', note: '日本皇道派军国主义代表' }
    ],
    famousQuote: { quote: '国家的首要职责就是把全体人民武装成锋利的剑，随时准备刺入敌人的胸膛。', author: '军国主义口号' },
    spectrum: { political: -1.0, economic: 0.1, social: -1.0 },
    initialPosition: { x: 400, y: 470 }
  },

  // 207. 孤立主义 (Isolationism)
  {
    id: 'isolationism',
    name: '孤立主义',
    englishName: 'Isolationism',
    category: 'political',
    color: '#38bdf8',
    period: '华盛顿告别演说至二战前美国中立法案',
    eraYear: 1796,
    summary: '乔治·华盛顿代表，主张国家绝不卷入任何外国常设政治军事同盟，利用大洋天险独善其身、专注本国内政。',
    elevatorPitch: '华盛顿告别演说警示后人：“欧洲拥有一套与我们毫无关系的复杂利益争端。不要让我们年轻共和国的命运与欧洲任何势力的兴衰缠绕在一起！”利用大西洋与太平洋的天然屏障，绝不充当世界警察，安心过好自己的小日子。',
    coreTenets: [
      '坚决拒绝缔结永久性外国军事同盟（“无纠缠性同盟 No Entangling Alliances”）',
      '严格限制海外驻军与对外干预，主张战略收缩与本土防御',
      '反思帝国野心对本国宪政共和体制与财政赤字的无尽腐蚀',
    ],
    internetReality: '当代特朗普主义“从阿富汗、伊拉克、欧洲彻底撤军回国”在广大美国腹地选民中赢得海啸般支持。',
    dailyLifeManifestation: '坚决反对政府给万里之外的战乱国家拨款数百亿美元，要求把钱全部省下来修本土坑洼的公路。',
    keyThinkers: [
      { name: '乔治·华盛顿 (George Washington)', era: '1732-1799', note: '1796年告别演说定下孤立主义基调' }
    ],
    famousQuote: { quote: '我们与外国发展商贸关系的伟大准则，就是在扩大商业往来的同时，尽可能少地与他们发生政治牵连。', author: '华盛顿' },
    spectrum: { political: 0.2, economic: 0.3, social: -0.5 },
    initialPosition: { x: 340, y: 350 }
  },

  // 208. 国际主义 (Internationalism)
  {
    id: 'internationalism',
    name: '国际主义',
    englishName: 'Internationalism',
    category: 'political',
    color: '#38bdf8',
    period: '马克思无产阶级国际主义与威尔逊自由国际主义',
    eraYear: 1918,
    summary: '超越单一民族国家的狭隘私利，主张通过普遍跨国合作、国际法与国际组织共同解决人类全球性危机。',
    elevatorPitch: '无论是气候崩溃、大流行病毒还是核战争危机，没有任何一个国家能够独善其身关门解决！左翼主张全世界劳动者跨越国界联合起来反抗全球剥削；自由派主张建立国际联盟与联合国，依靠集体安全机制将侵略者锁进法治笼子。',
    coreTenets: [
      '全球治理观：国际法体系与国际多边组织高于单边霸权主义',
      '无产阶级国际主义：世界劳动者命运休戚与共，反对帝国主义资产阶级操纵的自相残杀',
      '自由国际主义：通过自由贸易、多边条约与民主扩展维系持久和平',
    ],
    internetReality: '世界卫生组织（WHO）、联合国维和部队与国际气候巴黎协定的崇高道德基座。',
    dailyLifeManifestation: '无国界医生（MSF）志愿奔赴战乱饥荒国度抢救生命，不分国籍种族。',
    keyThinkers: [
      { name: '伍德罗·威尔逊 (Woodrow Wilson)', era: '1856-1924', note: '十四点原则，国联缔造者' },
      { name: '卡尔·马克思', era: '1818-1883', note: '国际工人协会（第一国际）' }
    ],
    famousQuote: { quote: '全世界无产者，联合起来！', author: '第一国际国际主义口号' },
    spectrum: { political: 0.4, economic: -0.3, social: 0.8 },
    initialPosition: { x: 260, y: 310 }
  },

  // 209. 世界主义 (Cosmopolitanism)
  {
    id: 'cosmopolitanism',
    name: '世界主义',
    englishName: 'Cosmopolitanism',
    category: 'political',
    color: '#38bdf8',
    period: '古希腊第欧根尼至康德《永久和平论》',
    eraYear: -350,
    summary: '古希腊犬儒第欧根尼、康德代表，认为全人类同属同一个道德共同体，每个人首要身份是“世界公民（Cosmopolitan）”。',
    elevatorPitch: '当别人问第欧根尼“你是哪座城邦的公民”时，他大声回答：“我是世界公民（Kosmopolites）！”国界只是历史偶然画出的虚线。每个人出生在哪个国家全凭概率彩票，在道德的法庭前，任何一个陌生人的尊严与同胞具有相同的神圣权重。',
    coreTenets: [
      '普遍好客权（Universal Hospitality）：康德永久和平论的核心，访客在异国享有免遭敌意的自然权利',
      '首要道德忠诚归属于全人类，而非狭隘的民族部落出生地',
      '超越文化偏见，以开放包容好奇的心态拥抱全人类文明成果',
    ],
    internetReality: '国际数字游民（Digital Nomad）、跨国人道主义救援者共同的精神图腾。',
    dailyLifeManifestation: '带着一台笔记本电脑周游列国旅居生活，在世界各地结交朋友，真切自感属于整个地球。',
    keyThinkers: [
      { name: '第欧根尼 (Diogenes)', era: '前412-前323', note: '首称“我是世界公民”' },
      { name: '伊曼努尔·康德 (Immanuel Kant)', era: '1724-1804', note: '《永久和平论》' },
      { name: '玛莎·努斯鲍姆 (Martha Nussbaum)', era: '1947-', note: '《为了国家还是为了世界？》' }
    ],
    famousQuote: { quote: '我不是雅典人，也不是希腊人，而是一个世界公民。', author: '苏格拉底 / 第欧根尼' },
    spectrum: { political: 0.7, economic: 0.2, social: 0.95 },
    initialPosition: { x: 190, y: 260 }
  },

  // 210. 全球主义 (Globalism)
  {
    id: 'globalism',
    name: '全球主义',
    englishName: 'Globalism',
    category: 'contemporary',
    color: '#ec4899',
    period: '20世纪末冷战终结至今',
    eraYear: 1990,
    summary: '主张商品、资本、信息与人才在全球范围内零关税零壁垒自由配置，建立超国家跨国规制治理机构。',
    elevatorPitch: '地球村已经到来！“世界是平的”。跨国供应链让一部手机由几十个国家协同生产，全球金融互联带来前所未有的资源最优利用。达沃斯论坛、世贸组织（WTO）等跨国机构统合全球标准，用无国界商业消解传统战争冲突。',
    coreTenets: [
      '全球市场一体化与跨国供应链无缝高效协同',
      '超国家治理机制（WTO、世界银行、IMF、跨国法庭）削弱传统民族国家边境主权',
      '全球化红利论：比较优势分工最大化全人类总体总财富',
    ],
    internetReality: '当代欧美“铁锈带”失业蓝领与本土民粹右翼咬牙切齿痛恨的“达沃斯全球精英阴谋”。',
    dailyLifeManifestation: '手握护照随时飞往各大洲跨国出差，穿东南亚缝制的衣服，吃南美进口的车厘子。',
    keyThinkers: [
      { name: '托马斯·弗里德曼 (Thomas Friedman)', era: '1953-', note: '《世界是平的》' },
      { name: '克劳斯·施瓦布 (Klaus Schwab)', era: '1938-', note: '世界经济论坛（达沃斯）创始人' }
    ],
    famousQuote: { quote: '世界正在变平，全球协作网络的连接深度决定着未来的繁荣。', author: '托马斯·弗里德曼' },
    spectrum: { political: 0.5, economic: 0.85, social: 0.8 },
    initialPosition: { x: 230, y: 200 }
  },

  // 211. 威权主义 (Authoritarianism)
  {
    id: 'authoritarianism',
    name: '威权主义',
    englishName: 'Authoritarianism',
    category: 'political',
    color: '#38bdf8',
    period: '20世纪政治学胡安·林茨系统定义',
    eraYear: 1964,
    summary: '胡安·林茨定义，实行严格政治集权、限制公民自由与压制政党轮替，但在私人日常生活与经济领域保留有限自主空间。',
    elevatorPitch: '威权不同于全盘极权！威权统治者只要你乖乖服从政治指挥、不公开发起颠覆挑战，你的私人饭碗、宗教信仰甚至赚钱经商国家懒得管你。以铁腕秩序压制混乱内耗，换取社会稳定与经济集中爆发式增长。',
    coreTenets: [
      '有限政治多元（Limited Political Pluralism）：行政权力垄断，无实质选举轮替',
      '去政治化（Depoliticization）：鼓励民众岁月静好专注发财生活，不搞全民狂热意识形态洗脑',
      '依靠官僚、军警与传统威望维持统治，不寻求彻底改造人类灵魂',
    ],
    internetReality: '战后东亚四小龙（韩国朴正熙、中国台湾蒋经国、新加坡李光耀）经济腾飞时期的政治写照。',
    dailyLifeManifestation: '商场琳琅满目、市民自由追剧旅游吃喝，但电视新闻只有官方通稿且严禁公众街头示威。',
    keyThinkers: [
      { name: '胡安·林茨 (Juan Linz)', era: '1926-2013', note: '耶鲁政治学大师，《极权与威权体制》' },
      { name: '萨缪尔·亨廷顿', era: '1927-2008', note: '《变化社会中的政治秩序》' }
    ],
    famousQuote: { quote: '首要的问题不是政体形式，而是治理的有效程度与社会秩序。', author: '亨廷顿' },
    spectrum: { political: -0.75, economic: 0.2, social: -0.5 },
    initialPosition: { x: -50, y: 380 }
  },

  // 212. 极权主义 (Totalitarianism)
  {
    id: 'totalitarianism',
    name: '极权主义',
    englishName: 'Totalitarianism',
    category: 'political',
    color: '#38bdf8',
    period: '阿伦特《极权主义的起源》',
    eraYear: 1951,
    summary: '汉娜·阿伦特系统解剖，依靠唯一狂热意识形态、单一群众政党、全天候秘密警察监视与垄断所有传媒，彻底抹杀公私界限。',
    elevatorPitch: '极权不仅要管你的投票，更要管你的大脑、你的灵魂甚至你的梦话！彻底摧毁家庭和邻里之间的信任，消灭一切私人生活空间；所有人沦为群众运动中被狂热意识形态齿轮裹挟的无差别原子化螺丝钉。乔治·奥威尔《1984》的老大哥。',
    coreTenets: [
      '官方唯一解释世界的绝对意识形态真理（全知全能乌托邦教义）',
      '无所不在的秘密警察恐怖与群众告密网络，消灭一切私人空间',
      '国家对传媒、武器、经济组织与个人精神生活的全盘全能垄断',
    ],
    internetReality: '20世纪纳粹德国奥斯维辛毒气室与大规模肃反给人类留下的最深沉骨髓创伤。',
    dailyLifeManifestation: '儿子向秘密警察告发父亲在餐桌上私下抱怨领袖的一句话，导致父亲当夜被捕消失。',
    keyThinkers: [
      { name: '汉娜·阿伦特 (Hannah Arendt)', era: '1906-1975', note: '《极权主义的起源》' },
      { name: '乔治·奥威尔 (George Orwell)', era: '1903-1950', note: '《1984》《动物庄园》' },
      { name: '卡尔·弗里德里希与布热津斯基', era: '1956', note: '极权主义六特征模型' }
    ],
    famousQuote: { quote: '战争即和平，自由即奴役，无知即力量。', author: '《1984》大洋国口号' },
    spectrum: { political: -1.0, economic: -0.8, social: -1.0 },
    initialPosition: { x: 0, y: 330 }
  },

  // 213. 法西斯主义 (Fascism)
  {
    id: 'fascism',
    name: '法西斯主义',
    englishName: 'Fascism',
    category: 'political',
    color: '#38bdf8',
    period: '1922年墨索里尼向罗马进军',
    eraYear: 1922,
    summary: '墨索里尼、詹蒂莱创立，崇尚国家至上、“一切在国家之内，没有人在国家之外”，领袖独裁、军国暴力与法团统合。',
    elevatorPitch: '意大利语“束棒（Fasci）”——单根木棍一折就断，百根木棍捆在一起绑上战斧就坚不可摧！彻底粉碎自由主义的个人权利废话。个人在神圣的国家机器面前微不足道，个人存在的全部意义就是为帝国的血火扩张牺牲献身！领袖永远正确。',
    coreTenets: [
      '极权国家至上：国家不仅是统治工具，更是创造民族精神的最高有机生命体',
      '领袖崇拜（Duce / Führerprinzip）与准军事化暴力清洗异见',
      '法团统合消除阶级冲突，向外发动疯狂的军国主义扩张',
    ],
    internetReality: '人类历史上最臭名昭著的政治瘟疫，在当代网络常被作为最严重的政治绝罚标签。',
    dailyLifeManifestation: '数万人整齐划一举起手臂行法西斯礼，广场上回荡着领袖充满神经质歇斯底里的战意吼叫。',
    keyThinkers: [
      { name: '贝尼托·墨索里尼 (Benito Mussolini)', era: '1883-1945', note: '意大利法西斯独裁领袖' },
      { name: '乔瓦尼·詹蒂莱 (Giovanni Gentile)', era: '1875-1944', note: '《法西斯主义学说》哲学奠基人' }
    ],
    famousQuote: { quote: '一切在国家之内，没有任何东西在国家之外，没有任何东西反对国家！', author: '墨索里尼' },
    spectrum: { political: -1.0, economic: -0.1, social: -1.0 },
    initialPosition: { x: 60, y: 280 }
  },

  // 214. 国家社会主义 / 纳粹主义 (Nazism)
  {
    id: 'nazism',
    name: '国家社会主义 / 纳粹主义',
    englishName: 'Nazism',
    category: 'political',
    color: '#38bdf8',
    period: '1933-1945年第三帝国覆灭',
    eraYear: 1933,
    summary: '希特勒创立，在法西斯极权基础上将生物种族主义（雅利安人至上）、反犹灭绝屠杀与东欧“生存空间论”推向灭绝深渊。',
    elevatorPitch: '纳粹不仅要国家极权，纳粹把整个历史理解为残忍的“生物种族基因你死我活”！雅利安人是文明创造者，犹太人是文化寄生虫。依靠工业化毒气室屠杀六百万犹太人，发动闪击战吞并东欧，妄图建立千秋帝国。人类文明史上的至暗时刻。',
    coreTenets: [
      '生物种族决定论：雅利安种族至上，犹太人、罗姆人被定义为必须清除的“亚人（Untermenschen）”',
      '生存空间（Lebensraum）：通过征服东欧为日耳曼农夫获取耕地与奴隶',
      '元首原则（Führerprinzip）与奥斯维辛工业化种族大屠杀（Holocaust）',
    ],
    internetReality: '国际法公认的绝对不可触碰的反人类罪红线，全球多国法律严禁任何纳粹符号展示。',
    dailyLifeManifestation: '纽伦堡审判档案中冰冷精确记录的毒气室杀人时刻表与人皮灯罩残忍物证。',
    keyThinkers: [
      { name: '阿道夫·希特勒 (Adolf Hitler)', era: '1889-1945', note: '《我的奋斗》种族战争狂人' },
      { name: '阿尔弗雷德·罗森堡', era: '1893-1946', note: '《二十世纪的神话》纳粹种族理论家' }
    ],
    famousQuote: { quote: '大自然是残忍的，因此我们也有权变得残忍。', author: '希特勒' },
    spectrum: { political: -1.0, economic: 0.1, social: -1.0 },
    initialPosition: { x: 120, y: 230 }
  },

  // 215. 斯特拉瑟主义 (Strasserism)
  {
    id: 'strasserism',
    name: '斯特拉瑟主义',
    englishName: 'Strasserism',
    category: 'political',
    color: '#38bdf8',
    period: '1920年代纳粹党内左翼激进派',
    eraYear: 1925,
    summary: '斯特拉瑟兄弟代表，纳粹党内激进“左翼”，在狂热反犹反西方的同时主张真正发动消灭大财阀、银行国有化的“第二次工农反资本革命”。',
    elevatorPitch: '纳粹党名字里可是写着“工人和社会主义”！斯特拉瑟兄弟反对希特勒向容克贵族和大垄断财阀（克虏伯）妥协。主张发动第二次社会主义革命，打倒华尔街金融资本与国内垄断大鳄，建立工农民族社会主义！最终在1934年“长刀之夜”被希特勒血腥清洗斩草除根。',
    coreTenets: [
      '狂热反犹太民族主义与激进工农反资本主义革命的怪异结合',
      '国家没收重工业托拉斯与大银行，将其分配给工人行会运营',
      '被希特勒派系斥为“戴着褐衫的布尔什维克”',
    ],
    internetReality: '当代欧美所谓“第三位置（Third Position）”极右翼组织打着反全球财阀垄断旗号招摇撞骗的核心思想源泉。',
    dailyLifeManifestation: '极右翼抗议游行中既高举极端民族排外标语，又要求打倒跨国华尔街银行家。',
    keyThinkers: [
      { name: '格雷戈尔·斯特拉瑟', era: '1892-1934', note: '长刀之夜被谋杀的纳粹党左翼组织家' },
      { name: '奥托·斯特拉瑟 (Otto Strasser)', era: '1897-1974', note: '流亡创建黑色阵线' }
    ],
    famousQuote: { quote: '我们是社会主义者，我们是当今资本主义经济制度的头号敌人！', author: '格雷戈尔·斯特拉瑟' },
    spectrum: { political: -0.9, economic: -0.7, social: -1.0 },
    initialPosition: { x: 60, y: 170 }
  },

  // 216. 长枪党主义 (Falangism)
  {
    id: 'falangism',
    name: '长枪党主义',
    englishName: 'Falangism',
    category: 'political',
    color: '#38bdf8',
    period: '1933年普里莫·德·里维拉创立',
    eraYear: 1933,
    summary: '西班牙普里莫·德·里维拉创立，融合激进法西斯民族工团主义、狂热西班牙天主教神秘传统与反封建土地改革。',
    elevatorPitch: '既反对共产主义的无神论流血，也反对资产阶级议会的软弱腐朽！高举十字架与束棒，依靠长枪党民兵，主张把西班牙统一在天主教神圣使命之下，推行工团主义土地改革，拯救处于内战边缘的西班牙帝国。',
    coreTenets: [
      '天主教神圣神秘主义与法西斯工团主义的深度交融',
      '消灭私营银行与高利贷，实施激进农业土地重新分配',
      '领袖牺牲神话（何塞·安东尼奥被处决后化作神圣殉道烈士符号）',
    ],
    internetReality: '西班牙内战中最引人注目的激进蓝衫军，后被老谋深算的保守派佛朗哥将军吞并收编。',
    dailyLifeManifestation: '烈士陵园（阵亡将士谷）中矗立在花岗岩悬崖上的150米巨型天主教混凝土十字架。',
    keyThinkers: [
      { name: '何塞·安东尼奥·普里莫·德·里维拉', era: '1903-1936', note: '长枪党年轻魅力型创始人' }
    ],
    famousQuote: { quote: '在剑与十字架的相交之处，西班牙的永恒灵魂将再次苏醒！', author: '里维拉' },
    spectrum: { political: -0.85, economic: -0.4, social: -0.9 },
    initialPosition: { x: 0, y: 120 }
  },

  // 217. 佛朗哥主义 (Francoism)
  {
    id: 'francoism',
    name: '佛朗哥主义',
    englishName: 'Francoism',
    category: 'political',
    color: '#38bdf8',
    period: '1939-1975年西班牙佛朗哥独裁统治',
    eraYear: 1939,
    summary: '西班牙佛朗哥将军统治意识形态，结合军事戒严独裁、保皇复辟派、天主教民族主义与铁腕反共威权。',
    elevatorPitch: '在内战血泊中击溃共和国左翼联盟，佛朗哥没有盲目搞纳粹狂热，而是狡黠地将保皇派、天主教会、军队与长枪党捏合成一个维稳集团。自称“蒙上帝恩典的西班牙国家元首”，冷战时期投向美国阵营，开创经济奇迹。',
    coreTenets: [
      '天主教民族主义（National Catholicism）：天主教作为唯一国教全面统治教育与道德法典',
      '严酷镇压一切左翼思潮、分离主义（严禁公开讲加泰罗尼亚语和巴斯克语）',
      '后期引入天主教主业会（Opus Dei）技术官僚，推行外向型经济开放奇迹',
    ],
    internetReality: '威权军事强人统治长达36年并在死前安排民主君主立宪过渡的罕见地缘政治标本。',
    dailyLifeManifestation: '直到佛朗哥逝世前，西班牙未成年女性未经父亲或丈夫书面许可甚至不能自由开立个人银行账户。',
    keyThinkers: [
      { name: '弗朗西斯科·佛朗哥 (Francisco Franco)', era: '1892-1975', note: '西班牙大元帅最高领袖' }
    ],
    famousQuote: { quote: '我们的政体不是专制，而是为了保卫神圣祖国免遭布尔什维克毁灭的战时救亡之盾。', author: '佛朗哥' },
    spectrum: { political: -0.85, economic: 0.3, social: -0.9 },
    initialPosition: { x: -60, y: 160 }
  },

  // 218. 神权法西斯主义 / 铁卫团主义 (Clerical Fascism)
  {
    id: 'clerical_fascism',
    name: '神权法西斯主义 / 铁卫团主义',
    englishName: 'Clerical Fascism',
    category: 'political',
    color: '#38bdf8',
    period: '二战期间罗马尼亚铁卫团、克罗地亚乌斯塔沙',
    eraYear: 1930,
    summary: '罗马尼亚科德雷亚努铁卫团代表，将极端东正教宗教狂热受难神秘主义，与法西斯种族清洗、狂暴暗杀直接绑定。',
    elevatorPitch: '法西斯主义中最血腥狂热的变种！罗马尼亚铁卫团青年身穿绿衫、胸前挂满十字架和祖先泥土囊袋，宣称杀戮是为上帝净化民族灵魂的宗教圣礼。狂热崇尚自杀式殉道暗杀，将宗教苦修化作残忍屠杀的免罪符。',
    coreTenets: [
      '宗教救赎神学与极端种族屠杀的病态融合',
      '大天使米迦勒崇拜：自封为上帝清除尘世污秽的圣剑武装民兵',
      '对世俗政治完全绝望，追求末日弥赛亚式的烈火洗礼',
    ],
    internetReality: '欧洲现代历史上最恐怖的宗教原教旨法西斯杀戮机器，给巴尔干历史留下极深血海阴影。',
    dailyLifeManifestation: '暗杀政敌前全体在修道院神父面前长跪圣体领受祷告，将谋杀美化为神圣牺牲。',
    keyThinkers: [
      { name: '科尔内留·科德雷亚努', era: '1899-1938', note: '铁卫团“大尉”，狂热神秘宗教领袖' }
    ],
    famousQuote: { quote: '为了祖国的复活，即使让我们每个人都钉上十字架沉入地狱，我们也甘之如饴！', author: '科德雷亚努' },
    spectrum: { political: -1.0, economic: -0.3, social: -1.0 },
    initialPosition: { x: -30, y: 70 }
  },

  // 219. 庇隆主义 (Peronism / 正义党主义)
  {
    id: 'peronism',
    name: '庇隆主义 / 正义党主义',
    englishName: 'Peronism / Justicialism',
    category: 'political',
    color: '#38bdf8',
    period: '1946年阿根廷胡安·庇隆创立至今',
    eraYear: 1946,
    summary: '阿根廷胡安·庇隆创立，“既非资本主义也非共产主义的第三位置”，融合民族独立自决、劳工高福利与法团工会。',
    elevatorPitch: '阿根廷的政治图腾！埃维塔（贝隆夫人）在阳台上向“无衫者（Descamisados 穷苦劳工）”挥手演讲。把铁路外国资本全部国有化，向底层大发带薪假期与免费住房，融合天主教社训与强权民粹，统治阿根廷政坛近百年。',
    coreTenets: [
      '三大支柱：社会正义（Social Justice）、经济独立（Economic Independence）、政治主权（Political Sovereignty）',
      '第三位置（Third Position）：拒绝美式自由资本主义放任，也拒绝苏联集权共产主义',
      '劳工神圣不可侵犯：工会作为执政党最强大的铁杆护法',
    ],
    internetReality: '《阿根廷别为我哭泣》百老汇音乐剧的源头，也是经济学上“为什么阿根廷从发达国家跌入通胀怪圈”的争论焦点。',
    dailyLifeManifestation: '阿根廷每逢换届大选，无论左派还是右派，都必须争先恐后宣称自己才是“最正宗的庇隆主义传人”。',
    keyThinkers: [
      { name: '胡安·多明戈·庇隆 (Juan Perón)', era: '1895-1974', note: '阿根廷三次当选总统' },
      { name: '埃维塔·庇隆 (Evita Perón)', era: '1919-1952', note: '“无衫者精神领袖”' }
    ],
    famousQuote: { quote: '对于一个阿根廷人来说，没有比另一个阿根廷人更好的东西。', author: '庇隆' },
    spectrum: { political: -0.4, economic: -0.6, social: 0.1 },
    initialPosition: { x: -80, y: 100 }
  },

  // 220. 民粹主义 (Populism)
  {
    id: 'populism',
    name: '民粹主义',
    englishName: 'Populism',
    category: 'political',
    color: '#38bdf8',
    period: '19世纪末俄美发端，21世纪全球井喷',
    eraYear: 1891,
    summary: '将社会二元对立为“纯洁无暇的平民大众”与“自私腐败的精英统治阶层”，主张人民直接主权与激情清算建制派。',
    elevatorPitch: '“体制是腐败的，专家是骗人的，建制派是出卖我们的！”民粹主义打破宪政繁琐的制衡程序，渴望一个接地气、口无遮拦的平民代言领袖，跨过传统媒体与官僚机构，直接诉诸群众最朴素的怒火与直接民主。',
    coreTenets: [
      '纯洁人民（Pure People）对决腐败精英（Corrupt Elite）的终极二元道德对立',
      '反多元主义与反代议制程序制衡：自称代表真正的“人民唯一的公意”',
      '分为左翼反财阀经济民粹与右翼反移民排外民粹',
    ],
    internetReality: '过去十年特朗普当选、五星运动、南美左翼狂飙与全球地缘裂变最强大的底层政治风暴。',
    dailyLifeManifestation: '大选演讲现场狂呼“抽干华盛顿沼泽！”、“把那个不讲人话的精英学者轰下台！”',
    keyThinkers: [
      { name: '卡斯·穆德 (Cas Mudde)', era: '1967-', note: '《民粹主义简论》薄弱意识形态模型' },
      { name: '埃内斯托·拉克劳 (Ernesto Laclau)', era: '1935-2014', note: '《论民粹主义理性》激进民主战略' }
    ],
    famousQuote: { quote: '政治的根本逻辑就是将纯洁的大众同腐败的寡头彻底撕裂对立。', author: '卡斯·穆德' },
    spectrum: { political: 0.2, economic: 0.0, social: 0.5 },
    initialPosition: { x: 50, y: 80 }
  },

  // 221. 女性主义 / 女权主义 (Feminism)
  {
    id: 'feminism',
    name: '女性主义 / 女权主义',
    englishName: 'Feminism',
    category: 'cultural',
    color: '#f59e0b',
    period: '三波浪潮至当代交织性思潮',
    eraYear: 1792,
    summary: '追求性别完全平权、打破父权制文化与经济暴力枷锁，解放全人类的自主性。',
    elevatorPitch: '波伏娃名言：“女人不是生成的，而是变成的（On ne naît pas femme, on le devient）。”三百年女权运动从争取参政权、同工同酬、身体自主生育权，到拆解社会对男性“阳刚包袱”与女性“母职惩罚”的父权结构，让所有人做回自由的人。',
    coreTenets: [
      '解构父权制（Patriarchy）在家庭、劳动力市场与语言文化中的霸权结构',
      '生理性别（Sex）与社会性别（Gender）的认知二分与建构批判',
      '交织性理论（Intersectionality）：性别、阶级、种族压迫交织缠绕',
    ],
    internetReality: '中文与国际互联网讨论最活跃、观点争锋最炽烈的前沿公共议题领头羊。',
    dailyLifeManifestation: '反职场孕产期降薪辞退、倡导男性休育儿假共同育儿、拒绝容貌身材焦虑。',
    keyThinkers: [
      { name: '玛丽·沃斯通克拉夫特', era: '1759-1797', note: '《女权辩护》第一波先驱' },
      { name: '西蒙娜·德·波伏娃', era: '1908-1986', note: '《第二性》现代女性主义圣经' },
      { name: '贝尔·胡克斯 (bell hooks)', era: '1952-2021', note: '《女性主义是给所有人的》' }
    ],
    famousQuote: { quote: '女人不是生成的，而是变成的。', author: '波伏娃' },
    spectrum: { political: 0.6, economic: -0.3, social: 0.95 },
    initialPosition: { x: 120, y: 60 }
  },

  // 扩展：激进女性主义 (radical_feminism)
  {
    id: 'radical_feminism',
    name: '激进女性主义',
    englishName: 'Radical Feminism',
    category: 'cultural',
    color: '#f59e0b',
    period: '20世纪60-70年代第二波女权高潮',
    eraYear: 1968,
    summary: '认为父权制是最古老、最深层、最顽固的压迫形态，主张颠覆核心家庭与传统男女二元制度。',
    elevatorPitch: '仅仅在现行法律里争取投票权和升职机会是远远不够的！“个人即政治（The Personal is Political）”。家庭内部的无偿家务剥削、性暴力、色情产业与强迫异性恋才是父权制最凶险的牢笼。必须从根源（Radical）上推翻父权压迫机器！',
    coreTenets: [
      '个人即政治（The personal is political）：私密亲密关系本质也是权力博弈',
      '父权制是先于资本主义和阶级压迫的第一级根本压迫源头',
      '彻底批判色情制品、性剥削与传统核心家庭制度',
    ],
    internetReality: '在当代网络社群与性别社会学讨论中具有显著理论关注度，多聚焦于批判传统家庭分工中的隐形无偿劳动、反思性别刻板印象并倡导女性独立自主。',
    dailyLifeManifestation: '倡导拒绝容貌焦虑与消费主义规训，注重女性个人的经济自主、知识积累与职业长远发展。',
    keyThinkers: [
      { name: '安德烈亚·德沃金 (Andrea Dworkin)', era: '1946-2005', note: '反色情与反性暴力旗手' },
      { name: '舒拉米斯·费尔斯通', era: '1945-2012', note: '《性的辩证法》倡导人工生育解放' }
    ],
    famousQuote: { quote: '如果自由需要顺从父权制规则才能获得，那根本不是自由。', author: '激进女权宣言' },
    spectrum: { political: 0.8, economic: -0.5, social: 1.0 },
    initialPosition: { x: 180, y: 30 }
  },

  // 扩展：自由主义女性主义 (liberal_feminism)
  {
    id: 'liberal_feminism',
    name: '自由主义女性主义',
    englishName: 'Liberal Feminism',
    category: 'cultural',
    color: '#f59e0b',
    period: '启蒙运动至今温和主流',
    eraYear: 1963,
    summary: '贝蒂·弗里丹代表，主张通过现行法律与宪政体制内的理性改革，消除法律歧视，实现职场与社会完全机会平等。',
    elevatorPitch: '不主张打倒体制或摧毁男女合作！男女天生智力平等，只要通过宪法平等权利修正案（ERA）、消除同工不同酬壁垒、破除女性升职职场“玻璃天花板”，让女人也能当大法官、CEO与国家总统，自由与正义便自然达成。',
    coreTenets: [
      '法律面前人人权利平等与机会均等（Equal Opportunity）',
      '通过现有宪政体制改革与司法诉讼稳步推进权益',
      '相信理性与教育的力量，反对男女天然绝对对抗',
    ],
    internetReality: '桑德伯格《向前一步（Lean In）》与金斯伯格大法官（RBG）的代表立场，被激进派批判为“资产阶级精英女权”。',
    dailyLifeManifestation: '在职场上通过个人拼搏升任合伙人，在董事会极力倡导女性高管比例指标配额。',
    keyThinkers: [
      { name: '贝蒂·弗里丹 (Betty Friedan)', era: '1921-2006', note: '《女性的奥秘》' },
      { name: '鲁斯·巴德·金斯伯格', era: '1933-2020', note: '美国联邦最高法院传奇大法官' }
    ],
    famousQuote: { quote: '我并不要求给我的性别任何特权，我只要求男人们把他们的脚从我们的脖子上拿开。', author: '金斯伯格引用格言' },
    spectrum: { political: 0.5, economic: 0.3, social: 0.8 },
    initialPosition: { x: 150, y: 110 }
  },

  // 扩展：社会主义 / 马克思主义女性主义 (socialist_feminism)
  {
    id: 'socialist_feminism',
    name: '社会主义女性主义',
    englishName: 'Socialist Feminism',
    category: 'political',
    color: '#38bdf8',
    period: '恩格斯《家庭、私有制和国家的起源》奠基',
    eraYear: 1884,
    summary: '认为父权制与资本主义私有制如同一体双生，唯有消灭私有雇佣剥削并将无偿家务劳动社会化，才能迎来妇女彻底解放。',
    elevatorPitch: '资本主义最大的隐秘红利，就是让数亿家庭主妇在家里无偿做饭、洗衣、带娃，从而免费完成了劳动力再生产！女性双重受压迫：在工厂受资本家剥削，在家庭受父权制盘剥。推翻资本主义与消灭父权制必须同时进行。',
    coreTenets: [
      '双系统理论（Dual-systems Theory）：资本主义阶级剥削与父权制性别压迫相互勾结强化',
      '家务劳动有偿化与社会化（全面建立公立托儿所与食堂）',
      '妇女的彻底解放必然伴随无产阶级彻底解放',
    ],
    internetReality: '国际劳动妇女节（三八节）最初的纯红无产阶级革命溯源，警惕“女王节/女神节”纯消费主义降维解构。',
    dailyLifeManifestation: '社区开办平价公立全托幼儿中心，彻底把母亲从24小时丧偶式育儿重担中解放出来。',
    keyThinkers: [
      { name: '弗里德里希·恩格斯', era: '1820-1895', note: '《家庭、私有制和国家的起源》' },
      { name: '西尔维娅·费德里奇', era: '1942-', note: '《凯列班与女巫》《薪酬对抗家务》' }
    ],
    famousQuote: { quote: '在家庭中，丈夫是资产阶级，妻子相当于无产阶级。', author: '恩格斯' },
    spectrum: { political: -0.2, economic: -0.9, social: 0.9 },
    initialPosition: { x: 80, y: 140 }
  },

  // 扩展：酷儿理论 (queer_theory)
  {
    id: 'queer_theory',
    name: '酷儿理论 / 酷儿主义',
    englishName: 'Queer Theory',
    category: 'cultural',
    color: '#f59e0b',
    period: '1990年朱迪斯·巴特勒《性别麻烦》',
    eraYear: 1990,
    summary: '朱迪斯·巴特勒创立，彻底解构男女生理性别二元对立，提出“性别表演性（Gender Performativity）”。',
    elevatorPitch: '连生理性别都是后天表演出来的！“女人味”或“男子汉气概”并不是深层灵魂内置的代码，而是你每天重复走路姿势、化妆说话方式等一连串“戏剧表演”固化下来的习惯幻觉。拒绝被任何固定的性取向与性别标签归类定义！',
    coreTenets: [
      '性别表演性（Gender Performativity）：性别是不断重复的言语行为效果，而非预存实体',
      '解构异性恋正统主义（Heteronormativity）与顺性别二元霸权',
      '流动性（Fluidity）与拒斥标签：拥抱永远在边界游移的反叛力量',
    ],
    internetReality: 'LGBTQ+多元彩虹文化、去性别化服装设计（Gender-neutral）与社媒个人简介Pronouns（代词）的哲学根源。',
    dailyLifeManifestation: '男生涂指甲油穿苏格兰裙，女生留寸头穿工装靴，毫不理会传统世俗审判眼光。',
    keyThinkers: [
      { name: '朱迪斯·巴特勒 (Judith Butler)', era: '1956-', note: '《性别麻烦：女性主义与身份的颠覆》' },
      { name: '伊芙·塞吉维克 (Eve Sedgwick)', era: '1950-2009', note: '《壁橱认识论》' }
    ],
    famousQuote: { quote: '性别不是你原本是的某种东西，而是你不断在做的一连串动作。', author: '朱迪斯·巴特勒' },
    spectrum: { political: 0.8, economic: -0.2, social: 1.0 },
    initialPosition: { x: 190, y: 80 }
  },

  // 222. 多元文化主义 (Multiculturalism)
  {
    id: 'multiculturalism',
    name: '多元文化主义',
    englishName: 'Multiculturalism',
    category: 'cultural',
    color: '#f59e0b',
    period: '20世纪70年代加拿大、澳大利亚率先立法',
    eraYear: 1971,
    summary: '威尔·金里卡代表，主张国家不应强行同化少数族裔，而应在法律上正式承认并公费保护不同族群的独特文化差异权。',
    elevatorPitch: '社会不应是一个抹杀个性的“大熔炉”，而应是一碗五彩斑斓的“沙拉碗”！不同族群的移民和原住民保留自己的母语、宗教头巾、传统饮食与庆典；主流社会应当在宪法上为少数族裔集体权利立法保护，共存共荣。',
    coreTenets: [
      '群组特权（Group-differentiated Rights）：对少数族裔进行实质性倾斜保护',
      '沙拉碗（Salad Bowl）模型取代单一熔炉（Melting Pot）强制同化',
      '批判自由主义假中立背后的隐蔽白人基督教霸权',
    ],
    internetReality: '欧洲近年来反思外来移民难民融入失败、黑天鹅袭击与世俗法律冲突时的争议风暴眼。',
    dailyLifeManifestation: '大城市市政牌同时印有英语、阿拉伯语、中文与西班牙语，学校食堂为穆斯林提供清真餐。',
    keyThinkers: [
      { name: '威尔·金里卡 (Will Kymlicka)', era: '1962-', note: '《多元文化公民权：少数群体权利的自由主义理论》' },
      { name: '查尔斯·泰勒 (Charles Taylor)', era: '1931-', note: '《承认的政治》' }
    ],
    famousQuote: { quote: '拒绝承认与错误承认，是对一个群体文化尊严最深刻的残酷伤害。', author: '查尔斯·泰勒' },
    spectrum: { political: 0.6, economic: -0.1, social: 0.9 },
    initialPosition: { x: 120, y: 190 }
  },

  // 223. 环保主义 / 浅层生态主义 (Environmentalism)
  {
    id: 'environmentalism',
    name: '环保主义 / 浅层生态主义',
    englishName: 'Environmentalism',
    category: 'contemporary',
    color: '#ec4899',
    period: '1962年蕾切尔·卡森《寂静的春天》发端',
    eraYear: 1962,
    summary: '蕾切尔·卡森《寂静的春天》启蒙，以维护人类长远生存福祉与资源可持续性为出发点，推进污染防治与自然保护。',
    elevatorPitch: '如果鸟儿不再鸣唱，春天将陷入致命的寂静！农药滥用、温室气体与森林乱砍滥伐正在毁灭人类自己的栖居地。为了子孙后代有干净的水喝、有清洁的空气呼吸，必须推进垃圾分类、节能减排，让人类工业与大自然和谐共生。',
    coreTenets: [
      '人类中心主义视角的可持续发展（Sustainable Development）',
      '资源节约、节能减排、防治空气水土污染与绿色立法',
      '通过科技改进与制度约束修复人类对地球生态系统的伤害',
    ],
    internetReality: '联合国碳达峰碳中和承诺、新能源汽车补贴与可降解塑料吸管推广背后的全球性公约意志。',
    dailyLifeManifestation: '去超市自带环保帆布袋，随手关闭未使用的照明开关，主动践行低碳绿色出行。',
    keyThinkers: [
      { name: '蕾切尔·卡森 (Rachel Carson)', era: '1907-1964', note: '《寂静的春天》现代环保运动之母' },
      { name: '阿尔·戈尔 (Al Gore)', era: '1948-', note: '《难以忽视的真相》诺贝尔和平奖' }
    ],
    famousQuote: { quote: '在自然界中，没有任何事物能够单独存在。', author: '蕾切尔·卡森' },
    spectrum: { political: 0.3, economic: -0.4, social: 0.7 },
    initialPosition: { x: 70, y: 220 }
  },

  // 224. 深层生态主义 (Deep Ecology)
  {
    id: 'deep_ecology',
    name: '深层生态主义',
    englishName: 'Deep Ecology',
    category: 'contemporary',
    color: '#ec4899',
    period: '1973年阿伦·奈斯提出',
    eraYear: 1973,
    summary: '阿伦·奈斯创立，彻底批判人类中心主义，主张地球上所有非人生物皆享有平等且独立的内在生存尊严与繁衍权。',
    elevatorPitch: '浅层环保只是人类自私地为了自己的利益保护水和空气！深层生态主义发问：一条河流、一棵红杉、一只灰狼难道只有被人类利用才有价值吗？地球上一切生命皆拥有平等的内在价值，人类必须大幅缩减人口与干预，重归万物平权！',
    coreTenets: [
      '生物中心主义平等（Biocentric Equality）：所有物种拥有平等的生存与绽放权利',
      '彻底解构“人类是万物灵长、地球主人”的自大虚妄傲慢',
      '提倡生命圈自我实现（Self-realization）与大幅缩减地球人类总人口规模',
    ],
    internetReality: '地球一号（Earth First!）、海洋守护者激进环保行动与大自然反噬科幻电影（《阿凡达》）的精神内核。',
    dailyLifeManifestation: '站在原始森林古树面前深深鞠躬，视树木为与自己平等的宇宙古老公民，绝不任意践踏青苔。',
    keyThinkers: [
      { name: '阿伦·奈斯 (Arne Næss)', era: '1912-2009', note: '挪威哲学家兼登山家，深层生态学之父' },
      { name: '乔治·塞逊斯 (George Sessions)', era: '1938-2016', note: '八大深层生态学基本原则起草人' }
    ],
    famousQuote: { quote: '非人类生命的繁荣不仅拥有工具价值，它们自身就具有不可剥夺的内在价值。', author: '阿伦·奈斯' },
    spectrum: { political: 0.6, economic: -0.8, social: 0.95 },
    initialPosition: { x: 20, y: 250 }
  },

  // 225. 生态现代主义 (Ecomodernism)
  {
    id: 'ecomodernism',
    name: '生态现代主义',
    englishName: 'Ecomodernism',
    category: 'contemporary',
    color: '#ec4899',
    period: '2015年《生态现代主义宣言》',
    eraYear: 2015,
    summary: '与深层生态主义对立，主张利用第四代核能、转基因农业、人造合成肉与高密集城市化，实现人类繁荣与大自然消耗的“脱钩（Decoupling）”。',
    elevatorPitch: '回归原始荒野是饥饿的倒退浪漫！拯救自然的唯一出路是更先进的高科技。如果转基因技术和垂直农场能用原来十分之一的土地养活全人类，剩下的90%土地就能完全退耕还林还给大自然！依靠核能与科技飞跃实现生态零碳脱钩。',
    coreTenets: [
      '脱钩论（Decoupling）：运用集约化高科技让人类福祉增长与自然生态足迹消耗彻底解绑',
      '坚决拥抱第四代先进核电裂变与聚变，取代占地庞大低效的风光电',
      '高密度现代超级城市化：让人类集中住在高楼大厦，把广袤大地原样还给野生生物',
    ],
    internetReality: '盖茨基金会、硅谷核聚变投资人与科技乐观派击碎激进环保停滞论的最硬核科学檄文。',
    dailyLifeManifestation: '积极购买转基因高产作物人造肉，支持在沿海建设高效微型核反应堆为全城供电。',
    keyThinkers: [
      { name: '迈克尔·谢伦伯格', era: '1971-', note: '《生态现代主义宣言》主要起草人' },
      { name: '特德·诺德豪斯 (Ted Nordhaus)', era: '1966-', note: '突破研究所（Breakthrough Institute）创始人' }
    ],
    famousQuote: { quote: '拯救大自然的最好方法，就是让人类利用强大的集约科技与大自然彻底脱钩。', author: '《生态现代主义宣言》' },
    spectrum: { political: 0.2, economic: 0.6, social: 0.7 },
    initialPosition: { x: -30, y: 280 }
  }
];
