import { StoryblokStory } from '@storyblok/react/rsc';
import { getStoryblokApi } from '../../../lib/storyblokClient';

export const generateStaticParams = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: 'tour',
    version: process.env.NODE_ENV === 'development' ? 'draft' : 'published',
  });

  return response.data.stories.map((story) => ({ slug: story.slug }));
};

const fetchTourPage = async (slug: string) => {
  const client = getStoryblokApi();

  try {
    const { data } = await client.get(`cdn/stories/tours/${slug}`, {
      version: process.env.NODE_ENV === 'development' ? 'draft' : 'published',
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
