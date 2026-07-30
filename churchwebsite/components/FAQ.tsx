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
            eyebrow="Questions"
            title={
              <>
                Common questions{" "}
                <span className="text-secondary">answered</span>
              </>
            }
            description="Straight answers to help you feel ready before your first visit."
          />
        </Reveal>

        <div className="space-y-3">
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
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                    >
                      <span className="font-serif text-base font-semibold text-foreground sm:text-[1.05rem]">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-secondary transition-transform ${
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
                    className="border-t border-[color:var(--foreground)]/6 px-5 pb-4 sm:px-6 sm:pb-5"
                  >
                    <p className="pt-3 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
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
