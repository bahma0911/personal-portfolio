import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading.jsx'
import Button from '../ui/Button.jsx'
import { usePortfolio } from '../../context/PortfolioContext.jsx'

const filters = ['All', 'React', 'Tailwind', 'JavaScript', 'Node.js', 'MongoDB', 'MERN']

export default function ProjectsSection() {
  const { projects } = usePortfolio()
  const [selected, setSelected] = useState('All')

  const visibleProjects = useMemo(
    () => projects.filter((project) => selected === 'All' || project.tech.includes(selected)),
    [projects, selected],
  )

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title="Projects" subtitle="Featured work" />
        <div className="mt-8 flex flex-wrap gap-3">
          {filters.map((item) => (
            <button
              key={item}
              className={`rounded-full px-4 py-2 text-sm transition ${selected === item ? 'bg-sky-500 text-white' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
              type="button"
              onClick={() => setSelected(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="glass-card overflow-hidden rounded-[2rem] border border-white/10 p-6 shadow-glow"
            >
              <div className="h-48 overflow-hidden rounded-3xl bg-slate-900">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-2 text-sm text-slate-400">{project.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-200">{tech}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.demo && project.demo.startsWith('http') ? (
                    <Button variant="primary" href={project.demo}>
                      Live Demo
                    </Button>
                  ) : (
                    <span className="rounded-full bg-white/5 px-4 py-3 text-sm text-slate-300">Coming Soon</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
