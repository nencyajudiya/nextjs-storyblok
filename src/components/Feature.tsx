// Feature.tsx

import { storyblokEditable } from '@storyblok/react/rsc';

export const Feature = ({ blok }: any) => (
  <section
    {...storyblokEditable(blok)}
    className='bg-white p-8 rounded-sm shadow'
  >
    <h3 className='font-bold text-3xl'>{blok.headline}</h3>
    <p className='mt-6 text-lg '>{blok.content}</p>
  </section>
);
