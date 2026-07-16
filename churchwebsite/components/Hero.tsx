import { ArrowDown, HeartHandshake, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden md:min-h-[min(100svh,920px)] md:items-center"
    >
      <div className="absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 scale-105 bg-cover bg-[center_30%] hero-kenburns sm:bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2400&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(18,28,51,0.82)_0%,rgba(26,39,68,0.58)_45%,rgba(26,39,68,0.35)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,28,51,0.35)_0%,transparent_40%,rgba(18,28,51,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(176,141,87,0.2),transparent_45%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col justify-end px-4 pt-24 pb-14 sm:px-6 sm:pt-32 sm:pb-20 md:justify-center lg:px-8 lg:pb-24">
        <div className="max-w-xl md:max-w-2xl lg:max-w-3xl">
          <p className="hero-enter mb-3 font-serif text-lg font-semibold tracking-tight text-white/95 sm:mb-4 sm:text-xl md:text-2xl">
            Cainta Baptist Church
          </p>

          <h1 className="hero-enter hero-enter-delay-1 mb-4 font-serif text-[clamp(1.9rem,6.5vw,3.4rem)] leading-[1.12] font-semibold text-white sm:mb-5">
            You are loved by God.
            <span className="mt-1 block text-[0.92em] font-medium text-white/95 sm:mt-2">
              Come find rest in Him.
            </span>
          </h1>

          <p className="hero-enter hero-enter-delay-2 mb-8 max-w-lg text-[0.95rem] leading-relaxed text-white/82 sm:mb-10 sm:text-lg">
            Tired, searching, or simply curious — you belong here. Bring your
            heart as it is. Jesus offers hope, and this church family will walk
            with you.
          </p>

          <div className="hero-enter hero-enter-delay-3 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#new-here"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-7 py-3 text-[0.95rem] font-semibold text-footer shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:px-8"
            >
              <HeartHandshake className="mr-2 h-4 w-4 shrink-0" aria-hidden />
              I&apos;m new here
            </a>
            <a
              href="#visit"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/45 bg-white/10 px-7 py-3 text-[0.95rem] font-semibold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white hover:text-footer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:px-8"
            >
              <MapPin className="mr-2 h-4 w-4 shrink-0" aria-hidden />
              Visit this Sunday
            </a>
          </div>
        </div>
      </div>

      <a
        href="#verse"
        className="scroll-hint absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/65 transition hover:text-white sm:flex"
        aria-label="Scroll to continue"
      >
        <span className="text-[0.65rem] font-semibold tracking-[0.18em] uppercase">
          Scroll
        </span>
        <ArrowDown className="h-4 w-4" aria-hidden />
      </a>
    </section>
  );
}
