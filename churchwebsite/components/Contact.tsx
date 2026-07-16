import { Mail, Send } from "lucide-react";
import { ChurchDetails } from "@/components/ChurchDetails";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="bg-background py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-10 text-center sm:mb-12 md:mb-14">
            <h2 className="mb-2 font-serif text-[1.75rem] leading-tight font-semibold tracking-tight sm:text-[2rem] md:text-[2.4rem]">
              We would love to{" "}
              <span className="text-accent">hear from you</span>
            </h2>
            <p className="mx-auto max-w-[560px] text-base text-muted sm:text-lg">
              Need prayer? Want to visit? Just say hello. Message us anytime —
              you are never a bother.
            </p>
          </div>
        </Reveal>

        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          <Reveal>
            <ChurchDetails />
          </Reveal>

          <Reveal delayMs={100}>
            <div className="flex h-full min-h-[280px] flex-col justify-center rounded-2xl border border-black/[0.04] bg-white px-5 py-8 text-center sm:px-8 md:px-10">
              <Send className="mx-auto mb-3 h-9 w-9 text-accent sm:mb-4 sm:h-10 sm:w-10" aria-hidden />
              <h3 className="mb-1.5 font-serif text-xl font-semibold sm:text-2xl">
                Coming this Sunday?
              </h3>
              <p className="mx-auto mb-6 max-w-[320px] text-sm text-muted sm:text-base">
                Send us a short note. We will look for you and help you feel at
                home.
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                  href={`mailto:${site.email}?subject=I'd%20like%20to%20visit%20this%20Sunday`}
                  className="inline-flex min-h-11 w-full max-w-xs items-center justify-center rounded-full bg-accent px-7 py-3 text-[0.95rem] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto"
                >
                  <Mail className="mr-2 h-4 w-4" aria-hidden />
                  Message Us
                </a>
                <a
                  href={site.social.messenger}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 w-full max-w-xs items-center justify-center rounded-full border-2 border-border-soft px-7 py-3 text-[0.95rem] font-semibold text-foreground transition hover:border-foreground hover:bg-foreground hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto"
                >
                  Chat on Messenger
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
