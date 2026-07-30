import {
  Building2,
  ExternalLink,
  MessageCircle,
  Smartphone,
  Wallet,
} from "lucide-react";
import { CopyButton } from "@/components/CopyButton";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
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
    title: "Bank",
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
    <section id="give" className="section-shell surface-white">
      <div className="section-inner section-inner-narrow">
        <Reveal>
          <SectionHeader
            eyebrow="Give"
            title="Give with a glad heart"
            description="Your gift helps others meet Jesus in Cainta."
          />
        </Reveal>

        {needsDetails ? (
          <Reveal>
            <p className="card mb-4 px-5 py-4 text-center text-sm text-muted">
              Account details coming soon — message us anytime.
            </p>
          </Reveal>
        ) : null}

        <Reveal variant="scale">
          <div className="card overflow-hidden">
            <ul className="divide-y divide-[color:var(--foreground)]/6">
              {methods.map(
                ({ icon: Icon, title, detail, hint, href, cta, copyValue }) => {
                  const isPlaceholder = looksLikePlaceholder(detail);

                  return (
                    <li key={title} className="px-5 py-4 sm:px-6">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex min-w-0 items-start gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                            <Icon className="h-4 w-4" strokeWidth={1.7} aria-hidden />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-sm font-semibold">{title}</h3>
                            <p className="mt-0.5 text-sm font-medium text-primary">
                              {isPlaceholder ? "Message us for details" : detail}
                            </p>
                            <p className="text-xs text-muted">{hint}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 sm:justify-end">
                          {!isPlaceholder ? (
                            <CopyButton value={copyValue} label="Copy" />
                          ) : null}
                          <a
                            href={isPlaceholder ? site.social.messenger : href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary px-4 py-2 text-xs"
                          >
                            {isPlaceholder ? "Message" : cta}
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

        <Reveal delayMs={60}>
          <div className="mt-4 flex justify-center">
            <a
              href={site.social.messenger}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary px-4 py-2 text-sm"
            >
              <MessageCircle className="h-3.5 w-3.5" aria-hidden />
              Questions? Message us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
