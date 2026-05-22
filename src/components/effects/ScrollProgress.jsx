import useScrollPosition from '../../hooks/useScrollPosition.jsx'

export default function ScrollProgress() {
  const progress = useScrollPosition()
  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full bg-slate-900/40">
      <div className="h-full bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-150" style={{ width: `${progress}%` }} />
    </div>
  )
}
