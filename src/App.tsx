
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen font-body selection:bg-[var(--color-beak-yellow)] selection:text-black">
      <Navbar />

      <Hero />

      <About />

      {/* Tokenomics Section Placeholder */}
      <section id="tokenomics" className="py-24 bg-white border-y-4 border-black border-dashed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-display text-center mb-12 text-black font-black">TOKENOMICS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center">
            {['1B Supply', '0% Tax', 'Lp Burned'].map((item, i) => (
              <div key={i} className="p-6 md:p-8 bg-[var(--color-ice-200)] rounded-3xl brutal-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer">
                <h3 className="text-2xl md:text-3xl font-display text-black">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Gallery />

      <footer className="uppercase py-8 text-center font-display text-2xl text-black bg-[var(--color-ice-100)] border-t-4 border-black">
        <p>&copy; 2026 COPE Project. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App
