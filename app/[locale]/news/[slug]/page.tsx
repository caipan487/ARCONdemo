import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isLocale, locales, type Locale } from '@/lib/i18n/config';
import { getContent } from '@/content/site';
import { getNewsDetail } from '@/content/details';
import { PageHero } from '@/components/ui/PageHero';
import { CtaBand } from '@/components/sections/CtaBand';
import { Reveal } from '@/components/ui/Reveal';

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getContent(locale).news.items.map((n) => ({ locale, slug: n.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'ru';
  const c = getContent(locale);
  const item = c.news.items.find((n) => n.slug === params.slug);
  if (!item) return {};
  return { title: item.title, description: item.excerpt };
}

export default function NewsDetailPage({ params }: { params: { locale: string; slug: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const c = getContent(locale);
  const item = c.news.items.find((n) => n.slug === params.slug);
  const detail = getNewsDetail(locale, params.slug);
  if (!item || !detail) notFound();

  const others = c.news.items.filter((n) => n.slug !== item.slug);

  return (
    <>
      <PageHero
        locale={locale}
        kicker={`${item.category} · ${item.date}`}
        title={item.title}
        lead={detail.lead}
        image={item.image}
        crumbs={[
          { label: c.ui.home, href: `/${locale}` },
          { label: c.ui.newsTitle, href: `/${locale}/news` },
          { label: item.title },
        ]}
      />

      <article className="section">
        <div className="container-page max-w-3xl">
          <Reveal className="flex flex-col gap-6">
            {detail.body.map((p) => (
              <p key={p} className="text-lg leading-relaxed text-text/85">{p}</p>
            ))}
          </Reveal>
          <div className="mt-12 border-t border-border pt-8">
            <Link href={`/${locale}/news`} className="link-underline text-accent">
              ← {c.ui.newsTitle}
            </Link>
          </div>
        </div>
      </article>

      <section className="section border-t border-border bg-surface">
        <div className="container-page">
          <h2 className="text-h3 text-text">{c.ui.otherNews}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {others.map((n) => (
              <Link
                key={n.slug}
                href={`/${locale}/news/${n.slug}`}
                className="card flex flex-col gap-2 p-6 transition-colors hover:border-accent/60"
              >
                <div className="flex items-center gap-3 text-xs uppercase tracking-kicker text-muted">
                  <span className="text-accent">{n.category}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>{n.date}</span>
                </div>
                <span className="text-sm font-medium text-text">{n.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand locale={locale} content={c} />
    </>
  );
}
