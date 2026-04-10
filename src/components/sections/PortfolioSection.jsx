import { Layers, Smartphone, ShoppingCart, BookOpen } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { portfolio } from '../../data/siteData'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const portfolioIcons = {
  'saas-rh': Layers,
  'delivery-app': Smartphone,
  'ecommerce-premium': ShoppingCart,
  'school-management': BookOpen,
}

function PortfolioSection() {
  const containerRef = useScrollReveal({ staggerDelay: 150 })

  return (
    <section id="portfolio" className="section-padding relative" ref={containerRef}>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          badge="Portfolio"
          title={
            <>
              Nos{' '}
              <span className="gradient-text">réalisations</span>
            </>
          }
          subtitle="Projets conçus et livrés pour nos clients."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {portfolio.map((projet, index) => {
            const Icon = portfolioIcons[projet.id] || Layers
            return (
              <div key={projet.id} className="reveal" data-delay={index * 150}>
                <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06]">
                  {/* Gradient header */}
                  <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${projet.gradient}`}>
                    {/* Centered icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="h-24 w-24 rounded-2xl border border-white/15 transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon className="h-10 w-10 text-white/70 transition-all duration-500 group-hover:scale-110 group-hover:text-white" />
                        </div>
                      </div>
                    </div>
                    {/* Fade overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
                    {/* Number */}
                    <span className="absolute right-4 top-4 rounded-lg bg-white/10 px-2.5 py-1 text-xs font-bold text-white/70 backdrop-blur-sm">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="mb-1.5 text-base font-bold text-white">{projet.titre}</h3>
                    <p className="mb-4 text-sm text-slate-400">{projet.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {projet.tags.map((tag) => (
                        <span key={tag} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
