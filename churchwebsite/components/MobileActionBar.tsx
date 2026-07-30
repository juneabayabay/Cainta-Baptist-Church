"use client";

import { HeartHandshake, MapPin, MessageCircle, Phone } from "lucide-react";
import { phoneLabel, phoneLinkProps } from "@/lib/contact";
import { site } from "@/lib/site";

export function MobileActionBar() {
  const phone = phoneLinkProps();
  const isMessenger = site.phoneIsPlaceholder;
  const ContactIcon = isMessenger ? MessageCircle : Phone;
  const contactLabel = isMessenger ? "Messenger" : "Call";

  return (
    <div
      className="fixed right-0 bottom-0 left-0 z-40 border-t border-[color:var(--border-soft)] bg-background/98 px-3 pt-2.5 pb-[calc(0.65rem+env(safe-area-inset-bottom,0px))] shadow-[0_-8px_28px_var(--shadow-color)] backdrop-blur-md lg:hidden"
      role="navigation"
      aria-label="Quick actions"
    >
      <div className="mx-auto grid max-w-lg grid-cols-3 gap-2">
        <a
          href={site.address.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[3rem] min-w-0 flex-col items-center justify-center gap-0.5 rounded-2xl border border-[color:var(--border-soft)] bg-secondary-light/90 px-1 py-2 text-[0.68rem] leading-tight font-semibold text-foreground transition active:scale-[0.97] sm:text-xs"
        >
          <MapPin className="h-[1.15rem] w-[1.15rem] shrink-0 text-primary" aria-hidden />
          <span className="truncate">Directions</span>
        </a>
        <a
          {...phone}
          className="flex min-h-[3rem] min-w-0 flex-col items-center justify-center gap-0.5 rounded-2xl border border-[color:var(--border-soft)] bg-secondary-light/90 px-1 py-2 text-[0.68rem] leading-tight font-semibold text-foreground transition active:scale-[0.97] sm:text-xs"
          aria-label={phoneLabel()}
        >
          <ContactIcon className="h-[1.15rem] w-[1.15rem] shrink-0 text-primary" aria-hidden />
          <span className="truncate">{contactLabel}</span>
        </a>
        <a
          href="#visit"
          className="flex min-h-[3rem] min-w-0 flex-col items-center justify-center gap-0.5 rounded-2xl bg-primary px-1 py-2 text-[0.68rem] leading-tight font-semibold text-white shadow-sm transition active:scale-[0.97] sm:text-xs"
        >
          <HeartHandshake className="h-[1.15rem] w-[1.15rem] shrink-0" aria-hidden />
          <span className="truncate">Visit</span>
        </a>
      </div>
    </div>
  );
}
