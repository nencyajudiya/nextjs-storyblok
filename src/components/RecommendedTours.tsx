// src/components/RecommendedTours.tsx
import { RecommendedTour } from './RecommendedTour';

export const RecommendedTours = ({ blok }: any) => {
  return (
    <section className='py-16 container mx-auto w-full px-4'>
      <h2 className='text-3xl md:text-4xl font-bold text-center'>
        {blok.headline}
      </h2>
      <div className='grid md:grid-cols-2 gap-8 mt-16'>
        {blok.tours.map((tour: any) => (
          <RecommendedTour blok={tour} key={tour.uuid} />
        ))}
      </div>
    </section>
  );
};
