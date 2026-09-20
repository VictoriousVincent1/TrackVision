"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fires once when the element first scrolls into view, then stays true —
 * the animated feature sections (race track, gas gauge, chat preview) play
 * their reveal once as you scroll to them, rather than replaying on every
 * pass.
 */
export function useInView<T extends HTMLElement>(threshold = 0.35) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
