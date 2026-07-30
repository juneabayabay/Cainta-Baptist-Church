"use client";

import { HeartHandshake, MapPin, MessageCircle } from "lucide-react";
import { phoneLinkProps } from "@/lib/contact";
import { site } from "@/lib/site";

export function MobileActionBar() {
  const phone = phoneLinkProps();

  return (
    <div
      className="fixed right-0 bottom-0 left-0 z-40 border-t border-[color:var(--foreground)]/8 bg-background/96 px-3 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] backdrop-blur-md lg:hidden"
      role="navigation"
      aria-label="Quick actions"
    >
      <div className="mx-auto flex max-w-lg items-stretch gap-2">
        <a
          href={site.address.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-2 py-2 text-[0.7rem] font-semibold text-foreground transition hover:bg-secondary-light"
        >
          <MapPin className="h-4 w-4 text-primary" aria-hidden />
          Directions
        </a>
        <a
          {...phone}
          className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-2 py-2 text-[0.7rem] font-semibold text-foreground transition hover:bg-secondary-light"
        >
          <MessageCircle className="h-4 w-4 text-primary" aria-hidden />
          Message
        </a>
        <a
          href="#new-here"
          className="flex flex-[1.15] flex-col items-center justify-center gap-0.5 rounded-xl bg-primary px-2 py-2 text-[0.7rem] font-semibold text-white transition hover:bg-primary-hover"
        >
          <HeartHandshake className="h-4 w-4" aria-hidden />
          I need hope
        </a>
      </div>
    </div>
  );
}
