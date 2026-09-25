import type { SiteContent } from '@/types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

function initials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
}

export function Partners({ content }: { content: SiteContent }) {
  const { partners } = content;
  return (
    <section id="partners" className="section border-t border-border bg-surface">
      <div className="container-page">
        <SectionHeading kicker={partners.kicker} title={partners.title} intro={partners.intro} />
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden border border-border sm:grid-cols-3 lg:grid-cols-6">
          {partners.items.map((partner, i) => (
            <Reveal
              key={partner.name}
              delay={(i % 6) * 60}
              className="flex flex-col items-center justify-center gap-3 bg-surface px-4 py-10 text-center"
            >
              {/* Логотип-образец: монограмма (реальные логотипы — с разрешения заказчиков) */}
              <span className="flex h-14 w-14 items-center justify-center rounded border border-border font-display text-lg font-bold text-muted">
                {initials(partner.name)}
              </span>
              <span className="text-xs leading-tight text-text/80">{partner.name}</span>
              <span className="text-[10px] uppercase tracking-kicker text-muted/70">{partner.kind}</span>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-muted/80">{partners.note}</p>
      </div>
    </section>
  );
}
