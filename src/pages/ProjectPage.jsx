import { useParams, Link } from 'react-router-dom'
import { projects } from '../data.projects'
import { useEffect } from 'react'

export function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  useEffect(() => { window.scrollTo(0,0) }, [slug])

  if (!project) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold">Not found</h1>
        <p className="mt-2 text-gray-300">The project you're looking for doesn't exist.</p>
        <Link to="/" className="inline-block mt-6 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-500">Back to home</Link>
      </main>
    )
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <Link to="/" className="text-sm text-gray-300 hover:text-white">← Back</Link>
      <h1 className="mt-4 text-3xl md:text-4xl font-extrabold">{project.title}</h1>

      <div className="mt-6">
        <img src={project.image} alt="" className="w-full h-72 object-cover rounded-2xl border border-white/10" />
        <p className="text-xs text-gray-400 mt-2">Figure: {project.title} hero image</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500">Live site</a>}
        {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl border border-white/15 hover:bg-white/5">GitHub repo</a>}
        <button onClick={() => navigator.clipboard.writeText(window.location.href)} className="px-4 py-2 rounded-xl border border-white/15 hover:bg-white/5">Copy link</button>
      </div>

      <article className="prose prose-invert mt-8 max-w-none">
        <p>
          {project.status === 'coming-soon'
            ? "This article is a placeholder — the full Semester Project 2 write-up will be published soon."
            : "This project demonstrates modern front‑end techniques with focus on performance, accessibility, and clean component architecture."}
        </p>
        <h3>Highlights</h3>
        <ul>
          <li>Responsive design and accessible components.</li>
          <li>Modern tooling and best practices.</li>
          <li>Deployed to a live environment.</li>
        </ul>
      </article>
    </main>
  )
}
