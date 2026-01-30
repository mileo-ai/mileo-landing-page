import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, AlertCircle, Phone, Cloud, Calendar, MessageSquare, Mail, Video } from 'lucide-react';
import { useEffect, useState } from 'react';
import mileoLogo from 'figma:asset/175cc6734661b8cdb3c135d87604d01df0cb1b1c.png';

// Animated stars/particles in the background
const AnimatedBackground = () => {
  const [stars, setStars] = useState<{ x: number; y: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 30 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
      }));
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-slate-300/40 rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

// Three-state animated demo
const AnimatedDemo = () => {
  const [animationState, setAnimationState] = useState<'followup' | 'integration' | 'incall'>('followup');
  
  useEffect(() => {
    // Cycle through animation states
    const timer1 = setTimeout(() => setAnimationState('integration'), 5000);
    const timer2 = setTimeout(() => setAnimationState('incall'), 9000);
    const timer3 = setTimeout(() => setAnimationState('followup'), 13000);
    
    const interval = setInterval(() => {
      setAnimationState('followup');
      setTimeout(() => setAnimationState('integration'), 5000);
      setTimeout(() => setAnimationState('incall'), 9000);
    }, 17000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(interval);
    };
  }, []);

  const integrations = [
    { name: 'Slack', Icon: MessageSquare, color: 'from-purple-400 to-pink-500', startPos: { x: -150, y: -100 } },
    { name: 'Jira', Icon: Cloud, color: 'from-blue-400 to-blue-600', startPos: { x: 150, y: -120 } },
    { name: 'Salesforce', Icon: Cloud, color: 'from-blue-500 to-cyan-500', startPos: { x: -180, y: 80 } },
    { name: 'Gmail', Icon: Mail, color: 'from-red-400 to-orange-500', startPos: { x: 160, y: 100 } },
    { name: 'Zoom', Icon: Video, color: 'from-blue-400 to-indigo-500', startPos: { x: 0, y: -150 } },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto relative" style={{ minHeight: '600px' }}>
      <AnimatePresence mode="wait">
        {/* State 1: Instant Follow-up */}
        {animationState === 'followup' && (
          <motion.div
            key="followup"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-full max-w-md">
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/50 overflow-hidden">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-4 text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium opacity-90">INSTANT FOLLOW-UP</span>
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/30"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-white/30"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-white/30"></div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-slate-900">Sarah Chen</span>
                        <span className="text-xs text-slate-500">10:45 AM</span>
                      </div>
                      <p className="text-sm text-slate-600">
                        Hey team, what are the key takeaways from yesterday's calls?
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="ml-11 p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg border border-teal-100"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                        <Sparkles className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-teal-700">AI ASSISTANT</span>
                      <span className="text-xs text-slate-500">10:45 AM</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Based on yesterday's calls, three patterns emerged:
                    </p>
                    <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                      <motion.li
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-teal-500 mt-0.5">•</span>
                        <span><strong className="text-slate-900">Budget concerns:</strong> 60% mentioned pricing</span>
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-teal-500 mt-0.5">•</span>
                        <span><strong className="text-slate-900">Timeline:</strong> Most want to start Q2</span>
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.8 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-teal-500 mt-0.5">•</span>
                        <span><strong className="text-slate-900">Integration:</strong> Salesforce sync is critical</span>
                      </motion.li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* State 2: Integration Flow */}
        {animationState === 'integration' && (
          <motion.div
            key="integration"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Center Mileo Logo */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
                className="relative z-20"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      '0 0 0 0 rgba(139, 195, 74, 0)',
                      '0 0 0 40px rgba(139, 195, 74, 0.1)',
                      '0 0 0 0 rgba(139, 195, 74, 0)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-48 h-48 rounded-3xl bg-white flex items-center justify-center shadow-2xl border-2 border-slate-200"
                >
                  <img src={mileoLogo} alt="Mileo" className="w-36 h-36 object-contain" />
                </motion.div>
              </motion.div>

              {/* Integration Logos flowing in */}
              {integrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ 
                    x: integration.startPos.x, 
                    y: integration.startPos.y,
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{ 
                    x: 0, 
                    y: 0,
                    opacity: [0, 1, 1, 0],
                    scale: [0, 1, 1, 0.3],
                  }}
                  transition={{ 
                    delay: 0.5 + index * 0.15,
                    duration: 1.5,
                    ease: 'easeInOut',
                  }}
                  className="absolute"
                  style={{ zIndex: 10 }}
                >
                  <div className={`w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center border border-slate-200`}>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${integration.color} flex items-center justify-center`}>
                      <integration.Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* State 3: In-Call Assistance */}
        {animationState === 'incall' && (
          <motion.div
            key="incall"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-full max-w-lg">
              {/* Call Timer */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center mb-6"
              >
                <div className="bg-slate-800 rounded-full px-8 py-4 shadow-2xl flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-white font-mono text-lg">03:24</span>
                  </div>
                  <div className="w-px h-8 bg-slate-600"></div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <button className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-sm"></div>
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Suggestion Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="bg-gradient-to-br from-rose-500/90 to-red-600/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-rose-400/30"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-rose-100 mb-2 italic">
                      "It's too expensive"
                    </h3>
                  </div>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-white/90 leading-relaxed mb-4"
                >
                  Our solution is actually{' '}
                  <span className="font-bold text-white bg-white/20 px-2 py-0.5 rounded">
                    25% more cost-effective
                  </span>{' '}
                  than competitors when you factor in the{' '}
                  <span className="font-bold text-white bg-white/20 px-2 py-0.5 rounded">
                    time saved
                  </span>
                  .
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 }}
                  className="flex flex-wrap gap-3"
                >
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                    <Phone className="w-4 h-4 text-emerald-300" />
                    <span className="text-sm text-white font-medium">ROI in 3 months</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                    <AlertCircle className="w-4 h-4 text-blue-300" />
                    <span className="text-sm text-white font-medium">Save 10hrs/week</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100/20 to-transparent"></div>
      </div>

      {/* Animated Stars */}
      <AnimatedBackground />

      {/* Wave Effect at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      <svg
        className="absolute bottom-0 left-0 right-0 w-full"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
          fill="rgb(255, 255, 255)"
        />
      </svg>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="text-slate-900 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100/80 backdrop-blur-sm border border-green-200/50 mb-6">
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Powered by AI</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-900"
          >
            The memory layer for
            <br />
            <span className="text-slate-900">
              high-stakes conversations
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-slate-600 leading-relaxed max-w-xl"
          >
            Mileo is a smart in-call assistant for Customer Success Managers and Account Executives in moments that matter: renewals, churn risks, escalations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all hover:scale-105 flex items-center gap-2 shadow-xl">
              Request Demo
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 rounded-xl bg-slate-100 text-slate-900 font-semibold hover:bg-slate-200 transition-all border border-slate-300">
              Watch Video
            </button>
          </motion.div>
        </div>

        {/* Right Side - Animated Demo */}
        <div className="flex justify-center lg:justify-end">
          <AnimatedDemo />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}