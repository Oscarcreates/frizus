"use client";

import { useState } from "react";

const field =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-accent";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend wired yet; show a friendly confirmation.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-line bg-band p-8 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent/10">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12.5l4 4L19 7" stroke="#2d6be5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="heading mt-4 text-xl">Message received</h3>
        <p className="mt-2 text-sm text-muted">
          Thanks for reaching out. A member of the Frizus team will get back to
          you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-ink">Full name</label>
          <input className={field} type="text" name="name" placeholder="Jane Doe" required />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-ink">Email</label>
          <input className={field} type="email" name="email" placeholder="jane@company.com" required />
        </div>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-ink">Subject</label>
        <input className={field} type="text" name="subject" placeholder="How can we help?" />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-ink">Message</label>
        <textarea className={`${field} min-h-[140px] resize-y`} name="message" placeholder="Tell us about your project or enquiry…" required />
      </div>
      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        Send Message
      </button>
    </form>
  );
}
