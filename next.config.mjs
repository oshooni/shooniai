const PAGES = ['about', '1day', 'class', '33', 'test'];

const nextConfig = {
  async redirects() {
    return [
      // 예전 주소를 새 주소로 (색인 유지)
      { source: '/edu', destination: '/', permanent: true },
      { source: '/edu/', destination: '/', permanent: true },
    ];
  },
  async rewrites() {
    return {
      // 파일·페이지보다 먼저 검사 — 정적 HTML 페이지를 깨끗한 주소로 서비스
      beforeFiles: [
        { source: '/', destination: '/_pages/home.html' },
        ...PAGES.map((p) => ({ source: `/${p}`, destination: `/_pages/${p}.html` })),
      ],
    };
  },
  async headers() {
    return [
      // 원본 파일 주소가 검색에 중복으로 잡히지 않게
      { source: '/_pages/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex' }] },
    ];
  },
};
export default nextConfig;
