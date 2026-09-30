import { telemetry } from '../tracking/tracker';

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const trackEvent = (event: AnalyticsEvent): void => {
  telemetry.trackEvent({
    action: (event.action as any) || 'click_cta',
    category: event.category || 'General',
    label: event.label,
    value: event.value
  });
};
