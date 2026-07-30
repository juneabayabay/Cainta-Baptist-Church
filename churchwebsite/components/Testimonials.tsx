import Image from "next/image";
import { ExternalLink, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-shell surface-soft"
      aria-labelledby="testimonials-heading"
    >
      <div className="section-inner">
        <Reveal>
          <SectionHeader
            id="testimonials-heading"
            eyebrow="Stories"
            title={
              <>
                Hearts that found{" "}
                <span className="text-accent">home</span>
              </>
            }
          />
        </Reveal>

        <div className="grid items-stretch gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:gap-5">
          <Reveal variant="left">
            <div className="card relative min-h-[220px] overflow-hidden p-0 sm:min-h-[300px]">
              <Image
                src="/community-joy.jpg"
                alt="Church family sharing joy after worship"
                fill
                sizes="(max-width: 1023px) 100vw, 55vw"
                className="object-cover"
                quality={85}
              />
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            {site.testimonials.map((item, i) => (
              <Reveal key={item.author} delayMs={i * 80} variant="right">
                <blockquote className="card h-full px-5 py-5 sm:px-6 sm:py-6">
                  <p className="mb-3 font-serif text-[1.05rem] leading-relaxed text-foreground italic sm:text-lg">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <footer className="text-sm font-semibold text-muted">
                    — {item.author}
                  </footer>
                </blockquote>
              </Reveal>
            ))}

            <Reveal delayMs={120}>
              <a
                href={site.reviews.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-center justify-between gap-3 bg-footer px-5 py-4 text-white"
              >
                <span className="flex items-center gap-2 text-sm font-medium">
                  <Star
                    className="h-4 w-4 shrink-0 fill-accent text-accent"
                    aria-hidden
                  />
                  Read Facebook reviews
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Open
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
