import Image from "next/image";
import { Clock, Heart } from "lucide-react";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden md:min-h-[100svh] md:items-center"
    >
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/hero-come-home.jpg"
          alt="Families welcomed outside Cainta Baptist Church"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[72%_center] sm:object-[68%_center] hero-kenburns scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(18,28,56,0.93)_0%,rgba(30,58,114,0.58)_42%,rgba(30,58,114,0.15)_72%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,28,56,0.35)_0%,transparent_40%,rgba(18,28,56,0.62)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(212,176,106,0.18),transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1080px] px-4 pt-[max(6.5rem,env(safe-area-inset-top)+5rem)] pb-[calc(5.75rem+env(safe-area-inset-bottom,0px))] sm:px-6 sm:pt-32 sm:pb-24 lg:px-8 lg:pb-28">
        <div className="max-w-xl min-w-0">
          <p className="hero-enter mb-3 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            {site.name}
          </p>

          <h1 className="hero-enter hero-enter-delay-1 mb-4 font-serif text-[clamp(1.9rem,5.8vw,3.35rem)] leading-[1.08] font-semibold text-white">
            Come home to hope.
          </h1>

          <p className="hero-enter hero-enter-delay-2 mb-5 max-w-md text-[0.95rem] leading-relaxed text-white/90 sm:mb-6 sm:text-base">
            Tired or searching — Jesus offers rest, and this church family will
            walk with you.
          </p>

          <p className="hero-enter hero-enter-delay-2 mb-7 inline-flex items-center gap-2 text-sm font-medium text-white/85 sm:mb-8">
            <Clock className="h-4 w-4 shrink-0 text-accent" aria-hidden />
            Sundays from 9:00 AM
          </p>

          <div className="hero-enter hero-enter-delay-3 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#visit" className="btn btn-gold w-full sm:w-auto">
              Join us this Sunday
            </a>
            <a href="#new-here" className="btn btn-white w-full sm:w-auto">
              <Heart className="h-4 w-4 shrink-0" aria-hidden />
              First time?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
