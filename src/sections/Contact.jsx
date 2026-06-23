import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { SectionTitle } from '../components/ui/SectionTitle';
import { FiMail, FiGithub, FiLinkedin, FiPhone, FiMapPin, FiSend, FiCheck, FiCopy } from 'react-icons/fi';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // Opens mailto as fallback
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    setSubmitted(true);
    setErrors({});
  };

  const handleChange = (field, val) => {
    setForm(prev => ({ ...prev, [field]: val }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    {
      label: 'Email',
      value: personalInfo.email,
      icon: FiMail,
      href: `mailto:${personalInfo.email}`,
      action: copyEmail,
      actionLabel: copied ? 'Copied!' : 'Copy',
    },
    {
      label: 'Phone',
      value: personalInfo.phone,
      icon: FiPhone,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
    },
    {
      label: 'GitHub',
      value: 'github.com/BryanPerez',
      icon: FiGithub,
      href: personalInfo.github,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/bryan-andrew-perez',
      icon: FiLinkedin,
      href: personalInfo.linkedin,
    },
    {
      label: 'Location',
      value: personalInfo.location,
      icon: FiMapPin,
      href: null,
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-persona-black overflow-hidden">
      {/* BG accent */}
      <div className="absolute inset-0 diagonal-bg opacity-20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-persona-red to-transparent opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 lg:pl-32">
        <SectionTitle
          number="07 // Contact"
          title="Get In Touch"
          subtitle="Open to opportunities, collaborations, and conversations. Let's connect."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Contact info */}
          <div>
            <p className="font-inter text-persona-gray leading-relaxed mb-8">
              I'm currently open to new opportunities and always happy to chat about tech, data science,
              or potential collaborations. Feel free to reach out through any of the channels below or
              use the contact form.
            </p>

            <div className="space-y-4">
              {contactLinks.map(({ label, value, icon: Icon, href, action, actionLabel }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-4 p-4 border border-white/5 hover:border-persona-red/30 transition-colors group"
                  id={`contact-${label.toLowerCase()}`}
                >
                  <div className="w-10 h-10 border border-persona-red/40 flex items-center justify-center flex-shrink-0 group-hover:bg-persona-red/10 transition-colors">
                    <Icon className="text-persona-red" size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-[10px] text-persona-gray/60 uppercase tracking-widest">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-inter text-sm text-white hover:text-persona-red transition-colors truncate block"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-inter text-sm text-white truncate">{value}</p>
                    )}
                  </div>
                  {action && (
                    <button
                      onClick={action}
                      className="flex-shrink-0 flex items-center gap-1 text-xs font-mono text-persona-gray hover:text-persona-red transition-colors"
                    >
                      {copied && label === 'Email' ? <FiCheck size={12} /> : <FiCopy size={12} />}
                      {actionLabel}
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 border border-persona-red/30 bg-persona-surface">
                <div className="w-16 h-16 bg-persona-red flex items-center justify-center mb-4">
                  <FiCheck size={32} className="text-white" />
                </div>
                <h3 className="font-bebas text-3xl text-white tracking-wide mb-2">Message Sent!</h3>
                <p className="font-inter text-sm text-persona-gray">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-6 px-6 py-2 border border-persona-red text-persona-red text-sm font-inter hover:bg-persona-red hover:text-white transition-all"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {[
                  { id: 'contact-name', field: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                  { id: 'contact-email', field: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com' },
                  { id: 'contact-subject', field: 'subject', label: 'Subject (optional)', type: 'text', placeholder: 'Job Opportunity / Collaboration' },
                ].map(({ id, field, label, type, placeholder }) => (
                  <div key={field}>
                    <label htmlFor={id} className="block font-mono text-[10px] text-persona-gray uppercase tracking-widest mb-2">
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      value={form[field]}
                      onChange={e => handleChange(field, e.target.value)}
                      placeholder={placeholder}
                      className={`w-full bg-persona-surface border px-4 py-3 font-inter text-sm text-white placeholder-persona-gray/40 outline-none transition-colors focus:border-persona-red ${
                        errors[field] ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors[field] && (
                      <p className="font-mono text-xs text-red-400 mt-1">{errors[field]}</p>
                    )}
                  </div>
                ))}

                <div>
                  <label htmlFor="contact-message" className="block font-mono text-[10px] text-persona-gray uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={form.message}
                    onChange={e => handleChange('message', e.target.value)}
                    placeholder="Tell me about the opportunity or what you'd like to discuss..."
                    className={`w-full bg-persona-surface border px-4 py-3 font-inter text-sm text-white placeholder-persona-gray/40 outline-none transition-colors focus:border-persona-red resize-none ${
                      errors.message ? 'border-red-500' : 'border-white/10'
                    }`}
                  />
                  {errors.message && (
                    <p className="font-mono text-xs text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-persona-red text-white font-inter font-semibold text-sm tracking-widest uppercase overflow-hidden relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(214,0,28,0.4)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FiSend size={16} />
                    Send Message
                  </span>
                  <div className="absolute inset-0 bg-persona-red-dark translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-inter text-xs text-persona-gray/50">
            © {new Date().getFullYear()} Bryan Andrew D. Perez · Built with React & Vite
          </p>
          <p className="font-mono text-xs text-persona-gray/30 tracking-widest">
            Designed & Developed with ❤️
          </p>
        </motion.div>
      </div>
    </section>
  );
}
