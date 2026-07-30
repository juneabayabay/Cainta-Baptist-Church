import { Clock, MapPin, Navigation } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export function Visit() {
  return (
    <section id="visit" className="section-shell surface-white">
      <div className="section-inner">
        <Reveal>
          <SectionHeader
            eyebrow="Plan your visit"
            title={
              <>
                When &amp; where to{" "}
                <span className="text-accent">find us</span>
              </>
            }
            description="Sunday times, our address, and a map — everything you need."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="card overflow-hidden">
              <div className="border-b border-[color:var(--foreground)]/6 px-5 py-4 sm:px-6">
                <h3 className="flex items-center gap-2 font-serif text-lg font-semibold">
                  <Clock className="h-5 w-5 text-accent" aria-hidden />
                  Sunday schedule
                </h3>
              </div>
              <ul className="divide-y divide-[color:var(--foreground)]/6">
                {site.services.slice(0, 2).map((service) => (
                  <li
                    key={service.title}
                    className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
                  >
                    <div>
                      <p className="font-semibold text-foreground">
                        {service.title}
                      </p>
                      <p className="text-sm text-muted">{service.description}</p>
                    </div>
                    <p className="shrink-0 text-sm font-semibold text-accent">
                      {service.time.replace("Sunday · ", "")}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="border-t border-[color:var(--foreground)]/6 bg-cream/50 px-5 py-3.5 text-sm text-muted-dark sm:px-6">
                Kids and families are welcome — bring everyone.
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="card flex h-full flex-col bg-footer px-5 py-6 text-white sm:px-6 sm:py-7">
              <h3 className="mb-4 flex items-center gap-2 font-serif text-lg font-semibold">
                <MapPin className="h-5 w-5 text-accent" aria-hidden />
                Location
              </h3>
              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-5 block rounded-xl border border-white/12 bg-white/5 px-4 py-4 transition hover:bg-white/10"
              >
                <p className="font-medium">{site.address.line1}</p>
                <p className="mt-1 text-sm text-white/65">{site.address.line2}</p>
              </a>
              <div className="mt-auto flex flex-col gap-2.5">
                <a
                  href={site.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-white text-sm"
                >
                  <Navigation className="h-4 w-4" aria-hidden />
                  Get directions
                </a>
                <a
                  href={`tel:${site.phone}`}
                  className="btn btn-ghost-light text-sm"
                >
                  Call {site.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={60}>
          <div className="card mt-5 overflow-hidden p-0">
            <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
              <iframe
                title={`Map showing ${site.name}`}
                src={site.address.mapsEmbedUrl}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
