"use client";

import { useId, useState } from "react";
import type { Dictionary } from "@/dictionaries";
import { ArrowIcon } from "./ArrowIcon";
import { ContactMessengers } from "./ContactMessengers";

export function ContactRequestForm({
  dict,
  prefill = "",
  showMessengers = true,
}: {
  dict: Dictionary;
  prefill?: string;
  showMessengers?: boolean;
}) {
  const r = dict.request;
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const formId = useId();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const model = (data.get("model") as string) || prefill || "";
    setSending(true);
    setStatus("");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          model,
        }),
      });
      if (!res.ok) throw new Error("failed");
      form.reset();
      setStatus(r.saved);
    } catch {
      setStatus(r.saved);
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="contact-request-form" onSubmit={handleSubmit}>
      {prefill ? <input type="hidden" name="model" value={prefill} /> : null}
      <input
        id={`${formId}-name`}
        name="name"
        autoComplete="name"
        required
        className="contact-field"
        placeholder={r.namePlaceholder}
      />
      <input
        id={`${formId}-phone`}
        name="phone"
        type="tel"
        autoComplete="tel"
        required
        className="contact-field"
        placeholder={r.phonePlaceholder}
      />
      <input
        id={`${formId}-email`}
        name="email"
        type="email"
        autoComplete="email"
        required
        className="contact-field"
        placeholder={r.emailPlaceholder}
      />
      <button type="submit" className="contact-form-submit" disabled={sending}>
        <span>{sending ? "…" : r.submit}</span>
        <ArrowIcon className="contact-form-submit-arrow" />
      </button>
      <p className="contact-form-note">{r.note}</p>
      {status ? (
        <p className="contact-form-status" role="status">
          {status}
        </p>
      ) : null}
      {showMessengers ? <ContactMessengers dict={dict} /> : null}
    </form>
  );
}
