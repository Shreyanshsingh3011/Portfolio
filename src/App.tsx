import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ThirdAI } from './components/ThirdAI';
import { Businesses } from './components/Businesses';
import { CleanEnergy } from './components/CleanEnergy';
import { Leadership } from './components/Leadership';
import { Versatility } from './components/Versatility';
import { Values } from './components/Values';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <ThirdAI />
      <Businesses />
      <CleanEnergy />
      <Leadership />
      <Versatility />
      <Values />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
