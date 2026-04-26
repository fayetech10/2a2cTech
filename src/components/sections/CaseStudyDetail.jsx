import { useEffect } from 'react'
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Layers3, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'

const MotionDiv = motion.div

function CaseStudyDetail({ item, onClose }) {
  const Icon = item.icon || Layers3

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
      aria-labelledby={`case-title-${item.id}`}
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
          aria-label="Fermer la case study"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <span className="section-eyebrow">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f0f6ff] text-primary">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                {item.category}
              </span>

              <h3 id={`case-title-${item.id}`} className="mt-5 text-3xl font-semibold text-dark-900 sm:text-4xl">
                {item.title}
              </h3>

              <p className="mt-4 text-base leading-8 text-muted">{item.summary}</p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-[1.75rem] bg-[#f5f5f7] p-5 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]">
                  <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-600">
                    <BriefcaseBusiness className="h-4 w-4 text-primary" />
                    Challenge
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-700">{item.challenge}</p>
                </div>

                <div className="rounded-[1.75rem] bg-[#f5f5f7] p-5 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]">
                  <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-600">
                    <Layers3 className="h-4 w-4 text-primary" />
                    Solution
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-700">{item.solution}</p>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-[1.75rem] bg-[#f5f5f7] p-5 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-600">Resultats</p>
                <ul className="mt-4 space-y-3">
                  {item.results.map((result) => (
                    <li key={result} className="flex items-start gap-3 text-sm leading-7 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.75rem] bg-[#f5f5f7] p-5 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-600">Stack & outils</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.stack.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-black/[0.06] bg-white px-3 py-1.5 text-sm text-slate-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="rounded-[1.9rem] bg-[#f5f5f7] p-5 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-600">Livrables</p>
              <div className="mt-4 space-y-3">
                {item.deliverables.map((deliverable) => (
                  <div
                    key={deliverable}
                    className="rounded-[1.25rem] bg-white px-4 py-3 text-sm text-slate-700 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]"
                  >
                    {deliverable}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.9rem] bg-[#f5f5f7] p-5 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-600">Metriques</p>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {item.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-[1.35rem] bg-white p-4 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]">
                    <p className="text-3xl font-semibold text-dark-900">{metric.value}</p>
                    <p className="mt-2 text-sm text-slate-600">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-[2rem] bg-dark-950 px-6 py-6 text-white md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-2xl font-semibold">Envie d un resultat similaire ?</p>
              <p className="mt-2 text-sm leading-7 text-white/[0.72]">
                Nous pouvons construire une feuille de route adaptee a votre contexte, vos contraintes et votre niveau de maturite digitale.
              </p>
            </div>
            <Button href="#contact" onClick={onClose}>
              Lancer mon projet
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Button>
          </div>
        </div>
      </MotionDiv>
    </div>
  )
}

export default CaseStudyDetail
