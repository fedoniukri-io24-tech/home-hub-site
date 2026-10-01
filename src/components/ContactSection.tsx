"use client";

import type { Dictionary } from "@/dictionaries";
import { Em } from "./Em";
import { Pill } from "./Pill";
import { useRequest } from "@/context/RequestContext";

export function ContactSection({ dict }: { dict: Dictionary }) {
  const c = dict.contactSection;
  const { openRequest } = useRequest();

  return (
    <section className="site-section--flush" aria-label={c.title}>
      <div className="contact">
        <div className="contact-copy">
          <h2>
            {c.title}
            <br />
            <Em>{c.titleEm}</Em>
          </h2>
          <p>{c.text}</p>
        </div>
        <Pill light className="contact-cta shrink-0" onClick={() => openRequest("")}>
          {c.cta}
        </Pill>
      </div>
    </section>
  );
}
