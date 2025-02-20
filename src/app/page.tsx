"use client"

import { ContactSection } from "@/components/contact-section"
import { ExperienceSection } from "@/components/experience-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { SpecializationSection } from "@/components/specialization-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <StatsSection />
        <SkillsSection />
        <ProjectsSection />
        <SpecializationSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

