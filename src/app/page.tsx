"use client";

import { motion } from "motion/react";
import dynamic from "next/dynamic";
import Banner from "@/components/home-page-ui/banner";
// Keep Hero immediately available for LCP
import HeroSection from "@/components/home-page-ui/hero-section";

const ShowcaseCarousel = dynamic(() => import("@/components/home-page-ui/showcase-carousel"));
const Customers = dynamic(() => import("@/components/home-page-ui/customers"));
const DesignScroll = dynamic(() => import("@/components/home-page-ui/design-scroll"));
const SomthingSection = dynamic(() => import("@/components/home-page-ui/somthing-section"));
const Topnotch = dynamic(() => import("@/components/home-page-ui/top–notch"));

// Reusable animation wrapper
const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <section className="overflow-hidden">
      <Banner />

      <FadeUp delay={0}>
        <HeroSection />
      </FadeUp>

      <FadeUp delay={0.1}>
        <Topnotch />
      </FadeUp>

      <FadeUp delay={0.15}>
        <ShowcaseCarousel />
      </FadeUp>

      <FadeUp delay={0.2}>
        <DesignScroll />
      </FadeUp>

      <FadeUp delay={0.25}>
        <Customers />
      </FadeUp>

      <FadeUp delay={0.3}>
        <SomthingSection />
      </FadeUp>
    </section>
  );
}
