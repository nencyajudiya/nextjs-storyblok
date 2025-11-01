// src/app/tours/page

import { RecommendedTour } from '@/components/RecommendedTour';
import { getStoryblokApi } from '@storyblok/react';
import { StoryblokStory } from '@storyblok/react/rsc';

const fetchToursPage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory('tours', {
    version: process.env.NODE_ENV === 'development' ? 'draft' : 'published',
  });
  return response.data.story;
};

const fetchAllTours = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: 'tour',
    version: process.env.NODE_ENV === 'development' ? 'draft' : 'published',
    starts_with: 'tours/',
  });
  return response.data.stories;
};

export default async function ToursPage() {
  const story = await fetchToursPage();
  const allTours = await fetchAllTours();

  if (!story) {
    return (
      <div>
        <h1>Tours not found</h1>
        <p>
          No Storyblok entry found for slug: <b>Tours</b>
        </p>
      </div>
    );
  }

  return (
    <div>
      <StoryblokStory story={story} />
      <div className='grid md:grid-cols-2 gap-8 container mx-auto px-4 w-full py-16'>
        {allTours.map((tour: any) => {
          return <RecommendedTour blok={tour} key={tour.uuid} />;
        })}
      </div>
    </div>
  );
}
