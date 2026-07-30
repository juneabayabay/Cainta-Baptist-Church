"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  variant?: "up" | "left" | "right" | "scale";
};

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variantClass =
    variant === "left"
      ? "reveal-left"
      : variant === "right"
        ? "reveal-right"
        : variant === "scale"
          ? "reveal-scale"
          : "";

  return (
    <div
      ref={ref}
      className={`reveal ${variantClass} ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
