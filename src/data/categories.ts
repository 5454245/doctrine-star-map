import { CategoryMeta } from '../types/ism';

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'political',
    name: '政治与社会',
    englishName: 'Political & Social',
    color: '#38bdf8', // Sky blue
    description: '关于权力分配、国家组织、产权制度与公共治理的蓝图构想',
  },
  {
    id: 'philosophical',
    name: '哲学与认识',
    englishName: 'Philosophy & Epistemology',
    color: '#a855f7', // Violet
    description: '关于世界本质、真理标准、人类认知与终极意义的底层拷问',
  },
  {
    id: 'cultural',
    name: '文化与现代性',
    englishName: 'Culture & Modernity',
    color: '#f59e0b', // Amber
    description: '文艺思潮、时代精神、解构叙事与日常生存美学的变迁',
  },
  {
    id: 'ethical',
    name: '伦理与价值',
    englishName: 'Ethics & Values',
    color: '#10b981', // Emerald
    description: '善恶评判、正义边界、道德抉择与人类福祉的衡量尺度',
  },
  {
    id: 'contemporary',
    name: '当代与数字前沿',
    englishName: 'Contemporary & Digital',
    color: '#ec4899', // Pink
    description: '在算法、气候、性别与科技爆炸时代涌现的前沿狂想与反思',
  },
];
