import { HandHelping, Sun } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

const weekly = site.services.slice(2);
const icons = [HandHelping, Sun];

export function Services() {
  return (
    <section id="services" className="section-shell surface-soft">
      <div className="section-inner section-inner-narrow">
        <Reveal>
          <SectionHeader
            eyebrow="Beyond Sunday"
            title={
              <>
                Grow{" "}
                <span className="text-accent">together</span>
              </>
            }
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {weekly.map((service, i) => {
            const Icon = icons[i] ?? Sun;
            return (
              <Reveal key={service.title} delayMs={i * 80} variant="scale">
                <article className="card h-full px-5 py-5 sm:px-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                  </div>
                  <h3 className="mb-1 font-serif text-lg font-semibold">
                    {service.title}
                  </h3>
                  <p className="mb-2 text-sm font-semibold text-accent">
                    {service.time}
                  </p>
                  <p className="text-sm text-muted">{service.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
