"use client";

import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import type { Dictionary } from "@/dictionaries";
import { ContactRequestForm } from "./ContactRequestForm";

type RequestDialogProps = {
  dict: Dictionary;
  open: boolean;
  prefill: string;
  onClose: () => void;
};

export function RequestDialog({ dict, open, prefill, onClose }: RequestDialogProps) {
  const r = dict.request;

  useLockBodyScroll(open);

  if (!open) return null;

  return (
    <div className="contact-sheet-root" role="presentation">
      <button
        type="button"
        className="contact-sheet-backdrop"
        aria-label={dict.nav.close}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-sheet-title"
        className="contact-sheet"
      >
        <div className="contact-sheet-handle" aria-hidden />
        <h2 id="contact-sheet-title" className="contact-sheet-title">
          {r.dialogTitle}
        </h2>
        <ContactRequestForm key={`${prefill}-${open}`} dict={dict} prefill={prefill} />
      </div>
    </div>
  );
}
