import { useReveal } from '../hooks/useReveal'

const collageImages = [
  { src: '/images/after_basement.jpeg',    alt: 'Basement Renovation' },
  { src: '/images/basement1.jpg',          alt: 'Basement Work' },
  { src: '/images/deck-renovation1.jpg',   alt: 'Deck Renovation' },
  { src: '/images/IMG_0580.jpeg',          alt: 'Home Renovation' },
  { src: '/images/IMG_1721.jpeg',          alt: 'Interior Details' },
  { src: '/images/kitchen-renovation.png', alt: 'Kitchen Renovation' },
  { src: '/images/paint1.jpg',             alt: 'Interior Painting' },
  { src: '/images/pergola1.jpg',           alt: 'Pergola Build' },
  { src: '/images/stair.png',              alt: 'Stair Work' },
  { src: '/images/tv-mount.png',           alt: 'TV Mount Installation' },
]

export default function BasementShowcase() {
  const headingRef = useReveal<HTMLDivElement>()
  const gridRef    = useReveal<HTMLDivElement>(0.05)

  return (
    <section id="gallery" className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={headingRef} className="reveal text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-light text-slate-900 mb-4 tracking-tight">
            General Home Renovations
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            From kitchens and basements to decks and beyond — craftsmanship you can see in every detail.
          </p>
        </div>

        <div ref={gridRef} className="reveal-group columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {collageImages.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid overflow-hidden group relative rounded-[6px]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105 rounded-[6px]"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-500 rounded-[6px] flex items-end p-3">
                <span className="text-white text-[10px] uppercase tracking-widest font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transition-transform bg-slate-900/60 backdrop-blur-sm px-2 py-1 rounded">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
