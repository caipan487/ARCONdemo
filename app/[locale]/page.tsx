import { isLocale, type Locale } from '@/lib/i18n/config';
import { getContent } from '@/content/site';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { About } from '@/components/sections/About';
import { FullCycle } from '@/components/sections/FullCycle';
import { Services } from '@/components/sections/Services';
import { Sectors } from '@/components/sections/Sectors';
import { Expertise } from '@/components/sections/Expertise';
import { Projects } from '@/components/sections/Projects';
import { Quality } from '@/components/sections/Quality';
import { Certifications } from '@/components/sections/Certifications';
import { Partners } from '@/components/sections/Partners';
import { Geography } from '@/components/sections/Geography';
import { News } from '@/components/sections/News';
import { Contact } from '@/components/sections/Contact';

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'ru';
  const content = getContent(locale);

  return (
    <>
      <Hero locale={locale} content={content} />
      <Stats content={content} />
      <About content={content} />
      <FullCycle content={content} />
      <Services locale={locale} content={content} />
      <Sectors content={content} />
      <Expertise content={content} />
      <Projects locale={locale} content={content} />
      <Quality content={content} />
      <Certifications content={content} />
      <Partners content={content} />
      <Geography content={content} />
      <News locale={locale} content={content} />
      <Contact locale={locale} content={content} />
    </>
  );
}
