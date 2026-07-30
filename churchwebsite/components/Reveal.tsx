"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  variant?: "up" | "left" | "right" | "scale";
};

function subscribe() {
  return () => {};
}

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduceMotion]);

  const variantClass =
    variant === "left"
      ? "reveal-left"
      : variant === "right"
        ? "reveal-right"
        : variant === "scale"
          ? "reveal-scale"
          : "";

  const show = !mounted || visible || reduceMotion;

  return (
    <div
      ref={ref}
      className={`${mounted && !reduceMotion ? `reveal ${variantClass}` : ""} ${show ? "reveal-visible" : ""} ${className}`}
      style={
        mounted && !reduceMotion
          ? { transitionDelay: `${delayMs}ms` }
          : undefined
      }
    >
      {children}
    </div>
  );
}
