import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';
import type { SiteContent } from '@/types';
import { Reveal } from '@/components/ui/Reveal';

export function CtaBand({ locale, content }: { locale: Locale; content: SiteContent }) {
  return (
    <section className="section border-t border-border bg-surface">
      <div className="container-page">
        <Reveal className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-2xl flex-col gap-3">
            <h2 className="text-h2 text-text">{content.ui.ctaTitle}</h2>
            <p className="text-muted">{content.ui.ctaText}</p>
          </div>
          <Link href={`/${locale}#contact`} className="btn-primary shrink-0">
            {content.common.requestQuote}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
