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
    <section id="third-ai" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 rounded-full text-sm font-medium mb-6">
            <Bot className="w-4 h-4" />
            <span>Core Product</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Third AI
          </h2>
          <p className="text-2xl md:text-3xl text-blue-200 font-medium mb-4">
            Universal Agentic AI for Data Management
          </p>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A first-of-its-kind platform designed for every sector — manufacturing, finance,
            energy, operations, logistics, and beyond. Making data management effortless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <capability.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Why Third AI?
          </h3>
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Simplicity</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Speed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Cross-Industry</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Global Scale</span>
            </div>
          </div>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Built for organizations that need to move fast, make better decisions,
            and unlock the full potential of their data.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Request a Demo
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
