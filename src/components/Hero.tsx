import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTItMnYyaDJ2LTJoLTJ6bTItMnYyaDJ2LTJoLTJ6bTItMnYyaDJ2LTJoLTJ6bTItMnYyaDJ2LTJoLTJ6bS0yMCAwdjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4" />
          <span>Building the Future of Intelligent Systems</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight animate-slide-up">
          Building Intelligent Systems<br />
          for a Data-Driven and<br />
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Sustainable World
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-6 max-w-4xl mx-auto leading-relaxed animate-slide-up-delay-1">
          Founder of <span className="font-semibold text-slate-900">Third AI</span> — a universal Agentic AI platform simplifying
          data management, automation, and decision-making across industries.
        </p>

        <p className="text-lg text-slate-500 mb-12 max-w-3xl mx-auto animate-slide-up-delay-2">
          Inspired by the belief that technology and clean energy should be accessible,
          efficient, and impactful for everyone.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up-delay-3">
          <a
            href="#third-ai"
            className="group px-8 py-4 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Explore Third AI
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-slate-900 rounded-lg font-medium border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Partner / Invest
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
