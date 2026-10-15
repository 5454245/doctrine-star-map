import { IsmNode } from '../../types/ism';

export const EXTENSION_ISMS: IsmNode[] = [
  // ==========================================
  // 存在主义深度拓展子流派 (Existentialism Family)
  // ==========================================
  {
    id: 'christian_existentialism',
    name: '基督宗教存在主义',
    englishName: 'Christian Existentialism',
    category: 'ethical',
    color: '#eab308',
    period: '19世纪中叶至20世纪中叶',
    eraYear: 1843,
    summary: '主张个人在信仰的绝望深渊与恐惧颤栗中，必须做出非理性的“信仰飞跃”，与超越性上帝建立不可替代的个体圣爱关系。',
    elevatorPitch: '面对人生的有限与荒诞，理性概念无法拯救灵魂。唯有单个孤立的罪人抛弃世俗常识，在内心痛苦中冒险飞向绝对真理，方能成就本真自我。',
    coreTenets: [
      '单个人（The Single Individual）高于普遍伦理概念',
      '信仰的飞跃（Leap of Faith）超越理性计算与逻辑证明',
      '绝望是致死之疾病，唯有直面自我的有限方能得救',
      '在恐惧与颤栗中体验上帝临在的直接震颤'
    ],
    internetReality: '常被误解为盲目的宗教原教旨狂热，或与无神论存在主义混为一谈；实则它是对僵化教会建制与黑格尔客观理性的激进宣战。',
    dailyLifeManifestation: '在重大人生命运十字路口（如亲人离世或伦理悖论抉择时），不再寄托于成功学算盘，而是凭着良知信仰做出无可挽回的献身。',
    keyThinkers: [
      { name: '索伦·克尔凯郭尔', era: '1813–1855', note: '丹麦哲学家，存在主义先驱，《恐惧与颤栗》作者' },
      { name: '卡尔·雅斯贝尔斯', era: '1883–1969', note: '提出生存哲学与“界限处境”（Grenzsituation）' },
      { name: '加布里埃尔·马塞尔', era: '1889–1973', note: '法国基督教存在主义戏剧家，强调“存在与占有”的区别' }
    ],
    famousQuote: {
      quote: '信仰恰恰始于理性止步之处；只有跨过荒谬的深渊，人才能在上帝面前成为真正的自我。',
      author: '索伦·克尔凯郭尔'
    },
    spectrum: { political: 0.2, economic: -0.1, social: -0.4 },
    initialPosition: { x: 380, y: 160 }
  },
  {
    id: 'atheistic_existentialism',
    name: '无神论存在主义',
    englishName: 'Atheistic Existentialism',
    category: 'ethical',
    color: '#f59e0b',
    period: '20世纪40年代至70年代',
    eraYear: 1943,
    summary: '宣告上帝已死，人的“存在先于本质”，没有任何先验的人性蓝图与救赎庇护，人类被判处自由，必须以自身全部抉择与行动定义自我并负起全责。',
    elevatorPitch: '如果神不存在，那么万事皆有可能，但也毫无借口。你不是被环境注定的受害者，你的选择就是你的命运。任何逃避责任的托词都是“自欺”（Mauvaise foi）。',
    coreTenets: [
      '存在先于本质（L\'existence précède l\'essence）',
      '人类被判处自由（Condamné à être libre），没有预设价值庇护',
      '自欺（Bad Faith）是拒绝承担主体抉择责任的懦弱逃避',
      '介入现实（Engagement）是在虚无荒谬中通过行动创造意义'
    ],
    internetReality: '网民常把萨特的“他人即地狱”误解为社恐人际抱怨；萨特本意是警示：当我们在他者凝视中丧失主体性，成为他者评价的客体时，便陷入了自欺的地狱。',
    dailyLifeManifestation: '从不把“原生家庭”、“星座运势”或“社会大环境”当作摆烂借口，清醒承认今日之我皆由昨日之每一个真实选择所凝固而成。',
    keyThinkers: [
      { name: '让-保罗·萨特', era: '1905–1980', note: '法国哲学家、文学家，著有《存在与虚无》' },
      { name: '西蒙娜·德·波伏娃', era: '1908–1986', note: '《第二性》作者，女性主义存在主义奠基人' }
    ],
    famousQuote: {
      quote: '人除了他自己认为的那样以外，什么都不是。人不过是自己行动的总和。',
      author: '让-保罗·萨特'
    },
    spectrum: { political: 0.6, economic: -0.5, social: 0.9 },
    initialPosition: { x: 420, y: 210 }
  },
  {
    id: 'phenomenological_existentialism',
    name: '现象学存在主义',
    englishName: 'Phenomenological Existentialism',
    category: 'philosophical',
    color: '#38bdf8',
    period: '20世纪20年代至60年代',
    eraYear: 1927,
    summary: '将现象学直观还原方法运用于人的实际生存，揭示人作为“在世存有”（Dasein）与身体图式的本真展开，向死而生打破常人沉沦。',
    elevatorPitch: '人不是孤立于世界之外冷眼旁观的笛卡尔笛卡尔式理性意识，而是早已经被抛入日常劳作与关系网络之中的在世存有。只有在面对终极死亡的焦虑中，才能唤醒本真生存。',
    coreTenets: [
      '在世存有（Being-in-the-world），人与周遭世界原初交织不分',
      '向死而生（Sein-zum-Tode），死亡界限澄明生命之有限与紧迫',
      '身体不仅是客体生理器物，更是世界显现的原初意向支点',
      '沉沦于常人（Das Man）日常琐碎中忘却了存在的本真之问'
    ],
    internetReality: '常被当作文青无病呻吟的晦涩名词集，或者误认为只关注虚无发呆；实质它是对近代西方主客二分认知范式的根本哲学颠覆。',
    dailyLifeManifestation: '放下手机脱离算法投喂的麻木日常，在跑步流汗、手工制物或凝视落日余晖中，重新切身体认自己鲜活存在于这个天地之间。',
    keyThinkers: [
      { name: '马丁·海德格尔', era: '1889–1976', note: '德国哲学家，《存在与时间》构建基础本体论' },
      { name: '莫里斯·梅洛-庞蒂', era: '1908–1961', note: '法国知觉现象学大家，强调身体图式与血肉相连' }
    ],
    famousQuote: {
      quote: '向死而生并非走向灭亡的绝望，而是在有限的终局中全然拥抱本真的自我可能性。',
      author: '马丁·海德格尔'
    },
    spectrum: { political: 0.0, economic: -0.2, social: 0.3 },
    initialPosition: { x: 460, y: 140 }
  },
  {
    id: 'marxist_existentialism',
    name: '存在主义马克思主义',
    englishName: 'Marxist Existentialism',
    category: 'philosophical',
    color: '#ef4444',
    period: '20世纪50年代至70年代',
    eraYear: 1960,
    summary: '试图将萨特关于个体自由抉择的微观存在论，与马克思关于阶级生产关系、异化劳动与历史规律的宏观辩证法进行有机缝合。',
    elevatorPitch: '马克思主义如果不研究活生生具体个人的痛苦、选择与心理异化，就会沦为冰冷僵死的宿命公式；而存在主义如果离开对资本主义剥削的制度批判，就会退缩为小资产阶级的空谈。',
    coreTenets: [
      '用个体的自由实践丰富宏观历史唯物主义的活人血肉',
      '批判机械唯物论将人简化为经济基础的被动木偶',
      '人的异化不仅是经济剥削，更是生存本真性被资本物化剥夺',
      '强调“总体化”（Totalization）辩证理性批判'
    ],
    internetReality: '常被斯大林教条派批为资产阶级颓废渗透，又被纯粹自由派批为投靠意识形态；是冷战中欧洲左翼知识分子寻找人道主义出路的最高理论尝试。',
    dailyLifeManifestation: '打工人在承受996内卷剥削时，既清楚看透资本榨取剩余价值的客观规律，又在日常拒绝精神规训，保持主体自由与尊严反抗。',
    keyThinkers: [
      { name: '让-保罗·萨特', era: '1905–1980', note: '晚年巨著《辩证理性批判》构建存在主义马克思体系' },
      { name: '昂利·列斐伏尔', era: '1901–1991', note: '法国空间批判与日常生活批判大师' }
    ],
    famousQuote: {
      quote: '马克思主义是时代不可超越的哲学；但当它忘却了具体的个人时，它需要存在主义来重新注入生命。',
      author: '让-保罗·萨特'
    },
    spectrum: { political: 0.3, economic: -0.9, social: 0.8 },
    initialPosition: { x: 350, y: 260 }
  },

  // ==========================================
  // 虚无主义深度拓展子流派 (Nihilism Family)
  // ==========================================
  {
    id: 'optimistic_nihilism',
    name: '积极 / 乐观虚无主义',
    englishName: 'Optimistic Nihilism',
    category: 'ethical',
    color: '#10b981',
    period: '19世纪末演进至现代数字时代',
    eraYear: 1887,
    summary: '承认宇宙与生命本身没有任何先验预设的目的或崇高使命；但正因无意义，我们才拥有绝对的自由来欢歌起舞，赋予眼前每一刻至高珍贵的体验。',
    elevatorPitch: '浩瀚星空中地球只是悬浮尘埃，最终宇宙都会热寂归零。但这绝非悲剧！因为没有注定的束缚，没有神明的审判，你所有的烦恼皆微不足道，你所有的热情都可以纯粹地属于自己。',
    coreTenets: [
      '宇宙并无内在意义，人类没有前置的神圣任务',
      '无意义不是绝望深渊，而是精神的彻底卸重与欢欣解放',
      '主动成为自己生命的立法者与意义艺术家',
      '重估一切既有价值（Revaluation of all values）'
    ],
    internetReality: '因科普动画《Kurzgesagt》爆火全球，成为Z世代治愈精神内耗与宇宙焦虑的精神良方；常被误当成傻乐或阿Q精神，实则是尼采超人哲学的现代通俗化。',
    dailyLifeManifestation: '在焦虑职场升迁或他人评价时，抬头看看夜空深呼吸：“既然宇宙最终归零，那我现在就去吃爱吃的拉面、做真正心动的事，毫不犹豫！”',
    keyThinkers: [
      { name: '弗里德里希·尼采', era: '1844–1900', note: '提出“积极虚无主义”概念，主张用酒神精神与命运之爱战胜虚无' },
      { name: '菲利普·迈因兰德', era: '1841–1876', note: '《救赎的哲学》，虽结论激进但深刻触碰虚无之喜悦' }
    ],
    famousQuote: {
      quote: '如果生命是一场没有剧本的漫游，那么最崇高的事情，就是带着全部的热忱去爱上这个荒唐的瞬间。',
      author: '弗里德里希·尼采'
    },
    spectrum: { political: 0.7, economic: 0.0, social: 0.95 },
    initialPosition: { x: 320, y: -80 }
  },
  {
    id: 'passive_nihilism',
    name: '消极 / 悲观虚无主义',
    englishName: 'Passive Nihilism',
    category: 'ethical',
    color: '#64748b',
    period: '19世纪至20世纪初',
    eraYear: 1850,
    summary: '视生命本源为荒谬、痛苦与无意义的永动机，意志在欲望与匮乏中无休止折磨，主张通过禁欲退缩、美学旁观或心死沉沦来实现痛苦的降维。',
    elevatorPitch: '所有的奋斗终是镜花水月，所有的快乐不过是痛苦暂时的间歇。与其在世界残酷无序的推土机前挣扎，不如主动熄灭欲望的焦渴，静待终局降临。',
    coreTenets: [
      '生存即痛苦，世界本质为盲目撕扯的无理智意志',
      '人生犹如钟摆，在痛苦与倦怠之间摇摆不定',
      '拒绝任何宏大叙事的鸡汤欺骗，承认生命的彻底空洞',
      '解脱之途在于对意志的自我否定、无私同情或冥思超脱'
    ],
    internetReality: '当代互联网青年“躺平”、“摆烂”、“心如死灰”的哲学先祖；容易滑向慢性抑郁状态，但其对伪善崇高论调的免疫力极高。',
    dailyLifeManifestation: '拒绝所有消费主义煽动与画饼鸡血：“别跟我谈什么未来宏图，下班后静静喝杯茶，不给任何人添麻烦，也不抱任何幻想。”',
    keyThinkers: [
      { name: '阿图尔·叔本华', era: '1788–1860', note: '德国悲观主义意志哲学开山鼻祖' },
      { name: '爱德华·冯·哈特曼', era: '1842–1906', note: '《无意识哲学》，论证世界进程最终的自我否定' }
    ],
    famousQuote: {
      quote: '人生就像一团欲望，欲望不能满足便痛苦，满足了便无聊，人生就在痛苦和无聊之间摇摆。',
      author: '阿图尔·叔本华'
    },
    spectrum: { political: 0.1, economic: -0.1, social: -0.3 },
    initialPosition: { x: 260, y: -140 }
  },
  {
    id: 'epistemological_nihilism',
    name: '认识论虚无主义',
    englishName: 'Epistemological Nihilism',
    category: 'philosophical',
    color: '#a855f7',
    period: '古希腊诡辩学派至后现代怀疑主义',
    eraYear: -420,
    summary: '根本否定人类认识客观真理的可能性：即使真理存在也无法被认识；即使能被认识也无法通过语言传递与证实。',
    elevatorPitch: '我们自以为掌握的物理定律、道德公理乃至科学理论，本质上都只是人类感官受限下的神经虚构与修辞把戏。绝对客观的世界图景对于人类心智永远是闭锁的。',
    coreTenets: [
      '彻底拒绝任何基础主义哲学假定',
      '真理的概念只是语言权力的衍生物与幻觉',
      '一切认识皆受主观工具与视角制约，无法触碰自在之物',
      '认知上的极端悬置（Epoche）与不作肯定判断'
    ],
    internetReality: '在网络后真相时代，被杠精用来推导“既然大家都没真理，那谁胡扯都一样”的相对主义泥潭；但正统理论原是警惕教条主义最锐利的柳叶刀。',
    dailyLifeManifestation: '面对专家权威信誓旦旦的结论时，永远心存一份冷峻质疑，从不把任何当下流行的共识奉为不可更改的金科玉律。',
    keyThinkers: [
      { name: '高尔吉亚', era: '约前483–前375', note: '古希腊著名智者，提出著名的三大虚无命题' },
      { name: '皮浪', era: '约前360–前270', note: '怀疑主义学派奠基人，主张悬置判断实现不动心' }
    ],
    famousQuote: {
      quote: '第一，无物存在；第二，即使有物存在，人也无法认识它；第三，即便认识了它，也无法言说告知他人。',
      author: '高尔吉亚'
    },
    spectrum: { political: 0.5, economic: 0.0, social: 0.7 },
    initialPosition: { x: 200, y: -190 }
  },
  {
    id: 'therapeutic_nihilism',
    name: '医学 / 治疗性虚无主义',
    englishName: 'Therapeutic Nihilism',
    category: 'philosophical',
    color: '#06b6d4',
    period: '19世纪中叶（维也纳学派）至现代循证哲学',
    eraYear: 1850,
    summary: '怀疑人为医疗与药物干预对于复杂生命机体的疗效，主张尊重自愈力与自然进程，警惕庸医妄动与过度治疗的伤害。',
    elevatorPitch: '在科学认识尚不完善的时代，盲目的放血、重金属炼丹与过度手术造成的伤害往往远甚于疾病本身。哲思核心在于：承认人类技术力量的有限性，保持敬畏。',
    coreTenets: [
      '第一要务为“不伤害”（Primum non nocere）',
      '怀疑未经严苛实证的救世良方与灵丹妙药',
      '顺应有机体内部的自然治愈力与演化规律',
      '破除医学自大狂与对死亡的病态否认'
    ],
    internetReality: '常被阴谋论者借题发挥宣扬“现代医学有害论”；其实它恰恰是现代双盲随机对照实验与循证医学诞生的直接哲学催化剂。',
    dailyLifeManifestation: '感冒发烧不立刻乱吃抗生素，相信自身免疫系统，规律休息多喝水，拒绝各种昂贵却无实证依据的保健品营销轰炸。',
    keyThinkers: [
      { name: '约瑟夫·迪特尔', era: '1804–1878', note: '维也纳医学院教授，提出“好医生的首要责任是阻止乱服药”' },
      { name: '伊万·伊利奇', era: '1926–2002', note: '《医学的复仇》，批判现代医疗体制对人类自主生存能力的剥夺' }
    ],
    famousQuote: {
      quote: '我们不仅要向疾病宣战，更要时刻警惕我们自身傲慢的救治欲所引发的次生灾难。',
      author: '约瑟夫·迪特尔'
    },
    spectrum: { political: 0.2, economic: 0.1, social: 0.2 },
    initialPosition: { x: 280, y: -220 }
  },

  // ==========================================
  // 社会民主主义深度拓展流派 (Social Democracy Family)
  // ==========================================
  {
    id: 'third_way_socialism',
    name: '第三条道路',
    englishName: 'The Third Way',
    category: 'political',
    color: '#ec4899',
    period: '20世纪90年代至今',
    eraYear: 1998,
    summary: '超越传统老左派的凯恩斯国家干预与新右派自由放任，主张将市场经济的活力竞争与社会正义的平权投资相结合的新中道哲学。',
    elevatorPitch: '既不要僵化的计划公有制和养懒汉式福利国家，也不要弱肉强食、毫无温情的新自由主义丛林。国家应从“收入救济者”转变为“能力赋能者”，强调“没有权利就谈不上责任，没有责任也谈不上权利”。',
    coreTenets: [
      '超越传统左翼与右翼二元对立的现代中间道路',
      '从被动救济型福利（Welfare）转向积极工作型福利（Workfare）',
      '国家重点投资于国民教育、科技创新与终身技能培训',
      '利用市场机制与公私合营（PPP）提升公共服务效率'
    ],
    internetReality: '常遭两头受气：原教旨左派痛斥其向跨国资本下跪投降；强硬右翼又嫌其税收管治依然太多。却是当代欧洲政坛执政周期最长的实用框架之一。',
    dailyLifeManifestation: '政府不再直接补贴夕阳产业，而是出资免费帮助被AI取代的劳工进修AI工具应用，支持他们创业转型。',
    keyThinkers: [
      { name: '安东尼·吉登斯', era: '1938–', note: '英国著名社会学家，《第三条道路：社会民主主义的复兴》作者' },
      { name: '托尼·布莱尔', era: '1953–', note: '英国新工党领袖，将第三条道路理念付诸十年国家治理实践' }
    ],
    famousQuote: {
      quote: '我们支持市场经济，但坚决拒绝市场社会；财富创造与社会公正可以携手并进。',
      author: '安东尼·吉登斯'
    },
    spectrum: { political: 0.15, economic: 0.1, social: 0.7 },
    initialPosition: { x: -380, y: 310 }
  },
  {
    id: 'nordic_model_socialism',
    name: '北欧模式 / 民主福利主义',
    englishName: 'Nordic Model',
    category: 'political',
    color: '#0284c7',
    period: '20世纪30年代至今',
    eraYear: 1936,
    summary: '以高信任度社会为基石，结合高度发达的自由市场外向型经济、全民普遍高福利兜底体系与强大的劳资三方集体协商机制。',
    elevatorPitch: '瑞典“人民之家”理念的现实写照。高税收并不压制企业家精神，反倒因有免费教育医疗与全民失业托底，普通人更敢于辞职创新、探索未知风险。',
    coreTenets: [
      '自由开放的全球资本市场 × 普遍主义全民福利安全网',
      '劳工工会与雇主协会平等集体谈判（萨尔特舍巴登协定）',
      '“灵活保障”（Flexicurity）：企业雇佣解聘灵活，国家提供高额转岗救济',
      '追求实质性别平等与极其透明廉洁的政府治理'
    ],
    internetReality: '在中文互联网常被当成神话：要么被包装成不劳而获的人间天堂，要么被唱衰为被高税收与移民掏空的将亡之国。实则其核心在于极高的社会互信资本与严苛的税收合规意识。',
    dailyLifeManifestation: '不管是公司高管还是环卫工，孩子都在同一所公立学校读书，生病看医生自付额封顶，休半年带薪育儿假不受任何职场歧视。',
    keyThinkers: [
      { name: '阿尔宾·汉森', era: '1881–1946', note: '瑞典首相，提出著名的“人民之家”（Folkhemmet）宏图' },
      { name: '奥洛夫·帕尔梅', era: '1927–1986', note: '瑞典杰出社会民主党领袖，推动国际裁军与平等福利' }
    ],
    famousQuote: {
      quote: '好的社会就像一个温暖的家庭：没有特权者，没有被抛弃者；没有长子欺压幼子，人人共享阳光。',
      author: '阿尔宾·汉森'
    },
    spectrum: { political: 0.45, economic: -0.45, social: 0.85 },
    initialPosition: { x: -340, y: 350 }
  },
  {
    id: 'eurocommunism',
    name: '欧洲共产主义',
    englishName: 'Eurocommunism',
    category: 'political',
    color: '#b91c1c',
    period: '20世纪70年代至80年代',
    eraYear: 1975,
    summary: '西欧共产主义政党脱离莫斯科苏联指挥棒，承认资产阶级多党议会制民主与宪政自由，主张和平合法长入社会主义的自主思潮。',
    elevatorPitch: '意大利、法国、西班牙共产党清醒认识到：在发达西方工业国，照搬列宁式武装起义和一党无产阶级专政绝无前途。只有尊重民主普选、结成广泛公民联盟，才能在体制内实现社会主义诉求。',
    coreTenets: [
      '与苏联模式彻底切割，拒绝莫斯科的理论教条与政治发号施令',
      '接受政治多元主义，捍卫言论自由、结社自由与普选轮替',
      '通过民主宪政机制与公民文化领导权（葛兰西霸权论）实现渐进变革',
      '推进全欧洲范围内的和平与一体化建设'
    ],
    internetReality: '常被东方老阵营唾骂为“修正主义投降派”，又被冷战西方保守派怀疑为“夺权的特洛伊木马”；是冷战晚期最具反思精神的体制内突围。',
    dailyLifeManifestation: '共产党议员穿西装打领带在议会大厦参与预算法案辩论，通过合法立法程序为工人争取带薪休假与劳工监事会席位。',
    keyThinkers: [
      { name: '恩里科·贝林格', era: '1922–1984', note: '意大利共产党领袖，提出“历史性妥协”与欧洲共产主义构想' },
      { name: '圣地亚哥·卡里略', era: '1915–2012', note: '西班牙共产党总书记，《欧洲共产主义与国家》作者' }
    ],
    famousQuote: {
      quote: '民主不仅是实现社会主义的一种手段，它本身就是社会主义不可或缺的灵魂与终极价值。',
      author: '恩里科·贝林格'
    },
    spectrum: { political: 0.3, economic: -0.7, social: 0.75 },
    initialPosition: { x: -390, y: 240 }
  },

  // ==========================================
  // 自由意志主义深度拓展流派 (Libertarianism Family)
  // ==========================================
  {
    id: 'right_libertarianism',
    name: '右翼自由意志主义',
    englishName: 'Right-Libertarianism',
    category: 'political',
    color: '#facc15',
    period: '20世纪中叶至今',
    eraYear: 1974,
    summary: '将私有财产权、非侵犯原则（NAP）与自由放任资本主义推向伦理神圣高度，坚信“税收等同于抢劫”，国家干预是所有社会罪恶的渊薮。',
    elevatorPitch: '你的身体、劳动成果和财产绝对属于你，任何第三方（即使以“民主多数”的名义）强迫你为他人买单都是抢劫。只要不主动使用暴力或欺诈，所有成年人之间的自愿交易均应合法。',
    coreTenets: [
      '自我所有权原则（Self-Ownership）与自然财产权不可侵犯',
      '非侵犯原则（Non-Aggression Principle, NAP）为最高道德基石',
      '反对任何形式的财富强制再分配，认为税收即奴役',
      '自发秩序优于一切中央规划，自由价格机制是最高效的协调工具'
    ],
    internetReality: '美式硅谷工程师与加密货币社区的主流宗教；在辩论中经常以极度纯粹的逻辑演绎战无不胜，但在面对公地悲剧与系统性残障救助时易陷入伦理窘境。',
    dailyLifeManifestation: '坚持拥有未受监管的加密货币硬件冷钱包，拒绝强制缴纳社保，热衷家庭自制防卫武器，崇尚自给自足。',
    keyThinkers: [
      { name: '罗伯特·诺齐克', era: '1938–2002', note: '哈佛大学哲学家，《无政府、国家与乌托邦》提出最小国家论' },
      { name: '穆瑞·罗斯巴德', era: '1926–1995', note: '经济学家与政治哲学家，奥地利学派代表，构建严密权利伦理' }
    ],
    famousQuote: {
      quote: '个人拥有权利；有些事情是任何人或任何群体都不能对他们做的，否则就会侵犯其权利。',
      author: '罗伯特·诺齐克'
    },
    spectrum: { political: 0.85, economic: 0.95, social: 0.3 },
    initialPosition: { x: 420, y: 340 }
  },
  {
    id: 'paleolibertarianism',
    name: '古自由意志主义',
    englishName: 'Paleolibertarianism',
    category: 'political',
    color: '#ca8a04',
    period: '20世纪90年代至今',
    eraYear: 1990,
    summary: '将自由意志主义的彻底自由市场、反对中央联邦国家原则，与虔敬的传统基督教道德、家庭纽带和地方主义保守文化相结合。',
    elevatorPitch: '没有强大的传统道德习俗与家庭自治，自由市场就会被无序放纵毁坏；而现代大政府正是破坏传统社区自治与家庭伦理的罪魁祸首。主张脱离联邦控制，重归小国寡民的自愿传统秩序。',
    coreTenets: [
      '自由放任资本主义 × 传统文化守成主义的跨界结合',
      '家庭、教会与地方自愿社团是抵御国家暴政的最坚固长城',
      '反对现代国家福利体系瓦解传统家庭责任与宗族互助',
      '反对海外军事帝国主义干涉，主张严格孤立主义'
    ],
    internetReality: '常被左翼批为掩盖保守偏见的遮羞布；但在美国铁锈地带反建制民粹中极具号召力，是理解现代美国另类右翼与茶党思潮的关键钥匙。',
    dailyLifeManifestation: '自己在家给孩子开展家庭教育（Homeschooling），只去地方独立农贸市场用现金甚至银币交易，对华盛顿官僚政策一概视若无物。',
    keyThinkers: [
      { name: '卢埃林·罗克韦尔', era: '1944–', note: '米塞斯研究院创始人，古自由意志主义运动领军人物' },
      { name: '汉斯-赫尔曼·霍普', era: '1949–', note: '《民主：失败的上帝》，论证君主制与私有产权社群优于大众民主' }
    ],
    famousQuote: {
      quote: '自由市场不仅能创造财富，更只有在根植于传统道德、家庭忠诚与自愿契约的土壤中才能长青。',
      author: '卢埃林·罗克韦尔'
    },
    spectrum: { political: 0.75, economic: 0.9, social: -0.75 },
    initialPosition: { x: 460, y: 390 }
  },
  {
    id: 'bleeding_heart_libertarianism',
    name: '悲悯之心自由意志主义',
    englishName: 'Bleeding-Heart Libertarianism',
    category: 'political',
    color: '#f43f5e',
    period: '2010年代至今',
    eraYear: 2011,
    summary: '融合罗尔斯社会正义关怀与哈耶克自由市场理论，主张最弱势群体的福祉是检验一个自由自由意志主义制度合法性的核心试金石。',
    elevatorPitch: '自由市场最大的功绩，不是让富豪多买几艘游艇，而是为一无所有的穷人撕开阶层上升的口子。反对国家垄断特权与特许牌照，因为这些管治往往是在保护既得利益集团，践踏底层民众的创业自救权。',
    coreTenets: [
      '自由至上与社会正义（Social Justice）并非势同水火',
      '捍卫自由的最终目的在于促进底层最弱势群体的繁荣与尊严',
      '指出国家管制（如职业牌照、地块分区法令）实为富人阻挡穷人上升的铁幕',
      '主张通过无条件基本收入（UBI）或负所得税替代繁文缛节的官僚福利'
    ],
    internetReality: '经常被传统冷血“硬核自由意志派”斥为“披着羊皮的软蛋社会党”，又被传统左派怀疑是资本洗白的公关；但却吸引了大量受过高等教育的年轻知识阶层。',
    dailyLifeManifestation: '积极呼吁废除对街头理发师、路边摊贩的苛刻行政牌照，同时呼吁开放移民工作许可，让全球最底层劳工能通过自由就业改变命运。',
    keyThinkers: [
      { name: '马特·兹沃林斯基', era: '1973–', note: '圣地亚哥大学哲学教授，悲悯自由意志主义学派发起人' },
      { name: '杰森·布伦南', era: '1979–', note: '《反对民主》《为什么不是资本主义》作者' }
    ],
    famousQuote: {
      quote: '一个正义的社会，其制度应当让最不幸者的处境得到最大限度的改善；而历史证明，自由自由市场正是这一奇迹的缔造者。',
      author: '马特·兹沃林斯基'
    },
    spectrum: { political: 0.8, economic: 0.7, social: 0.85 },
    initialPosition: { x: 380, y: 300 }
  },
  {
    id: 'geo_libertarianism',
    name: '地权自由意志主义',
    englishName: 'Geo-Libertarianism',
    category: 'political',
    color: '#84cc16',
    period: '19世纪末演进至今',
    eraYear: 1890,
    summary: '结合自由意志主义的完全自我所有权与亨利·乔治的土地公有红利观：人对自己劳动产物拥有绝对产权，但土地与自然资源租金应由全人类均分。',
    elevatorPitch: '你种出的苹果和写的代码百分之百属于你，一分钱税都不该收；但地皮、矿藏和无线电频段不是任何人造出来的，凭什么被先来者据为私有？应征收土地价值税（LVT），向所有人发放公民地租分红。',
    coreTenets: [
      '劳动所得、资本积累与个人交易绝对免税',
      '自然资源与土地空间属于全体人类的原初共同遗产',
      '征收单一土地价值税（LVT），消除土地投机与食利阶层',
      '用土地租金收入为所有人发放公民基本分红（Citizen\'s Dividend）'
    ],
    internetReality: '被很多城市规划师和经济学极客奉为“最优雅的制度设计”，因为土地价值税完全不会扭曲市场激励；在硅谷住房危机讨论中被反复推崇。',
    dailyLifeManifestation: '支持对空置炒房地块征收重税逼其释放开发，同时坚决反对政府从打工人的月薪工资单中扣缴一分钱个人所得税。',
    keyThinkers: [
      { name: '亨利·乔治', era: '1839–1897', note: '《进步与贫困》作者，单一土地税运动精神领袖' },
      { name: '弗雷德·福尔德瓦里', era: '1945–2021', note: '经济学家，精确预测了2008年由土地投机引发的次贷危机' }
    ],
    famousQuote: {
      quote: '占有一块土地的人并没有创造土地；他所占有的只是大自然赐予全人类的共同母亲。',
      author: '亨利·乔治'
    },
    spectrum: { political: 0.7, economic: 0.35, social: 0.5 },
    initialPosition: { x: 350, y: 350 }
  },
  {
    id: 'agorism',
    name: '集市主义 / 反经济学自治',
    englishName: 'Agorism',
    category: 'political',
    color: '#14b8a6',
    period: '20世纪70年代至今',
    eraYear: 1980,
    summary: '由康金三世提出的一种极端自由意志主义分支学说，主张通过非政治途径的地下黑市与灰市自由交易绕开国家监管与税收。',
    elevatorPitch: '该学说属于左翼自由意志主义与无政府资本主义交汇边缘的思想流派，主张放弃政党选举与武装对抗，构想通过不申报税收、点对点地下交易等非暴力“反经济学（Counter-Economics）”手段，试图架空国家财政。该理论具有高度空想性质，且其鼓励逃税与地下黑市交易的主张在现代法治社会中具有明确的违法犯罪性质。',
    coreTenets: [
      '反经济学（Counter-Economics）：理论上探讨通过免税自愿交易削弱国家职能',
      '反政治行动主义：拒绝组建政党参与体制选举或官僚体系改良',
      '区分黑市自愿交易与侵害人身安全的暴力犯罪（理论假设）',
      '【法律边界与合规提示】：在现代主权国家与法律秩序下，逃避税收、从事未经许可的地下黑市灰市交易均严重违反《中华人民共和国税收征收管理法》《中华人民共和国刑法》等法律法规，构成违法乃至刑事犯罪。本条目仅作为20世纪极端政治经济学分支之历史学说梳理，绝非对任何逃税、黑市交易等违法犯罪行为的倡导'
    ],
    internetReality: '20世纪晚期密码朋克与极端自由意志主义讨论中的非主流理论。现实中任何打着集市主义旗号从事走私、逃税、洗钱或暗网非法交易的行为，均受到各国执法机关的严厉刑事打击。',
    dailyLifeManifestation: '在经济学与政治思想史讨论中，作为“国家消亡论”在极端市场侧的思想实验案例进行学术探讨与法律批判。',
    keyThinkers: [
      { name: '塞缪尔·爱德华·康金三世', era: '1947–2004', note: '《新自由意志主义宣言》作者，集市主义运动理论奠基人' }
    ],
    famousQuote: {
      quote: '反经济学是其设想的非政治途径，但其脱离法治秩序的设想使其始终停留于理论空想。',
      author: '塞缪尔·爱德华·康金三世理论评析'
    },
    spectrum: { political: 0.98, economic: 0.85, social: 0.9 },
    initialPosition: { x: 440, y: 280 }
  },
  {
    id: 'socialism_with_chinese_characteristics',
    name: '中国特色社会主义',
    englishName: 'Socialism with Chinese Characteristics',
    category: 'political',
    color: '#dc2626',
    period: '1978年改革开放与十一届三中全会至今',
    eraYear: 1978,
    summary: '立足当代中国国情与实践，将马克思主义基本原理同中国具体实际、同中华优秀传统文化相结合，以公有制为主体、多种所有制经济共同发展，走中国式现代化道路的当代科学社会主义理论与制度体系。',
    elevatorPitch: '把科学社会主义基本原则与当代中国基本国情、时代发展紧密结合。既坚持社会主义方向与中国共产党的坚强集中统一领导，又开创性建立社会主义市场经济体制，解放和发展社会生产力。从邓小平理论、“三个代表”重要思想、科学发展观到习近平新时代中国特色社会主义思想，成功开辟了中国式现代化新道路，创造了经济快速发展与社会长期稳定两大奇迹。',
    coreTenets: [
      '“两个结合”：把马克思主义基本原理同中国具体实际相结合、同中华优秀传统文化相结合',
      '社会主义初级阶段理论与社会主义市场经济体制：坚持公有制为主体、多种所有制经济共同发展',
      '以人民为中心的发展思想与共同富裕本质要求，坚持全过程人民民主与全面依法治国',
      '“五位一体”总体布局与“四个全面”战略布局，走中国式现代化道路，推动构建人类命运共同体'
    ],
    internetReality: '当代中国国家治理与民族复兴的根本指导思想体系，全面统领经济建设、政治建设、文化建设、社会建设、生态文明建设与现代化强国实践。',
    dailyLifeManifestation: '从历史性消除绝对贫困、建成世界最大规模高铁与高速公路网，到全民医保与养老保障体系、科技自主创新与“绿水青山就是金山银山”生态文明建设。',
    keyThinkers: [
      { name: '邓小平', era: '1904–1997', note: '中国社会主义改革开放和现代化建设的总设计师，提出“走自己的道路，建设有中国特色的社会主义”' },
      { name: '习近平', era: '1953–', note: '创立习近平新时代中国特色社会主义思想，开辟马克思主义中国化时代化新境界' }
    ],
    famousQuote: {
      quote: '把马克思主义的普遍真理同我国的具体实际结合起来，走自己的道路，建设有中国特色的社会主义。',
      author: '邓小平'
    },
    spectrum: { political: -0.65, economic: -0.4, social: 0.3 },
    initialPosition: { x: -620, y: 560 }
  }
];
