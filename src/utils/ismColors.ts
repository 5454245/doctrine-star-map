import { IsmNode } from '../types/ism';

/**
 * 哲学与意识形态流派「刻板印象 / 历史文化共识」丰富配色体系
 * 依据人类两千五百年思想史、政治光谱象征色与大众文化经典刻板印象分配辨识度高、对比鲜明的色彩：
 * 
 * - 马克思/共产主义/左翼革命: 革命赤红 #ef4444
 * - 欧洲社民/民主社会主义: 玫瑰红 #f43f5e
 * - 自由主义/自由意志主义/奥地利学派: 黄金自由金 #eab308 / #facc15
 * - 现代社会自由主义/罗尔斯: 晴空蔚蓝 #0ea5e9
 * - 保守主义/传统主义/托利党: 皇家深海军蓝 #2563eb / #1d4ed8
 * - 存在主义/荒谬主义/加缪萨特: 荒原落日焦橙 #f97316 / #ea580c (西西弗斯烈焰)
 * - 虚无主义/悲观主义/叔本华尼采: 凝视深渊紫 #7c3aed / #6d28d9
 * - 唯心主义/柏拉图/康德/黑格尔绝对观念: 极光灵性紫 #a855f7
 * - 理性主义/笛卡尔/逻辑实证/分析哲学: 冷静纯粹逻辑蓝 #0284c7 / #3b82f6
 * - 经验主义/实用主义/杜威詹姆斯: 大地陶土暖褐 #c2410c / #d97706
 * - 东方道家/禅宗/玄学: 玄境天青玉色 #0d9488 / #14b8a6
 * - 东方儒家/墨家/佛教大乘: 菩提赭金/檀金 #d97706 / #ca8a04
 * - 生态主义/深层生态/盖亚: 生机翠绿 #10b981
 * - 女性主义/酷儿理论/性别政治: 丁香亮紫 #c084fc / #d946ef
 * - 浪漫主义/唯美主义/达达/超现实: 狂飙玫瑰洋红 #ec4899 / #db2777
 * - 后现代主义/解构/福柯鲍德里亚: 霓虹解构幻紫 #d946ef
 * - 赛博朋克/加速主义/超人类/AI控制论: 赛博电光高能青 #06b6d4
 * - 功利主义/有效利他: 效用天平湖蓝 #0891b2
 * - 斯多葛学派/古希腊贤者: 坚毅青岩蓝 #0369a1
 * - 犬儒学派/第欧根尼: 叛逆芥末褐黄 #a16207
 * - 法西斯/铁血极权/军国: 阴冷铁黑岩灰 #64748b / #475569
 * - 安那其/纯无政府主义: 曜石黑灰 #52525b
 */
export function getIsmStereotypeColor(node: { id: string; name: string; englishName?: string; category: string }): string {
  const name = node.name.toLowerCase();
  const id = node.id.toLowerCase();
  const eng = (node.englishName || '').toLowerCase();

  // 1. 共产主义 / 马克思主义 / 列宁主义 / 托派 / 毛主义 / 革命左翼 -> 苏维埃革命赤红 (Crimson Red)
  if (
    name.includes('共产') ||
    name.includes('马克思') ||
    name.includes('列宁') ||
    name.includes('毛主义') ||
    name.includes('托洛茨基') ||
    name.includes('布尔什维克') ||
    name.includes('辩证唯物') ||
    name.includes('历史唯物') ||
    id.includes('communism') ||
    id.includes('marxism') ||
    id.includes('leninism') ||
    id.includes('trotsky') ||
    eng.includes('marx') ||
    eng.includes('communis')
  ) {
    return '#ef4444'; // Revolutionary Crimson Red
  }

  // 2. 欧洲社会民主主义 / 民主社会主义 / 费边社会主义 -> 欧洲社民红玫瑰 (Rose Red)
  if (
    name.includes('社会民主') ||
    name.includes('社民') ||
    name.includes('民主社会') ||
    name.includes('费边') ||
    name.includes('欧洲共产') ||
    id.includes('social_democracy') ||
    id.includes('democratic_socialism') ||
    id.includes('fabian')
  ) {
    return '#f43f5e'; // Rose Pink Red
  }

  // 3. 空想社会主义 / 集产主义 / 基尔特社会主义 / 行会 -> 暖赤朱砂红 (Warm Coral Red)
  if (
    name.includes('空想社会') ||
    name.includes('集产主义') ||
    name.includes('行会社会') ||
    name.includes('基尔特') ||
    id.includes('utopian_socialism') ||
    id.includes('collectivism') ||
    id.includes('guild_socialism')
  ) {
    return '#fb7185'; // Warm Coral Red
  }

  // 4. 法西斯主义 / 纳粹主义 / 军国主义 / 铁血极权 -> 冷酷铁黑岩灰 (Slate Iron Black)
  if (
    name.includes('法西斯') ||
    name.includes('纳粹') ||
    name.includes('军国') ||
    name.includes('极权') ||
    name.includes('国家主义') ||
    name.includes('铁卫团') ||
    id.includes('fascism') ||
    id.includes('national_socialism') ||
    id.includes('totalitarianism') ||
    id.includes('militarism')
  ) {
    return '#64748b'; // Slate Iron Black
  }

  // 5. 无政府工团主义 / 互助主义 -> 工团亮橙 (Syndicalist Bright Orange)
  if (
    name.includes('工团') ||
    name.includes('互助主义') ||
    id.includes('syndicalism') ||
    id.includes('mutualism')
  ) {
    return '#f97316'; // Syndicalist Orange
  }

  // 6. 无政府资本主义 / 自由放任 / 奥地利学派 / 资本自由 -> 黄金国度金黄 (Capitalist / Austrian Gold)
  if (
    name.includes('无政府资本') ||
    name.includes('奥地利学派') ||
    name.includes('芝加哥学派') ||
    name.includes('自由放任') ||
    name.includes('重商主义') ||
    name.includes('重农主义') ||
    name.includes('新自由主义') ||
    name.includes('自由意志') ||
    id.includes('anarcho_capitalism') ||
    id.includes('austrian') ||
    id.includes('neoliberalism') ||
    id.includes('libertarianism')
  ) {
    return '#eab308'; // Pure Radiant Gold
  }

  // 7. 古典自由主义 / 洛克自由主义 / 启蒙自由派 -> 启蒙火炬金黄 (Enlightenment Gold)
  if (
    name.includes('古典自由') ||
    name.includes('辉格') ||
    id.includes('classical_liberalism') ||
    id.includes('lockean')
  ) {
    return '#facc15'; // Bright Sun Gold
  }

  // 8. 现代社会自由主义 / 宪政主义 / 共和主义 / 罗尔斯 / 世界主义 -> 自由晴空蔚蓝 (Liberty Sky Blue)
  if (
    name.includes('自由主义') ||
    name.includes('秩序自由') ||
    name.includes('共和') ||
    name.includes('宪政') ||
    name.includes('世界主义') ||
    name.includes('社群主义') ||
    id.includes('liberalism') ||
    id.includes('republicanism') ||
    id.includes('cosmopolitanism') ||
    id.includes('communitarianism')
  ) {
    return '#0ea5e9'; // Liberty Sky Blue
  }

  // 9. 保守主义 / 传统主义 / 埃德蒙·伯克 / 君主主义 / 托利党 -> 皇家深海军蓝 (Tory Royal Navy Blue)
  if (
    name.includes('保守主义') ||
    name.includes('君主') ||
    name.includes('传统主义') ||
    name.includes('封建') ||
    name.includes('贵族') ||
    name.includes('波拿巴') ||
    id.includes('conservatism') ||
    id.includes('monarchism') ||
    id.includes('traditionalism')
  ) {
    return '#2563eb'; // Deep Royal Navy Blue
  }

  // 10. 纯无政府主义 / 黑色安那其 / 利己主义 (施蒂纳) -> 曜石反叛黑灰 (Obsidian Rebel Slate)
  if (
    name.includes('无政府') ||
    name.includes('安那其') ||
    name.includes('利己主义') ||
    id.includes('anarchism') ||
    id.includes('egoism')
  ) {
    return '#52525b'; // Obsidian Rebel Slate
  }

  // 11. 生态主义 / 绿色政治 / 深层生态 / 生物中心 / 盖亚假说 -> 森林生机翠绿 (Forest Emerald Green)
  if (
    name.includes('生态') ||
    name.includes('环境') ||
    name.includes('绿色') ||
    name.includes('生物中心') ||
    name.includes('盖亚') ||
    name.includes('大地伦理') ||
    name.includes('动物解放') ||
    id.includes('eco') ||
    id.includes('green') ||
    id.includes('gaia')
  ) {
    return '#10b981'; // Vivid Forest Emerald
  }

  // 12. 女性主义 / 酷儿理论 / 跨性别研究 / 性别政治 -> 丁香娇艳紫粉 (Feminist Lavender Violet)
  if (
    name.includes('女性主义') ||
    name.includes('女权') ||
    name.includes('性别') ||
    name.includes('酷儿') ||
    id.includes('feminism') ||
    id.includes('queer')
  ) {
    return '#c084fc'; // Lavender Purple
  }

  // 13. 赛博朋克 / 加速主义 / 超人类主义 / 控制论 / 科技奇点 / e/acc -> 赛博电光高能青 (Cyber Neon Cyan)
  if (
    name.includes('赛博') ||
    name.includes('加速主义') ||
    name.includes('超人类') ||
    name.includes('后人类') ||
    name.includes('控制论') ||
    name.includes('技术奇点') ||
    name.includes('有效加速') ||
    name.includes('技术官僚') ||
    name.includes('加密') ||
    name.includes('人工智能') ||
    name.includes('数据主义') ||
    id.includes('accelerationism') ||
    id.includes('transhumanism') ||
    id.includes('cyber') ||
    id.includes('techno')
  ) {
    return '#06b6d4'; // Electric Neon Cyan
  }

  // 14. 存在主义 / 荒谬主义 (萨特、加缪、克尔凯郭尔) -> 荒原焦橙 / 西西弗斯烈焰 (Existential Blaze Orange)
  if (
    name.includes('存在主义') ||
    name.includes('荒谬主义') ||
    name.includes('萨特') ||
    name.includes('加缪') ||
    name.includes('克尔凯郭尔') ||
    name.includes('生存主义') ||
    id.includes('existentialism') ||
    id.includes('absurdism')
  ) {
    return '#f97316'; // Existential Blaze Orange
  }

  // 15. 虚无主义 / 悲观主义 (尼采、叔本华、齐奥朗) -> 凝视深渊紫 (Abyssal Void Purple)
  if (
    name.includes('虚无主义') ||
    name.includes('悲观主义') ||
    name.includes('叔本华') ||
    name.includes('消极主义') ||
    name.includes('幻灭') ||
    id.includes('nihilism') ||
    id.includes('pessimism')
  ) {
    return '#7c3aed'; // Deep Abyssal Violet
  }

  // 16. 浪漫主义 / 唯美主义 / 狂飙突进 / 达达主义 / 超现实主义 -> 狂飙玫瑰洋红 (Romantic Fuchsia Magenta)
  if (
    name.includes('浪漫主义') ||
    name.includes('唯美') ||
    name.includes('狂飙') ||
    name.includes('达达') ||
    name.includes('超现实') ||
    name.includes('情境主义') ||
    name.includes('表现主义') ||
    name.includes('未来主义') ||
    id.includes('romanticism') ||
    id.includes('dadaism') ||
    id.includes('surrealism') ||
    id.includes('expressionism')
  ) {
    return '#ec4899'; // Vivid Fuchsia Pink
  }

  // 17. 后现代主义 / 解构主义 / 拟象理论 (德里达、福柯、鲍德里亚) -> 霓虹解构幻紫 (Neon Prism Magenta)
  if (
    name.includes('后现代') ||
    name.includes('解构') ||
    name.includes('拟象') ||
    name.includes('块茎') ||
    name.includes('差异哲学') ||
    id.includes('postmodernism') ||
    id.includes('deconstruction') ||
    id.includes('simulacra')
  ) {
    return '#d946ef'; // Neon Deconstruction Magenta
  }

  // 18. 古典哲学 / 唯心主义 / 观念论 (柏拉图、康德、黑格尔、神秘主义) -> 极光形而上学紫 (Metaphysical Aurora Violet)
  if (
    name.includes('唯心') ||
    name.includes('柏拉图') ||
    name.includes('康德') ||
    name.includes('黑格尔') ||
    name.includes('观念论') ||
    name.includes('理型') ||
    name.includes('神秘主义') ||
    name.includes('唯灵论') ||
    name.includes('泛心论') ||
    id.includes('idealism') ||
    id.includes('platonism') ||
    id.includes('mysticism') ||
    id.includes('spiritualism') ||
    id.includes('panpsychism') ||
    id.includes('kant') ||
    id.includes('hegel')
  ) {
    return '#a855f7'; // Metaphysical Aurora Violet
  }

  // 19. 理性主义 (笛卡尔、斯宾诺莎、莱布尼茨) / 逻辑实证 / 分析哲学 (罗素、维也纳) -> 纯粹逻辑电光蓝 (Pure Analytical Cobalt Blue)
  if (
    name.includes('理性主义') ||
    name.includes('逻辑实证') ||
    name.includes('分析哲学') ||
    name.includes('笛卡尔') ||
    name.includes('斯宾诺莎') ||
    name.includes('维也纳') ||
    name.includes('科学主义') ||
    name.includes('数学逻辑') ||
    id.includes('rationalism') ||
    id.includes('logical_positivism') ||
    id.includes('analytic_philosophy') ||
    id.includes('descartes') ||
    id.includes('spinoza')
  ) {
    return '#0284c7'; // Deep Analytical Sapphire
  }

  // 20. 经验主义 (培根、洛克、休谟) / 实用主义 (皮尔士、杜威、詹姆斯) -> 大地暖褐陶土 (Earth Terracotta Copper)
  if (
    name.includes('经验主义') ||
    name.includes('经验论') ||
    name.includes('实用主义') ||
    name.includes('工具主义') ||
    id.includes('empiricism') ||
    id.includes('pragmatism') ||
    id.includes('instrumentalism')
  ) {
    return '#c2410c'; // Warm Terracotta Copper
  }

  // 21. 功利主义 / 效益主义 / 有效利他主义 -> 效用天平海青 (Utilitarian Balance Teal)
  if (
    name.includes('功利主义') ||
    name.includes('效益主义') ||
    name.includes('有效利他') ||
    name.includes('边沁') ||
    id.includes('utilitarianism') ||
    id.includes('effective_altruism')
  ) {
    return '#0891b2'; // Balance Teal Blue
  }

  // 22. 唯物主义 / 机械唯物 / 物理主义 / 实在论 -> 大地矿岩钢青 (Materialist Mineral Cyan)
  if (
    name.includes('唯物主义') ||
    name.includes('物理主义') ||
    name.includes('实在论') ||
    name.includes('唯名论') ||
    name.includes('自然主义') ||
    id.includes('materialism') ||
    id.includes('physicalism') ||
    id.includes('realism') ||
    id.includes('naturalism')
  ) {
    return '#38bdf8'; // Ice Cyan Mineral
  }

  // 23. 东方道家 / 禅宗 / 玄学 -> 玄境天青玉色 (Zen Celadon Jade Teal)
  if (
    name.includes('道家') ||
    name.includes('老庄') ||
    name.includes('禅宗') ||
    name.includes('玄学') ||
    id.includes('taoism') ||
    id.includes('zen')
  ) {
    return '#0d9488'; // Celadon Jade Teal
  }

  // 24. 东方儒家 / 墨家 / 佛家大乘 / 印度哲学 / 吠陀 -> 菩提赭金 (Sacred Bodhi Amber)
  if (
    name.includes('儒家') ||
    name.includes('新儒学') ||
    name.includes('墨家') ||
    name.includes('佛家') ||
    name.includes('佛教') ||
    name.includes('印度哲学') ||
    name.includes('吠陀') ||
    id.includes('confucianism') ||
    id.includes('mohist') ||
    id.includes('buddhism') ||
    id.includes('vedanta')
  ) {
    return '#d97706'; // Sacred Bodhi Ochre Gold
  }

  // 25. 宗教神学 / 经院神学 / 阿奎那 / 教父哲学 -> 圣座穹顶圣金 (Scholastic Cathedral Gold)
  if (
    name.includes('经院') ||
    name.includes('神学') ||
    name.includes('托马斯') ||
    name.includes('基督教') ||
    name.includes('伊斯兰') ||
    id.includes('theology') ||
    id.includes('scholasticism') ||
    id.includes('aquinas')
  ) {
    return '#ca8a04'; // Warm Cathedral Brass Gold
  }

  // 26. 斯多葛学派 (塞内卡、马可·奥勒留) -> 坚毅冷峻青石蓝 (Stoic Cold Granite Blue)
  if (
    name.includes('斯多葛') ||
    name.includes('塞内卡') ||
    id.includes('stoicism')
  ) {
    return '#0369a1'; // Deep Resilient Blue
  }

  // 27. 犬儒学派 (第欧根尼) -> 叛逆破衣芥末褐 (Cynic Rebel Mustard)
  if (
    name.includes('犬儒') ||
    name.includes('第欧根尼') ||
    id.includes('cynicism')
  ) {
    return '#a16207'; // Earthy Rebel Mustard
  }

  // 28. 怀疑主义 / 伊壁鸠鲁享乐学派 -> 享乐与省察橄榄绿 (Epicurean Olive Lime)
  if (
    name.includes('怀疑主义') ||
    name.includes('伊壁鸠鲁') ||
    name.includes('快乐主义') ||
    id.includes('skepticism') ||
    id.includes('epicureanism') ||
    id.includes('hedonism')
  ) {
    return '#84cc16'; // Olive Lime
  }

  // 29. 心理学流派 (精神分析、行为主义、格式塔) -> 潜意识孔雀蓝紫 (Subconscious Indigo Cyan)
  if (
    name.includes('精神分析') ||
    name.includes('弗洛伊德') ||
    name.includes('荣格') ||
    name.includes('格式塔') ||
    name.includes('行为主义') ||
    id.includes('psychoanalysis') ||
    id.includes('gestalt') ||
    id.includes('behaviorism')
  ) {
    return '#0e7490'; // Subconscious Cyan
  }

  // 默认根据大类 fallback
  switch (node.category) {
    case 'political':
      return '#38bdf8';
    case 'philosophical':
      return '#a855f7';
    case 'cultural':
      return '#f43f5e';
    case 'ethical':
      return '#10b981';
    case 'contemporary':
      return '#06b6d4';
    default:
      return '#38bdf8';
  }
}

/**
 * 为全量节点注入刻板印象丰富配色
 */
export function enrichIsmsWithStereotypeColors(nodes: IsmNode[]): IsmNode[] {
  return nodes.map((node) => ({
    ...node,
    color: getIsmStereotypeColor(node),
  }));
}
