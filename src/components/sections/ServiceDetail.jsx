import { useEffect } from 'react'
import { ArrowRight, CheckCircle2, Cpu, Sparkles, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'

const MotionDiv = motion.div

function ServiceDetail({ service, onClose }) {
  const Icon = service.icon

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-black/[0.22] px-4 py-10 backdrop-blur-xl"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`service-title-${service.id}`}
    >
      <MotionDiv
        className="glass-panel-strong relative w-full max-w-5xl overflow-hidden"
        initial={{ opacity: 0, y: 18, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.06] bg-white text-slate-600 transition-colors hover:text-dark-900"
          aria-label="Fermer le detail du service"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <span className="section-eyebrow">
                <span className={`flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br ${service.accent}`}>
                  <Icon className="h-3.5 w-3.5 text-white" />
                </span>
                {service.label}
              </span>

              <h3
                id={`service-title-${service.id}`}
                className="mt-5 text-3xl font-semibold text-dark-900 sm:text-4xl"
              >
                {service.title}
              </h3>

              <p className="mt-4 text-base leading-8 text-muted">{service.longDescription}</p>

              <div className="mt-8 rounded-[1.75rem] bg-[#f5f5f7] p-5 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                  Ce que nous apportons
                </p>
                <p className="mt-3 text-lg font-medium text-dark-900">{service.highlight}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="rounded-full border border-black/[0.06] bg-white px-3 py-1.5 text-sm text-slate-700"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-[1.75rem] bg-[#f5f5f7] p-5 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]">
                <h4 className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-600">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Perimetre
                </h4>
                <ul className="mt-4 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-7 text-slate-700">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.75rem] bg-[#f5f5f7] p-5 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]">
                <h4 className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-600">
                  <Cpu className="h-4 w-4 text-primary" />
                  Stack & outils
                </h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-black/[0.06] bg-white px-3 py-1.5 text-sm text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] bg-[#f5f5f7] p-6 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]">
            <h4 className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-600">
              <Sparkles className="h-4 w-4 text-primary" />
              Notre approche de delivery
            </h4>

            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {service.processSteps.map((step, index) => (
                <div key={step.step} className="rounded-[1.45rem] bg-white p-4 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <p className="font-medium text-dark-900">{step.step}</p>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-[2rem] bg-dark-950 px-6 py-6 text-white md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-2xl font-semibold">Parlons de votre besoin</p>
              <p className="mt-2 text-sm leading-7 text-white/[0.72]">
                Nous pouvons transformer ce service en feuille de route claire, chiffrage et prochaine etape concrete.
              </p>
            </div>
            <Button href="#contact" onClick={onClose}>
              Demarrer la discussion
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Button>
          </div>
        </div>
      </MotionDiv>
    </div>
  )
}

export default ServiceDetail
