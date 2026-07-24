"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ?? "";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!accessKey) {
      // No key yet — fall back to Facebook Messenger so the visitor still gets through
      window.open(site.social.messenger, "_blank", "noopener,noreferrer");
      setStatus("sent");
      form.reset();
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          subject: subject || "Message from website",
          message,
          from_name: site.name,
        }),
      });

      const json = (await res.json()) as { success?: boolean };

      if (!res.ok || !json.success) {
        throw new Error("Submit failed");
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
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
            disabled={status === "sending"}
            className="w-full rounded-xl border border-black/[0.08] bg-white px-3.5 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/15 disabled:opacity-60"
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
            disabled={status === "sending"}
            className="w-full rounded-xl border border-black/[0.08] bg-white px-3.5 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/15 disabled:opacity-60"
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
          disabled={status === "sending"}
          className="w-full rounded-xl border border-black/[0.08] bg-white px-3.5 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/15 disabled:opacity-60"
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
          disabled={status === "sending"}
          className="w-full resize-y rounded-xl border border-black/[0.08] bg-white px-3.5 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/15 disabled:opacity-60"
        />
      </label>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-footer transition hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
        >
          <Send className="h-4 w-4" aria-hidden />
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        {status === "sent" ? (
          <p className="text-sm text-muted" role="status">
            {accessKey
              ? "Thank you — we received your message."
              : "Opening Facebook Messenger so we can reply…"}
          </p>
        ) : status === "error" ? (
          <p className="text-sm text-red-700" role="alert">
            Something went wrong.{" "}
            <a
              href={site.social.messenger}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2"
            >
              Message us on Facebook
            </a>{" "}
            instead.
          </p>
        ) : (
          <p className="text-xs text-muted sm:text-sm">
            We reply as soon as we can.
          </p>
        )}
      </div>
    </form>
  );
}
