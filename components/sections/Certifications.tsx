import { Photo } from '@/components/ui/Photo';
import type { SiteContent } from '@/types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function Certifications({ content }: { content: SiteContent }) {
  const { certifications } = content;
  return (
    <section id="certifications" className="section border-t border-border bg-surface">
      <div className="container-page">
        <SectionHeading
          kicker={certifications.kicker}
          title={certifications.title}
          intro={certifications.intro}
        />
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {certifications.items.map((cert, i) => (
            <Reveal key={cert.title} delay={(i % 4) * 70}>
              <article className="card group relative flex flex-col overflow-hidden">
                <span className="absolute right-3 top-3 z-10 rounded bg-bg/80 px-2 py-1 text-[10px] uppercase tracking-widest text-muted backdrop-blur">
                  {content.common.sampleBadge}
                </span>
                <div className="relative aspect-[3/4] overflow-hidden bg-surface-2">
                  <Photo
                    src={cert.image}
                    alt={`${cert.title} — ${content.common.sampleBadge}`}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col gap-1 p-5">
                  <h3 className="text-sm font-semibold text-text">{cert.title}</h3>
                  <p className="text-xs text-muted">{cert.issuer}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-muted/80">
          {certifications.disclaimer}
        </p>
      </div>
    </section>
  );
}
