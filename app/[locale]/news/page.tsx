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
  return { title: c.ui.newsTitle, description: c.ui.newsLead };
}

export default function NewsPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const c = getContent(locale);

  return (
    <>
      <PageHero
        locale={locale}
        kicker={c.news.kicker}
        title={c.ui.newsTitle}
        lead={c.ui.newsLead}
        crumbs={[{ label: c.ui.home, href: `/${locale}` }, { label: c.ui.newsTitle }]}
      />
      <section className="section">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {c.news.items.map((item, i) => (
            <Reveal key={item.slug} delay={i * 80}>
              <Link
                href={`/${locale}/news/${item.slug}`}
                className="card group flex h-full flex-col overflow-hidden hover:border-accent/60"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Photo
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-kicker text-muted">
                    <span className="text-accent">{item.category}</span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span>{item.date}</span>
                  </div>
                  <h2 className="text-base font-semibold leading-snug text-text">{item.title}</h2>
                  <p className="text-sm leading-relaxed text-muted">{item.excerpt}</p>
                  <span className="link-underline mt-auto pt-2 text-accent">{c.ui.readMore} →</span>
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
