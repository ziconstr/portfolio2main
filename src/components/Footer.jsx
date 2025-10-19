export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-400 flex items-center justify-between flex-wrap gap-3">
        <p>© {new Date().getFullYear()} Zico Sebastian. All rights reserved.</p>
        <a href="https://github.com/ziconstr" target="_blank" rel="noreferrer" className="hover:text-gray-200">GitHub Profile</a>
      </div>
    </footer>
  )
}
