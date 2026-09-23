import type { ProjectData } from '../types/project';

export const PROJECT_CATEGORIES = [
  'all',
  'web',
  'mobile',
  'system',
  'education',
  'ai',
] as const;

export const LAUNCH_STATUS = [
  { label: 'all', value: 'all' },
  { label: '출시 확정', value: 'launch-ready' },
  { label: '개발/리뷰', value: 'internal-review' },
  { label: '진행 중', value: 'in-progress' },
] as const;

const pending = {
  linkStatus: 'pending' as const,
  note: '현재 공개 링크가 미확정입니다. 추후 스토어/라이브 주소를 업데이트합니다.',
};

export const projects: ProjectData[] = [
  {
    slug: 'aubl',
    title: 'AUBL',
    status: 'launch-ready',
    launchType: ['web', 'mobile', 'ios', 'android', 'cross-platform'],
    category: 'web',
    summary:
      '대학생 아마추어 야구 리그를 위한 경기 운영 플랫폼. 실시간 기록, 스코어보드, 순위·통계, 관리자/코치 워크플로우를 통합했습니다.',
    timeline: {
      role: '팀장 · 웹 서비스/기록·순위 UX · 현장 운영 검증',
      period: '2026.01 - 현재',
    },
    description: {
      problem:
        '수동 기록과 흩어진 공지·일정 시스템으로 인해 경기 운영과 실시간 안내가 느리거나 누락되는 문제가 있었습니다.',
      solution:
        '웹 운영 UI·점수 입력·브로드캐스트 오버레이·권한 기반 관리자 기능과 Flutter 모바일 채널을 연결했습니다. 협업자가 구현한 Java·SQL·MariaDB 백엔드는 Docker 이미지로 패키징되어 직접 구축한 TrueNAS NAS에서 컨테이너로 운영됩니다.',
      impact:
        '약 2주간의 현장 운영으로 실제 경기 입력과 기록 수정 흐름을 확인하고, 실시간 경기 상태와 확정 기록을 분리해 운영 기준을 정리했습니다.',
    },
    highlights: [
      'KBO 기록 이벤트를 반영한 경기 입력 화면과 점수 기록 모달 구성',
      'IndexedDB 기반 기록 대기열·검증 어댑터로 입력 중단과 재시도 흐름 보강',
      '공식 기록 재생 화면과 원본 검토·정정 상태를 분리한 기록 UX',
      '잔여 경기와 진출 가능 시나리오 계산, 대진표·확정 추첨 공개 화면',
      '관리자 증분 동기화·취소·순위 비교 컨트롤과 기록 품질 표시',
      '오늘 경기·일정 공개 시각·데이터 최신성을 구분하는 홈 화면',
      '협업자 Java·SQL·MariaDB 백엔드와 직접 구축한 TrueNAS NAS의 Docker 컨테이너 운영 구조',
      '브라우저·라우팅·기록 흐름 회귀 테스트와 운영 배포 점검',
    ],
    techStack: {
      frontend: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router'],
      backend: ['Java (협업자 구현)', 'SQL', 'MariaDB', 'Firebase Cloud Functions', 'Firestore', 'Storage'],
      infrastructure: ['직접 구축한 TrueNAS NAS', 'Docker', 'Portainer', 'Cloudflare', 'Firebase Hosting', 'GitHub'],
      testing: ['Firestore Emulator', 'Emulator Script', 'Release Checklists'],
    },
    responsibilities: [
      '경기 기록 이벤트 엔진과 입력 모달을 웹 화면에 연결하고, 기록 입력·확정·공개 상태의 경계를 정리',
      'IndexedDB 지속 대기열과 검증된 커밋 어댑터를 구성해 연결 중단 후 재시도·복구 가능한 기록 입력 흐름 보강',
      '공식 기록 원본과 정정 결과, 검토 대기·해결 상태를 경기·선수 상세 화면에서 구분해 표시',
      '잔여 경기 조합과 진출 시나리오, 대진표와 확정 추첨 결과를 순위·홈 화면에 연결',
      '관리자 화면에 증분 동기화, 취소, 순위 비교와 데이터 품질 상태를 확인하는 컨트롤 구성',
      '오늘 경기·최근 결과·공개 시각을 일관되게 표시하고 서버/캐시/오류 상태를 구분하는 홈 화면 개선',
      '로그인 페이지의 데스크톱·모바일 읽기 순서와 컨트롤 대비를 정리하고 브라우저 회귀 테스트 추가',
      'NAS를 직접 구축하고 협업자 백엔드의 Docker 이미지를 TrueNAS에서 컨테이너로 운영하는 환경 구성',
      'Portainer와 Cloudflare를 활용해 컨테이너 관리와 서비스 운영 경로 정리',
      '현장 운영 이슈를 재현 가능한 테스트·릴리스 문서로 정리하고 웹 배포 상태를 점검',
    ],
    architecture: [
      '공유 인증 계층: Firebase Auth 기반 사용자 그룹화',
      '실시간 경기 모듈: 경기 이벤트, 스코어, 스탯 계산 파이프라인',
      '관리자 모듈: 팀/경기 승인·공지·리그 편집',
      '데이터·API: Gameone 연동과 협업자 Java·SQL·MariaDB 백엔드',
      '오버레이 모듈: 방송 화면과 동기되는 듀얼 뷰',
      '운영 인프라: Docker 이미지 → 직접 구축한 TrueNAS NAS 컨테이너, Portainer·Cloudflare 활용',
    ],
    links: [
      {
        label: 'GitHub',
        type: 'github',
        url: 'https://github.com/JuhwanLee99/AUBL_WebPage',
        status: 'live',
      },
      {
        label: '웹사이트',
        type: 'website',
        url: 'https://aubl.club',
        status: 'live',
      },
      {
        label: '이용약관',
        type: 'document',
        url: 'https://aubl.club/terms',
        status: 'live',
      },
      {
        label: '개인정보처리방침',
        type: 'document',
        url: 'https://aubl.club/privacy',
        status: 'live',
      },
      {
        label: '계정 삭제 안내',
        type: 'document',
        url: 'https://aubl.club/account-deletion',
        status: 'live',
      },
      {
        label: 'iOS App Store',
        type: 'app-store',
        url: 'https://apps.apple.com/kr/app/id6759555611',
        status: 'live',
      },
      {
        label: 'Google Play',
        type: 'play-store',
        url: 'https://play.google.com/store/apps/details?id=com.aubl.app',
        status: 'live',
      },
    ],
    screenshots: [
      {
        title: '홈/로고 가이드',
        source: 'local',
        url: '/media/aubl-logo.jpg',
        alt: 'AUBL logo',
      },
    ],
    galleryNotes: '로컬 스크린샷은 프로젝트 리포지토리에 존재하는 공개 에셋을 기반으로 편집해 구성했습니다.',
  },
  {
    slug: 'syncgaze',
    title: 'SyncGaze',
    status: 'internal-review',
    launchType: ['web', 'ai'],
    category: 'ai',
    summary:
      '시선 추적 기반 FPS(1인칭 슈팅 게임) 트레이닝 플랫폼. 온보딩·캘리브레이션·조준 훈련·결과 분석 흐름을 하나의 리액트 웹 앱으로 구축했습니다.',
    timeline: {
      role: 'WebGazer 튜닝·A/B 실험·정확도 측정, 세션 UX·리포트·테스트 자동화',
      period: '2025.09 - 2025.12',
    },
    description: {
      problem: '훈련 로그, 설문, 동의, 점수 산출이 분산되어 체계적 분석이 어려웠습니다.',
      solution:
        'Vite 기반 웹 앱으로 온보딩~캘리브레이션~트레이닝~레포트까지 상태 머신 형태로 구조화하고, 백엔드와 연동해 세션 저장/CSV 업로드/AI 리포트를 연결했습니다.',
      impact:
        '기기 권한·웹캠 흐름, 세션 저장, 조준·시선 지표 산출과 리포트 생성을 통합해 FPS 트레이닝 조건과 결과 분석을 반복할 수 있게 했습니다.',
    },
    highlights: [
      'WebGazer 추적·캘리브레이션 조건 튜닝과 시선 샘플 안정성 점검',
      '추적 조건별 A/B 테스트로 정확도와 사용 흐름 비교',
      '고정 응시 지점 대비 gaze 좌표 오차를 확인하는 정확도 측정 유닛 구축',
      '실제 시선 샘플 수를 기준으로 훈련 결과 저장 여부를 판정하는 종료 흐름 개선',
      '캘리브레이션 지점 클릭 피드백과 카운터, 이전 세션 대비 점수 안내 구현',
      '화면 이탈 시 WebGazer 비디오와 MediaStream 트랙을 정리해 웹캠 종료 처리',
      '세션 삭제 시 Firestore·클라이언트 상태·캐시·리더보드 반영 경로 연결',
      '리포트에 시선 반응시간·시선-마우스 지연시간과 지표 요약 추가',
      '성과 지표 퍼센타일 기준 조정과 대시보드·결과·상세 화면 번역 정리',
      'Vitest/React Testing Library로 온보딩·세션·분석·예측 fallback 검증',
      'Cypress로 설문→동의→캘리브레이션→결과 및 입력 오류 분기 검증',
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'WebGazer'],
      backend: ['Express.js', 'Firebase Admin', 'Cloud Functions'],
      infrastructure: ['Firebase', 'Cloud Storage'],
      ai: ['Anthropic API', 'ML 추론 Function'],
      testing: ['Vitest', 'React Testing Library', 'Cypress'],
    },
    responsibilities: [
      'WebGazer 추적 설정과 캘리브레이션 조건을 조정하고 실제 수집 시선 샘플을 기준으로 동작을 점검',
      '추적 조건을 나누어 A/B 테스트를 진행하고 정확도·사용 흐름의 차이를 비교',
      '고정 응시 지점과 예측 gaze 좌표의 오차를 측정하는 정확도 검증 유닛과 결과 확인 흐름 구축',
      '훈련 완료 판정을 웹캠 상태가 아닌 실제 gaze sample 기록 기준으로 바꾸고, 데이터가 없을 때만 저장을 차단하는 예외 흐름 구현',
      '캘리브레이션 클릭 효과와 지점별 카운터, 훈련 종료 시 이전 세션과의 점수 차이 안내 구현',
      '캘리브레이션·훈련 이탈 시 WebGazer 종료와 비디오 MediaStream 트랙 정리로 카메라가 남는 문제 수정',
      '세션별 삭제 동작을 Firestore 정리, 세션 컨텍스트, 로컬 캐시, 세션 목록·결과·리더보드 화면에 연결',
      '리포트의 측정 지표 요약과 시선 반응시간·시선-마우스 지연시간 평가 항목 추가, 퍼센타일 구간 조정',
      '대시보드 랭크와 결과·상세 화면의 한국어/영어 문구를 정리해 단계별 의미 일치성 개선',
      'WebGazer·ResizeObserver·matchMedia 목을 포함한 Vitest 환경과 설문·동의·트래커·분석·예측 서비스 단위 테스트 구축',
      'Cypress 로그인 계정 주입과 설문 필수값·동의 누락 방어, 전체 트래킹 여정 E2E 시나리오 작성',
    ],
    architecture: [
      '트래킹 파이프라인: 캘리브레이션 → 실시간 추적 수집',
      '세션 동기화 모듈: 세션/캘리브레이션/설문 상태 영속화',
      '백엔드 라우터 모듈: CSV 업로드, 설문 저장, 리포트 생성',
      '분석 모듈: 분석 지표 계산, CSV export, 히스토리 뷰',
      '확장 모듈: Python ML 추론/CloudRun 파이프라인',
    ],
    links: [
      {
        label: 'GitHub',
        type: 'github',
        url: 'https://github.com/papercd/SyncGaze',
        status: 'live',
      },
      {
        label: 'GitHub 기여 내역',
        type: 'document',
        url: 'https://github.com/papercd/SyncGaze/commits?author=JuhwanLee99',
        status: 'live',
      },
      {
        label: '웹 데모',
        type: 'web-demo',
        url: 'https://syncgaze-95af0.web.app/',
        status: 'live',
      },
      {
        label: '문서 뷰 (README)',
        type: 'document',
        url: 'https://github.com/papercd/SyncGaze/blob/main/SyncGaze/README.md',
        status: 'live',
      },
    ],
    screenshots: [
      {
        title: 'SyncGaze 트레이닝 화면',
        source: 'remote',
        url: 'https://github.com/user-attachments/assets/6d86c1f0-3e2b-4e54-be9a-1b6f0510a29b',
        alt: 'SyncGaze overview',
      },
      {
        title: 'SyncGaze 결과 화면',
        source: 'remote',
        url: 'https://github.com/user-attachments/assets/cc6e7c37-c57b-43b7-a1e7-486c5e3a07e9',
        alt: 'SyncGaze result',
      },
    ],
    galleryNotes:
      'README에 포함된 공개 이미지로 구현 흐름을 구성했습니다. 웹 데모는 Firebase Hosting 공개 주소로 연결됩니다.',
  },
  {
    slug: 'jetlag-watch',
    title: 'JetLag Watch',
    status: 'in-progress',
    launchType: ['ios', 'prototype', 'mobile', 'cross-platform'],
    category: 'system',
    summary:
      '장거리 항공 동선을 기반으로 오프라인 중심의 수면·활동·빛 노출 가이드를 제공하는 iOS + watchOS 프로토타입.',
    timeline: {
      role: '앱 아키텍처 정비, 오프라인 가이드 규칙 적용, 릴리스 게이트 문서화',
      period: '2026.07 - 현재',
    },
    description: {
      problem: '여행 전후 수면 교란을 줄이는 수면 플랜이 플랫폼/API 의존도가 높고, 오프라인 사용성이 낮았습니다.',
      solution:
        '오프라인 우선 iOS/Watch 동기화 구조로 항공편 직접 입력 기반 일정 계산 엔진을 만들고, 위젯·컴플리케이션·알림을 통해 동작 단계 가이드를 제공합니다.',
      impact:
        '네트워크 제약 하에서도 기본 가이드를 제공할 수 있고, 릴리스 게이트 문서로 App Store 제출 준비 품질을 제고했습니다.',
    },
    highlights: [
      '오프라인 항공편/타임존 기반 deterministic 스케줄 생성',
      'Apple Watch 라디얼 타임라인 및 위젯/컴플리케이션 연동',
      'iPhone+Watch 동기화 흐름(교정, 삭제, 동기화 복구) 문서화',
      'HealthKit은 Debug 전용 테스트로 제한해 런칭 게이트 관리',
      'TestFlight/릴리스 게이트 문서 기반 점검 항목 적용',
      '근거 기반 가이드 링크(논문/CDC 지침) 기반 안전성 경계 정비',
    ],
    techStack: {
      frontend: ['SwiftUI', 'SwiftUI Widgets'],
      backend: ['SwiftData', 'WatchConnectivity'],
      infrastructure: ['Xcode 16.4', 'iOS 18', 'watchOS 11', 'App Group'],
      testing: ['Unit Test', 'Manual QA', 'TestFlight 검증 체크리스트'],
    },
    responsibilities: [
      '오프라인 규칙 엔진 문서/코드 정합성 정리',
      'iOS/Watch 공유 상태 설계 및 동기화 edge-case 정리',
      '릴리스 게이트 문서(안전성/개인정보) 기반 상태 추적',
      'UX 시나리오 기반 재실행 테스트 플로우 정리',
    ],
    architecture: [
      '스케줄 산출 엔진: 항공편 입력 → IANA 타임존 보정',
      '스케줄 표현 레이어: 휴대폰 알림, 위젯, Watch 타임라인',
      '동기화 레이어: App Group + 사용자 로컬 데이터 저장소',
      '예외 처리 레이어: 삭제/복구/업데이트 경로',
      '릴리스 게이트 레이어: Privacy manifest, App Store 경계 체크',
    ],
    links: [
      {
        label: 'GitHub',
        type: 'github',
        url: 'https://github.com/JuhwanLee99/jetlag_watch',
        status: 'live',
      },
      {
        label: 'App Store',
        type: 'app-store',
        status: 'pending',
        ...pending,
      },
      {
        label: '공식 문서',
        type: 'document',
        url: 'https://github.com/JuhwanLee99/jetlag_watch/blob/main/README.md',
        status: 'live',
      },
    ],
    screenshots: [
      {
        title: 'iPhone + Apple Watch 화면 포스터',
        source: 'local',
        url: '/media/jetlag-poster.png',
        alt: 'JetLag iPhone 앱과 Apple Watch 타임라인을 함께 보여주는 기존 포스터',
        presentation: 'poster',
      },
      {
        title: 'iPhone 앱 · 여행 대시보드',
        source: 'local',
        url: '/media/jetlag-iphone-dashboard.png',
        alt: 'iPhone 시뮬레이터에서 실행한 JetLag 앱의 ICN에서 LAX까지 여행 대시보드',
        presentation: 'phone',
      },
      {
        title: 'iPhone 앱 · 여행 일정 미리보기',
        source: 'local',
        url: '/media/jetlag-iphone-trip-preview.png',
        alt: 'iPhone 시뮬레이터에서 실행한 JetLag 앱의 여행 일정 생성 및 미리보기 화면',
        presentation: 'phone',
      },
      {
        title: 'Apple Watch 앱 · 동기화 대기',
        source: 'local',
        url: '/media/jetlag-watch-sync.png',
        alt: 'Apple Watch 시뮬레이터에서 실행한 JetLag 앱의 여행 동기화 대기 화면',
        presentation: 'watch',
      },
    ],
    galleryNotes: 'iPhone 및 Watch 이미지는 iOS 18.6·watchOS 11.5 시뮬레이터에서 직접 캡처했습니다. Watch 단독 캡처는 동기화 대기 상태이며, 일정 타임라인은 기존 포스터에 담겨 있습니다.',
  },
  {
    slug: 'snapfig',
    title: 'SnapFig',
    status: 'internal-review',
    launchType: ['mobile', 'cross-platform'],
    category: 'education',
    summary:
      '대학생 전공서적 학습 효율 향상을 위해 PDF OCR과 주석/그림 매핑을 제공하는 크로스플랫폼 학습 도우미 모바일 앱.',
    timeline: {
      role: 'Flutter 프론트엔드 · PDF 뷰어 구현 · OCR 연동 공동 작업',
      period: '2025.03 - 2025.06',
    },
    description: {
      problem:
        '긴 텍스트형 교재 콘텐츠를 수동 탐색하면서 핵심 페이지/주석을 빠르게 찾기 어렵고 반복 복습이 번거로웠습니다.',
      solution:
        'OCR 추출 텍스트와 Figure 매핑, 노트형 뷰를 결합한 인터랙티브 스터디 파이프라인을 모바일 앱으로 구현합니다.',
      impact:
        '문서-주석 간 점프 흐름이 빠르고, 개별 학생 활동 기록을 구조적으로 모으기 쉬운 형태로 정리되었습니다.',
    },
    highlights: [
      '비동기 로딩과 오류 처리를 갖춘 Flutter PDF 뷰어 위젯 구현',
      '핀치·아이콘 확대, 중앙 정렬, 페이지 이동·검색 하단 컨트롤 구성',
      '페이지/Figure 사이드바와 문서 스크롤 연동',
      '홈 화면에서 PDF 열기, 최근 문서와 로컬 PDF 로딩 흐름 연결',
      'PDF·페이지 모델과 캐싱 구조 정리',
      'OCR 서버 HTTP/SSE 연동 및 결과·오류 처리 공동 작업',
      'README·기여 가이드·위키 문서화 공동 작업',
    ],
    techStack: {
      frontend: ['Flutter', 'Dart', 'Material Design'],
      backend: ['Spring Boot'],
      infrastructure: ['Isar DB', 'OCR engine'],
      testing: ['커스텀 QA 플로우', '위키 기반 기능 검수'],
    },
    responsibilities: [
      'PDF 뷰어 화면 구현: 비동기 문서 로딩, 확대·축소, 페이지 이동과 검색 UI',
      '페이지/Figure 사이드바 및 스크롤 연동, 홈→뷰어 이동과 로컬 PDF 열기 흐름 구현',
      'BasePDF·BasePage 모델, 최근 문서와 캐싱·오류 처리 구조 정리',
      'OCR 서버 API(HTTP/SSE)와 OCRProvider 결과·오류 처리 연동에 공동 기여',
      'README·CONTRIBUTING·위키 등 팀 문서화에 공동 기여',
    ],
    architecture: [
      '문서 파싱 레이어: OCR/텍스트 정제',
      '지도 레이어: Figure ID와 페이지 오브젝트 매핑',
      '학습 레이어: 노트/팝업/빠른 이동',
      '저장 레이어: 로컬 DB로 오프라인 접근성 강화',
      '동기화 레이어: 서버-클라이언트 교차 지원 범위 분리',
    ],
    links: [
      {
        label: 'GitHub',
        type: 'github',
        url: 'https://github.com/CommitBang/Snapfig-Frontend',
        status: 'live',
      },
      {
        label: '위키 문서',
        type: 'document',
        url: 'https://github.com/CommitBang/Snapfig-Frontend/wiki',
        status: 'live',
      },
      {
        label: '웹/스토어',
        type: 'website',
        status: 'pending',
        ...pending,
      },
    ],
    screenshots: [
      {
        title: 'SnapFig 소개',
        source: 'remote',
        url: 'https://raw.githubusercontent.com/CommitBang/Snapfig-Frontend/develop/docs/assets/MainView.PNG',
        alt: 'SnapFig banner',
      },
      {
        title: 'SnapFig 위키 스샷',
        source: 'remote',
        url: 'https://raw.githubusercontent.com/CommitBang/Snapfig-Frontend/develop/docs/assets/FigureLink.PNG',
        alt: 'SnapFig technical overview',
      },
    ],
    galleryNotes:
      '원본 저장소/위키 공개 자산을 fallback로 사용합니다. 스크린샷은 스토어 공개본 또는 앱 데모 캡처로 교체 가능합니다.',
  },
  {
    slug: 'issue-control-team8',
    title: 'Issue Control · Team 8',
    status: 'internal-review',
    launchType: ['web', 'prototype'],
    category: 'system',
    summary: '소프트웨어공학 팀 프로젝트로 만든 이슈 관리 시스템. 웹과 CLI에서 프로젝트·사용자·이슈를 관리하고 서버 API와 데이터베이스로 연결했습니다.',
    timeline: {
      role: '요구사항·설계 명세 · Spring Boot REST API 개발 참여',
      period: '정확한 기간 확인 중',
    },
    description: {
      problem: '프로젝트별 이슈와 담당자, 진행 상태를 분리된 수단으로 관리하면 작업 현황과 변경 이력을 파악하기 어렵습니다.',
      solution: 'React·TypeScript 웹, Python CLI, Spring Boot API와 H2 데이터베이스를 연결해 프로젝트·계정·이슈를 공통 데이터 모델로 관리했습니다.',
      impact: '요구사항을 API 처리 조건과 데이터 변경으로 연결하고, 웹·CLI 데모와 설계·테스트 자료를 갖춘 팀 구현 결과물을 완성했습니다.',
    },
    highlights: [
      '사용자 역할별 기능을 유스케이스로 정리하고 SSD·Operation Contract로 구체화',
      'Controller-Service-Repository 구조의 REST API 개발 참여',
      'DTO로 API 입출력과 엔티티를 분리하고 JPA·H2 저장 경로 연결',
      '역할·프로젝트 접근 권한과 예외 처리 흐름 검토',
      '프로젝트와 사용자 계정을 관리하는 웹 UI',
      '이슈 등록·할당·상태 관리 흐름을 지원하는 팀 시스템',
      'React 클라이언트의 JSON 연동과 Python CLI 접근 경로',
    ],
    techStack: {
      frontend: ['React 18', 'TypeScript', 'Material UI', 'Axios', 'React Router'],
      backend: ['Java 17', 'Spring Boot 3.2', 'Spring Data JPA', 'H2', 'Python CLI'],
      infrastructure: ['GitHub', 'OpenAPI'],
      testing: ['JUnit', '웹·CLI 데모', '요구사항·UML 검토'],
    },
    responsibilities: [
      '사용자·프로젝트·이슈·댓글 관리 요구를 기능 명세와 서버 처리 구조로 구체화',
      '사용자 역할별 유스케이스와 SSD·Operation Contract에 요청 전제조건, 처리 순서, 데이터 변경 정리',
      'Java/Spring Boot의 Controller-Service-Repository 구조에서 REST API 개발 참여',
      'DTO로 입출력과 엔티티를 구분하고 JPA·H2 저장 및 React 클라이언트 JSON 연동 처리',
      '사용자 역할·프로젝트 접근 권한 확인과 예외 처리 흐름 검토',
    ],
    architecture: [
      '웹 클라이언트: 프로젝트·계정·이슈 관리 화면',
      'CLI 클라이언트: 명령행 기반 관리 흐름',
      'REST API: 웹·CLI 요청과 도메인 동작 연결',
      'JPA·H2: 공통 데이터 모델과 영속화',
      '설계 문서: 요구사항, 유스케이스, UML 및 테스트 시나리오',
    ],
    links: [
      { label: '팀 GitHub 저장소', type: 'github', url: 'https://github.com/JadenChoi2k/cau-se2-issue-control-team8', status: 'live' },
    ],
    screenshots: [
      { title: '프로젝트 관리 화면', source: 'local', url: '/media/issue-control-web-01.jpg', alt: '팀8 이슈 관리 시스템 웹 데모의 프로젝트 관리 화면' },
      { title: '새 프로젝트 생성', source: 'local', url: '/media/issue-control-web-02.jpg', alt: '팀8 이슈 관리 시스템의 프로젝트 생성과 팀원 선택 화면' },
      { title: '사용자 관리', source: 'local', url: '/media/issue-control-web-03.jpg', alt: '팀8 이슈 관리 시스템의 사용자 관리 화면' },
    ],
    galleryNotes: '제공된 웹 데모 영상에서 공개 가능한 화면을 캡처했습니다. 로그인·비밀번호 입력 및 CLI 화면은 제외했습니다. 정확한 프로젝트 기간은 확인 후 업데이트합니다.',
  },
  {
    slug: 'dip-team5',
    title: 'AI Color Harmony · DIP Team 5',
    status: 'internal-review',
    launchType: ['ai', 'web', 'prototype'],
    category: 'ai',
    summary: '장면 분류와 AI 진단으로 보정 강도를 추정하고, 직접 구현한 영상처리 알고리즘으로 색 균형을 조정하는 디지털영상처리 팀 프로젝트.',
    timeline: {
      role: '장면 분류 · 필터/미리보기 · 시각화/입출력 · 실행 환경',
      period: '2025.11',
    },
    description: {
      problem: '노출·화이트밸런스·채도가 어긋난 사진마다 필요한 보정량이 달라 일괄 필터만으로는 자연스러운 결과를 얻기 어렵습니다.',
      solution: 'MobileNetV2 장면 분류와 진단 모델의 제안을 융합해 보정 파라미터를 결정하고, 색 공간 변환·화이트밸런스·감마·채도/색조 조정을 직접 구현한 픽셀 처리 단계에 적용했습니다.',
      impact: '원본과 보정본, 예측 파라미터 및 추천 필터를 함께 비교하고 융합 가중치를 조정할 수 있는 콘솔·Streamlit 데모 흐름을 구성했습니다.',
    },
    highlights: [
      'MobileNetV2 기반 장면 분류와 장면별 보정 프리셋',
      'AI 진단값과 프리셋을 융합 가중치로 혼합',
      'RGB↔HSV 변환·화이트밸런스·감마·채도/색조 수동 영상처리 파이프라인',
      'Natural·Vivid·Muted 필터와 예측 파라미터 미리보기',
      '히스토그램 분석·시각화와 원본/보정본 비교',
      'OpenCV 입출력, 로컬 모델 가중치 및 오류 처리',
      'Streamlit 웹 데모 초기 화면과 Visual Studio 실행 환경 정리',
    ],
    techStack: {
      frontend: ['Streamlit'],
      backend: ['Python', 'PyTorch', 'TorchVision', 'OpenCV', 'Matplotlib'],
      ai: ['MobileNetV2', '영상 진단 CNN'],
      infrastructure: ['Conda', 'Visual Studio 솔루션'],
      testing: ['원본·보정 결과 비교', '미리보기·저장 결과 일치 검증'],
    },
    responsibilities: [
      'MobileNetV2 장면 분류 흐름과 가중치 로딩·오류 처리 구현',
      '히스토그램 분석·시각화와 OpenCV 입출력 유틸리티 구현',
      '추가 수동 필터, 예측 파라미터·추천 필터 미리보기 및 융합 가중치 안내 구현',
      'Streamlit 웹 데모 초기 UI와 콘솔 실행 흐름 연결',
      'Conda·Visual Studio 실행 환경 및 README 사용법 정리',
    ],
    architecture: [
      '입력·분석: 이미지 로딩과 히스토그램 계산',
      '장면 분류: MobileNetV2로 장면 프리셋 선택',
      'AI 진단: 노출·화이트밸런스·채도 보정량 추정',
      '파라미터 융합: 진단값과 프리셋을 가중치로 결합',
      '수동 보정: 색 공간·화이트밸런스·감마·채도/색조 연산',
      '표현·저장: 원본/결과 비교, 필터 미리보기와 파일 출력',
    ],
    links: [
      { label: 'GitHub', type: 'github', url: 'https://github.com/JuhwanLee99/TeamProject2_DIP_Team5', status: 'live' },
      { label: 'GitHub 기여 내역', type: 'document', url: 'https://github.com/JuhwanLee99/TeamProject2_DIP_Team5/commits/main/?author=JuhwanLee99', status: 'live' },
      { label: '프로젝트 README', type: 'document', url: 'https://github.com/JuhwanLee99/TeamProject2_DIP_Team5/blob/main/README.md', status: 'live' },
    ],
    screenshots: [
      { title: '이미지 보정 처리 흐름', source: 'local', url: '/media/dip-team5-pipeline.svg', alt: '장면 분류와 AI 진단, 파라미터 융합, 수동 보정, 결과 저장으로 이어지는 구성도' },
      { title: '노출 보정 입력 예시', source: 'remote', url: 'https://raw.githubusercontent.com/JuhwanLee99/TeamProject2_DIP_Team5/main/data/input/exposure.jpg', alt: '노출 보정 테스트에 사용한 원본 입력 이미지' },
      { title: '채도 보정 입력 예시', source: 'remote', url: 'https://raw.githubusercontent.com/JuhwanLee99/TeamProject2_DIP_Team5/main/data/input/saturation.jpg', alt: '채도 보정 테스트에 사용한 원본 입력 이미지' },
      { title: '화이트밸런스 입력 예시', source: 'remote', url: 'https://raw.githubusercontent.com/JuhwanLee99/TeamProject2_DIP_Team5/main/data/input/wb.jpg', alt: '화이트밸런스 보정 테스트에 사용한 원본 입력 이미지' },
    ],
    galleryNotes: '첫 이미지는 저장소 구조를 바탕으로 재구성한 개념도입니다. 나머지는 저장소의 원본 입력 예시이며 보정 결과물로 표시하지 않았습니다. 공개 실행 URL은 확인되지 않아 GitHub만 연결했습니다.',
  },
  {
    slug: 'blackpin-app', title: 'BLACKPIN · 앱/웹', status: 'internal-review',
    launchType: ['web', 'mobile'], category: 'web',
    summary: '현장실습 인턴십에서 사내 사용자 업무를 분석하고 Flutter 앱, React 관리자 화면, API와 데이터베이스의 연결을 설계·구현했습니다.',
    timeline: { role: '개발 인턴 · 사용자 흐름 분석 · 화면/API/DB 연동', period: '2026.03 - 2026.07' },
    description: {
      problem: '서류 제출과 관리자 검토가 분리되어 사용자가 같은 정보를 반복 입력하고 상태를 확인하기 어려웠습니다.',
      solution: '사용자 앱과 관리자 웹이 공유하는 데이터 계약을 정의하고 REST API와 PostgreSQL을 연결했습니다.',
      impact: '업무 흐름과 예외 조건을 화면, API 명세, 데이터 구조에 함께 반영한 검증용 프로토타입을 구성했습니다.',
    },
    highlights: ['사용자 업무 분석에서 화면 설계까지 연결', 'Flutter 사용자 앱과 React 관리자 웹 구현', '공유 타입과 API DTO 정리', 'REST API와 PostgreSQL 연동', '상태/예외 조건을 테스트 시나리오에 반영'],
    techStack: { frontend: ['Flutter', 'React', 'TypeScript'], backend: ['REST API', 'PostgreSQL'], infrastructure: ['Git'], testing: ['Mock API', '업무 흐름 검증'] },
    responsibilities: ['사용자 업무와 요청 유형 분석', 'Flutter/React 화면 구현', 'API·DB 연동', 'API 명세와 업무 흐름 문서 정리'],
    architecture: ['사용자 앱: 서류 제출과 상태 확인', '관리자 웹: 요청 검토와 처리', '공유 계약: 타입과 DTO', 'API: 요청/응답 및 예외 처리', 'PostgreSQL: 공통 업무 데이터'],
    links: [{ label: '공개 저장소', type: 'github', status: 'pending', note: '사내 프로젝트로 공개 URL이 없습니다.' }],
    screenshots: [{ title: '앱·웹 연동 구조', source: 'local', url: '/media/blackpin-app-slide.jpg', alt: 'BLACKPIN 앱과 관리자 웹의 구성도' }],
    galleryNotes: '첨부 포트폴리오의 시스템 구성을 참고했습니다. 사내 화면은 공개하지 않습니다.',
  },
  {
    slug: 'blackpin-cs', title: 'BLACKPIN · CS AI', status: 'internal-review',
    launchType: ['ai', 'prototype'], category: 'ai',
    summary: 'CS 문의에 대해 근거 조회, 초안 생성, 검증, 담당자 승인과 전송을 분리한 AI 업무 자동화 하네스를 구성했습니다.',
    timeline: { role: '개발 인턴 · 하네스/테스트/승인 흐름', period: '2026.03 - 2026.07' },
    description: {
      problem: 'LLM 답변이 조회 결과와 업무 정책을 혼동하거나, 승인 전 자동 전송으로 이어질 위험이 있었습니다.',
      solution: '라우팅·RAG·DB·도구 호출을 분리하고 초안, 검증, 승인, 전송을 독립 단계로 설계했습니다.',
      impact: '같은 문의를 조건별로 재실행하며 답변 품질과 토큰 사용량, 잘못된 도구 호출을 비교할 수 있게 했습니다.',
    },
    highlights: ['문의 유형별 라우팅', 'RAG·DB 조회와 답변 초안 분리', '검증과 사람 승인 게이트', '로컬 LLM과 외부 API 비교', '재현 가능한 평가·운영 문서'],
    techStack: { backend: ['Python', 'SQL', 'LLM API', 'RAG'], infrastructure: ['로컬 LLM', '승인 채널'], testing: ['평가 하네스', '모델 비교', '재실행 시나리오'] },
    responsibilities: ['업무 규칙과 예외 조건 정리', '하네스와 테스트 환경 구축', '초안 품질·토큰 사용 비교', '승인 흐름과 문서화'],
    architecture: ['Router: 문의 분류', 'RAG/DB/Tools: 근거 조회', 'Draft: 답변 초안 생성', 'Validator: 정책·사실 검증', 'Handoff: 사람 승인 후 전송'],
    links: [{ label: '공개 저장소', type: 'github', status: 'pending', note: '사내 프로젝트로 공개 URL이 없습니다.' }],
    screenshots: [{ title: 'CS 하네스 구성', source: 'local', url: '/media/blackpin-cs-slide.jpg', alt: 'BLACKPIN CS 자동화 하네스 구성도' }],
    galleryNotes: '첨부 포트폴리오의 공개 가능한 구조 설명을 사용했습니다.',
  },
  {
    slug: 'seniorro', title: 'Seniorro', status: 'planning',
    launchType: ['prototype'], category: 'system',
    summary: '은퇴 경력 중개 서비스의 고객, 경쟁 환경, 이용 유인과 사업 확장 방향을 분석한 서비스 기획 프로젝트입니다.',
    timeline: { role: '경쟁·이해관계자 분석 · 서비스/사업 전략 발표', period: '2024' },
    description: {
      problem: '은퇴 경력자와 도움이 필요한 고객 사이에 신뢰와 재참여를 만들 운영 규칙이 필요했습니다.',
      solution: '경쟁 사례와 양쪽 참여자의 요구를 비교하고 검증, 보상, 이용 유인과 확장 순서를 설계했습니다.',
      impact: '서비스 기능을 시장과 운영의 제약에 연결한 사업 기획안을 최종 발표했습니다.',
    },
    highlights: ['고객·경쟁 서비스 조사', '공급자와 이용자 가치 분석', '신뢰 검증과 보상 정책 검토', '이용 유인과 운영 규칙 설계', '사업 확장 로드맵 제안'],
    techStack: { infrastructure: ['시장 분석', '서비스 기획', '사업 모델'], testing: ['경쟁 사례 비교', '이해관계자 분석'] },
    responsibilities: ['경쟁·고객 분석', '서비스 운영 규칙 제안', '확장 전략과 최종 발표'],
    architecture: ['고객 수요 분석', '경력자 공급 분석', '신뢰·검증 정책', '매칭과 보상 규칙', '확장 로드맵'],
    links: [{ label: '공개 자료', type: 'document', status: 'pending', note: '외부 공개 자료가 없습니다.' }],
    screenshots: [{ title: '서비스 기획 자료', source: 'local', url: '/media/seniorro-slide.jpg', alt: 'Seniorro 서비스 기획 슬라이드' }],
    galleryNotes: '첨부 포트폴리오의 기획 자료를 바탕으로 정리했습니다.',
  },
];

export const statusToLabel: Record<ProjectData['status'], string> = {
  'launch-ready': '출시',
  'internal-review': '개발/리뷰',
  'in-progress': '진행 중',
  planning: '기획',
};

export const categoryToLabel: Record<ProjectData['category'], string> = {
  web: '웹',
  mobile: '모바일',
  system: '시스템',
  education: '교육',
  ai: 'AI',
};

export const launchTypeToLabel: Record<string, string> = {
  web: '웹',
  mobile: '모바일',
  ios: 'iOS',
  android: 'Android',
  'cross-platform': '크로스 플랫폼',
  prototype: '프로토타입',
  ai: 'AI',
};

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((project) => project.slug === slug);
}

export const sortedProjects = [...projects].sort((a, b) =>
  a.status.localeCompare(b.status),
);
