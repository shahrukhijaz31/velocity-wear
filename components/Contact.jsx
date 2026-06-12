'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Instagram, MapPin, Loader2, CheckCircle2, Send } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { BRAND, PRODUCT_TYPES } from '@/lib/site';

const FIELDS = [
  { name: 'name', label: 'Full Name', type: 'text', required: true, autoComplete: 'name', placeholder: 'Jordan Reyes' },
  { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email', placeholder: 'you@brand.com' },
  { name: 'phone', label: 'Phone', type: 'tel', required: false, autoComplete: 'tel', placeholder: '+1 555 010 2025' },
  { name: 'company', label: 'Company', type: 'text', required: false, autoComplete: 'organization', placeholder: 'Your brand' },
];

const EMPTY = {
  name: '',
  email: '',
  phone: '',
  company: '',
  productType: '',
  quantity: '',
  message: '',
};

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const update = (name, value) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!values.name.trim()) e.name = 'Please enter your name';
    if (!values.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = 'Enter a valid email';
    if (!values.productType) e.productType = 'Select a product type';
    if (values.quantity && Number(values.quantity) < BRAND.moq)
      e.quantity = `Minimum order is ${BRAND.moq} pieces`;
    return e;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      const first = document.querySelector(`[name="${Object.keys(e)[0]}"]`);
      first?.focus();
      return;
    }
    setStatus('loading');
    // No backend wired — simulate a successful submission.
    setTimeout(() => setStatus('success'), 1400);
  };

  const inputBase =
    'w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-cyan-glow/70 focus:ring-2 focus:ring-cyan-glow/20';

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Request Your"
        highlight="Free Quote"
        subtitle="Tell us what you're making. Our team replies within hours with transparent pricing and a mockup plan."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        {/* Info panel */}
        <motion.aside
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] glass-strong p-8"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-electric-600/20 blur-[90px]" />
          <div className="relative">
            <h3 className="font-display text-2xl uppercase text-white">Let’s talk apparel</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Prefer to chat? Reach us directly — we love a good brief.
            </p>

            <ul className="mt-8 space-y-4">
              <ContactRow icon={Mail} label="Email" value={BRAND.email} href={`mailto:${BRAND.email}`} />
              <ContactRow icon={MessageCircle} label="WhatsApp" value={BRAND.whatsapp} href={BRAND.whatsappLink} />
              <ContactRow icon={Instagram} label="Instagram" value="@velocitywear.brand" href={BRAND.instagram} />
              <ContactRow icon={MapPin} label="Delivery" value="Nationwide & Worldwide" />
            </ul>
          </div>

          <div className="relative mt-8 rounded-2xl border border-cyan-glow/20 bg-cyan-glow/5 p-4">
            <div className="font-display text-3xl text-white">MOQ {BRAND.moq}</div>
            <p className="text-xs text-slate-400">Lowest premium minimum in the industry.</p>
          </div>
        </motion.aside>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] glass-strong p-8 sm:p-10"
        >
          {status === 'success' ? (
            <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 14 }}
                className="flex h-20 w-20 items-center justify-center rounded-full bg-electric-gradient text-ink-900 shadow-glow"
              >
                <CheckCircle2 className="h-10 w-10" />
              </motion.div>
              <h3 className="mt-6 font-display text-3xl uppercase text-white">Quote Requested</h3>
              <p className="mt-3 max-w-sm text-slate-400">
                Thanks, {values.name.split(' ')[0] || 'there'}! Our team will be in touch within a few
                hours with your custom quote and next steps.
              </p>
              <button
                onClick={() => {
                  setValues(EMPTY);
                  setStatus('idle');
                }}
                className="btn-ghost mt-7 rounded-xl px-6 py-3 text-sm font-semibold text-white"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                {FIELDS.map((f) => (
                  <Field key={f.name} field={f} value={values[f.name]} error={errors[f.name]} onChange={update} inputBase={inputBase} />
                ))}

                {/* Product type */}
                <div>
                  <Label htmlFor="productType" required>Product Type</Label>
                  <select
                    id="productType"
                    name="productType"
                    value={values.productType}
                    onChange={(e) => update('productType', e.target.value)}
                    className={`${inputBase} ${errors.productType ? 'border-red-400/60' : 'border-white/10'} appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat`}
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2322e0ff' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                    }}
                    aria-invalid={!!errors.productType}
                  >
                    <option value="" disabled className="bg-ink-700">Select a product…</option>
                    {PRODUCT_TYPES.map((p) => (
                      <option key={p} value={p} className="bg-ink-700">{p}</option>
                    ))}
                  </select>
                  <FieldError msg={errors.productType} />
                </div>

                {/* Quantity */}
                <div>
                  <Label htmlFor="quantity">Quantity (MOQ {BRAND.moq})</Label>
                  <input
                    id="quantity"
                    name="quantity"
                    type="number"
                    min={BRAND.moq}
                    inputMode="numeric"
                    value={values.quantity}
                    onChange={(e) => update('quantity', e.target.value)}
                    placeholder={`${BRAND.moq}+`}
                    className={`${inputBase} ${errors.quantity ? 'border-red-400/60' : 'border-white/10'}`}
                    aria-invalid={!!errors.quantity}
                  />
                  <FieldError msg={errors.quantity} />
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <Label htmlFor="message">Project Details</Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={values.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="Tell us about your design, colors, deadlines…"
                    className={`${inputBase} resize-none border-white/10`}
                  />
                </div>
              </div>

              <div aria-live="polite" className="sr-only">
                {status === 'loading' ? 'Submitting your request' : ''}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-electric mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-7 py-4 text-base font-bold disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Get My Free Quote <Send className="h-4 w-4" />
                  </>
                )}
              </button>
              <p className="mt-3 text-center text-xs text-slate-500">
                No spam, ever. We only use your details to prepare your quote.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Label({ children, htmlFor, required }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300">
      {children} {required && <span className="text-cyan-glow">*</span>}
    </label>
  );
}

function FieldError({ msg }) {
  if (!msg) return null;
  return (
    <p role="alert" className="mt-1.5 text-xs font-medium text-red-300">
      {msg}
    </p>
  );
}

function Field({ field, value, error, onChange, inputBase }) {
  return (
    <div>
      <Label htmlFor={field.name} required={field.required}>{field.label}</Label>
      <input
        id={field.name}
        name={field.name}
        type={field.type}
        value={value}
        autoComplete={field.autoComplete}
        placeholder={field.placeholder}
        onChange={(e) => onChange(field.name, e.target.value)}
        className={`${inputBase} ${error ? 'border-red-400/60' : 'border-white/10'}`}
        aria-invalid={!!error}
      />
      <FieldError msg={error} />
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }) {
  const inner = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-glow">
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className="block text-[11px] uppercase tracking-wider text-slate-500">{label}</span>
        <span className="block truncate text-sm font-medium text-white">{value}</span>
      </span>
    </>
  );
  if (href) {
    return (
      <li>
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl p-1 transition-colors hover:bg-white/5"
        >
          {inner}
        </a>
      </li>
    );
  }
  return <li className="flex items-center gap-3 p-1">{inner}</li>;
}
