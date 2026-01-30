import { motion } from 'motion/react';
import { MessageSquare, ChevronLeft, ChevronRight, Menu, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function InstantFollowUp() {
  const [showMessage, setShowMessage] = useState(false);
  const [showAIResponse, setShowAIResponse] = useState(false);
  const [typingText, setTypingText] = useState('');

  const fullAIText = `Based on this week's sales calls, I've identified three key patterns:

• Budget Timeline: 70% of prospects want to start Q2
• Main Objection: Integration with existing Salesforce setup
• Decision Makers: Most require VP approval before moving forward

Recommended action: Schedule follow-up demos focusing on Salesforce integration capabilities.`;

  useEffect(() => {
    const messageTimer = setTimeout(() => {
      setShowMessage(true);
    }, 1000);

    const aiTimer = setTimeout(() => {
      setShowAIResponse(true);
    }, 2000);

    return () => {
      clearTimeout(messageTimer);
      clearTimeout(aiTimer);
    };
  }, []);

  useEffect(() => {
    if (showAIResponse && typingText.length < fullAIText.length) {
      const timer = setTimeout(() => {
        setTypingText(fullAIText.slice(0, typingText.length + 1));
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [showAIResponse, typingText, fullAIText]);

  return (
    <section className="relative py-32 bg-gradient-to-b from-cyan-50/30 via-blue-50/30 to-indigo-50/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_var(--tw-gradient-stops))] from-indigo-200/20 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 mb-2">
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm font-semibold">Automated Follow-Up</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Never miss a
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                follow-up moment
              </span>
            </h2>

            <p className="text-xl text-slate-600 leading-relaxed">
              After every call, our AI automatically posts detailed summaries, action items, 
              and insights directly to your team's Slack or Monday.com channels.
            </p>

            <div className="space-y-4 pt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-200"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Instant Summaries</h4>
                  <p className="text-slate-600 text-sm">
                    Key takeaways posted to your team channels within seconds
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-200"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Smart Action Items</h4>
                  <p className="text-slate-600 text-sm">
                    AI identifies next steps and assigns them automatically
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-200"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Pattern Recognition</h4>
                  <p className="text-slate-600 text-sm">
                    Spots trends across multiple calls to inform strategy
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Slack-like Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative w-full max-w-lg">
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-center mb-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700">
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-sm font-semibold">INSTANT FOLLOW-UP</span>
                </div>
              </motion.div>

              {/* Slack-like Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-4 text-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ChevronLeft className="w-5 h-5 opacity-75" />
                    <ChevronRight className="w-5 h-5 opacity-75" />
                    <span className="font-medium">Thread in #sales-team</span>
                  </div>
                  <Menu className="w-5 h-5 opacity-75" />
                </div>

                {/* Messages */}
                <div className="p-6 space-y-6 max-h-[500px] overflow-y-auto">
                  {/* User Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={showMessage ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-300 to-slate-400 flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-slate-900">Emily Rodriguez</span>
                        <span className="text-xs text-slate-500">2:34 PM</span>
                      </div>
                      <p className="text-slate-700">
                        Hey team, can someone summarize the key insights from this week's sales calls?
                      </p>
                    </div>
                  </motion.div>

                  {/* AI Response */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={showAIResponse ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="ml-13"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-slate-900">SalesAI</span>
                          <span className="text-xs px-2 py-0.5 rounded bg-teal-100 text-teal-700 font-medium">
                            APP
                          </span>
                          <span className="text-xs text-slate-500">2:34 PM</span>
                        </div>
                        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-4 border border-teal-100">
                          <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">
                            {typingText}
                            {showAIResponse && typingText.length < fullAIText.length && (
                              <span className="inline-block w-1.5 h-4 bg-teal-500 ml-1 animate-pulse"></span>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
