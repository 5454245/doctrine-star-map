export interface QuizOption {
  text: string;
  alignsWith: string[];
  weights: {
    political: number; // -1 (Authoritarian/Order) to 1 (Libertarian/Autonomy)
    economic: number;  // -1 (Collectivist/Planned) to 1 (Free Market/Capitalist)
    social: number;    // -1 (Traditional/Conservative) to 1 (Progressive/Pluralist)
  };
}

export interface QuizQuestion {
  id: string;
  dimensionCategory: 'political' | 'economic' | 'social';
  dimensionLabel: string;
  scenario: string;
  options: QuizOption[];
}

// Exactly 12 carefully balanced questions (4 Political, 4 Economic, 4 Social)
export const PHILOSOPHY_QUIZ_QUESTIONS: QuizQuestion[] = [
  // ================= 政治维度 (Political: 4 题) =================
  {
    id: 'q_pol_1_state_power',
    dimensionCategory: 'political',
    dimensionLabel: '政治维度 · 公权力合法边界',
    scenario: '对于国家与政府在公民生活中的职能界限，你最认可的根本法则是：',
    options: [
      {
        text: '“守夜人国家”：政府只应负责国防与产权司法，任何对经济、私人契约与道德的监管都是越界。',
        alignsWith: ['libertarianism', 'neoliberalism', 'liberalism'],
        weights: { political: 0.95, economic: 0.9, social: 0.6 },
      },
      {
        text: '国家是公民的公共受托人，必须通过严格的法治制衡与民主普选，捍卫基本人权与程序正义。',
        alignsWith: ['liberalism', 'social_democracy'],
        weights: { political: 0.7, economic: 0.1, social: 0.7 },
      },
      {
        text: '强大高效的国家机器是避免无序内耗的定海神针，国家整体目标与集体安全高于个别私利。',
        alignsWith: ['nationalism', 'conservatism', 'fascism'],
        weights: { political: -0.85, economic: 0.0, social: -0.6 },
      },
      {
        text: '国家垄断暴力是压迫的根源，人类应彻底解构官僚机器，走向平等的横向自治与自由互助。',
        alignsWith: ['anarchism', 'communism'],
        weights: { political: 1.0, economic: -0.7, social: 0.9 },
      },
    ],
  },
  {
    id: 'q_pol_2_civil_liberty',
    dimensionCategory: 'political',
    dimensionLabel: '政治维度 · 秩序维稳与言论自由',
    scenario: '当“维护社会稳定与安全”与“保障公民言论异见自由”发生剧烈冲突时：',
    options: [
      {
        text: '言论与思想自由是绝对不可退让的底线，压制异见只会带来虚伪与不可预知的更大危机。',
        alignsWith: ['liberalism', 'individualism', 'existentialism'],
        weights: { political: 0.85, economic: 0.2, social: 0.8 },
      },
      {
        text: '秩序是自由的前提；无序的混乱将摧毁一切文明成果，在非常时期限制部分私权是必要代价。',
        alignsWith: ['conservatism', 'nationalism', 'collectivism'],
        weights: { political: -0.7, economic: 0.0, social: -0.7 },
      },
      {
        text: '主流言论往往是被统治阶级或平台资本筛选的话语霸权，必须揭示其隐藏的权力规训。',
        alignsWith: ['deconstructionism', 'structuralism', 'socialism'],
        weights: { political: 0.6, economic: -0.4, social: 0.9 },
      },
      {
        text: '不纠结抽象是非，通过现实法律框架寻求动态平衡，建立能切实化解矛盾的可行程序。',
        alignsWith: ['pragmatism', 'social_democracy'],
        weights: { political: 0.3, economic: 0.1, social: 0.3 },
      },
    ],
  },
  {
    id: 'q_pol_3_global_nation',
    dimensionCategory: 'political',
    dimensionLabel: '政治维度 · 民族主权与世界公民',
    scenario: '面对当前复杂的地缘政治震荡与国际争端，你的根本认同更偏向于：',
    options: [
      {
        text: '我首先属于我的国家与民族，守护本国主权、历史文化与国家利益高于一切虚幻的普世大同。',
        alignsWith: ['nationalism', 'conservatism'],
        weights: { political: -0.75, economic: 0.1, social: -0.7 },
      },
      {
        text: '全人类享有无差别的生命尊严与人权，国界只是历史偶然产物，世界公民当共同应对全球危机。',
        alignsWith: ['humanism', 'liberalism', 'environmentalism'],
        weights: { political: 0.7, economic: -0.1, social: 0.85 },
      },
      {
        text: '国界是阻碍资本、货物与人才自由配置的低效壁垒，全面自由贸易全球化才能最大化人类财富。',
        alignsWith: ['neoliberalism', 'capitalism', 'libertarianism'],
        weights: { political: 0.5, economic: 0.95, social: 0.4 },
      },
      {
        text: '现代民族国家是历史上资本与统治阶级制造的“想象共同体”，全世界劳动者方为命运共同体。',
        alignsWith: ['communism', 'socialism', 'anarchism'],
        weights: { political: 0.1, economic: -0.9, social: 0.6 },
      },
    ],
  },
  {
    id: 'q_pol_4_governance_mode',
    dimensionCategory: 'political',
    dimensionLabel: '政治维度 · 社会决策与权力机制',
    scenario: '对于大型公共事务的最佳决策方式，你的哲学直觉是：',
    options: [
      {
        text: '权力必须分散制衡，依靠宪法法治、代议程序与独立司法，杜绝任何个人或阶级的绝对专断。',
        alignsWith: ['liberalism', 'social_democracy'],
        weights: { political: 0.75, economic: 0.2, social: 0.6 },
      },
      {
        text: '代议制往往被游说资本与职业政客操纵，应通过自下而上的去中心化社区自发协商与直接民主。',
        alignsWith: ['anarchism', 'communism'],
        weights: { political: 0.9, economic: -0.6, social: 0.8 },
      },
      {
        text: '大众投票往往短视且易被煽动，需要具备专业远见与道德担当的政治精英团队集中决策统筹。',
        alignsWith: ['conservatism', 'collectivism'],
        weights: { political: -0.6, economic: 0.1, social: -0.5 },
      },
      {
        text: '最好的决策机制就是“不决策”，彻底交给自由价格体系与市场竞争，由无数个体的自主交易决定。',
        alignsWith: ['libertarianism', 'capitalism', 'neoliberalism'],
        weights: { political: 0.8, economic: 0.95, social: 0.5 },
      },
    ],
  },

  // ================= 经济维度 (Economic: 4 题) =================
  {
    id: 'q_eco_1_work_alienation',
    dimensionCategory: 'economic',
    dimensionLabel: '经济维度 · 劳动分配与996内卷',
    scenario: '面对当前职场中普遍的“内卷”、996工时与阶层固化，你认为根本症结在于：',
    options: [
      {
        text: '打工人出卖劳动力却被异化为资本增殖机器，必须限制资本无序掠夺，强力推行劳动保护与再分配。',
        alignsWith: ['socialism', 'social_democracy', 'communism'],
        weights: { political: 0.1, economic: -0.85, social: 0.4 },
      },
      {
        text: '职场本质是双向平等的自由契约市场；个人通过持续打磨不可替代的稀缺技能，自能赢得高溢价。',
        alignsWith: ['capitalism', 'neoliberalism', 'libertarianism'],
        weights: { political: 0.4, economic: 0.85, social: 0.2 },
      },
      {
        text: '工作本身就是荒谬世界的谋生工具；认清现实、守住精神内核，下班后为自己生活赋予意义。',
        alignsWith: ['existentialism', 'absurdism', 'stoicism'],
        weights: { political: 0.5, economic: -0.1, social: 0.8 },
      },
      {
        text: '内卷源于过度欲望与消费绑架；通过极简主义断舍离降低消费需求，重新夺回生活主动权。',
        alignsWith: ['minimalism', 'stoicism', 'environmentalism'],
        weights: { political: 0.3, economic: -0.4, social: 0.5 },
      },
    ],
  },
  {
    id: 'q_eco_2_tax_welfare',
    dimensionCategory: 'economic',
    dimensionLabel: '经济维度 · 税收制度与贫富差距',
    scenario: '关于社会财富差距的拉大，你认为最公正的财税政策应当是：',
    options: [
      {
        text: '征税与强迫劳动别无二致。劳动所得神圣不可侵犯，政府劫富济贫是对私有产权的侵犯。',
        alignsWith: ['libertarianism', 'neoliberalism'],
        weights: { political: 0.8, economic: 0.95, social: 0.4 },
      },
      {
        text: '对高收入与资本利得征收高额累进税，以此维持全民免费医疗、免费教育与高标准的公共福利。',
        alignsWith: ['social_democracy', 'socialism'],
        weights: { political: 0.3, economic: -0.8, social: 0.6 },
      },
      {
        text: '只要机会公平与程序正义即可，结果不平等是才能与勤奋差异的自然体现，过度福利会养出懒汉。',
        alignsWith: ['capitalism', 'conservatism', 'liberalism'],
        weights: { political: 0.2, economic: 0.75, social: -0.2 },
      },
      {
        text: '税收改良只是治标不治本；最终必须消灭生产资料私人占有制，实现全社会按劳或按需分配。',
        alignsWith: ['communism', 'socialism'],
        weights: { political: -0.3, economic: -1.0, social: 0.5 },
      },
    ],
  },
  {
    id: 'q_eco_3_property_infrastructure',
    dimensionCategory: 'economic',
    dimensionLabel: '经济维度 · 关键资源与基建产权',
    scenario: '对于水电气暖、铁路公路、公立医疗与AI基础大模型等关键公共资源：',
    options: [
      {
        text: '应完全向民间资本与自由竞争开放，打破行政垄断，由市场竞争带来更高的运营效率与创新。',
        alignsWith: ['neoliberalism', 'capitalism', 'libertarianism'],
        weights: { political: 0.4, economic: 0.9, social: 0.3 },
      },
      {
        text: '关系国计民生的命脉行业绝不能成为资本暴利的摇钱树，必须由全民代表机构公营与普惠补贴。',
        alignsWith: ['socialism', 'social_democracy', 'collectivism'],
        weights: { political: -0.2, economic: -0.85, social: 0.3 },
      },
      {
        text: '混合所有制模型：由政府设定严格的安全与价格底线，同时引入市场化服务激励提高运营质效。',
        alignsWith: ['social_democracy', 'pragmatism'],
        weights: { political: 0.2, economic: -0.2, social: 0.4 },
      },
      {
        text: '去中心化共有（Commons）：借鉴开源软件与去中心化协议，由社区用户共同治理与协同维护。',
        alignsWith: ['anarchism', 'communism'],
        weights: { political: 0.8, economic: -0.7, social: 0.85 },
      },
    ],
  },
  {
    id: 'q_eco_4_consumer_society',
    dimensionCategory: 'economic',
    dimensionLabel: '经济维度 · 消费主义与商业欲望',
    scenario: '面对社交媒体不断制造的精致生活焦虑、名牌包表与年年换新的消费浪潮：',
    options: [
      {
        text: '这是消费主义帝国制造的虚假符号陷阱！“你买什么你就是谁”让现代人沦为被资本奴役的囚徒。',
        alignsWith: ['consumerism', 'minimalism', 'postmodernism'],
        weights: { political: 0.2, economic: -0.6, social: 0.7 },
      },
      {
        text: '人们通过自由消费犒劳自己的劳动、追求美好体验，这是现代商业繁荣与技术迭代的正当引擎。',
        alignsWith: ['capitalism', 'consumerism', 'liberalism'],
        weights: { political: 0.3, economic: 0.85, social: 0.1 },
      },
      {
        text: '物质享受既非恶魔也非终极救赎；顺其自然，不被外在物欲牵引，方能保有真正的内心安宁。',
        alignsWith: ['stoicism', 'humanism'],
        weights: { political: 0.2, economic: -0.1, social: 0.1 },
      },
      {
        text: '这是后现代拟像社会的典型症状：商品的使用价值已死，一切消费皆是反讽、戏仿与身份表演。',
        alignsWith: ['postmodernism', 'deconstructionism'],
        weights: { political: 0.5, economic: 0.0, social: 0.9 },
      },
    ],
  },

  // ================= 社会文化维度 (Social: 4 题) =================
  {
    id: 'q_soc_1_tradition_ethics',
    dimensionCategory: 'social',
    dimensionLabel: '社会维度 · 历史传统与家族伦理',
    scenario: '对于流传数百上千年的传统家族观念、尊卑礼俗与婚丧节庆，你的核心态度是：',
    options: [
      {
        text: '敬畏历史积淀的制度智慧；传统是世代维系社会的无形纽带，轻率推倒往往带来文明浩劫。',
        alignsWith: ['conservatism', 'nationalism'],
        weights: { political: -0.5, economic: 0.2, social: -0.9 },
      },
      {
        text: '传统不过是过去死人对当下活人的绑架；每个人都是独立主体，有权用理性破除所有宗族枷锁。',
        alignsWith: ['individualism', 'existentialism', 'liberalism'],
        weights: { political: 0.7, economic: 0.3, social: 0.9 },
      },
      {
        text: '很多传统本质是历史长河中统治阶级与父权结构压迫弱者的工具，必须彻底予以批判与重构。',
        alignsWith: ['feminism', 'deconstructionism', 'socialism'],
        weights: { political: 0.4, economic: -0.4, social: 0.95 },
      },
      {
        text: '实用扬弃：保留增进温情与凝聚力的文化习俗，果断舍弃阻碍现代效率与平等的陈腐教条。',
        alignsWith: ['pragmatism', 'humanism'],
        weights: { political: 0.3, economic: 0.0, social: 0.3 },
      },
    ],
  },
  {
    id: 'q_soc_2_gender_identity',
    dimensionCategory: 'social',
    dimensionLabel: '社会维度 · 性别分工与角色认同',
    scenario: '关于社会生活中的男女分工、性别气质与家庭角色差异，你的认知是：',
    options: [
      {
        text: '“女人不是生成的，而是变成的”。绝大多数性别标签是后天文化、语言与父权结构规训的产物。',
        alignsWith: ['feminism', 'existentialism', 'deconstructionism'],
        weights: { political: 0.5, economic: -0.3, social: 0.95 },
      },
      {
        text: '男女生理与进化心理存在深刻先天天赋分工，强行抹杀自然生理差异违背常识与生物学法则。',
        alignsWith: ['conservatism'],
        weights: { political: -0.4, economic: 0.2, social: -0.8 },
      },
      {
        text: '无论性别，法律面前权利均等、机会对等即可；无需过度搞身份政治标签对立与撕裂。',
        alignsWith: ['liberalism', 'humanism'],
        weights: { political: 0.6, economic: 0.3, social: 0.5 },
      },
      {
        text: '性别压迫的底层是经济生产关系与家务劳动未社会化，唯有消灭私有雇佣制才能迎来真正解放。',
        alignsWith: ['socialism', 'communism'],
        weights: { political: 0.0, economic: -0.85, social: 0.6 },
      },
    ],
  },
  {
    id: 'q_soc_3_moral_dilemma',
    dimensionCategory: 'social',
    dimensionLabel: '社会维度 · 道德判准与生命伦理',
    scenario: '面对经典的“电车难题”（拉动变轨拉杆，牺牲轨道上1个人以拯救另5个人）：',
    options: [
      {
        text: '毫不犹豫拉下拉杆。5条无辜生命的快乐总和远大于1人，道德评判的终极尺度是总体社会福祉最大化。',
        alignsWith: ['utilitarianism', 'pragmatism'],
        weights: { political: 0.1, economic: 0.0, social: 0.2 },
      },
      {
        text: '坚决不能主动拉下。人是目的本身而非牺牲工具，主动谋害无辜个体在道义论上构成绝对的不义。',
        alignsWith: ['humanism', 'individualism', 'liberalism'],
        weights: { political: 0.6, economic: 0.2, social: 0.75 },
      },
      {
        text: '无论怎样抉择都充满道德断裂与沉重焦虑；关键是敢于直面这个荒谬困境并为选择负全责。',
        alignsWith: ['existentialism', 'absurdism'],
        weights: { political: 0.7, economic: 0.0, social: 0.85 },
      },
      {
        text: '服从公意与集体权威制定的预备应急准则，个人的伦理抉择在社会统一纪律面前应予服从。',
        alignsWith: ['collectivism', 'conservatism'],
        weights: { political: -0.7, economic: -0.3, social: -0.6 },
      },
    ],
  },
  {
    id: 'q_soc_4_tech_future',
    dimensionCategory: 'social',
    dimensionLabel: '社会维度 · AI奇点与后人类进化',
    scenario: '对于正在狂飙突进的人工智能（AGI）、脑机接口与基因编辑等颠覆性前沿科技：',
    options: [
      {
        text: '全力踩油门（e/acc）！不要因短视恐惧给科技套上枷锁，技术爆炸是人类突破生物脆弱性的唯一飞升之道。',
        alignsWith: ['accelerationism', 'transhumanism', 'capitalism'],
        weights: { political: 0.5, economic: 0.85, social: 0.9 },
      },
      {
        text: '极度警惕！任由硅谷寡头与资本野蛮狂飙，必然造成巨型数字极权垄断、严重失业与人种阶层分化。',
        alignsWith: ['socialism', 'environmentalism', 'humanism'],
        weights: { political: 0.2, economic: -0.7, social: 0.4 },
      },
      {
        text: '对重塑人类肉体、修改生命代码与挑战人伦底线的实验保持审慎敬畏，切莫玩火自焚。',
        alignsWith: ['conservatism', 'stoicism'],
        weights: { political: -0.3, economic: 0.1, social: -0.7 },
      },
      {
        text: '算法只是人类既有语言、文化与阶级偏见的高维拟真，首先需要用理论手术刀拆解其暗藏的意识形态牢笼。',
        alignsWith: ['deconstructionism', 'structuralism'],
        weights: { political: 0.6, economic: -0.2, social: 0.9 },
      },
    ],
  },
];
