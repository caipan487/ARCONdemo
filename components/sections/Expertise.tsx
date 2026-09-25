import type { SiteContent } from '@/types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function Expertise({ content }: { content: SiteContent }) {
  const { expertise } = content;
  return (
    <section id="expertise" className="section">
      <div className="container-page">
        <SectionHeading kicker={expertise.kicker} title={expertise.title} intro={expertise.intro} />
        <div className="mt-14 grid gap-px overflow-hidden border border-border sm:grid-cols-2">
          {expertise.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 2) * 90}
              className="flex flex-col gap-3 bg-bg p-8 lg:p-10"
            >
              <div className="flex items-center gap-4">
                <span className="font-display text-sm font-bold text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="hairline flex-1" />
              </div>
              <h3 className="text-h3 text-text">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
