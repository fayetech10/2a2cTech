import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { ctaContent } from '../../data/siteData'
import Button from '../ui/Button'

const MotionDiv = motion.div

function CtaSection() {
  return (
    <section className="relative section-padding">
      <div className="shell">
        <MotionDiv
          className="relative overflow-hidden rounded-[2.75rem] bg-dark-950 px-6 py-10 text-white sm:px-8 sm:py-12 lg:px-12"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,113,227,0.34),_transparent_42%)]" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="section-eyebrow border-white/10 bg-white/[0.06] text-white/[0.72]">Call To Action</span>
              <h2 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                {ctaContent.title}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/[0.72]">{ctaContent.text}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="#contact" size="lg">
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
              <Button href="#services" variant="secondary" size="lg" className="border-white/14 bg-white text-dark-900">
                Revoir les services
              </Button>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}

export default CtaSection
