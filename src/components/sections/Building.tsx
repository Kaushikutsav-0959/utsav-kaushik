"use client";

import { motion } from "framer-motion";

const spec: { label: string; value: string }[] = [
  { label: "Started as", value: "An exercise — a way to go deeper into backend engineering than tutorials allow." },
  { label: "Became", value: "An attempt at a real company, not a portfolio project." },
  { label: "What it is", value: "A distributed ride-hailing platform, built the way one would actually have to be." },
  {
    label: "Architecture",
    value:
      "Independent services communicating over REST, gRPC, and asynchronous messaging. Each owns one responsibility.",
  },
  {
    label: "Stack",
    value: "Go · PostgreSQL · MongoDB · Redis · Kafka · Docker · OpenTelemetry · Prometheus · Grafana · Tempo",
  },
  { label: "State", value: "Unfinished. It's meant to be — the architecture is still earning its shape." },
];

export default function Building() {
  return (
    <section
      id="building"
      aria-label="Building"
      className="relative min-h-screen px-6 sm:px-12 lg:px-24 py-32 bg-ink"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs tracking-[0.25em] text-grey uppercase mb-6"
        >
          Building
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl text-paper mb-4"
        >
          Vectra
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-paper-dim text-lg max-w-xl mb-16"
        >
          Not a demo project pretending to be a product. An attempt at one.
        </motion.p>

        <dl className="border-t border-line">
          {spec.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-8 py-6 border-b border-line"
            >
              <dt className="font-mono text-xs uppercase tracking-widest text-gold shrink-0">
                {row.label}
              </dt>
              <dd
                className={
                  row.label === "Stack"
                    ? "font-mono text-sm text-paper-dim"
                    : "font-sans text-base text-paper leading-relaxed"
                }
              >
                {row.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
