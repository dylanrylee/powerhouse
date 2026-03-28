export default function Gallery() {
  const images = [
    { src: "/images/IMG_0580.jpeg", span: "md:col-span-2 md:row-span-2", alt: "Living Space Renovation" },
    { src: "/images/IMG_0713.jpeg", span: "md:col-span-1 md:row-span-1", alt: "Detail Woodwork" },
    { src: "/images/IMG_1725.jpeg", span: "md:col-span-1 md:row-span-1", alt: "Modern Bathroom" },
    { src: "/images/21e24be5288f54b46a4bd77788ce8557.jpeg", span: "md:col-span-2 md:row-span-1", alt: "Exterior Finish" }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-serif font-light text-slate-900 mb-4 tracking-tight">Recent Projects</h2>
            <p className="text-slate-500 font-light leading-relaxed">
              Explore our portfolio of completed works, showcasing our dedication to quality materials and timeless design.
            </p>
          </div>
          <button className="mt-6 md:mt-0 text-xs font-semibold uppercase tracking-widest text-slate-900 border-b border-slate-900 pb-1 hover:text-amber-700 hover:border-amber-700 transition-colors self-start md:self-auto">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[300px]">
          {images.map((img, i) => (
            <div key={i} className={`relative overflow-hidden group ${img.span} bg-slate-200`}>
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-500 mix-blend-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
