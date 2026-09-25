import type { SiteContent } from '@/types';
import { Reveal } from '@/components/ui/Reveal';

export function Stats({ content }: { content: SiteContent }) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="container-page grid grid-cols-2 gap-px overflow-hidden lg:grid-cols-4">
        {content.stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 80}
            className="flex flex-col gap-2 py-10 lg:py-14"
          >
            <span className="font-display text-4xl font-bold text-text lg:text-5xl">
              {stat.value}
            </span>
            <span className="text-sm font-medium text-text/90">{stat.label}</span>
            {stat.note && <span className="text-xs text-muted">{stat.note}</span>}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
