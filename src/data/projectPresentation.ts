import type { ProjectData, ScreenshotItem } from '../types/project';

const slide = (page: number, title: string): ScreenshotItem => ({
  title,
  source: 'local',
  url: `/media/portfolio-slide-${String(page).padStart(2, '0')}.png`,
  alt: `${title} 원본 포트폴리오 슬라이드`,
});

const extraImages: Record<string, ScreenshotItem[]> = {
  aubl: [
    { title: '운영 웹 · 데스크톱', source: 'local', url: '/media/aubl-live-desktop.png', alt: 'AUBL 운영 웹사이트의 데스크톱 화면' },
    { title: '운영 웹 · 모바일', source: 'local', url: '/media/aubl-live-mobile.png', alt: 'AUBL 운영 웹사이트의 모바일 화면' },
    ...Array.from({ length: 8 }, (_, index): ScreenshotItem => ({ title: `App Store 출시 화면 ${index + 1}`, source: 'local', url: `/media/aubl-store-${index + 1}.jpg`, alt: `AUBL 공식 App Store 스크린샷 ${index + 1}` })),
    slide(3, 'AUBL 서비스 개요'), slide(4, 'AUBL 웹·앱·데이터 구조'), slide(5, 'AUBL 현장 검증과 기록 개선'),
  ],
  'blackpin-app': [slide(6, 'BLACKPIN 앱·웹·API 연결')],
  'blackpin-cs': [slide(7, 'BLACKPIN CS 업무 흐름'), slide(8, 'BLACKPIN CS 하네스와 검증')],
  syncgaze: [slide(9, 'SyncGaze 서비스 화면'), slide(10, '시선 추적 실험 화면'), slide(11, '분석과 AI 코칭 화면'), slide(12, '시스템 구조와 실험 결과')],
  snapfig: [slide(13, 'Snapfig PDF 학습 화면'), slide(14, 'Snapfig 협업과 시스템 구조')],
  seniorro: [slide(15, 'Seniorro 서비스 기획'), slide(16, 'Seniorro 참여자 분석과 사업 전략')],
};

const pointDetails: Record<string, string[]> = {
  aubl: [
    'KBO 경기 기록 이벤트를 점수 입력 모달과 연결해 현장 기록 흐름을 구성했습니다.',
    'IndexedDB 지속 대기열과 검증 어댑터로 입력 중단 이후의 재시도·복구 흐름을 보강했습니다.',
    '공식 기록 원본과 정정 결과, 공개 상태와 품질 경고를 경기·선수 상세 화면에서 구분했습니다.',
    '잔여 경기·진출 시나리오와 대진표·확정 추첨 결과를 순위·홈 화면에 연결했습니다.',
    '관리자 화면에서 증분 동기화·취소, 순위 비교와 기록 품질 상태를 확인하도록 구성했습니다.',
    '오늘 경기·최근 결과·공개 시각과 데이터 최신성을 홈 화면에서 구분했습니다.',
    '협업자가 개발한 Java·SQL·MariaDB 백엔드의 Docker 이미지를 직접 구축한 TrueNAS NAS에서 컨테이너로 운영하고 Portainer·Cloudflare를 활용했습니다.',
    '반응형 로그인과 브라우저·라우팅·기록 흐름 회귀 테스트로 운영 화면을 다듬었습니다.',
  ],
  'blackpin-app': [
    '서류 제출부터 관리자 검토까지 사용자별 상태 변화를 화면 흐름으로 옮겼습니다.',
    '앱과 관리자 화면이 공통 데이터를 사용하도록 요청과 응답의 계약을 맞췄습니다.',
    '화면에서 필요한 필드와 API DTO를 함께 정리해 구현 과정의 해석 차이를 줄였습니다.',
    '반복 조회와 상태 변경에 필요한 데이터 구조를 API와 연결했습니다.',
  ],
  'blackpin-cs': [
    '문의 유형에 따라 조회, 초안, 담당자 전달 등 필요한 처리 경로를 분리했습니다.',
    '답변 생성 전에 정책과 데이터베이스에서 근거를 조회하도록 흐름을 설계했습니다.',
    '생성된 답변을 검증하고, 최종 전송은 담당자 승인 뒤에 진행하도록 경계를 뒀습니다.',
    '동일 문의를 여러 모델과 조건에서 재실행해 답변과 비용을 비교했습니다.',
  ],
  syncgaze: [
    'WebGazer 추적·캘리브레이션 조건을 튜닝하고 실제 시선 샘플의 수집 안정성을 확인했습니다.',
    '추적 조건별 A/B 테스트를 진행해 정확도와 사용 흐름을 비교했습니다.',
    '고정 응시 지점 대비 gaze 좌표 오차를 측정하는 정확도 검증 유닛을 구성했습니다.',
    '시선 샘플의 실제 기록 여부로 훈련 저장 조건을 판정하고, 이탈 시 웹캠 스트림을 종료하도록 정리했습니다.',
    '세션 삭제를 Firestore와 클라이언트 상태, 캐시, 목록·결과 화면에 함께 반영해 데이터 불일치를 줄였습니다.',
    '시선 반응시간과 시선-마우스 지연시간, 이전 세션과의 점수 차이를 리포트에서 해석할 수 있게 했습니다.',
    '한국어·영어 문구를 정리하고 Vitest·Cypress로 정상 흐름과 입력 오류 분기를 검증했습니다.',
  ],
  snapfig: [
    'Flutter PDF 뷰어를 구현하면서 비동기 문서 로딩, 확대·축소, 페이지 이동, 검색 컨트롤과 오류 상태를 다뤘습니다.',
    '페이지/Figure 사이드바를 PDF 스크롤과 연결하고 홈에서 로컬 문서를 열어 최근 문서로 이어지는 흐름을 구성했습니다.',
    'BasePDF·BasePage 모델과 캐싱 구조를 정리해 뷰어 상태와 문서 데이터를 분리했습니다.',
    'OCR 서버의 HTTP/SSE 연동과 OCRProvider 결과·오류 처리, 팀 위키·기여 가이드 문서화에는 공동으로 참여했습니다.',
  ],
  'issue-control-team8': [
    '사용자·프로젝트·이슈·댓글 관리 요구를 역할별 유스케이스로 정리했습니다.',
    'SSD와 Operation Contract로 요청의 전제조건, 처리 순서와 데이터 변경을 구체화했습니다.',
    'Spring Boot의 Controller-Service-Repository 구조에서 REST API 개발에 참여했습니다.',
    'DTO로 API 입출력과 엔티티를 나누고 JPA·H2 저장 및 React의 JSON 요청·응답을 연결했습니다.',
    '사용자 역할과 프로젝트 접근 권한, 예외 상황의 처리 흐름을 검토했습니다.',
  ],
  'dip-team5': [
    'MobileNetV2 장면 분류와 프리셋 선택 흐름을 구현하고 로컬 가중치 탐색·오류 처리를 보완했습니다.',
    'AI 진단 파라미터와 장면 프리셋을 융합 가중치로 섞어 보정 강도를 조정하는 흐름에 참여했습니다.',
    '추가 수동 필터와 예측 파라미터·추천 필터 미리보기를 구현했습니다.',
    '히스토그램 분석·시각화, OpenCV 입출력, 초기 Streamlit UI와 실행 환경을 정리했습니다.',
  ],
  seniorro: [
    '유사 서비스의 강점과 한계를 비교해 필요한 차별 요소를 정리했습니다.',
    '경력자와 고객이 각각 얻는 가치와 참여 장벽을 나누어 분석했습니다.',
    '서비스 초기 신뢰를 위한 검증과 보상 흐름을 기획했습니다.',
    '서비스 운영 규칙과 함께 확장 가능한 순서를 제안했습니다.',
  ],
  'jetlag-watch': [
    '네트워크 없이도 입력한 항공 일정과 시간대를 바탕으로 가이드가 계산되도록 했습니다.',
    '휴대폰과 시계에서 같은 일정을 다른 화면 밀도로 확인할 수 있게 구성했습니다.',
    '수정과 삭제, 재동기화 상황을 별도 시나리오로 정리했습니다.',
    '출시 전 확인할 개인정보와 건강 정보의 경계를 문서로 관리했습니다.',
  ],
};

export function getGallery(project: ProjectData): ScreenshotItem[] {
  const unique = new Map<string, ScreenshotItem>();
  const originalImages = ['blackpin-app', 'blackpin-cs', 'seniorro'].includes(project.slug) ? [] : project.screenshots;
  const images = project.slug === 'aubl' ? [...(extraImages[project.slug] ?? []), ...originalImages] : [...originalImages, ...(extraImages[project.slug] ?? [])];
  for (const image of images) unique.set(image.url, image);
  return [...unique.values()];
}

export function getPointDetail(project: ProjectData, index: number): string {
  return pointDetails[project.slug]?.[index] ?? project.architecture[index % project.architecture.length] ?? project.description.solution;
}
