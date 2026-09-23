import { useState } from 'react';
import type { ReactNode } from 'react';

export function ExpandableItem({ number, title, children, className = '' }: { number?: string; title: string; children: ReactNode; className?: string }) {
  const [pinned, setPinned] = useState(false);
  const [hovered, setHovered] = useState(false);
  const open = pinned || hovered;
  return <div className={`expandable ${open ? 'is-open' : ''} ${className}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
    <button className="expandable-trigger" type="button" aria-expanded={open} onClick={() => setPinned((value) => !value)}>
      {number && <span className="expandable-number">{number}</span>}
      <span className="expandable-title">{title}</span>
      <span className="expandable-sign" aria-hidden="true">{open ? '−' : '+'}</span>
    </button>
    <div className="expandable-content" aria-hidden={!open}><div className="expandable-content-inner">{children}</div></div>
  </div>;
}
