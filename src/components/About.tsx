import { User, Briefcase, Award, Globe } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Shreyansh Singh
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p className="text-xl text-slate-700 font-medium">
              I'm an entrepreneur, innovator, and technologist building systems that matter.
            </p>

            <p>
              My work spans industrial AI, enterprise software, and clean energy — domains where
              technology can create lasting, meaningful impact. I founded <span className="font-semibold text-slate-900">Sthapana Technologies</span> and <span className="font-semibold text-slate-900">Wapventure Solutions</span>, and created <span className="font-semibold text-slate-900">Third AI</span>, a universal
              Agentic AI platform designed to transform how organizations interact with their data.
            </p>

            <p>
              I've had the privilege of being the youngest appointed CEO of <span className="font-semibold text-slate-900">Connect India Japan</span>,
              and the youngest speaker at the <span className="font-semibold text-slate-900">Rising Sun Conclave</span>, where I shared the stage
              with senior industry leaders and policymakers.
            </p>

            <p>
              What drives me is versatility — moving fluidly across technology, business, energy,
              and creative domains. I believe the best solutions emerge when you can see patterns
              others miss, and when you're willing to build for the long term.
            </p>

            <p className="text-slate-700 font-medium italic">
              I'm here to build companies that solve real problems, create lasting value,
              and leave the world better than I found it.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow">
              <Briefcase className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Founder</h3>
              <p className="text-sm text-slate-600">Multiple ventures across AI, software, and energy</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100 hover:shadow-lg transition-shadow">
              <Award className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Youngest CEO</h3>
              <p className="text-sm text-slate-600">Connect India Japan</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-100 hover:shadow-lg transition-shadow">
              <Globe className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Global Speaker</h3>
              <p className="text-sm text-slate-600">Rising Sun Conclave</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-gray-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <User className="w-10 h-10 text-slate-600 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Versatile</h3>
              <p className="text-sm text-slate-600">Technology, business, energy & creativity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
