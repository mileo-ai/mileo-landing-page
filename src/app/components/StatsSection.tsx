import { motion } from 'motion/react';
import { PopupButton } from '@typeform/embed-react';

export default function CTASection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-indigo-50/30 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-center"
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
              Join the waitlist to get early access. We're onboarding teams in Q2 2026.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PopupButton 
                id="h23VYTSf" 
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-semibold hover:from-teal-500 hover:to-cyan-600 transition-all hover:scale-105 shadow-xl"
              >
                Join Waitlist
              </PopupButton>
              <PopupButton 
                id="h23VYTSf" 
                className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-all border border-white/30"
              >
                Schedule Demo
              </PopupButton>
            </div>
            <p className="text-slate-400 text-sm mt-6">
              No credit card required · Early access for first 100 teams
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
