"use client";

import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";

export default function Opening() {
  const line1 = useTypewriter("Most systems are designed to work.", {
    start: true,
    speed: 38,
    delay: 700,
  });
  const line2 = useTypewriter("Few are designed to fail.", {
    start: line1.done,
    speed: 38,
    delay: 250,
  });

  return (
    <section
      id="opening"
      aria-label="Opening"
      className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 bg-ink"
    >
      <div className="font-mono text-center text-[15px] sm:text-lg text-paper leading-relaxed">
        <p className="min-h-[1.6em]">
          {line1.output}
          {!line1.done && <span className="caret" />}
        </p>
        <p className="min-h-[1.6em] text-paper-dim">
          {line2.output}
          {line1.done && !line2.done && <span className="caret" />}
          {line1.done && line2.done && <span className="caret" />}
        </p>
      </div>

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: line2.done ? 1 : 0 }}
        transition={{ duration: 1.4, delay: 0.6 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-grey uppercase"
      >
        <span>Scroll</span>
        <motion.span
          className="block w-px h-8 bg-line-strong"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: line2.done ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
