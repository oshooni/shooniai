import { getAllPosts } from '../../lib/posts';

export const metadata = {
  title: '노슈니 블로그 — AI 실무 이야기',
  description: '클로드와 클로드 코드로 실제로 만들고 부딪힌 것들. 비전공자 기준으로 왜 그렇게 하는지까지 적습니다.',
  alternates: { canonical: '/blog' },
  openGraph: { url: '/blog', images: ['/og.jpg'] },
};

function dot(iso) {
  return (iso || '').replaceAll('-', '.');
}

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <main className="wrap" style={{ paddingTop: 40, paddingBottom: 72 }}>
      <header className="head">
        <span className="chip">블로그</span>
        <h1>AI 실무 이야기</h1>
        <div className="meta"><span>글 {posts.length}편</span></div>
      </header>

      <div className="post-list">
        {posts.map((p) => (
          <a key={p.slug} className="post" href={`/blog/${p.slug}`}>
            <div className="pmeta">
              <span className="cat mono">{p.category}</span>
              <span className="mono">{dot(p.published)}</span>
            </div>
            <h2>{p.title}</h2>
            <p>{p.description}</p>
            <span className="more">읽기 →</span>
          </a>
        ))}
      </div>
    </main>
  );
}
