const SITE = 'https://noshooni.com';

export default function Author() {
  return (
    <div className="author">
      <div className="author-in">
        <span className="author-k">이 글을 쓴 사람</span>
        <h4>노슈니 (오수인)</h4>
        <p>비개발자를 대상으로 클로드와 클로드 코드를 가르치는 AI 강사입니다. 정규 코호트 수업에서는 터미널 설치부터 시작해, 수강생이 직접 만든 사이트를 도메인 연결까지 마치고 나가는 것을 목표로 합니다.</p>
        <p>기업 대상 사내 AI 교육과 강의 문의도 아래에서 받고 있습니다.</p>
        <div className="btns">
          <a className="btn p" href={`${SITE}/1day/`}>클래스 보기</a>
          <a className="btn g" href={`${SITE}/about`}>강사 소개</a>
          <a className="btn g" href={`${SITE}/class/`}>정규 강의</a>
        </div>
      </div>
    </div>
  );
}
