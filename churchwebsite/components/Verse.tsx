import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function Verse() {
  return (
    <section
      id="verse"
      aria-label="Scripture"
      className="section-shell surface-verse"
    >
      <div className="section-inner max-w-2xl text-center">
        <Reveal>
          <blockquote>
            <div
              className="mx-auto mb-5 h-px w-12 bg-accent/40 sm:mb-7"
              aria-hidden
            />
            <p className="font-serif text-[1.15rem] leading-relaxed font-medium tracking-tight text-balance text-foreground italic sm:text-[1.4rem] sm:leading-snug md:text-[1.65rem]">
              &ldquo;{site.verse.text}&rdquo;
            </p>
            <footer className="mt-5 text-[0.7rem] font-semibold tracking-[0.18em] text-muted uppercase sm:mt-6 sm:text-xs">
              {site.verse.reference}
            </footer>
            <div
              className="mx-auto mt-5 h-px w-12 bg-accent/40 sm:mt-7"
              aria-hidden
            />
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
