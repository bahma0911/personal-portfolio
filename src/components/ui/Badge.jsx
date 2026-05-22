export default function Badge({ children, className = '' }) {
  return (
    <span className={`inline-flex rounded-full border border-slate-600/80 bg-white/5 px-3 py-1 text-xs font-medium text-sky-100 ${className}`}>
      {children}
    </span>
  )
}
