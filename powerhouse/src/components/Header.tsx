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
      className={`sticky top-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-white/98 backdrop-blur-md shadow-md border-slate-200'
          : 'bg-white/95 backdrop-blur-md shadow-sm border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-9 h-9 bg-slate-900 flex items-center justify-center text-white font-serif text-xl border border-slate-800 transition-colors duration-300 group-hover:bg-amber-700">
            P
          </div>
          <span className="font-serif font-bold text-2xl tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-amber-700">
            Powerhome
          </span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex gap-10 text-xs font-semibold text-slate-600 tracking-[0.1em] uppercase">
          {['Services', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              className="relative hover:text-slate-900 transition-colors after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-amber-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <button className="relative overflow-hidden bg-transparent text-slate-900 px-6 py-2.5 rounded-none text-xs font-semibold border border-slate-900 tracking-widest uppercase transition-all duration-300 hover:bg-slate-900 hover:text-white active:scale-95">
            Get Quote
          </button>
        </div>
      </div>
    </header>
  )
}
