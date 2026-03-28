export default function Showcase() {
  const videos = [
    "/images/IMG_5972.MP4",
    "/images/IMG_7571.mp4"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-light text-slate-900 mb-4 tracking-tight">
            See The Transformation
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Watch as we bring architectural visions to life through meticulous planning and superior execution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {videos.map((src, index) => (
            <div key={index} className="shadow-lg bg-slate-100 p-2 border border-slate-200 flex items-center justify-center">
              <video
                className="w-full h-auto"
                src={src}
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
