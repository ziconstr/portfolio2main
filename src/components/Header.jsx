import { useState } from 'react'
import { Menu } from 'lucide-react'

export function Header() {
  const [open, setOpen] = useState(false)
  const nav = [
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60 bg-gray-950/80">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="text-lg font-bold tracking-tight">Portfolio II – Zico</a>
        <nav className="hidden md:flex gap-6 text-sm">
          {nav.map(i => <a key={i.href} href={i.href} className="hover:text-brand-500 transition-colors">{i.label}</a>)}
        </nav>
        <button className="md:hidden p-2 rounded-lg hover:bg-white/5" aria-label="Toggle menu" onClick={()=>setOpen(!open)}>
          <Menu size={20} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 px-4 pb-4">
          {nav.map(i => <a key={i.href} href={i.href} className="block py-2">{i.label}</a>)}
        </div>
      )}
    </header>
  )
}
