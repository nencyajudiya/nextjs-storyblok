// src/components/Grid.tsx

import { StoryblokComponent } from '@storyblok/react';

export const Grid = ({ blok }: any) => {
  return (
    <section className='bg-blue-100 py-16'>
      <div className='container mx-auto w-full px-4'>
        <h2 className='text-3xl md:text-4xl font-bold'>{blok.headline}</h2>
        <div className='px-5 grid md:grid-flow-col auto-cols-fr mt-12 gap-8'>
          {blok.items?.map((nestedBlok: any) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </section>
  );
};
