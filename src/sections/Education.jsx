import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';
import { SectionTitle } from '../components/ui/SectionTitle';

export default function Education() {
  return (
    <section id="education" className="relative py-24 bg-persona-surface overflow-hidden">
      <div className="absolute right-0 top-0 w-80 h-full bg-gradient-to-l from-persona-red/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-8 lg:pl-32">
        <SectionTitle
          number="06 // Education"
          title="Education"
          subtitle="Academic background and scholastic achievements."
        />

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              id={`education-${edu.id}`}
            >
              <div className={`relative border p-6 overflow-hidden transition-all duration-300 hover:border-persona-red/30 ${
                i === 0
                  ? 'border-persona-red/40 bg-persona-surface-2'
                  : 'border-white/5 bg-persona-surface'
              }`}>
                {/* Number */}
                <div className="absolute right-6 top-6 font-bebas text-6xl text-white/[0.04] select-none leading-none">
                  {String(education.length - i).padStart(2, '0')}
                </div>

                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    {i === 0 && (
                      <span className="inline-block px-3 py-1 bg-persona-red text-white text-[10px] font-mono tracking-widest uppercase mb-3">
                        ★ {edu.honor}
                      </span>
                    )}
                    <h3 className="font-bebas text-2xl text-white tracking-wide leading-tight">
                      {edu.degree}
                    </h3>
                    <p className="font-inter font-semibold text-persona-red text-sm mt-1">
                      {edu.school}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-sm text-persona-gray">{edu.period}</span>
                    {i !== 0 && edu.honor && (
                      <p className="font-mono text-xs text-persona-red mt-1">{edu.honor}</p>
                    )}
                  </div>
                </div>

                {/* Achievements */}
                {edu.achievements.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {edu.achievements.map((a) => (
                      <span
                        key={a}
                        className="flex items-center gap-1.5 text-xs font-inter text-white/70 bg-white/5 px-3 py-1.5"
                      >
                        <span className="w-1 h-1 bg-persona-red rounded-full" />
                        {a}
                      </span>
                    ))}
                  </div>
                )}

                {/* Coursework */}
                {edu.coursework.length > 0 && (
                  <div>
                    <p className="font-mono text-[10px] text-persona-gray/60 uppercase tracking-widest mb-2">
                      Relevant Coursework
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((c) => (
                        <span
                          key={c}
                          className="px-2.5 py-1 text-[11px] font-inter text-persona-gray border border-white/8"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
