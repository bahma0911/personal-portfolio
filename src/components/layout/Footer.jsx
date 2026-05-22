import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 px-5 py-8 text-slate-300 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-slate-400">Built with React + Tailwind</p>
          <p className="mt-2 text-xs text-slate-500">© 2026 Modern Developer Portfolio. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="#home" className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-4 py-2 text-sm text-slate-100 transition hover:bg-slate-800">
            <ArrowUp size={16} /> Top
          </a>
          <div className="flex gap-3 text-slate-400">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-sky-200">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-sky-200">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
