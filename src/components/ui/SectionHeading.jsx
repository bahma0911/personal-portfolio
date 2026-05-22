export default function SectionHeading({ title, subtitle, className = '' }) {
  return (
    <div className={`max-w-3xl text-center mx-auto ${className}`}>
      <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80 mb-3">{subtitle}</p>
      <h2 className="text-3xl sm:text-4xl font-semibold text-white">{title}</h2>
      <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 mx-auto" />
    </div>
  )
}
