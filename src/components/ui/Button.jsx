function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  disabled = false,
  ...props
}) {
  const baseClasses =
    'group inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-55'

  const variants = {
    primary:
      'bg-primary text-white shadow-[0_18px_38px_-24px_rgba(0,113,227,0.7)] hover:-translate-y-0.5 hover:bg-primary-700',
    secondary:
      'border border-black/[0.08] bg-white text-dark-900 hover:-translate-y-0.5 hover:border-black/[0.12] hover:bg-[#fafafa]',
    ghost:
      'text-primary hover:bg-primary/[0.06]',
  }

  const sizes = {
    sm: 'gap-2 px-4 py-2.5 text-sm',
    md: 'gap-2.5 px-5 py-3 text-sm',
    lg: 'gap-3 px-6 py-3.5 text-base',
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} aria-disabled={disabled} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button
