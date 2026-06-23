import { motion } from 'framer-motion';

export function SectionTitle({ number, title, subtitle, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mb-12"
    >
      {number && (
        <p className="font-mono text-persona-red text-sm tracking-[0.3em] uppercase mb-2">
          {number}
        </p>
      )}
      <div className="flex items-center gap-4 mb-3">
        <div className="w-12 h-[3px] bg-persona-red" />
        <h2 className={`font-bebas text-5xl md:text-6xl tracking-wide leading-none ${light ? 'text-gray-900' : 'text-white'}`}>
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className={`font-inter text-base ${light ? 'text-gray-500' : 'text-persona-gray'} max-w-xl`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
