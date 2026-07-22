import { Briefcase, FileText, Award } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="pb-20 sm:pb-24 pt-8 sm:pt-10">
      <div className="section-shell">
        <SectionHeading 
          eyebrow="Experience" 
          title="Professional journey and internships." 
        />
        <div className="mt-10 grid gap-6">
          {experience.map((item, index) => (
            <article key={index} className="card card-hover reveal">
              <div className="flex flex-col sm:flex-row items-start gap-5">
                <div className="rounded-full bg-blue-50 border border-blue-100 p-4 dark:bg-slate-800 dark:border-slate-700">
                  <Briefcase className="text-blue-600 dark:text-blue-400" size={28} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-600">{item.period}</p>
                  <h3 className="mt-2 text-2xl font-black">{item.role}</h3>
                  <p className="mt-1 text-base font-bold text-slate-700 dark:text-slate-300">{item.company}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                  
                  <div className="mt-5 flex flex-wrap gap-3">
                    {item.offerLetter && (
                      <a href={item.offerLetter} target="_blank" rel="noreferrer" className="btn-secondary px-4 py-2 text-xs">
                        <FileText size={15} /> Offer Letter
                      </a>
                    )}
                    {item.certificate && (
                      <a href={item.certificate} target="_blank" rel="noreferrer" className="btn-primary px-4 py-2 text-xs">
                        <Award size={15} /> Certificate
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}