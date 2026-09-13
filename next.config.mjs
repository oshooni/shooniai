const nextConfig = {
  async redirects() {
    return [
      // 예전 주소를 새 주소로 (색인 유지)
      { source: '/edu', destination: '/', permanent: true },
      { source: '/edu/', destination: '/', permanent: true },
    ];
  },
};
export default nextConfig;
