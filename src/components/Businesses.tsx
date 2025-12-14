import { Building2, Cpu, Rocket } from 'lucide-react';

export function Businesses() {
  return (
    <section id="businesses" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Businesses
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Building foundational technology companies with long-term impact
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="w-8 h-8 text-blue-600" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Sthapana Technologies Pvt. Ltd.
            </h3>

            <div className="space-y-4 text-slate-600">
              <div>
                <p className="font-semibold text-slate-700 mb-2">Focus:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Agentic AI and enterprise intelligence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Industrial automation solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Clean-energy digitalization</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-slate-700 mb-2">Core Product:</p>
                <p className="text-sm bg-blue-50 text-blue-700 px-3 py-2 rounded-lg inline-block font-medium">
                  Third AI
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <p className="font-semibold text-slate-700 mb-2">Vision:</p>
                <p className="text-sm italic">
                  Building foundational intelligence for modern enterprises
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Rocket className="w-8 h-8 text-green-600" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Wapventure Solutions Pvt. Ltd.
            </h3>

            <div className="space-y-4 text-slate-600">
              <div>
                <p className="font-semibold text-slate-700 mb-2">Focus:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Enterprise platforms and digital products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Scalable technology solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Innovation and execution at scale</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-slate-700 mb-2">Role:</p>
                <p className="text-sm bg-green-50 text-green-700 px-3 py-2 rounded-lg inline-block font-medium">
                  Execution & Innovation Engine
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <p className="font-semibold text-slate-700 mb-2">Approach:</p>
                <p className="text-sm italic">
                  Transforming complex challenges into elegant, scalable solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 rounded-full text-slate-700">
            <Building2 className="w-5 h-5" />
            <span className="font-medium">Building for impact, scale, and longevity</span>
          </div>
        </div>
      </div>
    </section>
  );
}
