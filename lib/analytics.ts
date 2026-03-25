declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GOOGLE_ADS_ID = "AW-17997502951";
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
export const GOOGLE_ADS_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL ?? "";

export function getGoogleTagId() {
  return GA_MEASUREMENT_ID || GOOGLE_ADS_ID;
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

  if (GOOGLE_ADS_CONVERSION_LABEL) {
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
    });
  }
}

