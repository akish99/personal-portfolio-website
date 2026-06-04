// import { Award } from 'lucide-react';
// import SectionHeading from '../components/SectionHeading';
// import { certifications } from '../data/portfolio';

// export default function Certifications() { return <section id="certifications" className="section-padding"><div className="section-shell"><SectionHeading eyebrow="Certifications" title="Continuous learning beyond the classroom." /><div className="mt-10 grid gap-5 md:grid-cols-2">{certifications.map(c => <article key={c.title} className="card card-hover reveal"><Award className="text-emerald-600" /><p className="mt-5 text-xs font-bold uppercase tracking-[.18em] text-emerald-600">{c.issuer}</p><h3 className="mt-2 text-xl font-black">{c.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{c.description}</p><span className="mt-4 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-bold dark:bg-slate-800">{c.status}</span></article>)}</div></div></section> }



import {
  Award,
  ExternalLink,
  Eye,
  Sparkles,
  X,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import {
  certificateCategories,
  certificates,
} from '../data/certificates';

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const filteredCertificates = useMemo(() => {
    if (activeCategory === 'All') {
      return certificates;
    }

    return certificates.filter(
      (certificate) => certificate.category === activeCategory,
    );
  }, [activeCategory]);

  const visibleCertificates = showAll
    ? filteredCertificates
    : filteredCertificates.slice(0, 6);

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certifications" className="section-padding">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Certifications & Achievements"
          title="Learning, building and challenging myself beyond the classroom."
          copy="A curated collection of technical certifications, hackathons and learning experiences that reflect my progress as a developer."
        />

        {/* Category filters */}
        <div className="mt-8 flex flex-wrap gap-3">
          {certificateCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
              className={`rounded-full border px-4 py-2 text-sm font-bold transition-all duration-300 ${
                activeCategory === category
                  ? 'border-emerald-600 bg-emerald-600 text-white shadow-lg shadow-emerald-600/20'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-emerald-500 hover:text-emerald-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-emerald-500 dark:hover:text-emerald-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certificate gallery */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleCertificates.map((certificate) => (
            <article
              key={certificate.id}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-500/70"
            >
              {/* Certificate image */}
              <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-950">
                <img
                  src={certificate.thumbnail}
                  alt={`${certificate.title} certificate preview`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

                {certificate.featured && (
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-lg">
                    <Sparkles size={13} />
                    Featured
                  </span>
                )}

                <span className="absolute bottom-4 right-4 rounded-full border border-white/20 bg-slate-950/70 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">
                  {certificate.badge}
                </span>
              </div>

              {/* Card content */}
              <div className="flex min-h-[280px] flex-col p-6">
                <p className="text-xs font-black uppercase tracking-[0.17em] text-emerald-600 dark:text-emerald-400">
                  {certificate.category}
                </p>

                <h3 className="mt-3 text-lg font-black leading-snug text-slate-900 dark:text-white">
                  {certificate.title}
                </h3>

                <p className="mt-2 text-sm font-bold text-slate-500 dark:text-slate-400">
                  {certificate.issuer}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {certificate.description}
                </p>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {certificate.date}
                  </span>

                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(certificate)}
                    className="inline-flex items-center gap-2 text-sm font-black text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                  >
                    <Eye size={16} />
                    View Certificate
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Show all toggle */}
        {filteredCertificates.length > 6 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              className="btn-secondary px-6 py-3"
            >
              {showAll ? 'Show Featured Certificates' : 'View All Certificates'}
            </button>
          </div>
        )}
      </div>

      {/* Certificate preview modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCertificate.title} preview`}
          onClick={closeModal}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-700 bg-slate-950 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 px-5 py-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-400">
                  {selectedCertificate.category}
                </p>

                <h3 className="mt-1 text-lg font-black text-white">
                  {selectedCertificate.title}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={selectedCertificate.file}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-500"
                >
                  <ExternalLink size={15} />
                  Open in New Tab
                </a>

                <button
                  type="button"
                  onClick={closeModal}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-slate-500 hover:text-white"
                  aria-label="Close certificate preview"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* <div className="h-[72vh] overflow-auto bg-slate-900 p-4">
              {selectedCertificate.fileType === 'pdf' ? (
                <iframe
                  src={selectedCertificate.file}
                  title={`${selectedCertificate.title} PDF`}
                  className="h-full w-full rounded-xl bg-white"
                />
              ) : (
                <img
                  src={selectedCertificate.file}
                  alt={`${selectedCertificate.title} certificate`}
                  className="mx-auto max-h-full rounded-xl object-contain"
                />
              )}
            </div> */}

            <div className="flex max-h-[76vh] min-h-[420px] items-center justify-center overflow-auto bg-slate-900 p-4 sm:p-6">
  <img
    src={selectedCertificate.thumbnail}
    alt={`${selectedCertificate.title} certificate preview`}
    className="max-h-[72vh] max-w-full rounded-xl object-contain shadow-2xl"
  />
</div>
          </div>
        </div>
      )}
    </section>
  );
}