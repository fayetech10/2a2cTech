import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { testimonials } from '../../data/siteData'
import SectionHeader from '../ui/SectionHeader'

const MotionBlockquote = motion.blockquote

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeTestimonial = testimonials[activeIndex]

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="temoignages" className="relative section-padding">
      <div className="shell">
          <SectionHeader
            badge="Testimonials"
            title={
              <>
                Une preuve sociale plus sobre.
                <span className="block text-slate-400">Plus proche d une presentation produit premium.</span>
              </>
            }
            subtitle="Des retours clients plus lisibles, plus directs et plus faciles a parcourir pour comprendre rapidement l impact de nos interventions."
          />

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.08fr_.92fr]">
          <div className="glass-panel-strong p-7 sm:p-9">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-dark-900 text-lg font-semibold text-white">
                  {activeTestimonial.companyMark}
                </span>
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">{activeTestimonial.company}</p>
                  <p className="mt-2 text-sm text-slate-500">{activeTestimonial.highlight}</p>
                </div>
              </div>

              <div className="hidden items-center gap-2 sm:flex">
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.06] bg-white text-slate-700 hover:text-dark-900"
                  aria-label="Temoignage precedent"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.06] bg-white text-slate-700 hover:text-dark-900"
                  aria-label="Temoignage suivant"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <MotionBlockquote
                key={activeTestimonial.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="mt-10"
              >
                <Quote className="h-10 w-10 text-primary/28" />
                <p className="mt-6 max-w-3xl text-3xl font-semibold leading-[1.25] text-dark-900 sm:text-4xl">
                  "{activeTestimonial.quote}"
                </p>
                <div className="mt-8">
                  <p className="text-lg font-medium text-dark-900">{activeTestimonial.author}</p>
                  <p className="mt-1 text-sm text-slate-500">
                    {activeTestimonial.role} • {activeTestimonial.company}
                  </p>
                </div>
              </MotionBlockquote>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between sm:hidden">
              <button
                type="button"
                onClick={handlePrevious}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.06] bg-white text-slate-700 hover:text-dark-900"
                aria-label="Temoignage precedent"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.06] bg-white text-slate-700 hover:text-dark-900"
                aria-label="Temoignage suivant"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="grid gap-4">
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`glass-panel text-left p-5 transition-all ${
                  activeIndex === index
                    ? 'border-black/10 bg-white'
                    : 'hover:border-black/[0.08] hover:bg-white'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5f5f7] text-sm font-semibold text-dark-900">
                        {item.companyMark}
                      </span>
                      <div>
                        <p className="font-medium text-dark-900">{item.company}</p>
                        <p className="text-sm text-slate-500">{item.author}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-muted">{item.quote}</p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
