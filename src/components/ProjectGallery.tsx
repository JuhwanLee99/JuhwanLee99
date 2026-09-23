import { useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import type { ScreenshotItem } from '../types/project';

export function ProjectGallery({ images, label }: { images: ScreenshotItem[]; label: string }) {
  const track = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const reduced = useReducedMotion();
  const goTo = (index: number) => {
    const next = Math.min(Math.max(index, 0), images.length - 1);
    const element = track.current;
    if (element) element.scrollTo({ left: element.clientWidth * next, behavior: reduced ? 'instant' : 'smooth' });
    setCurrent(next);
  };
  if (!images.length) return null;
  return <div className="gallery" aria-label={`${label} 이미지 갤러리`}>
    <div className="gallery-top"><span className="kicker">IMAGE GALLERY / {String(current + 1).padStart(2, '0')} OF {String(images.length).padStart(2, '0')}</span><div className="gallery-controls"><button type="button" aria-label="이전 이미지" disabled={current === 0} onClick={() => goTo(current - 1)}>←</button><button type="button" aria-label="다음 이미지" disabled={current === images.length - 1} onClick={() => goTo(current + 1)}>→</button></div></div>
    <div className="gallery-track" ref={track} tabIndex={0} role="region" aria-roledescription="이미지 슬라이더" aria-label={`${label} 이미지, 좌우로 스와이프하거나 화살표 키로 이동`} onScroll={(event) => { const width = event.currentTarget.clientWidth; if (width) setCurrent(Math.round(event.currentTarget.scrollLeft / width)); }} onKeyDown={(event) => { if (event.key === 'ArrowRight') { event.preventDefault(); goTo(current + 1); } if (event.key === 'ArrowLeft') { event.preventDefault(); goTo(current - 1); } }}>
      {images.map((image, index) => <figure className={`gallery-slide${image.presentation ? ` gallery-slide--${image.presentation}` : ''}`} key={`${image.url}-${index}`}><a className="gallery-image" href={image.url} target="_blank" rel="noreferrer" aria-label={`${image.title} 원본 크기로 보기`}><img src={image.url} alt={image.alt} loading={index === 0 ? 'eager' : 'lazy'} onError={(event) => { event.currentTarget.style.display = 'none'; }} /></a><figcaption><span>{String(index + 1).padStart(2, '0')}</span><strong>{image.title}</strong><a href={image.url} target="_blank" rel="noreferrer">원본 크기 ↗</a></figcaption></figure>)}
    </div>
    <div className="gallery-thumbs" aria-label="이미지 바로가기">{images.map((image, index) => <button key={`${image.url}-${index}`} type="button" className={index === current ? 'active' : ''} aria-label={`${index + 1}번 이미지: ${image.title}`} aria-current={index === current ? 'true' : undefined} onClick={() => goTo(index)}><img src={image.url} alt="" loading="lazy" /><span>{String(index + 1).padStart(2, '0')}</span></button>)}</div>
  </div>;
}
