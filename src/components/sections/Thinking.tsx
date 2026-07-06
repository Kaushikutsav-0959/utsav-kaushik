"use client";

import { motion } from "framer-motion";

const prompts = ["why?", "how?", "what happens when it fails?", "how does it recover?", "what happens at 10x load?"];

export default function Thinking() {
  return (
    <section
      id="thinking"
      aria-label="Thinking"
      className="relative min-h-screen px-6 sm:px-12 lg:px-24 py-32 bg-ink-raised"
    >
      <div className="max-w-4xl mx-auto w-full grid lg:grid-cols-[1fr_1.3fr] gap-16">
        <div className="font-mono text-sm sm:text-base space-y-3">
          {prompts.map((p, i) => (
            <motion.p
              key={p}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.5, delay: i * 0.35 }}
              className="text-paper-dim"
            >
              <span className="text-gold mr-2">&gt;</span>
              {p}
            </motion.p>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.3, delay: prompts.length * 0.35 }}
            className="inline-block caret"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-serif text-xl sm:text-2xl leading-relaxed text-paper"
        >
          <p>
            I think in systems, not components. I break large problems into
            smaller, independent parts — then spend most of my time on the
            communication between them, because that&apos;s where the real
            failures live.
          </p>
          <p className="mt-6 text-paper-dim text-lg">
            Every decision trades one problem for another. There are rarely
            perfect solutions. Only informed compromises.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
