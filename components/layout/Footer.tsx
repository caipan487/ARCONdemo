import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';
import type { SiteContent } from '@/types';
import { Logo } from '@/components/ui/Logo';

export function Footer({ locale, content }: { locale: Locale; content: SiteContent }) {
  const home = `/${locale}`;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Logo name={content.company.name} className="text-2xl" />
          <p className="max-w-xs text-sm leading-relaxed text-muted">{content.footer.about}</p>
          <p className="text-xs text-muted">
            {content.company.legalName} · ИНН {content.company.inn} · КПП {content.company.kpp}
          </p>
        </div>

        {content.footer.columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-kicker text-muted">{col.title}</h3>
            <ul className="flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link href={`${home}${link.href}`} className="text-sm text-text/80 transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-4 py-6 text-xs text-muted lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p>© {year} {content.company.legalName}. {content.footer.rights}</p>
            <Link href={`${home}/privacy`} className="transition-colors hover:text-accent">
              {content.ui.privacyPolicy}
            </Link>
          </div>
          <p className="max-w-2xl text-muted/70">{content.footer.placeholderNote}</p>
        </div>
      </div>
    </footer>
  );
}
