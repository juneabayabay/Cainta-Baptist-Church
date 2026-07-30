import { Reveal } from "@/components/Reveal";

export function Invitation() {
  return (
    <section
      id="invitation"
      className="section-shell relative overflow-hidden bg-footer text-white"
      aria-labelledby="invitation-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(201,168,76,0.22),transparent_55%)]"
        aria-hidden
      />
      <div className="section-inner relative max-w-3xl text-center">
        <Reveal variant="scale">
          <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            An invitation
          </p>
          <h2
            id="invitation-heading"
            className="mb-4 font-serif text-[clamp(1.6rem,4vw,2.2rem)] font-semibold leading-tight"
          >
            If your heart is heavy —{" "}
            <span className="text-accent">this is for you</span>
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-[0.95rem] leading-relaxed text-white/75">
            God has not forgotten you. Take one step this Sunday. We will meet
            you with kindness, prayer, and hope.
          </p>
          <a href="#visit" className="btn btn-gold">
            I will come this Sunday
          </a>
        </Reveal>
      </div>
    </section>
  );
}
