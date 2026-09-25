import { Reveal } from './Reveal';

interface SectionHeadingProps {
  kicker: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  invert?: boolean;
}

export function SectionHeading({ kicker, title, intro, align = 'left', invert }: SectionHeadingProps) {
  return (
    <Reveal
      className={`flex max-w-3xl flex-col gap-4 ${align === 'center' ? 'mx-auto items-center text-center' : ''}`}
    >
      <span className="kicker">{kicker}</span>
      <h2 className={`text-h2 ${invert ? 'text-bg' : 'text-text'}`}>{title}</h2>
      {intro ? (
        <p className={`text-base leading-relaxed ${invert ? 'text-bg/70' : 'text-muted'}`}>{intro}</p>
      ) : null}
    </Reveal>
  );
}
