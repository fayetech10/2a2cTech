import { useState } from 'react'
import { Quote } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { temoignages } from '../../data/siteData'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-white/10'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useScrollReveal()

  return (
    <section id="temoignages" className="section-padding relative" ref={containerRef}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Témoignages"
          title={
            <>
              Ce que disent{' '}
              <span className="gradient-text">nos clients</span>
            </>
          }
          subtitle="La satisfaction de nos clients est notre meilleure recommandation."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {temoignages.map((item, index) => (
            <div key={item.id} className="reveal" data-delay={index * 150}>
              <blockquote
                className={`group relative h-full cursor-pointer overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${
                  activeIndex === index
                    ? 'border-primary/30 bg-white/10 shadow-lg shadow-primary/5'
                    : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {/* Quote icon */}
                <Quote className="mb-4 h-8 w-8 text-primary/30" />

                <p className="mb-6 text-sm leading-relaxed text-slate-300">
                  "{item.texte}"
                </p>

                <div className="mt-auto flex items-center gap-3">
                  {/* Avatar with gradient */}
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${item.avatarGradient} text-sm font-bold text-white shadow-lg`}>
                    {item.auteur.charAt(0)}
                  </div>
                  <div>
                    <StarRating rating={item.rating} />
                    <p className="mt-1 font-semibold text-white">{item.auteur}</p>
                    <p className="text-xs text-slate-500">
                      {item.role} — {item.entreprise}
                    </p>
                  </div>
                </div>
              </blockquote>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="mt-8 flex justify-center gap-2 md:hidden">
          {temoignages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${
                activeIndex === index
                  ? 'w-6 bg-primary'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Témoignage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
