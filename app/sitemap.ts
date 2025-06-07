import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://wireframes.internet.dev',
      lastModified: new Date(),
    },
  ];
}
