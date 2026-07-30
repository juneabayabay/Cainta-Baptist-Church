import Image from "next/image";
import { MapPin, HeartHandshake } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden md:items-center"
    >
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/hero-welcome.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover hero-kenburns scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(46,107,173,0.82)_0%,rgba(74,144,226,0.55)_45%,rgba(51,51,51,0.35)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(46,107,173,0.35)_0%,transparent_40%,rgba(51,51,51,0.5)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_10%,rgba(212,175,55,0.15),transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1080px] px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:px-8">
        <div className="max-w-xl lg:max-w-2xl">
          <p className="hero-enter mb-3 text-xs font-semibold tracking-[0.14em] text-white/85 uppercase">
            Cainta Baptist Church
          </p>

          <h1 className="hero-enter hero-enter-delay-1 mb-5 font-serif text-[clamp(2rem,6vw,3.25rem)] leading-[1.1] font-semibold text-white">
            You are loved by God.
            <span className="mt-2 block text-[0.88em] font-medium text-[#F8F6F2]">
              Come find rest in Him.
            </span>
          </h1>

          <p className="hero-enter hero-enter-delay-2 mb-9 max-w-md text-[0.95rem] leading-relaxed text-white/85 sm:text-base">
            Whether you are tired, searching, or simply curious — you belong
            here. Come as you are this Sunday.
          </p>

          <div className="hero-enter hero-enter-delay-3 flex flex-col gap-3 sm:flex-row">
            <a href="#new-here" className="btn btn-white w-full sm:w-auto">
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
