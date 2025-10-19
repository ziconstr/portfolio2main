export function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
      <p className="text-gray-300 mt-2">Want to collaborate or have a project in mind?</p>
      <form className="mt-6 grid gap-4 max-w-xl" onSubmit={(e)=>e.preventDefault()}>
        <input type="text" placeholder="Your name" className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 outline-none focus:border-brand-500" />
        <input type="email" placeholder="Your email" className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 outline-none focus:border-brand-500" />
        <textarea rows="5" placeholder="Your message" className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 outline-none focus:border-brand-500"></textarea>
        <button className="justify-self-start px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 transition-colors font-medium">Send</button>
      </form>
      <p className="text-xs text-gray-400 mt-3">Form is demo-only. Hook up to Formspree/Netlify Forms.</p>
    </section>
  )
}
