import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { getProjectBySlug } from '../data/projects';
import { stackGroups, techStacks, type StackGroup, type TechStackItem } from '../data/techStack';

type GroupFilter = 'all' | StackGroup;

function ProjectLinks({ stack }: { stack: TechStackItem }) {
  return <div className="tech-project-links">{stack.projects.map((slug) => {
    const project = getProjectBySlug(slug);
    return project ? <Link key={slug} to={'/portfolio/' + slug}>{project.title} ↗</Link> : null;
  })}</div>;
}

export function TechStackPage() {
  const [params, setParams] = useSearchParams();
  const [group, setGroup] = useState<GroupFilter>('all');
  const [query, setQuery] = useState('');
  const selected = techStacks.find((item) => item.id === params.get('tech'));
  const visible = useMemo(() => {
    const term = query.trim().toLocaleLowerCase();
    return techStacks.filter((item) => (group === 'all' || item.group === group)
      && (!term || item.name.toLocaleLowerCase().includes(term)
        || item.description.toLocaleLowerCase().includes(term)
        || item.projects.some((slug) => getProjectBySlug(slug)?.title.toLocaleLowerCase().includes(term))));
  }, [group, query]);

  const selectStack = (id: string) => {
    const next = new URLSearchParams(params);
    next.set('tech', id);
    setParams(next);
  };

  return <>
    <section className="tech-hero"><div className="container">
      <Reveal><span className="kicker">CAPABILITY / TECHNOLOGY INDEX</span><h1 className="tech-title">기술을 쌓기보다,<br /><span>문제에 맞게 연결합니다.</span></h1><p className="lede">직접 구현·연동·운영한 기술을 프로젝트 경험과 함께 정리했습니다. 기술을 선택하면 사용한 맥락과 관련 프로젝트를 볼 수 있습니다.</p></Reveal>
      <div className="tech-hero-foot"><span>{String(techStacks.length).padStart(2, '0')} STACKS / {String(stackGroups.length).padStart(2, '0')} FIELDS</span><Link to="/portfolio">프로젝트 전체 목차 ↗</Link></div>
      {selected && <div className="tech-focus" aria-live="polite"><div><span className="kicker">SELECTED / {stackGroups.find((item) => item.id === selected.group)?.label}</span><h2>{selected.name}</h2><p>{selected.description}</p></div><div><span className="meta-label">관련 프로젝트</span><ProjectLinks stack={selected} /><Link className="tech-clear" to="/stack">선택 해제 ↗</Link></div></div>}
    </div></section>
    <section className="tech-directory"><div className="container">
      <div className="tech-tools"><div className="tech-filters" role="group" aria-label="기술 분야 필터"><button aria-pressed={group === 'all'} onClick={() => setGroup('all')}>전체</button>{stackGroups.map((item) => <button key={item.id} aria-pressed={group === item.id} onClick={() => setGroup(item.id)}>{item.label}</button>)}</div><label className="tech-search"><span>기술 검색</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="기술 또는 프로젝트명" /></label></div>
      <div className="tech-result-count">{String(visible.length).padStart(2, '0')} TECHNOLOGIES</div>
      {stackGroups.map((section) => {
        const items = visible.filter((item) => item.group === section.id);
        if (!items.length) return null;
        return <div className="tech-group-section" key={section.id}><div className="tech-section-head"><span className="kicker">{section.caption}</span><h2>{section.label}</h2><span>{String(items.length).padStart(2, '0')}</span></div><div className="tech-card-grid">{items.map((item, index) => <Reveal key={item.id}><article className={'tech-card' + (selected?.id === item.id ? ' is-selected' : '')}><button type="button" className="tech-card-trigger" aria-pressed={selected?.id === item.id} onClick={() => selectStack(item.id)}><span>{String(index + 1).padStart(2, '0')} / {section.label}</span><strong>{item.name}</strong><span aria-hidden="true">↗</span></button><p>{item.description}</p><ProjectLinks stack={item} /></article></Reveal>)}</div></div>;
      })}
      {!visible.length && <div className="tech-empty">검색 결과가 없습니다. 다른 기술명이나 프로젝트명을 입력해 주세요.</div>}
    </div></section>
  </>;
}

export default TechStackPage;
