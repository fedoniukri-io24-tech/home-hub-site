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
  const formId = useId();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const model = (data.get("model") as string) || prefill || "—";
    const content = `HOME HUB — ${r.dialogTitle}\n${r.name}: ${data.get("name")}\n${r.phoneLabel}: ${data.get("phone")}\n${r.emailLabel}: ${data.get("email")}\n${r.interest}: ${model}\n\n${r.note}`;
    const url = URL.createObjectURL(
      new Blob(["\uFEFF" + content], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "home-hub-request.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus(r.saved);
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
      <button type="submit" className="contact-form-submit">
        <span>{r.submit}</span>
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
