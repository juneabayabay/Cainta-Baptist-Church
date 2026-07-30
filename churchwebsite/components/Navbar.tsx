"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "#new-here", label: "New Here" },
  { href: "#visit", label: "Visit" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const sectionIds = [
  "home",
  "new-here",
  "visit",
  "about",
  "faq",
  "contact",
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          if (id === "home") setActive("");
          else setActive(`#${id}`);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const solid = scrolled || open;

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        solid
          ? "border-b border-[color:var(--foreground)]/6 bg-background/96 py-3 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-[rgba(30,58,138,0.58)] to-transparent py-4"
      }`}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-[1080px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={closeMenu}
          className={`min-w-0 truncate font-serif text-base font-semibold tracking-tight sm:text-lg ${
            solid ? "text-foreground" : "text-white"
          }`}
        >
          <span className="sm:hidden">{site.shortName}</span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        <ul
          className={`items-center gap-5 lg:flex xl:gap-6 ${
            open
              ? "absolute top-full left-0 flex max-h-[calc(100dvh-4rem)] w-full flex-col gap-1 overflow-y-auto border-b border-[color:var(--foreground)]/6 bg-background px-4 py-4 shadow-lg sm:px-6"
              : "hidden"
          } lg:static lg:flex lg:max-h-none lg:w-auto lg:flex-row lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {links.map((link) => (
            <li key={link.href} className="w-full lg:w-auto">
              <a
                href={link.href}
                onClick={closeMenu}
                className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors lg:px-0 lg:py-0 ${
                  active === link.href
                    ? "text-accent"
                    : solid
                      ? "text-muted-dark hover:text-foreground"
                      : "text-white/90 hover:text-white"
                } ${open ? "hover:bg-secondary-light" : ""}`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2 w-full lg:mt-0 lg:w-auto">
            <a
              href="#visit"
              onClick={closeMenu}
              className="btn btn-primary w-full text-sm lg:w-auto lg:px-5 lg:py-2"
            >
              Visit Sunday
            </a>
          </li>
        </ul>

        <button
          type="button"
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg lg:hidden ${
            solid ? "text-foreground" : "text-white"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex flex-col gap-1.5" aria-hidden>
            <span
              className={`block h-0.5 w-5 rounded bg-current transition ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded bg-current transition ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
    </nav>
  );
}
