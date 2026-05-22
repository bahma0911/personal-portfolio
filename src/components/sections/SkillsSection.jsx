import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading.jsx'
import Badge from '../ui/Badge.jsx'
import skillsData from '../../data/skills.js'

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title="Skills" subtitle="What I use" />
        <div className="mt-16 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {skillsData.map((group) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="glass-card rounded-[2rem] border border-white/10 p-6 shadow-glow"
            >
              <h3 className="mb-5 text-lg font-semibold text-white">{group.category}</h3>
              <div className="grid gap-3">
                {group.items.map((skill) => (
                  <Badge key={skill} className="hover:bg-slate-800 transition">{skill}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
