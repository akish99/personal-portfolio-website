// import { Quote, Star } from 'lucide-react';
// import { useEffect, useState } from 'react';
// import SectionHeading from '../components/SectionHeading';
// import StatusMessage from '../components/StatusMessage';
// import { api } from '../utils/api';

// const initial = { name: '', role: '', rating: '5', message: '' };
// export default function Feedback() {
//     const [items, setItems] = useState([]); const [form, setForm] = useState(initial); const [status, setStatus] = useState(null); const [loading, setLoading] = useState(false);
//     useEffect(() => { api.getApprovedFeedback().then(d => setItems(d.feedback || [])).catch(() => setItems([])); }, []);
//     const change = e => setForm({ ...form, [e.target.name]: e.target.value });
//     const submit = async e => { e.preventDefault(); setLoading(true); setStatus(null); try { await api.submitFeedback({ ...form, rating: Number(form.rating) }); setForm(initial); setStatus({ type: 'success', message: 'Thank you for your feedback. It has been submitted for review.' }); } catch (err) { setStatus({ type: 'error', message: err.message }); } finally { setLoading(false) } };
//     return <section id="feedback"><div className="section-shell"><SectionHeading eyebrow="Feedback" title="Share a review or read approved feedback." copy="New submissions remain private until they are approved. Visitors receive an on-screen confirmation only; no automated email is sent to them." /><div className="mt-10 grid gap-6 lg:grid-cols-[1fr_.9fr]"><div className="grid gap-4">{items.length ? items.map(f => <article key={f.id} className="card reveal is-visible"><Quote className="text-emerald-600" size={20} /><p className="mt-4 leading-7 text-slate-700 dark:text-slate-200">“{f.message}”</p><div className="mt-5 flex items-end justify-between gap-3"><div><p className="font-black">{f.name}</p><p className="text-sm text-slate-500">{f.role || 'Visitor'}</p></div><div className="flex text-amber-500">{Array.from({ length: f.rating }, (_, i) => <Star key={i} size={16} fill="currentColor" />)}</div></div></article>) : <div className="card reveal "><p className="text-sm leading-6 text-slate-600 dark:text-slate-300">Approved reviews will appear here after moderation.</p></div>}</div><form onSubmit={submit} className="card h-fit"><h3 className="text-xl font-black">Leave feedback</h3><div className="mt-5 grid gap-4"><input className="form-input" name="name" value={form.name} onChange={change} placeholder="Your name" required maxLength="100" /><input className="form-input" name="role" value={form.role} onChange={change} placeholder="Role or organization (optional)" maxLength="150" /><select className="form-input" name="rating" value={form.rating} onChange={change}>{[5, 4, 3, 2, 1].map(v => <option value={v} key={v}>{v} star{v > 1 ? 's' : ''}</option>)}</select><textarea className="form-input min-h-32 resize-y" name="message" value={form.message} onChange={change} placeholder="Write your feedback" required maxLength="1000" /><button disabled={loading} className="btn-primary disabled:cursor-not-allowed disabled:opacity-60">{loading ? 'Submitting...' : 'Submit Feedback'}</button></div><StatusMessage status={status} /></form></div></div></section>;
// }


import {
    ChevronLeft,
    ChevronRight,
    Quote,
    Star,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import StatusMessage from '../components/StatusMessage';
import { api } from '../utils/api';

const initialForm = {
    name: '',
    role: '',
    rating: '5',
    message: '',
};

export default function Feedback() {
    const [items, setItems] = useState([]);
    const [activeReview, setActiveReview] = useState(0);

    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        api
            .getApprovedFeedback()
            .then((data) => {
                setItems(data.feedback || []);
            })
            .catch(() => {
                setItems([]);
            });
    }, []);

    useEffect(() => {
        if (items.length === 0) {
            setActiveReview(0);
            return;
        }

        if (activeReview >= items.length) {
            setActiveReview(0);
        }
    }, [items, activeReview]);

    const change = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const submit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            await api.submitFeedback({
                ...form,
                rating: Number(form.rating),
            });

            setForm(initialForm);

            setStatus({
                type: 'success',
                message:
                    'Thank you for your feedback. It has been submitted for review.',
            });
        } catch (error) {
            setStatus({
                type: 'error',
                message: error.message,
            });
        } finally {
            setLoading(false);
        }
    };

    const previousReview = () => {
        setActiveReview((current) =>
            current === 0 ? items.length - 1 : current - 1,
        );
    };

    const nextReview = () => {
        setActiveReview((current) =>
            current === items.length - 1 ? 0 : current + 1,
        );
    };

    const selectedReview = items[activeReview];

    return (
        <section id="feedback" className="items-center">
            <div className="section-shell">
                <SectionHeading
                    eyebrow="Feedback"
                    title="Share a review or feedback."
                    copy="Share your feedback and help me improve. Selected reviews may be displayed on this portfolio."
                />

                <div className="mt-10 grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                    {/* Approved testimonial carousel */}
                    <div className="relative">
                        {selectedReview ? (
                            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:p-8">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                                        <Quote size={22} />
                                    </div>

                                    <div
                                        className="flex items-center gap-1"
                                        aria-label={`${selectedReview.rating} out of 5 stars`}
                                    >
                                        {Array.from({ length: 5 }, (_, index) => (
                                            <Star
                                                key={index}
                                                size={18}
                                                className={
                                                    index < selectedReview.rating
                                                        ? 'fill-current text-amber-500'
                                                        : 'text-slate-300 dark:text-slate-700'
                                                }
                                            />
                                        ))}
                                    </div>
                                </div>

                                <p className="mt-6 text-lg font-medium leading-8 text-slate-700 dark:text-slate-200">
                                    “{selectedReview.message}”
                                </p>

                                <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5 dark:border-slate-800">
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white">
                                            {selectedReview.name}
                                        </p>

                                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                            {selectedReview.role || 'Visitor'}
                                        </p>
                                    </div>

                                    {items.length > 1 && (
                                        <div className="flex items-center gap-2">
                                            <button
                                                type="button"
                                                onClick={previousReview}
                                                aria-label="View previous testimonial"
                                                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-emerald-500 hover:bg-emerald-50hover:text-emerald-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-emerald-500 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400"
                                            >
                                                <ChevronLeft size={18} />
                                            </button>

                                            <button
                                                type="button"
                                                onClick={nextReview}
                                                aria-label="View next testimonial"
                                                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-emerald-500 hover:bg-emerald-50hover:text-emerald-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-emerald-500 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400"
                                            >
                                                <ChevronRight size={18} />
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {items.length > 1 && (
                                    <div className="mt-5 flex items-center gap-2">
                                        {items.map((review, index) => (
                                            <button
                                                key={review.id}
                                                type="button"
                                                onClick={() => setActiveReview(index)}
                                                aria-label={`View testimonial ${index + 1}`}
                                                className={`h-2 rounded-full transition-all duration-300 ${activeReview === index
                                                        ? 'w-7 bg-emerald-600'
                                                        : 'w-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </article>
                        ) : (
                            <div className="rounded-3xl border border-dashed border-slate-300 bg-white/60 p-8 text-center dark:border-slate-700 dark:bg-slate-900/60">
                                <Quote
                                    size={26}
                                    className="mx-auto text-slate-400 dark:text-slate-600"
                                />

                                <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                    Approved reviews will appear here after moderation.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Feedback submission form */}
                    <form onSubmit={submit} className="card h-fit">
                        <h3 className="text-xl font-black">Leave feedback</h3>

                        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                            Your review will appear publicly only after approval.
                        </p>

                        <div className="mt-5 grid gap-4">
                            <input
                                className="form-input"
                                name="name"
                                value={form.name}
                                onChange={change}
                                placeholder="Your name"
                                required
                                maxLength="100"
                            />

                            <input
                                className="form-input"
                                name="role"
                                value={form.role}
                                onChange={change}
                                placeholder="Role or organization (optional)"
                                maxLength="150"
                            />

                            <select
                                className="form-input"
                                name="rating"
                                value={form.rating}
                                onChange={change}
                            >
                                {[5, 4, 3, 2, 1].map((value) => (
                                    <option value={value} key={value}>
                                        {value} star{value > 1 ? 's' : ''}
                                    </option>
                                ))}
                            </select>

                            <textarea
                                className="form-input min-h-32 resize-y"
                                name="message"
                                value={form.message}
                                onChange={change}
                                placeholder="Write your feedback"
                                required
                                maxLength="1000"
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading ? 'Submitting...' : 'Submit Feedback'}
                            </button>
                        </div>

                        <StatusMessage status={status} />
                    </form>
                </div>
            </div>
        </section>
    );
}