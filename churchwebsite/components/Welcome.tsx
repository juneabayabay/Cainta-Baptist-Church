import { Heart, Sparkles, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const assurances = [
  {
    icon: Heart,
    title: "Come as you are",
    text: "No special clothes needed. Just come. We are happy you are here.",
  },
  {
    icon: Users,
    title: "You will not sit alone",
    text: "A friendly face will greet you. Ask for help anytime.",
  },
  {
    icon: Sparkles,
    title: "There is a place for you",
    text: "First time or returning — you belong with this church family.",
  },
];

export function Welcome() {
  return (
    <section
      aria-label="A warm welcome"
      className="border-b border-black/[0.04] bg-white py-12 sm:py-14 md:py-16"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
            <p className="mb-2 font-serif text-xl font-semibold text-foreground sm:text-2xl md:text-[1.75rem]">
              We are so glad you found us.
            </p>
            <p className="text-base text-muted sm:text-lg">
              Looking for hope and a church home in Cainta?{" "}
              <span className="font-medium text-foreground">
                Start with one Sunday. We will walk with you from there.
              </span>
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
          {assurances.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delayMs={i * 90}>
              <div className="text-center sm:text-left">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream text-accent">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="mb-1.5 text-base font-semibold text-foreground">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
