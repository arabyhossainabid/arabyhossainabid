"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const SplashCursor = dynamic(() => import("./SplashCursor"), {
  ssr: false,
});

export default function SplashCursorWrapper() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Only load on desktop to save mobile resources
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (isDesktop) {
      setShouldRender(true);
    }
  }, []);

  if (!shouldRender) return null;

  return <SplashCursor />;
}
