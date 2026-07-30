import Image from "next/image";
import { Clock, MapPin, HeartHandshake } from "lucide-react";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden md:items-center"
    >
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/hero-sunrise-cross.jpg"
          alt=""
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[center_40%] hero-kenburns scale-105"
        />
        {/* Left-weighted overlay — keeps sunrise & cross visible, text readable */}
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(26,47,84,0.82)_0%,rgba(30,58,138,0.45)_42%,rgba(30,58,138,0.12)_72%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,47,84,0.25)_0%,transparent_35%,rgba(26,47,84,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(201,169,98,0.12),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1080px] px-4 pt-28 pb-20 sm:px-6 sm:pt-32 sm:pb-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="hero-enter mb-3 text-xs font-semibold tracking-[0.14em] text-accent uppercase">
            {site.name}
          </p>

          <h1 className="hero-enter hero-enter-delay-1 mb-4 font-serif text-[clamp(2rem,6vw,3.25rem)] leading-[1.1] font-semibold text-white">
            Hope begins
            <span className="mt-2 block text-[0.88em] font-medium text-accent">
              with a fresh start in Christ.
            </span>
          </h1>

          <p className="hero-enter hero-enter-delay-2 mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-white sm:text-base">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-accent" aria-hidden />
              {site.heroMeta}
            </span>
          </p>

          <p className="hero-enter hero-enter-delay-2 mb-2 text-[0.9rem] leading-relaxed text-white/90 sm:text-base">
            {site.description}
          </p>

          <p className="hero-enter hero-enter-delay-2 mb-8 text-sm text-white/75">
            {site.servingAreas}
          </p>

          <div className="hero-enter hero-enter-delay-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#visit" className="btn btn-primary w-full sm:w-auto">
              <Clock className="h-4 w-4 shrink-0" aria-hidden />
              Times &amp; directions
            </a>
            <a href="#new-here" className="btn btn-white w-full sm:w-auto">
              <HeartHandshake className="h-4 w-4 shrink-0" aria-hidden />
              I&apos;m new here
            </a>
            <a href="#fit" className="btn btn-ghost-light w-full sm:w-auto">
              Is this church for me?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
