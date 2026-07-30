import { Clock, ExternalLink, MapPin, Navigation } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { phoneLabel, phoneLinkProps } from "@/lib/contact";
import { site } from "@/lib/site";

export function Visit() {
  const phone = phoneLinkProps();

  return (
    <section id="visit" className="section-shell surface-white">
      <div className="section-inner">
        <Reveal>
          <SectionHeader
            eyebrow="Visit"
            title={
              <>
                We saved a seat{" "}
                <span className="text-accent">for you</span>
              </>
            }
            description={site.visit.headline}
          />
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
          <Reveal variant="left">
            <div className="card overflow-hidden">
              <div className="border-b border-[color:var(--foreground)]/6 bg-primary-soft/60 px-5 py-4 sm:px-6">
                <h3 className="flex items-center gap-2 font-serif text-lg font-semibold">
                  <Clock className="h-5 w-5 text-primary" aria-hidden />
                  Sunday
                </h3>
              </div>
              <ul className="divide-y divide-[color:var(--foreground)]/6">
                {site.services.slice(0, 2).map((service) => (
                  <li
                    key={service.title}
                    className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
                  >
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground">
                        {service.title}
                      </p>
                      <p className="text-sm text-muted">{service.description}</p>
                    </div>
                    <p className="shrink-0 rounded-full bg-accent/20 px-3 py-1 text-sm font-semibold text-primary">
                      {service.time.replace("Sunday · ", "")}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal variant="right" delayMs={80}>
            <div className="card flex h-full flex-col bg-footer px-5 py-6 text-white sm:px-6 sm:py-7">
              <h3 className="mb-3 flex items-center gap-2 font-serif text-lg font-semibold">
                <MapPin className="h-5 w-5 text-accent" aria-hidden />
                Location
              </h3>
              <address className="mb-3 not-italic">
                <p className="font-medium">{site.address.line1}</p>
                <p className="mt-1 text-sm text-white/65">{site.address.line2}</p>
              </address>
              <p className="mb-5 text-sm text-white/55">{site.address.landmark}</p>
              <div className="mt-auto grid gap-2.5 sm:grid-cols-2">
                <a
                  href={site.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold text-sm"
                >
                  <Navigation className="h-4 w-4" aria-hidden />
                  Directions
                </a>
                <a
                  href={site.address.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost-light text-sm"
                >
                  Waze
                </a>
                <a
                  {...phone}
                  className="btn btn-ghost-light text-sm sm:col-span-2"
                >
                  {phoneLabel()}
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={60} variant="scale">
          <div className="card mt-4 overflow-hidden p-0 sm:mt-5">
            <div className="flex flex-col gap-3 border-b border-[color:var(--foreground)]/6 bg-primary-soft/40 px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <p className="text-sm font-medium text-foreground">
                {site.address.full}
              </p>
              <a
                href={site.address.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary shrink-0 px-4 py-2 text-xs"
              >
                Google Maps
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            </div>
            <div className="relative aspect-[4/3] w-full sm:aspect-[21/9] lg:aspect-[2.4/1]">
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
