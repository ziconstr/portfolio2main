import { motion } from 'framer-motion'
import { projects } from '../data.projects'

export function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
      <p className="text-gray-300 mt-2">Selected work and case studies.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {projects.map((p, i) => (
          <motion.a
            href={`/projects/${p.slug}`}
            key={p.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] transition-colors block focus:outline-none focus:ring-2 focus:ring-brand-500">
            <img src={p.image} alt="" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{p.teaser}</p>
              {p.status === 'coming-soon' && (
                <span className="inline-block mt-3 text-xs px-2 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-300">Coming Soon</span>
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
