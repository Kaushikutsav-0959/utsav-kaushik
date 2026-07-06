"use client";

import { motion } from "framer-motion";

const threads = [
  {
    topic: "Saga orchestration",
    note: "still not convinced compensating transactions are worth it for every workflow.",
  },
  {
    topic: "Circuit breakers",
    note: "tuning thresholds by feel right now. that should bother me more than it does.",
  },
  {
    topic: "Chaos engineering",
    note: "haven't broken anything on purpose yet. i should have by now.",
  },
  {
    topic: "Kubernetes",
    note: "learning it the slow way — by outgrowing what came before it.",
  },
  {
    topic: "Observability",
    note: "i can measure more of the system than i can actually explain.",
  },
  {
    topic: "Production readiness",
    note: "the checklist is easy. trusting it at 2am is not.",
  },
];

export default function Learning() {
  return (
    <section
      id="learning"
      aria-label="Learning"
      className="relative min-h-screen px-6 sm:px-12 lg:px-24 py-32 bg-ink-raised"
    >
      <div className="max-w-3xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs tracking-[0.25em] text-grey uppercase mb-4"
        >
          Currently unresolved
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-xl sm:text-2xl text-paper-dim mb-16"
        >
          I&apos;d rather build the wrong thing and learn why than read about
          the right one.
        </motion.p>

        <ul className="space-y-8">
          {threads.map((t, i) => (
            <motion.li
              key={t.topic}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.08 }}
              className="flex items-start gap-4 pb-8 border-b border-line"
            >
              <span
                aria-hidden="true"
                className="dot-live mt-2 inline-block w-1.5 h-1.5 rounded-full bg-gold shrink-0"
              />
              <p className="font-mono text-sm sm:text-base leading-relaxed">
                <span className="text-paper">{t.topic}</span>
                <span className="text-grey"> — {t.note}</span>
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
