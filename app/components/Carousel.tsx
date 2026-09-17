import { supabase } from '../../src/lib/supabaseClient';
import { cleanImageUrl } from '../../src/lib/carouselUtils';
import CarouselHeroClient, { SlideItem } from './CarouselHeroClient';

export default async function CarouselHero() {
  const { data, error } = await supabase
    .from('carousel_slides')
    .select('id, title, subtitle, img_url, btn_text')
    .eq('active', true)
    .order('sort_order', { ascending: true });

  const slides: SlideItem[] =
    !error && data && data.length > 0
      ? data.map((slide) => ({
          id: slide.id,
          src: cleanImageUrl(slide.img_url),
          alt: slide.title,
          title: slide.title,
          description: slide.subtitle || '',
          buttonText: slide.btn_text || 'Ver Catálogo',
        }))
      : [];

  return <CarouselHeroClient initialSlides={slides} />;
}