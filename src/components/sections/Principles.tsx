"use client";

import { motion } from "framer-motion";

const principles = [
  "Reliability is a feature, not an afterthought.",
  "A system you can't observe in production is a system you don't actually understand.",
  "Correctness before cleverness.",
  "Understanding before optimization.",
  "Every abstraction hides complexity somewhere else. The job is knowing where.",
  "Simple systems age better than clever ones.",
  "There are rarely perfect solutions. Only informed trade-offs.",
  "Build products, not demos.",
];

export default function Principles() {
  return (
    <section
      id="principles"
      aria-label="Principles"
      className="relative min-h-screen px-6 sm:px-12 lg:px-24 py-32 bg-ink"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs tracking-[0.25em] text-grey uppercase mb-16"
        >
          Principles
        </motion.h2>

        <ol className="space-y-0">
          {principles.map((principle, i) => (
            <motion.li
              key={principle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group border-t border-line py-8 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8"
            >
              <span className="font-mono text-sm text-gold tabular-nums shrink-0 w-10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <p className="font-serif text-xl sm:text-2xl text-paper leading-snug">
                  {principle}
                </p>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.7, delay: (i % 4) * 0.08 + 0.25 }}
                  style={{ transformOrigin: "left" }}
                  className="block h-px w-16 bg-gold-dim mt-4"
                />
              </div>
            </motion.li>
          ))}
          <div className="border-t border-line" />
        </ol>
      </div>
    </section>
  );
}
