import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-white/98 backdrop-blur-md shadow-md border-slate-200'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="flex items-center gap-3 group cursor-pointer no-underline"
        >
          <div className={`w-9 h-9 flex items-center justify-center font-serif text-xl border transition-colors duration-300 group-hover:bg-amber-700 group-hover:border-amber-700 ${
            scrolled
              ? 'bg-slate-900 border-slate-800 text-white'
              : 'bg-white/10 border-white/40 text-white backdrop-blur-sm'
          }`}>
            P
          </div>
          <span className={`font-serif font-bold text-2xl tracking-tight transition-colors duration-300 group-hover:text-amber-400 ${
            scrolled ? 'text-slate-900' : 'text-white'
          }`}>
            Powerhome
          </span>
        </a>

        {/* Nav */}
        <nav className="hidden md:flex gap-10 text-xs font-semibold tracking-[0.1em] uppercase">
          {(
            [
              { label: 'Services', href: '#gallery'  },
              { label: 'About',    href: '#services' },
              { label: 'Contact',  href: '#contact'  },
            ] as { label: string; href: string }[]
          ).map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`relative transition-colors duration-300 after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full ${
                scrolled
                  ? 'text-slate-600 hover:text-slate-900'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

      </div>
    </header>
  )
}
