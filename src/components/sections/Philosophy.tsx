"use client";

import { motion, type Variants } from "framer-motion";

const paragraphs = [
  "I don't think about software as code. I think about it as systems people depend on without noticing.",
  "The best engineering disappears. It runs quietly underneath the things people actually care about — a ride arriving, a payment clearing — and it asks nothing of them in return.",
  "I'm not interested in demonstrating what I know. I'm interested in building things that hold up long after the interesting part is done.",
  "Curiosity compounds. So does discipline. Neither works without the other.",
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045 } },
};

const word: Variants = {
  hidden: { opacity: 0.15 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

function AnimatedParagraph({ text, className }: { text: string; className?: string }) {
  return (
    <motion.p
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      className={className}
    >
      {text.split(" ").map((w, i) => (
        <motion.span key={i} variants={word} className="inline-block mr-[0.28em]">
          {w}
        </motion.span>
      ))}
    </motion.p>
  );
}

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      aria-label="Philosophy"
      className="relative min-h-screen flex items-center px-6 sm:px-12 lg:px-24 py-32 bg-ink-raised"
    >
      <div className="max-w-3xl mx-auto w-full space-y-10">
        {paragraphs.map((p, i) => (
          <AnimatedParagraph
            key={p}
            text={p}
            className={
              i === 0
                ? "font-serif text-2xl sm:text-3xl lg:text-4xl text-paper leading-snug"
                : i === paragraphs.length - 1
                ? "font-serif italic text-xl sm:text-2xl text-gold leading-snug"
                : "font-serif text-xl sm:text-2xl text-paper-dim leading-snug"
            }
          />
        ))}
      </div>
    </section>
  );
}
