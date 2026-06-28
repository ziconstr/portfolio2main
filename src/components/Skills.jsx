export function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Tailwind', 'Git', 'Accessibility', 'REST APIs']
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20 border-t border-ink/10">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Skills</h2>
      <p className="text-sm uppercase tracking-[0.2em] text-muted mt-3">Core tools & technologies</p>
      <ul className="mt-10 flex flex-wrap gap-3">
        {skills.map(s => (
          <li key={s} className="px-5 py-3 rounded-full border border-ink/15 hover:border-ink hover:bg-ink hover:text-cream transition-colors text-sm">
            {s}
          </li>
        ))}
      </ul>
    </section>
  )
}
