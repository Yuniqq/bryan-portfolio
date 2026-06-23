import { useState } from 'react';
import { motion } from 'framer-motion';
import { achievements, certifications } from '../data/portfolioData';
import { SectionTitle } from '../components/ui/SectionTitle';

const categoryFilters = ['All', 'Academic', 'Competition', 'Research'];

export default function Achievements() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? achievements
    : achievements.filter(a => a.category === filter);

  return (
    <section id="achievements" className="relative py-24 bg-persona-black overflow-hidden">
      <div className="absolute inset-0 bg-red-glow opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 lg:pl-32">
        <SectionTitle
          number="05 // Achievements"
          title="Achievements"
          subtitle="Awards, honors, and competition placements throughout my academic career."
        />

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categoryFilters.map((cat) => (
            <button
              key={cat}
              id={`achievement-filter-${cat.toLowerCase()}`}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-inter font-semibold tracking-widest uppercase transition-all duration-200 ${
                filter === cat
                  ? 'bg-persona-red text-white'
                  : 'border border-white/10 text-persona-gray hover:border-persona-red/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Achievement cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-16">
          {filtered.map((ach, i) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="persona-card bg-persona-surface border border-white/5 p-6 relative overflow-hidden group"
              id={`achievement-${ach.id}`}
            >
              {/* Background icon */}
              <span className="absolute right-4 top-4 text-5xl opacity-10 select-none">
                {ach.icon}
              </span>

              {/* Color top bar */}
              <div className="w-10 h-1 mb-4" style={{ background: ach.color }} />

              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{ach.icon}</span>
                <span
                  className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest"
                  style={{ color: ach.color, border: `1px solid ${ach.color}40`, background: `${ach.color}10` }}
                >
                  {ach.category}
                </span>
              </div>

              <h3 className="font-inter font-bold text-white text-[15px] leading-snug mb-2">
                {ach.title}
              </h3>
              <p className="font-inter text-sm text-persona-gray leading-relaxed mb-3">
                {ach.description}
              </p>
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs text-persona-gray/60">{ach.issuer}</p>
                <p className="font-mono text-xs font-medium" style={{ color: ach.color }}>{ach.year}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-persona-red" />
            <h3 className="font-bebas text-2xl text-white tracking-widest">Certifications</h3>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="flex items-center gap-4 p-4 bg-persona-surface border border-white/5 hover:border-persona-red/30 transition-colors group"
                id={`cert-${i}`}
              >
                <span className="text-2xl flex-shrink-0">{cert.icon}</span>
                <div className="min-w-0">
                  <p className="font-inter font-semibold text-sm text-white truncate leading-snug">
                    {cert.name}
                  </p>
                  <p className="font-mono text-xs text-persona-gray mt-0.5">
                    {cert.issuer} · <span className="text-persona-red">{cert.year}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
