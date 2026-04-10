import { useState, useEffect } from 'react'
import { Zap, ArrowRight } from 'lucide-react'
import { navigation } from '../../data/siteData'
import Button from '../ui/Button'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')

  // Track scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll spy: detect which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
    )

    navigation.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-dark-900/80 py-3 backdrop-blur-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#accueil"
          className="flex items-center transition-opacity hover:opacity-80"
          id="nav-logo"
        >
          <img 
            src="/logo.png" 
            alt="2a2cTech Logo" 
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
              id={`nav-${item.id}`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-violet" />
              )}
            </a>
          ))}
          <Button href="#contact" size="sm" className="ml-3">
            Demander un devis
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-white transition hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
          id="nav-toggle"
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                isOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                isOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-dark-900/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-6">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={handleNavClick}
              className={`text-2xl font-semibold transition-colors ${
                activeSection === item.id
                  ? 'gradient-text'
                  : 'text-slate-300 hover:text-white'
              }`}
              id={`mobile-nav-${item.id}`}
            >
              {item.label}
            </a>
          ))}
          <Button href="#contact" size="lg" onClick={handleNavClick} className="mt-4">
            Demander un devis
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
