'use client';
import { useEffect, useState } from 'react';

const IG    = 'https://www.instagram.com/shooni_ai/';
const ALARM = 'https://shoocreamvillage.notion.site/1675e8593cb68236869b81175250da57?pvs=105';
const REVIEW= 'https://shoocreamvillage.notion.site/aireview?v=3b85e8593cb680afabf7000c0745be0d&source=copy_link';
const ASK   = 'https://shoocreamvillage.notion.site/2325e8593cb68128b06eedc97a0aa64b?pvs=105';

const MENU = [
  { label: '강사 소개',    href: '/about' },
  { label: '알림 신청',    href: ALARM,  ext: true },
  { label: '원데이 클래스', href: '/1day' },
  { label: '정규 강의',    href: '/class' },
  { label: '강의·컨설팅',  href: '/#products' },
  { label: '블로그',       href: '/blog', active: true },
  { label: '후기',         href: REVIEW, ext: true },
  { label: '문의',         href: ASK,    ext: true },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => () => document.body.classList.remove('menu-open'), []);

  const toggle = () => document.body.classList.toggle('menu-open');
  const close  = () => document.body.classList.remove('menu-open');

  const ext = (m) => (m.ext ? { target: '_blank', rel: 'noopener' } : {});

  return (
    <>
      <a className="topbar" href={IG} target="_blank" rel="noopener">
        관련 소식을 가장 빠르게<span className="tb-x"> 받는 곳 · 노슈니</span> 인스타그램{' '}
        <b>@shooni_ai</b> <span className="arr">→</span>
      </a>

      <header className={scrolled ? 'site scrolled' : 'site'}>
        <a href="/" className="brand" aria-label="NOSHOONI">
          <img
            fetchpriority="high" decoding="async" width="427" height="89"
            src="/images/noshooni-5f95636263.webp" alt="NOSHOONI" style={{ height: 24 }}
          />
        </a>
        <nav className="topnav" aria-label="주요 메뉴">
          {MENU.map((m) => (
            <a key={m.label} href={m.href} className={m.active ? 'active' : undefined} {...ext(m)}>
              {m.label}
            </a>
          ))}
        </nav>
        <button className="menu-toggle" aria-label="메뉴 열기" onClick={toggle}>
          MENU<span className="plus">+</span>
        </button>
      </header>

      <nav className="overlay" aria-label="주요 메뉴">
        {MENU.map((m, i) => (
          <a key={m.label} href={m.href} onClick={close} {...ext(m)}>
            {m.label}<span className="idx">{String(i + 1).padStart(2, '0')}</span>
          </a>
        ))}
        <div className="ov-foot">
          <span className="mono">NOSHOONI</span>
          <span className="mono">Seoul · Sinsa</span>
        </div>
      </nav>
    </>
  );
}
