import { useReveal } from '../hooks/useReveal'

// Outline SVG icons — stroke only, no fill
const icons = {
  kitchen: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M3 3h18v4H3z" />
      <path d="M3 7v14h18V7" />
      <path d="M9 7v14" />
      <path d="M15 11h3" />
      <path d="M15 15h3" />
      <circle cx="6" cy="13" r="2" />
    </svg>
  ),
  structural: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M3 21h18" />
      <path d="M5 21V9l7-6 7 6v12" />
      <path d="M9 21v-6h6v6" />
      <path d="M12 3v3" />
    </svg>
  ),
  finishes: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M12 2l1.5 4.5h4.5l-3.5 2.5 1.5 4.5-4-3-4 3 1.5-4.5L6 6.5h4.5z" />
      <path d="M8 17l-2 4" />
      <path d="M16 17l2 4" />
      <path d="M8 21h8" />
    </svg>
  ),
  renovation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <path d="M14.5 21.5V14a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5v7.5" />
      <path d="M16 8l-4-3-4 3" />
    </svg>
  ),
}

const services = [
  {
    title: 'Kitchen Remodeling',
    description:
      'Transform your culinary space with custom cabinetry, premium countertops, and modern appliances built for elegance and function.',
    icon: icons.kitchen,
  },
  {
    title: 'Structural Enhancements',
    description:
      'From open-concept living to structural reinforcement, our expert framing and finishing ensures absolute safety and luxury.',
    icon: icons.structural,
  },
  {
    title: 'Custom Finishes',
    description:
      'Exquisite details, from custom trim and molding to custom built-ins that elevate the character of your entire home.',
    icon: icons.finishes,
  },
  {
    title: 'General Home Renovations',
    description:
      'Transform any underutilized area into a stunning, fully-functional living space with our comprehensive home renovation services.',
    icon: icons.renovation,
  },
]

export default function Services() {
  const headingRef = useReveal<HTMLDivElement>()
  const gridRef    = useReveal<HTMLDivElement>(0.1)

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={headingRef} className="reveal text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-light text-slate-900 mb-4 tracking-tight">
            Our Expertise
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Delivering unparalleled craftsmanship across a spectrum of comprehensive renovation services tailored to your unique vision.
          </p>
        </div>

        <div
          ref={gridRef}
          className="reveal-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer p-6 rounded-sm border border-transparent hover:border-slate-200 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
            >
              <div className="mb-4 text-slate-700 transition-all duration-300 group-hover:text-amber-700 group-hover:scale-110 inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-medium text-slate-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-slate-600 mb-4">
                {service.description}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
