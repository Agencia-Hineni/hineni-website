declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

export const GOOGLE_ADS_ID = "AW-17997502951";
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
export const GOOGLE_ADS_LEAD_SEND_TO = "AW-17997502951/WHg2CL26yY8cEOez8IVD";

export function registerAdsConversionHelper() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag_report_conversion = (url?: string) => {
    const callback = () => {
      if (typeof url !== "undefined") {
        window.location.href = url;
      }
    };

    window.gtag?.("event", "conversion", {
      send_to: GOOGLE_ADS_LEAD_SEND_TO,
      event_callback: callback,
    });

    return false;
  };
}

export function trackLeadSubmission(service: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "generate_lead", {
    event_category: "contact",
    event_label: service,
    value: 1,
  });

  window.gtag_report_conversion?.();
}
