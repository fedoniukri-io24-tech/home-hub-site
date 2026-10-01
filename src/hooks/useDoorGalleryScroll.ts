import { useEffect, type RefObject } from "react";
import { scrollToTopInstant } from "@/lib/scrollToTop";

function centerThumbInTrack(
  track: HTMLElement,
  thumb: HTMLElement,
  behavior: ScrollBehavior,
) {
  const targetLeft = thumb.offsetLeft - (track.clientWidth - thumb.clientWidth) / 2;
  const max = Math.max(0, track.scrollWidth - track.clientWidth);
  const left = Math.max(0, Math.min(targetLeft, max));
  track.scrollTo({ left, behavior });
}

export function useDoorGalleryScroll(
  heroRef: RefObject<HTMLDivElement | null>,
  thumbRef: RefObject<HTMLDivElement | null>,
  activeImage: number,
  slideCount: number,
  slug: string,
) {
  useEffect(() => {
    window.history.replaceState(null, "", window.location.pathname);
    scrollToTopInstant();

    const hero = heroRef.current;
    const track = thumbRef.current;
    hero?.scrollTo({ left: 0, behavior: "auto" });
    track?.scrollTo({ left: 0, behavior: "auto" });
  }, [slug, heroRef, thumbRef]);

  useEffect(() => {
    const el = heroRef.current;
    if (!el || el.clientWidth === 0 || slideCount === 0) return;
    const target = activeImage * el.clientWidth;
    if (Math.abs(el.scrollLeft - target) < 2) return;
    el.scrollTo({ left: target, behavior: "smooth" });
  }, [activeImage, slideCount, heroRef]);

  useEffect(() => {
    const track = thumbRef.current;
    if (!track) return;
    const thumb = track.children[activeImage] as HTMLElement | undefined;
    if (!thumb) return;
    centerThumbInTrack(track, thumb, "smooth");
  }, [activeImage, thumbRef]);
}
