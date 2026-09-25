'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { Locale } from '@/lib/i18n/config';
import type { SiteContent } from '@/types';
import { LocaleSwitch } from '@/components/ui/LocaleSwitch';
import { Logo } from '@/components/ui/Logo';

export function Header({ locale, content }: { locale: Locale; content: SiteContent }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const home = `/${locale}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-border bg-bg/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link href={home} className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <Logo name={content.company.name} className="text-xl" />
          <span className="hidden text-[10px] uppercase tracking-kicker text-accent sm:inline">
            EPC
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {content.nav.map((item) => (
            <Link
              key={item.href}
              href={`${home}${item.href}`}
              className="text-sm text-muted transition-colors hover:text-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LocaleSwitch locale={locale} />
          <Link href={`${home}#contact`} className="btn-primary hidden lg:inline-flex">
            {content.common.requestQuote}
          </Link>
          <button
            type="button"
            aria-label={open ? content.common.close : content.common.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded border border-border text-text lg:hidden"
          >
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <span className={`h-0.5 w-full bg-current transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`h-0.5 w-full bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-current transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {open && (
        <div className="border-t border-border bg-bg lg:hidden">
          <nav className="container-page flex flex-col py-4">
            {content.nav.map((item) => (
              <Link
                key={item.href}
                href={`${home}${item.href}`}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 text-base text-text"
              >
                {item.label}
              </Link>
            ))}
            <Link href={`${home}#contact`} onClick={() => setOpen(false)} className="btn-primary mt-6">
              {content.common.requestQuote}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
