"use client";

import { motion } from "framer-motion";

export default function Future() {
  return (
    <section
      id="future"
      aria-label="Future"
      className="relative min-h-screen flex items-center px-6 sm:px-12 lg:px-24 py-32 bg-ink"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="max-w-2xl mx-auto w-full"
      >
        <h2 className="font-mono text-xs tracking-[0.25em] text-grey uppercase mb-10">
          Future
        </h2>
        <p className="font-serif text-2xl sm:text-3xl text-paper leading-relaxed">
          I want to work on systems that operate at a scale where the
          engineering becomes the product — infrastructure that quietly
          powers things millions of people do without thinking about how.
        </p>
        <p className="mt-8 text-paper-dim text-lg leading-relaxed">
          Vectra is where I&apos;m learning to do that honestly, at a scale I
          can still hold in my head. It should get harder before it gets
          easier. That&apos;s the part I&apos;m here for.
        </p>
      </motion.div>
    </section>
  );
}
