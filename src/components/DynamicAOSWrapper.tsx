"use client";

import dynamic from "next/dynamic";

const AOSWrapper = dynamic(() => import("./AOSWrapper"), { ssr: false });

export default function DynamicAOSWrapper() {
  return <AOSWrapper />;
}
