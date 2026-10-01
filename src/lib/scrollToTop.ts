/** Bypass `html { scroll-behavior: smooth }` for route changes. */
export function scrollToTopInstant() {
  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  window.scrollTo({ top: 0, left: 0 });
  html.style.scrollBehavior = previous;
}
