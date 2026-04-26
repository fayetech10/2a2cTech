import { ArrowUpRight, Mail, MapPin, MessageCircle, PhoneCall } from 'lucide-react'
import { contactInfo, navigation, services, siteMeta } from '../../data/siteData'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-black/[0.06] bg-white">
      <div className="shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr_.8fr]">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-dark-900 text-sm font-semibold text-white">
                2A
              </span>
              <div>
                <p className="font-heading text-sm font-semibold text-dark-900">{siteMeta.brandName}</p>
                <p className="text-sm text-slate-500">{siteMeta.tagline}</p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-muted">
              Developpement sur mesure, formation IT, infrastructure reseau, maintenance et design graphique
              dans un langage visuel plus simple, plus premium et plus durable.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 hover:text-dark-900">
                <Mail className="h-4 w-4 text-primary" />
                {contactInfo.email}
              </a>
              <a href={contactInfo.whatsappLink} className="flex items-center gap-3 hover:text-dark-900">
                <PhoneCall className="h-4 w-4 text-primary" />
                {contactInfo.phone}
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                {contactInfo.address}
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">Navigation</p>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="text-sm text-slate-600 transition-colors hover:text-dark-900">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">Services</p>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="text-sm text-slate-600 transition-colors hover:text-dark-900">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">Rester connecte</p>
            <div className="mt-5 space-y-3">
              {contactInfo.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center justify-between rounded-[1.4rem] bg-[#f5f5f7] px-4 py-3 text-sm text-slate-700 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)] transition-colors hover:text-dark-900"
                >
                  <span>{social.label}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ))}
              <a
                href={contactInfo.whatsappLink}
                className="flex items-center justify-between rounded-[1.4rem] bg-[#e8f5ff] px-4 py-3 text-sm text-primary shadow-[inset_0_0_0_1px_rgba(0,113,227,0.08)] transition-colors hover:text-primary-700"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp direct
                </span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-black/[0.06] pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} {siteMeta.brandName}. Tous droits reserves.</p>
          <p>Site pense pour la clarte, la performance et une experience haut de gamme.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
