import { Link } from 'react-router-dom';
import { chapterLabels } from '../data/portfolioOrder';
import { statusToLabel } from '../data/projects';
import type { ProjectData } from '../types/project';

function EdgeLink({ project, direction }: { project: ProjectData; direction: 'previous' | 'next' }) {
  const previous = direction === 'previous';
  const label = previous ? '이전 프로젝트' : '다음 프로젝트';
  return <Link className={`edge-link edge-link--${direction}`} to={`/portfolio/${project.slug}`} aria-label={`${label}: ${project.title}`}>
    <span className="edge-tab"><span className="edge-arrow" aria-hidden="true">{previous ? '←' : '→'}</span><span className="edge-tab-label">{previous ? '이전' : '다음'}</span></span>
    <span className="edge-preview" aria-hidden="true"><span className="edge-preview-kicker">{label} / {chapterLabels[project.slug]}</span><strong>{project.title}</strong><span className="edge-preview-meta">{statusToLabel[project.status]} · {project.timeline.period}</span><span className="edge-preview-summary">{project.summary}</span></span>
    <span className="edge-mobile-title">{project.title}</span>
  </Link>;
}

export function ProjectEdgeNav({ previous, next }: { previous: ProjectData; next: ProjectData }) {
  return <nav className="edge-nav" aria-label="이전 및 다음 프로젝트"><EdgeLink project={previous} direction="previous" /><EdgeLink project={next} direction="next" /></nav>;
}
