import { Award, Globe, Mic, TrendingUp, Users, MapPin } from 'lucide-react';

export function Leadership() {
  const achievements = [
    {
      icon: Award,
      color: 'from-blue-500 to-cyan-500',
      title: 'Youngest Appointed CEO',
      organization: 'Connect India Japan',
      description: 'Leading cross-border business initiatives between two of the world\'s most dynamic economies',
    },
    {
      icon: Mic,
      color: 'from-green-500 to-emerald-500',
      title: 'Youngest Speaker',
      organization: 'Rising Sun Conclave',
      description: 'Shared the stage with senior industry leaders and policymakers at a premier national platform',
    },
  ];

  const exposure = [
    { icon: Globe, text: 'India–Japan Business Ecosystems' },
    { icon: Users, text: 'Global Leadership Networks' },
    { icon: TrendingUp, text: 'Policy & Innovation Forums' },
    { icon: MapPin, text: 'International Partnerships' },
  ];

  return (
    <section id="leadership" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Leadership & Global Exposure
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Building bridges across industries, geographies, and innovation ecosystems
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group"
            >
              <div className={`bg-gradient-to-br ${achievement.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <achievement.icon className="w-8 h-8 text-white" />
              </div>

              <div className="mb-3">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  {achievement.title}
                </h3>
                <p className="text-lg font-semibold text-slate-600">
                  {achievement.organization}
                </p>
              </div>

              <p className="text-slate-600 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>

          <div className="relative">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold mb-3">Global Experience</h3>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Working across borders, industries, and innovation ecosystems to drive meaningful change
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {exposure.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center group"
                >
                  <item.icon className="w-10 h-10 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-slate-300 text-lg italic max-w-3xl mx-auto">
                "Leadership isn't about titles — it's about creating value, building trust,
                and leaving every room better than you found it."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
