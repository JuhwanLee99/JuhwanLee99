import { motion, useReducedMotion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArchitectureDiagram } from '../components/ArchitectureDiagram';
import { ProjectEdgeNav } from '../components/ProjectEdgeNav';
import { ExpandableItem } from '../components/ExpandableItem';
import { LinkChip } from '../components/LinkChip';
import { ProjectGallery } from '../components/ProjectGallery';
import { Reveal } from '../components/Reveal';
import { chapterLabels, orderedProjects } from '../data/portfolioOrder';
import { getGallery, getPointDetail } from '../data/projectPresentation';
import { getProjectBySlug, statusToLabel } from '../data/projects';
export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug || '');
  const reduced = useReducedMotion();
  if (!project) return <section className="detail-hero"><div className="container"><span className="kicker">404 / PROJECT NOT FOUND</span><h1 className="detail-title">프로젝트를 찾을 수 없습니다.</h1><Link className="button" to="/portfolio">목차로 돌아가기 ↗</Link></div></section>;
  const index = orderedProjects.findIndex((item) => item.slug === project.slug);
  const previous = orderedProjects[(index - 1 + orderedProjects.length) % orderedProjects.length];
  const next = orderedProjects[(index + 1) % orderedProjects.length];
  return <>
    <ProjectEdgeNav previous={previous} next={next} />
    <section className="detail-hero"><div className="container"><span className="kicker">{String(index + 1).padStart(2, '0')} / {project.title.toUpperCase()} / CASE STUDY</span><motion.h1 className="detail-title" initial={reduced ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>{project.title}</motion.h1><p className="lede">{project.summary}</p><div className="info-band"><div className="info-cell"><span className="meta-label">Experience</span><strong>{chapterLabels[project.slug]}</strong></div><div className="info-cell"><span className="meta-label">Period</span><strong>{project.timeline.period}</strong></div><div className="info-cell"><span className="meta-label">Role</span><strong>{project.timeline.role}</strong></div><div className="info-cell"><span className="meta-label">Status</span><strong>{statusToLabel[project.status]}</strong></div></div></div></section>
    <section className="detail-section tint"><div className="container"><Reveal><span className="kicker">01 / OVERVIEW</span><h2 className="section-heading">문제에서 결과까지</h2><div className="narrative"><ExpandableItem number="01" title="문제 인식"><p>{project.description.problem}</p></ExpandableItem><ExpandableItem number="02" title="해결 방식"><p>{project.description.solution}</p></ExpandableItem><ExpandableItem number="03" title="결과와 배움"><p>{project.description.impact}</p></ExpandableItem></div></Reveal></div></section>
    <section className="detail-section"><div className="container"><Reveal><span className="kicker">02 / HIGHLIGHTS</span><h2 className="section-heading">핵심 구현과 판단</h2></Reveal><div className="accordion-list">{project.highlights.map((item, i) => <Reveal key={item}><ExpandableItem number={String(i + 1).padStart(2, '0')} title={item}><p>{getPointDetail(project, i)}</p></ExpandableItem></Reveal>)}</div></div></section>
    <section className="detail-section tint"><div className="container"><Reveal><span className="kicker">03 / STRUCTURE</span><h2 className="section-heading">서비스 구성</h2><ArchitectureDiagram project={project} /></Reveal><div className="accordion-list">{project.architecture.map((item, i) => { const split = item.indexOf(':'); return <Reveal key={item}><ExpandableItem number={String(i + 1).padStart(2, '0')} title={split > -1 ? item.slice(0, split) : `구성 ${i + 1}`}><p>{split > -1 ? item.slice(split + 1).trim() : item}</p></ExpandableItem></Reveal>; })}</div></div></section>
    <section className="detail-section"><div className="container"><Reveal><span className="kicker">04 / TECHNOLOGY</span><h2 className="section-heading">기술과 담당 역할</h2><div className="tech-grid">{Object.entries(project.techStack).map(([name, items], i) => <ExpandableItem className="tech-accordion" number={String(i + 1).padStart(2, '0')} title={name} key={name}><div className="tech-tags">{items?.map((item) => <span key={item}>{item}</span>)}</div></ExpandableItem>)}</div></Reveal><Reveal><h3 className="small-heading" style={{ marginTop: 65, marginBottom: 20 }}>직접 맡은 일</h3><div className="line-list">{project.responsibilities.map((item, i) => <div className="line-item" key={item}><span>{String(i + 1).padStart(2, '0')}</span>{item}</div>)}</div></Reveal></div></section>
    <section className="detail-section tint"><div className="container"><Reveal><span className="kicker">05 / MEDIA</span><h2 className="section-heading">화면과 자료</h2><ProjectGallery images={getGallery(project)} label={project.title} /></Reveal></div></section>
    <section className="detail-section"><div className="container"><Reveal><span className="kicker">06 / LINKS</span><h2 className="section-heading">프로젝트 링크</h2><div className="links-list">{project.links.map((link) => <LinkChip link={link} key={link.label} />)}</div></Reveal></div></section>
    <section className="next-project"><div className="container"><span className="kicker">NEXT PROJECT / {String((index + 1) % orderedProjects.length + 1).padStart(2, '0')}</span><Link to={`/portfolio/${next.slug}`}>{next.title} ↗</Link><Link to="/portfolio" className="text-link" style={{ color: 'white', borderColor: 'white' }}>전체 목차로 돌아가기 ↗</Link></div></section>
  </>;
}
export default ProjectDetailPage;
