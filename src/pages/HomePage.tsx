import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExpandableItem } from '../components/ExpandableItem';
import { ProjectGallery } from '../components/ProjectGallery';
import { Reveal } from '../components/Reveal';
import { chapterLabels, orderedProjects } from '../data/portfolioOrder';
import { featuredTechStacks } from '../data/techStack';
import { getGallery, getPointDetail } from '../data/projectPresentation';
import { statusToLabel } from '../data/projects';
import type { ProjectData } from '../types/project';

function Chapter({ project, index }: { project: ProjectData; index: number }) {
  const number = String(index + 1).padStart(2, '0');
  return <section className="chapter" id={project.slug} aria-labelledby={`${project.slug}-heading`}>
    <div className="container">
      <Reveal><div className="chapter-top"><span className="kicker">{number} / {project.title.toUpperCase()} / {chapterLabels[project.slug]}</span><div className="chapter-pages" aria-hidden="true">{orderedProjects.map((_, i) => <span key={i} className={i === index ? 'active' : ''}>{String(i + 1).padStart(2, '0')}</span>)}</div></div></Reveal>
      <Reveal><div className="chapter-heading"><h2 id={`${project.slug}-heading`}>{project.title}</h2><div className="chapter-intro"><p>{project.summary}</p></div></div></Reveal>
      <Reveal><div className="info-band"><div className="info-cell"><span className="meta-label">Experience type</span><strong>{chapterLabels[project.slug]}</strong></div><div className="info-cell"><span className="meta-label">Period</span><strong>{project.timeline.period}</strong></div><div className="info-cell"><span className="meta-label">Role</span><strong>{project.timeline.role}</strong></div><div className="info-cell"><span className="meta-label">Status</span><strong>{statusToLabel[project.status]}</strong></div></div></Reveal>
      <div className="chapter-body"><Reveal><ProjectGallery images={getGallery(project)} label={project.title} /></Reveal><div className="chapter-points"><div className="chapter-points-head"><span className="kicker">PROJECT {number} / KEY POINTS</span><h3>핵심 구현</h3></div><Link className="chapter-primary-link" to={`/portfolio/${project.slug}`} aria-label={`${project.title} 상세 페이지 보기`}><span>PROJECT {number} / CASE STUDY</span><strong>상세 페이지 보기</strong><span className="chapter-primary-arrow" aria-hidden="true">↗</span></Link>{project.highlights.slice(0, 4).map((point, i) => <Reveal key={point}><ExpandableItem number={String(i + 1).padStart(2, '0')} title={point}><p>{getPointDetail(project, i)}</p></ExpandableItem></Reveal>)}</div></div>
      <Reveal><div className="chapter-foot"><span className="tech-line">{Object.values(project.techStack).flat().slice(0, 6).join(' / ')}</span><div className="chapter-actions">{project.slug === 'aubl' && <a className="button secondary" href="https://aubl.club" target="_blank" rel="noreferrer">운영 웹 열기 ↗</a>}<Link className="button chapter-link" to={`/portfolio/${project.slug}`}>프로젝트 전체 보기 <span aria-hidden="true">↗</span></Link></div></div></Reveal>
    </div>
  </section>;
}

export function HomePage() {
  const reduced = useReducedMotion();
  return <>
    <section className="cover" aria-labelledby="cover-title"><div className="container cover-inner">
      <div className="cover-top"><span className="kicker">LEE JUHWAN / DIGITAL SERVICE PORTFOLIO</span><span className="cover-stamp">PLANNING · BUILDING · VALIDATION / 2026</span></div>
      <div className="cover-main">
        <div><div className="kicker">현장과 데이터를 연결하는 서비스</div><motion.h1 id="cover-title" initial={reduced ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>현장을 이해하고,<br /><span>서비스로 연결합니다.</span></motion.h1><p className="lede cover-sub">사용자의 문제를 구체화하고, 웹·앱·데이터·AI를 구현과 검증의 과정으로 연결했습니다.</p><div className="cover-actions"><a className="button" href="#contents">경험 살펴보기 ↓</a><Link className="button secondary" to="/portfolio">전체 프로젝트 ↗</Link></div></div>
        <aside className="cover-side" aria-label="프로필">
          <div className="meta-block"><span className="meta-label">Name</span><div className="meta-value">이주환 / Lee Juhwan</div></div>
          <div className="meta-block"><span className="meta-label">Focus</span><div className="meta-value">서비스 기획 · 프론트엔드 · 데이터 검증</div></div>
          <div className="meta-block"><span className="meta-label">GitHub</span><a className="meta-value" href="https://github.com/JuhwanLee99" target="_blank" rel="noreferrer">github.com/JuhwanLee99 ↗</a></div>
          <div className="meta-block cover-stack">
            <div className="cover-stack-head"><span className="meta-label">Core Stack</span><Link to="/stack">전체 기술 보기 ↗</Link></div>
            <div className="cover-stack-tags">{featuredTechStacks.map((stack) => <Link key={stack.id} to={'/stack?tech=' + stack.id}>{stack.name}</Link>)}</div>
          </div>
        </aside>
      </div>
      <div className="cover-bottom"><div className="cover-mini-index">{orderedProjects.map((project, i) => <a href={`#${project.slug}`} key={project.slug}><span>{String(i + 1).padStart(2, '0')}</span>{project.title}</a>)}</div><span className="page-no">01 / PORTFOLIO</span></div>
    </div></section>
    <section className="map-section" id="contents" aria-labelledby="contents-heading"><div className="container"><Reveal><div className="map-head"><div><span className="kicker">CONTENTS / EXPERIENCE MAP</span><h2 className="section-heading" id="contents-heading">역할과 결과물로 읽는 경험</h2></div><span className="page-no">02 / EXPERIENCE MAP</span></div><p className="lede">현장 운영에서 시작해 구현, AI 업무 적용, 데이터 실험과 서비스 기획까지.</p></Reveal><div className="map-table">{orderedProjects.map((project, i) => <Reveal key={project.slug}><a className="map-row" href={`#${project.slug}`}><span className="map-num">{String(i + 1).padStart(2, '0')}</span><span className="map-name">{project.title}</span><span className="map-period">{project.timeline.period}</span><span className="map-detail">{chapterLabels[project.slug]}<br />{project.timeline.role}</span><span className="map-arrow" aria-hidden="true">↘</span></a></Reveal>)}</div><Reveal><div className="map-flow"><span>현장 운영</span><span>웹·앱 구축</span><span>AI 업무 적용</span><span>데이터 검증</span><span>서비스 기획</span></div></Reveal></div></section>
    {orderedProjects.map((project, index) => <Chapter project={project} index={index} key={project.slug} />)}
    <section className="summary-section"><div className="container"><Reveal><span className="kicker">SUMMARY / WHAT CONNECTS THE WORK</span><h2 className="section-heading">기획–구축–검증을 잇는 경험</h2><p className="lede">현장의 요구를 듣고, 구현 가능한 기준으로 바꾸고, 실제 사용과 데이터를 통해 다시 확인합니다.</p><div className="summary-grid"><div><span>01 / FIELD</span><strong>AUBL 현장 운영<br />사용자 업무 흐름 분석</strong></div><div><span>02 / BUILD</span><strong>React · Flutter<br />API · 데이터베이스 연동</strong></div><div><span>03 / VALIDATE</span><strong>CS 하네스 검증<br />SyncGaze 실험·리포트</strong></div></div><div className="summary-contact"><Link className="button" to="/stack">기술 스택 보기 ↗</Link><a className="button secondary" href="https://github.com/JuhwanLee99" target="_blank" rel="noreferrer">GitHub 보기 ↗</a></div></Reveal></div></section>
  </>;
}
export default HomePage;
