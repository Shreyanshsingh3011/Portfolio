import { BookOpen, Music, Sparkles, Heart, Brain, Smile } from 'lucide-react';

export function Versatility() {
  const pursuits = [
    {
      icon: BookOpen,
      color: 'from-amber-500 to-orange-500',
      title: 'Published Author',
      subtitle: 'World of Hidden Thoughts',
      description: 'Exploring the human experience through words',
    },
    {
      icon: Sparkles,
      color: 'from-blue-500 to-cyan-500',
      title: 'Poetry',
      subtitle: 'Creative Expression',
      description: 'Finding beauty in language and emotion',
    },
    {
      icon: Music,
      color: 'from-green-500 to-emerald-500',
      title: 'Music & Dance',
      subtitle: 'Artistic Balance',
      description: 'Movement and rhythm as forms of expression',
    },
    {
      icon: Heart,
      color: 'from-red-500 to-rose-500',
      title: 'Philanthropy',
      subtitle: 'Giving Back',
      description: 'Active involvement in community impact',
    },
    {
      icon: Brain,
      color: 'from-violet-500 to-purple-500',
      title: 'Mindfulness',
      subtitle: 'Mental Clarity',
      description: 'Daily practice for better leadership',
    },
    {
      icon: Smile,
      color: 'from-teal-500 to-cyan-500',
      title: 'Balanced Life',
      subtitle: 'Holistic Growth',
      description: 'Technology meets humanity',
    },
  ];

  return (
    <section id="versatility" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Beyond Technology
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            The best builders are complete humans. Creativity, mindfulness, and purpose
            drive better decisions and more meaningful work.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mt-6"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pursuits.map((pursuit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group"
            >
              <div className={`bg-gradient-to-br ${pursuit.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                <pursuit.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {pursuit.title}
              </h3>
              <p className="text-sm font-semibold text-slate-500 mb-3">
                {pursuit.subtitle}
              </p>
              <p className="text-slate-600 text-sm">
                {pursuit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-2xl">
                <Brain className="w-10 h-10 text-blue-600" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center">
              Philosophy
            </h3>

            <p className="text-lg text-slate-600 leading-relaxed text-center mb-6">
              I believe that clarity of mind leads to better leadership and better technology.
              Mindfulness, creativity, and purpose aren't separate from building great companies —
              they're essential to it.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200">
              <div className="text-center">
                <p className="text-sm font-semibold text-slate-900 mb-1">Balance</p>
                <p className="text-xs text-slate-500">Work meets life</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-slate-900 mb-1">Purpose</p>
                <p className="text-xs text-slate-500">Impact over ego</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-slate-900 mb-1">Growth</p>
                <p className="text-xs text-slate-500">Continuous learning</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-600 text-lg italic">
              "The most innovative solutions come from people who can think deeply,
              create freely, and lead with empathy."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
