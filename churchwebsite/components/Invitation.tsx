import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function Invitation() {
  return (
    <section
      id="invitation"
      className="relative overflow-hidden"
      aria-labelledby="invitation-heading"
    >
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/invite-sanctuary.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          quality={85}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,35,72,0.78)_0%,rgba(21,36,72,0.88)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(201,168,76,0.2),transparent_55%)]" />
      </div>

      <div className="section-shell relative">
        <div className="section-inner max-w-3xl text-center text-white">
          <Reveal variant="scale">
            <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
              An invitation from Jesus
            </p>
            <h2
              id="invitation-heading"
              className="mb-4 font-serif text-[clamp(1.65rem,4.2vw,2.35rem)] font-semibold leading-tight"
            >
              If your heart is heavy —{" "}
              <span className="text-accent">come to Him</span>
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-[0.95rem] leading-relaxed text-white/80 sm:text-base">
              God has not forgotten you. Take one step this Sunday. We will meet
              you with kindness, prayer, and the hope found in Christ.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#visit" className="btn btn-gold w-full max-w-xs sm:w-auto">
                I will come this Sunday
              </a>
              <a
                href="#contact"
                className="btn btn-ghost-light w-full max-w-xs sm:w-auto"
              >
                I need prayer
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
