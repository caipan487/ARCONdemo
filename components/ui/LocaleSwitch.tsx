'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, localeNames, type Locale } from '@/lib/i18n/config';

export function LocaleSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  function pathFor(target: Locale) {
    if (!pathname) return `/${target}`;
    const segments = pathname.split('/');
    segments[1] = target;
    return segments.join('/') || `/${target}`;
  }

  return (
    <div className="flex items-center gap-1 text-xs font-medium">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className="text-border">/</span>}
          <Link
            href={pathFor(l)}
            className={`px-1 transition-colors ${
              l === locale ? 'text-accent' : 'text-muted hover:text-text'
            }`}
            aria-current={l === locale ? 'true' : undefined}
          >
            {localeNames[l]}
          </Link>
        </span>
      ))}
    </div>
  );
}
