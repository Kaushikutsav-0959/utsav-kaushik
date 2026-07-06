"use client";

import { motion } from "framer-motion";

const fragments = [
  "Why do retries make a system feel alive — right up until they make it feel like it's lying to you?",
  "Every abstraction hides another abstraction. At some point you're just choosing which lie to trust.",
  "A circuit breaker that never trips was never tested. One that trips constantly is a symptom wearing a costume.",
  "Distributed systems don't fail like monoliths fail. They fail in the seams — the parts nobody was directly looking at.",
  "Saga orchestration reads clean on a whiteboard. The compensating transaction for the compensating transaction is where it stops being clean.",
  "When does architecture become the complexity it was supposed to remove? Still haven't found a clean answer.",
];

export default function Notebook() {
  return (
    <section
      id="notebook"
      aria-label="Engineering Notebook"
      className="relative min-h-screen px-6 sm:px-12 lg:px-24 py-32 bg-ink"
    >
      <div className="max-w-2xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs tracking-[0.25em] text-grey uppercase mb-4"
        >
          Notebook
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-mono text-xs text-grey mb-16"
        >
          unsorted. unanswered. unedited.
        </motion.p>

        <div className="space-y-12">
          {fragments.map((fragment, i) => (
            <motion.p
              key={fragment}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: (i % 6) * 0.05, ease: "easeOut" }}
              className="font-serif text-lg sm:text-xl text-paper-dim leading-relaxed"
            >
              {fragment}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
