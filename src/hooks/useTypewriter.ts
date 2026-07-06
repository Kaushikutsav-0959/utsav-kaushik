"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function useTypewriter(text: string, options?: { start?: boolean; speed?: number; delay?: number }) {
  const start = options?.start ?? true;
  const speed = options?.speed ?? 45;
  const delay = options?.delay ?? 0;
  const prefersReducedMotion = !!useReducedMotion();
  const [output, setOutput] = useState(prefersReducedMotion ? text : "");
  const [done, setDone] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion || !start) return;

    let frame = 0;
    let raf: ReturnType<typeof setTimeout>;
    const startTimer = setTimeout(() => {
      const tick = () => {
        frame += 1;
        setOutput(text.slice(0, frame));
        if (frame < text.length) {
          raf = setTimeout(tick, speed);
        } else {
          setDone(true);
        }
      };
      tick();
    }, delay);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(raf);
    };
  }, [start, text, speed, delay, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return { output: text, done: true };
  }

  return { output, done };
}
