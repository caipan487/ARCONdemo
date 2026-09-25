import { Photo } from '@/components/ui/Photo';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';
import type { SiteContent } from '@/types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function Projects({ locale, content }: { locale: Locale; content: SiteContent }) {
  const { projects } = content;
  return (
    <section id="projects" className="section border-y border-border bg-surface">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading kicker={projects.kicker} title={projects.title} intro={projects.intro} />
          <Reveal as="span">
            <Link href={`/${locale}/projects`} className="btn-outline">
              {projects.cta} →
            </Link>
          </Reveal>
        </div>
        <div className="mt-14 flex flex-col gap-6">
          {projects.items.map((project, i) => (
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
                    <h3 className="text-h3 text-text">{project.title}</h3>
                    <p className="text-sm text-muted">{project.scope}</p>
                  </div>
                  <dl className="grid grid-cols-3 gap-4 border-t border-border pt-6">
                    {project.facts.map((fact) => (
                      <div key={fact.label} className="flex flex-col gap-1">
                        <dt className="text-xs text-muted">{fact.label}</dt>
                        <dd className="font-display text-lg font-bold text-text">{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
