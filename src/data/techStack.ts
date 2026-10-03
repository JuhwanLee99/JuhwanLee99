export type StackGroup = 'interface' | 'data' | 'intelligence' | 'delivery' | 'quality';

export interface TechStackItem {
  id: string;
  name: string;
  group: StackGroup;
  description: string;
  projects: string[];
}

export const stackGroups: { id: StackGroup; label: string; caption: string }[] = [
  { id: 'interface', label: '웹·앱', caption: '화면과 상호작용' },
  { id: 'data', label: '서버·데이터', caption: '요청과 저장 구조' },
  { id: 'intelligence', label: 'AI·시선 추적', caption: '분석과 모델 연동' },
  { id: 'delivery', label: '배포·운영', caption: '서비스가 동작하는 환경' },
  { id: 'quality', label: '검증', caption: '재현 가능한 품질 확인' },
];

export const techStacks: TechStackItem[] = [
  { id: 'react', name: 'React', group: 'interface', description: '서비스 화면과 상태 기반 사용자 흐름을 구성했습니다.', projects: ['aubl', 'syncgaze', 'issue-control-team8', 'blackpin-app'] },
  { id: 'typescript', name: 'TypeScript', group: 'interface', description: '화면·API 계약과 데이터 타입을 명시해 변경 범위를 관리했습니다.', projects: ['aubl', 'syncgaze', 'issue-control-team8', 'blackpin-app'] },
  { id: 'vite', name: 'Vite', group: 'interface', description: 'React 앱의 개발·빌드 환경을 구성했습니다.', projects: ['aubl', 'syncgaze'] },
  { id: 'tailwind', name: 'Tailwind CSS', group: 'interface', description: '반응형 화면과 공통 UI 스타일을 구현했습니다.', projects: ['aubl', 'syncgaze'] },
  { id: 'react-router', name: 'React Router', group: 'interface', description: '페이지와 업무 단계별 이동 흐름을 연결했습니다.', projects: ['aubl', 'issue-control-team8'] },
  { id: 'material-ui', name: 'Material UI', group: 'interface', description: '프로젝트·계정 관리 화면의 컴포넌트를 구성했습니다.', projects: ['issue-control-team8'] },
  { id: 'flutter', name: 'Flutter', group: 'interface', description: 'PDF 학습 앱과 업무용 모바일 화면을 구현했습니다.', projects: ['snapfig', 'blackpin-app', 'aubl'] },
  { id: 'dart', name: 'Dart', group: 'interface', description: 'Flutter 화면·상태와 문서 뷰어 흐름을 작성했습니다.', projects: ['snapfig', 'blackpin-app', 'aubl'] },
  { id: 'swiftui', name: 'SwiftUI', group: 'interface', description: 'iPhone·Apple Watch의 일정 및 가이드 화면을 구성했습니다.', projects: ['jetlag-watch'] },
  { id: 'streamlit', name: 'Streamlit', group: 'interface', description: '영상 보정 결과를 탐색하는 웹 데모의 초기 UI를 구성했습니다.', projects: ['dip-team5'] },
  { id: 'java', name: 'Java', group: 'data', description: '이슈 관리 시스템의 Spring Boot REST API 개발에 참여했습니다.', projects: ['issue-control-team8'] },
  { id: 'spring-boot', name: 'Spring Boot', group: 'data', description: 'Controller–Service–Repository 구조의 서버 처리 흐름을 다뤘습니다.', projects: ['issue-control-team8'] },
  { id: 'spring-data-jpa', name: 'Spring Data JPA', group: 'data', description: '엔티티와 데이터 저장 경로를 API 처리와 연결했습니다.', projects: ['issue-control-team8'] },
  { id: 'sql', name: 'SQL', group: 'data', description: '업무 데이터 조회·저장과 평가용 질의에 사용했습니다.', projects: ['issue-control-team8', 'blackpin-app', 'blackpin-cs'] },
  { id: 'h2', name: 'H2', group: 'data', description: '팀 이슈 관리 시스템의 개발용 데이터 저장소를 다뤘습니다.', projects: ['issue-control-team8'] },
  { id: 'postgresql', name: 'PostgreSQL', group: 'data', description: '업무용 앱·관리자 웹의 데이터 구조와 API 연동에 사용했습니다.', projects: ['blackpin-app'] },
  { id: 'mariadb', name: 'MariaDB', group: 'data', description: 'AUBL 협업 백엔드 데이터베이스의 컨테이너 운영 환경을 다뤘습니다.', projects: ['aubl'] },
  { id: 'firestore', name: 'Firebase / Firestore', group: 'data', description: '인증·실시간 상태와 시선 세션 데이터의 저장·동기화를 다뤘습니다.', projects: ['aubl', 'syncgaze'] },
  { id: 'firebase-functions', name: 'Firebase Functions', group: 'data', description: '웹 서비스의 서버리스 호출과 데이터 처리 흐름을 연동했습니다.', projects: ['aubl', 'syncgaze'] },
  { id: 'rest-api', name: 'REST API', group: 'data', description: 'DTO·JSON 요청과 응답을 화면 및 데이터 계층과 연결했습니다.', projects: ['issue-control-team8', 'blackpin-app', 'snapfig'] },
  { id: 'swiftdata', name: 'SwiftData', group: 'data', description: '오프라인 우선 여행 일정의 로컬 저장 구조에 사용했습니다.', projects: ['jetlag-watch'] },
  { id: 'watchconnectivity', name: 'WatchConnectivity', group: 'data', description: 'iPhone과 Apple Watch의 일정 상태 동기화에 사용했습니다.', projects: ['jetlag-watch'] },
  { id: 'python', name: 'Python', group: 'intelligence', description: '영상처리 파이프라인, CLI와 AI 평가 하네스를 작성했습니다.', projects: ['dip-team5', 'issue-control-team8', 'blackpin-cs'] },
  { id: 'webgazer', name: 'WebGazer.js', group: 'intelligence', description: '웹캠 기반 시선 추적·캘리브레이션 튜닝과 정확도 측정에 사용했습니다.', projects: ['syncgaze'] },
  { id: 'pytorch', name: 'PyTorch', group: 'intelligence', description: '영상 보정 파라미터와 수동 픽셀 연산 파이프라인에 사용했습니다.', projects: ['dip-team5'] },
  { id: 'mobilenetv2', name: 'MobileNetV2', group: 'intelligence', description: '입력 이미지의 장면을 분류하고 보정 프리셋을 선택했습니다.', projects: ['dip-team5'] },
  { id: 'opencv', name: 'OpenCV', group: 'intelligence', description: '이미지 입출력과 원본·보정 결과 비교 흐름에 사용했습니다.', projects: ['dip-team5'] },
  { id: 'matplotlib', name: 'Matplotlib', group: 'intelligence', description: '영상 히스토그램과 보정 결과 시각화에 사용했습니다.', projects: ['dip-team5'] },
  { id: 'rag-llm', name: 'RAG / LLM API', group: 'intelligence', description: 'CS 문의의 근거 조회·초안·검증 단계를 분리했습니다.', projects: ['blackpin-cs'] },
  { id: 'ocr-api', name: 'OCR API', group: 'intelligence', description: 'PDF 문서 처리 결과와 오류를 앱에 연동하는 작업에 공동 기여했습니다.', projects: ['snapfig'] },
  { id: 'docker', name: 'Docker', group: 'delivery', description: '협업 백엔드 이미지를 TrueNAS 컨테이너 환경에서 운영했습니다.', projects: ['aubl'] },
  { id: 'truenas', name: 'TrueNAS', group: 'delivery', description: '직접 구축한 NAS에서 AUBL 서비스 컨테이너를 운영했습니다.', projects: ['aubl'] },
  { id: 'portainer', name: 'Portainer', group: 'delivery', description: 'NAS의 컨테이너 관리에 활용했습니다.', projects: ['aubl'] },
  { id: 'cloudflare', name: 'Cloudflare', group: 'delivery', description: 'AUBL 서비스 운영 경로에 활용했습니다.', projects: ['aubl'] },
  { id: 'firebase-hosting', name: 'Firebase Hosting', group: 'delivery', description: '웹사이트의 공개 배포와 접근 경로를 운영했습니다.', projects: ['aubl', 'syncgaze'] },
  { id: 'github', name: 'GitHub', group: 'delivery', description: '팀 작업의 변경 이력·문서·공개 저장소를 관리했습니다.', projects: ['aubl', 'syncgaze', 'snapfig', 'issue-control-team8', 'dip-team5', 'jetlag-watch'] },
  { id: 'vitest', name: 'Vitest', group: 'quality', description: '시선 세션·분석 로직의 프론트엔드 단위 테스트를 작성했습니다.', projects: ['syncgaze'] },
  { id: 'react-testing-library', name: 'React Testing Library', group: 'quality', description: '온보딩과 추적 흐름의 사용자 관점 테스트를 구성했습니다.', projects: ['syncgaze'] },
  { id: 'cypress', name: 'Cypress', group: 'quality', description: '설문부터 캘리브레이션·결과까지 E2E 시나리오를 검증했습니다.', projects: ['syncgaze'] },
  { id: 'firestore-emulator', name: 'Firestore Emulator', group: 'quality', description: '운영 데이터와 분리한 Firebase 검증 흐름에 사용했습니다.', projects: ['aubl'] },
];

const dmsSharedStackIds = ['react', 'typescript', 'vite', 'flutter', 'dart', 'python', 'pytorch', 'opencv', 'rest-api', 'github'];
for (const stack of techStacks) {
  if (dmsSharedStackIds.includes(stack.id)) stack.projects.push('blackpin-dms');
}
techStacks.push(
  { id: 'ultralytics', name: 'Ultralytics', group: 'intelligence', description: 'DMS의 YOLO11n 학습·평가와 ONNX 변환에 사용했습니다.', projects: ['blackpin-dms'] },
  { id: 'roboflow', name: 'Roboflow', group: 'intelligence', description: '운전 행동 감지 데이터 소스를 확보하고 라벨 매핑·통합 과정을 구성했습니다.', projects: ['blackpin-dms'] },
  { id: 'google-colab', name: 'Google Colab', group: 'intelligence', description: 'GPU에서 커스텀 모델을 학습하고 Drive에 체크포인트·실험 결과를 관리했습니다.', projects: ['blackpin-dms'] },
  { id: 'kotlin', name: 'Kotlin', group: 'interface', description: 'DMS의 Android 네이티브 감지·기록·전송 흐름을 구현했습니다.', projects: ['blackpin-dms'] },
  { id: 'jetpack-compose', name: 'Jetpack Compose', group: 'interface', description: '모니터링·설정과 업로드 진행 상태를 Android 화면에 연결했습니다.', projects: ['blackpin-dms'] },
  { id: 'camerax', name: 'CameraX', group: 'interface', description: '카메라 미리보기, 프레임 분석과 이벤트 영상 녹화를 연결했습니다.', projects: ['blackpin-dms'] },
  { id: 'flask', name: 'Flask', group: 'data', description: 'DMS 데이터 수집과 관리자·파트너 조회 API를 구성했습니다.', projects: ['blackpin-dms'] },
  { id: 'room-sqlite', name: 'Room / SQLite', group: 'data', description: '모바일 이벤트·전송 상태와 서버 메타데이터의 저장 구조에 사용했습니다.', projects: ['blackpin-dms'] },
  { id: 'retrofit-okhttp', name: 'Retrofit / OkHttp', group: 'data', description: 'Android 앱의 HTTP 업로드와 서버 연동에 사용했습니다.', projects: ['blackpin-dms'] },
  { id: 'yolo-onnx', name: 'YOLO / ONNX Runtime', group: 'intelligence', description: '카메라 기반 운전 행동 감지의 온디바이스 추론에 사용했습니다.', projects: ['blackpin-dms'] },
  { id: 'face-landmarks', name: 'ML Kit / MediaPipe', group: 'intelligence', description: '운전자 얼굴 랜드마크와 상태 감지 파이프라인에 사용했습니다.', projects: ['blackpin-dms'] },
  { id: 'workmanager', name: 'WorkManager', group: 'delivery', description: '동의·네트워크 조건에 따른 백그라운드 전송과 진행 알림을 연결했습니다.', projects: ['blackpin-dms'] },
  { id: 'pytest', name: 'pytest', group: 'quality', description: 'DMS 수집 API·전송 정책·개인정보 처리와 평가 로직의 테스트에 사용했습니다.', projects: ['blackpin-dms'] },
  { id: 'android-testing', name: 'JUnit / MockK', group: 'quality', description: 'Android 업로드 조건·진행률·상태 전이와 HTTP 연동을 검증했습니다.', projects: ['blackpin-dms'] },
);

const featuredIds = ['react', 'typescript', 'flutter', 'kotlin', 'python', 'webgazer', 'firestore', 'docker'];
export const featuredTechStacks = featuredIds
  .map((id) => techStacks.find((item) => item.id === id))
  .filter((item): item is TechStackItem => Boolean(item));
