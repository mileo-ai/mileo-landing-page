import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import mileoLogo from '@/assets/logo.png';

const integrations = [
  { name: 'Salesforce', icon: 'https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg', angle: 0 },
  { name: 'Google Calendar', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg', angle: 45 },
  { name: 'Slack', icon: 'https://www.vectorlogo.zone/logos/slack/slack-icon.svg', angle: 90 },
  { name: 'Google Drive', icon: 'https://www.vectorlogo.zone/logos/google_drive/google_drive-icon.svg', angle: 135 },
  { name: 'Monday', icon: 'https://www.vectorlogo.zone/logos/monday/monday-icon.svg', angle: 180 },
  { name: 'HubSpot', icon: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg', angle: 225 },
  { name: 'Zoom', icon: 'https://www.vectorlogo.zone/logos/zoomus/zoomus-icon.svg', angle: 270 },
  { name: 'Notion', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png', angle: 315 },
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
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="w-48 h-48 flex items-center justify-center"
            >
              <motion.img
                src={mileoLogo}
                alt="Mileo"
                className="w-36 h-36 object-contain"
                animate={{
                  filter: [
                    'drop-shadow(0 0 0px rgba(139, 195, 74, 0))',
                    'drop-shadow(0 0 50px rgba(139, 195, 74, 1))',
                    'drop-shadow(0 0 0px rgba(139, 195, 74, 0))',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
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
                    x: [x * 0.95 - 40, x * 1.05 - 40, x * 0.95 - 40],
                    y: [y * 0.95 - 40, y * 1.05 - 40, y * 0.95 - 40],
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
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-transform hover:scale-110`}
                    >
                      <img
                        src={integration.icon}
                        alt={integration.name}
                        className="w-12 h-12 object-contain"
                      />
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