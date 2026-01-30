import { motion } from 'motion/react';
import { Lightbulb } from 'lucide-react';

export default function VisionSection() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-100/30 to-teal-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-teal-100 text-green-700 mb-6">
            <Lightbulb className="w-4 h-4" />
            <span className="text-sm font-semibold">Our Vision</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight"
          >
            Built on context,
            <br />
            not guesswork
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            Strong customer relationships are built on context, not guesswork. Every customer 
            interaction contains signals that too often get lost across tools and teams. Mileo 
            turns those scattered signals into a shared, intelligent memory that helps CSMs ask 
            better questions and deliver better outcomes for their customers.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
