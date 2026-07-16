import { Handshake } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

const pastorPlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23d4c9bd'/%3E%3Ctext x='100' y='115' font-size='60' text-anchor='middle' fill='%236b6a67' font-family='Georgia'%3E%E2%9C%9D%3C/text%3E%3C/svg%3E";

export function About() {
  return (
    <section id="about" className="bg-background py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-10 text-center sm:mb-12 md:mb-14">
            <h2 className="mb-2 font-serif text-[1.75rem] leading-tight font-semibold tracking-tight sm:text-[2rem] md:text-[2.4rem]">
              We are a <span className="text-accent">church family</span>
            </h2>
            <p className="mx-auto max-w-[560px] text-base text-muted sm:text-lg">
              We love Jesus, and we love people — right here in Cainta.
            </p>
          </div>
        </Reveal>

        <div className="grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-12 lg:gap-16">
          <Reveal>
            <figure className="text-center md:text-left">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={pastorPlaceholder}
                alt={`${site.pastor.name}, ${site.pastor.title}`}
                className="mx-auto mb-5 h-36 w-36 rounded-full border-4 border-white object-cover shadow-[0_12px_32px_rgba(0,0,0,0.1)] md:mx-0 md:h-44 md:w-44"
              />
              <figcaption>
                <p className="text-xl font-semibold">{site.pastor.name}</p>
                <p className="mt-1 text-sm font-semibold text-accent">
                  {site.pastor.title}
                </p>
                <blockquote className="mx-auto mt-4 max-w-sm border-l-2 border-accent/50 pl-4 text-left text-[0.95rem] text-muted-dark italic md:mx-0">
                  “{site.pastor.quote}”
                </blockquote>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="text-center md:text-left">
              <h3 className="mb-3 font-serif text-[1.45rem] font-semibold tracking-tight sm:mb-4 sm:text-[1.8rem]">
                You don&apos;t have to walk alone
              </h3>
              <p className="mb-4 text-[0.95rem] text-muted-dark sm:mb-5 sm:text-base">
                At <strong>{site.name}</strong>, we worship God, read the Bible,
                and care for each other. If life is hard, or faith is new —
                this is a safe place for you.
              </p>
              <p className="mb-4 text-[0.95rem] text-muted-dark sm:mb-5 sm:text-base">
                Our pastor is{" "}
                <strong>
                  {site.pastor.title} {site.pastor.name}
                </strong>
                . He loves to help people know Jesus and grow in hope.
              </p>
              <p className="mb-6 text-[0.95rem] text-muted-dark sm:text-base">
                Bring your family. Bring your questions. We can&apos;t wait to
                see you.
              </p>
              <a
                href="#visit"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-7 py-3 text-[0.95rem] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Handshake className="mr-2 h-4 w-4" aria-hidden />
                I Want to Visit
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
