"use client";

import { useTypewriter } from "@/hooks/useTypewriter";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Closing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  const line1 = useTypewriter("Still learning.", { start: inView, speed: 42, delay: 200 });
  const line2 = useTypewriter("Still building.", { start: line1.done, speed: 42, delay: 200 });
  const line3 = useTypewriter("Still curious.", { start: line2.done, speed: 42, delay: 200 });

  return (
    <section
      id="closing"
      aria-label="Closing"
      className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 bg-ink"
    >
      <div ref={ref} className="font-mono text-center text-lg sm:text-xl text-paper leading-relaxed">
        <p className="min-h-[1.6em]">
          {line1.output}
          {!line1.done && <span className="caret" />}
        </p>
        <p className="min-h-[1.6em] text-paper-dim">
          {line1.done && line2.output}
          {line1.done && !line2.done && <span className="caret" />}
        </p>
        <p className="min-h-[1.6em] text-gold">
          {line2.done && line3.output}
          {line2.done && !line3.done && <span className="caret" />}
          {line3.done && <span className="caret" />}
        </p>
      </div>

      <p className="absolute bottom-8 font-mono text-[11px] tracking-[0.2em] text-grey uppercase">
        Utsav Kaushik
      </p>
    </section>
  );
}
