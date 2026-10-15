export type CategoryType = 
  | 'political'
  | 'philosophical'
  | 'cultural'
  | 'ethical'
  | 'contemporary';

export type RelationshipType = 
  | 'evolution'     // 传承/演进
  | 'opposition'    // 对立/批判
  | 'catalyst'      // 催生/反拨
  | 'fusion'        // 融合/交汇
  | 'dialectical';  // 辩证呼应

export interface IdeologicalSpectrum {
  political: number; // -1 (Authoritarian/Order/State) to 1 (Libertarian/Autonomy/Decentralized)
  economic: number;  // -1 (Collectivist/Planned/Socialist) to 1 (Free Market/Private/Capitalist)
  social: number;    // -1 (Traditional/Conservative/Essentialist) to 1 (Progressive/Pluralist/Deconstructive)
}

export interface IsmNode {
  id: string;
  name: string;
  englishName: string;
  category: CategoryType;
  color: string;
  period: string;
  eraYear: number; // for chronological sorting
  summary: string; // 1-sentence bottom-line definition
  elevatorPitch: string; // 2-3 sentence plain language explanation
  coreTenets: string[]; // 3-4 core pillars
  internetReality: string; // 互联网滥用与常见误区
  dailyLifeManifestation: string; // 现实生活与当代表现
  keyThinkers: { name: string; era?: string; note?: string }[];
  famousQuote: { quote: string; author: string };
  spectrum: IdeologicalSpectrum;
  initialPosition: { x: number; y: number };
}

export interface IsmRelationship {
  id: string;
  source: string;
  target: string;
  type: RelationshipType;
  label: string;
  description: string;
}

export interface CategoryMeta {
  id: CategoryType;
  name: string;
  englishName: string;
  color: string;
  description: string;
}

export type ViewMode = 'constellation' | 'timeline' | 'compass';
