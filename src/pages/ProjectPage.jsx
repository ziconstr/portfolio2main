import { useParams, Link } from 'react-router-dom'
import { projects } from '../data.projects'
import { useEffect } from 'react'

export function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!project) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold tracking-tight">Not found</h1>
        <p className="mt-3 text-muted">The project you're looking for doesn't exist.</p>
        <Link to="/" className="inline-block mt-6 px-5 py-3 rounded-full bg-ink text-cream hover:bg-accent-500 transition-colors text-sm">
          ← Back to home
        </Link>
      </main>
    )
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <Link to="/" className="text-sm text-muted hover:text-ink transition-colors">← Back</Link>
      <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight">{project.title}</h1>

      <div className="mt-10 overflow-hidden rounded-2xl bg-ink/[0.03] aspect-[16/9]">
        <img src={project.image} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-full bg-ink text-cream hover:bg-accent-500 transition-colors text-sm font-medium">
            Live site →
          </a>
        )}
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-full border border-ink/15 hover:border-ink transition-colors text-sm font-medium">
            GitHub repo
          </a>
        )}
        <button
          onClick={() => navigator.clipboard.writeText(window.location.href)}
          className="px-5 py-3 rounded-full border border-ink/15 hover:border-ink transition-colors text-sm font-medium">
          Copy link
        </button>
      </div>

      <article className="prose mt-12 max-w-2xl">
        <p className="text-lg leading-relaxed text-ink/80">
          {project.status === 'coming-soon'
            ? "This article is a placeholder — the full Semester Project 2 write-up will be published soon."
            : "This project demonstrates modern front-end techniques with focus on performance, accessibility, and clean component architecture."}
        </p>
        <h3 className="text-2xl font-bold mt-8">Highlights</h3>
        <ul className="mt-4 space-y-2 text-ink/80">
          <li>Responsive design and accessible components.</li>
          <li>Modern tooling and best practices.</li>
          <li>Deployed to a live environment.</li>
        </ul>
      </article>
    </main>
  )
}
