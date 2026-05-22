import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading.jsx'
import timelineData from '../../data/timeline.js'

export default function TimelineSection() {
  return (
    <section id="timeline" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title="Journey" subtitle="Developer timeline" />
        <div className="relative mt-16 before:absolute before:left-6 before:top-8 before:h-full before:w-px before:bg-gradient-to-b before:from-sky-400/70 before:to-transparent sm:before:left-1/2 sm:before:-translate-x-1/2">
          <div className="space-y-12">
            {timelineData.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="relative flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-glow sm:grid sm:grid-cols-[1fr_4fr] sm:items-center sm:gap-8"
              >
                <div className="flex items-start gap-4 sm:flex-col sm:items-end sm:text-right">
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 text-sky-100 ring-1 ring-sky-400/20">
                    {index + 1}
                  </div>
                  <div className="text-sm uppercase tracking-[0.35em] text-sky-300/70">{event.year}</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                  <p className="mt-3 text-slate-300 leading-7">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
