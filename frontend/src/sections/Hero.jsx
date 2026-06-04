import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="hero-grid overflow-hidden border-b border-slate-200/70 dark:border-slate-800">
      <div className="section-shell grid min-h-[88vh] items-center gap-12 py-20 lg:grid-cols-[1.15fr_.85fr]">
        <div className="reveal is-visible">
          <p className="eyebrow">Computer Engineering Student · Full-Stack Developer</p>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-slate-950 dark:text-white sm:text-6xl">Building practical digital products with thoughtful code and clean design.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">I’m Akish Anil Pandey, a Computer Engineering student focused on building secure, responsive and user-friendly full-stack applications.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn-primary" href="#projects">View My Projects <ArrowRight size={17} /></a>
            <a className="btn-secondary" href="#contact">Contact Me <Mail size={17} /></a>
            <a className="btn-secondary" href="/assets/resume/Akish-Anil-Pandey-Resume.pdf" download>Download Resume <Download size={17} /></a>
          </div>
          <div className="mt-8 flex gap-3">
            <a aria-label="GitHub" href="https://github.com/akish99" target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 bg-white p-3 text-slate-700 transition hover:-translate-y-1 hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"><Github size={19} /></a>
            <a aria-label="LinkedIn" href="https://linkedin.com/in/akish-pandey-34a381339" target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 bg-white p-3 text-slate-700 transition hover:-translate-y-1 hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"><Linkedin size={19} /></a>
            <a aria-label="Email" href="mailto:akishpandey2006@gmail.com" className="rounded-full border border-slate-200 bg-white p-3 text-slate-700 transition hover:-translate-y-1 hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"><Mail size={19} /></a>
          </div>
        </div>
        <div className="reveal is-visible mx-auto w-full max-w-md">
          <div className="relative rounded-[2.2rem] border border-blue-200/80 bg-gradient-to-br from-blue-100 via-white to-slate-100 p-4 shadow-soft dark:border-blue-900 dark:from-blue-950 dark:via-slate-900 dark:to-slate-950">
            <img src="/assets/images/profile-placeholder.jpeg" alt="Profile placeholder for Akish Pandey" className="aspect-square w-full rounded-[1.8rem] object-cover" />
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-600">Currently Building</p>
              <p className="mt-1 font-bold">Full-stack web experiences</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
