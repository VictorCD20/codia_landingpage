export interface PageAdsStrategy {
  route: string;
  commercialObjective: string;
  expectedConversion: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaEvent: string;
  googleAdsConversionLabel?: string;
  targetAudience: string;
}

export type AdsStrategyMap = Record<string, PageAdsStrategy>;
