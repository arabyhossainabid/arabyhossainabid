import dynamic from "next/dynamic";
import Banner from "@/components/home-page-ui/banner";
import HeroSection from "@/components/home-page-ui/hero-section";
import FadeUp from "@/components/home-page-ui/FadeUp";

// Lazy load below-the-fold sections
const ShowcaseCarousel = dynamic(() => import("@/components/home-page-ui/showcase-carousel"));
const Customers = dynamic(() => import("@/components/home-page-ui/customers"));
const DesignScroll = dynamic(() => import("@/components/home-page-ui/design-scroll"));
const SomthingSection = dynamic(() => import("@/components/home-page-ui/somthing-section"));
const Topnotch = dynamic(() => import("@/components/home-page-ui/top–notch"));

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
