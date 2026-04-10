import { Mail, Phone, MapPin } from 'lucide-react'
import { navigation, contactInfo } from '../../data/siteData'

/* Brand SVG icons (Lucide does not include brand logos) */
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)
const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)
const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const socialLinks = [
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: LinkedInIcon, label: 'LinkedIn', href: '#' },
  { icon: TwitterIcon, label: 'Twitter/X', href: '#' },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-dark-800">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#accueil" className="inline-block transition-opacity hover:opacity-80">
              <img 
                src="/logo.png" 
                alt="2a2cTech Logo" 
                className="h-9 w-auto object-contain"
              />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Solutions digitales modernes pour accélérer votre croissance et transformer votre présence en ligne.
            </p>
            {/* Social links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all hover:border-primary/50 hover:text-primary"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {['Développement web', 'Apps mobiles', 'UI/UX Design', 'Marketing digital', 'SEO'].map(
                (s) => (
                  <li key={s}>
                    <a
                      href="#services"
                      className="text-sm text-slate-400 transition-colors hover:text-primary"
                    >
                      {s}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a href={`mailto:${contactInfo.email}`} className="flex items-start gap-3 transition-colors hover:text-primary">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                  <span>{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <a href={contactInfo.whatsappLink} target="_blank" rel="noreferrer" className="flex items-start gap-3 transition-colors hover:text-primary">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                  <span>{contactInfo.whatsapp}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                <span>{contactInfo.adresse}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">
          <p>© {currentYear} 2a2cTech Services. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-primary">
              Mentions légales
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
