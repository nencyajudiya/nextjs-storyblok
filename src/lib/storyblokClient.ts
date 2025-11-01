// src/lib/storyblokClient.ts

import {
  storyblokInit,
  apiPlugin,
  getStoryblokApi,
} from '@storyblok/react/rsc';

import { Page } from '@/components/Page';
import { Hero } from '@/components/Hero';
import { Grid } from '@/components/Grid';
import { RecommendedTours } from '@/components/RecommendedTours';
import { Tour } from '@/components/Tour';
import { Feature } from '@/components/Feature';
import { Testimonial } from '@/components/Testimonial';

const cachedFetch = (input: any, init?: any): Promise<Response> => {
  return fetch(input, {
    ...init,
    cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache',
  });
};

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN || '',
  use: [apiPlugin],
  apiOptions: {
    fetch: cachedFetch,
  },
  components: {
    page: Page,
    hero: Hero,
    grid: Grid,
    feature: Feature,
    recommended_tours: RecommendedTours,
    testimonial: Testimonial,
    tour: Tour,
  },
  enableFallbackComponent: true,
});

export { getStoryblokApi };
