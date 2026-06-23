import { useState, useEffect } from 'react';
import CustomCursor from './components/ui/CustomCursor';
import Sidebar from './components/layout/Sidebar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Education from './sections/Education';
import Contact from './sections/Contact';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-persona-black text-white' : 'bg-white text-gray-900'}`}>
      {/* Custom cursor */}
      <CustomCursor />

      {/* Sidebar/Nav */}
      <Sidebar theme={theme} toggleTheme={toggleTheme} />

      {/* Main content — offset for sidebar on desktop */}
      <main className="lg:ml-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
