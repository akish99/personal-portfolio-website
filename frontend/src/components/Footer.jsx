import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="section-shell flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          © 2026 Akish Anil Pandey. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/akish99"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
          >
            <Github size={16} />
          </a>

          {/* Replace this placeholder with your actual LinkedIn URL */}
          <a
            href="https://www.linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
          >
            <Linkedin size={16} />
          </a>

          <a
            href="mailto:akishpandey2006@gmail.com"
            aria-label="Send an email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
          >
            <Mail size={16} />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-emerald-500 hover:bg-emerald-50hover:text-emerald-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-emerald-500 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}