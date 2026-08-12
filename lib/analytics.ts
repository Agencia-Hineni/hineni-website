declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    gtag_report_conversion?: (url?: string) => boolean;
    __hineniGoogleTagConfigured?: boolean;
  }
}

export const GOOGLE_ADS_ID = "AW-17997502951";
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
export const GOOGLE_ADS_LEAD_SEND_TO = "AW-17997502951/WHg2CL26yY8cEOez8IVD";

let googleTagPromise: Promise<void> | null = null;

function configureGoogleTagQueue() {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  if (window.__hineniGoogleTagConfigured) {
    return;
  }

  window.__hineniGoogleTagConfigured = true;
  window.gtag("js", new Date());
  window.gtag("config", GOOGLE_ADS_ID);

  if (GA_MEASUREMENT_ID) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });
  }
}

export function loadGoogleTag() {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  configureGoogleTagQueue();

  if (googleTagPromise) {
    return googleTagPromise;
  }

  googleTagPromise = new Promise<void>((resolve) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src*="googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}"]`,
    );

    if (existingScript) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.head.appendChild(script);
  });

  return googleTagPromise;
}

export function registerAdsConversionHelper() {
  if (typeof window === "undefined") {
    return;
  }

  window.gtag_report_conversion = (url?: string) => {
    const callback = () => {
      if (typeof url !== "undefined") {
        window.location.href = url;
      }
    };

    void loadGoogleTag();

    window.gtag?.("event", "conversion", {
      send_to: GOOGLE_ADS_LEAD_SEND_TO,
      event_callback: callback,
    });

    return false;
  };
}

export function trackLeadSubmission(service: string) {
  if (typeof window === "undefined") {
    return;
  }

  void loadGoogleTag();

  window.gtag?.("event", "generate_lead", {
    event_category: "contact",
    event_label: service,
    value: 1,
  });

  window.gtag_report_conversion?.();
}
