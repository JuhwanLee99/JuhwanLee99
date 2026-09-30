import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { ProjectGallery } from '../components/ProjectGallery';
import { baseballImages, baseballMedia, baseballVideos } from '../data/baseball';

export function BaseballPage() {
  return <div className="running-page baseball-page">
    <section className="running-hero"><div className="container">
      <Link className="text-link running-back" to="/life">← 일상과 관심사</Link>
      <div className="running-hero-grid">
        <Reveal><span className="kicker">LIFE / BASEBALL</span><h1>야구</h1><p className="lede">팀원들과 소통하고 각자의 역할을 수행하며<br />협업 능력을 기르고 있습니다.</p><nav className="running-section-nav" aria-label="야구 페이지 목차"><a href="#baseball-photos">활동 사진 ↓</a><a href="#baseball-videos">연습 영상 ↓</a></nav></Reveal>
        <figure className="running-hero-photo"><img src={baseballMedia('warmup.webp')} alt="야구장에서 배트를 들고 타격을 준비하는 모습" fetchPriority="high" /><figcaption>BASEBALL / ON THE FIELD</figcaption></figure>
      </div>
    </div></section>
    <section className="running-section running-section--tint" id="baseball-photos" aria-labelledby="baseball-photos-heading"><div className="container"><Reveal><span className="kicker">01 / ON THE FIELD</span><h2 className="section-heading" id="baseball-photos-heading">활동 사진</h2><ProjectGallery images={baseballImages} label="야구 활동" /></Reveal></div></section>
    <section className="running-section" id="baseball-videos" aria-labelledby="baseball-videos-heading"><div className="container"><Reveal><span className="kicker">02 / BATTING PRACTICE</span><h2 className="section-heading" id="baseball-videos-heading">타격 연습</h2></Reveal><div className="baseball-video-grid">{baseballVideos.map((video, index) => <Reveal key={video.id}><article className="baseball-video-card"><div className="running-video"><video controls playsInline preload="none" poster={baseballMedia(video.poster)} aria-label={video.title} aria-describedby={`${video.id}-description`}><source src={baseballMedia(video.file)} type="video/mp4" />이 브라우저는 영상 재생을 지원하지 않습니다.</video></div><div className="baseball-video-copy"><span className="kicker">0{index + 1} / {video.duration}</span><h3>{video.title}</h3><p className="body-copy" id={`${video.id}-description`}>{video.description}</p><a className="text-link" href={baseballMedia(video.file)} target="_blank" rel="noreferrer">영상 새 창으로 보기 ↗</a></div></article></Reveal>)}</div></div></section>
    <div className="container running-bottom-links"><Link className="text-link" to="/life">← 일상과 관심사</Link><Link className="text-link" to="/life/running">러닝 기록 보기 ↗</Link></div>
  </div>;
}
