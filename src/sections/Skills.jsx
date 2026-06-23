import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { SectionTitle } from '../components/ui/SectionTitle';

function SkillItem({ name, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="flex items-center gap-3 px-4 py-3 bg-persona-surface border dark:border-white/5 border-black/5 hover:border-persona-red/40 dark:hover:border-persona-red/40 transition-all duration-300 group"
    >
      <div className="relative flex items-center justify-center w-6 h-6 bg-persona-red/10 rounded-full group-hover:bg-persona-red/20 transition-colors">
        <span className="w-1.5 h-1.5 bg-persona-red rounded-full group-hover:scale-125 group-hover:shadow-[0_0_8px_rgba(214,0,28,0.8)] transition-all" />
      </div>
      <span className="font-inter text-sm font-medium text-white group-hover:text-persona-red transition-colors">
        {name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative py-24 bg-persona-surface overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-persona-red/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 lg:pl-32">
        <SectionTitle
          number="02 // Skills"
          title="My Skills"
          subtitle="A breakdown of my technical proficiency across different areas."
        />

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Category tabs */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {skills.map((cat, idx) => (
              <motion.button
                key={cat.category}
                id={`skill-tab-${idx}`}
                onClick={() => setActiveCategory(idx)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className={`relative flex-shrink-0 text-left px-5 py-4 border transition-all duration-300 ${
                  activeCategory === idx
                    ? 'bg-persona-red border-persona-red text-white'
                    : 'bg-transparent border-white/5 text-persona-gray hover:border-persona-red/40 hover:text-white'
                }`}
              >
                {activeCategory === idx && (
                  <motion.div
                    layoutId="skill-active-bg"
                    className="absolute inset-0 bg-persona-red"
                    style={{ zIndex: -1 }}
                  />
                )}
                <div className="flex items-center gap-3">
                  <span className="text-xl">{cat.icon}</span>
                  <div>
                    <p className="font-inter font-semibold text-sm leading-tight whitespace-nowrap">
                      {cat.category}
                    </p>
                    <p className={`font-mono text-xs mt-0.5 ${activeCategory === idx ? 'text-white/70' : 'text-persona-gray/60'}`}>
                      {cat.items.length} skills
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Skill bars panel */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-persona-surface-2 border border-white/5 p-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl">{skills[activeCategory].icon}</span>
              <div>
                <h3 className="font-bebas text-2xl text-white tracking-wide">
                  {skills[activeCategory].category}
                </h3>
                <p className="font-inter text-xs text-persona-gray uppercase tracking-widest">
                  {skills[activeCategory].items.length} core skills
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills[activeCategory].items.map((skill, i) => (
                <SkillItem
                  key={skill.name}
                  name={skill.name}
                  delay={i * 0.05}
                />
              ))}
            </div>

            {/* Decorative corner */}
            <div className="absolute bottom-4 right-4 font-mono text-xs text-persona-gray/20 tracking-widest">
              SKILLS_MATRIX.EXE
            </div>
          </motion.div>
        </div>

        {/* All skills chips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <p className="font-mono text-xs text-persona-gray/60 tracking-widest uppercase mb-4">
            — All Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.flatMap(cat => cat.items).map((skill) => (
              <span
                key={skill.name}
                className="px-3 py-1.5 text-xs font-inter font-medium text-persona-gray border border-white/8 hover:border-persona-red hover:text-persona-red transition-all duration-200 cursor-default"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
