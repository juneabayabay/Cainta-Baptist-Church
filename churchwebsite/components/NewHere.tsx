import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export function NewHere() {
  return (
    <section
      id="new-here"
      className="section-shell surface-soft"
      aria-labelledby="new-here-heading"
    >
      <div className="section-inner">
        <Reveal>
          <SectionHeader
            id="new-here-heading"
            eyebrow="First visit"
            title={
              <>
                Your first Sunday is{" "}
                <span className="text-secondary">simple</span>
              </>
            }
            description="No dress code stress, no perfect answers needed — just come as you are and let us welcome you."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {site.expect.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 60}>
              <article className="card h-full px-5 py-5 sm:px-6 sm:py-6">
                <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={80}>
          <div className="mt-10 flex justify-center">
            <a href="#visit" className="btn btn-primary w-full max-w-xs sm:w-auto">
              See times &amp; map
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
