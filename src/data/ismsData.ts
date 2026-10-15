import { IsmNode } from '../types/ism';
import { CATEGORIES } from './categories';
import { VOL1_ISMS } from './isms/vol1';
import { VOL2_ISMS } from './isms/vol2';
import { VOL3_ISMS } from './isms/vol3';
import { VOL4_ISMS } from './isms/vol4';
import { VOL5_ISMS } from './isms/vol5';
import { VOL6_ISMS } from './isms/vol6';
import { VOL7_ISMS } from './isms/vol7';
import { VOL8_ISMS } from './isms/vol8';
import { EXTENSION_ISMS } from './isms/vol_extensions';
import { ISM_RELATIONSHIPS } from './relationships';
import { PHILOSOPHY_QUIZ_QUESTIONS, QuizQuestion, QuizOption } from './quizQuestions';

export { CATEGORIES } from './categories';
export { ISM_RELATIONSHIPS } from './relationships';
export { PHILOSOPHY_QUIZ_QUESTIONS } from './quizQuestions';
export type { QuizQuestion, QuizOption } from './quizQuestions';

// 聚合全谱系 310 个精研主义流派星辰节点（含存在主义、虚无主义、社民、自由意志主义深度流派）
export const ISMS_DATA: IsmNode[] = [
  ...VOL1_ISMS,
  ...VOL2_ISMS,
  ...VOL3_ISMS,
  ...VOL4_ISMS,
  ...VOL5_ISMS,
  ...VOL6_ISMS,
  ...VOL7_ISMS,
  ...VOL8_ISMS,
  ...EXTENSION_ISMS,
];

// 辅助索引与工具函数
export const ISMS_MAP = new Map<string, IsmNode>(
  ISMS_DATA.map((ism) => [ism.id, ism])
);

export function getIsmById(id: string): IsmNode | undefined {
  return ISMS_MAP.get(id);
}
