export type AnalyticsEventName =
  | 'page_view'
  | 'view_service'
  | 'view_case'
  | 'view_blog'
  | 'click_cta'
  | 'click_whatsapp'
  | 'click_phone'
  | 'submit_form'
  | 'generate_lead'
  | 'download_resource'
  | 'scroll_50'
  | 'scroll_90'
  | 'time_on_page';

export type MetaPixelEventName =
  | 'PageView'
  | 'ViewContent'
  | 'Lead'
  | 'Contact'
  | 'CompleteRegistration'
  | 'CustomRemarketing';

export interface TelemetryEvent {
  action: AnalyticsEventName;
  category: string;
  label?: string;
  value?: number;
  params?: Record<string, unknown>;
  metaPixelEvent?: MetaPixelEventName;
  googleAdsConversionLabel?: string;
}

export interface TrackingConfig {
  gaMeasurementId?: string;
  gtmContainerId?: string;
  googleAdsId?: string;
  googleAdsConversionLabel?: string;
  metaPixelId?: string;
  clarityId?: string;
  enabled: boolean;
}
