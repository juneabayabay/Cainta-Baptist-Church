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
          src="/hero-hope-light-4k.jpg"
          alt=""
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover hero-kenburns scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(44,62,80,0.82)_0%,rgba(44,62,80,0.48)_50%,rgba(247,178,103,0.22)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(44,62,80,0.38)_0%,transparent_38%,rgba(44,62,80,0.58)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_15%,rgba(244,197,66,0.2),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1080px] px-4 pt-28 pb-20 sm:px-6 sm:pt-32 sm:pb-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="hero-enter mb-3 text-xs font-semibold tracking-[0.14em] text-primary uppercase">
            {site.name}
          </p>

          <h1 className="hero-enter hero-enter-delay-1 mb-4 font-serif text-[clamp(2rem,6vw,3.25rem)] leading-[1.1] font-semibold text-white">
            Hope begins
            <span className="mt-2 block text-[0.88em] font-medium text-primary">
              with a fresh start in Christ.
            </span>
          </h1>

          <p className="hero-enter hero-enter-delay-2 mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-white sm:text-base">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" aria-hidden />
              {site.heroMeta}
            </span>
          </p>

          <p className="hero-enter hero-enter-delay-2 mb-2 text-[0.9rem] leading-relaxed text-white/85 sm:text-base">
            {site.description}
          </p>

          <p className="hero-enter hero-enter-delay-2 mb-8 text-sm text-white/70">
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
