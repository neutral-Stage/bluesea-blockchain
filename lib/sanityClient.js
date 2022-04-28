import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'b0wgxiii',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skx1o3srD9I7CbeZRE5aT5BWKp8mCbhFsYAdtgOjjuqYNuu3XUNtAhlWiXCNeawWGoEOHka2ZTqdzJQ0l282DkkHs7hXonec0t0Uoz4rIufotxVBTfu1sQLyZ7GMPeKVA6xlabamDoXdiyL9KC4y2wTSDS03W1aCQnBuwNAv7kxoJMb3LRlK',
  useCdn: false,
})
