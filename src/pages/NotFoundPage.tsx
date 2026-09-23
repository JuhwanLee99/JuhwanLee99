import { Link } from 'react-router-dom';
import { SectionReveal } from '../components/SectionReveal';

export function NotFoundPage() {
  return (
    <SectionReveal className="rounded-3xl border border-white/12 bg-[#0a1f43]/55 p-10 text-center">
      <p className="text-xs uppercase tracking-[0.28em] text-white/55">404</p>
      <h1 className="mt-2 text-3xl font-black">요청한 페이지를 찾을 수 없습니다</h1>
      <p className="mt-3 text-white/80">슬러그나 URL을 확인하고 다시 시도해 주세요.</p>
      <Link
        to="/"
        className="mt-6 inline-flex rounded-full border border-white/20 px-5 py-2 text-sm text-aqua"
      >
        커버로 이동
      </Link>
    </SectionReveal>
  );
}
