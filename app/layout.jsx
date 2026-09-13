import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GA_ID = 'G-37CTEBRVP9';

export const metadata = {
  metadataBase: new URL('https://noshooni.com'),
  title: { default: '노슈니 블로그 — AI 실무 이야기', template: '%s' },
  description: '비전공자를 위한 Claude · Claude Code · 콘텐츠 자동화 실무 기록.',
  openGraph: { type: 'website', siteName: '노슈니', locale: 'ko_KR' },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`,
          }}
        />
      </body>
    </html>
  );
}
