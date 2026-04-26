import { Code2, Monitor, Network, Palette, ShieldCheck, BookOpen } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const teamMembers = [
  {
    id: 'dev',
    name: 'Développement',
    role: 'Web & Mobile',
    description: 'Experts en React, Angular, Spring Boot et React Native.',
    icon: Code2,
    gradient: 'from-primary to-blue-400',
  },
  {
    id: 'tech',
    name: 'Support IT',
    role: 'Techniciens',
    description: 'Maintenance et optimisation de vos systèmes informatiques.',
    icon: Monitor,
    gradient: 'from-violet to-purple-400',
  },
  {
    id: 'network',
    name: 'Réseaux',
    role: 'Infrastructure',
    description: 'Configuration et sécurisation de vos réseaux d\'entreprise.',
    icon: Network,
    gradient: 'from-accent to-cyan-400',
  },
  {
    id: 'design',
    name: 'Design',
    role: 'Infographes',
    description: 'Identités visuelles percutantes et maquettes UI/UX modernes.',
    icon: Palette,
    gradient: 'from-pink-500 to-rose-400',
  },
  {
    id: 'security',
    name: 'Cybersécurité',
    role: 'Spécialistes',
    description: 'Audits de vulnérabilité et protection de vos données.',
    icon: ShieldCheck,
    gradient: 'from-emerald-500 to-green-400',
  },
  {
    id: 'training',
    name: 'Formation',
    role: 'Formateurs',
    description: 'Formations personnalisées bureautique et programmation.',
    icon: BookOpen,
    gradient: 'from-amber-500 to-yellow-400',
  },
]

function TeamSection() {
  const containerRef = useScrollReveal({ staggerDelay: 100 })

  return (
    <section id="equipe" className="section-padding relative" ref={containerRef}>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeader
          badge="Notre équipe"
          title={
            <>
              Des experts{' '}
              <span className="gradient-text">passionnés</span>
            </>
          }
          subtitle="Une équipe pluridisciplinaire dédiée à votre transformation digitale."
        />

        {/* Team grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => {
            const Icon = member.icon
            return (
              <div key={member.id} className="reveal" data-delay={index * 100}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                  {/* Top gradient line */}
                  <div className={`h-0.5 bg-gradient-to-r ${member.gradient}`} />

                  {/* Hover glow */}
                  <div className={`absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br ${member.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-15`} />

                  <div className="relative flex items-start gap-4 p-5">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${member.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-white">{member.name}</h3>
                      <p className={`mb-1.5 text-xs font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                        {member.role}
                      </p>
                      <p className="text-sm leading-relaxed text-slate-400">{member.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Team summary */}
        <div className="reveal mt-12 flex justify-center" data-delay="700">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 backdrop-blur-sm">
            <div className="flex -space-x-2">
              {teamMembers.slice(0, 5).map((m, i) => (
                <div key={i} className={`flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br ${m.gradient} text-[9px] font-bold text-white ring-2 ring-dark-900`}>
                  {m.name.charAt(0)}
                </div>
              ))}
            </div>
            <span className="text-sm text-slate-400">
              <span className="font-semibold text-white">+15 experts</span> à votre service
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
