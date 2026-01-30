import { motion } from 'motion/react';
import { Cloud, Calendar, MessageSquare, Sparkles, Database, Mail, Users, BarChart } from 'lucide-react';
import mileoLogo from 'figma:asset/175cc6734661b8cdb3c135d87604d01df0cb1b1c.png';

const integrations = [
  { name: 'Salesforce', Icon: Cloud, color: 'from-blue-400 to-blue-600', angle: 0 },
  { name: 'Calendar', Icon: Calendar, color: 'from-red-400 to-orange-500', angle: 45 },
  { name: 'Slack', Icon: MessageSquare, color: 'from-purple-400 to-pink-500', angle: 90 },
  { name: 'Drive', Icon: Database, color: 'from-green-400 to-emerald-500', angle: 135 },
  { name: 'Monday', Icon: BarChart, color: 'from-orange-400 to-red-500', angle: 180 },
  { name: 'HubSpot', Icon: Mail, color: 'from-orange-500 to-red-600', angle: 225 },
  { name: 'Teams', Icon: Users, color: 'from-blue-500 to-indigo-600', angle: 270 },
  { name: 'Notion', Icon: Database, color: 'from-slate-700 to-slate-900', angle: 315 },
];

export default function IntegrationCircle() {
  const radius = 180;

  return (
    <section id="integrations" className="relative py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-100/20 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Seamless Integrations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Works with your
            <br />
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              favorite tools
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Integrate all your internal tools and platforms seamlessly with Mileo
          </p>
        </motion.div>

        {/* Integration Circle */}
        <div className="relative flex items-center justify-center min-h-[500px]">
          {/* Center Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
            className="relative z-20"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  '0 0 0 0 rgba(139, 195, 74, 0)',
                  '0 0 0 20px rgba(139, 195, 74, 0.1)',
                  '0 0 0 0 rgba(139, 195, 74, 0)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="w-48 h-48 rounded-3xl bg-white flex items-center justify-center shadow-2xl border-2 border-slate-200"
            >
              <img src={mileoLogo} alt="Mileo" className="w-36 h-36 object-contain" />
            </motion.div>
          </motion.div>

          {/* Orbiting Integration Icons */}
          {integrations.map((integration, index) => {
            const angle = (integration.angle * Math.PI) / 180;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={integration.name}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5 + index * 0.1,
                  duration: 0.5,
                  type: 'spring',
                }}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                }}
                className="z-10"
              >
                <motion.div
                  animate={{
                    x: [x * 0.95, x * 1.05, x * 0.95],
                    y: [y * 0.95, y * 1.05, y * 0.95],
                  }}
                  transition={{
                    duration: 3 + index * 0.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    x: x - 40,
                    y: y - 40,
                  }}
                  className="group cursor-pointer"
                >
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center border border-slate-200 transition-shadow hover:shadow-xl`}
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${integration.color} flex items-center justify-center`}>
                        <integration.Icon className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>
                    {/* Tooltip */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <div className="bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg">
                        {integration.name}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Connection Line */}
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.2 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                  className="absolute left-1/2 top-1/2 pointer-events-none"
                  style={{
                    width: Math.abs(x) * 2,
                    height: Math.abs(y) * 2,
                    marginLeft: x < 0 ? x : -40,
                    marginTop: y < 0 ? y : -40,
                  }}
                >
                  <motion.line
                    x1={x > 0 ? 0 : Math.abs(x) * 2}
                    y1={y > 0 ? 0 : Math.abs(y) * 2}
                    x2={x > 0 ? Math.abs(x) * 2 - 40 : 40}
                    y2={y > 0 ? Math.abs(y) * 2 - 40 : 40}
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgb(20, 184, 166)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600">
            And many more...{' '}
            <a href="#" className="text-teal-600 hover:text-teal-700 font-semibold underline">
              View all integrations
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}