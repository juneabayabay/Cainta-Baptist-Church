import { ExternalLink, HandHelping, Sun } from "lucide-react";
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
                Grow closer to{" "}
                <span className="text-accent">Jesus</span>
              </>
            }
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {weekly.map((service, i) => {
            const Icon = icons[i] ?? Sun;
            const isOutreach = service.title === "Community Outreach";

            return (
              <Reveal key={service.title} delayMs={i * 80} variant="scale">
                <article className="card flex h-full flex-col px-5 py-5 sm:px-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                  </div>
                  <h3 className="mb-1 font-serif text-lg font-semibold">
                    {service.title}
                  </h3>
                  <p className="mb-2 text-sm font-semibold text-primary">
                    {service.time}
                  </p>
                  <p className="mb-4 flex-1 text-sm text-muted">
                    {service.description}
                  </p>
                  {isOutreach ? (
                    <a
                      href={site.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                    >
                      See updates on Facebook
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  ) : null}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
