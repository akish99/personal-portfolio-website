import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import StatusMessage from '../components/StatusMessage';
import { api } from '../utils/api';

const initial = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      await api.submitContact(form);
      setForm(initial);
      setStatus({
        type: 'success',
        message: 'Thank you for reaching out. Your message has been submitted successfully.'
      });
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding border-t border-slate-200 bg-white text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something meaningful."
            copy="Send a message for collaboration, project discussions or professional opportunities. I will receive an email notification and can reply manually."
          />
          <div className="mt-8 grid gap-3 text-sm text-slate-300">
            <a href="mailto:akishpandey2006@gmail.com" className="flex items-center gap-3 hover:text-white text-slate-600 dark:text-slate-300">
              <Mail size={18} />
              akishpandey2006@gmail.com
            </a>
            <p className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
              <MapPin size={18} />
              India
            </p>
          </div>
        </div>

        <form onSubmit={submit} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="form-input" name="name" value={form.name} onChange={change} placeholder="Your name" required maxLength="100" />
            <input className="form-input" type="email" name="email" value={form.email} onChange={change} placeholder="Your email" required maxLength="255" />
          </div>
          <input className="form-input mt-4" name="subject" value={form.subject} onChange={change} placeholder="Subject" required maxLength="200" />
          <textarea className="form-input mt-4 min-h-36 resize-y" name="message" value={form.message} onChange={change} placeholder="Your message" required maxLength="2000" />
          
          <button disabled={loading} className="btn-primary mt-4 disabled:cursor-not-allowed disabled:opacity-60">
            {loading ? 'Submitting...' : 'Send Message'} <Send size={16} />
          </button>
          
          <StatusMessage status={status} />
        </form>
      </div>
    </section>
  );
}