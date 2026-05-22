import HeroSection from '../components/sections/HeroSection.jsx'
import AboutSection from '../components/sections/AboutSection.jsx'
import SkillsSection from '../components/sections/SkillsSection.jsx'
import ProjectsSection from '../components/sections/ProjectsSection.jsx'
import CertificatesSection from '../components/sections/CertificatesSection.jsx'
import TimelineSection from '../components/sections/TimelineSection.jsx'
import LearningSection from '../components/sections/LearningSection.jsx'
import ContactSection from '../components/sections/ContactSection.jsx'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <TimelineSection />
      <LearningSection />
      <ContactSection />
    </>
  )
}
