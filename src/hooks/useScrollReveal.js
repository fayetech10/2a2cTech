import { useEffect, useRef } from 'react'

/**
 * Custom hook that applies scroll-reveal animations using IntersectionObserver.
 * Elements with the 'reveal' class will get 'revealed' added when they enter the viewport.
 *
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0 to 1)
 * @param {string} options.rootMargin - Root margin for the observer
 * @param {number} options.staggerDelay - Delay between staggered children (ms)
 */
export function useScrollReveal({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  staggerDelay = 100,
} = {}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements = container.querySelectorAll('.reveal, .reveal-left, .reveal-right')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0
            setTimeout(() => {
              entry.target.classList.add('revealed')
            }, Number(delay))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    elements.forEach((el, index) => {
      if (!el.dataset.delay) {
        el.dataset.delay = index * staggerDelay
      }
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [threshold, rootMargin, staggerDelay])

  return containerRef
}
