export default function Footer() {
  return (
    <footer>
      <div className="f-in">
        <div className="f-brand">노슈니<i className="flag" /></div>
        <p className="f-desc">비개발자도 AI로 자기 서비스를 만들어 세상에 내보내게 하는 소수정예 AI 클래스.</p>
        <div className="f-links">
          <a href="/">홈</a>
          <a href="/about">강사 소개</a>
          <a href="/1day">원데이 클래스</a>
          <a href="/class">정규 강의</a>
          <a href="/blog">블로그</a>
          <a href="https://www.instagram.com/no_shooni" target="_blank" rel="noopener">인스타그램</a>
          <a href="http://pf.kakao.com/_vCGPX" target="_blank" rel="noopener">카카오톡 채널</a>
        </div>
        <div className="f-bot">
          <span>© 2026 노슈니 · 오수인</span>
          <span>AI 교육 · 클로드 코드 · 콘텐츠 자동화</span>
        </div>
      </div>
    </footer>
  );
}
