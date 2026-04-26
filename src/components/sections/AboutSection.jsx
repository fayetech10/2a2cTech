import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { aboutContent, aboutPillars, heroStats } from '../../data/siteData'
import Button from '../ui/Button'
import SectionHeader from '../ui/SectionHeader'

const MotionDiv = motion.div

function AboutSection() {
  return (
    <section id="a-propos" className="relative section-padding">
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <MotionDiv
            className="glass-panel-strong p-7 sm:p-9"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <SectionHeader
              badge="Who We Are"
              centered={false}
              title={
                <>
                  Une approche
                  <span className="block text-slate-400">plus calme, plus precise.</span>
                </>
              }
              subtitle={aboutContent.whoWeAre}
            />

            <div className="mt-8 space-y-5 text-base leading-8 text-muted">
              <p>{aboutContent.mission}</p>
              <p>{aboutContent.approach}</p>
            </div>

            <Button href="#portfolio" variant="secondary" className="mt-8">
              Voir les realisations
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Button>
          </MotionDiv>

          <MotionDiv
            className="grid gap-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ delay: 0.06, duration: 0.55, ease: 'easeOut' }}
          >
            <div className="glass-panel-strong overflow-hidden p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-[1.6rem] bg-[#f5f5f7] p-5 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]">
                    <p className="text-3xl font-semibold text-dark-900">{stat.value}</p>
                    <p className="mt-2 text-sm font-medium text-slate-700">{stat.label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {aboutPillars.map((pillar, index) => {
                const Icon = pillar.icon

                return (
                  <MotionDiv
                    key={pillar.title}
                    className="glass-panel p-6"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0.08 + index * 0.08, duration: 0.5, ease: 'easeOut' }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5f5f7] text-primary shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-5 text-2xl font-semibold text-dark-900">{pillar.title}</p>
                    <p className="mt-3 text-sm leading-7 text-muted">{pillar.description}</p>
                  </MotionDiv>
                )
              })}
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
