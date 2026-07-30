import { site } from "@/lib/site";

/** Phone link — uses Messenger when number is still a placeholder. */
export function phoneHref() {
  return site.phoneIsPlaceholder ? site.social.messenger : `tel:${site.phone}`;
}

export function phoneLabel() {
  return site.phoneIsPlaceholder ? "Message us" : site.phoneDisplay;
}

export function phoneLinkProps() {
  const external = site.phoneIsPlaceholder;
  return {
    href: phoneHref(),
    ...(external
      ? { target: "_blank" as const, rel: "noopener noreferrer" as const }
      : {}),
  };
}
