export function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Tailwind', 'Git', 'Accessibility', 'REST APIs']
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-2xl md:text-3xl font-bold">Skills</h2>
      <p className="text-gray-300 mt-2">Core tools & technologies I use.</p>
      <ul className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {skills.map(s => (<li key={s} className="px-3 py-2 rounded-xl border border-white/10 bg-white/[0.02]">{s}</li>))}
      </ul>
    </section>
  )
}
