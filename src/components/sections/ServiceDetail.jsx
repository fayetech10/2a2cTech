import { useEffect } from 'react'
import { X, CheckCircle2, ArrowRight, Cpu, Sparkles } from 'lucide-react'
import Button from '../ui/Button'

/**
 * Full-screen modal overlay that displays detailed service information.
 * Triggered when clicking a service card in ServicesSection.
 */
function ServiceDetail({ service, onClose }) {
  const Icon = service.icon

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-dark-900/90 backdrop-blur-md"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      id="service-detail-overlay"
    >
      <div className="relative mx-4 my-8 w-full max-w-4xl animate-fade-in-up sm:mx-6 md:my-16">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-2 right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-dark-800 text-slate-400 transition-all hover:border-white/30 hover:text-white sm:-right-2"
          aria-label="Fermer"
          id="service-detail-close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Main card */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-dark-800 shadow-2xl">
          {/* Header with gradient */}
          <div className="relative overflow-hidden bg-gradient-to-r from-primary/20 via-violet/20 to-accent/10 px-6 py-10 sm:px-10 sm:py-12">
            {/* Background pattern */}
            <div className="pointer-events-none absolute inset-0 opacity-10">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary blur-3xl" />
              <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-violet blur-3xl" />
            </div>

            <div className="relative flex items-start gap-5">
              <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
                <Icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="mb-2 text-2xl font-extrabold text-white sm:text-3xl">
                  {service.titre}
                </h2>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  {service.longDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 px-6 py-8 sm:px-10 sm:py-10">
            {/* Features */}
            <div>
              <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-white">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Ce que nous proposons
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {service.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.05]"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-white">
                <ArrowRight className="h-5 w-5 text-violet" />
                Notre processus
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {service.processSteps.map((step, i) => (
                  <div key={i} className="relative">
                    {/* Connector line */}
                    {i < service.processSteps.length - 1 && (
                      <div className="absolute right-0 top-8 hidden h-0.5 w-4 bg-gradient-to-r from-primary/30 to-transparent lg:block" style={{ right: '-16px' }} />
                    )}
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-violet text-sm font-bold text-white">
                          {i + 1}
                        </span>
                        <span className="font-semibold text-white">{step.step}</span>
                      </div>
                      <p className="text-sm text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-white">
                <Cpu className="h-5 w-5 text-accent" />
                Technologies utilisées
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300 transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-white">
                <Sparkles className="h-5 w-5 text-yellow-400" />
                Vos avantages
              </h3>
              <div className="grid gap-3 sm:grid-cols-3">
                {service.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/5 bg-gradient-to-br from-primary/5 to-violet/5 p-4 text-center"
                  >
                    <p className="text-sm font-medium text-slate-200">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/5 bg-gradient-to-r from-primary/5 via-violet/5 to-accent/5 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
              <div>
                <p className="font-bold text-white">Intéressé par ce service ?</p>
                <p className="text-sm text-slate-400">Contactez-nous pour un devis gratuit et personnalisé.</p>
              </div>
              <Button href="#contact" size="lg" onClick={onClose}>
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail
