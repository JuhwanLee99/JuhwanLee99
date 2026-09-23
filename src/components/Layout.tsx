import type { ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TopProgressBar } from './TopProgressBar';

export function Layout({ children }: { children: ReactNode }) {
  return <div className="shell">
    <header className="site-header"><div className="container header-inner">
      <Link className="brand" to="/" aria-label="이주환 포트폴리오 홈"><span className="brand-mark" aria-hidden="true" /> LEE JUHWAN / PORTFOLIO</Link>
      <nav className="site-nav" aria-label="주요 메뉴"><NavLink to="/">HOME</NavLink><NavLink to="/portfolio">PROJECTS</NavLink><NavLink to="/stack">STACK</NavLink></nav>
    </div></header>
    <TopProgressBar />
    <main>{children}</main>
    <footer className="site-footer"><div className="container footer-inner"><div><span className="kicker" style={{ color: '#b9d6eb' }}>SUMMARY / PROFILE</span><br /><strong>기획에서 구현, 현장 검증까지.</strong><p className="harvest-notice">이 사이트에 공개된 GitHub 계정 URL은 포트폴리오 확인 목적으로만 제공됩니다. 자동화 도구를 이용한 무단 수집·저장·재배포 및 영리 목적 이용을 금지합니다.</p></div><small>LEE JUHWAN<br />© {new Date().getFullYear()} PORTFOLIO</small></div></footer>
  </div>;
}
export default Layout;
