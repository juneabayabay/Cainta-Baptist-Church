import {
  Building2,
  ExternalLink,
  MessageCircle,
  Smartphone,
  Wallet,
} from "lucide-react";
import { CopyButton } from "@/components/CopyButton";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

function looksLikePlaceholder(value: string) {
  return /X{2,}|09XX|example/i.test(value);
}

const methods = [
  {
    icon: Smartphone,
    title: "GCash",
    detail: site.giving.gcash.number,
    hint: site.giving.gcash.name,
    href: site.giving.gcash.href,
    cta: "Open GCash",
    copyValue: site.giving.gcash.number,
  },
  {
    icon: Wallet,
    title: "Maya",
    detail: site.giving.maya.number,
    hint: site.giving.maya.name,
    href: site.giving.maya.href,
    cta: "Open Maya",
    copyValue: site.giving.maya.number,
  },
  {
    icon: Building2,
    title: "Bank Transfer",
    detail: `${site.giving.bank.bank} · ${site.giving.bank.account}`,
    hint: site.giving.bank.name,
    href: site.social.facebook,
    cta: "Ask on Facebook",
    copyValue: site.giving.bank.account,
  },
];

export function Give() {
  const needsDetails = methods.some((m) => looksLikePlaceholder(m.detail));

  return (
    <section id="give" className="section-shell surface-give">
      <div className="section-inner max-w-[860px]">
        <Reveal>
          <div className="mb-9 text-center sm:mb-11">
            <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
              Generosity
            </p>
            <h2 className="mb-3 font-serif text-[1.75rem] font-semibold tracking-tight sm:text-[2rem] md:text-[2.25rem]">
              Give with a glad heart
            </h2>
            <p className="mx-auto max-w-md text-base text-muted">
              Your gift helps us welcome people and share Jesus&apos; love in
              Cainta. Thank you for partnering with us.
            </p>
          </div>
        </Reveal>

        {needsDetails ? (
          <Reveal>
            <div className="mb-5 rounded-2xl border border-dashed border-border-soft bg-cream/50 px-5 py-4 text-center text-sm text-muted">
              Account numbers will be posted here soon. For now, message us and
              we will send the right details.
            </div>
          </Reveal>
        ) : null}

        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-black/[0.05] bg-white shadow-[0_4px_24px_rgba(24,34,45,0.04)]">
            <ul className="divide-y divide-black/[0.05]">
              {methods.map(
                ({ icon: Icon, title, detail, hint, href, cta, copyValue }) => {
                  const isPlaceholder = looksLikePlaceholder(detail);

                  return (
                    <li key={title} className="px-5 py-5 sm:px-6">
                      <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
                        <div className="flex min-w-0 items-start gap-3.5">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream text-accent">
                            <Icon
                              className="h-4 w-4"
                              strokeWidth={1.7}
                              aria-hidden
                            />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-[0.95rem] font-semibold text-foreground">
                              {title}
                            </h3>
                            <p className="mt-0.5 text-sm font-medium text-accent">
                              {isPlaceholder
                                ? "Message us for the account number"
                                : detail}
                            </p>
                            <p className="mt-0.5 text-xs text-muted">{hint}</p>
                          </div>
                        </div>

                        <div className="flex w-full shrink-0 flex-col gap-2 min-[400px]:flex-row min-[400px]:flex-wrap sm:w-auto sm:justify-end">
                          {!isPlaceholder ? (
                            <CopyButton value={copyValue} label="Copy" />
                          ) : null}
                          <a
                            href={
                              isPlaceholder ? site.social.messenger : href
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-full bg-accent px-3.5 py-2 text-xs font-semibold text-footer transition hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent min-[400px]:flex-none"
                          >
                            {isPlaceholder ? "Message us" : cta}
                            <ExternalLink className="h-3 w-3" aria-hidden />
                          </a>
                        </div>
                      </div>
                    </li>
                  );
                },
              )}
            </ul>
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <div className="mt-5 flex flex-col items-center gap-3 rounded-2xl border border-black/[0.05] bg-white px-5 py-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm text-muted">
              Need help? Message us and we will send the right details.
            </p>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 shrink-0 items-center justify-center gap-1.5 rounded-full border border-border-soft px-4 py-2 text-sm font-semibold text-foreground transition hover:border-foreground hover:bg-foreground hover:text-white"
            >
              <MessageCircle className="h-3.5 w-3.5" aria-hidden />
              Facebook
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
