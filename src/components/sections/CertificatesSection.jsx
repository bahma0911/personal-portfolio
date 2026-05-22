import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading.jsx'
import Badge from '../ui/Badge.jsx'
import certificatesData from '../../data/certificates.js'

const categories = ['all', 'freeCodeCamp', 'Udacity', 'ALX', 'Udemy']

export default function CertificatesSection() {
  const [category, setCategory] = useState('all')

  const visibleCertificates = useMemo(
    () => certificatesData.filter((item) => category === 'all' || item.category === category),
    [category],
  )

  return (
    <section id="certificates" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title="Certificates" subtitle="Professional credentials" />
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={`rounded-full px-4 py-2 text-sm transition ${category === item ? 'bg-sky-500 text-white' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {visibleCertificates.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="glass-card overflow-hidden rounded-[2rem] border border-white/10 p-6 shadow-glow"
            >
              <div className="h-52 overflow-hidden rounded-3xl bg-slate-900">
                <img src={cert.image} alt={cert.title} className="h-full w-full object-cover" />
              </div>
              <div className="mt-6 space-y-3">
                <p className="text-sm uppercase tracking-[0.25em] text-sky-300/80">{cert.organization}</p>
                <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                <p className="text-sm text-slate-400">{cert.date}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
                <a href={cert.link} target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-sky-500/15 px-4 py-3 text-sm font-medium text-sky-100 transition hover:bg-sky-500/25">
                  View verification
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
