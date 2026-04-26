import { motion } from 'framer-motion'
import { approachChecklist, approachSteps } from '../../data/siteData'
import SectionHeader from '../ui/SectionHeader'

const MotionArticle = motion.article
const MotionDiv = motion.div

function WhyChooseUsSection() {
  return (
    <section className="relative section-padding">
      <div className="shell">
        <div className="overflow-hidden rounded-[2.75rem] bg-dark-950 px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <MotionDiv
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <SectionHeader
                badge="Our Approach"
                centered={false}
                className="[&_.section-eyebrow]:border-white/10 [&_.section-eyebrow]:bg-white/5 [&_.section-eyebrow]:text-white/70 [&_h2]:text-white [&_p]:text-white/[0.72]"
                title={
                  <>
                    Une methode
                    <span className="block text-white/45">pensee pour aller a l essentiel.</span>
                  </>
                }
                subtitle="Nous faisons peu de promesses vagues. Nous clarifions, nous structurons, nous livrons et nous accompagnons avec un niveau de detail qui reste lisible pour le client."
              />

              <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/55">
                  Pourquoi cette methode fonctionne
                </p>
                <ul className="mt-5 space-y-4">
                  {approachChecklist.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-7 text-white/75">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionDiv>

            <div className="grid gap-4">
              {approachSteps.map((step, index) => {
                const Icon = step.icon

                return (
                  <MotionArticle
                    key={step.id}
                    className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
                    initial={{ opacity: 0, x: 22 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-dark-900">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/45">{step.id}</p>
                        <p className="mt-2 text-2xl font-semibold text-white">{step.title}</p>
                        <p className="mt-3 text-sm leading-7 text-white/[0.72]">{step.description}</p>
                      </div>
                    </div>
                  </MotionArticle>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
