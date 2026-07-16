"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "#new-here", label: "New Here" },
  { href: "#about", label: "About" },
  { href: "#photos", label: "Photos" },
  { href: "#visit", label: "Visit" },
  { href: "#services", label: "Services" },
  { href: "#give", label: "Give" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(`#${id}`);
        },
        { rootMargin: "-42% 0px -48% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("nav") && open) setOpen(false);
    };
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const solidNav = scrolled || open;

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        solidNav
          ? "border-b border-[color:var(--foreground)]/8 bg-background/95 py-2.5 shadow-[0_8px_30px_rgba(18,28,51,0.08)] backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-[rgba(18,28,51,0.55)] to-transparent py-3 sm:py-4"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={closeMenu}
          className={`min-w-0 shrink truncate rounded-lg font-serif text-[0.95rem] font-semibold tracking-tight transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-lg ${
            solidNav ? "text-foreground" : "text-white"
          }`}
        >
          <span className="sm:hidden">Cainta Baptist</span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        <ul
          className={`z-50 items-center gap-5 lg:gap-7 xl:flex ${
            open
              ? "absolute top-full left-0 flex max-h-[calc(100dvh-4rem)] w-full flex-col gap-0.5 overflow-y-auto border-b border-[color:var(--foreground)]/8 bg-background px-4 py-3 shadow-[0_16px_40px_rgba(18,28,51,0.12)] sm:px-6"
              : "hidden"
          } xl:static xl:flex xl:max-h-none xl:w-auto xl:flex-row xl:overflow-visible xl:border-0 xl:bg-transparent xl:p-0 xl:shadow-none`}
          role="menubar"
        >
          {links.map((link) => (
            <li key={link.href} role="none" className="w-full xl:w-auto">
              <a
                href={link.href}
                role="menuitem"
                onClick={closeMenu}
                className={`relative block rounded-lg px-3 py-3 text-[0.92rem] font-medium transition-colors hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent xl:inline xl:rounded-none xl:bg-transparent xl:px-0 xl:py-0 xl:hover:bg-transparent xl:after:absolute xl:after:-bottom-1 xl:after:left-0 xl:after:h-0.5 xl:after:bg-accent xl:after:transition-all ${
                  active === link.href
                    ? "text-foreground xl:after:w-full"
                    : "text-muted-dark hover:text-foreground xl:after:w-0 xl:hover:after:w-full"
                } ${
                  !solidNav
                    ? "xl:text-white/85 xl:hover:text-white xl:after:bg-white"
                    : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li role="none" className="mt-2 w-full px-1 pb-2 xl:mt-0 xl:w-auto xl:p-0">
            <a
              href="#new-here"
              role="menuitem"
              onClick={closeMenu}
              className={`inline-flex min-h-11 w-full items-center justify-center rounded-full px-5 py-2.5 text-[0.92rem] font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent xl:w-auto ${
                solidNav
                  ? "bg-accent text-footer hover:bg-accent-hover"
                  : "bg-white text-footer hover:bg-cream"
              }`}
            >
              I&apos;m New
            </a>
          </li>
        </ul>

        <button
          type="button"
          className={`flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-lg p-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent xl:hidden ${
            solidNav ? "text-foreground" : "text-white"
          }`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex flex-col gap-1.5" aria-hidden>
            <span
              className={`block h-0.5 w-6 rounded bg-current transition ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded bg-current transition ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
    </nav>
  );
}
