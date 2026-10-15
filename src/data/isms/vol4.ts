import { IsmNode } from '../../types/ism';

// 第四卷：自由主义、保守主义与宪政治理谱系 (106 – 140)
export const VOL4_ISMS: IsmNode[] = [
  // 106. 自由主义 (Liberalism)
  {
    id: 'liberalism',
    name: '自由主义',
    englishName: 'Liberalism',
    category: 'political',
    color: '#38bdf8',
    period: '17-18世纪启蒙时代起',
    eraYear: 1689,
    summary: '以个人权利、契约精神与法治为基石，警惕公权力越界。',
    elevatorPitch: '认为每个人都是自己命运的最高主宰，国家存在的唯一正当目的就是捍卫公民的生命、自由与财产权，权力必须关进制度的笼子里。',
    coreTenets: [
      '天赋人权：生命、自由与合法财产不可剥夺',
      '有限政府与宪政法治，权力分立与相互制衡',
      '宽容与思想言论自由，尊重多元价值共存',
    ],
    internetReality: '常被两极化污名：在部分网络讨论中被简化为“崇洋媚外”或“资本家洗地论”；或被极端自由派等同于“绝对放任零监管”。其实正统自由主义高度强调法治边界与公共契约。',
    dailyLifeManifestation: '隐私保护法案、劳动合同制度、对反垄断的法律争论，以及社交平台上的言论边界探讨。',
    keyThinkers: [
      { name: '约翰·洛克 (John Locke)', era: '1632-1704', note: '社会契约与私有产权奠基人' },
      { name: '约翰·斯图尔特·密尔 (J.S. Mill)', era: '1806-1873', note: '《论自由》，提出伤害原则' },
      { name: '孟德斯鸠 (Montesquieu)', era: '1689-1755', note: '三权分立学说' },
    ],
    famousQuote: { quote: '你的权利止于我的鼻尖前。', author: '自由主义法学格言' },
    spectrum: { political: 0.8, economic: 0.5, social: 0.8 },
    initialPosition: { x: -450, y: -80 }
  },

  // 107. 古典自由主义 (Classical Liberalism)
  {
    id: 'classical_liberalism',
    name: '古典自由主义',
    englishName: 'Classical Liberalism',
    category: 'political',
    color: '#38bdf8',
    period: '18世纪末至19世纪',
    eraYear: 1776,
    summary: '洛克、斯密代表，推崇自然权利、私有财产神圣、自由放任与“守夜人国家”。',
    elevatorPitch: '政府不要妄想充当全知全能的保姆！最好的政府就是管得最少的政府。国家只负责国防、警察与法庭，其余全部交给“看不见的手”与自由契约，每个人在自利竞争中自发繁荣社会。',
    coreTenets: [
      '自由放任经济（Laissez-faire）：消除国家对物价、工资与外贸的干预',
      '消极自由（Negative Liberty）：免于他人强迫与国家强制的自由',
      '严格限制国家财政开支与公权力职能范围',
    ],
    internetReality: '现代自由意志主义与奥地利学派的直接思想摇篮，批判现代福利国家过度征税与官僚膨胀。',
    dailyLifeManifestation: '反对政府对网约车、租房价格施加硬性行政管制，相信供需关系自会平衡。',
    keyThinkers: [
      { name: '亚当·斯密 (Adam Smith)', era: '1723-1790', note: '《国富论》' },
      { name: '约翰·洛克 (John Locke)', era: '1632-1704', note: '自然权利学说' }
    ],
    famousQuote: { quote: '管得最少的政府，是最好的政府。', author: '梭罗引用格言' },
    spectrum: { political: 0.7, economic: 0.85, social: 0.6 },
    initialPosition: { x: -520, y: -120 }
  },

  // 108. 激进主义 (Radicalism)
  {
    id: 'radicalism',
    name: '哲理激进主义',
    englishName: 'Radicalism',
    category: 'political',
    color: '#38bdf8',
    period: '18-19世纪英法',
    eraYear: 1791,
    summary: '边沁、潘恩代表，主张彻底铲除贵族特权、建立普选制、政教分离与激进民主共和改革。',
    elevatorPitch: '保守派总是叫人“尊重历史传统慢慢来”，但所谓传统很多只是旧贵族寄生特权的护身符！从根子上（Radical源自根部）拔除一切世袭腐败特权，推行一人一票普选制、司法透明与法典理性化。',
    coreTenets: [
      '彻底废除贵族世袭特权与国教教会垄断地位',
      '推行全体公民普选权、秘密投票与议会年度改选',
      '将功利主义理性计算用于彻底重构陈腐的普通法与监狱刑罚体系',
    ],
    internetReality: '当代左翼青年对政治献金寡头政治、深层政府与豪门政客的激进清算呼声。',
    dailyLifeManifestation: '要求彻底公布所有公共开支账目、打破行业世袭内部招聘壁垒。',
    keyThinkers: [
      { name: '托马斯·潘恩 (Thomas Paine)', era: '1737-1809', note: '《人权论》《常识》' },
      { name: '杰里米·边沁 (Jeremy Bentham)', era: '1748-1832', note: '哲理激进派教父' }
    ],
    famousQuote: { quote: '我的国家就是世界，我的宗教就是做好事。', author: '托马斯·潘恩' },
    spectrum: { political: 0.8, economic: 0.1, social: 0.9 },
    initialPosition: { x: -580, y: -70 }
  },

  // 109. 社会自由主义 / 现代自由主义 (Social Liberalism)
  {
    id: 'social_liberalism',
    name: '现代社会自由主义',
    englishName: 'Social Liberalism',
    category: 'political',
    color: '#38bdf8',
    period: '19世纪末格林反思，经罗斯福新政与罗尔斯成熟',
    eraYear: 1971,
    summary: '格林、罗尔斯代表，主张没有基本经济与教育保障就没有真实自由，支持福利国家与机会均等。',
    elevatorPitch: '如果一个人快要饿死了，你跟他说“你有言论自由”，这是一种残忍的嘲讽！自由不仅是“免于干涉”，更是“做成事情的实际能力（积极自由）”。国家必须通过公立教育、全民医疗与反垄断，为每个弱势者托底。',
    coreTenets: [
      '积极自由（Positive Liberty）：国家有责任创造使每个人有能力自我实现的现实条件',
      '罗尔斯正义两原则（无知之幕下推导平等的自由原则与差异原则）',
      '在维护市场经济与宪政法治的前提下，推行累进税与再分配调节',
    ],
    internetReality: '当代欧美中左翼（如美国民主党主流、欧洲社会自由派）的核心执政意识形态基准。',
    dailyLifeManifestation: '支持大学低息助学贷款、反就业性别歧视法、全民医保与社会安全网建设。',
    keyThinkers: [
      { name: '约翰·罗尔斯 (John Rawls)', era: '1921-2002', note: '《正义论》无知之幕' },
      { name: 'T.H. 格林 (T.H. Green)', era: '1836-1882', note: '英国唯心主义社会自由派' },
      { name: '阿马蒂亚·森 (Amartya Sen)', era: '1933-', note: '可行能力理论（Capability Approach）' }
    ],
    famousQuote: { quote: '正义是社会制度的首要美德，正如真理是思想体系的首要美德。', author: '罗尔斯' },
    spectrum: { political: 0.6, economic: -0.3, social: 0.85 },
    initialPosition: { x: -480, y: -20 }
  },

  // 110. 新自由主义 (Neoliberalism)
  {
    id: 'neoliberalism',
    name: '新自由主义',
    englishName: 'Neoliberalism',
    category: 'political',
    color: '#38bdf8',
    period: '1970年代末里根撒切尔改革，华盛顿共识',
    eraYear: 1979,
    summary: '哈耶克、弗里德曼代表，主张大规模私有化、去监管、削减福利与全球资本自由流动。',
    elevatorPitch: '福利国家养懒汉，凯恩斯国家干预只会带来滞胀与效率灾难！唯有把企业交还私营市场、砍掉繁文缛节官僚监管、全面减税并开放全球贸易，市场优胜劣汰的竞争机制才能激发最大的财富活力。',
    coreTenets: [
      '华盛顿共识：私有化、市场化、贸易自由化、财政纪律',
      '坚信价格机制是传递分散知识最高效的超级计算机',
      '将市场逻辑扩张渗透至教育、医疗、公共养老等所有公共领域',
    ],
    internetReality: '当代左翼批判贫富悬殊、住房危机、资本无序扩张与金融危机时的首要头号靶子。',
    dailyLifeManifestation: '公用事业（自来水、高铁公私合营）、大学产业化自负盈亏与员工绩效KPI全面量化。',
    keyThinkers: [
      { name: '弗里德里希·哈耶克', era: '1899-1992', note: '《通往奴役之路》价格信号理论' },
      { name: '米尔顿·弗里德曼', era: '1912-2006', note: '芝加哥学派领袖' }
    ],
    famousQuote: { quote: '通往地狱的道路，往往是由善意铺就的。', author: '哈耶克' },
    spectrum: { political: 0.4, economic: 0.95, social: 0.5 },
    initialPosition: { x: -400, y: -50 }
  },

  // 111. 秩序自由主义 (Ordoliberalism)
  {
    id: 'ordoliberalism',
    name: '秩序自由主义',
    englishName: 'Ordoliberalism',
    category: 'political',
    color: '#38bdf8',
    period: '1930年代德国弗莱堡学派',
    eraYear: 1948,
    summary: '德国弗莱堡学派创立，主张国家必须强力立法反垄断以维护竞争秩序，奠定德国“社会市场经济”。',
    elevatorPitch: '自由放任市场会自行孕育出自己的掘墓人——垄断寡头！不受约束的自由竞争最终必定导致垄断托拉斯扼杀自由。国家必须充当严厉的裁判员，强力制定竞争规则、坚决分拆垄断，守护良性竞争的制度框架。',
    coreTenets: [
      '国家作为强力规则裁判员：负责维护竞争秩序（Ordo），但不亲自下场参与经营',
      '严格的反垄断法与货币物价稳定（央行绝对独立性）',
      '德国“社会市场经济（Soziale Marktwirtschaft）”模式的理论母体',
    ],
    internetReality: '欧盟委员会反垄断部门频频向谷歌、苹果开出百亿反垄断天价罚单背后的深层德国哲学底色。',
    dailyLifeManifestation: '德国企业既有极高的工业制造竞争力，又通过工会共决制与完善社会保障维持社会高度稳定。',
    keyThinkers: [
      { name: '瓦尔特·欧肯 (Walter Eucken)', era: '1891-1950', note: '弗莱堡学派开创者' },
      { name: '路德维希·艾哈德 (Ludwig Erhard)', era: '1897-1977', note: '德国战后经济奇迹之父' }
    ],
    famousQuote: { quote: '市场自由不是野生丛林，必须由强有力的法治制度框架加以精心呵护。', author: '欧肯' },
    spectrum: { political: 0.3, economic: 0.5, social: 0.4 },
    initialPosition: { x: -340, y: -90 }
  },

  // 112. 自由意志主义 (Libertarianism)
  {
    id: 'libertarianism',
    name: '自由意志主义',
    englishName: 'Libertarianism',
    category: 'political',
    color: '#38bdf8',
    period: '20世纪中叶至今',
    eraYear: 1974,
    summary: '极度推崇个人自治与自我所有权，视征税等同于强迫劳动，对国家强制权力抱持根本怀疑。',
    elevatorPitch: '我的身体属于我，我的劳动所得属于我！任何人哪怕是政府以“公共利益”之名强行拿走我的一分钱，本质上都是抢劫。只要双方成年、自愿且未侵害他人鼻尖，任何契约与行为国家都无权干预。',
    coreTenets: [
      '自我所有权原则（Self-Ownership）：每个人对其身体与才能拥有绝对主权',
      '非侵略原则（Non-Aggression Principle, NAP）：严禁首先发起针对他人的身体或财产暴力',
      '自由放任与志愿主义：一切社会合作应当建立在完全自愿的基础上',
    ],
    internetReality: '加密货币社区、比特币信徒与硅谷黑客圈的共同信仰，主张用代码脱离法币与主权管辖。',
    dailyLifeManifestation: '反对各种强制公积金与社保，认为个人完全有能力在自由金融市场上为自己的养老投资。',
    keyThinkers: [
      { name: '罗伯特·诺齐克 (Robert Nozick)', era: '1938-2002', note: '《无政府、国家与乌托邦》' },
      { name: '穆瑞·罗斯巴德 (Murray Rothbard)', era: '1926-1995', note: '奥派无政府资本主义旗手' }
    ],
    famousQuote: { quote: '征税就是强迫劳动。', author: '诺齐克' },
    spectrum: { political: 0.95, economic: 0.95, social: 0.7 },
    initialPosition: { x: -600, y: 30 }
  },

  // 113. 最小国家主义 (Minarchism)
  {
    id: 'minarchism',
    name: '最小国家主义 / 守夜人国家',
    englishName: 'Minarchism',
    category: 'political',
    color: '#38bdf8',
    period: '1974年诺齐克《无政府、国家与乌托邦》',
    eraYear: 1974,
    summary: '诺齐克代表，主张国家职能应严格被限制在国防、警察与民事法庭等防止暴力的最微小边界之内。',
    elevatorPitch: '任何比“守夜人国家”职能更多的国家机器都是侵犯人权的不义之国！国家没有任何资格推行福利补贴、公立教育或道德教化；国家的合法功能仅仅像夜巡警卫一样，防止别国侵略、防范国内盗贼、并执行违约仲裁。',
    coreTenets: [
      '最小国家（Night-watchman State）是能够得到道德辩护的唯一上限国家形态',
      '禁止将国家用于强迫部分公民去补贴另一部分公民的再分配目的',
      '产权持有正义三原则：获取正义、转让正义、矫正正义',
    ],
    internetReality: '与彻底废除警察法庭的“无政府资本主义”划清界限，在欧美右翼智库与政界拥有稳定建制派阵地。',
    dailyLifeManifestation: '只愿意为军费与警察预算纳税，坚决反对政府成立农业部、教育部、文化部等臃肿机构。',
    keyThinkers: [
      { name: '罗伯特·诺齐克 (Robert Nozick)', era: '1938-2002', note: '哈佛大学哲学教授' }
    ],
    famousQuote: { quote: '最小国家就是最为广泛的乌托邦框架。', author: '诺齐克' },
    spectrum: { political: 0.9, economic: 0.9, social: 0.6 },
    initialPosition: { x: -640, y: 70 }
  },

  // 114. 无政府资本主义 (Anarcho-capitalism)
  {
    id: 'anarcho_capitalism',
    name: '无政府资本主义',
    englishName: 'Anarcho-capitalism',
    category: 'political',
    color: '#38bdf8',
    period: '20世纪50年代罗斯巴德创立',
    eraYear: 1950,
    summary: '罗斯巴德创立，主张彻底废除国家机器，连警察、军队、监狱与法院全部由自由市场私营企业提供。',
    elevatorPitch: '国家在本质上就是一个垄断了合法暴力的犯罪劫掠团伙！连买菜、修电脑都可以交给市场，为什么安全保卫和法庭仲裁不能交给私营安保公司和私立仲裁机构？在纯粹私有制自由市场中，竞争会提供更廉洁、高效的法律与保护。',
    coreTenets: [
      '彻底消灭国家机器垄断与一切形式的法定税收',
      '私立防卫机构（PDA）与私营仲裁法庭由自由市场优胜劣汰提供',
      '绝对私有产权与非侵略原则的终极逻辑延伸',
    ],
    internetReality: '阿根廷总统哈维尔·米莱（Javier Milei）自封为无政府资本主义者，手持电锯大刀阔斧裁撤政府部门引发全球轰动。',
    dailyLifeManifestation: '设想未来全私有化社区：小区的安保、道路维护、民事纠纷仲裁全由业主委员会购买商业服务解决。',
    keyThinkers: [
      { name: '穆瑞·罗斯巴德 (Murray Rothbard)', era: '1926-1995', note: '《自由的伦理》《为了新的自由》' },
      { name: '汉斯-赫尔曼·霍普', era: '1949-', note: '《民主：上帝失败了》私产社会辩护' }
    ],
    famousQuote: { quote: '国家不是别的，就是一个规模庞大、合法化了的强盗集团。', author: '罗斯巴德' },
    spectrum: { political: 1.0, economic: 1.0, social: 0.7 },
    initialPosition: { x: -700, y: 120 }
  },

  // 115. 左翼自由意志主义 (Left-Libertarianism)
  {
    id: 'left_libertarianism',
    name: '左翼自由意志主义',
    englishName: 'Left-Libertarianism',
    category: 'political',
    color: '#38bdf8',
    period: '20世纪末斯坦纳、瓦伦丁代表',
    eraYear: 1999,
    summary: '结合个人完全自我所有权与“自然资源属于全人类共同所有”，主张对土地矿产资源开采征收地租分红。',
    elevatorPitch: '你的身体当然完全属于你（右翼自由意志主义没说错）；但地球上的土地、石油、矿产与清洁空气又不是你生产出来的！这些自然资源凭什么被少数资本巨头圈占？自然资源全人类平等共有，开采者必须向所有人支付全民基本收入分红（UBI）。',
    coreTenets: [
      '坚守人身彻底自我所有权（反征兵、反人身管制）',
      '自然资源平等主义（乔治主义地租理论与左翼结合）',
      '通过资源红利发放全民基本收入（UBI），消除被迫出卖劳动的实质压迫',
    ],
    internetReality: '阿拉斯加永久基金分红机制与硅谷倡导的全民基本收入（UBI）的最佳理论落脚点。',
    dailyLifeManifestation: '支持对高污染高耗能企业征收高额环境资源税，并将税金平均打入每个公民的银行卡。',
    keyThinkers: [
      { name: '希勒尔·斯坦纳 (Hillel Steiner)', era: '1942-', note: '《权利的理论》' },
      { name: '彼得·瓦伦丁 (Peter Vallentyne)', era: '1952-', note: '当代左翼自由意志论奠基' }
    ],
    famousQuote: { quote: '你拥有你自己，但地球属于我们大家。', author: '左翼自由意志主义格言' },
    spectrum: { political: 0.9, economic: -0.3, social: 0.9 },
    initialPosition: { x: -660, y: 20 }
  },

  // 116. 自由意志家长主义 (Libertarian Paternalism)
  {
    id: 'libertarian_paternalism',
    name: '自由意志家长主义 / 助推理论',
    englishName: 'Libertarian Paternalism',
    category: 'political',
    color: '#38bdf8',
    period: '2008年理查德·塞勒与桑斯坦《助推》',
    eraYear: 2008,
    summary: '诺奖得主塞勒提出，在不剥夺任何个人自由选择权的前提下，通过巧妙的“选择架构助推（Nudge）”引导人们做出更优决策。',
    elevatorPitch: '不发强制命令，也不罚款查封！学校食堂把水果放在与视线平齐的显眼处、把薯条藏在角落，学生自然多吃健康食品；器官捐献默认“勾选同意（但可一键取消）”，捐赠率瞬间飙升至90%以上。兼顾自由选择与善意指引。',
    coreTenets: [
      '自由意志维度：永远保留个人反向选择与退出（Opt-out）的完全自由',
      '家长主义维度：选择架构师有道德责任根据行为经济学偏误引导公共福祉',
      '用温柔的“助推（Nudge）”取代粗暴的行政禁止与巨额惩罚',
    ],
    internetReality: '全球数十个国家政府专门成立“行为洞察团队（Nudge Unit）”，广泛应用于公共卫生、环保与退休金改革。',
    dailyLifeManifestation: '手机APP默认开启“健康护眼模式”、外卖平台默认勾选“不索取一次性餐具”。',
    keyThinkers: [
      { name: '理查德·塞勒 (Richard Thaler)', era: '1945-', note: '诺贝尔经济学奖得主，《助推》' },
      { name: '卡斯·桑斯坦 (Cass Sunstein)', era: '1954-', note: '哈佛大学法学院教授' }
    ],
    famousQuote: { quote: '如果把小小的助推设计好，无需强迫也能让数百万人走向更健康的人生。', author: '塞勒与桑斯坦' },
    spectrum: { political: 0.3, economic: 0.2, social: 0.4 },
    initialPosition: { x: -420, y: 40 }
  },

  // 117. 技术自由主义 (Techno-liberalism)
  {
    id: 'techno_liberalism',
    name: '技术自由主义',
    englishName: 'Techno-liberalism',
    category: 'contemporary',
    color: '#ec4899',
    period: '20世纪90年代加州硅谷意识形态',
    eraYear: 1996,
    summary: '相信去中心化互联网、开源软件、端到端加密与数字自由市场结合，能自发瓦解一切官僚威权垄断。',
    elevatorPitch: '约翰·佩里·巴洛《赛博空间独立宣言》宣告：“工业世界的政府们，你们这些肉体与钢铁的巨人，你们在赛博空间没有主权！”技术不仅是工具，去中心化的信息流动本身就是摧毁专制、赋予个体无限自由的解放火种。',
    coreTenets: [
      '信息渴望自由（Information wants to be free），反抗国家审查与专利封锁',
      '密码学与开源网络是保障公民自由免受国家监控的无敌数字盾牌',
      '技术创新与自由企业文化是推动文明跃迁的核心动力',
    ],
    internetReality: '早期维基百科、Linux开源运动与电子前沿基金会（EFF）的精神灯塔，后遭遇巨型科技财阀垄断现实的拷问。',
    dailyLifeManifestation: '使用Signal加密聊天软件、坚持使用开源系统与分布式文件存储（IPFS）。',
    keyThinkers: [
      { name: '约翰·佩里·巴洛 (John Perry Barlow)', era: '1947-2018', note: '《赛博空间独立宣言》' },
      { name: '理查德·斯托曼 (Richard Stallman)', era: '1953-', note: '自由软件运动（FSF）之父' }
    ],
    famousQuote: { quote: '你们在我们的领地上不受欢迎。在我们的聚集之地，你们没有主权。', author: '《赛博空间独立宣言》' },
    spectrum: { political: 0.9, economic: 0.6, social: 0.9 },
    initialPosition: { x: -500, y: 140 }
  },

  // 118. 保守主义 (Conservatism)
  {
    id: 'conservatism',
    name: '保守主义',
    englishName: 'Conservatism',
    category: 'political',
    color: '#38bdf8',
    period: '1790年埃德蒙·柏克批判法国大革命奠基',
    eraYear: 1790,
    summary: '尊重历史传统、敬畏宗教道德经验、珍视自然演进的自生自发秩序，强烈反对激进乌托邦社会工程。',
    elevatorPitch: '人类理性极其有限脆弱！流传数百年的宪政习惯、家庭伦理与宗教信仰，是无数世代试错积淀下来的集体生存智慧。轻率地妄图按照几张哲学图纸一夜推翻旧制度，带来的绝不会是天堂，而必定是断头台与血海浩劫。',
    coreTenets: [
      '对抽象人类理性的自负保持深刻怀疑（反激进社会工程）',
      '有机社会观：社会是世代繁衍的活生命，是死者、生者与未出生者之间的神圣契约',
      '珍视法治传统、地方自治共同体、私有财产与渐进审慎改良',
    ],
    internetReality: '常被片面污名化为“死守封建遗毒反动派”；其实健康的保守主义是防止社会这艘巨轮在激进风暴中倾覆的压舱石。',
    dailyLifeManifestation: '面对公司大动干戈的所谓“颠覆式流程重组”持审慎保留态度，倾向于在原有效机制上打补丁微调。',
    keyThinkers: [
      { name: '埃德蒙·柏克 (Edmund Burke)', era: '1729-1797', note: '《法国革命论》现代保守主义之父' },
      { name: '迈克尔·奥克肖特 (Michael Oakeshott)', era: '1901-1990', note: '政治活动中的理性主义批判' },
      { name: '拉塞尔·柯克 (Russell Kirk)', era: '1918-1994', note: '《保守主义的心灵》' }
    ],
    famousQuote: { quote: '那些不能记住过去的人，注定要重复过去的错误。', author: '乔治·桑塔亚那' },
    spectrum: { political: -0.4, economic: 0.4, social: -0.7 },
    initialPosition: { x: -300, y: -20 }
  },

  // 119. 传统保守主义 (Traditionalist Conservatism)
  {
    id: 'traditionalist_conservatism',
    name: '传统保守主义',
    englishName: 'Traditionalist Conservatism',
    category: 'political',
    color: '#38bdf8',
    period: '柏克至战后柯克',
    eraYear: 1790,
    summary: '强调客观道德秩序、宗教自然法根基、乡绅地方共同体与贵族骑士荣誉，警惕纯粹唯利是图的资本主义解构。',
    elevatorPitch: '不仅要防范左翼激进主义，也要防范资本主义拜金狂潮！如果社会沦为冷冰冰的合同交换与金钱算盘，传统的乡绅荣誉、教区温情与美德便荡然无存。真正的秩序建立在敬畏上帝、守护故土与世代相传的家族纽带之上。',
    coreTenets: [
      '坚信先验永恒的道德自然法秩序高于世俗人定法',
      '反抗启蒙运动以降的极度世俗化、功利化与原子化浪潮',
      '强调地方乡土共同体、等级责任（Noblesse Oblige）与审美优雅',
    ],
    internetReality: '在欧美田园乡土文化爱好者、传统天主教圈层与古典贵族怀旧者中拥有深厚根基。',
    dailyLifeManifestation: '拒绝现代极简装潢，酷爱收藏祖传红木家具与手写老家谱，极其看重家族家规家风。',
    keyThinkers: [
      { name: '埃德蒙·柏克', era: '1729-1797', note: '世代契约论' },
      { name: '拉塞尔·柯克', era: '1918-1994', note: '保守主义六大原则' }
    ],
    famousQuote: { quote: '社会确是一份契约，但它是死者、生者以及尚未出生的人之间的神圣纽带。', author: '柏克' },
    spectrum: { political: -0.5, economic: 0.1, social: -0.9 },
    initialPosition: { x: -280, y: 50 }
  },

  // 120. 自由保守主义 (Liberal Conservatism)
  {
    id: 'liberal_conservatism',
    name: '自由保守主义',
    englishName: 'Liberal Conservatism',
    category: 'political',
    color: '#38bdf8',
    period: '19世纪至今欧洲主流政党中坚',
    eraYear: 1840,
    summary: '保守主义与古典自由主义自由市场的结合，既坚守传统社会道德与法治，又拥抱自由市场经济。',
    elevatorPitch: '在经济上推崇私有产权、自由贸易与有限政府；在社会文化上坚持宪政法治、家庭道德、宪政爱国主义与审慎渐进改革。构成了现代欧美主流中右翼政党（如英国保守党主流、德国基民盟）的核心底色。',
    coreTenets: [
      '自由市场经济是维护个人尊严与繁荣的最佳发动机',
      '坚定的宪政法治与传统国家主权秩序保障',
      '反对急躁跃进的激进思潮，通过温和渐进改革防范颠覆',
    ],
    internetReality: '国际上最稳定持久的执政意识形态之一，既不走左派高福利激进路线，也不走极右排外民粹歧途。',
    dailyLifeManifestation: '白手起家创办公司支持自由竞争，周日带着全家整整齐齐去教堂做礼拜的体面中产精英。',
    keyThinkers: [
      { name: '托克维尔 (Tocqueville)', era: '1805-1859', note: '自由与平等的辩证审视' },
      { name: '丘吉尔 (Winston Churchill)', era: '1874-1965', note: '保卫自由帝国与议会宪政' }
    ],
    famousQuote: { quote: '自由与秩序从来不是死敌，秩序是自由唯一的安全铠甲。', author: '自由保守主义原则' },
    spectrum: { political: -0.1, economic: 0.6, social: -0.4 },
    initialPosition: { x: -330, y: 30 }
  },

  // 121. 一国保守主义 / 家长式保守主义 (One-Nation Conservatism)
  {
    id: 'one_nation_conservatism',
    name: '一国保守主义',
    englishName: 'One-Nation Conservatism',
    category: 'political',
    color: '#38bdf8',
    period: '19世纪下半叶英国首相本杰明·迪斯雷利创立',
    eraYear: 1868,
    summary: '迪斯雷利创立，主张精英阶层拥有道义责任扶助底层穷人，防止社会撕裂为彼此敌对的“两个国家”。',
    elevatorPitch: '工业革命让英国撕裂成了“富人与穷人”两个互不了解的陌生国度！如果统治精英冷酷无视工人的悲惨血泪，底层迟早会被狂暴共产主义革命点燃。特权伴随着责任（Noblesse oblige），国家必须出资改善住房与公共卫生，凝聚完整团结的一个国家！',
    coreTenets: [
      '社会有机连带观：反对放任资本主义将人分裂为对立敌对阶级',
      '精英阶层的家长式道德救济责任（Paternalism）',
      '通过有节制的社会福利与劳工保护法案维持君主与宪政稳定',
    ],
    internetReality: '英国战后鲍里斯·约翰逊“升级平衡发展（Levelling Up）”北方落后选区口号的鼻祖来源。',
    dailyLifeManifestation: '大企业家主动出资为底层员工子女设立奖学金、修建托儿所，以换取劳资长久安宁。',
    keyThinkers: [
      { name: '本杰明·迪斯雷利 (Benjamin Disraeli)', era: '1804-1881', note: '《西比尔：或两个国家》' },
      { name: '哈罗德·麦克米伦 (Harold Macmillan)', era: '1894-1986', note: '《中间道路》战后福利保守主义' }
    ],
    famousQuote: { quote: '特权若无责任相伴，便是赤裸裸的腐败与暴政。', author: '迪斯雷利' },
    spectrum: { political: -0.3, economic: -0.1, social: -0.6 },
    initialPosition: { x: -260, y: 110 }
  },

  // 122. 新保守主义 (Neoconservatism)
  {
    id: 'neoconservatism',
    name: '新保守主义',
    englishName: 'Neoconservatism',
    category: 'political',
    color: '#38bdf8',
    period: '20世纪60年代后发端，小布什时期巅峰',
    eraYear: 1980,
    summary: '欧文·克里斯托尔代表，主张对外依靠绝对压倒性军事实力积极干预、“武装输出民主价值观”。',
    elevatorPitch: '面对全球邪恶暴政，姑息与孤立主义只会重蹈二战绥靖主义覆辙！美国拥有道德优越性与超级实力，必须挥舞大棒强力击碎威权专制，用军事力量重塑中东与全球秩序。对内接受温和福利国家，对外坚定鹰派好战。',
    coreTenets: [
      '善恶二元论国际观：世界被划分为“自由民主阵营”与“邪恶轴心”',
      '单边主义与先发制人（Preemptive strike）军事打击战略',
      '对国际法与联合国软弱机制持怀疑态度，坚信实力说话',
    ],
    internetReality: '伊拉克战争与阿富汗战争的直接理论发动机，遭遇旷日持久的反恐泥潭后在欧美选民中大幅失宠。',
    dailyLifeManifestation: '在国际新闻评论中强烈主张“派航母直接炸平、对独裁政权实施最严酷全面制裁”。',
    keyThinkers: [
      { name: '欧文·克里斯托尔 (Irving Kristol)', era: '1920-2009', note: '新保守主义教父' },
      { name: '保罗·沃尔福威茨', era: '1943-', note: '沃尔福威茨主义防扩散报告' }
    ],
    famousQuote: { quote: '新保守主义者就是被现实抢劫了的自由主义者。', author: '欧文·克里斯托尔' },
    spectrum: { political: -0.7, economic: 0.5, social: -0.5 },
    initialPosition: { x: -210, y: 70 }
  },

  // 123. 古保守主义 / 旧保守主义 (Paleoconservatism)
  {
    id: 'paleoconservatism',
    name: '古保守主义 / 旧保守主义',
    englishName: 'Paleoconservatism',
    category: 'political',
    color: '#38bdf8',
    period: '20世纪80年代与新保守主义决裂',
    eraYear: 1990,
    summary: '帕特·布坎南代表，主张“美国优先”、外交绝不干涉孤立主义、贸易保护关税、反移民与基督教白人传统。',
    elevatorPitch: '凭什么拿着本国纳税人的血汗钱去千里之外打那些毫无意义的治安战？不要什么全球帝国！守好自己的边境高墙，关停吸血的跨国贸易协议，恢复制造业岗位，捍卫基督教堂、传统家庭与本地祖产。',
    coreTenets: [
      '美国优先（America First）：反对全球主义跨国机构与海外军事冒险',
      '孤立主义与贸易保护关税：保护本土蓝领工人产业不受全球化冲击',
      '捍卫传统欧美基督教文明传承，对非法移民与多元文化主义实施极严管控',
    ],
    internetReality: '特朗普“MAGA”运动、欧洲本土右翼回归的真正底层理论源头，彻底击溃了建制派新保守主义。',
    dailyLifeManifestation: '坚决购买本土制造国货、反对一切涉外援助法案、要求全面加强边境巡逻防线。',
    keyThinkers: [
      { name: '帕特·布坎南 (Pat Buchanan)', era: '1938-', note: '《西方之死》《共和国不是帝国》' },
      { name: '保罗·戈特弗里德 (Paul Gottfried)', era: '1941-', note: '古保守主义理论奠基' }
    ],
    famousQuote: { quote: '一个连自己边境都无法守住的国家，根本不配称为一个国家。', author: '布坎南' },
    spectrum: { political: -0.6, economic: 0.1, social: -0.95 },
    initialPosition: { x: -240, y: 160 }
  },

  // 124. 民族保守主义 (National Conservatism)
  {
    id: 'national_conservatism',
    name: '民族保守主义',
    englishName: 'National Conservatism',
    category: 'political',
    color: '#38bdf8',
    period: '21世纪欧美右翼主流崛起',
    eraYear: 2019,
    summary: '约拉姆·哈佐尼代表，反对布鲁塞尔与达沃斯全球主义精英，主张民族主权是自由民主唯一的神圣容器。',
    elevatorPitch: '没有独立强大的主权民族国家，所谓的个人自由不过是任由无国界跨国资本与跨国官僚随意践踏的浮萍！自由不在超国家机构的空洞决议里，而在由共同历史记忆与传统家庭构建的民族国家守护之中。',
    coreTenets: [
      '民族主权优先于任何超国家国际组织与全球化协议',
      '国家有义务主动利用政策干预经济，扶植本国核心制造业与家庭生育率',
      '文化融合论：坚决反对割裂社会的激进身份政治与无界移民政策',
    ],
    internetReality: '匈牙利欧尔班政权、英国脱欧公投及美国新右翼智库的统一集结口号。',
    dailyLifeManifestation: '对跨国科技财阀偷税漏税极为愤慨，支持国家通过高关税与产业补贴扶植本国芯片工业。',
    keyThinkers: [
      { name: '约拉姆·哈佐尼 (Yoram Hazony)', era: '1964-', note: '《民族主义的德性》《保守主义：一种重新发现》' }
    ],
    famousQuote: { quote: '民族国家是上帝赐予人类避免普世暴政帝国的最伟大制度发明。', author: '哈佐尼' },
    spectrum: { political: -0.5, economic: 0.0, social: -0.85 },
    initialPosition: { x: -180, y: 130 }
  },

  // 125. 社会保守主义 (Social Conservatism)
  {
    id: 'social_conservatism',
    name: '社会保守主义',
    englishName: 'Social Conservatism',
    category: 'political',
    color: '#38bdf8',
    period: '20世纪中叶文化战争爆发至今',
    eraYear: 1970,
    summary: '聚焦于捍卫传统异性婚姻、反堕胎生命权、宗教伦理进课堂、维护自然生理性别秩序。',
    elevatorPitch: '家庭是文明社会最根本的细胞基石！如果婚姻神圣性被摧毁、堕胎杀害无辜胎儿被合法化、变性思潮向幼儿园幼童灌输，整个社会大厦便从内部道德腐烂。保护传统家庭伦理是抵御道德虚无的最后一座堡垒。',
    coreTenets: [
      '坚定捍卫胎儿从受孕一刻起所拥有的绝对生命权（Pro-life）',
      '坚持男女生理性别二元论，反对无底线激进性别解构',
      '传统一夫一妻制家庭是抚育健全下一代不可替代的道德摇篮',
    ],
    internetReality: '美国最高法院推翻罗诉韦德案（Roe v. Wade）的决定性推动力量，在宗教保守选民中极具动员力。',
    dailyLifeManifestation: '积极参与反堕胎和平游行、在校董会上抗议学校图书馆借阅激进性别探索书籍。',
    keyThinkers: [
      { name: '菲利斯·施拉夫利 (Phyllis Schlafly)', era: '1924-2016', note: '阻止平等权利修正案（ERA）女领袖' },
      { name: '詹姆斯·多布森 (James Dobson)', era: '1936-', note: '爱家协会（Focus on the Family）创立者' }
    ],
    famousQuote: { quote: '如果家庭分崩离析，任何繁荣的经济都无法拯救国家走向崩溃。', author: '社会保守派宣言' },
    spectrum: { political: -0.4, economic: 0.1, social: -1.0 },
    initialPosition: { x: -150, y: 180 }
  },

  // 126. 财政保守主义 (Fiscal Conservatism)
  {
    id: 'fiscal_conservatism',
    name: '财政保守主义',
    englishName: 'Fiscal Conservatism',
    category: 'political',
    color: '#38bdf8',
    period: '古典宪政财政纪律传统',
    eraYear: 1920,
    summary: '极力主张量入为出平衡政府预算、坚决削减国债堆积、控制赤字狂飙并遏制通货膨胀。',
    elevatorPitch: '政府没有自己的钱，每一分财政支出都是从当下老百姓口袋里掏出来的税款，或是以国债名义透支子孙后代的民脂民膏！债台高筑最终必定引爆恶性通胀大劫难。政客花别人的钱永远不心疼，必须给国库套上宪法铁链。',
    coreTenets: [
      '平衡预算（Balanced Budget）：在和平时期严格禁止财政赤字无序滚雪球',
      '减税降费与精简冗官：把金钱留在公民口袋里比留在政府金库更有效率',
      '警惕央行大放水货币贬值剥夺平民储蓄财富',
    ],
    internetReality: '美国国债突破35万亿美元时，引发全球经济学家关于美元债务信用崩塌危机的深切警告。',
    dailyLifeManifestation: '家庭日常理财时极度自律，绝不用大额网贷透支消费，追求充裕现金流。',
    keyThinkers: [
      { name: '卡尔文·柯立芝 (Calvin Coolidge)', era: '1872-1933', note: '美国财政最节俭的总统' },
      { name: '托马斯·杰斐逊', era: '1743-1826', note: '“国债是道德的腐蚀剂”' }
    ],
    famousQuote: { quote: '征税不应超过政府运转的绝对必需，多征一分钱皆是不合法的掠夺。', author: '柯立芝' },
    spectrum: { political: -0.1, economic: 0.9, social: -0.3 },
    initialPosition: { x: -290, y: 190 }
  },

  // 127. 基督教民主主义 (Christian Democracy)
  {
    id: 'christian_democracy',
    name: '基督教民主主义',
    englishName: 'Christian Democracy',
    category: 'political',
    color: '#38bdf8',
    period: '二战后西欧重建核心力量',
    eraYear: 1945,
    summary: '阿登纳、舒曼代表，基于天主教社会训导，融合社会市场经济、家庭本位、辅助性原则与欧洲一体化。',
    elevatorPitch: '既反对无神论共产主义的阶级暴政，也反对达尔文式资本主义的弱肉强食！基于基督教人道尊严，提出“辅助性原则（Subsidiarity）”——低层级社区能解决的事上级政府切莫插手；建设全欧洲兄弟和平联盟。',
    coreTenets: [
      '人格尊严与辅助性原则：权力下沉至家庭与地方自治行会',
      '社会团结原则（Solidarity）：通过劳资共决与社会保险兼顾效率与平等',
      '战后法德和解与欧盟一体化（舒曼计划）的最高政治建筑师',
    ],
    internetReality: '德国默克尔执政十六年与欧洲人民党（EPP）在欧洲议会长期稳居第一大党团的治国底气。',
    dailyLifeManifestation: '德国企业工人代表与股东平起平坐进监事会参与公司重大分红决策。',
    keyThinkers: [
      { name: '康拉德·阿登纳 (Konrad Adenauer)', era: '1876-1967', note: '战后联邦德国首任总理' },
      { name: '罗贝尔·舒曼 (Robert Schuman)', era: '1886-1963', note: '欧盟之父' },
      { name: '阿尔契德·加斯贝利', era: '1881-1954', note: '意大利战后民主奠基人' }
    ],
    famousQuote: { quote: '全欧洲人民联合在自由与基督教人道博爱的旗帜之下，战争将永不再来。', author: '舒曼' },
    spectrum: { political: -0.2, economic: 0.1, social: -0.4 },
    initialPosition: { x: -220, y: 220 }
  },

  // 128. 反动主义 / 复辟主义 (Reactionism)
  {
    id: 'reactionism',
    name: '反动主义 / 复辟主义',
    englishName: 'Reactionism',
    category: 'political',
    color: '#38bdf8',
    period: '法国大革命后约瑟夫·德·梅斯特尔发端',
    eraYear: 1796,
    summary: '极右翼反叛启蒙运动一切成果，认为大革命是魔鬼诱惑，主张彻底倒退回旧制度君主神权专制。',
    elevatorPitch: '启蒙运动的“人权与理性”完全是一场狂妄自大的灾难！人类生来就是有原罪、愚昧且残忍的生物，放任自由只会带来断头台的人头滚滚。社会唯有服从上帝钦定的绝对世袭君主与教皇铁腕，方能获得秩序与救赎。倒转历史时钟！',
    coreTenets: [
      '彻底否定法国大革命与启蒙理性的合法性',
      '君权神授与教皇绝对最高无上权威',
      '死刑执行人（刽子手）是维系人类社会秩序不可或缺的基石',
    ],
    internetReality: '当代极右翼暗黑启蒙（Dark Enlightenment / Neoreaction NRx）倡导由AI科技CEO充当君主的精神温床。',
    dailyLifeManifestation: '在沙龙中对现代民主议会吵架嗤之以鼻，极度狂热怀恋凡尔赛宫路易十四的威严气象。',
    keyThinkers: [
      { name: '约瑟夫·德·梅斯特尔 (Joseph de Maistre)', era: '1753-1821', note: '《论法国》《圣彼得堡之夜》' },
      { name: '路易·德·博纳尔德', era: '1754-1840', note: '神权神圣秩序辩护' }
    ],
    famousQuote: { quote: '世上根本没有所谓的“抽象的人”，我见过法国人、意大利人和俄国人，但“人”我从未见过。', author: '梅斯特尔' },
    spectrum: { political: -1.0, economic: -0.2, social: -1.0 },
    initialPosition: { x: -160, y: 250 }
  },

  // 129. 共和主义 (Republicanism)
  {
    id: 'republicanism',
    name: '古典共和主义',
    englishName: 'Republicanism',
    category: 'political',
    color: '#38bdf8',
    period: '古罗马西塞罗、马基雅维利至美国建国先父',
    eraYear: -50,
    summary: '“天下为公（Res Publica）”，主张混合政体、公民美德与“免于专断支配（Non-domination）的自由”。',
    elevatorPitch: '自由不仅是“别人现在没打我”（消极自由）；即使一个仁慈的主人从不打他的奴隶，奴隶依然没有自由，因为主人随时有权力剥夺他的一切！共和主义追求的是“免于专断支配”——依靠宪政法治制衡与公民美德，杜绝任何僭主独裁。',
    coreTenets: [
      '天下为公（Res Publica）：国家权力属于全体公民公共事务，绝非君王私人财产',
      '混合宪政（Mixed Government）：君主、贵族与平民权力的精巧分立制衡',
      '公民美德（Civic Virtue）：积极参与城邦公共防卫与政治生活，防范腐败怠惰',
    ],
    internetReality: '现代宪政民主与公民自治协会的政治哲学原乡，对抗政治冷漠与寡头专断的清醒号角。',
    dailyLifeManifestation: '积极参与社区业主公约草拟、担任义务陪审员，认为监督公权力是每个公民的日常职责。',
    keyThinkers: [
      { name: '西塞罗 (Cicero)', era: '前106-前43', note: '罗马共和国宪政捍卫者' },
      { name: '马基雅维利 (Machiavelli)', era: '1469-1527', note: '《李维史论》共和政体分析' },
      { name: '菲利普·佩蒂特 (Philip Pettit)', era: '1945-', note: '当代无支配自由共和理论' }
    ],
    famousQuote: { quote: '法律面前人人平等，我们成为法律的奴隶，是为了能够拥有自由。', author: '西塞罗' },
    spectrum: { political: 0.6, economic: 0.1, social: 0.5 },
    initialPosition: { x: -350, y: 150 }
  },

  // 130. 宪政主义 / 立宪主义 (Constitutionalism)
  {
    id: 'constitutionalism',
    name: '宪政主义',
    englishName: 'Constitutionalism',
    category: 'political',
    color: '#38bdf8',
    period: '英国《大宪章》至1787年美国宪法',
    eraYear: 1787,
    summary: '主张政府权力并非无限，必须受到根本大法（宪法）的严格界定、分立制衡与司法违宪审查。',
    elevatorPitch: '统治者不能随心所欲！宪法就是给权力打造的“锁妖塔”。即便民意调查有99%的人投票要把剩下的1%无辜者推上绞架，宪法基本人权清单也坚决否决！宪政的核心就是法治高于人治，用最高大法限制政府的每一次冲动。',
    coreTenets: [
      '宪法最高权威（Supremacy of the Constitution）：任何法律与行政命令不得违宪',
      '有限政府与横向三权分立制衡',
      '独立司法违宪审查制度，有效护卫少数派基本人权不受多数人暴政侵害',
    ],
    internetReality: '法治国家抵御专制倒退与民粹狂潮的最牢固堤坝，法学界神圣不可侵犯的公理。',
    dailyLifeManifestation: '政府征地拆迁时，公民聘请律师依据宪法财产权条款与政府公开对簿公堂。',
    keyThinkers: [
      { name: '亚历山大·汉密尔顿', era: '1755-1804', note: '《联邦党人文集》司法审查奠基' },
      { name: '詹姆斯·麦迪逊 (James Madison)', era: '1751-1836', note: '美国宪法之父' }
    ],
    famousQuote: { quote: '如果人人都是天使，就不需要任何政府了。', author: '麦迪逊' },
    spectrum: { political: 0.7, economic: 0.3, social: 0.6 },
    initialPosition: { x: -410, y: 180 }
  },

  // 131. 君主主义 / 保皇主义 (Monarchism / Royalism)
  {
    id: 'monarchism',
    name: '君主主义 / 保皇主义',
    englishName: 'Monarchism',
    category: 'political',
    color: '#38bdf8',
    period: '古代世袭文明至现代君主立宪制',
    eraYear: 1688,
    summary: '主张以世袭君主作为国家元首与国家连续统一的历史象征，超然于政党恶斗之上。',
    elevatorPitch: '政客都是短视且自私的，任期四年只顾拉选票捞选金；唯有世袭君主，整个国家是其祖辈传下的家业，他拥有最高的历史责任感！在立宪君主制下，君主“统而不治”，如定海神针般让国家在内阁政争倒台时依然运转如常。',
    coreTenets: [
      '君主作为超越政党派系争斗的中立超然国家元首',
      '历史传统的活体化身与民族连续性的情感凝聚纽带',
      '现代主要形态：虚君立宪制（英国、日本、北欧西班牙模式）',
    ],
    internetReality: '英国女王逝世与查尔斯加冕礼全球数以十亿计的关注度，展现古老君主符号难以置信的跨国情感黏合力。',
    dailyLifeManifestation: '英国公民在护照、邮票与硬币上每天看到王室肖像，感受历经千年的不倒传统。',
    keyThinkers: [
      { name: '沃尔特·白芝浩 (Walter Bagehot)', era: '1826-1877', note: '《英国宪法》尊严部分与有效部分' }
    ],
    famousQuote: { quote: '君主拥有三项权利：被咨询的权利、鼓励的权利与警告的权利。', author: '白芝浩' },
    spectrum: { political: -0.4, economic: 0.1, social: -0.7 },
    initialPosition: { x: -380, y: 250 }
  },

  // 132. 专制主义 / 绝对君主主义 (Absolutism)
  {
    id: 'absolutism',
    name: '专制主义 / 绝对君主制',
    englishName: 'Absolutism',
    category: 'political',
    color: '#38bdf8',
    period: '16-18世纪欧洲民族国家形成期',
    eraYear: 1661,
    summary: '博丹、霍布斯、路易十四代表，主张君主拥有不受宪政法律、地方封建贵族或议会制约的绝对最高主权。',
    elevatorPitch: '路易十四名言：“朕即国家（L\'État, c\'est moi）”！在封建诸侯割据混战与宗教战争的废墟中，唯有赋予中央君主绝对且不可分割的主权，收拢全部兵权与税赋，才能结束军阀内耗，铸造统一强大的现代民族国家。',
    coreTenets: [
      '主权的不可分割性、绝对性与永久性（让·博丹主权论）',
      '君权神授（Divine Right of Kings）：君主只对上帝负责，不受臣民法律制约',
      '粉碎封建领主独立王国，建立中央官僚制与常备军',
    ],
    internetReality: '凡尔赛宫奢华建筑与太阳王历史传奇的源头，也是法国大革命暴风雨前夕积聚民怨的火药桶。',
    dailyLifeManifestation: '中东海湾君主国一切国家政策、石油资产乃至部长任命全凭王室一纸法令裁夺。',
    keyThinkers: [
      { name: '让·博丹 (Jean Bodin)', era: '1530-1596', note: '《国家六论》主权概念首创者' },
      { name: '雅克-贝尼涅·波舒哀', era: '1627-1704', note: '君权神授理论神学集大成者' }
    ],
    famousQuote: { quote: '朕即国家。', author: '路易十四' },
    spectrum: { political: -0.95, economic: -0.2, social: -0.9 },
    initialPosition: { x: -320, y: 290 }
  },

  // 133. 联邦主义 (Federalism)
  {
    id: 'federalism',
    name: '联邦主义',
    englishName: 'Federalism',
    category: 'political',
    color: '#38bdf8',
    period: '1787年美国制宪会议确立',
    eraYear: 1787,
    summary: '汉密尔顿、麦迪逊代表，主张国家最高主权在中央联邦政府与各独立邦州之间实行宪政分享与二元共治。',
    elevatorPitch: '幅员辽阔的大帝国如何避免专制独裁？单一制中央集权必定走向僵化暴政！把权力切成两半：外交、国防、货币归中央联邦，教育、警察、民事商业由各州自治。各州充当“民主的实验室”，让地方根据本地风土人情自由竞争立法。',
    coreTenets: [
      '主权分权共治：宪法明确列举联邦权力，剩余主权保留给各州与人民',
      '双重主权与二元法院系统，防止单一政治中心垄断一切资源',
      '各成员州拥有平等的宪政地位与自我治理空间',
    ],
    internetReality: '美国、加拿大、德国、瑞士、澳大利亚等全球发达国家最核心的治国政治架构。',
    dailyLifeManifestation: '开车跨过美国一条州界线，消费税率、枪支法规乃至驾照规则瞬间随之改变。',
    keyThinkers: [
      { name: '亚历山大·汉密尔顿', era: '1755-1804', note: '《联邦党人文集》强化联邦权力' },
      { name: '詹姆斯·麦迪逊', era: '1751-1836', note: '复合共和国制度设计' }
    ],
    famousQuote: { quote: '合众为一（E Pluribus Unum）。', author: '美国国家格言' },
    spectrum: { political: 0.6, economic: 0.3, social: 0.6 },
    initialPosition: { x: -460, y: 230 }
  },

  // 134. 邦联主义 (Confederalism)
  {
    id: 'confederalism',
    name: '邦联主义',
    englishName: 'Confederalism',
    category: 'political',
    color: '#38bdf8',
    period: '美国邦联条例、瑞士邦联至民主邦联主义',
    eraYear: 1781,
    summary: '主权完全保留在各个独立成员邦手中，中央机构仅作为松散受托协调委员会，无直接征税征兵权。',
    elevatorPitch: '比联邦制更去中心化！没有至高无上的中央政府。各个主权社区或邦国为了共同防御或自由贸易自愿缔约联合，成员国随时保有和平退出的神圣主权。当代库尔德奥贾兰将其演化为“无国家的民主公社联合”。',
    coreTenets: [
      '主权完全下沉于基层独立成员邦或公社实体',
      '中央协调机构必须获得所有成员一致同意方能推行重大决议',
      '现代生态社会主义延伸：布克钦与奥贾兰的“民主邦联主义（Democratic Confederalism）”',
    ],
    internetReality: '叙利亚北部罗贾瓦（Rojava）库尔德人自治公社在战火中实践直接民主的传奇政治样板。',
    dailyLifeManifestation: '社区所有公共开支均由居民大会举手表决决定，任何上级部门无权强制命令。',
    keyThinkers: [
      { name: '阿卜杜拉·奥贾兰 (Abdullah Öcalan)', era: '1949-', note: '罗贾瓦民主邦联主义精神领袖' },
      { name: '默里·布克钦 (Murray Bookchin)', era: '1921-2006', note: '自由邦联主义与社会生态学' }
    ],
    famousQuote: { quote: '真正的民主绝不需要一个凌驾于人民头顶的官僚国家机器。', author: '奥贾兰' },
    spectrum: { political: 0.95, economic: -0.5, social: 0.9 },
    initialPosition: { x: -520, y: 260 }
  },

  // 135. 雅各宾主义 (Jacobinism)
  {
    id: 'jacobinism',
    name: '雅各宾主义',
    englishName: 'Jacobinism',
    category: 'political',
    color: '#38bdf8',
    period: '1793-1794年法国大革命雅各宾专政',
    eraYear: 1793,
    summary: '罗伯斯庇尔代表，主张强力中央集权、单一制共和国、消灭一切封建特权与以美德之名推行革命专政。',
    elevatorPitch: '为了保卫新生的平等共和国，必须对反革命叛逆无情铁腕！“没有美德的恐怖是有害的，没有恐怖的美德是软弱的”。以激进公意清洗一切叛乱，统一度量衡、没收贵族土地，用铁血手腕捍卫革命果实。',
    coreTenets: [
      '不可分割的单一制集权共和国（Une et Indivisible）',
      '美德与恐怖（Virtue and Terror）的革命专政结合',
      '激进世俗化：彻底剥夺教会在公共教育与政治中的一切权力',
    ],
    internetReality: '近代一切激进革命先锋队专政的政治原版，引发关于“激进启蒙如何反噬人权”的惨烈世纪反思。',
    dailyLifeManifestation: '推翻所有旧历法发明“法国大革命共和历”，将广场命名为协和广场以示彻底决裂。',
    keyThinkers: [
      { name: '马克西米连·罗伯斯庇尔', era: '1758-1794', note: '“不可腐蚀者”革命领袖' },
      { name: '路易·安托万·德·圣茹斯特', era: '1767-1794', note: '“革命大天使”' }
    ],
    famousQuote: { quote: '如果和平时期人民政府的动力是美德，那么革命时期它的动力就应当是美德与恐怖并存。', author: '罗伯斯庇尔' },
    spectrum: { political: -0.85, economic: -0.6, social: 0.5 },
    initialPosition: { x: -460, y: 310 }
  },

  // 136. 波拿巴主义 (Bonapartism)
  {
    id: 'bonapartism',
    name: '波拿巴主义',
    englishName: 'Bonapartism',
    category: 'political',
    color: '#38bdf8',
    period: '法国拿破仑一世与拿破仑三世帝国',
    eraYear: 1799,
    summary: '在社会阶级陷入相持僵局时，依靠军队武力、国家官僚、小农支持与全民公投建立的个人魅力型军事威权统治。',
    elevatorPitch: '资产阶级害怕无产阶级造反，无产阶级又尚未有能力夺权，社会在无休止的议会扯皮中濒临崩溃。此时，一个骑着战马的超阶级救世主（拿破仑）站了出来！以秩序保障者的姿态通过全民公投称帝，对内铁腕稳定，对外发动光荣战争。',
    coreTenets: [
      '阶级相持僵局下的国家相对自主性与个人独裁（马克思《雾月十八日》分析）',
      '全民公投民主（Plebiscite）包装下的个人威权军事独裁',
      '对外民族军事光荣与对内建立高效法典化官僚体制（《拿破仑法典》）',
    ],
    internetReality: '现代第三世界许多军事强人通过公投上台、既反左翼革命又打压买办财阀的典型政治标本。',
    dailyLifeManifestation: '社会动荡不安时，广大老百姓本能期盼一个“雷厉风行、铁腕治吏”的铁血军事强人出来力挽狂澜。',
    keyThinkers: [
      { name: '拿破仑·波拿巴 (Napoleon Bonaparte)', era: '1769-1821', note: '法兰西第一帝国皇帝' },
      { name: '卡尔·马克思', era: '1818-1883', note: '《路易·波拿巴的雾月十八日》经典阶级解构' }
    ],
    famousQuote: { quote: '只要宪法足够简短晦涩，行政长官便拥有无限行动的自由。', author: '拿破仑' },
    spectrum: { political: -0.8, economic: 0.2, social: -0.4 },
    initialPosition: { x: -400, y: 340 }
  },

  // 137. 议会主义 (Parliamentarism)
  {
    id: 'parliamentarism',
    name: '议会主义 / 议会内阁制',
    englishName: 'Parliamentarism',
    category: 'political',
    color: '#38bdf8',
    period: '英国威斯敏斯特体系成型至今',
    eraYear: 1721,
    summary: '主张由民选议会作为国家最高民主代议权力中心，行政内阁由议会多数党产生并对议会负责。',
    elevatorPitch: '不要将权力集中在一位不可弹劾的任期制总统手里！议会才是人民民意的熔炉。内阁总理必须每天坐在议会大厅里接受反对党议员最尖锐激烈的质询；一旦失去议会多数信任，内阁即刻辞职或解散议会重新大选。权责合一，敏捷纠错。',
    coreTenets: [
      '行政权与立法权融合（Fusion of Powers）：政府首脑直接来自民选议会多数派领袖',
      '议会至上（Parliamentary Sovereignty）：法律由议会辩论审议通过',
      '建设性的不信任动议与反对党“影子内阁”监督纠错机制',
    ],
    internetReality: '英国议会下院首相质询（PMQs）现场如同舌战群儒，在B站等平台屡屡斩获数百万爆款播放量。',
    dailyLifeManifestation: '首相政策出现重大丑闻或危机时，一周之内被党内逼宫辞职更换，无需等待四年换届。',
    keyThinkers: [
      { name: '罗伯特·沃波尔 (Robert Walpole)', era: '1676-1745', note: '英国首位实质内阁首相' },
      { name: '瓦尔特·白芝浩', era: '1826-1877', note: '英国宪制秘密之解密' }
    ],
    famousQuote: { quote: '除了把男人变成女人、把女人变成男人之外，议会无所不能。', author: '英国议会宪法格言' },
    spectrum: { political: 0.5, economic: 0.1, social: 0.5 },
    initialPosition: { x: -350, y: 220 }
  },

  // 138. 法团主义 / 统合主义 (Corporatism)
  {
    id: 'corporatism',
    name: '法团主义 / 统合主义',
    englishName: 'Corporatism',
    category: 'political',
    color: '#38bdf8',
    period: '20世纪初欧洲及二战后北欧新法团主义',
    eraYear: 1927,
    summary: '主张将社会按功能性团体（工会、雇主协会、农会等）组织起来，由国家统一协调协商以消弭阶级斗争。',
    elevatorPitch: '社会就像人体一样，大脑、双手与心脏各有其职！不要搞你死我活的阶级斗争，也不要搞零散原子化的自相残杀。把资本家雇主组织起来，把工人全国工会组织起来，坐到国家主持的三方圆桌旁，心平气和地谈妥未来三年的工资与利润分配。',
    coreTenets: [
      '功能性团体代表制取代纯粹地域性议员代表',
      '国家充当居中统合与协调的主导轴心，抑制恶性罢工与无底线压榨',
      '分为墨索里尼式的威权法团主义，与二战后北欧（瑞典模式）的民主协商法团主义',
    ],
    internetReality: '北欧高福利长久稳定繁荣的真正密码——劳资双方在全国协议下自我克制，不搞两败俱伤内耗。',
    dailyLifeManifestation: '全国工会领袖每年与全国商业协会代表闭门谈判，直接敲定未来三年全国各行业统一最低薪资涨幅。',
    keyThinkers: [
      { name: '菲利普·施密特 (Philippe Schmitter)', era: '1936-', note: '《法团主义时代仍在延续吗？》' }
    ],
    famousQuote: { quote: '三方协商胜过街头流血，社会各器官和谐共处才是国家健康之道。', author: '统合主义准则' },
    spectrum: { political: -0.4, economic: -0.4, social: -0.2 },
    initialPosition: { x: -280, y: 270 }
  },

  // 139. 精英主义 (Elitism)
  {
    id: 'elitism',
    name: '精英主义',
    englishName: 'Elitism',
    category: 'political',
    color: '#38bdf8',
    period: '20世纪初意大利学派发端',
    eraYear: 1911,
    summary: '帕累托、莫斯卡、米歇尔斯（寡头铁律）提出，认为无论宣称何种民主政体，实质统治权力永远垄断在少数组织严密的精英手中。',
    elevatorPitch: '“寡头统治铁律”：谁说组织，谁就是在说寡头统治！哪怕是一个最草根平民的政党，随着机构发展成熟，权力也必然不可逆地集中于少数职业官僚精英之手。大众往往被动、短视且信息匮乏，历史永远是“精英的墓地与轮替”。',
    coreTenets: [
      '寡头铁律（Iron Law of Oligarchy）：任何大型社会组织皆必然走向少数精英主宰',
      '狐狸型精英（善于欺骗操纵）与狮子型精英（依靠武力果断统治）的历史循环轮替',
      '民主制度的实质不是“大众治国”，而是“选民在不同精英集团之间进行竞争性选择”',
    ],
    internetReality: '欧美政客全毕业于常春藤、牛津剑桥且财阀世家联姻现实的最无情政治社会学实证。',
    dailyLifeManifestation: '看各大党派竞选辩论，发现台上争得面红耳赤的两位候选人私下里其实是同一所精英私立中学的校友同窗。',
    keyThinkers: [
      { name: '维尔弗雷多·帕累托 (Vilfredo Pareto)', era: '1848-1923', note: '精英循环理论与80/20法则' },
      { name: '加埃塔诺·莫斯卡 (Gaetano Mosca)', era: '1858-1941', note: '《统治阶级》' },
      { name: '罗伯特·米歇尔斯 (Robert Michels)', era: '1876-1936', note: '寡头铁律提出者' }
    ],
    famousQuote: { quote: '历史是贵族阶级不断更迭的墓地。', author: '帕累托' },
    spectrum: { political: -0.6, economic: 0.3, social: -0.4 },
    initialPosition: { x: -230, y: 310 }
  },

  // 140. 技术官僚主义 / 专家治国主义 (Technocracy)
  {
    id: 'technocracy',
    name: '技术官僚主义 / 专家治国',
    englishName: 'Technocracy',
    category: 'political',
    color: '#38bdf8',
    period: '1930年代美国大萧条时期提出',
    eraYear: 1932,
    summary: '凡勃伦、霍华德·斯科特创立，主张由科学家、工程师、经济学家等技术专家取代政客，依据数据与热力学科学管理社会与经济。',
    elevatorPitch: '政客懂什么？政客只懂拉票吹牛与党争分赃！现代工业文明是一座超高复杂度的巨型机器，怎能交给满嘴空话的法学文科学阀？让桥梁工程师管理交通，让资深疾控专家管理公共卫生，让算法和热力学数据取代虚妄政治口号！',
    coreTenets: [
      '以科学实证数据、工程效率与专业知识取代意识形态政治争吵',
      '用能量与资源消耗核算取代金融资本的虚幻投机泡影',
      '消除政客与财阀的贪婪短视，实现社会生产力的最优科学配置',
    ],
    internetReality: '新加坡高效廉洁行政、中国发改委与工程师治国底色，以及现代央行独立调控利率的典型写照。',
    dailyLifeManifestation: '遇到城市洪涝或空气污染，直接成立跨学科院士专家委员会，按照卫星遥感数据硬指标一键下达治理方案。',
    keyThinkers: [
      { name: '托斯丹·凡勃伦 (Thorstein Veblen)', era: '1857-1929', note: '《工程师与价格体系》' },
      { name: '霍华德·斯科特 (Howard Scott)', era: '1890-1970', note: '技术官僚运动（Technocracy Inc.）创始人' }
    ],
    famousQuote: { quote: '让掌握真实生产技能的工程师掌舵，而非任由唯利是图的金融掮客将工业巨轮撞上冰山。', author: '凡勃伦' },
    spectrum: { political: -0.3, economic: 0.2, social: 0.3 },
    initialPosition: { x: -180, y: 350 }
  }
];
