import { getAllPosts } from '../lib/posts';

export default function sitemap() {
  const posts = getAllPosts().map((p) => ({
    url: `https://noshooni.com/blog/${p.slug}`,
    lastModified: p.updated || p.published,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  return [
    { url: 'https://noshooni.com/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    ...posts,
  ];
}
