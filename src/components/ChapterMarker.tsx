"use client";

import { useEffect, useState } from "react";
import { chapters } from "@/lib/chapters";

export default function ChapterMarker() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sections = chapters
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.indexOf(entry.target as HTMLElement);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const active = chapters[activeIndex];

  return (
    <div
      aria-hidden="true"
      className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2 font-mono text-[11px] tracking-wider text-grey select-none"
    >
      <span className="text-gold">{active.index}</span>
      <span className="opacity-40">/</span>
      <span>{chapters.length - 1}</span>
      <span className="opacity-40 ml-1">—</span>
      <span className="uppercase">{active.label}</span>
    </div>
  );
}
