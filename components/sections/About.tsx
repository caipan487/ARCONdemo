import { Photo } from '@/components/ui/Photo';
import type { SiteContent } from '@/types';
import { Reveal } from '@/components/ui/Reveal';

export function About({ content }: { content: SiteContent }) {
  const { about } = content;
  return (
    <section id="about" className="section">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="flex flex-col gap-6">
          <span className="kicker">{about.kicker}</span>
          <h2 className="text-h2 text-text">{about.title}</h2>
          <p className="text-lg leading-relaxed text-text/85">{about.lead}</p>
          {about.body.map((p) => (
            <p key={p} className="leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </Reveal>
        <Reveal delay={120} className="relative aspect-[4/5] overflow-hidden rounded">
          <Photo
            src="/media/photos/about.jpg"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-border" />
        </Reveal>
      </div>
    </section>
  );
}
