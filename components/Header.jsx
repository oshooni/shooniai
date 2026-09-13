'use client';
import { useState } from 'react';

const MENU = [
  { label: '강사 소개',     href: '/about' },
  { label: '원데이 클래스', href: '/1day' },
  { label: '정규 강의',     href: '/class' },
  { label: '블로그',        href: '/blog', current: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="topbar">
        <a href="https://www.instagram.com/no_shooni" target="_blank" rel="noopener">
          인스타그램 @no_shooni <span>· 클래스 소식이 제일 먼저 올라갑니다</span>
        </a>
      </div>
      <nav className="nav">
        <div className="nav-in">
          <a className="brand" href="/">노슈니<i className="flag" /></a>
          <div className="menu">
            {MENU.map((m) => (
              <a key={m.label} href={m.href} className={m.current ? 'on' : undefined}>{m.label}</a>
            ))}
          </div>
          <button className="burger" aria-expanded={open} aria-label="메뉴 열기" onClick={() => setOpen(!open)}>☰</button>
        </div>
        <div className="sheet" style={{ display: open ? 'block' : undefined }}>
          {MENU.map((m) => (
            <a key={m.label} href={m.href} className={m.current ? 'on' : undefined}>{m.label}</a>
          ))}
        </div>
      </nav>
    </>
  );
}
