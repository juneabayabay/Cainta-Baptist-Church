import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export function About() {
  const storyText = site.story.body.trim() || site.story.placeholder;
  const storyIsPlaceholder = !site.story.body.trim();

  return (
    <section id="about" className="section-shell surface-white">
      <div className="section-inner">
        <Reveal>
          <SectionHeader
            eyebrow="About us"
            title={
              <>
                A church rooted in hope —{" "}
                <span className="text-secondary">built on love</span>
              </>
            }
            description="In Cainta, we worship together, grow in God's Word, and encourage one another through every season."
          />
        </Reveal>

        <div className="mb-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mb-12">
          <Reveal>
            <article className="card h-full px-5 py-6 sm:px-7 sm:py-7">
              <p className="section-eyebrow mb-3">Vision</p>
              <p className="text-[0.9375rem] leading-relaxed text-muted-dark sm:text-base">
                {site.vision}
              </p>
            </article>
          </Reveal>

          <Reveal delayMs={60}>
            <article className="card h-full px-5 py-6 sm:px-7 sm:py-7">
              <p className="section-eyebrow mb-3">Mission</p>
              <p className="text-[0.9375rem] leading-relaxed text-muted-dark sm:text-base">
                {site.mission}
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal delayMs={40}>
          <article
            className={`card mb-10 px-5 py-6 text-center sm:mb-12 sm:px-8 sm:py-8 ${
              storyIsPlaceholder ? "border-dashed bg-secondary-light/40" : ""
            }`}
          >
            <p className="section-eyebrow section-eyebrow-center mb-3">
              {site.story.title}
            </p>
            <p
              className={`mx-auto max-w-2xl text-[0.9375rem] leading-relaxed sm:text-base ${
                storyIsPlaceholder ? "text-muted italic" : "text-muted-dark"
              }`}
            >
              {storyText}
            </p>
          </article>
        </Reveal>

        <div className="grid items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
          <Reveal>
            <figure className="card flex h-full flex-col bg-foreground px-6 py-8 text-white sm:px-8 sm:py-9">
              <div className="mb-6 h-16 w-16 rounded-full bg-primary/20" aria-hidden />
              <figcaption>
                <p className="font-serif text-xl font-semibold sm:text-2xl">
                  {site.pastor.name}
                </p>
                <p className="mt-1 text-sm font-medium tracking-wide text-primary uppercase">
                  {site.pastor.title}
                </p>
              </figcaption>
              <blockquote className="mt-6 border-t border-white/15 pt-6 text-[0.9375rem] leading-relaxed text-white/75 italic sm:text-base">
                &ldquo;{site.pastor.quote}&rdquo;
              </blockquote>
            </figure>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="flex h-full flex-col justify-center px-1 py-2 text-center lg:text-left">
              <h3 className="mb-3 font-serif text-xl font-semibold sm:text-2xl">
                Every day is a new beginning
              </h3>
              <p className="mb-6 text-[0.9375rem] leading-relaxed text-muted-dark sm:text-base">
                God&apos;s mercies are new every morning. Whether you need
                encouragement, community, or a fresh start — there is a place
                for you here.
              </p>
              <a
                href="#visit"
                className="btn btn-primary mx-auto w-full max-w-xs lg:mx-0 lg:w-auto"
              >
                Plan your visit
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
