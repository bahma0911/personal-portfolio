import { motion } from 'framer-motion'
import { X } from 'lucide-react'

export default function Modal({ data, onClose }) {
  if (!data) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.96 }}
        className="w-full max-w-3xl overflow-hidden rounded-3xl border border-slate-500/20 bg-slate-950/95 shadow-glow"
      >
        <div className="flex items-center justify-between border-b border-slate-700/40 px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-sky-300/80">Preview</p>
            <h3 className="text-xl font-semibold text-white">{data.title}</h3>
          </div>
          <button onClick={onClose} className="rounded-full border border-slate-600/80 bg-slate-900/80 p-2 text-slate-200 transition hover:bg-slate-800">
            <X size={18} />
          </button>
        </div>
        <div className="grid gap-6 p-6 sm:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-4">
            <img src={data.image} alt={data.title} className="h-72 w-full rounded-3xl object-cover" />
            <p className="text-slate-300">{data.description}</p>
            <div className="flex flex-wrap gap-2">
              {data.tech.map((tech) => (
                <span key={tech} className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-200 ring-1 ring-slate-700/60">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-5 rounded-3xl bg-slate-900/80 p-5">
            <div>
              <p className="text-slate-400 text-sm uppercase tracking-[0.2em]">Links</p>
              <div className="mt-4 flex flex-col gap-3">
                <a href={data.github} target="_blank" rel="noreferrer" className="rounded-2xl bg-sky-500/15 px-4 py-3 text-sm font-medium text-sky-100 transition hover:bg-sky-500/25">
                  View Code
                </a>
                <a href={data.demo} className="rounded-2xl bg-slate-800/90 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-700/90">
                  Live Demo
                </a>
              </div>
            </div>
            <div>
              <p className="text-slate-400 text-sm uppercase tracking-[0.2em]">Description</p>
              <p className="mt-3 text-slate-300 text-sm leading-6">{data.description}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
