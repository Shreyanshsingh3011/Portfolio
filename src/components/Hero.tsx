import { ArrowRight, Sparkles, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-violet-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-orange-500/10 via-pink-500/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 rounded-full text-sm font-medium mb-8 animate-fade-in backdrop-blur-sm">
          <Zap className="w-4 h-4" />
          <span>Next-Gen AI & Clean Energy</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight animate-slide-up">
          <span className="block mb-3">Building Intelligent</span>
          <span className="block mb-3">Systems for a</span>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            Sustainable Future
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-cyan-100 mb-6 max-w-3xl mx-auto leading-relaxed animate-slide-up-delay-1 font-light">
          Founder of <span className="font-semibold text-cyan-300">Third AI</span> — the world's first universal Agentic AI platform designed for intelligent enterprises.
        </p>

        <p className="text-base text-slate-400 mb-12 max-w-2xl mx-auto animate-slide-up-delay-2">
          Architecting the intersection of artificial intelligence, enterprise software, and renewable energy. Building for scale. Building for impact.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up-delay-3">
          <a
            href="#third-ai"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 rounded-xl font-bold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Ecosystem
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 bg-transparent text-cyan-300 rounded-xl font-bold border-2 border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
          >
            Invest / Partner
          </a>
        </div>

        {/* Floating stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="animate-slide-up-delay-1">
            <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">2+</div>
            <div className="text-xs text-slate-500 mt-1">Ventures Founded</div>
          </div>
          <div className="animate-slide-up-delay-2">
            <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">3</div>
            <div className="text-xs text-slate-500 mt-1">Industries</div>
          </div>
          <div className="animate-slide-up-delay-3">
            <div className="text-4xl font-black bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">∞</div>
            <div className="text-xs text-slate-500 mt-1">Potential</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
