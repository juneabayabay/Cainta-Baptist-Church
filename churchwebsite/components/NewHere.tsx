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
            eyebrow="New here"
            title={
              <>
                Your first Sunday is{" "}
                <span className="text-accent">simple</span>
              </>
            }
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-3">
          {site.expect.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 80} variant="scale">
              <article className="card h-full px-5 py-5 sm:px-6">
                <p className="mb-2 text-xs font-bold tracking-wide text-accent">
                  0{i + 1}
                </p>
                <h3 className="mb-1.5 font-serif text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
