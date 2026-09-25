import type { SiteContent } from '@/types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function Geography({ content }: { content: SiteContent }) {
  const { geography } = content;
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading kicker={geography.kicker} title={geography.title} intro={geography.intro} />
        <div className="mt-12 flex flex-wrap gap-3">
          {geography.regions.map((region, i) => (
            <Reveal key={region} delay={(i % 8) * 50} as="span">
              <span className="inline-flex rounded-full border border-border bg-surface px-5 py-2.5 text-sm text-text/90 transition-colors hover:border-accent hover:text-accent">
                {region}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
