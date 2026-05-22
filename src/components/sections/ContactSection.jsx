import { Mail, Send } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading.jsx'
import Button from '../ui/Button.jsx'

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title="Contact" subtitle="Let&apos;s connect" />
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.95fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-glow"
          >
            <h3 className="text-xl font-semibold text-white">Reach out anytime</h3>
            <p className="mt-4 text-slate-300 leading-7">Send a message, collaborate on a project, or discuss internship and freelance opportunities. I respond quickly and enjoy building meaningful work.</p>
            <div className="mt-8 space-y-4">
              <div className="rounded-3xl bg-slate-900/90 p-5">
                <div className="flex items-center gap-3 text-sky-300">
                  <Mail size={20} />
                  <span className="font-medium text-white">Email</span>
                </div>
                <p className="mt-3 text-slate-300">bemnetismyname19@gmail.com</p>
              </div>
              <div className="rounded-3xl bg-slate-900/90 p-5">
                <div className="flex items-center gap-3 text-sky-300">
                  <span className="text-xl font-bold">📍</span>
                  <span className="font-medium text-white">Location</span>
                </div>
                <p className="mt-3 text-slate-300">Nifas Silk Lafto, Addis Ababa, Ethiopia</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <a href="https://github.com/bahma0911" target="_blank" rel="noreferrer" className="rounded-3xl bg-slate-900/90 p-5 transition hover:bg-slate-800">
                  <div className="flex items-center gap-3 text-sky-300"><FaGithub size={18} /><span>GitHub</span></div>
                </a>
                <a href="https://linkedin.com/in/bemnet-agegnehu-762838292" target="_blank" rel="noreferrer" className="rounded-3xl bg-slate-900/90 p-5 transition hover:bg-slate-800">
                  <div className="flex items-center gap-3 text-sky-300"><FaLinkedin size={18} /><span>LinkedIn</span></div>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-glow"
          >
            <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Your email</label>
                <input type="email" placeholder="you@example.com" className="w-full rounded-3xl border border-slate-700/80 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400/70" required />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Subject</label>
                <input type="text" placeholder="Project idea" className="w-full rounded-3xl border border-slate-700/80 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400/70" required />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Message</label>
                <textarea rows="5" placeholder="Tell me about your project..." className="w-full rounded-3xl border border-slate-700/80 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400/70" required />
              </div>
              <Button type="submit" variant="primary" className="w-full justify-center">
                <Send size={18} /> Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
