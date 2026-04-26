import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { navigation, siteMeta } from '../../data/siteData'
import Button from '../ui/Button'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.38, rootMargin: '-96px 0px -45% 0px' }
    )

    navigation.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={`shell rounded-full border transition-all duration-300 ${
          scrolled
            ? 'border-black/[0.08] bg-white/[0.88] py-3 shadow-[0_18px_42px_-28px_rgba(15,23,42,0.18)] backdrop-blur-xl'
            : 'border-black/5 bg-white/[0.72] py-3.5 backdrop-blur-xl'
        }`}
      >
        <nav className="flex items-center justify-between gap-4">
          <a
            href="#accueil"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-3 text-dark-900 transition-opacity hover:opacity-85"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-900 text-sm font-semibold text-white">
              2A
            </span>
            <span className="min-w-0">
              <span className="block truncate font-heading text-sm font-semibold text-dark-900">
                {siteMeta.brandName}
              </span>
              <span className="hidden text-xs text-slate-500 sm:block">{siteMeta.tagline}</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  activeSection === item.id
                    ? 'bg-black/[0.05] text-dark-900'
                    : 'text-slate-600 hover:text-dark-900'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <span className="text-sm text-slate-500">{siteMeta.consultationDelay}</span>
            <Button href="#contact" size="sm">
              Consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.08] bg-white text-dark-900 lg:hidden"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isOpen ? 'max-h-[24rem] pt-4 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="rounded-[2rem] border border-black/[0.06] bg-white p-3 shadow-glass">
            <div className="space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={closeMenu}
                  className={`block rounded-2xl px-4 py-3 text-sm ${
                    activeSection === item.id
                      ? 'bg-[#f5f5f7] text-dark-900'
                      : 'text-slate-600 hover:bg-[#f5f5f7] hover:text-dark-900'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-4 rounded-[1.5rem] bg-[#f5f5f7] p-4">
              <p className="text-sm text-slate-600">{siteMeta.consultationDelay}</p>
              <Button href="#contact" size="sm" className="mt-3 w-full" onClick={closeMenu}>
                Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
