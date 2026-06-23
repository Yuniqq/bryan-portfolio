import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { SectionTitle } from '../components/ui/SectionTitle';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';

const categories = ['All', 'Machine Learning', 'Web App', 'Mobile App', 'Data Science'];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="persona-card group relative bg-persona-surface border border-white/5 overflow-hidden flex flex-col"
      id={`project-card-${project.id}`}
    >
      {/* Top color bar */}
      <div className="h-1 w-full" style={{ background: project.color }} />

      {/* Project image placeholder */}
      <div
        className="relative h-44 flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)` }}
      >
        {/* Mission number */}
        <span
          className="font-bebas text-[100px] leading-none opacity-[0.07] absolute select-none"
          style={{ color: project.color }}
        >
          {String(projects.indexOf(project) + 1).padStart(2, '0')}
        </span>
        {/* Project initials */}
        <div
          className="relative z-10 w-16 h-16 flex items-center justify-center border-2"
          style={{ borderColor: project.color, color: project.color }}
        >
          <span className="font-bebas text-2xl">
            {project.name.slice(0, 2).toUpperCase()}
          </span>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-persona-red/90 text-white text-xs font-mono px-2 py-1">
            <FiStar size={10} />
            FEATURED
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-persona-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-200"
              aria-label={`${project.name} GitHub`}
            >
              <FiGithub size={16} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-persona-red flex items-center justify-center text-persona-red hover:bg-persona-red hover:text-white transition-all duration-200"
              aria-label={`${project.name} Demo`}
            >
              <FiExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-bebas text-2xl text-white tracking-wide leading-none">
              {project.name}
            </h3>
            {project.subtitle && (
              <p className="font-mono text-xs mt-1" style={{ color: project.color }}>
                {project.subtitle}
              </p>
            )}
          </div>
          <span className="font-mono text-xs text-persona-gray/40 ml-2 flex-shrink-0">
            {String(projects.indexOf(project) + 1).padStart(2, '0')}
          </span>
        </div>

        <p className="font-inter text-sm text-persona-gray leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Role */}
        <p className="font-inter text-xs text-white/50 mb-3">
          <span className="text-persona-red">Role:</span> {project.role}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[11px] font-mono border border-white/8 text-persona-gray"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-24 bg-persona-black overflow-hidden">
      <div className="absolute inset-0 diagonal-bg opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 lg:pl-32">
        <SectionTitle
          number="03 // Projects"
          title="Mission Log"
          subtitle="Selected projects demonstrating technical capability and creative problem-solving."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`project-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
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

        {/* Projects grid */}
        <motion.div layout className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
