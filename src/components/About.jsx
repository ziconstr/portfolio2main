import { motion } from 'framer-motion'
export function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.img initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} src="/images/me.png" alt="Portrait illustration" className="w-full h-72 object-cover rounded-2xl border border-white/10"/>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">About</h2>
          <p className="text-gray-300 mt-3 leading-relaxed">I’m Zico Sebastian, a Front‑End Developer studying at Noroff Front‑End Development. I enjoy building clean, accessible UIs with smooth motion and attention to detail.</p>
          <p className="text-gray-300 mt-3 leading-relaxed">I focus on React, Tailwind, and modern tooling. I’m actively looking for junior opportunities and freelance work.</p>
        </div>
      </div>
    </section>
  )
}
