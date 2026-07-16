import { Clock, MapPin, Navigation, Smile } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function Visit() {
  return (
    <section id="visit" className="section-shell surface-visit">
      <div className="section-inner">
        <Reveal>
          <div className="mb-10 text-center sm:mb-12 md:mb-14">
            <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
              Plan your visit
            </p>
            <h2 className="mb-3 font-serif text-[1.85rem] leading-tight font-semibold tracking-tight sm:text-[2.15rem] md:text-[2.5rem]">
              When &amp; where to{" "}
              <span className="text-accent">find us</span>
            </h2>
            <p className="mx-auto max-w-lg text-base text-muted sm:text-lg">
              Clear times, a simple address, and people glad you came.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:gap-6">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-black/[0.05] bg-white shadow-[0_4px_24px_rgba(24,34,45,0.04)]">
              <div className="border-b border-black/[0.05] px-5 py-5 sm:px-7">
                <h3 className="flex items-center gap-2.5 font-serif text-xl font-semibold">
                  <Clock className="h-5 w-5 text-accent" aria-hidden />
                  Sunday
                </h3>
              </div>
              <ul className="divide-y divide-black/[0.05]">
                {site.services.slice(0, 2).map((service) => (
                  <li
                    key={service.title}
                    className="flex flex-col gap-2 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-7"
                  >
                    <div>
                      <p className="font-semibold text-foreground">
                        {service.title}
                      </p>
                      <p className="mt-0.5 text-sm text-muted">
                        {service.description}
                      </p>
                    </div>
                    <p className="shrink-0 text-sm font-semibold text-accent sm:text-right">
                      {service.time.replace("Sunday · ", "")}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="flex items-start gap-3 border-t border-black/[0.05] bg-cream/80 px-5 py-4 sm:px-7">
                <Smile
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  aria-hidden
                />
                <p className="text-sm text-muted-dark">
                  <strong className="text-foreground">Kids &amp; family welcome.</strong>{" "}
                  Bring them — the whole family belongs here.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-footer px-6 py-7 text-white sm:px-7 sm:py-8">
              <div>
                <h3 className="mb-5 flex items-center gap-2.5 font-serif text-xl font-semibold">
                  <MapPin className="h-5 w-5 text-white/70" aria-hidden />
                  Find us
                </h3>
                <a
                  href={site.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-5 block rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-4 transition hover:border-white/25 hover:bg-white/[0.1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <p className="mb-1 font-medium">{site.address.line1}</p>
                  <p className="mb-3 text-sm text-white/65">
                    {site.address.line2}
                  </p>
                  <p className="text-xs font-semibold tracking-wide text-white/90">
                    Open in Google Maps →
                  </p>
                </a>
                <p className="mb-6 text-sm leading-relaxed text-white/60">
                  Lost on the way? Call us — we will help you find the church.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={site.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-footer transition hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Navigation className="h-4 w-4" aria-hidden />
                  Get directions
                </a>
                <a
                  href={`tel:${site.phone}`}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-footer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Call us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
