import { Baby, HandHelping, Sun, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

const icons = [Users, Sun, HandHelping, Baby];

export function Services() {
  return (
    <section id="services" className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-10 text-center sm:mb-12 md:mb-14">
            <h2 className="mb-2 font-serif text-[1.75rem] leading-tight font-semibold tracking-tight sm:text-[2rem] md:text-[2.4rem]">
              Join us <span className="text-accent">this week</span>
            </h2>
            <p className="mx-auto max-w-[560px] text-base text-muted sm:text-lg">
              Every gathering is a chance to grow closer to God and to each
              other. You are invited.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {site.services.map((service, i) => {
            const Icon = icons[i] ?? Sun;
            return (
              <Reveal key={service.title} delayMs={i * 80}>
                <div className="h-full border-t-2 border-accent/70 pt-5 text-center sm:text-left">
                  <div className="mb-3 flex justify-center text-accent sm:justify-start">
                    <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="mb-1 text-lg font-semibold">{service.title}</h3>
                  <p className="mb-2 text-sm font-semibold text-accent">
                    {service.time}
                  </p>
                  <p className="text-sm text-muted sm:text-[0.95rem]">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
