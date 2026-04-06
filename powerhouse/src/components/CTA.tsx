import { useReveal } from '../hooks/useReveal'

export default function CTA() {
  const headingRef = useReveal<HTMLDivElement>()
  const formRef    = useReveal<HTMLFormElement>(0.1)

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Animated ambient blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-800 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(217,119,6,0.4) 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div ref={headingRef} className="reveal">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-500/80 mb-6 block">
            Ready to start?
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-light mb-8 text-balance">
            Let's Build Your Future Home Together
          </h2>
          <p className="text-lg text-slate-300 mb-10 font-light max-w-2xl mx-auto">
            Contact us today for a complimentary consultation. Our team of experts is ready to discuss your vision and provide a detailed estimate.
          </p>
        </div>

        <form
          ref={formRef}
          className="reveal max-w-2xl mx-auto mt-12 text-left backdrop-blur-sm p-8 bg-slate-800/20 border border-slate-700/50"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-[10px] sm:text-xs uppercase tracking-[0.15em] text-slate-400 mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-slate-900/50 border border-slate-700/80 text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-500/80 transition-all duration-300 placeholder:text-slate-600 rounded-none shadow-inner hover:border-slate-500/80"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[10px] sm:text-xs uppercase tracking-[0.15em] text-slate-400 mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-slate-900/50 border border-slate-700/80 text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-500/80 transition-all duration-300 placeholder:text-slate-600 rounded-none shadow-inner hover:border-slate-500/80"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-[10px] sm:text-xs uppercase tracking-[0.15em] text-slate-400 mb-2 font-medium">
              Phone Number <span className="text-slate-500 lowercase tracking-normal">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full bg-slate-900/50 border border-slate-700/80 text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-500/80 transition-all duration-300 placeholder:text-slate-600 rounded-none shadow-inner hover:border-slate-500/80"
              placeholder="(555) 123-4567"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block text-[10px] sm:text-xs uppercase tracking-[0.15em] text-slate-400 mb-2 font-medium">
              Project Details
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full bg-slate-900/50 border border-slate-700/80 text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-500/80 transition-all duration-300 placeholder:text-slate-600 rounded-none resize-none shadow-inner hover:border-slate-500/80"
              placeholder="Tell us about your renovation goals..."
              required
            />
          </div>
          <div className="text-center md:text-right">
            <button
              type="submit"
              className="relative overflow-hidden shimmer w-full sm:w-auto bg-white text-slate-900 px-10 py-4 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-amber-50 transition-colors duration-300 shadow-lg border border-white active:scale-95"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
