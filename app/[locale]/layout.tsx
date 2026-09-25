import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { fontSans, fontDisplay } from '@/lib/fonts';
import { locales, isLocale, type Locale } from '@/lib/i18n/config';
import { getContent } from '@/content/site';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import '../globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://arcondemo.tesmika.ru';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'ru';
  const c = getContent(locale);
  const title = `${c.company.legalName} — ${c.company.tagline}`;
  const description = c.about.lead;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: `%s · ${c.company.name}`,
    },
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: { ru: '/ru', en: '/en' },
    },
    openGraph: {
      type: 'website',
      title,
      description,
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
      siteName: c.company.name,
    },
    robots: { index: true, follow: true },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const c = getContent(locale);

  return (
    <html lang={locale} className={`${fontSans.variable} ${fontDisplay.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-white">
          {locale === 'ru' ? 'К содержанию' : 'Skip to content'}
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: c.company.legalName,
              alternateName: c.company.name,
              url: `${SITE_URL}/${locale}`,
              description: c.about.lead,
              address: { '@type': 'PostalAddress', addressCountry: 'RU' },
              identifier: [
                { '@type': 'PropertyValue', name: 'ИНН', value: c.company.inn },
                { '@type': 'PropertyValue', name: 'КПП', value: c.company.kpp },
              ],
            }),
          }}
        />
        <Header locale={locale} content={c} />
        <main id="main">{children}</main>
        <Footer locale={locale} content={c} />
      </body>
    </html>
  );
}
