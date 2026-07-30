import Image from "next/image";
import { MapPin, HeartHandshake, Sun } from "lucide-react";
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
        <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(44,62,80,0.78)_0%,rgba(44,62,80,0.45)_50%,rgba(247,178,103,0.25)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(44,62,80,0.35)_0%,transparent_38%,rgba(44,62,80,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_15%,rgba(244,197,66,0.22),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1080px] px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:px-8">
        <div className="max-w-xl lg:max-w-2xl">
          <p className="hero-enter mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-primary uppercase">
            <Sun className="h-3.5 w-3.5" aria-hidden />
            {site.name}
          </p>

          <h1 className="hero-enter hero-enter-delay-1 mb-5 font-serif text-[clamp(2rem,6vw,3.25rem)] leading-[1.1] font-semibold text-white">
            Hope begins
            <span className="mt-2 block text-[0.88em] font-medium text-primary">
              with a fresh start in Christ.
            </span>
          </h1>

          <p className="hero-enter hero-enter-delay-2 mb-9 max-w-md text-[0.95rem] leading-relaxed text-white/88 sm:text-base">
            {site.description}
          </p>

          <div className="hero-enter hero-enter-delay-3 flex flex-col gap-3 sm:flex-row">
            <a href="#new-here" className="btn btn-primary w-full sm:w-auto">
              <HeartHandshake className="h-4 w-4 shrink-0" aria-hidden />
              I&apos;m new here
            </a>
            <a href="#visit" className="btn btn-ghost-light w-full sm:w-auto">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden />
              Plan your visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
