import { motion } from 'framer-motion'

export default function SectionWrapper({ id, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mx-auto max-w-7xl px-5 sm:px-8"
      >
        {children}
      </motion.div>
    </section>
  )
}
