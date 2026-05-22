import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading.jsx'

const topics = ['React', 'Node.js', 'MongoDB', 'TypeScript', 'UI/UX Design']

export default function LearningSection() {
  return (
    <section id="learning" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title="Currently Learning" subtitle="Growth focus" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {topics.map((topic, index) => (
            <motion.div
              key={topic}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="glass-card rounded-[2rem] border border-white/10 p-6 text-center shadow-glow"
            >
              <div className="mb-4 h-16 w-16 rounded-full bg-sky-500/10 text-sky-200 ring-1 ring-sky-400/20 flex items-center justify-center text-xl font-bold">
                {topic.charAt(0)}
              </div>
              <p className="text-lg font-semibold text-white">{topic}</p>
              <p className="mt-3 text-sm text-slate-400">Active study with real projects and real-time application.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
