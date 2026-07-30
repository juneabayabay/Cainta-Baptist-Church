import { MapPin, HeartHandshake } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden md:items-center"
    >
      <div className="absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center hero-kenburns"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2400&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(18,28,51,0.88)_0%,rgba(26,39,68,0.72)_50%,rgba(26,39,68,0.5)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,28,51,0.4)_0%,transparent_35%,rgba(18,28,51,0.65)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1080px] px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:px-8">
        <div className="max-w-xl lg:max-w-2xl">
          <p className="hero-enter mb-3 text-sm font-semibold tracking-[0.12em] text-white/80 uppercase sm:text-xs">
            Cainta Baptist Church
          </p>

          <h1 className="hero-enter hero-enter-delay-1 mb-5 font-serif text-[clamp(2rem,6vw,3.25rem)] leading-[1.1] font-semibold text-white">
            You are loved by God.
            <span className="mt-2 block text-[0.88em] font-medium text-white/90">
              Come find rest in Him.
            </span>
          </h1>

          <p className="hero-enter hero-enter-delay-2 mb-9 max-w-md text-[0.95rem] leading-relaxed text-white/78 sm:text-base">
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
