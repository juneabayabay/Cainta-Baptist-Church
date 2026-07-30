import Image from "next/image";
import { Clock, Heart } from "lucide-react";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden md:items-center"
    >
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/hero-come-home.jpg"
          alt="Families welcomed outside Cainta Baptist Church"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[72%_center] hero-kenburns scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(15,35,72,0.9)_0%,rgba(26,58,143,0.5)_40%,rgba(26,58,143,0.08)_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,35,72,0.22)_0%,transparent_40%,rgba(15,35,72,0.5)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1080px] px-4 pt-28 pb-20 sm:px-6 sm:pt-32 sm:pb-24 lg:px-8">
        <div className="max-w-xl">
          <p className="hero-enter mb-3 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            {site.name}
          </p>

          <h1 className="hero-enter hero-enter-delay-1 mb-4 font-serif text-[clamp(2rem,6vw,3.35rem)] leading-[1.08] font-semibold text-white">
            Come home to hope.
            <span className="mt-2 block text-[0.82em] font-medium text-accent">
              You are loved. You belong here.
            </span>
          </h1>

          <p className="hero-enter hero-enter-delay-2 mb-7 max-w-md text-[0.95rem] leading-relaxed text-white/88">
            Tired, searching, or simply curious — Jesus is waiting with rest,
            and this church family will walk with you.
          </p>

          <div className="hero-enter hero-enter-delay-3 mb-8 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/90 backdrop-blur-sm sm:inline-block sm:px-5">
            <p className="font-medium">
              Sundays in Cainta · Small Group 9:00 AM · Worship 10:00 AM
            </p>
          </div>

          <div className="hero-enter hero-enter-delay-3 flex flex-col gap-3 sm:flex-row">
            <a href="#visit" className="btn btn-gold w-full sm:w-auto">
              <Clock className="h-4 w-4 shrink-0" aria-hidden />
              Join us this Sunday
            </a>
            <a href="#new-here" className="btn btn-white w-full sm:w-auto">
              <Heart className="h-4 w-4 shrink-0" aria-hidden />
              I need hope
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
