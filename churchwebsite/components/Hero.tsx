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
          src="/hero-welcome-congregation.jpg"
          alt="Congregation gathering outside Cainta Baptist Church"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[65%_center] hero-kenburns scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(15,35,72,0.9)_0%,rgba(26,58,143,0.55)_40%,rgba(26,58,143,0.1)_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,35,72,0.25)_0%,transparent_35%,rgba(15,35,72,0.5)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_82%_35%,rgba(212,181,106,0.2),transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1080px] px-4 pt-28 pb-20 sm:px-6 sm:pt-32 sm:pb-24 lg:px-8">
        <div className="max-w-xl">
          <p className="hero-enter mb-3 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            {site.name}
          </p>

          <h1 className="hero-enter hero-enter-delay-1 mb-4 font-serif text-[clamp(2rem,6vw,3.4rem)] leading-[1.08] font-semibold text-white">
            You are welcome here.
          </h1>

          <p className="hero-enter hero-enter-delay-2 mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/90 sm:text-base">
            <MapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden />
            {site.heroMeta}
          </p>

          <div className="hero-enter hero-enter-delay-3 flex flex-col gap-3 sm:flex-row">
            <a href="#visit" className="btn btn-gold w-full sm:w-auto">
              <Clock className="h-4 w-4 shrink-0" aria-hidden />
              Plan your visit
            </a>
            <a href="#new-here" className="btn btn-white w-full sm:w-auto">
              <HeartHandshake className="h-4 w-4 shrink-0" aria-hidden />
              I&apos;m new
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
