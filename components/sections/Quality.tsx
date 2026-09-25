import type { SiteContent } from '@/types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function Quality({ content }: { content: SiteContent }) {
  const { quality } = content;
  return (
    <section id="quality" className="section">
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <SectionHeading kicker={quality.kicker} title={quality.title} intro={quality.intro} />
        <div className="grid gap-6 sm:grid-cols-2">
          {quality.pillars.map((pillar, i) => (
            <Reveal
              key={pillar.title}
              delay={(i % 2) * 90}
              className="flex flex-col gap-3 rounded border border-border bg-surface p-7"
            >
              <h3 className="text-base font-semibold text-text">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{pillar.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
