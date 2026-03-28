export default function CTA() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-800 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-500/80 mb-6 block">Ready to start?</span>
        <h2 className="text-4xl md:text-6xl font-serif font-light mb-8 text-balance">
          Let's Build Your Future Home Together
        </h2>
        <p className="text-lg text-slate-300 mb-10 font-light max-w-2xl mx-auto">
          Contact us today for a complimentary consultation. Our team of experts is ready to discuss your vision and provide a detailed estimate.
        </p>
        <button className="bg-white text-slate-900 px-10 py-5 rounded-none text-sm uppercase tracking-[0.15em] font-semibold hover:bg-slate-100 transition-colors shadow-2xl">
          Contact Us
        </button>
      </div>
    </section>
  )
}
