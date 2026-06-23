import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { FiArrowDown, FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-persona-black"
    >
      {/* Background elements */}
      <div className="absolute inset-0 diagonal-bg opacity-50" />

      {/* Large decorative BG text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden">
        <p className="font-bebas text-[22vw] leading-none text-white/[0.02] whitespace-nowrap translate-x-8">
          PORTFOLIO
        </p>
      </div>

      {/* Red diagonal panel — left accent */}
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="absolute top-0 left-0 w-2 h-full bg-persona-red"
      />

      {/* Floating geometric shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [45, 50, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-24 right-32 w-16 h-16 border-2 border-persona-red/30 rotate-45 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [-10, -5, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-32 right-64 w-8 h-8 bg-persona-red/20 rotate-12 hidden lg:block"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-48 right-[45%] w-2 h-2 bg-persona-red rounded-full hidden lg:block"
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 lg:pl-32 lg:pr-12 py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Pre-title tag */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span className="font-mono text-persona-red text-sm tracking-[0.3em] uppercase">
              &lt; Hello, World! /&gt;
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <h1 className="font-bebas leading-[0.9] mb-4">
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white">
                BRYAN
              </span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white">
                ANDREW
              </span>
              <span
                className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
                style={{ WebkitTextStroke: '2px #D6001C', color: 'transparent' }}
              >
                PEREZ
              </span>
            </h1>
          </motion.div>

          {/* Title bar */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 my-8">
            <div className="h-[2px] w-12 bg-persona-red" />
            <p className="font-inter font-semibold text-lg md:text-xl text-persona-gray tracking-widest uppercase">
              {personalInfo.title}
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="font-inter text-base md:text-lg text-persona-gray max-w-lg leading-relaxed mb-10"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
            <button
              id="hero-view-portfolio"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-persona-red text-white font-inter font-semibold text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(214,0,28,0.4)]"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-persona-red-dark translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            </button>

            <a
              id="hero-download-resume"
              href="/resume.pdf"
              download="Bryan_Andrew_Perez_Resume.pdf"
              className="group px-8 py-4 border border-persona-red text-persona-red font-inter font-semibold text-sm tracking-widest uppercase flex items-center gap-2 transition-all duration-300 hover:bg-persona-red hover:text-white"
            >
              <FiDownload size={16} />
              Download CV
            </a>

            <button
              id="hero-contact"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-white/10 text-persona-gray font-inter font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:border-white hover:text-white"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-github"
              className="text-persona-gray hover:text-persona-red transition-colors duration-200"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-linkedin"
              className="text-persona-gray hover:text-persona-red transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              id="hero-email"
              className="text-persona-gray hover:text-persona-red transition-colors duration-200"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
            <div className="h-[1px] w-24 bg-white/10" />
            <span className="font-mono text-xs text-persona-gray/60 tracking-widest">baperez900@gmail.com</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        onClick={scrollToAbout}
        id="hero-scroll-down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-persona-gray hover:text-persona-red transition-colors group"
        aria-label="Scroll down"
      >
        <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
