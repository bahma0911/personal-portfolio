import { motion } from 'framer-motion'
import { ArrowDown, Mail, Send, DownloadCloud } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Button from '../ui/Button.jsx'
import useTypewriter from '../../hooks/useTypewriter.jsx'

export default function HeroSection() {
  const typed = useTypewriter()

  return (
    <section id="home" className="relative overflow-hidden bg-hero pt-24 pb-32">
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-48 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.95, ease: 'easeOut' }}
            className="space-y-8"
          >
            <p className="inline-flex items-center gap-3 rounded-full border border-sky-300/20 bg-slate-900/80 px-4 py-2 text-sm text-sky-100 shadow-glow">
              Hello, I&apos;m <span className="font-semibold text-white">Bemnet Agegnehu</span>
            </p>
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
                Building modern, responsive applications for real impact.
              </h1>
              <p className="max-w-2xl text-slate-300 sm:text-lg">
                Junior web developer and Addis Ababa University student focused on React, Node.js, MongoDB, and full-stack growth through ALX and real project work.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300/80">I am a {typed}<span className="blinking-cursor">|</span></p>
              <div className="flex flex-wrap gap-3">
                <Button href="#projects">View Projects</Button>
                <Button href="#contact" variant="secondary">Contact Me</Button>
                <Button href="/resume.pdf" variant="ghost">
                  <DownloadCloud size={18} /> Download CV
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <a href="https://github.com/bahma0911" target="_blank" rel="noreferrer" className="rounded-2xl bg-white/5 px-4 py-3 transition hover:bg-white/10">
                <FaGithub size={18} />
              </a>
              <a href="https://linkedin.com/in/bemnet-agegnehu-762838292" target="_blank" rel="noreferrer" className="rounded-2xl bg-white/5 px-4 py-3 transition hover:bg-white/10">
                <FaLinkedin size={18} />
              </a>
              <a href="mailto:bemnetismyname19@gmail.com" className="rounded-2xl bg-white/5 px-4 py-3 transition hover:bg-white/10">
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.95, ease: 'easeOut', delay: 0.1 }}
            className="relative"
          >
            <div className="glass-card relative overflow-hidden rounded-[2rem] border border-sky-400/10 p-6 shadow-glow">
              <div className="absolute -right-8 top-10 h-28 w-28 rounded-full bg-sky-500/20 blur-3xl" />
              <div className="absolute -left-16 bottom-10 h-28 w-28 rounded-full bg-blue-600/20 blur-3xl" />
              <div className="h-full min-h-[420px] rounded-[2rem] bg-gradient-to-br from-slate-950/90 to-slate-900/70 p-8">
                <div className="h-full rounded-[2rem] border border-white/10 bg-slate-900/70 p-6">
                  <div className="h-full rounded-[1.75rem] bg-gradient-to-br from-slate-950 to-slate-900 p-6">
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <a href="#about" className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-slate-600/40 bg-slate-900/80 px-5 py-3 text-sm text-slate-200 transition hover:border-sky-400/50 hover:text-white">
        Scroll down
        <ArrowDown size={18} />
      </a>
    </section>
  )
}
