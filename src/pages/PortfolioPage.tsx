import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { chapterLabels, orderedProjects } from '../data/portfolioOrder';
import { statusToLabel } from '../data/projects';
const filters = [{ value: 'all', label: '전체' }, { value: 'web', label: '웹·앱' }, { value: 'ai', label: 'AI·데이터' }, { value: 'system', label: '시스템·기획' }, { value: 'education', label: '교육' }];
export function PortfolioPage() {
  const [filter, setFilter] = useState('all');
  const visible = useMemo(() => filter === 'all' ? orderedProjects : orderedProjects.filter((project) => filter === 'web' ? project.launchType.some((type) => ['web', 'mobile', 'ios', 'android', 'cross-platform'].includes(type)) : project.category === filter), [filter]);
  return <><section className="directory-hero"><div className="container"><span className="kicker">CONTENTS / PROJECT INDEX</span><h1 className="section-heading">프로젝트 전체 목차</h1><p className="lede">서비스별 문제, 맡은 역할과 결과를 확인할 수 있습니다.</p><div className="directory-filters" role="group" aria-label="분야별 프로젝트 필터">{filters.map((item) => <button className="filter" key={item.value} aria-pressed={filter === item.value} onClick={() => setFilter(item.value)}>{item.label}</button>)}</div></div></section><section className="directory-list"><div className="container"><span className="kicker">{String(visible.length).padStart(2, '0')} PROJECTS</span><div className="map-table" style={{ marginTop: 20 }}>{visible.map((project) => <Reveal key={project.slug}><Link className="map-row" to={`/portfolio/${project.slug}`}><span className="map-num">{String(orderedProjects.indexOf(project) + 1).padStart(2, '0')}</span><span className="map-name">{project.title}</span><span className="map-period">{project.timeline.period}</span><span className="map-detail">{chapterLabels[project.slug]}<br />{statusToLabel[project.status]}</span><span className="map-arrow">↗</span></Link></Reveal>)}</div></div></section></>;
}
export default PortfolioPage;
