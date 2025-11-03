// src/components/Page.tsx

import { StoryblokComponent, storyblokEditable } from '@storyblok/react';

export const Page = ({ blok }: any) => {
  const contentBlocks = blok?.blocks;

  if (!contentBlocks) return null;

  return (
    <main {...storyblokEditable(blok)}>
      {contentBlocks.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};
