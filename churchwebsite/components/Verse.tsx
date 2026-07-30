import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function Verse() {
  return (
    <section id="verse" aria-label="Scripture" className="section-shell surface-white">
      <div className="section-inner section-inner-narrow text-center">
        <Reveal>
          <blockquote>
            <div
              className="mx-auto mb-5 h-px w-10 bg-accent sm:mb-6"
              aria-hidden
            />
            <p className="font-serif text-[1.2rem] leading-relaxed font-medium text-foreground italic sm:text-[1.45rem] md:text-[1.6rem]">
              &ldquo;{site.verse.text}&rdquo;
            </p>
            <footer className="mt-4 text-xs font-semibold tracking-[0.14em] text-accent uppercase">
              {site.verse.reference}
            </footer>
            <div
              className="mx-auto mt-5 h-px w-10 bg-accent sm:mt-6"
              aria-hidden
            />
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
