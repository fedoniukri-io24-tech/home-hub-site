import Image from "next/image";
import { Em } from "./Em";

const introDoors = [
  { src: "/images/oak.png", alt: "Oak Natural" },
  { src: "/images/walnut.png", alt: "Walnut Pure" },
  { src: "/images/invisible.png", alt: "Invisible Ivory" },
] as const;

export function HomeIntroBlock({
  title,
  titleEm,
  text,
}: {
  title: string;
  titleEm: string;
  text: string;
}) {
  return (
    <section className="intro-block site-section">
      <div className="intro-block-copy">
        <h2>
          {title}
          <br />
          <Em>{titleEm}</Em>
        </h2>
        <p>{text}</p>
      </div>
      <div className="intro-gallery">
        {introDoors.map((door) => (
          <figure key={door.src} className="intro-gallery-figure">
            <Image
              src={door.src}
              alt={door.alt}
              width={960}
              height={1280}
              className="intro-gallery-photo"
              sizes="(max-width: 768px) 33vw, 28vw"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
