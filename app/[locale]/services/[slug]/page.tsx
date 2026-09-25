import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isLocale, locales, type Locale } from '@/lib/i18n/config';
import { getContent } from '@/content/site';
import { getServiceDetail } from '@/content/details';
import { PageHero } from '@/components/ui/PageHero';
import { CtaBand } from '@/components/sections/CtaBand';
import { Reveal } from '@/components/ui/Reveal';

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getContent(locale).services.items.map((s) => ({ locale, slug: s.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'ru';
  const c = getContent(locale);
  const service = c.services.items.find((s) => s.slug === params.slug);
  if (!service) return {};
  return { title: service.title, description: service.summary };
}

export default function ServiceDetailPage({ params }: { params: { locale: string; slug: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const c = getContent(locale);
  const service = c.services.items.find((s) => s.slug === params.slug);
  const detail = getServiceDetail(locale, params.slug);
  if (!service || !detail) notFound();

  const others = c.services.items.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        locale={locale}
        kicker={`${c.services.kicker} · ${service.no}`}
        title={service.title}
        lead={detail.lead}
        image={service.image}
        crumbs={[
          { label: c.ui.home, href: `/${locale}` },
          { label: c.ui.servicesTitle, href: `/${locale}/services` },
          { label: service.title },
        ]}
      />

      {/* Обзор */}
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <h2 className="text-h2 text-text">{service.title}</h2>
          </Reveal>
          <Reveal delay={100} className="flex flex-col gap-5">
            {detail.overview.map((p) => (
              <p key={p} className="text-lg leading-relaxed text-text/85">{p}</p>
            ))}
            <ul className="mt-2 grid gap-2 sm:grid-cols-2">
              {service.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm text-text/85">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Что входит */}
      <section className="section border-y border-border bg-surface">
        <div className="container-page">
          <Reveal><span className="kicker mb-4">{c.ui.whatWeDeliver}</span></Reveal>
          <div className="mt-6 grid gap-px overflow-hidden border border-border sm:grid-cols-2">
            {detail.deliverables.map((d, i) => (
              <Reveal key={d.title} delay={(i % 2) * 90} className="flex flex-col gap-3 bg-surface p-8">
                <h3 className="text-h3 text-text">{d.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{d.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Как мы работаем */}
      <section className="section">
        <div className="container-page">
          <Reveal><span className="kicker mb-4">{c.ui.howWeWork}</span></Reveal>
          <div className="mt-6 grid gap-px overflow-hidden border border-border md:grid-cols-2 lg:grid-cols-4">
            {detail.process.map((step, i) => (
              <Reveal key={step.no} delay={i * 80} className="flex flex-col gap-4 bg-bg p-8">
                <span className="font-display text-3xl font-bold text-accent">{step.no}</span>
                <h3 className="text-base font-semibold text-text">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Другие направления */}
      <section className="section border-t border-border bg-surface">
        <div className="container-page">
          <h2 className="text-h3 text-text">{c.ui.otherServices}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/${locale}/services/${s.slug}`}
                className="card flex items-center justify-between gap-4 p-6 transition-colors hover:border-accent/60"
              >
                <span className="flex items-center gap-3">
                  <span className="font-display text-lg font-bold text-accent">{s.no}</span>
                  <span className="text-sm font-medium text-text">{s.title}</span>
                </span>
                <span className="text-accent">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand locale={locale} content={c} />
    </>
  );
}
