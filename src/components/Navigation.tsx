import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#third-ai', label: 'Third AI' },
    { href: '#businesses', label: 'Businesses' },
    { href: '#clean-energy', label: 'Clean Energy' },
    { href: '#leadership', label: 'Leadership' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/10 shadow-2xl'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className={`text-2xl font-black transition-all duration-300 ${
              isScrolled
                ? 'bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'
                : 'text-white'
            }`}
          >
            SS
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-semibold transition-all duration-300 hover:text-cyan-400 ${
                  isScrolled ? 'text-slate-300' : 'text-white/80'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-cyan-400 hover:bg-cyan-400/10'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-slate-800 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-slate-300 hover:text-cyan-400 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
