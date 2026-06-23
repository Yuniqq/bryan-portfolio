import { useState, useEffect } from 'react';
import { navItems } from '../../data/portfolioData';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Sidebar({ theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside className="fixed left-0 top-0 h-full w-20 hidden lg:flex flex-col items-center justify-between py-8 z-50 bg-persona-surface border-r border-white/5">
        {/* Logo mark */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-10 h-10 bg-persona-red flex items-center justify-center rotate-45 cursor-pointer" onClick={() => scrollTo('home')}>
            <span className="font-bebas text-white text-lg -rotate-45">B</span>
          </div>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-${item.id}`}
              onClick={() => scrollTo(item.id)}
              className={`group relative flex flex-col items-center gap-1 transition-all duration-300 ${
                activeSection === item.id ? 'text-persona-red' : 'text-persona-gray hover:text-white'
              }`}
              aria-label={item.label}
            >
              {/* Active indicator bar */}
              {activeSection === item.id && (
                <span className="absolute -left-5 w-1 h-full bg-persona-red rounded-r-full" />
              )}
              <span className="text-xs font-mono uppercase tracking-widest"
                style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>
                {item.label}
              </span>
              {/* Tooltip */}
              <span className="absolute left-14 bg-persona-red text-white text-xs font-inter font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-persona-gray hover:text-persona-red hover:border-persona-red transition-all duration-300"
          aria-label="Toggle theme"
          id="theme-toggle-desktop"
        >
          {theme === 'dark' ? '☀' : '◑'}
        </button>
      </aside>

      {/* MOBILE TOP BAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 lg:hidden flex items-center justify-between px-6 py-4 transition-all duration-300 ${
        scrolled ? 'bg-persona-surface/95 backdrop-blur-sm border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-persona-red flex items-center justify-center rotate-45">
            <span className="font-bebas text-white text-base -rotate-45">B</span>
          </div>
          <span className="font-bebas text-white text-lg tracking-widest">BRYAN PEREZ</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} className="text-persona-gray hover:text-persona-red transition-colors" id="theme-toggle-mobile">
            {theme === 'dark' ? '☀' : '◑'}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white hover:text-persona-red transition-colors"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-persona-black/90 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-72 bg-persona-surface border-l border-white/10 flex flex-col pt-20 pb-8 px-8">
            {/* Red diagonal accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-persona-red" />

            <p className="font-bebas text-persona-red text-3xl tracking-widest mb-8">NAVIGATE</p>
            <nav className="flex flex-col gap-2">
              {navItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left py-3 px-4 font-inter font-medium text-base transition-all duration-200 border-b border-white/5 hover:text-persona-red hover:pl-8 ${
                    activeSection === item.id ? 'text-persona-red pl-8' : 'text-persona-gray'
                  }`}
                  style={{ transitionDelay: `${idx * 30}ms` }}
                >
                  <span className="text-persona-red mr-3 font-mono text-xs">0{idx + 1}</span>
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
