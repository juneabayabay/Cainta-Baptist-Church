import { Mail } from "lucide-react";
import { FacebookIcon } from "@/components/SocialIcons";
import { site } from "@/lib/site";

const links = [
  { href: "#new-here", label: "New Here" },
  { href: "#about", label: "About" },
  { href: "#photos", label: "Photos" },
  { href: "#visit", label: "Visit" },
  { href: "#services", label: "Services" },
  { href: "#give", label: "Give" },
  { href: "#contact", label: "Contact" },
];

const social = [
  { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
];

export function Footer() {
  return (
    <footer className="bg-footer text-[#9aa3b5]" role="contentinfo">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-4 py-5 sm:gap-5 sm:px-6 sm:py-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-6">
          <a
            href="#home"
            className="shrink-0 font-serif text-sm font-semibold text-white transition hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-[0.95rem]"
          >
            {site.name}
          </a>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1.5">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs transition hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1.5">
            {social.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="flex h-9 w-9 items-center justify-center rounded-full text-[#9aa3b5] transition hover:bg-white/[0.08] hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Icon className="h-3.5 w-3.5" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <p className="border-t border-white/[0.08] pt-3.5 text-center text-[0.7rem] text-[#6d778c]">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
