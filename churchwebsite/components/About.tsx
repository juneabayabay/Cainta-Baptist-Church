import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

function PastorAvatar() {
  const initials = site.pastor.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  if (site.pastor.photo) {
    return (
      <div className="relative mb-5 h-16 w-16 overflow-hidden rounded-full sm:h-20 sm:w-20">
        <Image
          src={site.pastor.photo}
          alt={site.pastor.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>
    );
  }

  return (
    <div
      className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent/25 font-serif text-xl font-semibold text-accent sm:h-20 sm:w-20"
      aria-hidden
    >
      {initials}
    </div>
  );
}

export function About() {
  const hasStory = Boolean(site.story.body.trim());

  return (
    <section id="about" className="section-shell surface-soft">
      <div className="section-inner">
        <Reveal>
          <SectionHeader
            eyebrow="About"
            title={
              <>
                Hope rooted in{" "}
                <span className="text-accent">Christ</span>
              </>
            }
          />
        </Reveal>

        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <Reveal variant="left">
            <article className="card h-full px-5 py-6 sm:px-6">
              <p className="section-eyebrow mb-2">Vision</p>
              <p className="text-[0.95rem] leading-relaxed text-muted-dark">
                {site.vision}
              </p>
            </article>
          </Reveal>
          <Reveal variant="right" delayMs={70}>
            <article className="card h-full px-5 py-6 sm:px-6">
              <p className="section-eyebrow mb-2">Mission</p>
              <p className="text-[0.95rem] leading-relaxed text-muted-dark">
                {site.mission}
              </p>
            </article>
          </Reveal>
        </div>

        {hasStory ? (
          <Reveal delayMs={40}>
            <article className="card mb-8 px-5 py-6 text-center sm:px-8">
              <p className="section-eyebrow section-eyebrow-center mb-2">
                {site.story.title}
              </p>
              <p className="mx-auto max-w-2xl text-[0.95rem] text-muted-dark">
                {site.story.body}
              </p>
            </article>
          </Reveal>
        ) : null}

        <div className="grid items-stretch gap-4 lg:grid-cols-2 lg:gap-5">
          <Reveal variant="left">
            <figure className="card flex h-full flex-col bg-footer px-6 py-7 text-white sm:px-8">
              <PastorAvatar />
              <figcaption>
                <p className="font-serif text-xl font-semibold">
                  {site.pastor.name}
                </p>
                <p className="mt-1 text-sm font-medium tracking-wide text-accent uppercase">
                  {site.pastor.title}
                </p>
              </figcaption>
              <blockquote className="mt-5 border-t border-white/15 pt-5 text-[0.95rem] leading-relaxed text-white/75 italic">
                &ldquo;{site.pastor.quote}&rdquo;
              </blockquote>
            </figure>
          </Reveal>

          <Reveal variant="right" delayMs={80}>
            <div className="flex h-full flex-col justify-center rounded-2xl bg-primary-soft/50 px-6 py-8 text-center lg:px-8 lg:text-left">
              <h3 className="mb-3 font-serif text-xl font-semibold sm:text-2xl">
                We would love to meet you
              </h3>
              <p className="mb-6 text-[0.95rem] text-muted-dark">
                Questions or planning a visit? We&apos;re glad to help.
              </p>
              <a
                href="#contact"
                className="btn btn-primary mx-auto w-full max-w-xs lg:mx-0 lg:w-auto"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Get in touch
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
