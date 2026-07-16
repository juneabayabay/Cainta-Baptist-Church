"use client";

import { useEffect, useState } from "react";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Star,
} from "lucide-react";
import { site } from "@/lib/site";

function parseTime(value: string) {
  const [h, m] = value.split(":").map(Number);
  return h * 60 + m;
}

function getManilaMinutesAndDay() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Manila",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");

  const dayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  return {
    day: dayMap[weekday] ?? -1,
    minutes: hour * 60 + minute,
  };
}

function isOpenNow() {
  const { day, minutes } = getManilaMinutesAndDay();

  if (day === 0) {
    const open = parseTime(site.hours.sunday.open);
    const close = parseTime(site.hours.sunday.close);
    return minutes >= open && minutes < close;
  }

  if (day === 3) {
    const open = parseTime(site.hours.wednesday.open);
    const close = parseTime(site.hours.wednesday.close);
    return minutes >= open && minutes < close;
  }

  return false;
}

export function ChurchDetails() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setOpen(isOpenNow());
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
      {/* Details */}
      <div className="border-b border-black/[0.06] px-5 py-5 sm:px-6 sm:py-6">
        <h3 className="mb-4 text-lg font-bold text-foreground">Details</h3>
        <ul className="space-y-3.5">
          <li>
            <a
              href={site.reviews.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-[0.95rem] text-foreground transition hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Star className="mt-0.5 h-[18px] w-[18px] shrink-0 fill-accent text-accent" aria-hidden />
              <span>{site.reviews.count} Reviews</span>
            </a>
          </li>
          <li className="flex items-start gap-3 text-[0.95rem]">
            <Clock
              className={`mt-0.5 h-[18px] w-[18px] shrink-0 ${
                open ? "text-emerald-600" : "text-muted"
              }`}
              aria-hidden
            />
            <span className={open ? "font-medium text-emerald-700" : "text-muted-dark"}>
              {open ? "Open now" : "Closed now"}
              <span className="mt-0.5 block text-sm font-normal text-muted">
                Sun 8:00 AM–11:30 AM · Wed 6:30 PM
              </span>
            </span>
          </li>
          <li>
            <a
              href={site.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-[0.95rem] text-[#1877f2] transition hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <MapPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-muted-dark" aria-hidden />
              <span className="leading-snug">{site.address.full}</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Contact info */}
      <div className="border-b border-black/[0.06] px-5 py-5 sm:px-6 sm:py-6">
        <h3 className="mb-4 text-lg font-bold text-foreground">Contact info</h3>
        <ul className="space-y-3.5">
          <li>
            <a
              href={`mailto:${site.email}`}
              className="flex items-start gap-3 break-all text-[0.95rem] text-[#1877f2] transition hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Mail className="mt-0.5 h-[18px] w-[18px] shrink-0 text-muted-dark" aria-hidden />
              <span>{site.email}</span>
            </a>
          </li>
          <li>
            <a
              href={site.social.messenger}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-[0.95rem] text-foreground transition hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <MessageCircle className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#0084ff]" aria-hidden />
              <span>{site.social.facebookName}</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Photos */}
      <div className="px-5 py-5 sm:px-6 sm:py-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h3 className="text-lg font-bold text-foreground">Photos</h3>
          <a
            href={site.social.photos}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#1877f2] transition hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            See all photos
          </a>
        </div>
        <a
          href={site.social.photos}
          target="_blank"
          rel="noopener noreferrer"
          className="grid grid-cols-3 gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label="See Cainta Baptist Church photos on Facebook"
        >
          {[
            "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=400&q=70",
            "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=400&q=70",
            "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=400&q=70",
          ].map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={src}
              src={src}
              alt=""
              className="aspect-square w-full rounded-lg object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}
        </a>
        <p className="mt-3 text-xs text-muted">
          Tap to see more photos on Facebook.
        </p>
      </div>
    </div>
  );
}
