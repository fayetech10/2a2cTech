/**
 * Reusable Button component with gradient, outline, and ghost variants.
 *
 * @param {'primary' | 'outline' | 'ghost'} variant
 * @param {'sm' | 'md' | 'lg'} size
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 cursor-pointer'

  const variants = {
    primary:
      'bg-gradient-to-r from-primary to-violet text-white hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0',
    outline:
      'border border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm',
    ghost:
      'text-slate-300 hover:text-white hover:bg-white/5',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5',
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
