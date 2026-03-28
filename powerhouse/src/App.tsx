import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import Services from './components/Services.tsx'
import BasementShowcase from './components/BasementShowcase.tsx'
import Gallery from './components/Gallery.tsx'
import CTA from './components/CTA.tsx'
import Footer from './components/Footer.tsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-amber-200">
      <Header />
      <main>
        <Hero />
        <Services />
        <BasementShowcase />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
