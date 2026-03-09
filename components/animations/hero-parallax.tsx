"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function HeroParallax() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const yPrimary = useTransform(scrollY, [0, 700], [0, 52]);
  const ySecondary = useTransform(scrollY, [0, 700], [0, 78]);

  if (shouldReduceMotion) {
    return (
      <>
        <div className="surface-grid absolute inset-0 hidden opacity-[0.13] md:block" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_18%,rgba(30,58,138,0.35),transparent_58%)] md:bg-[radial-gradient(circle_at_85%_18%,rgba(30,58,138,0.35),transparent_58%),radial-gradient(circle_at_14%_78%,rgba(184,148,66,0.08),transparent_42%)]" />
      </>
    );
  }

  return (
    <>
      <motion.div style={{ y: ySecondary }} className="absolute inset-0">
        <div className="surface-grid h-full w-full hidden opacity-[0.13] md:block" />
      </motion.div>
      <motion.div
        style={{ y: yPrimary }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_85%_18%,rgba(30,58,138,0.35),transparent_58%)] md:bg-[radial-gradient(circle_at_85%_18%,rgba(30,58,138,0.35),transparent_58%),radial-gradient(circle_at_14%_78%,rgba(184,148,66,0.08),transparent_42%)]"
      />
    </>
  );
}
