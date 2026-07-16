import { Clock, MapPin, Navigation, Smile } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function Visit() {
  return (
    <section id="visit" className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-10 text-center sm:mb-12 md:mb-14">
            <h2 className="mb-2 font-serif text-[1.75rem] leading-tight font-semibold tracking-tight sm:text-[2rem] md:text-[2.4rem]">
              Your first Sunday is{" "}
              <span className="text-accent">simple</span>
            </h2>
            <p className="mx-auto max-w-[560px] text-base text-muted sm:text-lg">
              Feeling nervous is normal. Follow these easy steps — we will be
              glad you came.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Arrive and say hi",
                text: "Come a few minutes early. We will welcome you with a smile.",
              },
              {
                step: "2",
                title: "Join small group",
                text: "8:00–9:00 AM — a gentle way to meet people before worship.",
              },
              {
                step: "3",
                title: "Worship with us",
                text: "9:00–11:30 AM — sing, listen, and leave with hope.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-black/[0.04] bg-background px-5 py-5 text-center sm:text-left"
              >
                <p className="mb-2 font-serif text-2xl font-semibold text-accent">
                  {item.step}
                </p>
                <p className="mb-1 font-semibold text-foreground">{item.title}</p>
                <p className="text-sm text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-black/[0.05] bg-background">
              <div className="border-b border-black/[0.05] px-5 py-4 sm:px-6">
                <h3 className="flex items-center gap-2 font-serif text-xl font-semibold">
                  <Clock className="h-5 w-5 text-accent" aria-hidden />
                  Sunday Times
                </h3>
              </div>
              <ul className="divide-y divide-black/[0.05]">
                {site.services.slice(0, 2).map((service) => (
                  <li
                    key={service.title}
                    className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6"
                  >
                    <div>
                      <p className="font-semibold text-foreground">
                        {service.title}
                      </p>
                      <p className="text-sm text-muted">{service.description}</p>
                    </div>
                    <p className="shrink-0 text-sm font-semibold text-accent sm:text-right">
                      {service.time}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="flex items-start gap-3 border-t border-black/[0.05] bg-cream/70 px-5 py-4 sm:px-6">
                <Smile className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <p className="text-sm text-muted-dark">
                  <strong className="text-foreground">Kids &amp; family:</strong>{" "}
                  Please bring them. Your whole family is welcome.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="flex h-full flex-col justify-between rounded-2xl bg-footer px-5 py-6 text-[#d1d5db] sm:px-7 sm:py-8">
              <div>
                <h3 className="mb-4 flex items-center gap-2 font-serif text-xl font-semibold text-white">
                  <MapPin className="h-5 w-5 text-white/80" aria-hidden />
                  Find us
                </h3>
                <a
                  href={site.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mb-5 block rounded-xl border border-white/12 bg-white/[0.05] px-4 py-3.5 transition hover:border-white/30 hover:bg-white/[0.09] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <p className="mb-1 font-medium text-white">{site.address.line1}</p>
                  <p className="mb-2 text-sm text-white/70">{site.address.line2}</p>
                  <p className="text-xs font-semibold text-white">
                    Tap to open Google Maps →
                  </p>
                </a>
                <p className="mb-6 text-sm leading-relaxed text-white/65">
                  Lost on the way? Call us. We will help you find the church.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={site.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-footer transition hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Navigation className="h-4 w-4" aria-hidden />
                  Open Maps
                </a>
                <a
                  href={`tel:${site.phone}`}
                  className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-footer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Call Us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
