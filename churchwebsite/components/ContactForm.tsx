"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ?? "";

const inputClass =
  "w-full rounded-xl border border-[color:var(--foreground)]/8 bg-white px-3.5 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 disabled:opacity-60";

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
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-left">
          <span className="mb-1.5 block text-sm font-medium">Name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            disabled={status === "sending"}
            className={inputClass}
          />
        </label>

        <label className="block text-left">
          <span className="mb-1.5 block text-sm font-medium">Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            disabled={status === "sending"}
            className={inputClass}
          />
        </label>
      </div>

      <label className="block text-left">
        <span className="mb-1.5 block text-sm font-medium">Subject</span>
        <input
          type="text"
          name="subject"
          required
          placeholder="Visit this Sunday, prayer request…"
          disabled={status === "sending"}
          className={inputClass}
        />
      </label>

      <label className="block text-left">
        <span className="mb-1.5 block text-sm font-medium">Message</span>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="How can we help?"
          disabled={status === "sending"}
          className={`${inputClass} resize-y`}
        />
      </label>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-primary w-full text-sm disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
        >
          <Send className="h-4 w-4" aria-hidden />
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        {status === "sent" ? (
          <p className="text-sm text-muted" role="status">
            {accessKey
              ? "Thank you — we received your message."
              : "Opening Messenger so we can reply…"}
          </p>
        ) : status === "error" ? (
          <p className="text-sm text-red-700" role="alert">
            Something went wrong.{" "}
            <a
              href={site.social.messenger}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              Message us instead
            </a>
            .
          </p>
        ) : null}
      </div>
    </form>
  );
}
