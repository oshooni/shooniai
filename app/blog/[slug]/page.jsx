import { notFound } from 'next/navigation';
import { getSlugs, getPost, formatDate } from '../../../lib/posts';
import Author from '../../../components/Author';

export function generateStaticParams() {
  return getSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const p = getPost(params.slug);
  if (!p) return {};
  return {
    title: p.seoTitle,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: {
      type: 'article',
      title: p.seoTitle,
      description: p.description,
      url: `/blog/${p.slug}`,
      images: ['/og.jpg'],
      publishedTime: p.published,
      modifiedTime: p.updated,
    },
  };
}

export default function Post({ params }) {
  const p = getPost(params.slug);
  if (!p) notFound();

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: p.title,
    description: p.description,
    datePublished: p.published,
    dateModified: p.updated,
    author: { '@type': 'Person', name: '오수인 (노슈니)', url: 'https://noshooni.com/about' },
    publisher: { '@type': 'Organization', name: '노슈니' },
    mainEntityOfPage: `https://noshooni.com/blog/${p.slug}`,
  };

  return (
    <main className="wrap">
      <div className="back"><a href="/blog">← 블로그 목록</a></div>

      <header className="head">
        <span className="chip">{p.category}</span>
        <h1>{p.title}</h1>
        <div className="meta">
          <span>{formatDate(p.published)}</span>
          <span className="dot">·</span>
          <span>읽는 시간 {p.readingTime}분</span>
          <span className="dot">·</span>
          <span>노슈니</span>
        </div>
      </header>

      <article dangerouslySetInnerHTML={{ __html: p.html }} />

      <Author />

      <div className="updated">
        작성 {formatDate(p.published)}
        {p.updated !== p.published && ` · 최종 수정 ${formatDate(p.updated)}`}
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </main>
  );
}
