import { Hero } from '../sections/Hero';
import { PopularItems } from '../sections/PopularItems';
import { LocationContact } from '../sections/LocationContact';

export function HomePage() {
  return (
    <>
      <Hero />
      <PopularItems />
      <LocationContact />
    </>
  );
}
