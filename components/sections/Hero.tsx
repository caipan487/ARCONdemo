import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';
import type { SiteContent } from '@/types';
import { BLUR_DATA_URL } from '@/lib/image';

export function Hero({ locale, content }: { locale: Locale; content: SiteContent }) {
  const home = `/${locale}`;
  const { hero } = content;

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      <Image
        src="/media/photos/hero.jpg"
        alt=""
        fill
        priority
        fetchPriority="high"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        sizes="100vw"
        className="object-cover"
      />
      {/* Затемнение для читаемости — графитовый градиент */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-bg/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/85 via-bg/40 to-transparent" />

      <div className="container-page relative z-10 w-full pb-16 pt-32 lg:pb-24">
        <div className="max-w-3xl">
          <span className="kicker mb-6">{hero.kicker}</span>
          <h1 className="text-display text-text">{hero.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text/80">{hero.subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href={`${home}#contact`} className="btn-primary">
              {hero.ctaPrimary}
            </Link>
            <Link href={`${home}#projects`} className="btn-outline">
              {hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>

      {/* Направления — равномерная полоса под Hero */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-border/60 bg-bg/60 backdrop-blur-sm">
        <div className="container-page grid grid-cols-2 divide-x divide-border/40 sm:grid-cols-3 lg:grid-cols-6">
          {hero.marquee.map((item) => (
            <span
              key={item}
              className="px-3 py-4 text-center text-[11px] uppercase leading-tight tracking-kicker text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
