// src/app/page.tsx

import { StoryblokStory } from '@storyblok/react/rsc';
import { getStoryblokApi } from '../lib/storyblokClient';

const fetchHomePage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory('home', {
    version: process.env.NODE_ENV === 'development' ? 'draft' : 'published',
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

  return <StoryblokStory story={story} />;
}
