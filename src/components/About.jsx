import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20 border-t border-ink/10">
      <div className="grid md:grid-cols-12 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5">
          <div className="overflow-hidden rounded-2xl bg-ink/[0.03] aspect-[3/4]">
            <img src="/images/me.png" alt="Portrait of Zico" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <div className="md:col-span-7">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            I'm Zico Sebastian, a Front-End Developer studying at Noroff Front-End Development. I build clean, accessible interfaces with attention to motion, typography, and detail.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/80">
            I focus on React, Tailwind, and modern tooling. Currently looking for junior opportunities and freelance work.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#contact" className="px-5 py-3 rounded-full bg-ink text-cream hover:bg-accent-500 transition-colors text-sm font-medium">
              Let's talk →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
