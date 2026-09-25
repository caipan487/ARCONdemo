import type { Metadata } from 'next';
import Link from 'next/link';
import { Photo } from '@/components/ui/Photo';
import { notFound } from 'next/navigation';
import { isLocale, locales, type Locale } from '@/lib/i18n/config';
import { getContent } from '@/content/site';
import { PageHero } from '@/components/ui/PageHero';
import { CtaBand } from '@/components/sections/CtaBand';
import { Reveal } from '@/components/ui/Reveal';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'ru';
  const c = getContent(locale);
  return { title: c.ui.projectsTitle, description: c.ui.projectsLead };
}

export default function ProjectsPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const c = getContent(locale);

  return (
    <>
      <PageHero
        locale={locale}
        kicker={c.projects.kicker}
        title={c.ui.projectsTitle}
        lead={c.ui.projectsLead}
        crumbs={[{ label: c.ui.home, href: `/${locale}` }, { label: c.ui.projectsTitle }]}
      />
      <section className="section">
        <div className="container-page flex flex-col gap-6">
          {c.projects.items.map((project, i) => (
            <Reveal key={project.slug} delay={i * 60}>
              <Link
                href={`/${locale}/projects/${project.slug}`}
                className="card group grid overflow-hidden lg:grid-cols-[1.3fr_1fr] hover:border-accent/60"
              >
                <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                  <Photo
                    src={project.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-between gap-8 p-8 lg:p-10">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-kicker text-muted">
                      <span className="text-accent">{project.sector}</span>
                      <span className="h-1 w-1 rounded-full bg-border" />
                      <span>{project.location}</span>
                      <span className="h-1 w-1 rounded-full bg-border" />
                      <span>{project.year}</span>
                    </div>
                    <h2 className="text-h3 text-text">{project.title}</h2>
                    <p className="text-sm text-muted">{project.scope}</p>
                  </div>
                  <span className="link-underline text-accent">{c.common.learnMore} →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand locale={locale} content={c} />
    </>
  );
}
