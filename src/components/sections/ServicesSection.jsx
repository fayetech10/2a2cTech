import { useState } from 'react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { services } from '../../data/siteData'
import SectionHeader from '../ui/SectionHeader'
import ServiceDetail from './ServiceDetail'

const MotionArticle = motion.article

function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null)
  const [featuredService, ...otherServices] = services
  const FeaturedIcon = featuredService.icon

  return (
    <>
      <section id="services" className="relative section-padding">
        <div className="shell">
          <SectionHeader
            badge="Services"
            title={
              <>
                Cinq expertises.
                <span className="block text-slate-400">Une experience beaucoup plus epuree.</span>
              </>
            }
            subtitle="Nous reunissons les services essentiels pour concevoir, connecter, maintenir et valoriser votre environnement digital avec la meme exigence de clarte du debut a la fin."
          />

          <div className="mt-14 grid gap-5 xl:grid-cols-2">
            <MotionArticle
              className="glass-panel-strong gradient-border xl:col-span-2 overflow-hidden p-6 sm:p-8 lg:p-10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
                <div className="max-w-2xl">
                  <span className="section-eyebrow">
                    <FeaturedIcon className="h-3.5 w-3.5 text-primary" />
                    {featuredService.label}
                  </span>
                  <h3 className="mt-6 text-4xl font-semibold leading-tight text-dark-900 sm:text-5xl">
                    {featuredService.title}
                  </h3>
                  <p className="mt-4 text-xl font-medium text-primary">{featuredService.description}</p>
                  <p className="mt-5 text-base leading-8 text-muted">{featuredService.longDescription}</p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {featuredService.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-black/[0.06] bg-[#f5f5f7] px-3 py-1.5 text-sm text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedService(featuredService)}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary-700"
                  >
                    Voir le detail du service
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="rounded-[2rem] bg-[linear-gradient(180deg,#ffffff_0%,#f6f9fc_100%)] p-5 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]">
                  <div className="grid gap-4">
                    {featuredService.features.map((feature, index) => (
                      <div
                        key={feature}
                        className="flex items-start gap-4 rounded-[1.6rem] border border-black/[0.06] bg-white p-4 shadow-[0_12px_24px_-20px_rgba(15,23,42,0.12)]"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                          {index + 1}
                        </span>
                        <div>
                          <p className="text-sm font-medium text-dark-900">{feature}</p>
                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            Une execution plus propre, plus rapide a comprendre et plus facile a maintenir.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </MotionArticle>

            {otherServices.map((service, index) => {
              const Icon = service.icon

              return (
                <MotionArticle
                  key={service.id}
                  className="glass-panel card-shine flex h-full flex-col p-6 sm:p-7"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-glow`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-[#f5f5f7] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {service.label}
                    </span>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-3xl font-semibold text-dark-900">{service.title}</h3>
                    <p className="mt-3 text-base leading-7 text-muted">{service.longDescription}</p>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {service.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary-700"
                  >
                    Voir le detail
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </MotionArticle>
              )
            })}
          </div>
        </div>
      </section>

      {selectedService && (
        <ServiceDetail service={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </>
  )
}

export default ServicesSection
