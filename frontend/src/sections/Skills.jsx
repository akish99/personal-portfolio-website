// import SectionHeading from '../components/SectionHeading';
// import { skills } from '../data/portfolio';

// export default function Skills() { return <section id="skills" className="section-padding bg-white/70 dark:bg-slate-900/40"><div className="section-shell"><SectionHeading eyebrow="Skills" title="A practical full-stack toolkit." copy="My skill set combines frontend development, backend APIs, databases and integrations used across my projects." /><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{skills.map(group => <article key={group.title} className="card card-hover reveal"><h3 className="text-lg font-black">{group.title}</h3><div className="mt-4 flex flex-wrap gap-2">{group.items.map(item => <span key={item} className="rounded-full border border-blue-100 bg-emerald-50px-3 py-1.5 text-xs font-bold text-emerald-700 dark:border-blue-900 dark:bg-blue-950/70 dark:text-emerald-300">{item}</span>)}</div></article>)}</div></div></section> }



import SectionHeading from '../components/SectionHeading';
import { skills } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-white/70 dark:bg-slate-900/40">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="A practical full-stack toolkit."
          copy="My skill set combines frontend development, backend APIs, databases and integrations used across my projects."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <article key={group.title} className="card card-hover reveal">
              <h3 className="text-lg font-black">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-blue-100 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 dark:border-blue-900 dark:bg-blue-950/70 dark:text-emerald-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}