export default function BasementShowcase() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-light text-slate-900 mb-4 tracking-tight">
            Basement Renovations
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            See the dramatic difference a professional renovation makes.
            From an unfinished lower level to a fully functional and elegant living space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before Video */}
          <div className="relative shadow-xl bg-slate-900 border border-slate-200 flex items-center justify-center p-2">
            <div className="absolute top-4 left-4 z-10 bg-slate-800 text-white text-[10px] uppercase tracking-[0.2em] px-3 py-1 font-semibold rounded-sm">
              Before
            </div>
            <video
              className="w-full h-auto rounded-sm"
              src="/images/IMG_7347.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>

          {/* After Video */}
          <div className="relative shadow-xl bg-slate-900 border border-slate-200 flex items-center justify-center p-2">
            <div className="absolute top-4 left-4 z-10 bg-amber-600 text-white text-[10px] uppercase tracking-[0.2em] px-3 py-1 font-semibold rounded-sm shadow-md">
              After
            </div>
            <video
              className="w-full h-auto rounded-sm"
              src="/images/IMG_7571.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>
        </div>
      </div>
    </section>
  )
}
