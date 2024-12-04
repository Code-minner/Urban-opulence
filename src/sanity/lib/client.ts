import { createClient } from 'next-sanity'
import sanityClient from '@sanity/client';
import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId: 'gbl5qf4a',  // Replace with your Sanity project ID
  dataset: 'production',       // Replace with your dataset name
  useCdn: true,                // `true` for faster cached results, `false` for fresh data
  apiVersion: '2024-11-21',// Set to false if statically generating pages, using ISR or tag-based revalidation
})
