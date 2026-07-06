"use client";

import { motion } from "framer-motion";

const notes = [
  {
    tag: "saga orchestration",
    body: "Compensating transactions are easy to draw and hard to test. The failure path is a second implementation you didn't plan for — and it's the one that runs on the worst day.",
  },
  {
    tag: "circuit breakers",
    body: "A circuit breaker that never trips was never tested. One that trips too often is a different problem wearing a mask.",
  },
  {
    tag: "observability",
    body: "Metrics tell you something is wrong. Traces tell you where. Logs tell you why. Most systems ship with one of the three and call it monitoring.",
  },
  {
    tag: "chaos engineering",
    body: "You don't know what your system does under failure until you make it fail on purpose, somewhere it's safe to be wrong.",
  },
];

export default function Notebook() {
  return (
    <section
      id="notebook"
      aria-label="Engineering Notebook"
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
          Engineering Notebook
        </motion.h2>

        <div className="space-y-14">
          {notes.map((note, i) => (
            <motion.div
              key={note.tag}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-gold mb-3">
                on {note.tag}
              </p>
              <p className="font-serif text-lg sm:text-xl text-paper leading-relaxed">
                {note.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
