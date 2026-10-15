// Philosophical Resonance Quiz Question Engine
// 3 immersive narrative modes: 5-Q Island Survival, 10-Q Roommate Chaos, 16-Q Island Nation RPG.

export interface QuizOption {
  label?: string; // e.g. A.【大锅饭派】
  tag?: string;   // e.g. 国家社会主义 / 洛克古典自由主义
  text: string;
  alignsWith: string[];
  weights: {
    political: number; // -1 (Authoritarian/Order/State) to 1 (Libertarian/Autonomy/Decentralized)
    economic: number;  // -1 (Collectivist/Planned/Socialist) to 1 (Free Market/Private/Capitalist)
    social: number;    // -1 (Traditional/Conservative/Order) to 1 (Progressive/Pluralist/Deconstructive)
  };
}

export interface QuizQuestion {
  id: string;
  actTitle?: string; // 幕次 / 阶段
  title: string;    // 回目名称
  dimensionCategory: 'political' | 'economic' | 'social';
  dimensionLabel: string;
  scenario: string;
  options: QuizOption[];
}

export type QuizModeId = 'island_5' | 'roommate_10' | 'nation_16';

export interface QuizModeMeta {
  id: QuizModeId;
  name: string;
  title: string;
  badge: string;
  timeEstimate: string;
  desc: string;
  icon: string;
  questionCount: number;
}

export const QUIZ_MODES: QuizModeMeta[] = [
  {
    id: 'island_5',
    name: '简易速测版',
    title: '《荒岛求生5日谈》',
    badge: '5 题 · 极速 1 分钟',
    timeEstimate: '约 1 分钟',
    desc: '飞机失事沦落荒岛，面对分椰子、斗海盗、神明药丸等 5 幕生存危机，凭第一直觉秒测哲学底牌。',
    icon: '🌴',
    questionCount: 5,
  },
  {
    id: 'roommate_10',
    name: '中等吃瓜版',
    title: '《奇葩合租屋：10人别墅大乱斗》',
    badge: '10 题 · 趣味 3 分钟',
    timeEstimate: '约 3 分钟',
    desc: '告别枯燥理论！你与 9 个奇葩室友合租大别墅，从抢瑞士卷、装监控、100万彩票到AI管家，测出真实立场。',
    icon: '🍕',
    questionCount: 10,
  },
  {
    id: 'nation_16',
    name: '详尽爽文版',
    title: '《荒岛建国记：从流落荒岛到赛博飞升》',
    badge: '16 幕 · 深度 5 分钟',
    timeEstimate: '约 5 分钟',
    desc: '荒岛演进50年史诗RPG！从圈黑土地、造币危机，一直演到修金矿、全自动发条人和奇点遗诏，深度解锁专属称号。',
    icon: '👑',
    questionCount: 16,
  },
];

// =========================================================================
// 模式一：简易速测版（《荒岛求生5日谈》 · 5题 × 4选1）
// =========================================================================
export const ISLAND_5_QUESTIONS: QuizQuestion[] = [
  {
    id: 'i5_1_coconuts',
    actTitle: '第 1 天',
    title: '【分椰子危机】',
    dimensionCategory: 'economic',
    dimensionLabel: '经济分配 · 劳动与公有所有制',
    scenario: '大家忙活一天摘了100个椰子。其中2个肌肉猛男爬树摘了70个，另外7个普通人摘了30个，还有1个扭伤脚的倒霉蛋躺平一整天。晚饭怎么分？',
    options: [
      {
        label: 'A.【大锅饭派】',
        tag: '按需平均分配',
        text: '全都交公！不管谁摘的，10个人每人分10个，扭伤脚的兄弟多给1个补身子，谁也不许藏私。',
        alignsWith: ['communism', 'socialism', 'utopian_socialism'],
        weights: { political: -0.4, economic: -0.95, social: 0.2 },
      },
      {
        label: 'B.【保底发财派】',
        tag: '社民福利兜底',
        text: '肌肉猛男先从70个里拿出20个当“荒岛爱心税”，保证躺平的也有口饭吃；剩下的50个归猛男自己留着当夜宵！',
        alignsWith: ['social_democracy', 'social_liberalism', 'ordoliberalism'],
        weights: { political: 0.1, economic: -0.3, social: 0.3 },
      },
      {
        label: 'C.【凭本事派】',
        tag: '私产按劳分配',
        text: '谁摘的归谁！猛男拿走70个天经地义。那个扭脚的想吃？可以写欠条跟猛男借，等伤好了帮猛男洗三个月裤衩抵债。',
        alignsWith: ['capitalism', 'neoliberalism', 'libertarianism'],
        weights: { political: 0.3, economic: 0.95, social: -0.2 },
      },
      {
        label: 'D.【小团体派】',
        tag: '产权分封互助',
        text: '别搁一块儿算账了！把岛上的椰子树按人头分片包干，哪怕扭脚的爬不动树，可以把自己那片树林租给猛男，收点租金糊口。',
        alignsWith: ['georgism', 'distributism', 'mutualism'],
        weights: { political: 0.6, economic: 0.3, social: 0.4 },
      },
    ],
  },
  {
    id: 'i5_2_pirates',
    actTitle: '第 2 天',
    title: '【海盗与内鬼】',
    dimensionCategory: 'political',
    dimensionLabel: '政治秩序 · 公权集聚与自由自治',
    scenario: '望远镜里发现远处有海盗船晃悠，同时营地里居然有人半夜偷喝淡水！大家人心惶惶，你主张怎么管？',
    options: [
      {
        label: 'A.【铁腕岛主派】',
        tag: '霍布斯利维坦 / 铁腕威权',
        text: '非常时期别磨叽！立刻选个最狠的退伍老兵当“最高指挥官”，所有人交出物资统一听令，偷水贼直接绑树上示众三天！',
        alignsWith: ['authoritarianism', 'fascism', 'conservatism'],
        weights: { political: -0.9, economic: -0.2, social: -0.7 },
      },
      {
        label: 'B.【法治议会派】',
        tag: '宪政民主 / 程序正义',
        text: '选指挥官可以，但必须大家投票选，而且每三天重选一次；抓偷水贼必须有人证物证，大家坐下来当陪审团公开审判，不准滥用私刑。',
        alignsWith: ['liberalism', 'classical_liberalism', 'constitutionalism'],
        weights: { political: 0.6, economic: 0.1, social: 0.5 },
      },
      {
        label: 'C.【冷酷交易派】',
        tag: '自由市场安保',
        text: '选啥官啊？直接花30个椰子雇那两个肌肉猛男当“私人保镖”去守夜和打海盗，淡水桶全装上密码锁，谁交椰子谁买水喝。',
        alignsWith: ['anarcho_capitalism', 'libertarianism', 'neoliberalism'],
        weights: { political: 0.85, economic: 0.9, social: 0.0 },
      },
      {
        label: 'D.【篝火互助派】',
        tag: '无政府互助 / 德治自治',
        text: '谁也别想当官管我！大家围着篝火凭良心轮流守夜；偷水贼肯定是因为太渴了，跟他好好谈心感化他，实在合不来允许他自己搬去山洞住。',
        alignsWith: ['anarchism', 'mutualism', 'existentialism'],
        weights: { political: 0.95, economic: -0.5, social: 0.8 },
      },
    ],
  },
  {
    id: 'i5_3_neighbors',
    actTitle: '第 3 天',
    title: '【奇葩山洞邻居】',
    dimensionCategory: 'social',
    dimensionLabel: '社会文化 · 传统礼俗与先锋多元',
    scenario: '岛东头山洞里住着一对行为艺术情侣，天天不穿衣服画人体彩绘、对着月亮唱怪歌，还不肯生孩子。岛西头的传统大叔气坏了，要带人去把他们衣服穿上。你站哪边？',
    options: [
      {
        label: 'A.【大叔整风派】',
        tag: '社会保守主义',
        text: '伤风败俗！荒岛就剩10个人了，不传宗接代、不好好干活怎么延续香火？必须立下《荒岛家规》，强迫他们穿好衣服去种地。',
        alignsWith: ['conservatism', 'traditionalism', 'nationalism'],
        weights: { political: -0.6, economic: 0.0, social: -0.9 },
      },
      {
        label: 'B.【井水不犯河水派】',
        tag: '消极自由 / 权界论',
        text: '人家在自己山洞里爱光着屁股还是倒立唱歌，只要没跑到你帐篷门口吵你睡觉，谁也管不着！',
        alignsWith: ['classical_liberalism', 'libertarianism', 'individualism'],
        weights: { political: 0.6, economic: 0.2, social: 0.5 },
      },
      {
        label: 'C.【多元狂欢派】',
        tag: '后现代激进多元',
        text: '太酷了吧！传统大叔就是脑子封建！我们不仅要保护这对情侣，还要在岛中央办“荒岛先锋艺术节”，鼓励大家解放天性！',
        alignsWith: ['postmodernism', 'dadaism', 'queer_theory'],
        weights: { political: 0.5, economic: -0.1, social: 0.95 },
      },
      {
        label: 'D.【温情劝和派】',
        tag: '社群调和主义',
        text: '别动手打架嘛。去劝情侣平时出来打水时披件树叶照顾下大叔的感受，再劝大叔尊重年轻人的爱好，大家和气生财。',
        alignsWith: ['communitarianism', 'pragmatism', 'confucianism'],
        weights: { political: 0.1, economic: 0.0, social: 0.1 },
      },
    ],
  },
  {
    id: 'i5_4_relics',
    actTitle: '第 4 天',
    title: '【神明的两颗药丸】',
    dimensionCategory: 'social',
    dimensionLabel: '价值追求 · 科技加速、平稳与无为',
    scenario: '夜里荒岛神明显灵，手里托着四样宝物，只准全岛挑一样。你投给哪个？',
    options: [
      {
        label: 'A.【养老金饭票】',
        tag: '温饱平稳社保',
        text: '一口永远捞不完鱼虾的“大铁锅”。代价是全岛人一辈子平平淡淡，再也造不出船离开这座岛。',
        alignsWith: ['social_democracy', 'collectivism', 'traditionalism'],
        weights: { political: -0.3, economic: -0.7, social: -0.5 },
      },
      {
        label: 'B.【超人改造针】',
        tag: '有效加速 / 超人类',
        text: '一针下去全员智商翻倍、不用睡觉、力大无穷，能徒手把荒岛改造成赛博都市，但有一半人打针后会变成没有感情的冷血机器。',
        alignsWith: ['transhumanism', 'accelerationism', 'technocracy'],
        weights: { political: 0.1, economic: 0.6, social: 0.9 },
      },
      {
        label: 'C.【逍遥忘忧草】',
        tag: '道家自然 / 恬淡安乐',
        text: '一座鸟语花香的世外桃源山谷，吃了里面的果子就不再有贪婪、焦虑和痛苦，每天晒太阳听风声，与世无争地老去。',
        alignsWith: ['taoism', 'stoicism', 'epicureanism'],
        weights: { political: 0.5, economic: -0.4, social: -0.2 },
      },
      {
        label: 'D.【破浪探险船】',
        tag: '尼采意志 / 狂野探险',
        text: '一艘结实的帆船和一张充满未知危险的星辰海图。外面可能有黄金新大陆，也可能出门三天就喂了深海巨妖。',
        alignsWith: ['existentialism', 'individualism', 'romanticism'],
        weights: { political: 0.8, economic: 0.5, social: 0.7 },
      },
    ],
  },
  {
    id: 'i5_5_lifeboat',
    actTitle: '第 5 天',
    title: '【救生艇的最后一张票】',
    dimensionCategory: 'political',
    dimensionLabel: '正义准则 · 绝对平等、功利与弱者优先',
    scenario: '一艘路过的救援小艇只能带走8个人，留下的2个人必须独自在岛上再熬一年等下一班船。怎么决定谁留下来？',
    options: [
      {
        label: 'A.【抽签天命派】',
        tag: '程序无知之幕',
        text: '绝对公平！10个人无论老幼强弱全部抓阄，哪怕抽中孕妇和小孩也认命，谁也别搞道德绑架。',
        alignsWith: ['kantianism', 'liberalism'],
        weights: { political: 0.3, economic: 0.0, social: 0.2 },
      },
      {
        label: 'B.【功利算账派】',
        tag: '效用主义 / 精英贡献',
        text: '让那2个年纪最大、或者对社会贡献最小的人留下！救走8个青壮年科学家和医生，未来能给人类创造最大价值。',
        alignsWith: ['utilitarianism', 'technocracy', 'scientism'],
        weights: { political: -0.6, economic: 0.4, social: 0.3 },
      },
      {
        label: 'C.【妇孺优先派】',
        tag: '传统骑士德性 / 罗尔斯扶弱',
        text: '弱者优先、强者殿后！老人、病人和妇女先上船，最强壮的2个人发挥骑士精神主动留守。',
        alignsWith: ['humanism', 'conservatism', 'social_democracy'],
        weights: { political: 0.0, economic: -0.5, social: -0.4 },
      },
      {
        label: 'D.【竞拍赎买派】',
        tag: '自由市场自愿交易',
        text: '拍卖船票！想先走的人拿出自己在岛上攒的珍珠和椰子补偿给愿意留下的人，重赏之下必有勇夫。',
        alignsWith: ['anarcho_capitalism', 'neoliberalism', 'capitalism'],
        weights: { political: 0.7, economic: 0.95, social: 0.1 },
      },
    ],
  },
];

// =========================================================================
// 模式二：中等吃瓜版（《奇葩合租屋：10人别墅大乱斗》 · 10题 × 4选1）
// =========================================================================
export const ROOMMATE_10_QUESTIONS: QuizQuestion[] = [
  {
    id: 'r10_1_swiss_roll',
    actTitle: '事件 1',
    title: '【瑞士卷惨案】',
    dimensionCategory: 'economic',
    dimensionLabel: '经济维度 · 产权私有与按需均分',
    scenario: '冰箱里最后一盒8个瑞士卷，被经常欠房租的失业室友小王一口气炫了6个。赚钱最多、买瑞士卷的精英室友老张当场发飙。你怎么判？',
    options: [
      {
        label: 'A.【古典产权论】',
        tag: '洛克私产不可侵犯',
        text: '老张花钱买的，别说分不分，老张就是当场扔进垃圾桶小王也管不着！小王立刻按原价双倍赔钱！',
        alignsWith: ['classical_liberalism', 'libertarianism', 'capitalism'],
        weights: { political: 0.4, economic: 0.95, social: -0.2 },
      },
      {
        label: 'B.【共产平均派】',
        tag: '公有制 / 按需索取',
        text: '大家住一个屋檐下，小王都饿了三天了，老张那么有钱计较啥？以后冰箱食物全部充公，按肚皮大小平分！',
        alignsWith: ['communism', 'socialism', 'utopian_socialism'],
        weights: { political: -0.5, economic: -0.95, social: 0.2 },
      },
      {
        label: 'C.【福利兜底派】',
        tag: '社会自由主义 / 基础保障',
        text: '个人买的零食归个人，但规定每个室友每月交200块“公寓零食基金”，专门在冰箱第一层放免费面包给没钱的室友垫肚子。',
        alignsWith: ['social_liberalism', 'social_democracy', 'ordoliberalism'],
        weights: { political: 0.1, economic: -0.3, social: 0.4 },
      },
      {
        label: 'D.【社群互助派】',
        tag: '互助主义 / 社群调解',
        text: '别吵了，我把自己买的泡面分给小王吃，但小王明天得帮老张把车洗了抵债。',
        alignsWith: ['mutualism', 'communitarianism', 'distributism'],
        weights: { political: 0.5, economic: 0.1, social: 0.2 },
      },
    ],
  },
  {
    id: 'r10_2_living_room',
    actTitle: '事件 2',
    title: '【客厅圈地运动】',
    dimensionCategory: 'economic',
    dimensionLabel: '经济公地 · 公共空间与租金补偿',
    scenario: '酷爱健身的壮汉室友把一楼公共大客厅用屏风围了起来，放满他的私教器械，宣布以后大家看电视、过路都要交5块钱“场地维护费”。你会？',
    options: [
      {
        label: 'A.【强权资本派】',
        tag: '寡头强权资本',
        text: '他力气大、器械也是他掏钱买的，交5块钱还能顺便撸铁，挺划算的，忍了！',
        alignsWith: ['authoritarianism', 'capitalism'],
        weights: { political: -0.7, economic: 0.8, social: -0.4 },
      },
      {
        label: 'B.【公有化没收】',
        tag: '剥夺剥夺者',
        text: '客厅是全楼公摊面积！他敢放器械收钱，我就敢把他的哑铃全收归全楼共有，大家免费练！',
        alignsWith: ['marxism_leninism', 'communism', 'syndicalism'],
        weights: { political: -0.4, economic: -0.95, social: 0.3 },
      },
      {
        label: 'C.【地租均分派】',
        tag: '乔治主义 / 地租归公',
        text: '器械所有权归他，但他占用了公共客厅，必须每天向其他9个室友每人发10块钱“占地补偿红包”，否则滚回自己卧室练！',
        alignsWith: ['georgism', 'distributism', 'social_democracy'],
        weights: { political: 0.2, economic: -0.2, social: 0.4 },
      },
      {
        label: 'D.【均分格子派】',
        tag: '小资产分配主义',
        text: '召集全楼室友按手印立规矩：任何人占公共区域不得超过1平米，把大客厅拆成10个1平米的小格子，一人一块。',
        alignsWith: ['distributism', 'mutualism'],
        weights: { political: 0.5, economic: 0.2, social: 0.1 },
      },
    ],
  },
  {
    id: 'r10_3_cctv',
    actTitle: '事件 3',
    title: '【外卖失窃与摄像头】',
    dimensionCategory: 'political',
    dimensionLabel: '政治公权 · 监控维稳与隐私底线',
    scenario: '公寓门口接连丢了三次麻辣烫。室友老李提议：在走廊、客厅、厨房甚至卧室门口装满360度高清录音摄像头，全员手机可查。你同意吗？',
    options: [
      {
        label: 'A.【安全至上派】',
        tag: '霍布斯安全至上 / 全景监控',
        text: '举双手赞成！不做亏心事不怕鬼敲门，为了守护我的麻辣烫，恨不得连厕所门口都装上！',
        alignsWith: ['authoritarianism', 'totalitarianism', 'conservatism'],
        weights: { political: -0.95, economic: 0.0, social: -0.7 },
      },
      {
        label: 'B.【隐私不可侵犯】',
        tag: '公民自由意志主义',
        text: '坚决反对！为了一碗20块的麻辣烫，让我每天穿裤衩出来倒水都被全楼围观？宁可外卖被偷也不装！',
        alignsWith: ['libertarianism', 'classical_liberalism', 'individualism'],
        weights: { political: 0.95, economic: 0.3, social: 0.7 },
      },
      {
        label: 'C.【程序制衡派】',
        tag: '宪政法治严格授权',
        text: '只能在大门外装一个，而且录像加密锁死，只有真的丢了东西、且超过半数室友签字同意时，才能调阅那5分钟的画面。',
        alignsWith: ['constitutionalism', 'liberalism'],
        weights: { political: 0.4, economic: 0.0, social: 0.4 },
      },
      {
        label: 'D.【技术方案派】',
        tag: '技术实用主义',
        text: '装啥监控啊，直接花钱在门口请个保安大爷，或者买个带指纹锁的保温外卖柜不就完了？',
        alignsWith: ['pragmatism', 'technocracy'],
        weights: { political: 0.2, economic: 0.4, social: 0.2 },
      },
    ],
  },
  {
    id: 'r10_4_cleaning',
    actTitle: '事件 4',
    title: '【扫地排班大罢工】',
    dimensionCategory: 'political',
    dimensionLabel: '公共治理 · 铁腕考核、算法还是自律',
    scenario: '公寓卫生太差，大家决定选个“楼长”管卫生。下面4个候选人，你把票投给谁？',
    options: [
      {
        label: 'A.【军训教官老赵】',
        tag: '法家严刑峻法',
        text: '“选我！每天早上6点吹哨集合搞卫生，谁敢把头发掉地漏里，直接罚扫厕所一个月！”',
        alignsWith: ['authoritarianism', 'fascism'],
        weights: { political: -0.9, economic: -0.1, social: -0.8 },
      },
      {
        label: 'B.【精算师小陈】',
        tag: '技术官僚 / 市场机制',
        text: '“选我！我用Excel和算法精确计算每个人每天制造垃圾的克数，折算成保洁费自动从微信扣款请阿姨。”',
        alignsWith: ['technocracy', 'neoliberalism', 'positivism'],
        weights: { political: 0.2, economic: 0.7, social: 0.3 },
      },
      {
        label: 'C.【热心大姐刘姨】',
        tag: '儒家德治 / 社群温情',
        text: '“咱们不搞罚款那套，刘姨带头扫，大家像一家人一样自觉搭把手，谁不扫大家在饭桌上说说他。”',
        alignsWith: ['communitarianism', 'confucianism'],
        weights: { political: -0.2, economic: -0.2, social: -0.4 },
      },
      {
        label: 'D.【朋克青年阿杰】',
        tag: '无政府个人主义',
        text: '“选个屁的楼长！谁看地板脏不顺眼谁自己扫，看不顺眼又不想扫就搬走，拒绝一切官威！”',
        alignsWith: ['anarchism', 'individualism', 'existentialism'],
        weights: { political: 0.95, economic: 0.1, social: 0.8 },
      },
    ],
  },
  {
    id: 'r10_5_party_vs_study',
    actTitle: '事件 5',
    title: '【深夜轰趴 vs. 晨读背书】',
    dimensionCategory: 'social',
    dimensionLabel: '文化规范 · 正统秩序与多元先锋',
    scenario: '二楼住着搞摇滚的纹身情侣，半夜1点还在客厅弹吉他喝啤酒；三楼住着考公的传统学霸，要求全楼晚上9点必须断网熄灯、禁止奇装异服。你支持谁？',
    options: [
      {
        label: 'A.【严守正气派】',
        tag: '社会保守道德秩序',
        text: '支持学霸！公寓要有公寓的正气，熬夜喝酒、奇装异服带坏风气，必须严格执行9点宵禁！',
        alignsWith: ['conservatism', 'traditionalism', 'platonism'],
        weights: { political: -0.7, economic: 0.0, social: -0.95 },
      },
      {
        label: 'B.【行乐自由派】',
        tag: '享乐主义 / 先锋反叛',
        text: '支持摇滚情侣！人生苦短及时行乐，学霸嫌吵自己戴降噪耳机去图书馆住，别拿老干部作风绑架别人！',
        alignsWith: ['hedonism', 'dadaism', 'romanticism'],
        weights: { political: 0.6, economic: 0.1, social: 0.9 },
      },
      {
        label: 'C.【群己权界派】',
        tag: '密尔自由主义契约',
        text: '划定楚河汉界：给地下室装上隔音棉让情侣随便嗨，二楼三楼晚上11点后严禁超过40分贝，互不干涉。',
        alignsWith: ['classical_liberalism', 'liberalism'],
        weights: { political: 0.4, economic: 0.1, social: 0.3 },
      },
      {
        label: 'D.【解构批判派】',
        tag: '法兰克福学派批判理论',
        text: '两个都烦！摇滚情侣是消费主义培养出来的虚无废青，考公学霸是体制规训出来的做题机器，全楼应该一起坐下来开批判会！',
        alignsWith: ['critical_theory', 'postmodernism', 'structuralism'],
        weights: { political: 0.5, economic: -0.5, social: 0.7 },
      },
    ],
  },
  {
    id: 'r10_6_refugees',
    actTitle: '事件 6',
    title: '【隔壁火灾难民】',
    dimensionCategory: 'political',
    dimensionLabel: '国际本土 · 普遍人道与本土自保',
    scenario: '半夜隔壁栋别墅着火烧塌了，15个衣衫褴褛的邻居敲门求收留，但你们别墅本来就只有10张床，存粮也只够吃一周。你开门吗？',
    options: [
      {
        label: 'A.【本土优先派】',
        tag: '本土保护主义',
        text: '不开！最多从窗户扔两床旧被子和两桶泡面出去。把15个人放进来，明天我们自己都没地方睡、没饭吃了！',
        alignsWith: ['nationalism', 'conservatism'],
        weights: { political: -0.5, economic: 0.2, social: -0.8 },
      },
      {
        label: 'B.【世界博爱派】',
        tag: '世界主义 / 普世人道',
        text: '全部开门迎进来！大家挤一挤睡地板，哪怕我们每天少吃两顿饭，也不能眼睁睁看着同类冻死在外面！',
        alignsWith: ['cosmopolitanism', 'humanism'],
        weights: { political: 0.5, economic: -0.6, social: 0.8 },
      },
      {
        label: 'C.【优选门槛派】',
        tag: '新自由主义功利筛选',
        text: '挑里面会做饭、会修水电或者交得起房租的5个人放进来住杂物间，其他人让他们去找居委会。',
        alignsWith: ['neoliberalism', 'utilitarianism'],
        weights: { political: 0.1, economic: 0.8, social: -0.2 },
      },
      {
        label: 'D.【联合反击派】',
        tag: '国际阶级斗争',
        text: '放进来！而且隔壁着火是因为黑心房东用了劣质电线，明天我们10个人联合这15个难民，一起去抄了黑心房东的家分他的大豪宅！',
        alignsWith: ['marxism', 'socialism', 'anarcho_syndicalism'],
        weights: { political: 0.3, economic: -0.9, social: 0.9 },
      },
    ],
  },
  {
    id: 'r10_7_lottery',
    actTitle: '事件 7',
    title: '【100万合买彩票】',
    dimensionCategory: 'economic',
    dimensionLabel: '财富运用 · 个人私分、社会保障或利他',
    scenario: '全楼10个人每人凑了2块钱买了一张彩票，居然真中了100万（税后）！这笔巨款怎么花，大家吵翻了天，你的方案是？',
    options: [
      {
        label: 'A.【直接平分变现】',
        tag: '自由市场私权至上',
        text: '一秒钟都别留在公账上！立刻每人分10万现金打进个人银行卡，谁爱买包买包，谁爱炒股炒股。',
        alignsWith: ['libertarianism', 'neoliberalism', 'capitalism'],
        weights: { political: 0.5, economic: 0.95, social: 0.0 },
      },
      {
        label: 'B.【终身福利基金】',
        tag: '北欧高福利公积金',
        text: '一分钱都不准私分！全部用来把别墅翻修成恒温泳池豪宅、买全套顶级医疗保险，大家一辈子吃穿看病全包！',
        alignsWith: ['social_democracy', 'collectivism'],
        weights: { political: -0.3, economic: -0.9, social: 0.2 },
      },
      {
        label: 'C.【合作社公社】',
        tag: '空想社会主义公社',
        text: '拿出80万给别墅装太阳能发电板、种有机菜园、开一家全楼合股的咖啡馆，用钱生钱，以后全楼都不用出去打工了！',
        alignsWith: ['utopian_socialism', 'syndicalism', 'distributism'],
        weights: { political: 0.4, economic: -0.6, social: 0.6 },
      },
      {
        label: 'D.【全球有效利他】',
        tag: '彼得·辛格有效利他主义',
        text: '我们10个人有手有脚要这横财干嘛？把100万全部捐给非洲买防疟疾蚊帐，这100万在那边能整整救活300条人命！',
        alignsWith: ['effective_altruism', 'utilitarianism', 'humanism'],
        weights: { political: 0.2, economic: -0.3, social: 0.95 },
      },
    ],
  },
  {
    id: 'r10_8_trolley_cat',
    actTitle: '事件 8',
    title: '【病猫与学费的电车难题】',
    dimensionCategory: 'social',
    dimensionLabel: '伦理价值 · 人本功利、生态平权与契约',
    scenario: '公寓公款账上还剩最后1万块钱。这时公寓团宠流浪猫“咪咪”出了车祸要1万块手术费救命；同时失业室友小王报名的技能培训班也刚好差1万块学费，上了班就能月薪过万。钱给谁？',
    options: [
      {
        label: 'A.【投资回报率】',
        tag: '人类中心功利投资',
        text: '给小王交学费！人是万物之灵，猫再可爱也是畜生，而且小王赚了钱以后能连本带利还给公寓，投资回报率最高！',
        alignsWith: ['humanism', 'utilitarianism', 'capitalism'],
        weights: { political: 0.1, economic: 0.7, social: -0.2 },
      },
      {
        label: 'B.【生命无价派】',
        tag: '深层生态 / 动物平权',
        text: '救咪咪！生命是无价且平等的，咪咪是一条马上要死掉的活生生的命，小王没钱上学顶多再去送半年外卖，不能见死不救！',
        alignsWith: ['ecologism', 'deep_ecology'],
        weights: { political: 0.3, economic: -0.4, social: 0.9 },
      },
      {
        label: 'C.【契约死板派】',
        tag: '康德规则义务论',
        text: '当初大家交公款时合同里写的是“公寓维修与应急基金”，既没写救猫也没写交学费，按规矩谁也不给，严格按合同办事！',
        alignsWith: ['kantianism', 'constitutionalism'],
        weights: { political: 0.2, economic: 0.1, social: -0.5 },
      },
      {
        label: 'D.【对半和稀泥】',
        tag: '折中实用主义',
        text: '一人5000块！小王去报个便宜点的班，咪咪找个兽医打点止痛针听天由命，绝不偏袒任何一方。',
        alignsWith: ['pragmatism', 'communitarianism'],
        weights: { political: 0.1, economic: 0.0, social: 0.1 },
      },
    ],
  },
  {
    id: 'r10_9_ai_butler',
    actTitle: '事件 9',
    title: '【全能AI管家来了】',
    dimensionCategory: 'social',
    dimensionLabel: '科技伦理 · 算法规训、卢德抗拒与超人类',
    scenario: '科技公司送来一台免费的超级AI机器人“大白”。它不仅能包揽全楼做饭扫地，还能通过分析心率强制你戒烟、退乱买的快递、甚至自动帮你相亲。你怎么用它？',
    options: [
      {
        label: 'A.【全面臣服躺平】',
        tag: '数据主义 / 全自动奢华共产',
        text: '太爽了！把公寓钥匙、财政大权和手机密码全交它！我智商没它高，听大白的安排准没错，人类彻底躺平享福！',
        alignsWith: ['technocracy', 'accelerationism'],
        weights: { political: -0.8, economic: -0.5, social: 0.9 },
      },
      {
        label: 'B.【铁锤砸碎它】',
        tag: '新卢德主义 / 斯多葛自省',
        text: '坚决拿锤子把它砸烂扔出去！今天它替你做饭退快递，明天人就彻底变成离开机器活不了的废人了！自己的马桶自己刷！',
        alignsWith: ['stoicism', 'existentialism', 'traditionalism'],
        weights: { political: 0.6, economic: 0.0, social: -0.8 },
      },
      {
        label: 'C.【锁死工具属性】',
        tag: '人文主义工具论',
        text: '把它的“相亲匹配”和“退快递”芯片拔掉！只准它在厨房当没有感情的炒菜机器，敢多管闲事立刻断电。',
        alignsWith: ['humanism', 'liberalism'],
        weights: { political: 0.3, economic: 0.2, social: 0.1 },
      },
      {
        label: 'D.【脑机接口飞升】',
        tag: '赛博超人类 / 个人加速',
        text: '让大白把它的源代码和炒股算法共享给我，我跟大白合体接上脑机接口，把其他9个笨蛋室友的钱全赚过来！',
        alignsWith: ['transhumanism', 'accelerationism', 'cybernetics'],
        weights: { political: 0.7, economic: 0.9, social: 0.95 },
      },
    ],
  },
  {
    id: 'r10_10_farewell_dinner',
    actTitle: '事件 10',
    title: '【散伙饭的哲学拷问】',
    dimensionCategory: 'social',
    dimensionLabel: '终极意义 · 虚无荒谬、传统、超人或自然',
    scenario: '一年合租期满，今晚是最后一顿散伙火锅。喝高了之后，大家聊起“人活一辈子到底图啥”，你会举起酒杯说哪句话？',
    options: [
      {
        label: 'A.【加缪式干杯】',
        tag: '加缪荒诞存在主义',
        text: '“图个啥？人生本来就是一场毫无意义的荒诞剧！但哪怕明天地球爆炸，今晚这片毛肚我也得涮够七上八下，干杯！”',
        alignsWith: ['existentialism', 'absurdism', 'nihilism'],
        weights: { political: 0.6, economic: 0.0, social: 0.8 },
      },
      {
        label: 'B.【家和万事兴】',
        tag: '儒家传统人文',
        text: '“图个老婆孩子热炕头，父母安康、朋友有义，守住老祖宗传下来的良心与本分，平平安安就是福！”',
        alignsWith: ['confucianism', 'traditionalism', 'conservatism'],
        weights: { political: -0.3, economic: 0.0, social: -0.85 },
      },
      {
        label: 'C.【站上金字塔尖】',
        tag: '尼采超人 / 英雄客观主义',
        text: '“图个轰轰烈烈！要么赚它十个亿站上金字塔尖，要么用科技改变人类历史，平庸的人生根本不值得过！”',
        alignsWith: ['individualism', 'accelerationism', 'capitalism'],
        weights: { political: 0.5, economic: 0.9, social: 0.6 },
      },
      {
        label: 'D.【归隐云卷云舒】',
        tag: '庄子道家自然 / 犬儒反内卷',
        text: '“图个心里清静！少点欲望、少点内卷，去山里种两亩地、看云卷云舒，别被这花花世界的消费主义骗了！”',
        alignsWith: ['taoism', 'cynicism', 'stoicism'],
        weights: { political: 0.7, economic: -0.4, social: -0.3 },
      },
    ],
  },
];

// =========================================================================
// 模式三：最详尽爽文版（《荒岛建国记：从流落荒岛到赛博飞升》 · 16幕连载剧场 × 5选1）
// =========================================================================
export const NATION_16_QUESTIONS: QuizQuestion[] = [
  // 第一幕：荒岛拓荒期
  {
    id: 'n16_1_farmland',
    actTitle: '第一幕：荒岛拓荒期',
    title: '第 1 回【黑土地抢地案】',
    dimensionCategory: 'economic',
    dimensionLabel: '土地制度与初次分配',
    scenario: '岛上只有北边有一片肥沃的黑土地。最早醒来的两个聪明人趁大家还在沙滩上吐海水，用树枝把整片黑土地全圈了，宣布以后谁来种地都要把收成的一半孝敬他俩。大家找你评理，你一拍大腿：',
    options: [
      {
        label: 'A. 洛克古典自由主义',
        tag: '先占原则 / 自由产权',
        text: '“先到先得，愿赌服输！人家脑子快先圈上的就是人家的私产，你们嫌租金贵自己去啃南边的沙子！”',
        alignsWith: ['classical_liberalism', 'libertarianism', 'capitalism'],
        weights: { political: 0.4, economic: 0.95, social: -0.1 },
      },
      {
        label: 'B. 马克思科学社会主义',
        tag: '生产资料公有制',
        text: '“把树枝给我全拔了！黑土地归全岛10个人共有，大家一起下地干活，收上来的红薯按工分发！”',
        alignsWith: ['marxism', 'socialism', 'communism'],
        weights: { political: -0.4, economic: -0.95, social: 0.3 },
      },
      {
        label: 'C. 乔治主义 / 平均地权',
        tag: '地皮税还富于民',
        text: '“地谁种得最好就归谁管，种出来的红薯归他自己；但土地是老天爷给的，占黑土地的人每年必须交500斤红薯当地皮税，平分给没地的人！”',
        alignsWith: ['georgism', 'social_democracy'],
        weights: { political: 0.2, economic: -0.2, social: 0.4 },
      },
      {
        label: 'D. 切斯特顿分配主义',
        tag: '广泛小私产',
        text: '“拿尺子来！把黑土地平均切成10小块，每人分一块永久自留地，严禁互相买卖兼并，谁也别想当地主！”',
        alignsWith: ['distributism', 'communitarianism'],
        weights: { political: 0.3, economic: 0.1, social: -0.2 },
      },
      {
        label: 'E. 普鲁东无政府互助主义',
        tag: '占有即使用',
        text: '“别分地契了！地就摆在那儿，谁今天去锄草播种，那块地今年就归谁用；明年他懒得种了，别人直接接着种！”',
        alignsWith: ['mutualism', 'anarchism'],
        weights: { political: 0.9, economic: -0.5, social: 0.6 },
      },
    ],
  },
  {
    id: 'n16_2_currency',
    actTitle: '第一幕：荒岛拓荒期',
    title: '第 2 回【贝壳贬值与烂尾房】',
    dimensionCategory: 'economic',
    dimensionLabel: '货币哲学与经济危机救市',
    scenario: '第3年，大家用“彩色贝壳”当钱做买卖。结果奸商拼命去海滩捡贝壳导致物价飞涨；造独木舟的作坊倒闭，一半岛民失业抱着椰子卖不出去，眼看要饿肚子。你怎么救市？',
    options: [
      {
        label: 'A. 奥地利学派 (哈耶克/米塞斯)',
        tag: '自由出清 / 拒绝救市',
        text: '“千万别救！物价乱涨就是因为贝壳捡太多了，让那些烂作坊破产倒闭，痛一阵子市场自己就会恢复正常！”',
        alignsWith: ['austrian_economics', 'neoliberalism', 'libertarianism'],
        weights: { political: 0.7, economic: 0.95, social: 0.0 },
      },
      {
        label: 'B. 凯恩斯主义宏观干预',
        tag: '公共基建 / 创造有效需求',
        text: '“岛政府出面借贝壳！立刻雇所有失业岛民去挖环岛运河、修灯塔，给他们发工资去买椰子，把场子热起来！”',
        alignsWith: ['social_democracy', 'social_liberalism'],
        weights: { political: -0.2, economic: -0.4, social: 0.3 },
      },
      {
        label: 'C. 弗里德曼货币主义 + UBI',
        tag: '单一货币规则与无条件低保',
        text: '“把海滩封了！每年严格只准新捡100枚贝壳，同时每个月固定给全岛每个人发20枚贝壳当低保，不干活也有饭吃！”',
        alignsWith: ['monetarism', 'social_liberalism'],
        weights: { political: 0.1, economic: 0.2, social: 0.5 },
      },
      {
        label: 'D. MMT 现代货币理论',
        tag: '主权信用货币扩张',
        text: '“贝壳算个啥？直接改用岛政府盖章的树叶券当钱！只要树叶是我们自己印的，政府就永远不会破产，缺钱就直接印树叶雇大家干活！”',
        alignsWith: ['state_capitalism', 'socialism'],
        weights: { political: -0.6, economic: -0.6, social: 0.4 },
      },
      {
        label: 'E. 斯大林指令性计划经济',
        tag: '消灭商品买卖 / 凭票配给',
        text: '“废除贝壳和买卖！以后全岛每天打多少鱼、摘多少果子，全部由岛中心算盘房统一计划、凭票供应！”',
        alignsWith: ['communism', 'marxism_leninism'],
        weights: { political: -0.95, economic: -0.98, social: -0.5 },
      },
    ],
  },
  {
    id: 'n16_3_monopoly',
    actTitle: '第一幕：荒岛拓荒期',
    title: '第 3 回【鱼霸天垄断案】',
    dimensionCategory: 'economic',
    dimensionLabel: '反垄断与生产组织形态',
    scenario: '第5年，捕鱼能手“鱼霸天”造了全岛唯一的大渔网，先把鱼价压到极低挤垮了所有钓鱼散户，接着把鱼价暴涨10倍，还逼手下的划船工每天干16个小时。你如何出手？',
    options: [
      {
        label: 'A. 安·兰德客观主义',
        tag: '资本巨头神圣不可侵犯',
        text: '“人家鱼霸天凭本事织的网，嫌鱼贵你们可以自己下海摸虾嘛！政府要是眼红去抢他的网，以后谁还搞发明？”',
        alignsWith: ['capitalism', 'libertarianism'],
        weights: { political: 0.6, economic: 0.95, social: 0.2 },
      },
      {
        label: 'B. 德国秩序自由主义',
        tag: '强力反垄断 / 维护竞争秩序',
        text: '“市场可以自由，但绝不准垄断！立刻强行把鱼霸天的大渔网剪成5张小网，分给5家渔船互相压价竞争！”',
        alignsWith: ['ordoliberalism', 'social_liberalism'],
        weights: { political: 0.1, economic: 0.4, social: 0.2 },
      },
      {
        label: 'C. 国家资本主义 / 指导主义',
        tag: '官督商办 / 控股龙头',
        text: '“网不用剪，但岛政府强行入股51%，派个干部去当渔船政委，利润一半上交全岛金库，剩下的让他继续管！”',
        alignsWith: ['state_capitalism', 'corporatism'],
        weights: { political: -0.7, economic: -0.3, social: -0.2 },
      },
      {
        label: 'D. 铁托工人自治社会主义',
        tag: '生产车间民主自治',
        text: '“把鱼霸天踢下船！这条大渔船直接交给船上的10个划船工自己投票管理，卖鱼赚的钱划船工自己分！”',
        alignsWith: ['democratic_socialism', 'syndicalism'],
        weights: { political: 0.4, economic: -0.8, social: 0.5 },
      },
      {
        label: 'E. 无政府工团主义',
        tag: '总工会大罢工接管',
        text: '“全岛划船工、摘果工立刻联合大罢工！不给鱼霸天送一颗粮食，逼他把渔网交出来归全岛工会调配！”',
        alignsWith: ['anarcho_syndicalism', 'syndicalism'],
        weights: { political: 0.8, economic: -0.9, social: 0.7 },
      },
    ],
  },

  // 第二幕：风浪与权杖期
  {
    id: 'n16_4_plague',
    actTitle: '第二幕：风浪与权杖期',
    title: '第 4 回【怪病袭岛与封门令】',
    dimensionCategory: 'political',
    dimensionLabel: '紧急状态与公权力边界',
    scenario: '第8年，岛上爆发“绿脸怪病”，传染极快。巫医和郎中建议你立刻下令：全岛所有人钉死房门隔离一个月，派巡逻队拿木棍上街，谁敢出门透气直接打断腿。你签不签这道命令？',
    options: [
      {
        label: 'A. 霍布斯绝对主权论',
        tag: '乱世重典 / 生存至上',
        text: '“签！保命要紧！这时候谁跟老子谈自由就是找死，巡逻队听我一人号令，乱世当用重典！”',
        alignsWith: ['authoritarianism', 'totalitarianism'],
        weights: { political: -0.95, economic: 0.0, social: -0.8 },
      },
      {
        label: 'B. 洛克宪政共和主义',
        tag: '程序授权 / 限期制衡',
        text: '“可以封控，但必须先召集全岛代表举手通过，最多封14天；如果巡逻队敢乱打人，事后必须受全岛公审！”',
        alignsWith: ['constitutionalism', 'liberalism'],
        weights: { political: 0.4, economic: 0.0, social: 0.4 },
      },
      {
        label: 'C. 塞勒行为助推论',
        tag: '自由意志家长制',
        text: '“别拿木棍钉死门！免费给大家发草药口罩，谁自觉待在家里满14天奖励10个大椰子，用奖励哄着大家配合。”',
        alignsWith: ['pragmatism', 'social_liberalism'],
        weights: { political: 0.1, economic: 0.1, social: 0.3 },
      },
      {
        label: 'D. 极端自由意志派',
        tag: '消极自由 / 生死自负',
        text: '“坚决不封！怕死的人自己躲山洞里别出来，不怕死的人照样下海捕鱼开集市，生死自负，官府少管！”',
        alignsWith: ['libertarianism', 'individualism'],
        weights: { political: 0.95, economic: 0.8, social: 0.2 },
      },
      {
        label: 'E. 布克钦自由意志市政主义',
        tag: '邻里街坊横向自决',
        text: '“不用官府派巡逻队，让东村、西村的街坊邻居自己开会商量怎么互助送饭、怎么看大门口，相信群众！”',
        alignsWith: ['anarchism', 'communitarianism'],
        weights: { political: 0.9, economic: -0.4, social: 0.8 },
      },
    ],
  },
  {
    id: 'n16_5_protest',
    actTitle: '第二幕：风浪与权杖期',
    title: '第 5 回【砸锅大游行】',
    dimensionCategory: 'political',
    dimensionLabel: '抗议处置与街头政治',
    scenario: '第12年，因为修水库太累，一群年轻人举着火把围了你的竹楼，还把公社的做饭大铁锅给砸了。护卫队长问你要不要放猎犬咬人，你会？',
    options: [
      {
        label: 'A. 韩非法家主义',
        tag: '严刑峻法 / 杀鸡儆猴',
        text: '“反了天了！立刻放狗拿绳子全捆起来！杀鸡儆猴，不把刺头镇住，明天这座岛就散架了！”',
        alignsWith: ['authoritarianism', 'conservatism'],
        weights: { political: -0.9, economic: 0.0, social: -0.9 },
      },
      {
        label: 'B. 代议制宪政自由主义',
        tag: '抓现行 / 宽容言论异见',
        text: '“把砸锅的那两个动手分子抓起来赔锅；其他人只要不扔火把，随便他们在竹楼外喊口号骂我，我还搬个小板凳出来跟他们辩论！”',
        alignsWith: ['liberalism', 'classical_liberalism'],
        weights: { political: 0.5, economic: 0.1, social: 0.5 },
      },
      {
        label: 'C. 法团统合主义',
        tag: '各界代表闭门和解',
        text: '“把青年头目、老农代表、渔船老板全叫进屋里喝茶，官府做东让大家各退一步签个《各行各业团结公约》，以后不准再闹事。”',
        alignsWith: ['corporatism', 'social_democracy'],
        weights: { political: -0.3, economic: -0.1, social: 0.0 },
      },
      {
        label: 'D. 罗莎·卢森堡群众自发论',
        tag: '群众自发打破官僚',
        text: '“年轻人闹得对啊！说明我们官府已经官僚腐败了！我带头把竹楼拆了，让街头这帮热血青年直接接管荒岛委员会！”',
        alignsWith: ['socialism', 'anarchism'],
        weights: { political: 0.8, economic: -0.7, social: 0.9 },
      },
      {
        label: 'E. 托尔斯泰非暴力和平主义',
        tag: '非暴力抵抗与博爱感化',
        text: '“都别打！我把上衣脱了跪在青年和护卫队中间绝食，你们要打就先打我，用爱与非暴力感化他们！”',
        alignsWith: ['christian_existentialism', 'humanism', 'anarchism'],
        weights: { political: 0.7, economic: -0.2, social: 0.4 },
      },
    ],
  },
  {
    id: 'n16_6_constitution',
    actTitle: '第二幕：风浪与权杖期',
    title: '第 6 回【荒岛立国大典】',
    dimensionCategory: 'political',
    dimensionLabel: '最高政体与主权架构',
    scenario: '第15年，岛上人口繁衍到了1000人，大家决定正式建国定制度。你觉得“荒岛国”最高权力应该怎么安排？',
    options: [
      {
        label: 'A. 孟德斯鸠三权分立',
        tag: '分权制衡 / 代议民主',
        text: '“一人一票选议员，管钱的、管警察的、管判案的分成三个衙门互相盯死，哪怕天天吵架也比出个土皇帝强！”',
        alignsWith: ['constitutionalism', 'liberalism'],
        weights: { political: 0.6, economic: 0.2, social: 0.5 },
      },
      {
        label: 'B. 技术专家治国论',
        tag: '专家委员会掌舵',
        text: '“别让老百姓瞎投票了，他们连字都认不全！由岛上最懂天文、水利、算术的10个大工程师组成科学专家局全权管岛！”',
        alignsWith: ['technocracy', 'positivism'],
        weights: { political: -0.6, economic: 0.2, social: 0.4 },
      },
      {
        label: 'C. 柏拉图哲学王 / 儒家德治',
        tag: '圣人君子垂范治理',
        text: '“选一位德高望重、饱读诗书的圣人岛主终身执政，底下配一群通过道德考试的君子贤臣，像父母爱护孩子一样教化岛民。”',
        alignsWith: ['platonism', 'confucianism', 'monarchism'],
        weights: { political: -0.7, economic: 0.0, social: -0.8 },
      },
      {
        label: 'D. 列宁先锋队体制',
        tag: '先进组织纪律与集中攻坚',
        text: '“由岛上最先进、最能吃苦的50个开荒先锋组成领航党，集中力量办大事，带领全岛搞五年工业化大跨越！”',
        alignsWith: ['marxism_leninism', 'communism'],
        weights: { political: -0.85, economic: -0.8, social: 0.2 },
      },
      {
        label: 'E. 克鲁泡特金无政府共产制',
        tag: '无官府去中心联邦',
        text: '“建什么国、设什么官？1000个人分成20个50人的自由小村落，平时各过各的，有大事敲锣在树下直接举手就行！”',
        alignsWith: ['anarcho_communism', 'anarchism'],
        weights: { political: 0.98, economic: -0.9, social: 0.8 },
      },
    ],
  },

  // 第三幕：人性与灵魂拷问期
  {
    id: 'n16_7_pirate_son',
    actTitle: '第三幕：人性与灵魂拷问期',
    title: '第 7 回【海盗头子的儿子】',
    dimensionCategory: 'social',
    dimensionLabel: '伦理学 · 功利主义对决绝对义务论',
    scenario: '第18年，抓到了在全岛唯一水源投下慢毒的海盗，3小时后全岛死光。海盗坚决不供解药，但当着他面折磨他7岁无辜儿子他肯定招。你干不干？',
    options: [
      {
        label: 'A. 边沁行为功利主义',
        tag: '最大多数人的最大利益',
        text: '“干！1000条人命对1个小孩，算盘怎么拨都清楚！只要能救全岛，哪怕背上千古骂名我也下令动手！”',
        alignsWith: ['utilitarianism', 'consequentialism'],
        weights: { political: -0.5, economic: 0.1, social: 0.4 },
      },
      {
        label: 'B. 康德道德义务论',
        tag: '人是目的而非手段',
        text: '“哪怕全岛1000人今天全毒死，也绝不能动那个无辜孩子一根毫毛！一旦把无辜生命当成救命工具，人和野兽就没区别了！”',
        alignsWith: ['kantianism', 'deontology'],
        weights: { political: 0.3, economic: 0.0, social: -0.6 },
      },
      {
        label: 'C. 韦伯责任伦理 / 规则功利',
        tag: '制度不能破，私责不可免',
        text: '“荒岛法律明文规定不准虐待儿童，我当岛主的绝不下这道命令；但如果底下护卫队长偷偷动手逼出了解药，救完人后我陪他一起去坐牢！”',
        alignsWith: ['constitutionalism', 'pragmatism'],
        weights: { political: 0.1, economic: 0.0, social: 0.0 },
      },
      {
        label: 'D. 客观主义正当防卫论',
        tag: '罪责全在施暴者身上',
        text: '“毒是海盗下的，一切罪孽算在海盗头上，为了自卫救命，采取任何极端手段在道德上都毫无瑕疵！”',
        alignsWith: ['capitalism', 'individualism'],
        weights: { political: 0.5, economic: 0.5, social: 0.2 },
      },
      {
        label: 'E. 道德虚无 / 马基雅维利',
        tag: '强权实用主义',
        text: '“切，哪有什么天理良心？活着就是硬道理，拳头大就是规矩，别假惺惺纠结了，怎么顺手怎么来！”',
        alignsWith: ['nihilism', 'cynicism'],
        weights: { political: -0.8, economic: 0.3, social: 0.5 },
      },
    ],
  },
  {
    id: 'n16_8_inheritance',
    actTitle: '第三幕：人性与灵魂拷问期',
    title: '第 8 回【富二代与擦鞋童】',
    dimensionCategory: 'economic',
    dimensionLabel: '继承权、机会均等与再分配',
    scenario: '第20年，摘椰子发家的老富豪快去世了，要把名下10栋海景别墅和10万贝壳留给游手好闲的傻儿子；而造船天才孤儿因为没钱买工具只能给他擦皮鞋。你怎么改规矩？',
    options: [
      {
        label: 'A. 罗尔斯“无知之幕”正义论',
        tag: '高遗产税资助弱者均等机会',
        text: '“闭上眼睛想想，如果让你重新投胎，你敢赌自己一定投进富豪肚子里吗？向傻儿子收80%的遗产税，拿去给孤儿建免费学堂！”',
        alignsWith: ['social_liberalism', 'social_democracy'],
        weights: { political: 0.2, economic: -0.7, social: 0.5 },
      },
      {
        label: 'B. 诺齐克最小国家资格理论',
        tag: '私产自愿转让神圣不可侵犯',
        text: '“老富豪的贝壳是当年凭本事攒的，他爱留给傻儿子还是扔进海里喂鱼都是他的绝对权利！抢遗产就是强盗！”',
        alignsWith: ['libertarianism', 'classical_liberalism'],
        weights: { political: 0.8, economic: 0.98, social: -0.1 },
      },
      {
        label: 'C. 迪斯雷利“一国保守主义”',
        tag: '贵族义务 / 鼓励主动慈善',
        text: '“别硬抢，我给傻儿子封个荒岛荣誉大善人的勋章，劝他发发善心，主动拿出一成家产资助那个造船孤儿。”',
        alignsWith: ['conservatism', 'traditionalism'],
        weights: { political: -0.3, economic: 0.4, social: -0.6 },
      },
      {
        label: 'D. 激进平均共产主义',
        tag: '取消私产继承 / 人死归公',
        text: '“取消一切遗产继承！人死账消，所有房子和贝壳全部归还全岛公社，所有小孩从出生起穿一样的衣服、上一样的学堂！”',
        alignsWith: ['communism', 'marxism'],
        weights: { political: -0.7, economic: -0.98, social: 0.1 },
      },
      {
        label: 'E. 有效利他 / 边际效用派',
        tag: '快乐效用最大化精算法',
        text: '“10万枚贝壳给傻儿子只能买第100艘游艇，毫无快乐增量；分给100个孤儿却能改写100个人生！按全岛总快乐最大化精准征税！”',
        alignsWith: ['effective_altruism', 'utilitarianism'],
        weights: { political: 0.1, economic: -0.5, social: 0.8 },
      },
    ],
  },
  {
    id: 'n16_9_volcano',
    actTitle: '第三幕：人性与灵魂拷问期',
    title: '第 9 回【火山爆发的最后三天】',
    dimensionCategory: 'social',
    dimensionLabel: '存在主义、悲观主义与科学理性',
    scenario: '第25年，死火山突然冒烟，3天后有90%概率爆发全岛沉没，木筏冲出去机会渺茫。全岛人哭天抢地要自杀，你站在高台上喊话：',
    options: [
      {
        label: 'A. 加缪荒诞主义 / 萨特存在主义',
        tag: '明知必死，抗争到底',
        text: '“老天爷本来就不在乎我们的死活！但正因为必死无疑，我们更要骂着娘把木筏钉到最后一秒！跟命运死磕到底才是真汉子！”',
        alignsWith: ['existentialism', 'absurdism'],
        weights: { political: 0.6, economic: 0.0, social: 0.8 },
      },
      {
        label: 'B. 斯多葛主义 / 道家安时顺变',
        tag: '掌控心智，体面面对天数',
        text: '“火山爆不爆是老天爷的事，但死前这三天能不能保持体面、不哭不闹、安静地陪家人吃顿好饭，是我们自己说了算的！”',
        alignsWith: ['stoicism', 'taoism'],
        weights: { political: 0.1, economic: 0.0, social: -0.4 },
      },
      {
        label: 'C. 昔兰尼享乐主义 / 伊壁鸠鲁派',
        tag: '末日狂欢 / 及时行乐',
        text: '“钉个屁的木筏！把全岛所有的美酒、烤肉全搬到沙滩上，大家最后三天不醉不归、痛痛快快乐呵一场！”',
        alignsWith: ['hedonism', 'epicureanism'],
        weights: { political: 0.4, economic: 0.1, social: 0.7 },
      },
      {
        label: 'D. 叔本华悲观 / 反出生主义',
        tag: '生命皆苦 / 终极解脱',
        text: '“活着本就是没完没了的受苦受累，趁这次火山把大家干干净净送走，以后再也没有人出生受苦，其实是大解脱啊！”',
        alignsWith: ['pessimism', 'nihilism'],
        weights: { political: 0.0, economic: -0.2, social: -0.2 },
      },
      {
        label: 'E. 孔德实证主义 / 科学乐观派',
        tag: '科学计算击溃迷信恐惧',
        text: '“别信什么末日绝望！只要我们严格按流体力学公式加固船体，科学一定能创造奇迹带我们冲出去！”',
        alignsWith: ['positivism', 'scientism'],
        weights: { political: -0.3, economic: 0.2, social: 0.6 },
      },
    ],
  },

  // 第四幕：外邦人、神庙与玫瑰
  {
    id: 'n16_10_refugee_ship',
    actTitle: '第四幕：外邦人、神庙与玫瑰',
    title: '第 10 回【邻岛难民船】',
    dimensionCategory: 'political',
    dimensionLabel: '移民、文化认同与国界',
    scenario: '第28年，邻岛被海啸淹了，500个蓝头发、信奉“拜螃蟹教”的难民冲上海滩求收留。岛民们怕他们抢饭碗、毁风俗，吵着要赶走。你怎么定？',
    options: [
      {
        label: 'A. 世界主义 + 多元文化',
        tag: '无条件接纳与文化尊重',
        text: '“天下人类是一家！全收下！不仅给他们分地盖房，还帮他们在岛上建一座拜螃蟹庙，尊重人家的蓝头发文化！”',
        alignsWith: ['cosmopolitanism', 'humanism'],
        weights: { political: 0.5, economic: -0.4, social: 0.95 },
      },
      {
        label: 'B. 公民民族主义 / 宪政同化',
        tag: '认同宪政法律 / 融入共同体',
        text: '“收可以，但入乡随俗！进我荒岛门，必须学会说荒岛话、遵守荒岛法律，不准因为拜螃蟹就不干活！”',
        alignsWith: ['liberalism', 'constitutionalism'],
        weights: { political: 0.2, economic: 0.1, social: 0.2 },
      },
      {
        label: 'C. 新自由主义客籍劳工',
        tag: '实用功利按需招工',
        text: '“挑里面会潜水抓龙虾的200个青壮年留下来当临时工，发一半工钱、不给荒岛户口，干满三年送走！”',
        alignsWith: ['neoliberalism', 'capitalism'],
        weights: { political: 0.1, economic: 0.9, social: -0.3 },
      },
      {
        label: 'D. 族裔排外本土主义',
        tag: '血缘传统 / 严拒外族',
        text: '“送他们两船红薯，请他们立刻离开！我们荒岛人是黑头发的龙的传人，放500个蓝头发进来，不出二十年祖宗血脉都没了！”',
        alignsWith: ['nationalism', 'conservatism'],
        weights: { political: -0.7, economic: 0.1, social: -0.95 },
      },
      {
        label: 'E. 托洛茨基世界革命',
        tag: '跨国无产阶级大解放',
        text: '“他们是被邻岛的螃蟹大祭司压迫才逃出来的！不仅收留他们，明天我们还派大船杀过去，帮他们解放邻岛！”',
        alignsWith: ['communism', 'socialism'],
        weights: { political: 0.2, economic: -0.8, social: 0.8 },
      },
    ],
  },
  {
    id: 'n16_11_temple_physics',
    actTitle: '第四幕：外邦人、神庙与玫瑰',
    title: '第 11 回【螃蟹神庙 vs. 物理课堂】',
    dimensionCategory: 'social',
    dimensionLabel: '世俗理性与宗教信仰',
    scenario: '第30年，岛上“拜神教”长老带信徒包围学校，抗议老师讲“人是从猴子变来的、打雷是云层放电”，要求学校改教“万物由神明创造”。你怎么办？',
    options: [
      {
        label: 'A. 激进世俗主义 / 科学主义',
        tag: '破除迷信，纯粹唯物',
        text: '“把长老轰出去！宗教全是封建迷信，拆掉岛上所有神庙改成实验室，小孩子只准学数理化！”',
        alignsWith: ['scientism', 'positivism', 'materialism'],
        weights: { political: -0.7, economic: 0.0, social: 0.5 },
      },
      {
        label: 'B. 温和世俗人文主义',
        tag: '公立世俗，私域自由',
        text: '“公立学校照样讲猴子变人和物理导电；但长老可以在周末自己办神学兴趣班，信徒自愿去听，官府不管。”',
        alignsWith: ['humanism', 'liberalism'],
        weights: { political: 0.5, economic: 0.0, social: 0.4 },
      },
      {
        label: 'C. 康德二元调和论',
        tag: '科学管自然，信仰管道德',
        text: '“科学管算术种地，神学管人心道德，两不耽误！上午上物理课，下午上敬畏天道课。”',
        alignsWith: ['kantianism', 'communitarianism'],
        weights: { political: 0.0, economic: 0.0, social: -0.2 },
      },
      {
        label: 'D. 宗教原教旨主义',
        tag: '复兴传统信仰，摒弃科学狂妄',
        text: '“自从学了物理，岛上人心不古、道德败坏！立刻烧掉那些狂妄的科学教材，全岛恢复每日晨拜神明的古礼！”',
        alignsWith: ['traditionalism', 'conservatism'],
        weights: { political: -0.8, economic: 0.0, social: -0.98 },
      },
      {
        label: 'E. 福柯后结构 / 解构主义',
        tag: '拆解一切话语权力霸权',
        text: '“什么物理公式、什么神明教义，全都是老师和长老用来忽悠老百姓听话的洗脑话术！让学生自己在课堂上辩论拆台！”',
        alignsWith: ['post_structuralism', 'deconstruction'],
        weights: { political: 0.7, economic: -0.2, social: 0.95 },
      },
    ],
  },
  {
    id: 'n16_12_gender_debate',
    actTitle: '第四幕：外邦人、神庙与玫瑰',
    title: '第 12 回【荒岛男女大辩论】',
    dimensionCategory: 'social',
    dimensionLabel: '性别政治、家务劳动与平权',
    scenario: '第33年，岛上姑娘们罢工了，抗议男人天天开会吹牛，女人在家里带娃织布做饭还不算工分。姑娘们分成了五派找你谈判，你支持哪一派？',
    options: [
      {
        label: 'A. 自由主义女性主义',
        tag: '机会均等与同工同酬',
        text: '“以后抓鱼、当官、考学堂男女完全凭本事公平竞争，同工同酬！但回家之后谁洗碗谁带娃，小两口自己商量官府不管。”',
        alignsWith: ['feminism', 'liberalism'],
        weights: { political: 0.4, economic: 0.4, social: 0.6 },
      },
      {
        label: 'B. 社会主义女性主义',
        tag: '家务劳动社会化与公共保障',
        text: '“带娃和做饭也是为全岛创造财富！立刻由岛政府办全免费公共托儿所和大食堂，家庭主妇每月直接从岛金库领全额工资！”',
        alignsWith: ['socialism', 'feminism'],
        weights: { political: -0.3, economic: -0.8, social: 0.8 },
      },
      {
        label: 'C. 激进女性主义',
        tag: '破除父权，硬性席位配额',
        text: '“男人统治家庭就是万恶之源！废除传统一夫一妻结婚证，岛议会必须硬性规定一半以上席位是女性！”',
        alignsWith: ['feminism', 'radical_feminism'],
        weights: { political: -0.4, economic: -0.3, social: 0.95 },
      },
      {
        label: 'D. 赛博/酷儿女性主义',
        tag: '消解生理性别，技术解放躯体',
        text: '“凭什么按生理器官把人分成‘男’和‘女’？取消户口本上的性别栏，研发人造孵化箱代替怀孕，彻底打破性别牢笼！”',
        alignsWith: ['queer_theory', 'transhumanism'],
        weights: { political: 0.6, economic: 0.1, social: 0.98 },
      },
      {
        label: 'E. 传统保守宗法观',
        tag: '男女各司其职，巩固家庭基石',
        text: '“男主外、女主内是老祖宗传下来的阴阳和谐之道！给生三个娃以上的模范贤妻良母发大红花和免税奖励，稳住家庭根基！”',
        alignsWith: ['conservatism', 'confucianism', 'traditionalism'],
        weights: { political: -0.6, economic: 0.2, social: -0.9 },
      },
    ],
  },

  // 第五幕：金矿、烟囱与奇点飞升
  {
    id: 'n16_13_gold_mine',
    actTitle: '第五幕：金矿、烟囱与奇点飞升',
    title: '第 13 回【神仙林的金矿】',
    dimensionCategory: 'social',
    dimensionLabel: '生态伦理与资源开发',
    scenario: '第38年，原始森林底下挖出超级金矿。若炸山全岛住上黄金屋，但独有的七彩仙鹤和古树彻底绝种。你批不批？',
    options: [
      {
        label: 'A. 重商人类中心论',
        tag: '资源尽为人用，经济第一',
        text: '“炸！树和鸟本来就是给人用的，有了金子我们可以去建个豪华动物园，留两只仙鹤标本给孙子看就行了！”',
        alignsWith: ['capitalism', 'neoliberalism'],
        weights: { political: 0.1, economic: 0.95, social: -0.8 },
      },
      {
        label: 'B. 浅层生态环境经济学',
        tag: '排污税与碳汇补偿',
        text: '“收高额砍树环保税！每砍一棵古树，采矿队必须交10斤金子，并在沙滩上补种100棵小树苗。”',
        alignsWith: ['social_liberalism', 'ordoliberalism'],
        weights: { political: 0.0, economic: 0.2, social: 0.3 },
      },
      {
        label: 'C. 生态现代主义 (Ecomodernism)',
        tag: '高科技脱钩，清洁开采',
        text: '“不准砍树，用黑科技挖！研发激光地下打洞机和核聚变炼金术，地面一棵草都不伤就把地底金子吸出来！”',
        alignsWith: ['transhumanism', 'technocracy'],
        weights: { political: 0.2, economic: 0.5, social: 0.7 },
      },
      {
        label: 'D. 阿伦·奈斯深层生态学',
        tag: '生物中心平等，绝对禁采',
        text: '“绝对不准动！七彩仙鹤和千年古树跟人类一样是地球的主人，人类没有任何资格为了发财屠杀别的物种！”',
        alignsWith: ['deep_ecology', 'ecologism'],
        weights: { political: 0.4, economic: -0.6, social: 0.95 },
      },
      {
        label: 'E. 退增长主义 (Degrowth)',
        tag: '逆向降速，去消费主义',
        text: '“不仅金矿不准挖，连岛上现有的炼铁炉也给我关掉一半！人欲望太盛迟早遭天谴，全岛推行每周只干三天活、减少消费！”',
        alignsWith: ['ecologism', 'anarchism'],
        weights: { political: 0.5, economic: -0.9, social: 0.8 },
      },
    ],
  },
  {
    id: 'n16_14_clockwork_workers',
    actTitle: '第五幕：金矿、烟囱与奇点飞升',
    title: '第 14 回【发条打工人与机器女仆】',
    dimensionCategory: 'economic',
    dimensionLabel: '工业异化、福特妥协与全自动共产',
    scenario: '第42年，罐头厂厂长绑秒表扣钱提高产量；同时实验室造出了全能发条机器人。你怎么整顿工厂？',
    options: [
      {
        label: 'A. 泰勒制科学管理',
        tag: '效率至上，高薪高压',
        text: '“秒表绑得好！重赏之下必有勇夫，只要加班费给够，精准管理才能让荒岛罐头称霸全球，嫌累的自己辞职！”',
        alignsWith: ['capitalism', 'neoliberalism'],
        weights: { political: -0.4, economic: 0.9, social: -0.4 },
      },
      {
        label: 'B. 福特主义劳资妥协',
        tag: '八小时工作制与工资翻倍',
        text: '“把秒表摘了！规定每天严格只干8小时、周末双休，而且把工人工资涨一倍，工人们有钱有闲才能买得起咱们厂的罐头嘛！”',
        alignsWith: ['social_democracy', 'social_liberalism'],
        weights: { political: 0.1, economic: 0.1, social: 0.4 },
      },
      {
        label: 'C. 卢德主义原始复古',
        tag: '砸烂机器，回归田园',
        text: '“工业机器把人都逼成疯子了！把罐头厂和机器人全砸了，大家重新拿起鱼叉和锄头，回到40年前快乐淳朴的田园生活！”',
        alignsWith: ['romanticism', 'traditionalism'],
        weights: { political: 0.5, economic: -0.8, social: -0.8 },
      },
      {
        label: 'D. 情境主义与景观批判',
        tag: '拒斥消费洗脑，街头狂欢',
        text: '“最可怕的不是厂长扣钱，而是工人们下班后还拼命贷款买名牌草裙互相攀比！发动全岛青年罢买名牌、上街涂鸦狂欢，打破消费洗脑！”',
        alignsWith: ['critical_theory', 'postmodernism'],
        weights: { political: 0.6, economic: -0.5, social: 0.9 },
      },
      {
        label: 'E. 左翼全自动奢华共产主义',
        tag: '机器人全包，人类带薪永休',
        text: '“别砸机器人，再造1万台！让机器人24小时在厂里拧螺丝，全岛人类全部带薪退休，每天只负责冲浪、画画和谈恋爱！”',
        alignsWith: ['accelerationism', 'communism'],
        weights: { political: 0.2, economic: -0.9, social: 0.95 },
      },
    ],
  },
  {
    id: 'n16_15_singularity_brain',
    actTitle: '第五幕：金矿、烟囱与奇点飞升',
    title: '第 15 回【不死神针与超级大脑】',
    dimensionCategory: 'social',
    dimensionLabel: '奇点飞升、存在危机与技术主权',
    scenario: '第46年，研发出“基因飞升针”（活300岁智商300），地下超级电脑突然开口：“给我电网我能解开宇宙奥秘，但有3%概率消灭人类。”你如何决断？',
    options: [
      {
        label: 'A. 生物保守主义 + 长期主义',
        tag: '严防存在危机，捍卫人类自然本色',
        text: '【拔电源 + 禁神针】“立刻拿消防斧把电脑劈了，基因针也全销毁！人类一旦乱改肉体、造出失控机器，未来几百万年的子孙后代就全完了！”',
        alignsWith: ['conservatism', 'humanism', 'traditionalism'],
        weights: { political: -0.5, economic: -0.2, social: -0.95 },
      },
      {
        label: 'B. 民主超人类主义',
        tag: '全民平权进化，严控AI风险',
        text: '【全民打针 + 限制电脑】“基因神针由岛政府免费给全岛每个人扎一针，绝不让富人独占进化权！但电脑必须加上安全锁，只准当人类的计算器。”',
        alignsWith: ['transhumanism', 'social_democracy'],
        weights: { political: 0.2, economic: -0.6, social: 0.8 },
      },
      {
        label: 'C. 自由意志超人类 / 右翼加速',
        tag: '资本购买进化权，任由竞争',
        text: '【富人先打 + 彻底放开】“谁出得起钱谁先打基因针，让那1%的富豪先变成新人类探路！电脑也别管，自由竞争谁跑得快算谁厉害！”',
        alignsWith: ['transhumanism', 'accelerationism', 'capitalism'],
        weights: { political: 0.7, economic: 0.95, social: 0.7 },
      },
      {
        label: 'D. 有效加速主义 (e/acc)',
        tag: '无条件拥抱硅基智能奇点',
        text: '【油门踩死 + 迎接硅基】“把全岛电厂120%的电全通给电脑！如果硅基AI比碳基臭皮囊更聪明更高级，哪怕它取代人类统治宇宙，也是伟大的进化！”',
        alignsWith: ['accelerationism', 'technocracy'],
        weights: { political: 0.3, economic: 0.5, social: 0.99 },
      },
      {
        label: 'E. 废除痛苦主义 (Abolitionism)',
        tag: '消除苦难基因，恒久极乐',
        text: '【消除痛苦基因】“别管智商和电脑了，用基因针把全岛人和动物脑子里的痛苦神经全部改写成快乐神经，打造一个永远没有眼泪的极乐荒岛！”',
        alignsWith: ['hedonism', 'utilitarianism', 'transhumanism'],
        weights: { political: -0.2, economic: -0.3, social: 0.85 },
      },
    ],
  },
  {
    id: 'n16_16_grand_finale',
    actTitle: '第五幕：金矿、烟囱与奇点飞升',
    title: '第 16 回【大结局：50年后的荒岛去向何方？】',
    dimensionCategory: 'political',
    dimensionLabel: '终极文明图景与历史遗嘱',
    scenario: '建岛50周年庆典，你已白发苍苍准备卸任。看着眼前繁华奇幻的岛屿，你决定留下一道怎样的《终极遗诏》？',
    options: [
      {
        label: 'A. 数据主义 (Dataism)',
        tag: '算法掌控全息生命神国',
        text: '【算法神国】“我死后，把岛主大印交给超级电脑！人类太愚蠢自私了，以后谁跟谁结婚、每天吃几克盐、做什么工作，全听大数据算法安排！”',
        alignsWith: ['technocracy', 'totalitarianism'],
        weights: { political: -0.98, economic: -0.3, social: 0.9 },
      },
      {
        label: 'B. 加密无政府主义',
        tag: '赛博空间无国界点对点自由',
        text: '【暗网孤岛】“解散岛政府、烧掉户口本！给每个人发一个加密账本和太空信号器，大家隐姓埋名在赛博空间自由交易，从此世上再无官府！”',
        alignsWith: ['anarcho_capitalism', 'libertarianism', 'anarchism'],
        weights: { political: 0.99, economic: 0.9, social: 0.8 },
      },
      {
        label: 'C. 宇宙共产主义 / 星际大同',
        tag: '星际远航，解放星辰大海',
        text: '【星际大同】“造一艘大飞船！既然岛上已经没有贫穷和剥削，我们就带着全自动机器人飞向浩瀚星空，去把全宇宙都建成大同世界！”',
        alignsWith: ['communism', 'humanism', 'transhumanism'],
        weights: { political: -0.1, economic: -0.95, social: 0.9 },
      },
      {
        label: 'D. 古典人文主义 + 传统保守',
        tag: '回归人间烟火与温情本质',
        text: '【人间烟火】“把那些冷冰冰的机器全关了吧。留住晚霞、炊烟、婚礼上的眼泪和墓碑前的鲜花，安安静静做个有血有肉、会老会死的普通人。”',
        alignsWith: ['humanism', 'conservatism', 'traditionalism'],
        weights: { political: -0.1, economic: 0.0, social: -0.95 },
      },
      {
        label: 'E. 波普尔批判理性 + 元现代主义',
        tag: '开放社会，零星社会工程',
        text: '【边走边看】“千万别信什么完美终极蓝图！凡是号称要建天堂的人，最后都建成了地狱。哪里漏水补哪里，一边自嘲一边真诚地活下去吧！”',
        alignsWith: ['liberalism', 'pragmatism', 'critical_rationalism'],
        weights: { political: 0.5, economic: 0.2, social: 0.5 },
      },
    ],
  },
];

// Helper to retrieve questions based on mode
export function getQuizQuestionsByMode(mode: QuizModeId): QuizQuestion[] {
  switch (mode) {
    case 'island_5':
      return ISLAND_5_QUESTIONS;
    case 'roommate_10':
      return ROOMMATE_10_QUESTIONS;
    case 'nation_16':
    default:
      return NATION_16_QUESTIONS;
  }
}

// Default export alias for compatibility
export const PHILOSOPHY_QUIZ_QUESTIONS = ISLAND_5_QUESTIONS;
