import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

/** Beliefs only — practical first-visit info lives in New Here / FAQ */
export function FitForYou() {
  return (
    <section
      id="fit"
      className="section-shell surface-white"
      aria-labelledby="fit-heading"
    >
      <div className="section-inner">
        <Reveal>
          <SectionHeader
            id="fit-heading"
            eyebrow="What we believe"
            title={
              <>
                A faith that{" "}
                <span className="text-accent">holds you</span>
              </>
            }
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.beliefs.map((belief, i) => (
            <Reveal key={belief.title} delayMs={i * 70} variant="scale">
              <article className="card h-full border-t-2 border-t-accent px-5 py-5">
                <h3 className="mb-1.5 font-serif text-base font-semibold">
                  {belief.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{belief.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
