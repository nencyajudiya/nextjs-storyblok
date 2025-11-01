import { renderRichText } from '@storyblok/react';

export const Tour = ({ blok }: any) => {
  return (
    <main className='container mx-auto px-4 w-full pt-32 pb-16'>
      <h1 className='text-3xl md:text-5xl font-bold'>{blok.name}</h1>

      <img
        src={blok.main_image?.filename}
        alt={blok.main_image?.alt || blok.name}
        className='aspect-video flex justify-center mx-auto mt-12'
      />

      <p className='mt-12 text-lg md:text-2xl md:leading-relaxed'>
        {blok.introduction}
      </p>

      <div
        className='mt-16 rich-text-content'
        dangerouslySetInnerHTML={{ __html: renderRichText(blok.body) || '' }}
      />
    </main>
  );
};
