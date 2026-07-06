"use client";

import { motion } from "framer-motion";

const topics = [
  "Distributed Systems",
  "Saga Orchestration",
  "Circuit Breakers",
  "Chaos Engineering",
  "Kubernetes",
  "Cloud Infrastructure",
  "Observability",
  "Performance Engineering",
  "Production Readiness",
];

export default function Learning() {
  return (
    <section
      id="learning"
      aria-label="Learning"
      className="relative min-h-screen px-6 sm:px-12 lg:px-24 py-32 bg-ink-raised"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs tracking-[0.25em] text-grey uppercase mb-4"
        >
          Currently learning
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-xl sm:text-2xl text-paper-dim max-w-2xl mb-14"
        >
          Everything here eventually gets implemented inside Vectra. I&apos;d
          rather build the wrong thing and learn why than read about the right
          one.
        </motion.p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">
          {topics.map((topic, i) => (
            <motion.li
              key={topic}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.07 }}
              className="flex items-center gap-3 font-mono text-sm sm:text-base text-paper py-2 border-b border-line"
            >
              <span
                aria-hidden="true"
                className="dot-live inline-block w-1.5 h-1.5 rounded-full bg-gold shrink-0"
              />
              {topic}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
