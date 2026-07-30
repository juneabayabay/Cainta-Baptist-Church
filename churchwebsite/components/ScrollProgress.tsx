"use client";

import { useEffect } from "react";

/** Thin gold-to-blue progress bar at the top of the page while scrolling. */
export function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    if (!bar) return;

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
      bar.style.width = `${pct}%`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div id="scroll-progress" className="scroll-progress" aria-hidden />;
}
