import CarouselHero from './components/Carousel';
import HomeClient from './components/HomeClient';

export default function Page() {
  return <HomeClient carouselSlot={<CarouselHero />} />;
}