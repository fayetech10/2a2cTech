import { useState } from 'react'
import { Loader2, Mail, MapPin, MessageCircle, PhoneCall, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { contactInfo, services } from '../../data/siteData'
import Button from '../ui/Button'
import SectionHeader from '../ui/SectionHeader'
import { submitContactForm } from '../../services/formService'

const MotionDiv = motion.div
const MotionForm = motion.form

const initialFormData = {
  nom: '',
  email: '',
  telephone: '',
  service: '',
  message: '',
}

function ContactSection() {
  const [formData, setFormData] = useState(initialFormData)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: 'loading', message: 'Envoi en cours...' })

    const result = await submitContactForm(formData)

    setStatus({
      type: result.success ? 'success' : 'error',
      message: result.message,
    })
    setIsSubmitting(false)

    if (result.success) {
      setFormData(initialFormData)
    }
  }

  const inputClassName =
    'w-full rounded-[1.3rem] border border-black/[0.06] bg-[#f5f5f7] px-4 py-3.5 text-sm text-dark-900 placeholder:text-slate-500'

  return (
    <section id="contact" className="relative section-padding">
      <div className="shell">
          <SectionHeader
            badge="Contact"
            title={
              <>
                Un point de contact plus simple.
                <span className="block text-slate-400">Comme tout le reste.</span>
              </>
            }
            subtitle="Un formulaire direct, une information utile et une prise de contact sans friction pour lancer la bonne discussion rapidement."
          />

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <MotionDiv
            className="glass-panel-strong p-7 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">Consultation</p>
            <h3 className="mt-4 text-3xl font-semibold text-dark-900 sm:text-4xl">
              Decrivez votre projet. Nous clarifions la suite.
            </h3>
            <p className="mt-5 text-base leading-8 text-muted">
              Besoin d un logiciel, d une refonte reseau, d une formation ou d un support technique ?
              Nous vous aidons a cadrer la bonne intervention, avec une premiere recommandation claire.
            </p>

            <div className="mt-8 grid gap-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 rounded-[1.5rem] bg-[#f5f5f7] p-4 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary shadow-[0_12px_22px_-18px_rgba(15,23,42,0.16)]">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="text-sm text-dark-900">{contactInfo.email}</span>
              </a>

              <a
                href={contactInfo.whatsappLink}
                className="flex items-center gap-4 rounded-[1.5rem] bg-[#f5f5f7] p-4 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary shadow-[0_12px_22px_-18px_rgba(15,23,42,0.16)]">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span className="text-sm text-dark-900">{contactInfo.whatsapp}</span>
              </a>

              <div className="flex items-center gap-4 rounded-[1.5rem] bg-[#f5f5f7] p-4 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary shadow-[0_12px_22px_-18px_rgba(15,23,42,0.16)]">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="text-sm text-dark-900">{contactInfo.address}</span>
              </div>
            </div>

            <div className="mt-8 rounded-[1.75rem] bg-[#f5f5f7] p-5 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]">
              <div className="flex items-start gap-3">
                <PhoneCall className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium text-dark-900">Ce que vous recevez</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    Une premiere reponse, une recommandation de perimetre et une prochaine etape concrete.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.8rem] border border-black/[0.06]">
              <iframe
                title="Carte de localisation"
                src={`https://www.google.com/maps?q=${contactInfo.mapsQuery}&output=embed`}
                width="100%"
                height="220"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-90 transition-opacity hover:opacity-100"
              />
            </div>
          </MotionDiv>

          <MotionForm
            onSubmit={handleSubmit}
            className="glass-panel p-7 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ delay: 0.08, duration: 0.55, ease: 'easeOut' }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
                  Demande de consultation
                </p>
              </div>

              <div>
                <label htmlFor="contact-nom" className="mb-2 block text-sm font-medium text-slate-700">
                  Nom complet
                </label>
                <input
                  id="contact-nom"
                  name="nom"
                  type="text"
                  value={formData.nom}
                  onChange={handleChange}
                  className={inputClassName}
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClassName}
                  placeholder="vous@entreprise.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-telephone" className="mb-2 block text-sm font-medium text-slate-700">
                  Telephone
                </label>
                <input
                  id="contact-telephone"
                  name="telephone"
                  type="tel"
                  value={formData.telephone}
                  onChange={handleChange}
                  className={inputClassName}
                  placeholder="+221 ..."
                />
              </div>

              <div>
                <label htmlFor="contact-service" className="mb-2 block text-sm font-medium text-slate-700">
                  Service d interet
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={inputClassName}
                  required
                >
                  <option value="">Selectionner un service</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClassName} min-h-[12rem] resize-y`}
                  placeholder="Decrivez votre contexte, vos objectifs, vos delais et vos contraintes."
                  required
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Envoi...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Envoyer la demande
                  </>
                )}
              </Button>

              {status.message && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`max-w-sm text-sm ${
                    status.type === 'success'
                      ? 'text-emerald-600'
                      : status.type === 'error'
                        ? 'text-rose-600'
                        : 'text-slate-500'
                  }`}
                >
                  {status.message}
                </p>
              )}
            </div>
          </MotionForm>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
