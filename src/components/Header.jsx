import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [open, setOpen] = useState(false)
  const nav = [
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-cream/85 border-b border-ink/5">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="/" className="text-sm font-semibold tracking-tight">Zico Sebastian</a>
        <nav className="hidden md:flex gap-8 text-sm">
          {nav.map(i => (
            <a key={i.href} href={i.href} className="text-muted hover:text-ink transition-colors">
              {i.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden p-2 rounded-lg hover:bg-ink/5"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-ink/5 px-6 pb-4 bg-cream">
          {nav.map(i => (
            <a key={i.href} href={i.href} className="block py-2 text-muted hover:text-ink" onClick={() => setOpen(false)}>
              {i.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
