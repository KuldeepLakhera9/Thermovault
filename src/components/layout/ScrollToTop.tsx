"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Disable browser automatic scroll restoration so we can control it.
    let previous: ScrollRestoration | undefined;
    try {
      previous = history?.scrollRestoration;
      history.scrollRestoration = "manual";
    } catch (e) {
      // ignore if not available
    }

    return () => {
      try {
        if (previous !== undefined) history.scrollRestoration = previous;
      } catch (e) {
        // ignore
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const doScroll = () => {
      try {
        const html = document.documentElement;
        const body = document.body;

        // Force instant scroll by bypassing CSS smooth scroll behavior
        const originalHtmlScroll = html.style.scrollBehavior;
        const originalBodyScroll = body.style.scrollBehavior;
        html.style.scrollBehavior = "auto";
        body.style.scrollBehavior = "auto";

        window.scrollTo(0, 0);
        html.scrollTop = 0;
        body.scrollTop = 0;

        // Restore original scroll behavior on the next frame
        window.requestAnimationFrame(() => {
          html.style.scrollBehavior = originalHtmlScroll;
          body.style.scrollBehavior = originalBodyScroll;
        });
      } catch (e) {
        try {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        } catch (err) {}
      }
    };

    // Immediate attempt
    doScroll();

    // Try again after browser has done layout (one or two RAFs)
    const raf1 = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => doScroll());
    });

    // Fallback retries to handle images/fonts/layout shifts
    const t1 = window.setTimeout(doScroll, 120);
    const t2 = window.setTimeout(doScroll, 300);
    const t3 = window.setTimeout(doScroll, 600);

    return () => {
      try {
        window.cancelAnimationFrame(raf1);
      } catch (e) {}
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  return null;
}
