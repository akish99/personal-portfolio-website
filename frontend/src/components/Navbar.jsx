import {
  Download,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { navLinks } from '../data/portfolio';

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <div className="section-shell flex h-16 items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-lg font-black tracking-tight"
        >
          Akish
          <span className="text-emerald-600">.</span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-full px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-emerald-50hover:text-emerald-700 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-emerald-300"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right-side actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-slate-200 p-2.5 text-slate-700 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-800 dark:text-slate-200 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
            aria-label={
              theme === 'dark'
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
          >
            {theme === 'dark' ? (
              <Sun size={17} />
            ) : (
              <Moon size={17} />
            )}
          </button>

          <a
            href="/assets/resume/Akish-Anil-Pandey-Resume.pdf"
            download
            className="hidden items-center gap-2 rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-700 sm:inline-flex"
          >
            <Download size={16} />
            Resume
          </a>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="rounded-full border border-slate-200 p-2.5 text-slate-700 transition hover:border-emerald-400 hover:text-emerald-600 lg:hidden dark:border-slate-800 dark:text-slate-200 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {open && (
        <nav className="section-shell grid gap-1 border-t border-slate-200 py-4 lg:hidden dark:border-slate-800">
          {navLinks.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-emerald-50hover:text-emerald-700 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-emerald-300"
            >
              {label}
            </a>
          ))}

          {/* Resume button for small mobile screens */}
          <a
            href="/assets/resume/Akish-Anil-Pandey-Resume.pdf"
            download
            onClick={closeMenu}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-emerald-700 sm:hidden"
          >
            <Download size={16} />
            Download Resume
          </a>
        </nav>
      )}
    </header>
  );
}