import { Photo } from '@/components/ui/Photo';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';
import type { SiteContent } from '@/types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function Services({ locale, content }: { locale: Locale; content: SiteContent }) {
  const { services } = content;
  return (
    <section id="services" className="section">
      <div className="container-page">
        <SectionHeading kicker={services.kicker} title={services.title} intro={services.intro} />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.items.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 2) * 100}>
              <Link
                href={`/${locale}/services/${service.slug}`}
                className="card group flex h-full flex-col overflow-hidden hover:border-accent/60"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Photo
                    src={service.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                  <span className="absolute left-5 top-5 font-display text-2xl font-bold text-white/90">
                    {service.no}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-7">
                  <h3 className="text-h3 text-text">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{service.summary}</p>
                  <ul className="mt-2 flex flex-col gap-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-sm text-text/85">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <span className="link-underline mt-auto pt-3 text-accent">{content.common.learnMore} →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
