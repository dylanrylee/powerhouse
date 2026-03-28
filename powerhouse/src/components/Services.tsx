export default function Services() {
  const services = [
    {
      title: "Kitchen Remodeling",
      description: "Transform your culinary space with custom cabinetry, premium countertops, and modern appliances built for elegance and function.",
      image: "/images/IMG_1721.jpeg"
    },
    {
      title: "Structural Enhancements",
      description: "From open-concept living to structural reinforcement, our expert framing and finishing ensures absolute safety and luxury.",
      image: "/images/IMG_1722.jpeg"
    },
    {
      title: "Custom Finishes",
      description: "Exquisite details, from custom trim and molding to custom built-ins that elevate the character of your entire home.",
      image: "/images/IMG_1724.jpeg"
    },
    {
      title: "Basement Renovations",
      description: "Turn your underutilized basement into a stunning living area, home theater, or functional suite with our comprehensive renovation services.",
      image: "/images/IMG_0580.jpeg"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-light text-slate-900 mb-4 tracking-tight">Our Expertise</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Delivering unparalleled craftsmanship across a spectrum of comprehensive renovation services tailored to your unique vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-[400px] mb-6 overflow-hidden bg-slate-100">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-serif font-medium text-slate-900 mb-3">{service.title}</h3>
              <p className="text-sm font-light leading-relaxed text-slate-600 mb-4">{service.description}</p>
              <div className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-slate-900 group-hover:text-amber-700 transition-colors">
                Learn More <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
