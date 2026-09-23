import type { ProjectData } from '../types/project';

export function ArchitectureDiagram({ project }: { project: ProjectData }) {
  return <div className="architecture-diagram" role="group" aria-label={`${project.title} 구성도`}>
    <div className="architecture-diagram-head"><span>FLOW / {project.title.toUpperCase()}</span><strong>구성 요소와 연결 흐름</strong></div>
    <div className="architecture-nodes">{project.architecture.map((item, index) => {
      const split = item.indexOf(':');
      return <div className="architecture-node" key={item}><span className="architecture-node-num">{String(index + 1).padStart(2, '0')}</span><strong>{split > -1 ? item.slice(0, split) : `구성 ${index + 1}`}</strong><p>{split > -1 ? item.slice(split + 1).trim() : item}</p></div>;
    })}</div>
  </div>;
}
