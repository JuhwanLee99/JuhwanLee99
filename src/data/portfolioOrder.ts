import { projects } from './projects';

const order = ['aubl', 'blackpin-app', 'blackpin-cs', 'syncgaze', 'snapfig', 'issue-control-team8', 'dip-team5', 'seniorro', 'jetlag-watch'];
export const orderedProjects = order.map((slug) => projects.find((project) => project.slug === slug)).filter((project): project is (typeof projects)[number] => Boolean(project));
export const chapterLabels: Record<string, string> = {
  aubl: '서비스 기획 · 현장 운영',
  'blackpin-app': '업무 분석 · 앱/웹 구축',
  'blackpin-cs': 'AI 업무 적용 · 검증',
  syncgaze: '시선 데이터 · 코칭',
  snapfig: 'PDF 학습 · 팀 협업',
  'issue-control-team8': '소프트웨어공학 · 팀 프로젝트',
  'dip-team5': '디지털영상처리 · AI 보정',
  seniorro: '서비스 · 사업 기획',
  'jetlag-watch': '개인 프로젝트 · 웨어러블',
};
