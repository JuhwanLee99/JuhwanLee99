import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProjectGallery } from '../components/ProjectGallery';
import { Reveal } from '../components/Reveal';
import { distanceRecords, races, runningImages, runningMedia } from '../data/running';
import type { RaceDistance } from '../data/running';

export function RunningPage() {
  const [distance, setDistance] = useState<'전체' | RaceDistance>('전체');
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'photo' | 'record'>('all');
  const selectedRaces = races.filter(race => distance === '전체' || race.distance === distance);
  const selectedImages = runningImages.filter(image => galleryFilter === 'all' || image.category === galleryFilter);

  return <div className="running-page">
    <section className="running-hero"><div className="container">
      <Link className="text-link running-back" to="/life">← 일상과 관심사</Link>
      <div className="running-hero-grid">
        <Reveal><span className="kicker">LIFE / RUNNING</span><h1>달리는 일상</h1><p className="lede">평소의 러닝과 대회에서 남긴<br />사진, 영상, 그리고 기록.</p><nav className="running-section-nav" aria-label="러닝 페이지 목차"><a href="#race-records">대회 기록 ↓</a><a href="#running-gallery">사진과 자료 ↓</a><a href="#running-film">현장 영상 ↓</a></nav></Reveal>
        <figure className="running-hero-photo"><img src={runningMedia('race-samil-finish.webp')} alt="3.1절 단축마라톤 완주 후 기록 패널 앞에 선 이주환" fetchPriority="high" /><figcaption>2025.03.01 / 3.1절 단축마라톤</figcaption></figure>
      </div>
      <Reveal><div className="running-records" aria-label="거리별 러닝 기록">{distanceRecords.map(record => <a className="running-record" key={record.distance} href={runningMedia(record.file)} target="_blank" rel="noreferrer" aria-label={`${record.distance} ${record.time}, ${record.event} 기록 이미지 보기`}><span className="running-record-distance">{record.distance}</span><strong>{record.time}</strong><span className="running-record-event">{record.event}</span><span className="running-record-link">기록 보기 <span aria-hidden="true">↗</span></span></a>)}</div></Reveal>
    </div></section>

    <section className="running-section" id="race-records" aria-labelledby="races-heading"><div className="container">
      <Reveal><div className="life-section-head"><div><span className="kicker">01 / RACE LOG</span><h2 className="section-heading" id="races-heading">대회 기록</h2><p className="body-copy">대회를 누르면 완주 기록을 볼 수 있습니다.</p></div><div className="running-filters" role="group" aria-label="참가 거리 필터">{(['전체', '5km', '10km', '하프'] as const).map(value => <button key={value} type="button" aria-pressed={distance === value} onClick={() => setDistance(value)}>{value}</button>)}</div></div></Reveal>
      <p className="running-result-count" aria-live="polite">{selectedRaces.length}개 대회</p>
      <div className="race-list">{selectedRaces.map(race => <details className="race-item" key={race.id}>
        <summary><span className="race-distance">{race.distance}</span><span className="race-description"><strong>{race.name}</strong>{race.date && <span>{race.date}</span>}</span><span className="race-time">{race.time}</span><span className="race-toggle" aria-hidden="true">+</span></summary>
        <div className="race-certificate"><a href={runningMedia(race.file)} target="_blank" rel="noreferrer" aria-label={`${race.name} 기록 이미지 확대`}><img src={runningMedia(race.file)} alt={`${race.name} ${race.distance} 완주 기록 ${race.time}`} loading="lazy" /><span>기록 이미지 확대 ↗</span></a></div>
      </details>)}</div>
    </div></section>

    <section className="running-section running-section--tint" id="running-gallery" aria-labelledby="running-gallery-heading"><div className="container">
      <Reveal><div className="life-section-head"><div><span className="kicker">02 / MOMENTS</span><h2 className="section-heading" id="running-gallery-heading">사진과 자료</h2></div><div className="running-filters" role="group" aria-label="러닝 이미지 분류">{([{ value: 'all', label: '전체' }, { value: 'photo', label: '현장 사진' }, { value: 'record', label: '기록' }] as const).map(filter => <button key={filter.value} type="button" aria-pressed={galleryFilter === filter.value} onClick={() => setGalleryFilter(filter.value)}>{filter.label}</button>)}</div></div><ProjectGallery key={galleryFilter} images={selectedImages} label="러닝" /></Reveal>
    </div></section>

    <section className="running-section" id="running-film" aria-labelledby="running-film-heading"><div className="container">
      <Reveal><div className="life-section-head"><div><span className="kicker">03 / ON THE RUN</span><h2 className="section-heading" id="running-film-heading">현장 영상</h2><p className="body-copy" id="running-film-description">2026.06.20 · GLOBAL 6K FOR WATER 서울 · 10km 참가<br />대회 코스를 달리며 촬영한 영상 · 1분 45초</p></div></div><div className="running-video"><video controls playsInline preload="none" poster={runningMedia('global6k-2026-poster.webp')} aria-label="GLOBAL 6K FOR WATER 서울 10km 현장 영상" aria-describedby="running-film-description"><source src={runningMedia('global6k-2026.mp4')} type="video/mp4" />이 브라우저는 영상 재생을 지원하지 않습니다.</video></div><a className="text-link running-video-link" href={runningMedia('global6k-2026.mp4')} target="_blank" rel="noreferrer">영상 새 창으로 보기 ↗</a></Reveal>
    </div></section>
    <div className="container running-bottom-links"><Link className="text-link" to="/life">← 일상과 관심사</Link><Link className="text-link" to="/portfolio">프로젝트 살펴보기 ↗</Link></div>
  </div>;
}
