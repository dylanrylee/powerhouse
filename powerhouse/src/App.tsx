import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-amber-200">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
