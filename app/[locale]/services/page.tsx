import type { Metadata } from 'next';
import Link from 'next/link';
import { Photo } from '@/components/ui/Photo';
import { notFound } from 'next/navigation';
import { isLocale, locales, type Locale } from '@/lib/i18n/config';
import { getContent } from '@/content/site';
import { PageHero } from '@/components/ui/PageHero';
import { CtaBand } from '@/components/sections/CtaBand';
import { Reveal } from '@/components/ui/Reveal';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'ru';
  const c = getContent(locale);
  return { title: c.ui.servicesTitle, description: c.ui.servicesLead };
}

export default function ServicesPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const c = getContent(locale);

  return (
    <>
      <PageHero
        locale={locale}
        kicker={c.services.kicker}
        title={c.ui.servicesTitle}
        lead={c.ui.servicesLead}
        crumbs={[{ label: c.ui.home, href: `/${locale}` }, { label: c.ui.servicesTitle }]}
      />
      <section className="section">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {c.services.items.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 2) * 100}>
              <Link
                href={`/${locale}/services/${service.slug}`}
                className="card group flex h-full flex-col overflow-hidden hover:border-accent/60"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Photo
                    src={service.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                  <span className="absolute left-5 top-5 font-display text-2xl font-bold text-white/90">{service.no}</span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-7">
                  <h2 className="text-h3 text-text">{service.title}</h2>
                  <p className="text-sm leading-relaxed text-muted">{service.summary}</p>
                  <span className="link-underline mt-auto pt-2 text-accent">{c.common.learnMore} →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand locale={locale} content={c} />
    </>
  );
}
