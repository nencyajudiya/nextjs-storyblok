// src/app/page.tsx

import { StoryblokStory } from '@storyblok/react/rsc';
import { getStoryblokApi } from '../lib/storyblokClient';
import { draftMode } from 'next/headers';

const fetchHomePage = async () => {
  const { isEnabled } = await draftMode();
  const client = getStoryblokApi();
  const response = await client.getStory('home', {
    version:
      process.env.NODE_ENV === 'development' || isEnabled
        ? 'draft'
        : 'published',
    resolve_relations: ['recommended_tours.tours'],
  });
  return response.data.story;
};

export default async function HomePage() {
  const story = await fetchHomePage();

  if (!story) {
    return (
      <div>
        <h1>Home not found</h1>
        <p>
          No Storyblok entry found for slug: <b>home</b>
        </p>
      </div>
    );
  }

  return (
    <StoryblokStory
      bridgeOptions={{ resolveRelations: ['recommended_tours.tours'] }}
      story={story}
    />
  );
}
