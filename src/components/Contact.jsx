export function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-ink/10">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Get in touch</h2>
      <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted">
        Open to junior roles, freelance work, and collaborations
      </p>
      <form className="mt-12 grid gap-5 max-w-xl" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Your name"
          className="px-5 py-4 rounded-xl bg-cream border border-ink/15 outline-none focus:border-ink transition-colors placeholder:text-muted"
        />
        <input
          type="email"
          placeholder="Your email"
          className="px-5 py-4 rounded-xl bg-cream border border-ink/15 outline-none focus:border-ink transition-colors placeholder:text-muted"
        />
        <textarea
          rows="5"
          placeholder="Your message"
          className="px-5 py-4 rounded-xl bg-cream border border-ink/15 outline-none focus:border-ink transition-colors placeholder:text-muted resize-none"></textarea>
        <button className="justify-self-start px-6 py-3 rounded-full bg-ink text-cream hover:bg-accent-500 transition-colors text-sm font-medium">
          Send message →
        </button>
      </form>
      <p className="text-xs text-muted mt-4">Form is demo-only. Hook up to Formspree or Netlify Forms.</p>
    </section>
  )
}
