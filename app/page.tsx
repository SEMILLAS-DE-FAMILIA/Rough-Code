import CarouselHero from './components/Carousel';
import HomeClient from './components/HomeClient';

export const revalidate = 60;

export default function Page() {
  return <HomeClient carouselSlot={<CarouselHero />} />;
}