import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src="/images/hero-abstract.svg" alt="" className="w-full h-full object-cover opacity-70" />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-24 md:py-32">
        <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Zico Sebastian
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0, delay: 0.1 }} viewport={{ once: true }} className="mt-4 text-lg text-gray-300 max-w-2xl">
          Front‑End Developer • Noroff Front‑End Development
        </motion.p>
        <div className="mt-8 flex gap-3">
          <a href="#projects" className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 transition-colors font-medium">View Projects</a>
          <a href="#contact" className="px-5 py-2.5 rounded-xl border border-white/15 hover:bg-white/5 transition-colors">Contact</a>
        </div>
      </div>
    </section>
  )
}
