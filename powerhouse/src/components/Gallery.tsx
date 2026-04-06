import { useReveal } from '../hooks/useReveal'

const videos = [
  { src: '/images/IMG_5972.MP4', label: 'Project Tour I'  },
  { src: '/images/IMG_7571.mp4', label: 'Project Tour II' },
]

export default function ProjectsTour() {
  const headingRef = useReveal<HTMLDivElement>()
  const gridRef    = useReveal<HTMLDivElement>(0.1)

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div ref={headingRef} className="reveal text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-light text-slate-900 mb-4 tracking-tight">
            Projects Tour
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Step inside our completed projects and experience the transformation firsthand.
          </p>
        </div>

        {/* Video Grid */}
        <div
          ref={gridRef}
          className="reveal-group grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {videos.map((v, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-sm shadow-xl bg-slate-900"
            >
              {/* Label badge */}
              <div className="absolute top-4 left-4 z-10 bg-slate-900/70 backdrop-blur-sm text-white text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 font-semibold rounded-sm border border-white/10">
                {v.label}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 z-10 bg-amber-600/0 group-hover:bg-amber-600/10 transition-colors duration-500 pointer-events-none" />

              <video
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]"
                src={v.src}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
