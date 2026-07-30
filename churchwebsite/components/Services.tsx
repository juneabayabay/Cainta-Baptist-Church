import { Baby, HandHelping, Sun } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

const weekly = site.services.slice(2);
const icons = [HandHelping, Baby, Sun];

export function Services() {
  return (
    <section id="services" className="section-shell surface-soft">
      <div className="section-inner section-inner-narrow">
        <Reveal>
          <SectionHeader
            eyebrow="Beyond Sunday"
            title={
              <>
                More ways to{" "}
                <span className="text-accent">grow together</span>
              </>
            }
            description="Midweek prayer, Bible study, and serving our neighbors in Cainta."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {weekly.map((service, i) => {
            const Icon = icons[i] ?? Sun;
            return (
              <Reveal key={service.title} delayMs={i * 70}>
                <article className="card h-full px-5 py-5 sm:px-6 sm:py-6">
                  <Icon
                    className="mb-3 h-5 w-5 text-secondary"
                    strokeWidth={1.6}
                    aria-hidden
                  />
                  <h3 className="mb-1 font-serif text-lg font-semibold">
                    {service.title}
                  </h3>
                  <p className="mb-2 text-sm font-semibold text-primary">
                    {service.time}
                  </p>
                  <p className="text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
