import { useState } from 'react'
import { Mail, MessageCircle, MapPin, Send, Loader2, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import { contactInfo } from '../../data/siteData'
import { submitContactForm } from '../../services/formService'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const initialFormData = { nom: '', email: '', telephone: '', service: '', message: '' }

const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    gradient: 'from-primary to-blue-400',
    hoverColor: 'hover:text-primary',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: contactInfo.whatsapp,
    href: contactInfo.whatsappLink,
    gradient: 'from-emerald-500 to-green-400',
    hoverColor: 'hover:text-green-400',
    external: true,
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: contactInfo.adresse,
    gradient: 'from-violet to-purple-400',
  },
]

function ContactSection() {
  const [formData, setFormData] = useState(initialFormData)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const containerRef = useScrollReveal()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: 'loading', message: 'Envoi en cours...' })
    const result = await submitContactForm(formData)
    setStatus({ type: result.success ? 'success' : 'error', message: result.message })
    setIsSubmitting(false)
    if (result.success) setFormData(initialFormData)
  }

  const inputBase = 'w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition-all duration-200 focus:border-primary/40 focus:bg-white/[0.08] focus:ring-1 focus:ring-primary/20'

  return (
    <section id="contact" className="section-padding relative" ref={containerRef}>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          {/* Left: Info */}
          <div className="reveal lg:col-span-4" data-delay="0">
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-300">
              Contact
            </span>
            <h2 className="mb-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Démarrons votre{' '}
              <span className="gradient-text">projet</span>
            </h2>
            <p className="mb-8 text-slate-400">
              Décrivez votre besoin et recevez un devis gratuit sous 24h.
            </p>

            {/* Contact cards */}
            <div className="space-y-3">
              {contactCards.map((card) => {
                const Icon = card.icon
                const Wrapper = card.href ? 'a' : 'div'
                const wrapperProps = card.href ? {
                  href: card.href,
                  ...(card.external ? { target: '_blank', rel: 'noreferrer' } : {}),
                } : {}

                return (
                  <Wrapper
                    key={card.label}
                    {...wrapperProps}
                    className={`group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05] ${card.hoverColor || ''}`}
                  >
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-slate-500">{card.label}</p>
                      <p className="truncate text-sm font-medium text-slate-300">{card.value}</p>
                    </div>
                  </Wrapper>
                )
              })}
            </div>

            {/* Map */}
            <div className="mt-4 overflow-hidden rounded-xl border border-white/5">
              <iframe
                title="Localisation"
                src={`https://www.google.com/maps?q=${contactInfo.mapsQuery}&output=embed`}
                width="100%"
                height="180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-70 transition-opacity hover:opacity-100"
                id="contact-map"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal lg:col-span-8" data-delay="200">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
              id="contact-form"
            >
              <h3 className="mb-6 text-lg font-bold text-white">Envoyez-nous un message</h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-nom" className="mb-1.5 block text-xs font-medium text-slate-500">Nom complet</label>
                  <input name="nom" value={formData.nom} onChange={handleChange} className={inputBase} type="text" placeholder="Jean Dupont" required id="contact-nom" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium text-slate-500">Email</label>
                  <input name="email" value={formData.email} onChange={handleChange} className={inputBase} type="email" placeholder="jean@exemple.com" required id="contact-email" />
                </div>
                <div>
                  <label htmlFor="contact-telephone" className="mb-1.5 block text-xs font-medium text-slate-500">Téléphone</label>
                  <input name="telephone" value={formData.telephone} onChange={handleChange} className={inputBase} type="tel" placeholder="+221 77 000 0000" id="contact-telephone" />
                </div>
                <div>
                  <label htmlFor="contact-service" className="mb-1.5 block text-xs font-medium text-slate-500">Service souhaité</label>
                  <select name="service" value={formData.service} onChange={handleChange} className={`${inputBase} ${!formData.service ? 'text-slate-500' : ''}`} required id="contact-service">
                    <option value="">Sélectionner...</option>
                    <option value="web">Développement web</option>
                    <option value="mobile">Développement mobile</option>
                    <option value="design">UI/UX Design</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="marketing">Marketing digital</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium text-slate-500">Votre message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} className={`${inputBase} h-28 resize-none`} placeholder="Décrivez votre projet..." required id="contact-message" />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Envoi...</>
                  ) : (
                    <><Send className="h-4 w-4" /> Envoyer</>
                  )}
                </Button>
                {status.message && (
                  <p className={`text-sm ${status.type === 'success' ? 'text-green-400' : status.type === 'error' ? 'text-red-400' : 'text-slate-400'}`}>
                    {status.message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
