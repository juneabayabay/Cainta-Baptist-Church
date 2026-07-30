import { Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { phoneLinkProps } from "@/lib/contact";
import { site } from "@/lib/site";

const hasFormKey =
  Boolean(process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim());

export function Contact() {
  const phone = phoneLinkProps();
  const showPhone = !site.phoneIsPlaceholder;

  return (
    <section id="contact" className="section-shell surface-soft">
      <div className="section-inner">
        <Reveal>
          <SectionHeader
            eyebrow="Contact"
            title={
              <>
                We&apos;re here for{" "}
                <span className="text-accent">you</span>
              </>
            }
          />
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:gap-5">
          <Reveal variant="left">
            <div className="space-y-4">
              <div className="card bg-footer px-5 py-7 text-white sm:px-7">
                <p className="mb-2 text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                  Fastest reply
                </p>
                <h3 className="mb-2 font-serif text-xl font-semibold">
                  Messenger
                </h3>
                <p className="mb-5 text-sm text-white/65">
                  Visiting, directions, or prayer — we&apos;re here.
                </p>
                <a
                  href={site.social.messenger}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold text-sm"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Message us
                </a>
              </div>

              <div className="card px-5 py-5 sm:px-6">
                <ul className="space-y-3 text-sm">
                  {showPhone ? (
                    <li>
                      <a
                        {...phone}
                        className="inline-flex items-center gap-2 font-medium hover:text-primary"
                      >
                        <MessageCircle
                          className="h-4 w-4 text-primary"
                          aria-hidden
                        />
                        {site.phoneDisplay}
                      </a>
                    </li>
                  ) : null}
                  <li>
                    <a
                      href={`mailto:${site.email}`}
                      className="inline-flex items-center gap-2 break-all font-medium hover:text-primary"
                    >
                      <Mail
                        className="h-4 w-4 shrink-0 text-primary"
                        aria-hidden
                      />
                      {site.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delayMs={70}>
            <div className="card px-5 py-6 sm:px-7 sm:py-7">
              <h3 className="mb-1 font-serif text-lg font-semibold">
                {hasFormKey ? "Send a message" : "Send a note"}
              </h3>
              <p className="mb-5 text-sm text-muted">
                {hasFormKey
                  ? "We will reply soon."
                  : "Opens Messenger so we can reply quickly."}
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
