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
            eyebrow="Find your fit"
            title={
              <>
                Is {site.shortName}{" "}
                <span className="text-secondary">for you?</span>
              </>
            }
            description="A quick look at who we are — so you can decide if we'd be a good fit before you visit."
          />
        </Reveal>

        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {site.fitForYou.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 50}>
              <article className="card h-full px-5 py-5 sm:px-6 sm:py-6">
                <h3 className="mb-2 font-serif text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={40}>
          <div className="card bg-secondary-light/35 px-5 py-5 sm:px-7 sm:py-6">
            <p className="mb-1 text-sm font-semibold text-foreground">
              Language at CBC
            </p>
            <p className="text-sm leading-relaxed text-muted-dark">
              {site.language}
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={60}>
          <div className="mt-10">
            <h3 className="mb-5 text-center font-serif text-xl font-semibold sm:text-2xl">
              What we believe
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {site.beliefs.map((belief) => (
                <article
                  key={belief.title}
                  className="card px-5 py-5 sm:px-6 sm:py-6"
                >
                  <h4 className="mb-2 font-semibold text-foreground">
                    {belief.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted">
                    {belief.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
