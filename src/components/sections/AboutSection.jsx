import SectionHeading from '../ui/SectionHeading.jsx'
import { motion } from 'framer-motion'
import Badge from '../ui/Badge.jsx'

const stats = [
  { label: 'Projects Completed', value: '7+' },
  { label: 'Certificates Earned', value: '3+' },
  { label: 'Technologies Learned', value: '15+' },
]

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title="About Me" subtitle="Who I am" />
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow"
          >
            <p className="text-slate-300 leading-relaxed sm:text-lg">
              I am a second-year Computer Science student at Addis Ababa University and a graduate of the ALX Pathway Program. I enjoy building clean, user-friendly web applications while learning real-world full-stack development skills.
            </p>
            <p className="text-slate-300 leading-relaxed sm:text-lg">
              I am currently enrolled in ALX Cyber Security, Data Analytics, Graphics Design, and AI Essentials while sharpening my React, Node.js, MongoDB and frontend expertise.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="glass-card rounded-[1.5rem] border border-white/10 p-6 text-center">
                  <p className="text-3xl font-semibold text-white">{item.value}</p>
                  <p className="mt-3 text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-glow">
              <p className="text-slate-200 text-lg font-semibold">What drives me</p>
              <div className="mt-5 space-y-4 text-slate-300 leading-7">
                <p>Creating immersive interfaces that feel futuristic yet calm.</p>
                <p>Building reliable applications with clean architecture and thoughtful details.</p>
                <p>Exploring design systems, motion-driven interactions, and product polish.</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Badge>Technology</Badge>
              <Badge>UI/UX</Badge>
              <Badge>Music</Badge>
              <Badge>Animation</Badge>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
