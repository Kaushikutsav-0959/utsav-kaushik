"use client";

import { motion } from "framer-motion";

const principles = [
  {
    line: "Reliability is a feature, not an afterthought.",
    doubt: "I only really believe this because I once shipped something that wasn't.",
  },
  {
    line: "A system you can't observe in production is a system you don't actually understand.",
    doubt: "I still guess more than I'd like to admit.",
  },
  {
    line: "Correctness before cleverness.",
    doubt: "Cleverness is more fun. That's exactly the problem.",
  },
  {
    line: "Understanding before optimization.",
    doubt: "I've optimized the wrong thing before. More than once.",
  },
  {
    line: "Every abstraction hides complexity somewhere else.",
    doubt: "The job is knowing where. I don't always know where yet.",
  },
  {
    line: "Simple systems age better than clever ones.",
    doubt: "Mine aren't simple yet either.",
  },
  {
    line: "There are rarely perfect solutions. Only trade-offs.",
    doubt: "“Informed” is doing a lot of work in that sentence.",
  },
  {
    line: "Build the thing, not the demo of the thing.",
    doubt: "Vectra is the proof. It's still in progress.",
  },
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
          className="font-mono text-xs tracking-[0.25em] text-grey uppercase mb-4"
        >
          Principles
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif italic text-paper-dim text-lg mb-16"
        >
          Held loosely. Still being tested.
        </motion.p>

        <ol className="space-y-0">
          {principles.map((p, i) => (
            <motion.li
              key={p.line}
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
                  {p.line}
                </p>
                <p className="font-mono text-sm text-grey mt-3">— {p.doubt}</p>
              </div>
            </motion.li>
          ))}
          <div className="border-t border-line" />
        </ol>
      </div>
    </section>
  );
}
