import { motion } from 'framer-motion'
import { projects } from '../data.projects'

export function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-ink/10">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Selected work</h2>
        <p className="text-sm uppercase tracking-[0.2em] text-muted">{projects.length} projects</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.a
            href={`/projects/${p.slug}`}
            key={p.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group block focus:outline-none">
            <div className="overflow-hidden rounded-xl bg-ink/[0.03] aspect-[4/3]">
              <img
                src={p.image}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-lg group-hover:text-accent-500 transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted mt-1 leading-relaxed">{p.teaser}</p>
              {p.status === 'coming-soon' && (
                <span className="inline-block mt-3 text-xs px-2 py-1 rounded-full bg-accent-500/10 text-accent-600">
                  Coming Soon
                </span>
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
