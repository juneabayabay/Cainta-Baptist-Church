import {
  Building2,
  ExternalLink,
  HeartHandshake,
  MessageCircle,
  Smartphone,
  Wallet,
} from "lucide-react";
import { CopyButton } from "@/components/CopyButton";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

const options = [
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
    href: `mailto:${site.email}?subject=Giving%20Inquiry`,
    cta: "Request details",
    copyValue: site.giving.bank.account,
  },
  {
    icon: HeartHandshake,
    title: "Online Giving",
    detail: "Secure online form",
    hint: "Tithes, offerings & special gifts",
    href: site.giving.onlineForm,
    cta: "Give online",
    copyValue: null as string | null,
  },
];

export function Give() {
  return (
    <section id="give" className="bg-background py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-[900px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-8 text-center sm:mb-10">
            <p className="mb-2 text-xs font-semibold tracking-[0.14em] text-accent uppercase">
              Support our ministry
            </p>
            <h2 className="mb-2 font-serif text-[1.6rem] font-semibold tracking-tight sm:text-[1.85rem] md:text-[2rem]">
              Give with a glad heart
            </h2>
            <p className="mx-auto max-w-md text-sm text-muted sm:text-base">
              Your gift helps us welcome people and share Jesus&apos; love in
              Cainta. Thank you.
            </p>
          </div>
        </Reveal>

        <div className="overflow-hidden rounded-xl border border-black/[0.06] bg-white shadow-sm">
          <ul className="divide-y divide-black/[0.06]">
            {options.map(
              (
                { icon: Icon, title, detail, hint, href, cta, copyValue },
                i,
              ) => (
                <Reveal key={title} delayMs={i * 50}>
                  <li className="px-4 py-4 sm:px-5 sm:py-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                      <div className="flex min-w-0 items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cream text-accent">
                          <Icon
                            className="h-4 w-4"
                            strokeWidth={1.75}
                            aria-hidden
                          />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold text-foreground sm:text-[0.95rem]">
                            {title}
                          </h3>
                          <p className="mt-0.5 text-sm font-medium text-accent">
                            {detail}
                          </p>
                          <p className="mt-0.5 text-xs text-muted">{hint}</p>
                        </div>
                      </div>

                      <div className="flex shrink-0 flex-wrap items-center gap-2 sm:justify-end">
                        {copyValue ? (
                          <CopyButton value={copyValue} label="Copy" />
                        ) : null}
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-8 items-center gap-1 rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                        >
                          {cta}
                          <ExternalLink className="h-3 w-3" aria-hidden />
                        </a>
                      </div>
                    </div>
                  </li>
                </Reveal>
              ),
            )}
          </ul>
        </div>

        <Reveal delayMs={120}>
          <div className="mt-6 flex flex-col items-center gap-3 rounded-xl border border-black/[0.06] bg-white px-4 py-4 text-center sm:flex-row sm:justify-between sm:px-5 sm:py-4 sm:text-left">
            <div>
              <p className="text-sm font-semibold text-foreground">
                Need help giving?
              </p>
              <p className="mt-0.5 text-xs text-muted sm:text-sm">
                Message us and we will send the right details.
              </p>
            </div>
            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <a
                href={`mailto:${site.email}?subject=Giving%20Inquiry`}
                className="inline-flex min-h-9 items-center justify-center rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-white transition hover:bg-accent-hover sm:text-sm"
              >
                Email us
              </a>
              <a
                href={site.social.messenger}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-9 items-center justify-center gap-1.5 rounded-lg border border-border-soft px-4 py-2 text-xs font-semibold text-foreground transition hover:bg-cream sm:text-sm"
              >
                <MessageCircle className="h-3.5 w-3.5" aria-hidden />
                Messenger
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
