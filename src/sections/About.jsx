import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { SectionTitle } from '../components/ui/SectionTitle';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { FiCode, FiDatabase, FiUsers, FiAward } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

const statIcons = [FiCode, FiAward, FiDatabase, FiUsers];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-persona-black overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8 lg:pl-32">
        <SectionTitle
          number="01 // About"
          title="About Me"
          subtitle="A brief introduction to who I am and what I do."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Profile visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Profile card */}
            <div className="relative bg-persona-surface border border-white/5 p-8 overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-persona-red" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-persona-red" />

              {/* Avatar placeholder */}
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="w-48 h-48 bg-gradient-to-br from-persona-red/20 to-persona-red/5 border-2 border-persona-red/30 flex items-center justify-center">
                  <span className="font-bebas text-7xl text-persona-red">BP</span>
                </div>
                {/* Rotating border */}
                <div className="absolute -inset-2 border border-dashed border-persona-red/20 animate-spin-slow" />
              </div>

              <div className="text-center">
                <h3 className="font-bebas text-3xl text-white tracking-wider">{personalInfo.name}</h3>
                <p className="font-inter text-persona-red text-sm font-medium tracking-widest uppercase mt-1">
                  {personalInfo.title}
                </p>
                <p className="font-mono text-persona-gray text-xs mt-2">{personalInfo.location}</p>
              </div>

              {/* Quick info */}
              <div className="mt-6 space-y-3 border-t border-white/5 pt-6">
                {[
                  { label: 'Email', value: personalInfo.email, icon: '✉' },
                  { label: 'Phone', value: personalInfo.phone, icon: '📞' },
                  { label: 'Status', value: 'Open to Opportunities', icon: '🟢' },
                ].map(({ label, value, icon }) => (
                  <div key={label} className="flex items-center gap-3 text-sm">
                    <span className="text-base">{icon}</span>
                    <span className="text-persona-gray font-inter w-16">{label}:</span>
                    <span className="text-white font-inter truncate">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative diagonal stripe */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 diagonal-bg opacity-40 -z-10" />
          </motion.div>

          {/* Right — Content */}
          <div className="space-y-8">
            {/* Summary */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <p className="font-inter text-persona-gray leading-relaxed text-[15px]">
                {personalInfo.summary}
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                'Cum Laude Graduate',
                'Competitive Programmer',
                'Data Science Enthusiast',
                'Student Government Leader',
                'QA Tester',
                'Front-end Developer',
              ].map((trait) => (
                <div key={trait} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-persona-red rounded-full flex-shrink-0" />
                  <span className="font-inter text-sm text-white">{trait}</span>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="grid grid-cols-2 gap-4"
            >
              {personalInfo.stats.map((stat, i) => {
                const Icon = statIcons[i];
                return (
                  <div
                    key={stat.label}
                    className="persona-card bg-persona-surface border border-white/5 p-5 group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <Icon className="text-persona-red" size={20} />
                      <span className="font-mono text-xs text-persona-gray/50">0{i + 1}</span>
                    </div>
                    <p className="font-bebas text-4xl text-white">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="font-inter text-xs text-persona-gray mt-1 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <a
                href="/resume.pdf"
                download
                id="about-download-resume"
                className="inline-flex items-center gap-3 px-6 py-3 border border-persona-red text-persona-red font-inter font-semibold text-sm tracking-widest uppercase hover:bg-persona-red hover:text-white transition-all duration-300"
              >
                Download Resume
                <span>↓</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
