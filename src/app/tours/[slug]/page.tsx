import { StoryblokStory } from '@storyblok/react/rsc';
import { getStoryblokApi } from '../../../lib/storyblokClient';

const fetchTourPage = async (slug: string) => {
  const client = getStoryblokApi();

  try {
    const { data } = await client.get(`cdn/stories/tours/${slug}`, {
      version: 'draft',
    });
    return data.story;
  } catch (err) {
    console.error('Storyblok fetch error:', err);
    return null;
  }
};

export default async function TourPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = await fetchTourPage(slug);

  if (!story) {
    return (
      <div>
        <h1>Tour not found</h1>
        <p>
          No Storyblok entry found for slug: <b>{slug}</b>
        </p>
      </div>
    );
  }

  return <StoryblokStory story={story} />;
}
