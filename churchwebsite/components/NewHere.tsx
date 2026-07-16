import {
  Coffee,
  DoorOpen,
  HandHeart,
  MapPinned,
  MessageCircleHeart,
  UsersRound,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

const journey = [
  {
    icon: DoorOpen,
    title: "You walk in",
    text: "Someone greets you with a smile. No pressure. Just a warm hello.",
  },
  {
    icon: Coffee,
    title: "You feel at home",
    text: "Sit anywhere. Ask questions. We are glad you came.",
  },
  {
    icon: UsersRound,
    title: "You meet people",
    text: "Small group at 8 AM is a gentle way to make friends.",
  },
  {
    icon: HandHeart,
    title: "You grow with us",
    text: "Worship, prayer, and care — one Sunday at a time.",
  },
];

export function NewHere() {
  return (
    <section
      id="new-here"
      className="bg-background py-12 sm:py-16 md:py-20 lg:py-24"
      aria-labelledby="new-here-heading"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 md:mb-14">
            <p className="mb-2 text-xs font-semibold tracking-[0.14em] text-accent uppercase sm:text-sm">
              For first-time guests
            </p>
            <h2
              id="new-here-heading"
              className="mb-3 font-serif text-[1.75rem] leading-tight font-semibold tracking-tight sm:text-[2rem] md:text-[2.4rem]"
            >
              New here?{" "}
              <span className="text-accent">Here is what happens</span>
            </h2>
            <p className="text-base text-muted sm:text-lg">
              We know a first visit can feel scary. This is how we welcome you —
              step by step, with kindness.
            </p>
          </div>
        </Reveal>

        <div className="mb-10 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:mb-12 lg:grid-cols-4 lg:gap-5">
          {journey.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delayMs={i * 80}>
              <article className="relative h-full rounded-2xl border border-black/[0.04] bg-white p-5 sm:p-6">
                <span
                  className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <div className="mb-3 text-accent">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="mb-1.5 text-base font-semibold text-foreground sm:text-lg">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={120}>
          <div className="rounded-2xl bg-footer px-5 py-7 text-center sm:px-8 sm:py-9 md:flex md:items-center md:justify-between md:gap-8 md:text-left">
            <div className="mb-6 md:mb-0 md:max-w-xl">
              <h3 className="mb-2 flex items-center justify-center gap-2 font-serif text-xl font-semibold text-white md:justify-start sm:text-2xl">
                <MessageCircleHeart className="h-6 w-6 text-white/80" aria-hidden />
                Ready for your first Sunday?
              </h3>
              <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                Small group <strong className="text-white">8:00–9:00 AM</strong>,
                then worship{" "}
                <strong className="text-white">9:00–11:30 AM</strong>. Bring
                your family. Come as you are. We will take care of the rest.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:mx-auto sm:max-w-md sm:flex-row md:mx-0 md:w-auto md:max-w-none md:shrink-0">
              <a
                href="#visit"
                className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-footer transition hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:flex-none"
              >
                Plan my visit
              </a>
              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-footer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:flex-none"
              >
                <MapPinned className="h-4 w-4" aria-hidden />
                Get directions
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
