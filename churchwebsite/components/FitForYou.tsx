import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

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
            eyebrow="Beliefs"
            title={
              <>
                Is {site.shortName}{" "}
                <span className="text-accent">for you?</span>
              </>
            }
          />
        </Reveal>

        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.fitForYou.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 70} variant="scale">
              <article className="card h-full border-t-2 border-t-accent px-5 py-5">
                <h3 className="mb-1.5 font-serif text-base font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {site.beliefs.map((belief, i) => (
            <Reveal key={belief.title} delayMs={i * 50}>
              <article className="rounded-2xl bg-primary-soft/70 px-4 py-4">
                <h4 className="mb-1 text-sm font-semibold text-primary">
                  {belief.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted-dark">
                  {belief.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
