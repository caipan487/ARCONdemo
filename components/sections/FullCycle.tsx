import type { SiteContent } from '@/types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function FullCycle({ content }: { content: SiteContent }) {
  const { fullCycle } = content;
  return (
    <section className="section border-y border-border bg-surface">
      <div className="container-page">
        <SectionHeading kicker={fullCycle.kicker} title={fullCycle.title} intro={fullCycle.intro} />
        <div className="mt-14 grid gap-px overflow-hidden border border-border md:grid-cols-2 lg:grid-cols-4">
          {fullCycle.steps.map((step, i) => (
            <Reveal
              key={step.no}
              delay={i * 80}
              className="group flex flex-col gap-4 bg-surface p-8 transition-colors hover:bg-surface-2"
            >
              <span className="font-display text-3xl font-bold text-accent">{step.no}</span>
              <h3 className="text-h3 text-text">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
