// import { ExternalLink, Github } from 'lucide-react';
// import SectionHeading from '../components/SectionHeading';
// import { projects } from '../data/portfolio';

// // export default function Projects() { return <section id="projects" className="section-padding"><div className="section-shell"><SectionHeading eyebrow="Projects" title="Selected projects that reflect how I build." copy="Each project combines hands-on development with practical product thinking. Add your live deployment links whenever they are ready." /><div className="mt-10 grid gap-6 lg:grid-cols-3">{projects.map(p => <article key={p.title} className="card card-hover reveal flex flex-col overflow-hidden p-0"><img src={p.image} alt="Project placeholder" className="h-48 w-full object-cover" /><div className="flex flex-1 flex-col p-6"><h3 className="text-xl font-black leading-tight">{p.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{p.description}</p><ul className="mt-4 grid gap-1 text-sm text-slate-600 dark:text-slate-300">{p.highlights.map(h => <li key={h}>• {h}</li>)}</ul><div className="mt-5 flex flex-wrap gap-2">{p.tech.map(t => <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">{t}</span>)}</div><div className="mt-auto flex gap-3 pt-6">{p.github ? <a href={p.github} target="_blank" rel="noreferrer" className="btn-secondary px-4 py-2 text-xs"><Github size={15} /> GitHub</a> : <span className="btn-secondary cursor-not-allowed px-4 py-2 text-xs opacity-60"><Github size={15} /> Add GitHub</span>}{p.demo ? <a href={p.demo} target="_blank" rel="noreferrer" className="btn-primary px-4 py-2 text-xs"><ExternalLink size={15} /> Demo</a> : <span className="btn-primary cursor-not-allowed px-4 py-2 text-xs opacity-60"><ExternalLink size={15} /> Add Demo</span>}</div></div></article>)}</div></div></section> }
// export default function Projects() { return <section id="projects" className="section-padding"><div className="section-shell"><SectionHeading eyebrow="Projects" title="Selected projects that reflect how I build." copy="Each project combines hands-on development with practical product thinking. Add your live deployment links whenever they are ready." /><div className="mt-10 grid gap-6 lg:grid-cols-3">{projects.map(p => <article key={p.title} className="card card-hover reveal flex flex-col overflow-hidden p-0"><img src={p.image} alt="Project placeholder" className="h-48 w-full object-cover" /><div className="flex flex-1 flex-col p-6"><h3 className="text-xl font-black leading-tight">{p.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{p.description}</p><ul className="mt-4 grid gap-1 text-sm text-slate-600 dark:text-slate-300">{p.highlights.map(h => <li key={h}>• {h}</li>)}</ul><div className="mt-5 flex flex-wrap gap-2">{p.tech.map(t => <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">{t}</span>)}</div><div className="mt-auto flex gap-3 pt-6">{p.github ? <a href={p.github} target="_blank" rel="noreferrer" className="btn-secondary px-4 py-2 text-xs"><Github size={15} /> GitHub</a> : <span className="btn-secondary cursor-not-allowed px-4 py-2 text-xs opacity-60"><Github size={15} /> Add GitHub</span>}{p.demo ? <a href={p.demo} target="_blank" rel="noreferrer" className="btn-primary px-4 py-2 text-xs"><ExternalLink size={15} /> Demo</a> : <span className="btn-primary cursor-not-allowed px-4 py-2 text-xs opacity-60"><ExternalLink size={15} /> Add Demo</span>}</div></div></article>)}</div></div></section> }

import { Github } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Selected projects that reflect how I build."
          copy="Each project combines hands-on development with practical product thinking."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="card card-hover reveal flex flex-col overflow-hidden p-0"
            >
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="h-48 w-full object-cover"
              />

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-black leading-tight">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <ul className="mt-4 grid gap-1 text-sm text-slate-600 dark:text-slate-300">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>• {highlight}</li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary inline-flex px-4 py-2 text-xs"
                    >
                      <Github size={15} />
                      GitHub
                    </a>
                  ) : (
                    <span
                      className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-xs font-bold text-slate-400 dark:border-slate-700 dark:text-slate-500"
                      title="Repository will be added soon"
                    >
                      <Github size={15} />
                      Repository Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}