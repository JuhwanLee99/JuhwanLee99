import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { homelabRoles, homelabSteps, nasSpecs } from '../data/homelab';

function ServerDiagram() {
  return <div className="homelab-diagram" role="group" aria-label="Cloudflare를 활용한 외부 연결, TrueNAS 기반 NAS, Docker 서비스와 Portainer 관리 구성">
    <div className="homelab-diagram-heading"><span className="kicker">HOME SERVER / 구성도</span><span className="homelab-diagram-label">직접 조립 · 직접 운영</span></div>
    <div className="homelab-external"><strong>Cloudflare</strong><span>외부 연결</span></div>
    <div className="homelab-connector" aria-hidden="true">↓</div>
    <div className="homelab-server-box"><span className="kicker">CUSTOM-BUILT NAS</span><h3>TrueNAS SCALE</h3><p>i5-11500 · DDR4 16GB · M.2 SSD</p><div className="homelab-docker"><span className="meta-label">Docker / 서비스 실행</span><div className="homelab-service-pair"><strong>AUBL Backend<span>Java</span></strong><span aria-hidden="true">↔</span><strong>Database<span>MariaDB</span></strong></div></div><div className="homelab-management"><strong>Portainer</strong><span>컨테이너 관리</span></div></div>
  </div>;
}

export function HomelabPage() {
  return <div className="running-page homelab-page">
    <section className="running-hero"><div className="container"><Link className="text-link running-back" to="/life">← 일상과 관심사</Link><div className="running-hero-grid"><Reveal><span className="kicker">LIFE / HOME LAB</span><h1>조립에서<br />서버 운영까지</h1><p className="lede">직접 만든 컴퓨터에 TrueNAS를 설치하고,<br />실제 서비스가 돌아가는 NAS로 활용합니다.</p><p className="body-copy">NAS는 네트워크에 연결해 사용하는 저장장치입니다. 여기에 컨테이너 실행 환경을 더해 AUBL의 백엔드 운영 서버로도 사용하고 있습니다.</p><nav className="running-section-nav" aria-label="NAS 페이지 목차"><a href="#homelab-hardware">하드웨어 ↓</a><a href="#homelab-process">조립과 설정 ↓</a><a href="#homelab-operation">서버 활용 ↓</a></nav></Reveal><Reveal><ServerDiagram /></Reveal></div></div></section>

    <section className="running-section" id="homelab-hardware" aria-labelledby="homelab-hardware-heading"><div className="container"><Reveal><div className="life-section-head"><div><span className="kicker">01 / HARDWARE</span><h2 className="section-heading" id="homelab-hardware-heading">직접 구성한 서버와 개발 장비</h2></div><a className="text-link" href="https://github.com/JuhwanLee99/JuhwanLee99/blob/master/README.md" target="_blank" rel="noreferrer">GitHub의 장비 구성 ↗</a></div><h3>직접 조립한 NAS</h3><dl className="homelab-spec-grid">{nasSpecs.map(spec => <div className={`homelab-spec${spec.planned ? ' homelab-spec--planned' : ''}`} key={spec.label}><dt>{spec.label}{spec.planned && <span>예정</span>}</dt><dd><strong>{spec.value}</strong>{spec.detail && <span>{spec.detail}</span>}</dd></div>)}</dl><div className="homelab-pc"><div><span className="kicker">CUSTOM-BUILT DEVELOPMENT PC</span><h3>직접 조립한 개발용 PC</h3></div><p>AMD Ryzen 5 9600X · NVIDIA RTX 4070 SUPER<br />32GB RAM · Windows 11</p></div><div className="homelab-pc"><div><span className="kicker">MACBOOK</span><h3>함께 사용하는 MacBook</h3></div><p>개발용 PC와 함께 사용하는 노트북<br />macOS 개발 환경</p></div></Reveal></div></section>

    <section className="running-section running-section--tint" id="homelab-process" aria-labelledby="homelab-process-heading"><div className="container"><Reveal><span className="kicker">02 / BUILD & SETUP</span><h2 className="section-heading" id="homelab-process-heading">조립하고, 설정하고, 연결하기</h2></Reveal><div className="homelab-steps">{homelabSteps.map(step => <Reveal key={step.number}><details className="homelab-step"><summary><span className="homelab-step-number">{step.number}</span><span><strong>{step.title}</strong><span>{step.summary}</span></span><span className="homelab-step-toggle" aria-hidden="true">+</span></summary><div className="homelab-step-detail"><p>{step.description}</p><div className="homelab-tags">{step.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></details></Reveal>)}</div></div></section>

    <section className="running-section" id="homelab-operation" aria-labelledby="homelab-operation-heading"><div className="container"><Reveal><span className="kicker">03 / SERVICE OPERATION</span><h2 className="section-heading" id="homelab-operation-heading">실제 서비스의 서버로</h2><p className="lede homelab-operation-intro">AUBL의 백엔드를 직접 구축한 NAS에서 운영합니다.</p><div className="homelab-role-grid">{homelabRoles.map(role => <article key={role.title}><h3>{role.title}</h3><ul>{role.points.map(point => <li key={point}>{point}</li>)}</ul></article>)}</div><div className="homelab-operation-links"><Link className="button" to="/portfolio/aubl">AUBL 프로젝트 보기 ↗</Link><a className="button secondary" href="https://aubl.club" target="_blank" rel="noreferrer">운영 웹사이트 ↗</a></div></Reveal></div></section>
    <div className="container running-bottom-links"><Link className="text-link" to="/life">← 일상과 관심사</Link><Link className="text-link" to="/stack">사용 기술 살펴보기 ↗</Link></div>
  </div>;
}
