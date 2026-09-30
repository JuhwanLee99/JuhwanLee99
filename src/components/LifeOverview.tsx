import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';
import { runningMedia } from '../data/running';
import { baseballMedia } from '../data/baseball';

export function LifeOverview({ page = false }: { page?: boolean }) {
  const Heading = page ? 'h1' : 'h2';
  return <section className={`life-overview${page ? ' life-overview--page' : ''}`} aria-labelledby="life-heading">
    <div className="container">
      <Reveal><div className="life-section-head">
        <div><span className="kicker">LIFE / OUTSIDE THE PROJECTS</span><Heading className="section-heading" id="life-heading">일상과 관심사</Heading><p className="body-copy">직접 만들고, 달리고, 함께하는 시간.</p></div>
        {!page && <Link className="text-link" to="/life">일상 살펴보기 <span aria-hidden="true">↗</span></Link>}
      </div></Reveal>
      <div className="life-card-grid">
        <Reveal><Link className="life-card life-card--running" to="/life/running">
          <div className="life-card-media"><img src={runningMedia('race-samil-finish.webp')} alt="마라톤 완주 후 기록 패널과 함께 찍은 사진" loading="lazy" /><span className="life-card-label">RUNNING</span></div>
          <div className="life-card-body"><span className="kicker">01 / RUN</span><h3>러닝</h3><p>평소의 러닝부터 5km, 10km, 하프 대회까지.</p><span className="life-card-action">사진과 기록 보기 <span aria-hidden="true">↗</span></span></div>
        </Link></Reveal>
        <Reveal><Link className="life-card life-card--running" to="/life/homelab">
          <div className="life-card-media life-homelab-art" aria-hidden="true"><div className="life-server"><span /><span /><span /></div><span className="life-card-label">HOME LAB</span></div>
          <div className="life-card-body"><span className="kicker">02 / BUILD</span><h3>컴퓨터와 NAS</h3><p>직접 조립한 컴퓨터로 NAS를 구성하고 서비스를 운영합니다.</p>
            <span className="life-card-action">조립부터 서버 운영까지 <span aria-hidden="true">↗</span></span>
          </div>
        </Link></Reveal>
        <Reveal><Link className="life-card life-card--running" to="/life/baseball">
          <div className="life-card-media"><img src={baseballMedia('warmup.webp')} alt="유니폼을 입고 배트를 들고 있는 야구 활동 사진" loading="lazy" /><span className="life-card-label">BASEBALL</span></div>
          <div className="life-card-body"><span className="kicker">03 / PLAY</span><h3>야구</h3><p>팀원들과 소통하고 각자의 역할을 수행하며 협업 능력을 기르고 있습니다.</p><span className="life-card-action">사진과 영상 보기 <span aria-hidden="true">↗</span></span></div>
        </Link></Reveal>
      </div>
    </div>
  </section>;
}
