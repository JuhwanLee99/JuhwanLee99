import { featuredIds } from './techStack';
import type { TechStackItem } from './techStack';

export type ExperienceLevel = 'core' | 'independent' | 'applied' | 'introductory' | 'unrated';
// Provisional project-evidence classification, not a confirmed self-assessment.
export const experienceAssessmentIsDraft = false;
export const experienceLevels: { id: ExperienceLevel; label: string; description: string }[] = [
  { id: 'core', label: '주력', description: '여러 프로젝트에서 반복적으로 구현·개선한 기술' },
  { id: 'independent', label: '독립 구현', description: '담당 기능을 설계하고 구현·문제 해결까지 수행한 기술' },
  { id: 'applied', label: '프로젝트 적용', description: '특정 기능의 연동·설정·운영에 활용한 기술' },
  { id: 'introductory', label: '기초 경험', description: '기본 사용법을 익히거나 제한된 범위에서 사용한 기술' },
  { id: 'unrated', label: '확인 필요', description: '사용 경험은 있으나 활용 깊이는 아직 분류하지 않은 기술' },
];

export const coreStackIds = featuredIds;
const independentIds = ['webgazer', 'kotlin', 'jetpack-compose', 'camerax', 'flask', 'room-sqlite', 'yolo-onnx', 'ultralytics', 'opencv', 'rag-llm', 'truenas', 'rest-api', 'firestore', 'vitest', 'pytest'];
const appliedIds = ['retrofit-okhttp', 'roboflow', 'google-colab', 'face-landmarks', 'pytorch', 'mobilenet', 'matplotlib', 'workmanager', 'docker', 'portainer', 'cloudflare', 'mariadb', 'firebase-functions', 'firebase-hosting', 'vite', 'tailwind', 'react-router', 'material-ui', 'java', 'spring-boot', 'spring-data-jpa', 'h2', 'sql', 'postgresql', 'ocr-api', 'streamlit', 'react-testing-library', 'cypress', 'firestore-emulator', 'android-testing', 'github'];

// Describe the work performed rather than claiming expertise in an entire tool.
const scopes: Record<string, string> = {
  react: '사용자·관리자 화면과 상태 기반 흐름, API 연동을 구현하고 운영 과정에서 개선했습니다.',
  typescript: '화면 상태·API 입출력의 타입과 공통 데이터 모델을 정의하며 변경 범위를 관리했습니다.',
  flutter: 'PDF 뷰어, 업무용 앱과 DMS 프로토타입의 화면·상태·비동기 처리 흐름을 구현했습니다.',
  dart: '비동기 문서 로딩·캐시·상태 관리와 모바일 감지 파이프라인을 작성했습니다.',
  python: '영상처리, 데이터셋 준비·모델 평가, 수집 API와 테스트 도구를 구현했습니다.',
  webgazer: '추적·캘리브레이션 조건을 튜닝하고 A/B 비교와 정확도 측정 유닛을 구성했습니다.',
  kotlin: 'DMS의 카메라·감지·이벤트 기록·전송 흐름을 Android 네이티브로 구현했습니다.',
  camerax: '미리보기·프레임 분석·녹화를 연결하고 렌즈 전환과 카메라 수명주기를 다뤘습니다.',
  'yolo-onnx': '커스텀 모델 학습·비교·ONNX 변환과 모바일 추론 연동을 수행했습니다.',
  pytorch: '영상 보정 모델과 YOLO 학습 환경에 활용했습니다. 프레임워크 내부 구현 경험과는 구분합니다.',
  docker: '협업자가 구현한 백엔드의 이미지를 NAS에 배포·운영했습니다.',
  truenas: '직접 조립한 NAS에 운영체제를 설치하고 서비스 컨테이너 실행 환경을 구성했습니다.',
  mariadb: '협업 백엔드의 데이터베이스 운영 환경을 다뤘습니다. 해당 백엔드 구현은 협업자가 담당했습니다.',
  'rest-api': '화면·서버 사이의 요청·응답 계약과 오류 상태를 정의하고 연동했습니다.',
  firestore: '시선 세션 저장·삭제와 클라이언트 상태·캐시 동기화 흐름을 구현했습니다.',
  java: '팀 프로젝트의 REST API 개발에 참여했습니다. 반복적으로 사용하는 주력 언어와는 구분합니다.',
  'spring-boot': '팀 프로젝트의 Controller-Service-Repository 구조에서 API 개발에 참여했습니다.',
  'ocr-api': 'OCR 응답·오류와 HTTP/SSE 연동 작업에 공동으로 참여했습니다.',
};

function getProjectBasedStackExperience(stack: TechStackItem): { level: ExperienceLevel; scope: string } {
  const level = coreStackIds.includes(stack.id) ? 'core'
    : independentIds.includes(stack.id) ? 'independent'
      : appliedIds.includes(stack.id) ? 'applied' : 'unrated';
  return { level, scope: scopes[stack.id] ?? stack.description };
}

export function getExperienceLevel(id: ExperienceLevel) {
  return experienceLevels.find(level => level.id === id)!;
}

export const strengthAreas = [
  { title: '웹 서비스 구현', description: '화면과 상태, API를 연결하고 실제 사용 흐름을 개선합니다.', stacks: ['react', 'typescript'], projects: ['aubl', 'syncgaze'] },
  { title: '모바일 앱 구현', description: '문서 뷰어부터 카메라·추론·업로드까지 앱의 기능을 연결합니다.', stacks: ['flutter', 'dart', 'kotlin'], projects: ['snapfig', 'blackpin-dms'] },
  { title: '데이터·AI 파이프라인', description: '데이터 준비·모델 비교·서비스 연동과 검증 도구를 구성합니다.', stacks: ['python', 'webgazer', 'yolo-onnx'], projects: ['blackpin-dms', 'syncgaze', 'dip-team5'] },
];

// User-confirmed levels override the initial project-based classification.
const confirmedExperienceLevels: Partial<Record<string, ExperienceLevel>> = {
  swiftui: 'applied',
  swiftdata: 'introductory',
  watchconnectivity: 'introductory',
};

export function getStackExperience(stack: TechStackItem) {
  const experience = getProjectBasedStackExperience(stack);
  return {
    ...experience,
    level: confirmedExperienceLevels[stack.id] ?? experience.level,
  };
}
