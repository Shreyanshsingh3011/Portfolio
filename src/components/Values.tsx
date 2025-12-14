import { Target, Zap, Leaf, Users } from 'lucide-react';

export function Values() {
  const values = [
    {
      icon: Target,
      title: 'Purpose-Driven Innovation',
      description: 'Building technology that solves real problems and creates lasting value',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'Technology as an Enabler',
      description: 'Simplicity over complexity. Tools that empower, not overwhelm',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: Leaf,
      title: 'Sustainability First',
      description: 'Clean energy and environmental responsibility as core priorities',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Conscious Leadership',
      description: 'Ethical growth, transparent decisions, and building for the long term',
      gradient: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <section id="values" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Values & Philosophy
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Principles that guide every decision and every line of code
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group"
            >
              <div className={`bg-gradient-to-br ${value.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {value.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 text-white text-center">
          <p className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
            "Build for impact, not just profit.<br />
            Build for decades, not just years.<br />
            Build with purpose, always."
          </p>
          <div className="flex items-center justify-center gap-2 text-slate-400">
            <div className="w-12 h-px bg-slate-600"></div>
            <span className="text-sm">Shreyansh Singh</span>
            <div className="w-12 h-px bg-slate-600"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
