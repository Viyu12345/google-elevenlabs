
export enum DocType {
  MEDICAL = 'Medical Report',
  LEGAL = 'Legal Document',
  FINANCIAL = 'Financial Statement',
  TECHNICAL = 'Technical Manual',
  GENERAL = 'Other Document'
}



export interface AnalysisResult {
  summary: string;
  simplifiedContent: string;
  keyTerms: { term: string; explanation: string }[];
  actionItems: string[];
}

export type AppView = 'home' | 'analyze';
