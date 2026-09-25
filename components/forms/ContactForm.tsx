'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';
import type { SiteContent } from '@/types';

export function ContactForm({ locale, content }: { locale: Locale; content: SiteContent }) {
  const { form } = content.contact;
  const isEn = locale === 'en';
  const [sent, setSent] = useState(false);
  const [consent, setConsent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Демо: приём заявок подключается на этапе интеграции (см. .env.example).
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex h-full flex-col items-start justify-center gap-4 rounded border border-accent/40 bg-surface p-10">
        <span className="font-display text-2xl font-bold text-text">✓</span>
        <p className="text-lg text-text">
          {isEn ? 'Thank you! We will get back to you shortly.' : 'Спасибо! Мы свяжемся с вами в ближайшее время.'}
        </p>
        <p className="text-sm text-muted">
          {isEn
            ? 'This is a demo form. Submission handling is connected during integration.'
            : 'Это демо-форма. Приём заявок подключается на этапе интеграции.'}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 rounded border border-border bg-surface p-8 lg:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={form.name} name="name" required />
        <Field label={form.company} name="company" />
        <Field label={form.email} name="email" type="email" required />
        <Field label={form.phone} name="phone" type="tel" />
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-kicker text-muted">{form.message}</span>
        <textarea
          name="message"
          rows={4}
          className="resize-none rounded border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent"
        />
      </label>
      <label className="flex items-start gap-3 text-xs leading-relaxed text-muted">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
        />
        <span>
          {form.consent}{' '}
          <Link href={`/${locale}/privacy`} className="text-accent underline underline-offset-2 hover:text-accent-soft">
            {content.ui.privacyPolicy}
          </Link>
          .
        </span>
      </label>
      <button type="submit" className="btn-primary self-start disabled:opacity-50" disabled={!consent}>
        {form.submit}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs uppercase tracking-kicker text-muted">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="rounded border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent"
      />
    </label>
  );
}
