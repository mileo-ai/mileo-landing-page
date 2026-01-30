import { motion } from 'motion/react';
import { TrendingUp, Clock, Users, Award } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '150%+',
    label: 'Increase in follow-up rate',
    color: 'from-emerald-400 to-teal-500',
    bgColor: 'from-emerald-50 to-teal-50',
  },
  {
    icon: Clock,
    value: '12hrs',
    label: 'Saved per rep per week',
    color: 'from-blue-400 to-indigo-500',
    bgColor: 'from-blue-50 to-indigo-50',
  },
  {
    icon: Users,
    value: '95%',
    label: 'Team adoption rate',
    color: 'from-purple-400 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50',
  },
  {
    icon: Award,
    value: '40%',
    label: 'Faster deal velocity',
    color: 'from-orange-400 to-red-500',
    bgColor: 'from-orange-50 to-red-50',
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-indigo-50/30 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            The results speak for
            <br />
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              themselves
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Early customers are already seeing dramatic improvements in their sales process
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${stat.bgColor} border border-slate-200/50 shadow-lg hover:shadow-xl transition-shadow`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>

                {/* Value */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5, type: 'spring' }}
                  className="text-4xl md:text-5xl font-bold text-slate-900 mb-2"
                >
                  {stat.value}
                </motion.div>

                {/* Label */}
                <p className="text-slate-600 font-medium">{stat.label}</p>

                {/* Decorative element */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-5 rounded-full blur-2xl`}></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to transform your sales calls?
              </h3>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Join the waitlist to get early access. We're onboarding teams in Q2 2025.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-semibold hover:from-teal-500 hover:to-cyan-600 transition-all hover:scale-105 shadow-xl">
                  Join Waitlist
                </button>
                <button className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-all border border-white/30">
                  Schedule Demo
                </button>
              </div>
              <p className="text-slate-400 text-sm mt-6">
                No credit card required · Early access for first 100 teams
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
