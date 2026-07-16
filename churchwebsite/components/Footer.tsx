import { Heart, Mail } from "lucide-react";
import { LogoMark } from "@/components/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/SocialIcons";
import { site } from "@/lib/site";

const links = [
  { href: "#new-here", label: "New Here" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Visit" },
  { href: "#services", label: "Services" },
  { href: "#give", label: "Give" },
  { href: "#contact", label: "Contact" },
];

const social = [
  { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.social.youtube, label: "YouTube", Icon: YoutubeIcon },
  { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
];

export function Footer() {
  return (
    <footer
      className="bg-footer px-0 pt-10 pb-8 text-[#cccbc7] sm:pt-12"
      role="contentinfo"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 text-center min-[640px]:grid-cols-2 min-[640px]:text-left lg:mb-10 lg:grid-cols-[2fr_1fr_1fr] lg:gap-12">
          <div className="flex flex-col items-center min-[640px]:items-start min-[640px]:col-span-2 lg:col-span-1">
            <a
              href="#home"
              className="mb-4 inline-block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Cainta Baptist Church home"
            >
              <LogoMark variant="footer" />
            </a>
            <p className="max-w-[340px] text-sm sm:text-[0.95rem]">
              {site.fullName} — a warm church family in Cainta. Come as you are.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-base font-semibold text-white sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-block py-0.5 text-sm text-[#cccbc7] transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-[0.95rem]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-base font-semibold text-white sm:mb-4">
              Follow Us
            </h4>
            <div className="flex justify-center gap-3 min-[640px]:justify-start sm:gap-4">
              {social.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.07] text-[#cccbc7] transition hover:-translate-y-0.5 hover:bg-accent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] px-2 pt-6 text-center text-xs leading-relaxed text-[#8a8986] sm:pt-8 sm:text-[0.9rem]">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white">{site.name}</span> &middot; All rights
          reserved. &middot; Built with{" "}
          <Heart
            className="inline h-3.5 w-3.5 fill-white text-white"
            aria-hidden
          />
        </div>
      </div>
    </footer>
  );
}
