/**
 * Consistent section header with badge, gradient title, and subtitle.
 * Reused across all major sections.
 */
function SectionHeader({ badge, title, subtitle, centered = true }) {
  return (
    <div className={`mb-14 max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      {badge && (
        <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-300">
          {badge}
        </span>
      )}
      <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-slate-400 sm:text-lg">{subtitle}</p>
      )}
    </div>
  )
}

export default SectionHeader
