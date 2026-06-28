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
      className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-2xl md:text-3xl font-bold">By the Numbers</h2>
      <p className="text-gray-300 mt-2">A quick snapshot of my journey so far.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] transition-colors p-8 text-center">
            <div className="text-5xl md:text-6xl font-extrabold text-brand-500">
              {s.value}
            </div>
            <div className="mt-3 text-sm uppercase tracking-wider text-gray-300">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
