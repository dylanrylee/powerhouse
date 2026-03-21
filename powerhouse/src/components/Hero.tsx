export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32">
      {/* Background gradients */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#fbbf24] to-[#ea580c] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-sm font-semibold mb-8 border border-amber-200 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-amber-500"></span>
            Modern Construction Consulting
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-8 text-balance">
            Building the future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Powerhouse</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto text-balance leading-relaxed">
            Expert consulting for your modern construction projects. We ensure compliance, efficiency, and structural integrity from foundation to roof so you can build with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-amber-500 text-slate-900 px-8 py-3.5 rounded-xl text-lg font-bold hover:bg-amber-400 border border-amber-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Consult With Us
            </button>
            <button className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-xl text-lg font-medium hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
