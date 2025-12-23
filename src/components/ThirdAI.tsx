import { Bot, Zap, Database, TrendingUp, MessageSquare, Network, ArrowRight } from 'lucide-react';

export function ThirdAI() {
  const capabilities = [
    {
      icon: Database,
      title: 'Unified Data Access',
      description: 'Connect seamlessly across ERP systems, databases, and operational tools',
    },
    {
      icon: MessageSquare,
      title: 'Conversational AI',
      description: 'Talk to your business — ask questions, get insights in natural language',
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Intelligent automation and decision support that adapts to your needs',
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Intelligence',
      description: 'Live insights, variance detection, and forecasting at scale',
    },
    {
      icon: Network,
      title: 'Cross-Industry',
      description: 'Built for manufacturing, finance, energy, logistics, and beyond',
    },
    {
      icon: Bot,
      title: 'Agentic AI',
      description: 'Autonomous agents that execute tasks and make intelligent decisions',
    },
  ];

  return (
    <section id="third-ai" className="py-32 bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-bl from-cyan-300/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-300/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-600 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Bot className="w-4 h-4" />
            <span>Core Product</span>
          </div>

          <h2 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-br from-slate-900 via-blue-800 to-cyan-700 bg-clip-text text-transparent">
            Third AI
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-slate-700 mb-4">
            Universal Agentic AI for Data Management
          </p>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            The world's first truly universal AI platform designed for every sector — manufacturing, finance,
            energy, operations, logistics, and beyond. Making data management effortless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-8 hover:shadow-2xl hover:border-cyan-400/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <capability.icon className="w-14 h-14 text-cyan-600 mb-4 group-hover:scale-110 group-hover:text-blue-600 transition-all duration-300" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{capability.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{capability.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative bg-gradient-to-br from-cyan-600 via-blue-600 to-violet-600 rounded-4xl p-12 text-center shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYXJyYXkiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNhcnJheSkiLz48L3N2Zz4=')] opacity-30"></div>
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8">
              Why Third AI?
            </h3>
            <div className="flex flex-wrap justify-center gap-8 mb-10 text-lg font-semibold">
              <div className="flex items-center gap-3 text-white">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span>Simplicity</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span>Speed</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span>Cross-Industry</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span>Global Scale</span>
              </div>
            </div>
            <p className="text-lg mb-10 max-w-2xl mx-auto text-white/95 leading-relaxed">
              Built for organizations that need to move fast, make better decisions,
              and unlock the full potential of their data across all operations.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Request a Demo
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
