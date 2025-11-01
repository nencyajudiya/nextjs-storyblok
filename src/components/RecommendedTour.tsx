// src/components/RecommendedTour
import Link from 'next/link';

export const RecommendedTour = ({ blok }: any) => {
  const image = blok.main_image || blok.content?.main_image;
  const name = blok.content?.name || blok.name;
  const price = blok.content?.price || blok.price;
  const location = blok.content?.location || blok.location;
  const slug = blok.full_slug || blok.slug;

  return (
    <div className='bg-white rounded-sm shadow'>
      <img
        src={`${image?.filename}`}
        alt={image?.alt || name}
        className='aspect-video object-cover w-full'
        loading='lazy'
      />

      <div className='p-8'>
        <div className='flex gap-4 justify-between text-lg font-bold'>
          <h3>{name}</h3>
          <p>
            {Number(price).toLocaleString('en-US', {
              style: 'currency',
              currency: 'INR',
              minimumFractionDigits: 0,
            })}
          </p>
        </div>
        <p className='text-gray-700 uppercase font-bold mt-2 text-sm tracking-wide'>
          {location}, India
        </p>
        <Link
          href={`/${slug}`}
          className='font-bold text-base mt-8 block underline'
        >
          View Tour
        </Link>
      </div>
    </div>
  );
};
