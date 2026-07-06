"use client";

import { motion } from "framer-motion";

export default function Future() {
  return (
    <section
      id="future"
      aria-label="Future"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-ink"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1 }}
        className="font-mono text-xs tracking-[0.25em] text-grey uppercase mb-12"
      >
        Future
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="font-serif text-3xl sm:text-4xl lg:text-5xl text-paper leading-snug max-w-3xl"
      >
        I don&apos;t know exactly what I&apos;m building toward yet.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 1.8, delay: 1, ease: "easeOut" }}
        className="mt-8 font-serif italic text-xl sm:text-2xl text-gold max-w-xl"
      >
        I know it has to disappear the way good infrastructure does.
      </motion.p>
    </section>
  );
}
