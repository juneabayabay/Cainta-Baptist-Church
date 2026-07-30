import { MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="section-shell surface-soft">
      <div className="section-inner">
        <Reveal>
          <SectionHeader
            eyebrow="Get in touch"
            title={
              <>
                Say <span className="text-accent">hello</span>
              </>
            }
            description="Prayer requests, questions, or planning a visit — we would love to hear from you."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="card px-5 py-6 sm:px-7 sm:py-8">
              <h3 className="mb-1 font-serif text-lg font-semibold">
                Send a message
              </h3>
              <p className="mb-6 text-sm text-muted">
                We will reply as soon as we can.
              </p>
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delayMs={70}>
            <div className="card flex h-full flex-col justify-center bg-primary-dark px-5 py-7 text-white sm:px-7 sm:py-8">
              <p className="section-eyebrow mb-3 text-white/50 before:bg-white/30">
                Prefer chat?
              </p>
              <h3 className="mb-3 font-serif text-xl font-semibold">
                Facebook Messenger
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-white/65">
                Ask about visiting, prayer, or anything on your heart.
              </p>
              <a
                href={site.social.messenger}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white text-sm"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Open Messenger
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
