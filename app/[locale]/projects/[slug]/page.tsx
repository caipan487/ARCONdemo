import type { Metadata } from 'next';
import Link from 'next/link';
import { Photo } from '@/components/ui/Photo';
import { notFound } from 'next/navigation';
import { isLocale, locales, type Locale } from '@/lib/i18n/config';
import { getContent } from '@/content/site';
import { getProjectDetail } from '@/content/details';
import { PageHero } from '@/components/ui/PageHero';
import { CtaBand } from '@/components/sections/CtaBand';
import { Reveal } from '@/components/ui/Reveal';

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getContent(locale).projects.items.map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'ru';
  const c = getContent(locale);
  const project = c.projects.items.find((p) => p.slug === params.slug);
  if (!project) return {};
  return { title: project.title, description: project.scope };
}

export default function ProjectDetailPage({ params }: { params: { locale: string; slug: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const c = getContent(locale);
  const project = c.projects.items.find((p) => p.slug === params.slug);
  const detail = getProjectDetail(locale, params.slug);
  if (!project || !detail) notFound();

  const others = c.projects.items.filter((p) => p.slug !== project.slug);

  return (
    <>
      <PageHero
        locale={locale}
        kicker={`${project.sector} · ${project.location} · ${project.year}`}
        title={project.title}
        lead={detail.lead}
        image={project.image}
        crumbs={[
          { label: c.ui.home, href: `/${locale}` },
          { label: c.ui.projectsTitle, href: `/${locale}/projects` },
          { label: project.title },
        ]}
      />

      {/* Факты */}
      <section className="border-b border-border bg-surface">
        <div className="container-page grid grid-cols-2 gap-px overflow-hidden lg:grid-cols-4">
          <div className="flex flex-col justify-center gap-1 py-8 pr-6">
            <span className="text-xs uppercase tracking-kicker text-muted">{c.ui.facts}</span>
            <span className="text-sm text-text/80">{project.scope}</span>
          </div>
          {project.facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1 py-8">
              <span className="font-display text-3xl font-bold text-text">{fact.value}</span>
              <span className="text-xs text-muted">{fact.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Задача / Обзор / Результат */}
      <section className="section">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="kicker">{c.ui.task}</span>
              <p className="text-lg leading-relaxed text-text/85">{detail.task}</p>
            </div>
            <div className="flex flex-col gap-3 border-t border-border pt-8">
              <span className="kicker">{c.ui.result}</span>
              {detail.result.map((r) => (
                <p key={r} className="leading-relaxed text-muted">{r}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100} className="flex flex-col gap-5">
            {detail.overview.map((p) => (
              <p key={p} className="text-lg leading-relaxed text-text/85">{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Галерея */}
      <section className="section border-t border-border bg-surface">
        <div className="container-page">
          <Reveal><span className="kicker mb-8">{c.ui.gallery}</span></Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {detail.gallery.map((src, i) => (
              <Reveal key={src} delay={i * 80} className="relative aspect-[4/3] overflow-hidden rounded border border-border">
                <Photo
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Другие проекты */}
      <section className="section">
        <div className="container-page">
          <h2 className="text-h3 text-text">{c.ui.otherProjects}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/${locale}/projects/${p.slug}`}
                className="card group flex items-center gap-5 overflow-hidden p-4 pr-6 transition-colors hover:border-accent/60"
              >
                <span className="relative h-20 w-28 shrink-0 overflow-hidden rounded">
                  <Photo src={p.image} alt="" fill sizes="112px" className="object-cover" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-kicker text-accent">{p.sector}</span>
                  <span className="text-sm font-medium text-text">{p.title}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand locale={locale} content={c} />
    </>
  );
}
