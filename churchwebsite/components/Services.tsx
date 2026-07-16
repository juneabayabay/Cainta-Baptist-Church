import { Baby, HandHelping, Sun } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

/** Midweek & community only — Sunday times live in Visit */
const weekly = site.services.slice(2);
const icons = [HandHelping, Baby, Sun];

export function Services() {
  return (
    <section id="services" className="section-shell surface-services">
      <div className="section-inner max-w-[900px]">
        <Reveal>
          <div className="mb-10 text-center sm:mb-12">
            <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
              Beyond Sunday
            </p>
            <h2 className="mb-3 font-serif text-[1.85rem] leading-tight font-semibold tracking-tight sm:text-[2.15rem] md:text-[2.4rem]">
              More ways to{" "}
              <span className="text-accent">grow together</span>
            </h2>
            <p className="mx-auto max-w-lg text-base text-muted sm:text-lg">
              Midweek prayer and serving our neighbors in Cainta.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
          {weekly.map((service, i) => {
            const Icon = icons[i] ?? Sun;
            return (
              <Reveal key={service.title} delayMs={i * 80}>
                <div className="h-full border-t border-accent/40 pt-6 text-center sm:text-left">
                  <div className="mb-4 flex justify-center text-accent sm:justify-start">
                    <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden />
                  </div>
                  <h3 className="mb-1.5 font-serif text-lg font-semibold">
                    {service.title}
                  </h3>
                  <p className="mb-2.5 text-sm font-semibold text-accent">
                    {service.time}
                  </p>
                  <p className="text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
