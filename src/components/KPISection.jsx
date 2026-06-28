import { motion } from 'framer-motion'

export function KPISection() {
  const stats = [
    { value: '5', label: 'Projects Completed' },
    { value: '2', label: 'Years of Experience' },
    { value: '4', label: 'Clients' },
  ]

  return (
    <section
      id="kpi"
      aria-label="Key performance indicators"
      className="max-w-6xl mx-auto px-6 py-20 border-t border-ink/10">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">By the numbers</h2>
      <p className="text-sm uppercase tracking-[0.2em] text-muted mt-3">A snapshot of the journey so far</p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border border-ink/10 rounded-2xl overflow-hidden">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-cream p-10 md:p-12">
            <div className="font-display text-7xl md:text-8xl font-extrabold leading-none">
              {s.value}
            </div>
            <div className="mt-4 text-sm uppercase tracking-[0.2em] text-muted">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
