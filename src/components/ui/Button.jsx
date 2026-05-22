export default function Button({ children, variant = 'primary', href, onClick, type = 'button', className = '' }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300'
  const styles = {
    primary: 'bg-gradient-to-r from-sky-400 to-blue-700 text-white shadow-glow hover:scale-[1.02]',
    secondary: 'bg-white/10 text-slate-100 border border-white/10 hover:bg-white/15',
    ghost: 'text-sky-200 hover:text-sky-100',
  }

  const sharedClassName = `${base} ${styles[variant] ?? styles.primary} ${className}`.trim()

  return href ? (
    <a href={href} className={sharedClassName}>
      {children}
    </a>
  ) : (
    <button type={type} onClick={onClick} className={sharedClassName}>
      {children}
    </button>
  )
}
