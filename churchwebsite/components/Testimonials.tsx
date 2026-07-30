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
            eyebrow="Stories"
            title={
              <>
                Hearts that found{" "}
                <span className="text-accent">home</span>
              </>
            }
          />
        </Reveal>

        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          {site.testimonials.map((item, i) => (
            <Reveal key={item.author} delayMs={i * 80} variant="scale">
              <blockquote className="card h-full px-5 py-6 sm:px-7">
                <p className="mb-4 font-serif text-lg leading-relaxed text-foreground italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="text-sm font-semibold text-muted">
                  — {item.author}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={80}>
          <a
            href={site.reviews.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card flex flex-col items-center gap-3 bg-footer px-5 py-5 text-center text-white transition hover:-translate-y-0.5 sm:flex-row sm:justify-between sm:text-left"
          >
            <span className="flex items-center gap-2 font-medium">
              <Star className="h-4 w-4 fill-accent text-accent" aria-hidden />
              {site.reviews.count}+ {site.reviews.label}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
              Read reviews
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
