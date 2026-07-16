import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function About() {
  const storyText = site.story.body.trim() || site.story.placeholder;
  const storyIsPlaceholder = !site.story.body.trim();

  return (
    <section id="about" className="section-shell surface-about">
      <div className="section-inner">
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
              Who we are
            </p>
            <h2 className="mb-4 font-serif text-[1.75rem] leading-tight font-semibold tracking-tight sm:text-[2.1rem] md:text-[2.4rem]">
              A church that loves Jesus —{" "}
              <span className="text-accent">and loves people</span>
            </h2>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Right here in Cainta, we gather to worship, open Scripture, and
              care for one another.
            </p>
          </div>
        </Reveal>

        <div className="mb-10 grid gap-5 sm:mb-12 sm:grid-cols-2 sm:gap-6 md:mb-14">
          <Reveal>
            <div className="h-full rounded-2xl border border-black/[0.05] bg-background px-5 py-6 text-center sm:rounded-3xl sm:px-7 sm:py-8 sm:text-left">
              <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
                Vision
              </p>
              <h3 className="mb-3 font-serif text-xl font-semibold text-foreground sm:text-[1.35rem]">
                Where we are going
              </h3>
              <p className="text-[0.95rem] leading-relaxed text-muted-dark sm:text-base">
                {site.vision}
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="h-full rounded-2xl border border-black/[0.05] bg-background px-5 py-6 text-center sm:rounded-3xl sm:px-7 sm:py-8 sm:text-left">
              <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
                Mission
              </p>
              <h3 className="mb-3 font-serif text-xl font-semibold text-foreground sm:text-[1.35rem]">
                What we do
              </h3>
              <p className="text-[0.95rem] leading-relaxed text-muted-dark sm:text-base">
                {site.mission}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={60}>
          <div
            className={`mb-10 rounded-2xl px-5 py-7 text-center sm:mb-12 sm:rounded-3xl sm:px-8 sm:py-9 md:mb-14 ${
              storyIsPlaceholder
                ? "border border-dashed border-border-soft bg-cream/40"
                : "border border-black/[0.05] bg-background"
            }`}
          >
            <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
              {site.story.title}
            </p>
            <h3 className="mb-4 font-serif text-xl font-semibold text-foreground sm:text-[1.35rem]">
              How God brought us here
            </h3>
            <p
              className={`mx-auto max-w-2xl text-[0.95rem] leading-relaxed sm:text-base ${
                storyIsPlaceholder ? "text-muted italic" : "text-muted-dark"
              }`}
            >
              {storyText}
            </p>
          </div>
        </Reveal>

        <div className="grid items-stretch gap-6 sm:gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-10 lg:gap-14">
          <Reveal>
            <figure className="flex h-full flex-col justify-between rounded-2xl bg-footer px-5 py-7 text-center text-white sm:rounded-3xl sm:px-8 sm:py-10 md:text-left">
              <div>
                <div
                  className="mx-auto mb-5 h-20 w-20 rounded-full bg-white/10 md:mx-0 md:h-24 md:w-24"
                  aria-hidden
                />
                <figcaption>
                  <p className="font-serif text-xl font-semibold sm:text-2xl">
                    {site.pastor.name}
                  </p>
                  <p className="mt-1 text-sm font-medium tracking-wide text-accent uppercase">
                    {site.pastor.title}
                  </p>
                </figcaption>
              </div>
              <blockquote className="mt-8 border-t border-accent/35 pt-6 text-left text-[0.95rem] leading-relaxed text-white/80 italic sm:text-base">
                &ldquo;{site.pastor.quote}&rdquo;
              </blockquote>
            </figure>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="flex h-full flex-col justify-center py-2 text-center md:text-left">
              <h3 className="mb-4 font-serif text-[1.4rem] font-semibold tracking-tight sm:text-[1.65rem]">
                You do not have to walk alone
              </h3>
              <p className="mb-4 text-[0.95rem] leading-relaxed text-muted-dark sm:text-base">
                At <strong className="text-foreground">{site.name}</strong>, we
                believe every person matters to God. Whether you are seeking
                hope, belonging, or a fresh start — we are here.
              </p>
              <p className="mb-8 text-[0.95rem] leading-relaxed text-muted-dark sm:text-base">
                Bring your family. Bring your questions. We cannot wait to meet
                you.
              </p>
              <a
                href="#visit"
                className="mx-auto inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-[0.95rem] font-semibold text-footer transition hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-fit md:mx-0"
              >
                See Sunday times
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
