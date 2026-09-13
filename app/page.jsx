export const metadata = { robots: { index: false } };

export default function Preview() {
  return (
    <main className="wrap" style={{ paddingTop: 60, paddingBottom: 80 }}>
      <header className="head">
        <span className="chip">미리보기</span>
        <h1>새 블로그 미리보기</h1>
        <div className="meta"><span>아직 고객에게 공개된 주소가 아닙니다</span></div>
      </header>
      <p style={{ marginBottom: 24 }}>
        블로그를 글만 쓰면 페이지가 생기는 구조로 옮기는 중입니다.
        지금 운영 중인 사이트는 그대로 돌아가고 있습니다.
      </p>
      <p><a className="btn p" href="/blog">블로그 보러 가기</a></p>
    </main>
  );
}
