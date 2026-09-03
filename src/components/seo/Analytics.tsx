"use client";

import React, { useEffect } from "react";

// Safe wrapper for tracking key B2B conversion events without throwing runtime errors
export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean>
) => {
  if (typeof window !== "undefined") {
    // Check for Google Analytics 4 gtag
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("event", eventName, params);
    }
    // Check for GTM dataLayer
    if (Array.isArray((window as any).dataLayer)) {
      (window as any).dataLayer.push({ event: eventName, ...params });
    }
  }
};

export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    // Optional client-side initialization hook
  }, []);

  if (!gaId) {
    // Silently continue if no tracking ID is provided
    return null;
  }

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
