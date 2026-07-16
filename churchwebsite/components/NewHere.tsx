import { Coffee, DoorOpen, HandHeart, UsersRound } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const journey = [
  {
    icon: DoorOpen,
    title: "You walk in",
    text: "A warm hello. No pressure. Just welcome.",
  },
  {
    icon: Coffee,
    title: "You feel at home",
    text: "Sit anywhere. Ask anything. Breathe.",
  },
  {
    icon: UsersRound,
    title: "You meet people",
    text: "Small group at 8 AM — gentle friendship.",
  },
  {
    icon: HandHeart,
    title: "You grow with us",
    text: "Worship, prayer, and care — Sunday by Sunday.",
  },
];

export function NewHere() {
  return (
    <section
      id="new-here"
      className="section-shell surface-welcome"
      aria-labelledby="new-here-heading"
    >
      <div className="section-inner">
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
              First time visiting?
            </p>
            <h2
              id="new-here-heading"
              className="mb-4 font-serif text-[1.75rem] leading-tight font-semibold tracking-tight sm:text-[2.1rem] md:text-[2.4rem]"
            >
              We saved a seat{" "}
              <span className="text-accent">for you</span>
            </h2>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Walking into a new church can feel hard. You do not have to figure
              it out alone — God is inviting you, and we will walk with you.
            </p>
          </div>
        </Reveal>

        <div className="mb-10 grid grid-cols-1 gap-8 min-[480px]:grid-cols-2 lg:mb-12 lg:grid-cols-4 lg:gap-6">
          {journey.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delayMs={i * 90}>
              <article className="relative text-center sm:text-left">
                <span
                  className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-footer text-sm font-bold text-white"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <div className="mb-3 flex justify-center text-accent sm:justify-start">
                  <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden />
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                  {text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={100}>
          <div className="flex justify-center">
            <a
              href="#visit"
              className="inline-flex min-h-12 w-full max-w-xs items-center justify-center rounded-full bg-accent px-8 py-3 text-[0.95rem] font-semibold text-footer transition hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto"
            >
              See times &amp; directions
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
