import { useEffect, type RefObject } from "react";

/** Keep vertical page scroll from chaining when the user pans a horizontal gallery. */
export function useHorizontalScrollLock(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let touchStartX = 0;
    let touchStartY = 0;
    let touchAxis: "x" | "y" | null = null;

    const onTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1) return;
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
      touchAxis = null;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (event.touches.length !== 1) return;
      const dx = event.touches[0].clientX - touchStartX;
      const dy = event.touches[0].clientY - touchStartY;
      if (touchAxis === null) {
        if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
        touchAxis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      }
      if (touchAxis === "x") {
        event.preventDefault();
      }
    };

    const resetTouch = () => {
      touchAxis = null;
    };

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) return;
      const next = el.scrollLeft + event.deltaX;
      const atEdge =
        (next <= 0 && event.deltaX < 0) || (next >= maxScroll && event.deltaX > 0);
      if (atEdge) return;
      event.preventDefault();
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", resetTouch);
    el.addEventListener("touchcancel", resetTouch);
    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", resetTouch);
      el.removeEventListener("touchcancel", resetTouch);
      el.removeEventListener("wheel", onWheel);
    };
  }, [ref]);
}
