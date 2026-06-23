import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience } from '../data/portfolioData';
import { SectionTitle } from '../components/ui/SectionTitle';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const typeColors = {
  Internship: '#D6001C',
  Leadership: '#7C3AED',
  Work: '#059669',
};

function ExperienceEntry({ entry, index }) {
  const [open, setOpen] = useState(index === 0);
  const color = typeColors[entry.type] || '#D6001C';

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-16"
      id={`experience-${entry.id}`}
    >
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-persona-red to-persona-red/10" />

      {/* Timeline node */}
      <div
        className="absolute left-[18px] top-6 w-5 h-5 border-2 flex items-center justify-center z-10"
        style={{ borderColor: color, background: '#0A0A0A' }}
      >
        <div className="w-2 h-2 rounded-full" style={{ background: color }} />
      </div>

      {/* Card */}
      <div className={`mb-6 border transition-all duration-300 ${open ? 'border-persona-red/30' : 'border-white/5 hover:border-white/10'}`}>
        <button
          className="w-full text-left p-6 flex items-start justify-between gap-4"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span
                className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest"
                style={{ color, border: `1px solid ${color}40`, background: `${color}10` }}
              >
                {entry.type}
              </span>
              <span className="font-mono text-xs text-persona-gray">{entry.period}</span>
            </div>
            <h3 className="font-bebas text-2xl text-white tracking-wide leading-tight">
              {entry.role}
            </h3>
            <p className="font-inter text-sm font-medium mt-1" style={{ color }}>
              {entry.company}
            </p>
          </div>
          <div className="flex-shrink-0 mt-1">
            {open ? (
              <FiChevronUp className="text-persona-red" size={20} />
            ) : (
              <FiChevronDown className="text-persona-gray" size={20} />
            )}
          </div>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 border-t border-white/5">
                <p className="font-inter text-sm text-persona-gray leading-relaxed mt-4 mb-4">
                  {entry.description}
                </p>
                <ul className="space-y-2">
                  {entry.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 font-inter text-sm text-white">
                      <div className="w-1.5 h-1.5 bg-persona-red rounded-full flex-shrink-0 mt-1.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-persona-surface overflow-hidden">
      <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-persona-red/3 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-8 lg:pl-32">
        <SectionTitle
          number="04 // Experience"
          title="Experience"
          subtitle="Leadership roles, internships, and organizational involvement."
        />

        <div>
          {experience.map((entry, i) => (
            <ExperienceEntry key={entry.id} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
