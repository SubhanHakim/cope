
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';

function App() {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-[var(--color-neon-blue)] selection:text-black">
      <Navbar />

      <Hero />

      <About />

      {/* Tokenomics Section Placeholder */}
      <section id="tokenomics" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#13131f] to-[#0a0a0f] opacity-50 z-[-1]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">Tokenomics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {['1B Supply', '0% Tax', 'Lp Burned'].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 rounded-xl border border-white/10 hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section Placeholder */}
      <section id="gallery" className="py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-pink-500">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Placeholders for gallery */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-gray-500 animate-pulse">
                MEME {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-500 border-t border-white/5">
        <p>&copy; 2026 COPE Project. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
