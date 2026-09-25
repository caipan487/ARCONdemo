import type { Locale } from '@/lib/i18n/config';
import type { SiteContent } from '@/types';
import { Reveal } from '@/components/ui/Reveal';
import { ContactForm } from '@/components/forms/ContactForm';

export function Contact({ locale, content }: { locale: Locale; content: SiteContent }) {
  const { contact, company } = content;
  return (
    <section id="contact" className="section">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal className="flex flex-col gap-6">
          <span className="kicker">{contact.kicker}</span>
          <h2 className="text-h2 text-text">{contact.title}</h2>
          <p className="max-w-md text-lg leading-relaxed text-muted">{contact.intro}</p>
          <dl className="mt-4 flex flex-col gap-5 border-t border-border pt-8">
            <div className="flex flex-col gap-1">
              <dt className="text-xs uppercase tracking-kicker text-muted">{company.legalName}</dt>
              <dd className="text-sm text-text/90">ИНН {company.inn} · КПП {company.kpp}</dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="text-xs uppercase tracking-kicker text-muted">EPC</dt>
              <dd className="text-sm text-text/90">{company.foundedNote}</dd>
            </div>
          </dl>
        </Reveal>
        <Reveal delay={120}>
          <ContactForm locale={locale} content={content} />
        </Reveal>
      </div>
    </section>
  );
}
