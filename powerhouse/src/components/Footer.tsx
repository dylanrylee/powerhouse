export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1 border-r border-slate-100 pr-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-slate-900 flex items-center justify-center text-white font-serif text-lg">
                P
              </div>
              <span className="font-serif font-bold text-xl tracking-tight text-slate-900">Powerhome</span>
            </div>
            <p className="text-slate-500 font-light text-sm leading-relaxed mb-6">
              Premium residential renovations and structural enhancements built on a foundation of trust and quality craftsmanship.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-slate-900 mb-6">Services</h4>
            <ul className="space-y-4 text-sm font-light text-slate-600">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Kitchen Remodeling</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Bathroom Renovation</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Structural Changes</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Custom Cabinetry</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-light text-slate-600">
              <li><a href="#" className="hover:text-slate-900 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-slate-900 mb-6">Connect</h4>
            <ul className="space-y-4 text-sm font-light text-slate-600">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-100 text-xs font-light text-slate-500">
          <p>&copy; {new Date().getFullYear()} Powerhome Renovations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
