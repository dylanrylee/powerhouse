import { useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Hero() {
  // Parallax on scroll
  const bgRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Content reveal on mount (slight delay so it animates in)
  const contentRef = useReveal<HTMLDivElement>(0)

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with parallax */}
      <div className="absolute inset-0 z-0">
        <img
          ref={bgRef}
          src="/images/IMG_1860.jpeg"
          alt="Home Renovation"
          className="w-full h-[110%] object-cover will-change-transform"
          style={{ top: '-5%', position: 'absolute' }}
        />
        <div className="absolute inset-0 bg-slate-900/60 z-10" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="reveal relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16"
      >
        <div className="animate-float inline-flex items-center gap-2 px-4 py-1.5 rounded-none border border-white/30 bg-white/10 text-white text-xs font-medium tracking-[0.2em] uppercase mb-8 backdrop-blur-md">
          Premium Home Renovations
        </div>
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6 text-balance font-serif">
          Expert Craftsmanship for <br className="hidden md:block" /> Your Dream Home
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto text-balance font-light leading-relaxed">
          From stunning kitchen remodels to complete structural makeovers, we bring precision, elegance, and quality to every corner of your house.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="relative overflow-hidden shimmer w-full sm:w-auto bg-white text-slate-900 px-8 py-4 rounded-none text-xs uppercase tracking-widest font-semibold hover:bg-amber-50 transition-colors shadow-lg">
            Get a Free Estimate
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-white/30 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-white/70"
            style={{
              height: '40%',
              animation: 'slide-down 1.6s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes slide-down {
          0%   { transform: translateY(-100%); opacity: 0; }
          40%  { opacity: 1; }
          100% { transform: translateY(250%); opacity: 0; }
        }
      `}</style>
    </section>
  )
}
