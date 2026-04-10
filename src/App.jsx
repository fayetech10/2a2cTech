import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import TeamSection from './components/sections/TeamSection'
import StatsSection from './components/sections/StatsSection'
import ServicesSection from './components/sections/ServicesSection'
import PortfolioSection from './components/sections/PortfolioSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import ContactSection from './components/sections/ContactSection'
import WhatsAppButton from './components/sections/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <StatsSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
