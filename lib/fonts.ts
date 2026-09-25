import { Inter, Manrope } from 'next/font/google';

export const fontSans = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-sans',
});

export const fontDisplay = Manrope({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
});
