import SectionHeading from '../components/SectionHeading';
import { education } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="section-padding bg-white/70 dark:bg-slate-900/40">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Education"
          title="Academic progression and milestones."
        />
        <div className="mt-10 border-l-2 border-blue-200 pl-6 dark:border-blue-900">
          {education.map((item) => (
            <article key={item.title} className="reveal relative mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft last:mb-0 dark:border-slate-800 dark:bg-slate-900">
              <span className="absolute -left-[2.04rem] top-8 h-4 w-4 rounded-full border-4 border-white bg-emerald-600 dark:border-slate-950" />
              <p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-600">
                {item.period}
              </p>
              <h3 className="mt-2 text-xl font-black">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {item.place}
              </p>
              <p className="mt-3 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700 dark:bg-blue-950 dark:text-emerald-300">
                {item.metric}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}