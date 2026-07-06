"use client";

import { motion } from "framer-motion";

const lines = [
  "What happens when this fails?",
  "What happens under load nobody planned for?",
  "What happens when the thing it depends on is already down?",
  "How does it recover, and who finds out first — the user, or the on-call engineer?",
];

const closing =
  "Most systems are designed for the day they launch. I'm more interested in the day they break.";

export default function Curiosity() {
  return (
    <section
      id="curiosity"
      aria-label="Curiosity"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-32 bg-ink"
    >
      <div className="max-w-3xl mx-auto w-full space-y-10">
        {lines.map((line, i) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, letterSpacing: "0.12em" }}
            whileInView={{ opacity: 1, letterSpacing: "0em" }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-paper"
          >
            {line}
          </motion.p>
        ))}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-8 font-mono text-sm sm:text-base text-gold border-t border-line max-w-xl"
        >
          {closing}
        </motion.p>
      </div>
    </section>
  );
}
