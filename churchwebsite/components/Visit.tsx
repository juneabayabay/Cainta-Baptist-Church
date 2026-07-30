import { Clock, ExternalLink, MapPin, Navigation, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export function Visit() {
  const googleUrl =
    site.googleBusiness.url || site.googleBusiness.mapsPlaceUrl;

  return (
    <section id="visit" className="section-shell surface-soft">
      <div className="section-inner">
        <Reveal>
          <SectionHeader
            eyebrow="Plan your visit"
            title={
              <>
                Join us this{" "}
                <span className="text-secondary">Sunday</span>
              </>
            }
            description={site.visit.headline}
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="card overflow-hidden">
              <div className="border-b border-[color:var(--foreground)]/6 bg-secondary-light/40 px-5 py-4 sm:px-6">
                <h3 className="flex items-center gap-2 font-serif text-lg font-semibold">
                  <Clock className="h-5 w-5 text-secondary" aria-hidden />
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
                    <p className="shrink-0 rounded-full bg-primary/15 px-3 py-1 text-sm font-semibold text-foreground">
                      {service.time.replace("Sunday · ", "")}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="border-t border-[color:var(--foreground)]/6 bg-secondary-light/30 px-5 py-3.5 text-sm text-muted-dark sm:px-6">
                <strong className="text-foreground">No registration needed.</strong>{" "}
                Just come — greeters will welcome you at the door.
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={70}>
            <div className="card flex h-full flex-col bg-foreground px-5 py-6 text-white sm:px-6 sm:py-7">
              <h3 className="mb-4 flex items-center gap-2 font-serif text-lg font-semibold">
                <MapPin className="h-5 w-5 text-primary" aria-hidden />
                Our address
              </h3>
              <address className="mb-4 not-italic">
                <p className="font-medium">{site.address.line1}</p>
                <p className="mt-1 text-sm text-white/70">{site.address.line2}</p>
              </address>
              <p className="mb-2 text-sm leading-relaxed text-white/65">
                <strong className="text-white/85">Landmark:</strong>{" "}
                {site.address.landmark}
              </p>
              <p className="mb-6 text-sm text-white/65">
                <strong className="text-white/85">Parking:</strong>{" "}
                {site.address.parking}
              </p>
              <div className="mt-auto grid gap-2.5 sm:grid-cols-2">
                <a
                  href={site.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-sm"
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
                  Open in Waze
                </a>
                <a
                  href={`tel:${site.phone}`}
                  className="btn btn-ghost-light text-sm sm:col-span-2"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {site.phoneIsPlaceholder
                    ? "Call us (update phone in site settings)"
                    : site.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={50}>
          <div className="card mt-5 overflow-hidden p-0">
            <div className="flex flex-col gap-4 border-b border-[color:var(--foreground)]/6 bg-secondary-light/30 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                  Map · {site.denomination} church in Cainta
                </p>
                <p className="mt-1 font-medium text-foreground">
                  {site.address.full}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href={site.address.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary shrink-0 px-4 py-2 text-sm"
                >
                  Google Maps
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
                {googleUrl ? (
                  <a
                    href={googleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary shrink-0 px-4 py-2 text-sm"
                  >
                    View on Google
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </a>
                ) : null}
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full sm:aspect-[21/9] lg:aspect-[2.4/1]">
              <iframe
                title={`Map showing ${site.name} at ${site.address.full}`}
                src={site.address.mapsEmbedUrl}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {site.visit.tips.map((tip, i) => (
            <Reveal key={tip.title} delayMs={i * 60}>
              <article className="card h-full px-5 py-5">
                <h4 className="mb-2 font-serif text-base font-semibold text-foreground">
                  {tip.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted">{tip.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
