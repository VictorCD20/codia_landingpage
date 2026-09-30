import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { telemetry } from '../tracking/tracker';

export function useTracking() {
  const location = useLocation();

  useEffect(() => {
    // 1. Automatic PageView Tracking
    telemetry.trackPageView(location.pathname);

    // 2. Scroll Depth Tracking (50% & 90%)
    let tracked50 = false;
    let tracked90 = false;

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const scrollPercentage = (window.scrollY / scrollHeight) * 100;

      if (!tracked50 && scrollPercentage >= 50) {
        tracked50 = true;
        telemetry.trackScrollDepth(50);
      }
      if (!tracked90 && scrollPercentage >= 90) {
        tracked90 = true;
        telemetry.trackScrollDepth(90);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // 3. Time On Page Tracking (15s, 60s)
    const timer15 = setTimeout(() => {
      telemetry.trackTimeOnPage(15);
    }, 15000);

    const timer60 = setTimeout(() => {
      telemetry.trackTimeOnPage(60);
    }, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer15);
      clearTimeout(timer60);
    };
  }, [location.pathname]);
}
