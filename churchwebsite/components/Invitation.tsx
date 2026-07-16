import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function Invitation() {
  return (
    <section
      aria-label="Sunday invitation"
      className="relative overflow-hidden bg-footer py-14 text-center sm:py-16 md:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,155,123,0.2),transparent_65%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-2xl px-4 sm:px-6">
        <Reveal>
          <p className="mb-3 font-serif text-[clamp(1.5rem,4vw,2.25rem)] leading-snug font-semibold text-white">
            Don&apos;t wait.{" "}
            <span className="text-white">Come this Sunday.</span>
          </p>
          <p className="mx-auto mb-8 max-w-lg text-[0.95rem] text-white/70 sm:text-base">
            Small group at 8:00 AM. Worship until 11:30 AM. We will save a seat
            for you and your family.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#visit"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-[0.95rem] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Yes, I will come
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-7 py-3 text-[0.95rem] font-semibold text-white transition hover:bg-white hover:text-footer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              I have a question
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
