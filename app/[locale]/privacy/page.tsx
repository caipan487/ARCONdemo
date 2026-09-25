import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, locales, type Locale } from '@/lib/i18n/config';
import { getContent } from '@/content/site';
import { getPrivacyPolicy } from '@/content/legal';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'ru';
  const policy = getPrivacyPolicy(locale);
  return { title: policy.title, description: policy.intro, robots: { index: false, follow: true } };
}

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const c = getContent(locale);
  const policy = getPrivacyPolicy(locale);

  return (
    <>
      <PageHero
        locale={locale}
        kicker={policy.updated}
        title={policy.title}
        lead={policy.intro}
        crumbs={[{ label: c.ui.home, href: `/${locale}` }, { label: policy.title }]}
      />
      <section className="section">
        <div className="container-page max-w-3xl">
          <div className="flex flex-col gap-10">
            {policy.sections.map((s) => (
              <Reveal key={s.heading} className="flex flex-col gap-3">
                <h2 className="text-h3 text-text">{s.heading}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p} className="leading-relaxed text-muted">{p}</p>
                ))}
              </Reveal>
            ))}
          </div>
          <p className="mt-12 border-t border-border pt-8 text-xs leading-relaxed text-muted/70">{policy.note}</p>
        </div>
      </section>
    </>
  );
}
