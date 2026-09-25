import Image, { type ImageProps } from 'next/image';
import { BLUR_DATA_URL } from '@/lib/image';

/**
 * next/image с графитовой blur-заглушкой по умолчанию.
 * Мгновенный превью-фон вместо пустого места, пока грузится фото.
 * Все пропсы next/image поддерживаются (fill, sizes, priority и т.д.).
 */
export function Photo(props: ImageProps) {
  return <Image placeholder="blur" blurDataURL={BLUR_DATA_URL} {...props} />;
}
