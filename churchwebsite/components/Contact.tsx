import { MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="section-shell surface-contact">
      <div className="section-inner">
        <Reveal>
          <div className="mb-9 text-center sm:mb-11">
            <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
              We&apos;re listening
            </p>
            <h2 className="mb-3 font-serif text-[1.75rem] leading-tight font-semibold tracking-tight sm:text-[2.1rem] md:text-[2.4rem]">
              Say <span className="text-accent">hello</span>
            </h2>
            <p className="mx-auto max-w-md text-base text-muted sm:text-lg">
              Prayer, questions, or visiting — send a note or chat on Facebook.
            </p>
          </div>
        </Reveal>

        <div className="grid items-stretch gap-5 lg:grid-cols-[1.25fr_0.75fr] lg:gap-6">
          <Reveal>
            <div className="h-full rounded-2xl border border-black/[0.05] bg-background px-4 py-5 sm:rounded-3xl sm:px-7 sm:py-8">
              <h3 className="mb-1 font-serif text-xl font-semibold text-foreground">
                Send a message
              </h3>
              <p className="mb-5 text-sm text-muted sm:mb-6">
                We will get back to you as soon as we can.
              </p>
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="flex h-full flex-col justify-center rounded-2xl bg-footer px-5 py-7 text-center text-white sm:rounded-3xl sm:px-7 sm:py-8 lg:text-left">
              <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-white/45 uppercase">
                Prefer chat?
              </p>
              <h3 className="mb-3 font-serif text-xl font-semibold sm:text-2xl">
                Message us on Facebook
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-white/65">
                Ask about visiting, prayer, or anything on your heart.
              </p>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-footer transition hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Open Facebook Page
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
