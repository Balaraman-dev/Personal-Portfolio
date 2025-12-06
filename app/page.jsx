import React, { useEffect, useState } from "react";
import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Certificate from "./components/homepage/certificate";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certificate/>
      <ContactSection />
    </div>
  )
};