import Image from "next/image";
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
  return (
    <section id="about" className="section-shell surface-soft">
      <div className="section-inner">
        <Reveal>
          <SectionHeader
            eyebrow="About"
            title={
              <>
                A church that walks{" "}
                <span className="text-accent">with you</span>
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

        <Reveal variant="scale">
          <figure className="card mx-auto flex max-w-2xl flex-col bg-footer px-6 py-7 text-white sm:px-8 sm:py-8">
            <PastorAvatar />
            <figcaption>
              <p className="font-serif text-xl font-semibold">
                {site.pastor.name}
              </p>
              <p className="mt-1 text-sm font-medium tracking-wide text-accent uppercase">
                {site.pastor.title}
              </p>
            </figcaption>
            <blockquote className="mt-5 border-t border-white/15 pt-5 text-[0.95rem] leading-relaxed text-white/80 italic">
              &ldquo;{site.pastor.quote}&rdquo;
            </blockquote>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
