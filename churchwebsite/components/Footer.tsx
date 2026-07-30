import { Mail } from "lucide-react";
import { FacebookIcon } from "@/components/SocialIcons";
import { site } from "@/lib/site";

const links = [
  { href: "#visit", label: "Visit" },
  { href: "#new-here", label: "New Here" },
  { href: "#fit", label: "Beliefs" },
  { href: "#faq", label: "FAQ" },
  { href: "#photos", label: "Photos" },
  { href: "#give", label: "Give" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer
      className="bg-foreground pb-[calc(4.5rem+env(safe-area-inset-bottom))] text-white/70 lg:pb-0"
      role="contentinfo"
    >
      <div className="mx-auto max-w-[1080px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <a
              href="#home"
              className="font-serif text-base font-semibold text-white hover:text-primary"
            >
              {site.name}
            </a>
            <p className="mt-1 text-xs text-white/50">{site.heroMeta}</p>
            <p className="mt-0.5 text-xs text-white/40">{site.address.line2}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs transition hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.social.facebook}
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-white/10 hover:text-primary"
            >
              <FacebookIcon className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-white/10 hover:text-primary"
            >
              <Mail className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>

        <p className="mt-6 border-t border-white/10 pt-5 text-center text-xs text-white/45">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
