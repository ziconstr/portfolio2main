export function Footer() {
  return (
    <footer className="border-t border-ink/10 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex items-center justify-between flex-wrap gap-3">
        <div>
          <p className="font-display text-lg font-semibold">Zico Sebastian</p>
          <p className="text-sm text-muted mt-1">2026 · Front-End Developer</p>
        </div>
        <div className="flex flex-col items-end gap-1 text-sm">
          <a href="https://github.com/ziconstr" target="_blank" rel="noreferrer" className="text-muted hover:text-ink transition-colors">
            github.com/ziconstr
          </a>
          <p className="text-xs text-muted">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
