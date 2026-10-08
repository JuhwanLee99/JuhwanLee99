import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { getProjectBySlug } from '../data/projects';
import { stackGroups, techStacks, type StackGroup, type TechStackItem } from '../data/techStack';
import { coreStackIds, experienceAssessmentIsDraft, experienceLevels, getExperienceLevel, getStackExperience, strengthAreas, type ExperienceLevel } from '../data/stackExperience';
import '../stackExperience.css';
import '../stackLevelTooltip.css';

type GroupFilter = 'all' | StackGroup;

const displayedExperienceLevels = experienceLevels.filter(level =>
  level.id !== 'unrated' || techStacks.some(stack => getStackExperience(stack).level === 'unrated'),
);

function ProjectLinks({ slugs }: { slugs: string[] }) {
  return <div className="tech-project-links">{slugs.map(slug => {
    const project = getProjectBySlug(slug);
    return project ? <Link key={slug} to={'/portfolio/' + slug}>{project.title} ↗</Link> : null;
  })}</div>;
}

function LevelBadge({ level }: { level: ExperienceLevel }) {
  const [isOpen, setIsOpen] = useState(false);
  const tooltipId = useId();
  const badgeRef = useRef<HTMLSpanElement>(null);
  const criteria = getExperienceLevel(level);

  useEffect(() => {
    if (!isOpen) return;
    const dismissOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !badgeRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const dismissOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('pointerdown', dismissOutside);
    document.addEventListener('keydown', dismissOnEscape);
    return () => {
      document.removeEventListener('pointerdown', dismissOutside);
      document.removeEventListener('keydown', dismissOnEscape);
    };
  }, [isOpen]);

  return (
    <span
      ref={badgeRef}
      className="stack-level-help"
      data-open={isOpen ? 'true' : undefined}
      onPointerEnter={event => {
        if (event.pointerType !== 'touch') setIsOpen(true);
      }}
      onPointerLeave={event => {
        if (event.pointerType !== 'touch' && !badgeRef.current?.contains(document.activeElement)) {
          setIsOpen(false);
        }
      }}
      onFocus={() => setIsOpen(true)}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false);
      }}
    >
      <button
        type="button"
        className={`stack-level stack-level--${level} stack-level-help-trigger`}
        aria-describedby={tooltipId}
        aria-label={`${criteria.label} 활용 수준 기준`}
        onClick={event => {
          event.stopPropagation();
          setIsOpen(true);
        }}
      >
        {criteria.label}
      </button>
      <span className="stack-level-help-tooltip" id={tooltipId} role="tooltip" hidden={!isOpen}>
        <strong>{criteria.label} 기준</strong>
        <span>{criteria.description}</span>
      </span>
    </span>
  );
}

export function TechStackPage() {
  const [params, setParams] = useSearchParams();
  const [group, setGroup] = useState<GroupFilter>('all');
  const [level, setLevel] = useState<'all' | ExperienceLevel>('all');
  const [query, setQuery] = useState('');
  const selectionRef = useRef<HTMLDivElement>(null);
  const scrollRequested = useRef(false);
  const selected = techStacks.find(item => item.id === params.get('tech'));
  const selectedExperience = selected ? getStackExperience(selected) : null;
  const coreStacks = coreStackIds.map(id => techStacks.find(item => item.id === id)).filter((item): item is TechStackItem => Boolean(item));
  const visible = useMemo(() => {
    const term = query.trim().toLocaleLowerCase();
    return techStacks.filter(item => {
      const experience = getStackExperience(item);
      return (group === 'all' || item.group === group)
        && (level === 'all' || experience.level === level)
        && (!term || [item.name, item.description, experience.scope].some(text => text.toLocaleLowerCase().includes(term))
          || item.projects.some(slug => getProjectBySlug(slug)?.title.toLocaleLowerCase().includes(term)));
    }).sort((a, b) => experienceLevels.findIndex(item => item.id === getStackExperience(a).level)
      - experienceLevels.findIndex(item => item.id === getStackExperience(b).level));
  }, [group, level, query]);

  const scrollToSelection = () => selectionRef.current?.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start',
  });
  useEffect(() => {
    if (selected && scrollRequested.current) {
      scrollRequested.current = false;
      scrollToSelection();
    }
  }, [selected?.id]);

  const selectStack = (id: string) => {
    if (selected?.id === id) {
      scrollToSelection();
      return;
    }
    scrollRequested.current = true;
    const next = new URLSearchParams(params);
    next.set('tech', id);
    setParams(next, { preventScrollReset: true });
  };

  return <div className="stack-experience-page">
    <section className="tech-hero"><div className="container">
      <Reveal>
        <span className="kicker">STRENGTHS / HOW I USE TECHNOLOGY</span>
        <h1 className="tech-title">주력 기술과<br /><span>실제로 해본 일.</span></h1>
        <p className="lede">반복해서 깊게 사용한 기술과 프로젝트에서 접한 기술을 구분했습니다.<br />기술 이름보다 직접 구현하고 해결한 범위를 먼저 소개합니다.</p>
        {experienceAssessmentIsDraft && <p className="stack-draft-note">활용 수준은 프로젝트 근거로 작성한 초안이며, 본인 확인 후 확정할 예정입니다. 사용 횟수만으로 숙련도를 판단하지 않습니다.</p>}
        <nav className="stack-section-links" aria-label="기술 경험 페이지 목차"><a className="button" href="#stack-strengths">주요 구현 경험 ↓</a><a className="button secondary" href="#all-stack-experience">전체 기술과 활용 수준 ↓</a></nav>
      </Reveal>
      <div className="stack-core-block"><span className="meta-label">CORE / 반복해서 사용한 기술</span><div className="stack-core-list">{coreStacks.map(stack => <button key={stack.id} type="button" onClick={() => selectStack(stack.id)} aria-pressed={selected?.id === stack.id}><strong>{stack.name}</strong><span aria-hidden="true">↗</span></button>)}</div></div>
      <div className="tech-hero-foot"><span>IMPLEMENTATION / INTEGRATION / VALIDATION</span><Link to="/portfolio">프로젝트 전체 목차 ↗</Link></div>
    </div></section>

    <section className="stack-strengths" id="stack-strengths" aria-labelledby="stack-strengths-title"><div className="container">
      <Reveal><span className="kicker">01 / SELECTED EXPERIENCE</span><h2 className="section-heading" id="stack-strengths-title">주요 구현 경험</h2></Reveal>
      <div className="stack-strength-grid">{strengthAreas.map((area, index) => <Reveal key={area.title}><article className="stack-strength-card"><span className="kicker">0{index + 1} / FOCUS</span><h3>{area.title}</h3><p>{area.description}</p><div className="stack-strength-tags">{area.stacks.map(id => {
        const stack = techStacks.find(item => item.id === id);
        return stack ? <button key={id} type="button" onClick={() => selectStack(id)}>{stack.name} ↗</button> : null;
      })}</div><span className="meta-label">구현 사례</span><ProjectLinks slugs={area.projects} /></article></Reveal>)}</div>
    </div></section>

    <div className="container" id="stack-selection" ref={selectionRef}>{selected && selectedExperience && <section className="tech-focus" aria-label="선택한 기술의 활용 범위" aria-live="polite"><div><span className="kicker">SELECTED / {stackGroups.find(item => item.id === selected.group)?.label}</span><h2>{selected.name}</h2><LevelBadge level={selectedExperience.level} /><p className="stack-focus-scope">{selectedExperience.scope}</p></div><div><span className="meta-label">관련 프로젝트</span><ProjectLinks slugs={selected.projects} /><Link className="tech-clear" to="/stack" preventScrollReset>선택 해제 ↗</Link></div></section>}</div>

    <section className="tech-directory" id="all-stack-experience" aria-labelledby="stack-directory-title"><div className="container">
      <Reveal><span className="kicker">02 / COMPLETE EXPERIENCE</span><h2 className="section-heading" id="stack-directory-title">전체 기술과 활용 수준</h2><p className="body-copy">같은 수준이어도 활용 범위는 다릅니다. 각 기술에서 직접 해본 일과 관련 프로젝트를 함께 확인할 수 있습니다.</p></Reveal>
      <details className="stack-level-guide"><summary>활용 수준을 구분하는 기준</summary><dl>{displayedExperienceLevels.map(item => <div key={item.id}><dt><LevelBadge level={item.id} /></dt><dd>{item.description}</dd></div>)}</dl><p>수준은 기술 전체에 대한 숙련도나 경력 연차를 뜻하지 않습니다. 각 기술에서 직접 활용한 범위를 기준으로 구분했습니다.</p></details>
      <div className="tech-tools"><div className="tech-filters" role="group" aria-label="기술 분야 필터"><button type="button" aria-pressed={group === 'all'} onClick={() => setGroup('all')}>전체</button>{stackGroups.map(item => <button type="button" key={item.id} aria-pressed={group === item.id} onClick={() => setGroup(item.id)}>{item.label}</button>)}</div><label className="tech-search"><span>기술 검색</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="기술·프로젝트·수행 내용" /></label></div>
      <div className="stack-level-toolbar"><label htmlFor="stack-level-filter">활용 수준</label><select id="stack-level-filter" value={level} onChange={event => setLevel(event.target.value as 'all' | ExperienceLevel)}><option value="all">모든 수준</option>{displayedExperienceLevels.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}</select><span aria-live="polite">{visible.length} / {techStacks.length}개 기술</span>{(group !== 'all' || level !== 'all' || query) && <button type="button" onClick={() => { setGroup('all'); setLevel('all'); setQuery(''); }}>필터 초기화</button>}</div>
      {stackGroups.map(section => {
        const items = visible.filter(item => item.group === section.id);
        if (!items.length) return null;
        return <div className="tech-group-section" key={section.id}><div className="tech-section-head"><span className="kicker">{section.caption}</span><h3>{section.label}</h3><span>{items.length}</span></div><div className="tech-card-grid">{items.map(item => {
          const experience = getStackExperience(item);
          return <Reveal key={item.id}><article className={'tech-card' + (selected?.id === item.id ? ' is-selected' : '')}><div className="stack-card-level"><LevelBadge level={experience.level} /></div><button type="button" className="tech-card-trigger" aria-pressed={selected?.id === item.id} onClick={() => selectStack(item.id)}><span>{section.label}</span><strong>{item.name}</strong><span aria-hidden="true">↗</span></button><div className="stack-scope"><span className="meta-label">직접 활용한 범위</span><p>{experience.scope}</p></div><ProjectLinks slugs={item.projects} /></article></Reveal>;
        })}</div></div>;
      })}
      {!visible.length && <div className="tech-empty">해당 조건의 기술이 없습니다. 활용 수준이나 검색어를 변경해 주세요.</div>}
    </div></section>
  </div>;
}

export default TechStackPage;
