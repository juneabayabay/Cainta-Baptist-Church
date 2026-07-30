"use client";

import { HeartHandshake, MapPin, MessageCircle } from "lucide-react";
import { phoneLinkProps } from "@/lib/contact";
import { site } from "@/lib/site";

export function MobileActionBar() {
  const phone = phoneLinkProps();

  return (
    <div
      className="fixed right-0 bottom-0 left-0 z-40 border-t border-[color:var(--foreground)]/8 bg-background/98 px-3 pt-2.5 pb-[calc(0.65rem+env(safe-area-inset-bottom,0px))] shadow-[0_-6px_24px_rgba(21,36,72,0.08)] backdrop-blur-md lg:hidden"
      role="navigation"
      aria-label="Quick actions"
    >
      <div className="mx-auto grid max-w-lg grid-cols-3 gap-2">
        <a
          href={site.address.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-2xl border border-[color:var(--foreground)]/10 bg-secondary-light/80 px-1.5 py-2.5 text-[0.72rem] leading-none font-semibold text-foreground transition active:scale-[0.97] active:bg-secondary-light"
        >
          <MapPin className="h-5 w-5 text-primary" aria-hidden />
          Directions
        </a>
        <a
          {...phone}
          className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-2xl border border-[color:var(--foreground)]/10 bg-secondary-light/80 px-1.5 py-2.5 text-[0.72rem] leading-none font-semibold text-foreground transition active:scale-[0.97] active:bg-secondary-light"
        >
          <MessageCircle className="h-5 w-5 text-primary" aria-hidden />
          Message
        </a>
        <a
          href="#new-here"
          className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-2xl bg-primary px-1.5 py-2.5 text-[0.72rem] leading-none font-semibold text-white shadow-sm transition active:scale-[0.97] active:bg-primary-hover"
        >
          <HeartHandshake className="h-5 w-5" aria-hidden />
          Need hope
        </a>
      </div>
    </div>
  );
}
