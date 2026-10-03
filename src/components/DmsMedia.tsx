const media = (file: string) => `${import.meta.env.BASE_URL}media/dms/${file}`;

export function DmsMedia() {
  return <div style={{ marginTop: 48 }}>
    <span className="kicker">APP DEMO / PROTOTYPE TEST</span>
    <h3 className="small-heading" id="dms-demo-heading" style={{ marginTop: 12, marginBottom: 24 }}>일반 환경·졸음 인식 테스트</h3>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
      <figure style={{ flex: '1 1 280px', minWidth: 0, maxWidth: 480, margin: 0 }}>
        <video controls playsInline preload="none" poster={media('normal-drowsiness-poster.webp')} aria-labelledby="dms-demo-heading" aria-describedby="dms-demo-description" style={{ display: 'block', width: '100%', maxHeight: '75vh', objectFit: 'contain', background: '#080f20', borderRadius: 16 }}>
          <source src={media('normal-drowsiness-blurred.mp4')} type="video/mp4" />
          이 브라우저는 영상 재생을 지원하지 않습니다.
        </video>
      </figure>
      <div style={{ flex: '1 1 280px', minWidth: 0 }}>
        <p className="lede" id="dms-demo-description">일반 환경에서 인식 상태를 확인하고,<br />졸음 테스트에 따른 경보 변화를 기록했습니다.</p>
        <p className="body-copy">최종 프로토타입의 화면녹화 · 약 15초</p>
        <a className="text-link" href={media('normal-drowsiness-blurred.mp4')} target="_blank" rel="noreferrer">영상 새 창으로 보기 ↗</a>
      </div>
    </div>
  </div>;
}
