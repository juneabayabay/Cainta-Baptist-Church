import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { imageQuality, sizesFullWidth } from "@/lib/images";

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
          sizes={sizesFullWidth}
          quality={imageQuality.fullBleed}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,28,56,0.82)_0%,rgba(18,28,56,0.92)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_25%,rgba(212,176,106,0.22),transparent_58%)]" />
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
              God has not forgotten you. In Christ there is forgiveness, rest,
              and a new beginning.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="btn btn-gold w-full max-w-xs sm:w-auto"
              >
                I need prayer
              </a>
              <a
                href="#visit"
                className="btn btn-ghost-light w-full max-w-xs sm:w-auto"
              >
                See Sunday times
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
