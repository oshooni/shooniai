import { getAllPosts } from '../lib/posts';

const SITE = 'https://noshooni.com';

export default function sitemap() {
  const posts = getAllPosts().map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: p.updated || p.published,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  return [
    { url: `${SITE}/`,      lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${SITE}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/1day`,  lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${SITE}/class`, lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${SITE}/blog`,  lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    ...posts,
  ];
}
