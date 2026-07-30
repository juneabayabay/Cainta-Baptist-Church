import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function Verse() {
  return (
    <section id="verse" aria-label="Scripture" className="section-shell surface-white">
      <div className="section-inner section-inner-narrow text-center">
        <Reveal>
          <blockquote>
            <p className="font-serif text-[1.2rem] leading-relaxed font-medium text-foreground italic sm:text-[1.45rem] md:text-[1.6rem]">
              &ldquo;{site.verse.text}&rdquo;
            </p>
            <footer className="mt-4 text-xs font-semibold tracking-[0.14em] text-muted uppercase">
              {site.verse.reference}
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
