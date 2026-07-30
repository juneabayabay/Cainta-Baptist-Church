import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function Verse() {
  return (
    <section
      id="verse"
      aria-label="Scripture"
      className="section-shell relative overflow-hidden bg-footer text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,var(--footer-light)_0%,var(--footer)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,176,106,0.22),transparent_55%)]"
        aria-hidden
      />
      <div className="section-inner section-inner-narrow relative text-center">
        <Reveal variant="scale">
          <blockquote>
            <div className="mx-auto mb-5 h-px w-12 bg-accent" aria-hidden />
            <p className="font-serif text-[1.25rem] leading-relaxed font-medium italic sm:text-[1.5rem] md:text-[1.7rem]">
              &ldquo;{site.verse.text}&rdquo;
            </p>
            <footer className="mt-4 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
              {site.verse.reference}
            </footer>
            <div className="mx-auto mt-5 h-px w-12 bg-accent" aria-hidden />
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
