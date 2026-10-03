import { dmsPlanning, dmsRoadmap } from '../data/dms';
import { ExpandableItem } from './ExpandableItem';
import { Reveal } from './Reveal';

export function DmsPlanning() {
  return <section className="detail-section" aria-labelledby="dms-planning-heading">
    <div className="container">
      <Reveal>
        <span className="kicker">PLANNING / SCOPE & DECISIONS</span>
        <h2 className="section-heading" id="dms-planning-heading">기획 배경과 범위 결정</h2>
        <p className="lede">운전자의 경보부터 관리자의 기록 확인까지.<br />핵심 흐름을 먼저 만들고, 검증 범위를 넓혔습니다.</p>
        <div className="narrative">
          {dmsPlanning.map((item, index) => <ExpandableItem key={item.title} number={String(index + 1).padStart(2, '0')} title={item.title}><p>{item.detail}</p></ExpandableItem>)}
        </div>
      </Reveal>
      <Reveal>
        <h3 className="small-heading" style={{ marginTop: 65, marginBottom: 20 }}>구현과 검증, 확장 계획</h3>
        <p className="body-copy" style={{ marginBottom: 20 }}>개발 범위를 구분한 로드맵입니다. 모델 학습 실험의 Phase 번호와는 별개입니다.</p>
        <div className="accordion-list">
          {dmsRoadmap.map(item => <ExpandableItem key={item.stage} number={item.stage.slice(0, 2)} title={item.title}>
            <p><span className="kicker" style={{ display: 'block', marginBottom: 12 }}>{item.stage}</span>{item.detail}</p>
            <p className="body-copy">{item.boundary}</p>
          </ExpandableItem>)}
        </div>
      </Reveal>
    </div>
  </section>;
}
