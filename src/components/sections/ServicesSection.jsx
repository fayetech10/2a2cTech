import { useState } from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'
import ServiceDetail from './ServiceDetail'
import { services } from '../../data/siteData'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null)
  const containerRef = useScrollReveal({ staggerDelay: 80 })

  return (
    <>
      <section id="services" className="section-padding relative" ref={containerRef}>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="Nos services"
            title={
              <>
                Des solutions{' '}
                <span className="gradient-text">complètes et sur mesure</span>
              </>
            }
            subtitle="De la conception au déploiement, nous couvrons tous les besoins digitaux de votre entreprise. Cliquez sur un service pour en savoir plus."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={service.id} className="reveal" data-delay={index * 80}>
                  <div
                    className="group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06]"
                    onClick={() => setSelectedService(service)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setSelectedService(service)
                      }
                    }}
                    id={`service-card-${service.id}`}
                  >
                    {/* Hover glow effect */}
                    <div className={`absolute -right-6 -top-6 h-24 w-24 rounded-full ${service.bgGlow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />

                    <div className="relative">
                      <div className="mb-4 flex items-center justify-between">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <ExternalLink className="h-4 w-4 text-slate-600 transition-all duration-300 group-hover:text-white/60" />
                      </div>
                      <h3 className="mb-2 text-base font-bold text-white">
                        {service.titre}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-400">
                        {service.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary-300 opacity-0 transition-all duration-300 group-hover:opacity-100">
                        Voir les détails
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="reveal mt-12 text-center" data-delay="900">
            <Button href="#contact" size="lg">
              Demander un devis gratuit
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {selectedService && (
        <ServiceDetail
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </>
  )
}

export default ServicesSection
