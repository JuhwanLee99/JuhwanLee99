import { formatLink } from '../utils/url';
import type { ProjectLink } from '../types/project';
export function LinkChip({ link }: { link: ProjectLink }) {
  const href = formatLink(link.url);
  if (!href || link.status === 'pending') return <span className="project-link pending" title={link.note}>{link.label} · 준비중</span>;
  return <a className="project-link" href={href} target="_blank" rel="noreferrer">{link.label} <span aria-hidden="true">↗</span></a>;
}
export default LinkChip;
