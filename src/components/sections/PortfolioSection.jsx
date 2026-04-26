import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { caseStudies } from '../../data/siteData'
import SectionHeader from '../ui/SectionHeader'
import CaseStudyDetail from './CaseStudyDetail'

const MotionArticle = motion.article

function PortfolioSection() {
  const [selectedCase, setSelectedCase] = useState(null)

  return (
    <>
      <section id="portfolio" className="relative section-padding">
        <div className="shell">
          <SectionHeader
            badge="Portfolio"
            title={
              <>
                Des case studies plus nettes.
                <span className="block text-slate-400">Comme des pages produit.</span>
              </>
            }
            subtitle="Chaque projet est presente avec un impact principal, quelques chiffres cles et une lecture rapide du probleme, de la solution et des resultats."
          />

          <div className="mt-14 grid gap-5 xl:grid-cols-2">
            {caseStudies.map((item, index) => {
              const Icon = item.icon

              return (
                <MotionArticle
                  key={item.id}
                  className="glass-panel overflow-hidden p-0"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ delay: index * 0.08, duration: 0.55, ease: 'easeOut' }}
                >
                  <div className={`relative overflow-hidden bg-gradient-to-br ${item.accent} p-6 sm:p-8`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.32),_transparent_36%)]" />
                    <div className="relative rounded-[2rem] border border-white/35 bg-white/20 p-5 backdrop-blur-sm">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/[0.78]">{item.category}</p>
                          <h3 className="mt-3 text-3xl font-semibold leading-tight text-white">{item.title}</h3>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/20 text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>

                      <div className="mt-8 grid gap-3 sm:grid-cols-3">
                        {item.metrics.map((metric) => (
                          <div key={metric.label} className="rounded-[1.35rem] border border-white/25 bg-white/18 p-4">
                            <p className="text-3xl font-semibold text-white">{metric.value}</p>
                            <p className="mt-2 text-sm text-white/[0.82]">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <p className="text-base font-medium text-primary">{item.summary}</p>
                    <p className="mt-4 text-sm leading-7 text-muted">{item.challenge}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.deliverables.map((deliverable) => (
                        <span
                          key={deliverable}
                          className="rounded-full border border-black/[0.06] bg-[#f5f5f7] px-3 py-1.5 text-sm text-slate-700"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedCase(item)}
                      className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary-700"
                    >
                      Ouvrir la case study
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </MotionArticle>
              )
            })}
          </div>
        </div>
      </section>

      {selectedCase && (
        <CaseStudyDetail item={selectedCase} onClose={() => setSelectedCase(null)} />
      )}
    </>
  )
}

export default PortfolioSection
