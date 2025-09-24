"use client";

import HeroSection from "@/components/hero-section";
import TechStackSlider from "@/components/tech-stack-slider";
import AboutPage from "./about/page";
import ProjectsPage from "./projects/page";

export default function Home() {
  return (
    <section className="container mx-auto">
      <HeroSection />
      <TechStackSlider />
      <AboutPage />
      <ProjectsPage />
    </section>
  );
}
