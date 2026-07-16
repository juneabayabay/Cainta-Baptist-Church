"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject || "Message from website")}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus("sent");
    form.reset();
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5" noValidate>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <label className="block text-left">
          <span className="mb-1.5 block text-sm font-medium text-foreground">
            Full Name
          </span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className="w-full rounded-xl border border-black/[0.08] bg-white px-3.5 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/15"
          />
        </label>

        <label className="block text-left">
          <span className="mb-1.5 block text-sm font-medium text-foreground">
            Email Address
          </span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="your.email@example.com"
            className="w-full rounded-xl border border-black/[0.08] bg-white px-3.5 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/15"
          />
        </label>
      </div>

      <label className="block text-left">
        <span className="mb-1.5 block text-sm font-medium text-foreground">
          Subject
        </span>
        <input
          type="text"
          name="subject"
          required
          placeholder="Visit this Sunday, prayer request…"
          className="w-full rounded-xl border border-black/[0.08] bg-white px-3.5 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/15"
        />
      </label>

      <label className="block text-left">
        <span className="mb-1.5 block text-sm font-medium text-foreground">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us how we can help…"
          className="w-full resize-y rounded-xl border border-black/[0.08] bg-white px-3.5 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/15"
        />
      </label>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-footer transition hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto"
        >
          <Send className="h-4 w-4" aria-hidden />
          Send message
        </button>

        {status === "sent" ? (
          <p className="text-sm text-muted" role="status">
            Opening your email app…
          </p>
        ) : (
          <p className="text-xs text-muted sm:text-sm">
            Sends to {site.email}
          </p>
        )}
      </div>
    </form>
  );
}
