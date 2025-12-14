import { Sun, Leaf, Zap, Lock } from 'lucide-react';

export function CleanEnergy() {
  return (
    <section id="clean-energy" className="py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMGEwNjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bS00IDB2Mmgydi0yaC0yem0tNCAwdjJoMnYtMmgtMnptLTQgMHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-60"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 text-green-700 rounded-full text-sm font-medium mb-6">
            <Sun className="w-4 h-4" />
            <span>Sustainable Future</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Clean Energy Vision
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Building next-generation solutions to make renewable energy accessible,
            efficient, and impactful for the world
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-100">
            <Sun className="w-12 h-12 text-amber-500 mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Solar & Renewable Energy
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Active involvement in solar and renewable energy projects, working to transform
              how clean energy is generated, distributed, and consumed at scale.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-100">
            <Leaf className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Global Impact Initiative
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Inspired by the philosophy that clean energy should be accessible to everyone,
              creating lasting environmental and economic value for communities worldwide.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-500/20 p-3 rounded-xl">
                <Lock className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold">Stealth Innovation</h3>
            </div>

            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Currently building next-generation clean energy solutions in stealth mode.
              These initiatives represent a long-term commitment to sustainable technology
              with global reach.
            </p>

            <div className="flex items-start gap-3 text-sm text-slate-400 bg-slate-800/50 rounded-xl p-4 border border-slate-700">
              <Zap className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
              <p>
                Confidential details are not disclosed at this stage. These projects are designed
                for maximum impact and will be shared when the time is right.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 text-lg italic max-w-2xl mx-auto">
            "The future depends on what we do today. Clean energy isn't just an opportunity —
            it's our responsibility."
          </p>
        </div>
      </div>
    </section>
  );
}
