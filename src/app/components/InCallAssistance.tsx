import { motion } from 'motion/react';
import { Phone, AlertCircle, TrendingUp, Clock, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function InCallAssistance() {
  const [currentTime, setCurrentTime] = useState(3);
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime((prev) => prev + 1);
    }, 1000);

    const suggestionTimer = setTimeout(() => {
      setShowSuggestion(true);
    }, 1500);

    return () => {
      clearInterval(timer);
      clearTimeout(suggestionTimer);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-teal-50/30 to-cyan-50/30 overflow-hidden">
      {/* Background ocean texture */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 via-cyan-400/10 to-blue-400/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Demo Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-lg">
              {/* Floating background circles */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full blur-3xl"
              ></motion.div>

              <div className="relative">
                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-center mb-6"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-semibold">IN-CALL ASSISTANCE</span>
                  </div>
                </motion.div>

                {/* Call Timer */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex justify-center mb-6"
                >
                  <div className="bg-slate-800 rounded-full px-8 py-4 shadow-2xl flex items-center gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-white font-mono text-lg">{formatTime(currentTime)}</span>
                    </div>
                    <div className="w-px h-8 bg-slate-600"></div>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <button className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600 transition-colors">
                        <div className="w-4 h-4 bg-white rounded-sm"></div>
                      </button>
                    </div>
                  </div>
                </motion.div>

                {/* Suggestion Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={showSuggestion ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, type: 'spring' }}
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

                  <div className="space-y-4">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2, duration: 0.5 }}
                      className="text-white/90 leading-relaxed"
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
                      transition={{ delay: 2.5, duration: 0.5 }}
                      className="flex flex-wrap gap-3 pt-2"
                    >
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                        <TrendingUp className="w-4 h-4 text-emerald-300" />
                        <span className="text-sm text-white font-medium">ROI in 3 months</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                        <Clock className="w-4 h-4 text-blue-300" />
                        <span className="text-sm text-white font-medium">Save 10hrs/week</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-100 to-red-100 text-rose-700 mb-2">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">Real-Time Guidance</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Get instant answers
              <br />
              <span className="bg-gradient-to-r from-rose-600 to-red-600 bg-clip-text text-transparent">
                when it matters most
              </span>
            </h2>

            <p className="text-xl text-slate-600 leading-relaxed">
              When prospects raise objections or ask tough questions, our AI provides immediate, 
              context-aware suggestions to help you navigate the conversation with confidence.
            </p>

            <div className="space-y-4 pt-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-200"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Context-Aware</h4>
                  <p className="text-slate-600 text-sm">
                    Understands your product, pricing, and past conversations
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-200"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Data-Driven</h4>
                  <p className="text-slate-600 text-sm">
                    Suggestions based on what works across thousands of calls
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-200"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Lightning Fast</h4>
                  <p className="text-slate-600 text-sm">
                    Get suggestions in milliseconds, not minutes
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
