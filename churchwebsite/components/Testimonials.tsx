import { ExternalLink, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-shell surface-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="section-inner">
        <Reveal>
          <SectionHeader
            id="testimonials-heading"
            eyebrow="Community"
            title={
              <>
                What visitors{" "}
                <span className="text-secondary">say about us</span>
              </>
            }
            description="Real words from people who walked through our doors — and stayed."
          />
        </Reveal>

        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          {site.testimonials.map((item, i) => (
            <Reveal key={item.author} delayMs={i * 70}>
              <blockquote className="card h-full px-5 py-6 sm:px-7 sm:py-7">
                <p className="mb-4 text-[0.9375rem] leading-relaxed text-muted-dark italic sm:text-base">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="text-sm font-semibold text-foreground">
                  — {item.author}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={80}>
          <div className="card flex flex-col items-center gap-4 bg-primary px-5 py-6 text-center text-white sm:flex-row sm:justify-between sm:px-7 sm:py-6 sm:text-left">
            <div className="flex items-start gap-3">
              <Star
                className="mt-0.5 h-5 w-5 shrink-0 fill-accent text-accent"
                aria-hidden
              />
              <div>
                <p className="font-semibold">
                  {site.reviews.count}+ {site.reviews.label}
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Read what others share about visiting {site.shortName}.
                </p>
              </div>
            </div>
            <a
              href={site.reviews.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold shrink-0 text-sm"
            >
              Read reviews
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
