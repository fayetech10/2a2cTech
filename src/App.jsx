import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import ServicesSection from './components/sections/ServicesSection'
import AboutSection from './components/sections/AboutSection'
import WhyChooseUsSection from './components/sections/WhyChooseUsSection'
import PortfolioSection from './components/sections/PortfolioSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import CtaSection from './components/sections/CtaSection'
import ContactSection from './components/sections/ContactSection'
import WhatsAppButton from './components/sections/WhatsAppButton'

function App() {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-[#f5f5f7] text-dark-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-dark-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Aller au contenu
      </a>

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,113,227,0.08),_transparent_32%)]" />
        <div className="absolute left-1/2 top-0 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-0 top-[24rem] h-[18rem] w-[18rem] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <Navbar />

      <main id="main-content" className="pb-6">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <WhyChooseUsSection />
        <PortfolioSection />
        <TestimonialsSection />
        <CtaSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
