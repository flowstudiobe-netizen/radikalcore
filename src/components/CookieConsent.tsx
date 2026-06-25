"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie_consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function decide(granted: boolean) {
    try {
      localStorage.setItem(STORAGE_KEY, granted ? "granted" : "denied");
    } catch {}
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag === "function") {
      w.gtag("consent", "update", {
        analytics_storage: granted ? "granted" : "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/90 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 px-4 py-4 sm:flex-row sm:items-center sm:px-6">
        <p className="flex-1 text-sm leading-relaxed text-white/80">
          We use audience-measurement cookies (Google Analytics) to understand
          how you use this site. No ads, no data resale. You can accept or
          reject at any time.
        </p>
        <div className="flex flex-shrink-0 gap-2">
          <button
            type="button"
            onClick={() => decide(false)}
            className="rounded border border-white/30 px-4 py-2 text-sm font-medium uppercase tracking-wider text-white/80 transition hover:bg-white/10"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => decide(true)}
            className="rounded bg-white px-4 py-2 text-sm font-medium uppercase tracking-wider text-black transition hover:bg-white/90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
