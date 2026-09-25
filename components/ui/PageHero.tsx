import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';
import { Photo } from '@/components/ui/Photo';

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  locale: Locale;
  kicker: string;
  title: string;
  lead?: string;
  crumbs: Crumb[];
  image?: string;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://industrial.tesmika.ru';

export function PageHero({ locale, kicker, title, lead, crumbs, image }: PageHeroProps) {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${SITE_URL}${c.href}` } : {}),
    })),
  };

  return (
    <section className="relative overflow-hidden border-b border-border">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {image ? (
        <>
          <Photo src={image} alt="" fill priority fetchPriority="high" sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/85 to-bg/60" />
        </>
      ) : null}
      <div className="container-page relative z-10 pb-14 pt-32 lg:pb-20 lg:pt-40">
        <nav aria-label="breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-muted">
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-border">/</span>}
              {c.href ? (
                <Link href={c.href} className="transition-colors hover:text-accent">
                  {c.label}
                </Link>
              ) : (
                <span className="text-text/70">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <span className="kicker mb-5">{kicker}</span>
        <h1 className="max-w-3xl text-h1 text-text">{title}</h1>
        {lead ? <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text/80">{lead}</p> : null}
      </div>
    </section>
  );
}
