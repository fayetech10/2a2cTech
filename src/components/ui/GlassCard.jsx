/**
 * Card with glassmorphism effect, gradient border, and hover lift.
 */
function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={`
        glass gradient-border rounded-2xl p-6
        ${hover ? 'transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg hover:shadow-primary/5' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default GlassCard
