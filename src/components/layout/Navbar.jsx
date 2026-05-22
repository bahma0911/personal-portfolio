import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 mx-auto w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-slate-100 sm:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">
          BEMNET
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-slate-300 transition hover:text-sky-100">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button className="md:hidden text-slate-100" onClick={() => setOpen((prev) => !prev)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-slate-300 transition hover:text-sky-100" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
