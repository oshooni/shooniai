// 글 목록과 본문을 읽어오는 곳
// content/blog/ 폴더에 파일을 하나 넣으면 페이지가 자동으로 생깁니다.
//   .md   → 마크다운으로 써도 되고
//   .html → HTML 로 써도 됩니다
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

// YAML 이 날짜를 Date 객체로 바꿔버려서 화면에 이상하게 찍히는 걸 막습니다.
function toISODate(v) {
  if (!v) return '';
  if (v instanceof Date) {
    const p = (n) => String(n).padStart(2, '0');
    return `${v.getUTCFullYear()}-${p(v.getUTCMonth() + 1)}-${p(v.getUTCDate())}`;
  }
  const m = String(v).match(/\d{4}-\d{2}-\d{2}/);
  return m ? m[0] : String(v);
}

const DIR = path.join(process.cwd(), 'content', 'blog');

export function getSlugs() {
  if (!fs.existsSync(DIR)) return [];
  return fs.readdirSync(DIR)
    .filter((f) => f.endsWith('.md') || f.endsWith('.html'))
    .map((f) => f.replace(/\.(md|html)$/, ''));
}

export function getPost(slug) {
  for (const ext of ['.md', '.html']) {
    const file = path.join(DIR, slug + ext);
    if (!fs.existsSync(file)) continue;
    const { data, content } = matter(fs.readFileSync(file, 'utf8'));
    return {
      slug,
      html: ext === '.md' ? marked.parse(content) : content,
      title: data.title || slug,
      seoTitle: data.seoTitle || `${data.title} | 노슈니`,
      description: data.description || '',
      category: data.category || 'AI 실무',
      published: toISODate(data.published),
      updated: toISODate(data.updated || data.published),
      readingTime: data.readingTime || 5,
      draft: !!data.draft,
    };
  }
  return null;
}

export function getAllPosts() {
  return getSlugs()
    .map(getPost)
    .filter((p) => p && !p.draft)
    .sort((a, b) => (b.published || '').localeCompare(a.published || ''));
}

export function formatDate(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  return `${y}년 ${Number(m)}월 ${Number(d)}일`;
}
