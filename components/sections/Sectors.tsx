import { Photo } from '@/components/ui/Photo';
import type { SiteContent } from '@/types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function Sectors({ content }: { content: SiteContent }) {
  const { sectors } = content;
  return (
    <section id="sectors" className="section border-t border-border bg-surface">
      <div className="container-page">
        <SectionHeading kicker={sectors.kicker} title={sectors.title} intro={sectors.intro} />
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {sectors.items.map((sector, i) => (
            <Reveal key={sector.slug} delay={(i % 4) * 70}>
              <article className="group relative aspect-[4/5] overflow-hidden rounded border border-border">
                <Photo
                  src={sector.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent transition-opacity group-hover:from-bg/95" />
                <h3 className="absolute inset-x-0 bottom-0 p-5 text-base font-semibold leading-snug text-white">
                  {sector.title}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
