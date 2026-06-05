import { Code2, Database, ShieldCheck } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function About() {
  const abilities = [
    [Code2, 'Frontend Craft', 'Responsive interfaces with React, Tailwind CSS and clean component structures.'],
    [Database, 'Backend Logic', 'REST APIs, authentication, database integration and modular Express.js applications.'],
    [ShieldCheck, 'Secure Thinking', 'Hands-on cybersecurity exposure and attention to safer application practices.'],
  ];

  return (
    <section id="about" className="section-padding">
      <div className="section-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <SectionHeading
          eyebrow="About Me"
          title="Curious, consistent and focused on real-world development."
          copy="I enjoy turning ideas into complete applications by combining clean interfaces, practical backend logic and thoughtful engineering decisions."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {abilities.map(([Icon, title, copy]) => (
            <article key={title} className="card card-hover reveal">
              <Icon className="text-emerald-600" />
              <h3 className="mt-5 text-lg font-black">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}