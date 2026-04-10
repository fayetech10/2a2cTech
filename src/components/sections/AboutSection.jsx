import { Target, Settings, Users, Lightbulb, Lock, Phone, Globe2, ArrowRight } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const expertises = [
  {
    icon: Target,
    title: 'Expertise métier',
    description: 'Chaque solution est alignée sur vos objectifs business pour un impact réel et mesurable.',
    gradient: 'from-primary to-blue-400',
  },
  {
    icon: Settings,
    title: 'Qualité technique',
    description: 'Technologies modernes, code propre et architecture évolutive pour des solutions durables.',
    gradient: 'from-violet to-purple-400',
  },
  {
    icon: Users,
    title: 'Accompagnement',
    description: 'De l\'idée au déploiement, nous restons disponibles, réactifs et engagés.',
    gradient: 'from-accent to-cyan-400',
  },
]

const values = [
  { icon: Lightbulb, label: 'Innovation', gradient: 'from-amber-500 to-orange-400' },
  { icon: Lock, label: 'Sécurité', gradient: 'from-red-500 to-rose-400' },
  { icon: Phone, label: 'Support 24/7', gradient: 'from-emerald-500 to-green-400' },
  { icon: Globe2, label: 'Vision globale', gradient: 'from-primary to-violet' },
]

function AboutSection() {
  const containerRef = useScrollReveal()

  return (
    <section id="a-propos" className="section-padding relative" ref={containerRef}>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-start gap-16 lg:grid-cols-12">
          {/* Left: Text */}
          <div className="reveal lg:col-span-5" data-delay="0">
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-300">
              À propos
            </span>
            <h2 className="mb-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Votre partenaire{' '}
              <span className="gradient-text">digital de confiance</span>
            </h2>
            <p className="mb-8 leading-relaxed text-slate-400">
              Nous accompagnons les entreprises dans leur transformation numérique
              avec une approche orientée résultats. Notre mission : rendre la
              technologie accessible pour générer de la valeur, quelle que soit
              la taille de votre entreprise.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-3">
              {values.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]"
                  >
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${item.gradient} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-300">{item.label}</span>
                  </div>
                )
              })}
            </div>

            <Button href="#services" variant="outline" size="md" className="mt-8">
              Découvrir nos services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Right: Expertise cards */}
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {expertises.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="reveal" data-delay={index * 150}>
                    <div className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] sm:flex-col lg:flex-row lg:items-start">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-base font-bold text-white">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
