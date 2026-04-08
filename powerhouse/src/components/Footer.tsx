import { useReveal } from '../hooks/useReveal'

export default function Footer() {
  const footerRef = useReveal<HTMLDivElement>(0.05)

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div ref={footerRef} className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1 border-r border-slate-100 pr-8">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="flex items-center gap-3 mb-6 group cursor-pointer no-underline"
            >
              <div className="w-8 h-8 bg-slate-900 flex items-center justify-center text-white font-serif text-lg transition-colors duration-300 group-hover:bg-amber-700">
                P
              </div>
              <span className="font-serif font-bold text-xl tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-amber-700">
                Powerhome
              </span>
            </a>
            <p className="text-slate-500 font-light text-sm leading-relaxed mb-6">
              Premium residential renovations and structural enhancements built on a foundation of trust and quality craftsmanship.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-slate-900 mb-6">Services</h4>
            <ul className="space-y-4 text-sm font-light text-slate-600">
              {['Kitchen Remodeling', 'Bathroom Renovation', 'Structural Changes', 'Custom Cabinetry'].map((item) => (
                <li key={item}>
                  <a
                    href="#gallery"
                    className="relative hover:text-slate-900 transition-colors after:absolute after:bottom-[-1px] after:left-0 after:h-px after:w-0 after:bg-amber-600 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-light text-slate-600">
              {(
                [
                  { label: 'About Us', href: '#services' },
                  { label: 'Contact',  href: '#contact'  },
                ] as { label: string; href: string }[]
              ).map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="relative hover:text-slate-900 transition-colors after:absolute after:bottom-[-1px] after:left-0 after:h-px after:w-0 after:bg-amber-600 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect — commented out until social links are ready */}
          {/*
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-slate-900 mb-6">Connect</h4>
            <ul className="space-y-4 text-sm font-light text-slate-600">
              {['Instagram', 'Facebook'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="relative hover:text-slate-900 transition-colors after:absolute after:bottom-[-1px] after:left-0 after:h-px after:w-0 after:bg-amber-600 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          */}

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-100 text-xs font-light text-slate-500">
          <p>© {new Date().getFullYear()} Powerhome Renovations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
