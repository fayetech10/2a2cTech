function SectionHeader({ badge, title, subtitle, centered = true, className = '' }) {
  return (
    <div className={`${centered ? 'mx-auto max-w-4xl text-center' : 'max-w-3xl'} ${className}`}>
      {badge && (
        <span className="section-eyebrow mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {badge}
        </span>
      )}
      <h2 className="text-4xl font-semibold leading-[1.02] text-dark-900 sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base leading-8 text-muted sm:text-xl ${centered ? 'mx-auto max-w-2xl' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
