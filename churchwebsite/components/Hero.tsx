import { Clock, HeartHandshake, MapPin } from "lucide-react";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden md:min-h-[min(100svh,900px)] md:items-center"
    >
      <div className="absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center hero-kenburns"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=2400&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(20,28,36,0.88)_0%,rgba(30,40,50,0.72)_48%,rgba(30,40,50,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(20,28,36,0.75)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 pt-24 pb-14 sm:px-6 sm:pt-28 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="max-w-xl hero-enter md:max-w-2xl">
          <p className="mb-2 font-serif text-lg font-semibold tracking-tight text-white/90 sm:text-xl">
            Cainta Baptist Church
          </p>

          <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-white/65 uppercase sm:text-sm">
            A church family in Cainta
          </p>

          <h1 className="mb-4 font-serif text-[clamp(1.75rem,5vw,2.85rem)] leading-[1.12] font-semibold text-white">
            You are welcome here.
          </h1>

          <p className="mb-8 max-w-md text-[0.95rem] leading-relaxed text-white/78 sm:mb-9 sm:max-w-lg sm:text-lg">
            New to church? Come as you are. We will greet you, walk with you,
            and help you feel at home — starting this Sunday.
          </p>

          <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
            <a
              href="#new-here"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-3 text-[0.95rem] font-semibold text-footer transition hover:-translate-y-0.5 hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <HeartHandshake className="mr-2 h-4 w-4 shrink-0" aria-hidden />
              I&apos;m New Here
            </a>
            <a
              href="#visit"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/50 bg-white/10 px-7 py-3 text-[0.95rem] font-semibold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white hover:text-footer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Clock className="mr-2 h-4 w-4 shrink-0" aria-hidden />
              Sunday Times
            </a>
          </div>

          <a
            href={site.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex max-w-full items-start gap-2 text-sm text-white/65 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:items-center"
          >
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 sm:mt-0" aria-hidden />
            <span className="leading-snug">
              {site.address.line1}, Cainta · Open in Maps · Small group 8 AM ·
              Worship 9–11:30 AM
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
