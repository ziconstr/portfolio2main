import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-16 md:pt-24 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-display font-bold leading-[0.85] tracking-tight text-[18vw] md:text-[14vw] lg:text-[12vw]">
        PORTFOLIO.
      </motion.h1>

      <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-8 items-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-7">
          <p className="text-xl md:text-2xl text-ink leading-snug max-w-xl">
            Front-End Developer crafting clean, accessible interfaces with care for typography, motion, and detail.
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted">
            Front-End Development · React · Next.js · Tailwind CSS
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="md:col-span-5 flex md:justify-end gap-3">
          <a href="#projects" className="px-5 py-3 rounded-full bg-ink text-cream hover:bg-accent-500 transition-colors text-sm font-medium">
            View projects
          </a>
          <a href="#contact" className="px-5 py-3 rounded-full border border-ink/15 hover:border-ink transition-colors text-sm font-medium">
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
