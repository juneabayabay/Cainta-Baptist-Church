import { Mail, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

const hasFormKey =
  Boolean(process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim());

export function Contact() {
  return (
    <section id="contact" className="section-shell surface-soft">
      <div className="section-inner">
        <Reveal>
          <SectionHeader
            eyebrow="Get in touch"
            title={
              <>
                We&apos;d love to{" "}
                <span className="text-secondary">hear from you</span>
              </>
            }
            description="Prayer requests, questions about visiting, or just saying hello — reach out anytime."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="space-y-5">
              <div className="card flex h-full flex-col justify-center bg-foreground px-5 py-7 text-white sm:px-7 sm:py-8">
                <p className="section-eyebrow mb-3 text-white/50 before:bg-primary">
                  Fastest reply
                </p>
                <h3 className="mb-3 font-serif text-xl font-semibold">
                  Facebook Messenger
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-white/65">
                  Best for questions about visiting, directions, or prayer
                  requests. We check messages regularly.
                </p>
                <a
                  href={site.social.messenger}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-sm"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Message us on Messenger
                </a>
              </div>

              <div className="card px-5 py-5 sm:px-6 sm:py-6">
                <h3 className="mb-4 font-serif text-base font-semibold">
                  Other ways to reach us
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href={`tel:${site.phone}`}
                      className="inline-flex items-center gap-2 font-medium text-foreground hover:text-secondary"
                    >
                      <Phone className="h-4 w-4 text-secondary" aria-hidden />
                      {site.phoneIsPlaceholder
                        ? "Phone — update in site settings"
                        : site.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${site.email}`}
                      className="inline-flex items-center gap-2 font-medium text-foreground hover:text-secondary"
                    >
                      <Mail className="h-4 w-4 text-secondary" aria-hidden />
                      {site.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-medium text-foreground hover:text-secondary"
                    >
                      <MessageCircle
                        className="h-4 w-4 text-secondary"
                        aria-hidden
                      />
                      Facebook Page
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={70}>
            <div className="card px-5 py-6 sm:px-7 sm:py-8">
              <h3 className="mb-1 font-serif text-lg font-semibold">
                {hasFormKey ? "Send a message" : "Or send an email-style note"}
              </h3>
              <p className="mb-6 text-sm text-muted">
                {hasFormKey
                  ? "Fill out the form and we will reply as soon as we can."
                  : "Without a form connected yet, submitting opens Messenger so we can reply quickly."}
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
