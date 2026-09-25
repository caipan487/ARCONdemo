import { Photo } from '@/components/ui/Photo';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';
import type { SiteContent } from '@/types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function News({ locale, content }: { locale: Locale; content: SiteContent }) {
  const { news } = content;
  return (
    <section id="news" className="section border-t border-border bg-surface">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading kicker={news.kicker} title={news.title} />
          <Reveal as="span">
            <Link href={`/${locale}/news`} className="btn-outline">
              {news.cta} →
            </Link>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {news.items.map((item, i) => (
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
                  <h3 className="text-base font-semibold leading-snug text-text">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{item.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
