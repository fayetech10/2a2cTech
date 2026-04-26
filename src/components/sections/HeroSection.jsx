import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { heroStats, siteMeta } from '../../data/siteData'
import Button from '../ui/Button'

const MotionDiv = motion.div
const MotionH1 = motion.h1

const stageCards = [
  {
    title: 'Custom software',
    text: 'Applications metier, portails et outils utiles.',
    className: 'lg:absolute lg:left-0 lg:top-10',
  },
  {
    title: 'Network & telecom',
    text: 'Infrastructure stable, securisee et documentee.',
    className: 'lg:absolute lg:right-0 lg:top-20',
  },
  {
    title: 'Training & support',
    text: 'Prise en main, maintenance et suivi clair.',
    className: 'lg:absolute lg:left-12 lg:bottom-10',
  },
]

function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="accueil" className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top,_rgba(0,113,227,0.16),_transparent_42%)]" />

      <div className="shell section-padding relative">
        <div className="mx-auto max-w-5xl text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="section-eyebrow">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              {siteMeta.location} • {siteMeta.tagline}
            </span>
          </MotionDiv>

          <MotionH1
            className="mx-auto mt-8 max-w-5xl text-5xl font-semibold leading-[0.95] text-dark-900 sm:text-6xl lg:text-[5.6rem]"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.7, ease: 'easeOut' }}
          >
            Votre vision digitale.
            <span className="block text-slate-400">Notre execution experte.</span>
          </MotionH1>

          <motion.p
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted sm:text-2xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.7, ease: 'easeOut' }}
          >
            Logiciels sur mesure, formation IT, reseaux & telecom, maintenance et design graphique
            dans une experience claire, minimale et haut de gamme.
          </motion.p>

          <MotionDiv
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.7, ease: 'easeOut' }}
          >
            <Button href="#contact" size="lg">
              Demander une consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Button>
            <Button href="#services" variant="secondary" size="lg">
              Explorer les services
            </Button>
          </MotionDiv>
        </div>

        <MotionDiv
          className="relative mt-16"
          initial={{ opacity: 0, y: 26, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.8, ease: 'easeOut' }}
        >
          <div className="absolute left-1/2 top-10 h-72 w-[88%] -translate-x-1/2 rounded-full bg-primary/[0.12] blur-[110px]" />

          <div className="glass-panel-strong noise-overlay relative overflow-hidden p-6 sm:p-10">
            <div className="absolute inset-0 mesh-bg opacity-90" />
            <div className="absolute inset-0 subtle-grid opacity-[0.04]" />

            <div className="relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div className="max-w-xl">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
                  Everything works together.
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-dark-900 sm:text-5xl">
                  Une execution plus nette. Une presence plus forte.
                </h2>
                <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                  Nous structurons votre projet autour de priorites claires, de details soignes et
                  d une sensation de fluidite a chaque etape.
                </p>

                <div className="mt-8 grid gap-3">
                  {[
                    'Une architecture simple a comprendre et facile a faire evoluer',
                    'Des interfaces plus calmes, plus lisibles et plus premium',
                    'Un accompagnement qui va du cadrage a la maintenance',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[1.5rem] border border-black/[0.06] bg-white/[0.8] px-4 py-3 shadow-[0_12px_24px_-20px_rgba(15,23,42,0.16)]"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm leading-7 text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="rounded-[1.6rem] bg-[#fbfbfd] p-4 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]">
                      <p className="text-3xl font-semibold text-dark-900">{stat.value}</p>
                      <p className="mt-1 text-sm font-medium text-slate-700">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[32rem] rounded-[2.5rem] bg-[linear-gradient(180deg,#ffffff_0%,#f4f7fb_100%)] p-5 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]">
                <div className="flex items-center justify-between rounded-[1.5rem] border border-black/[0.06] bg-white px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-dark-900">2A2C Tech Platform</p>
                    <p className="text-xs text-slate-500">Software, infrastructure, training, support</p>
                  </div>
                  <span className="rounded-full bg-[#f5f5f7] px-3 py-1 text-xs font-medium text-slate-600">
                    Active
                  </span>
                </div>

                <div className="relative mt-5 flex h-[24rem] items-center justify-center overflow-hidden rounded-[2rem] border border-black/[0.06] bg-[radial-gradient(circle_at_top,_rgba(0,113,227,0.18),_transparent_36%),linear-gradient(180deg,#ffffff_0%,#f6f9fc_100%)]">
                  <div className="absolute h-64 w-64 rounded-full border border-primary/20 bg-primary/[0.06]" />
                  <div className="absolute h-40 w-40 rounded-full border border-primary/15 bg-white/90 shadow-[0_24px_48px_-28px_rgba(0,113,227,0.35)]" />
                  <div className="absolute h-24 w-24 rounded-full bg-dark-900 text-white flex items-center justify-center text-center text-xs font-semibold tracking-[0.16em]">
                    ORCHESTRATION
                  </div>

                  <div className="absolute inset-8 hidden lg:block">
                    {stageCards.map((card, index) => (
                      <MotionDiv
                        key={card.title}
                        className={`w-56 rounded-[1.6rem] border border-black/[0.06] bg-white/[0.92] p-4 shadow-[0_18px_34px_-24px_rgba(15,23,42,0.18)] ${card.className}`}
                        animate={shouldReduceMotion ? undefined : { y: index % 2 === 0 ? [-5, 7, -5] : [6, -5, 6] }}
                        transition={shouldReduceMotion ? undefined : { duration: 7 + index, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <p className="text-sm font-semibold text-dark-900">{card.title}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{card.text}</p>
                      </MotionDiv>
                    ))}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 grid gap-3 lg:hidden">
                    {stageCards.map((card) => (
                      <div
                        key={card.title}
                        className="rounded-[1.3rem] border border-black/[0.06] bg-white/[0.92] p-4 text-left shadow-[0_18px_34px_-24px_rgba(15,23,42,0.18)]"
                      >
                        <p className="text-sm font-semibold text-dark-900">{card.title}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{card.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}

export default HeroSection
