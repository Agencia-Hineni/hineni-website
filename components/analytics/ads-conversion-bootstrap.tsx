"use client";

import { useEffect } from "react";
import { loadGoogleTag, registerAdsConversionHelper } from "@/lib/analytics";

export function AdsConversionBootstrap() {
  useEffect(() => {
    registerAdsConversionHelper();

    const loadOnInteraction = () => {
      void loadGoogleTag();
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener("pointerdown", loadOnInteraction);
      window.removeEventListener("keydown", loadOnInteraction);
      window.removeEventListener("touchstart", loadOnInteraction);
    };

    window.addEventListener("pointerdown", loadOnInteraction, { passive: true, once: true });
    window.addEventListener("keydown", loadOnInteraction, { once: true });
    window.addEventListener("touchstart", loadOnInteraction, { passive: true, once: true });

    return cleanup;
  }, []);

  return null;
}
