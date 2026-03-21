export default function Header() {
  return (
    <header className="bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center text-slate-900 font-bold text-xl shadow-sm border border-amber-300">
            P
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900">Powerhouse</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-amber-600 transition-colors">Services</a>
          <a href="#" className="hover:text-amber-600 transition-colors">Projects</a>
          <a href="#" className="hover:text-amber-600 transition-colors">About Us</a>
          <a href="#" className="hover:text-amber-600 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Log in
          </button>
          <button className="bg-amber-500 text-slate-900 px-4 py-2 rounded-lg text-sm font-bold hover:bg-amber-400 transition-colors shadow-sm focus:ring-2 focus:ring-amber-500 focus:ring-offset-1 border border-amber-600">
            Get Quote
          </button>
        </div>
      </div>
    </header>
  )
}
