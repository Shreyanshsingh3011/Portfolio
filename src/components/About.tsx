import { User, Briefcase, Award, Globe, ArrowRight } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/20 via-transparent to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <User className="w-4 h-4" />
            <span>Founder & Visionary</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl">
            Architecting intelligent systems that solve real problems at scale
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p className="text-lg text-cyan-100 font-light">
              I'm an entrepreneur, innovator, and technologist building systems that matter.
            </p>

            <p className="text-base">
              My work spans industrial AI, enterprise software, and clean energy — domains where
              technology can create lasting, meaningful impact. I founded <span className="text-cyan-300 font-semibold">Sthapana Technologies</span> and <span className="text-cyan-300 font-semibold">Wapventure Solutions</span>, and created <span className="text-cyan-300 font-semibold">Third AI</span>, a universal
              Agentic AI platform designed to transform how organizations interact with their data.
            </p>

            <p className="text-base">
              I've had the privilege of being the youngest appointed CEO of <span className="text-cyan-300 font-semibold">Connect India Japan</span>,
              and the youngest speaker at the <span className="text-cyan-300 font-semibold">Rising Sun Conclave</span>, where I shared the stage
              with senior industry leaders and policymakers.
            </p>

            <p className="text-base">
              What drives me is versatility — moving fluidly across technology, business, energy,
              and creative domains. I believe the best solutions emerge when you can see patterns
              others miss, and when you're willing to build for the long term.
            </p>

            <p className="text-base text-cyan-300 font-medium italic">
              I'm here to build companies that solve real problems, create lasting value,
              and leave the world better than I found it.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-6 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm hover:bg-cyan-500/15">
              <Briefcase className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-white mb-2">Founder</h3>
              <p className="text-sm text-slate-400">Multiple ventures across AI, software, and energy</p>
            </div>

            <div className="group bg-gradient-to-br from-blue-500/10 to-violet-500/5 p-6 rounded-2xl border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm hover:bg-blue-500/15">
              <Award className="w-10 h-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-white mb-2">Youngest CEO</h3>
              <p className="text-sm text-slate-400">Connect India Japan</p>
            </div>

            <div className="group bg-gradient-to-br from-violet-500/10 to-pink-500/5 p-6 rounded-2xl border border-violet-400/20 hover:border-violet-400/50 transition-all duration-300 backdrop-blur-sm hover:bg-violet-500/15">
              <Globe className="w-10 h-10 text-violet-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-white mb-2">Global Speaker</h3>
              <p className="text-sm text-slate-400">Rising Sun Conclave</p>
            </div>

            <div className="group bg-gradient-to-br from-orange-500/10 to-yellow-500/5 p-6 rounded-2xl border border-orange-400/20 hover:border-orange-400/50 transition-all duration-300 backdrop-blur-sm hover:bg-orange-500/15">
              <ArrowRight className="w-10 h-10 text-orange-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-white mb-2">Visionary</h3>
              <p className="text-sm text-slate-400">Building the future</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
