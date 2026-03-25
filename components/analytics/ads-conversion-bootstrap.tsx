"use client";

import { useEffect } from "react";
import { registerAdsConversionHelper } from "@/lib/analytics";

export function AdsConversionBootstrap() {
  useEffect(() => {
    registerAdsConversionHelper();
  }, []);

  return null;
}
