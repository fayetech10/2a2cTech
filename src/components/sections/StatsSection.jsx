import { useEffect, useState, useRef } from 'react'
import { FolderKanban, Users, Calendar, ThumbsUp } from 'lucide-react'
import { stats } from '../../data/siteData'

const statIcons = { projects: FolderKanban, clients: Users, experience: Calendar, satisfaction: ThumbsUp }
const statGradients = { projects: 'from-primary to-blue-400', clients: 'from-violet to-purple-400', experience: 'from-accent to-cyan-400', satisfaction: 'from-emerald-500 to-green-400' }

function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 2000
          const increment = value / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= value) { setCount(value); clearInterval(timer) }
            else setCount(Math.floor(start))
          }, 16)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return <span ref={ref}>{count}{suffix}</span>
}

function StatsSection() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/[0.03] via-violet/[0.03] to-accent/[0.03]" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat) => {
            const Icon = statIcons[stat.id]
            const gradient = statGradients[stat.id]
            return (
              <div key={stat.id} className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]">
                <div className={`mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <p className="mb-0.5 text-2xl font-extrabold text-white sm:text-3xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs font-medium text-slate-500">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
