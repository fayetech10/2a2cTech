import { useEffect, useState } from 'react'
import { ArrowRight, Play, CheckCircle2, Rocket, BarChart3, Zap, Handshake } from 'lucide-react'
import Button from '../ui/Button'

const benefits = [
  { icon: Rocket, text: 'Visibilité optimisée' },
  { icon: BarChart3, text: 'Prospects qualifiés' },
  { icon: Zap, text: 'Solutions performantes' },
  { icon: Handshake, text: 'Accompagnement continu' },
]

const roles = ['sites web', 'apps mobiles', 'e-commerce', 'identités visuelles', 'stratégies SEO']

function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Animated text rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  // Trigger entrance animation
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Base image */}
        <img
          src="/hero-bg.png"
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/90 via-dark-900/75 to-dark-900/90" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent" />
      </div>

      {/* Animated ambient lights */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-[400px] w-[400px] animate-float rounded-full bg-primary/10 mix-blend-screen blur-[100px]" />
        <div className="absolute -right-32 bottom-1/4 h-[350px] w-[350px] animate-float-delayed rounded-full bg-violet/10 mix-blend-screen blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12">

          {/* ── Left column: Main message ── */}
          <div className={`lg:col-span-7 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-sm font-medium text-primary-200">Agence digitale basée au Sénégal</span>
            </div>

            {/* Headline */}
            <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              Nous créons des
              <br />
              <span className="relative inline-block">
                <span className="gradient-text">{roles[roleIndex]}</span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-primary via-violet to-accent opacity-50" />
              </span>
              <br />
              qui génèrent des résultats.
            </h1>

            {/* Subtitle */}
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-slate-400">
              Expériences digitales sur mesure pour valoriser votre entreprise
              et transformer vos visiteurs en clients fidèles.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Button href="#contact" size="lg">
                Démarrer un projet
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#portfolio" variant="ghost" size="lg" className="group">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-colors group-hover:border-primary/50 group-hover:bg-primary/10">
                  <Play className="h-3 w-3 text-white" />
                </div>
                Voir nos projets
              </Button>
            </div>

            {/* Inline trust */}
            <div className="mt-12 flex items-center gap-3">
              <div className="flex -space-x-2">
                {['from-primary to-blue-400', 'from-violet to-purple-400', 'from-emerald-500 to-teal-400', 'from-pink-500 to-rose-400'].map((g, i) => (
                  <div key={i} className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${g} text-[10px] font-bold text-white ring-2 ring-dark-900`}>
                    {['MK', 'PM', 'SL', 'JD'][i]}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-white">35+ clients</span>
                <span className="text-slate-500"> nous font confiance</span>
              </div>
            </div>
          </div>

          {/* ── Right column: Bento grid ── */}
          <div className={`hidden lg:col-span-5 lg:block transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="grid grid-cols-2 gap-3">
              {/* Stat card 1 */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.08]">
                <p className="mb-1 text-3xl font-extrabold text-white">50+</p>
                <p className="text-xs text-slate-500">Projets livrés</p>
              </div>

              {/* Stat card 2 */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.08]">
                <p className="mb-1 text-3xl font-extrabold text-white">98%</p>
                <p className="text-xs text-slate-500">Satisfaction client</p>
              </div>

              {/* Benefits card - spans 2 cols */}
              <div className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                <p className="mb-4 text-sm font-semibold text-white">Ce que vous gagnez</p>
                <div className="grid grid-cols-2 gap-3">
                  {benefits.map((b) => {
                    const Icon = b.icon
                    return (
                      <div key={b.text} className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-violet/20">
                          <Icon className="h-4 w-4 text-primary-300" />
                        </div>
                        <span className="text-xs font-medium text-slate-300">{b.text}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Tech stack mini */}
              <div className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span className="text-xs font-medium text-slate-300">Stack moderne</span>
                  </div>
                  <div className="flex gap-1.5">
                    {['React', 'Node', 'Figma'].map((t) => (
                      <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium uppercase tracking-widest text-slate-600">Scroll</span>
          <div className="flex h-7 w-4 items-start justify-center rounded-full border border-white/15 p-1">
            <div className="h-1.5 w-1 animate-bounce rounded-full bg-white/30" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
