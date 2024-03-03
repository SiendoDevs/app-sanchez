"use client"

import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import ContentSection from "./components/ContentSection";
import Contact from "./components/ContactSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HeaderSection />
      <ContentSection />
      <Contact />
    </div>
  );
}
