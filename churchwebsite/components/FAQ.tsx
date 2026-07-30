"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section-shell surface-soft"
      aria-labelledby="faq-heading"
    >
      <div className="section-inner section-inner-narrow">
        <Reveal>
          <SectionHeader
            id="faq-heading"
            eyebrow="FAQ"
            title={
              <>
                Quick{" "}
                <span className="text-accent">answers</span>
              </>
            }
          />
        </Reveal>

        <div className="space-y-2.5">
          {site.faq.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;

            return (
              <Reveal key={item.question} delayMs={i * 40}>
                <article className="card overflow-hidden">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left sm:gap-4 sm:px-6 sm:py-4"
                    >
                      <span className="min-w-0 flex-1 font-serif text-[0.9rem] font-semibold leading-snug sm:text-base">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className="border-t border-[color:var(--foreground)]/6 px-5 pb-4 sm:px-6"
                  >
                    <p className="pt-3 text-sm leading-relaxed text-muted">
                      {item.answer}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
