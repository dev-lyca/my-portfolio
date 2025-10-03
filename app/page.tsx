"use client";

import HeroSection from "@/components/hero-section";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import ProjectsPage from "./projects/page";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </section>
  );
}
