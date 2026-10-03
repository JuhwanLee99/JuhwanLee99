import type { ProjectData } from '../types/project';

// Source: Blackpin-ai/in_cabin_monitoring, 2d1938d0271555a207a5025b9bbd40587bbde337.
// Summarize implementation experience only; do not publish private source or field footage.
export const dmsProject: ProjectData = {
  slug: 'blackpin-dms',
  title: 'DMS · 운전자 상태 모니터링',
  status: 'internal-review',
  launchType: ['ai', 'android', 'mobile', 'web', 'prototype'],
  category: 'ai',
  summary: '카메라로 졸음·주의 분산과 운전 행동을 감지하는 개인 프로젝트입니다. DMS(Driver Monitoring System, 운전자 상태 모니터링 시스템)의 모델 선정·데이터셋 확보·Google Colab 학습부터 Android 온디바이스 추론, 데이터 수집 서버와 관리 웹까지 연결했습니다.',
  timeline: { role: '개인 프로젝트 · 모델 선정·데이터 준비·학습·앱·서버 구현 및 검증', period: '2026.04 - 현재' },
  description: {
    problem: '운전자에게는 즉각적인 경보가, 관리자에게는 이벤트 확인과 이력 관리가 필요하다고 보고 프로젝트를 기획했습니다. 구현 과정에서는 감지 중 녹화가 추론을 중단시키는 문제와 모바일 영상 처리 병목을 다뤘으며, 데이터 수집에는 사용자 동의·통신 제약·개인정보 처리를 함께 고려했습니다.',
    solution: 'YOLO11n을 기반으로 운전 행동에 맞는 데이터셋을 확보·통합하고 Google Colab GPU에서 커스텀 모델을 학습했습니다. 동일 테스트셋으로 비교한 모델을 ONNX로 변환해 앱에 연결하고, Kotlin·CameraX 기반 감지·녹화와 동의 기반 업로드, 수집 API·관리 웹을 구성했습니다.',
    impact: '감지 기능을 앱·서버·관리 화면으로 연결한 개발용 시스템을 구성했습니다. 동의와 전송 조건, 실패 복구, 데이터 보존 및 평가 절차를 코드와 테스트로 구체화했습니다. 실제 서비스 출시나 차량 안전 성능 인증을 완료한 결과로 제시하지 않습니다.',
  },
  highlights: [
    'YOLO11n 선정과 범용·커스텀 모델의 단일·듀얼 추론 비교',
    'Roboflow 데이터셋 확보·라벨 통합·클래스 불균형 조정',
    'Google Colab GPU 학습과 실험 조건·체크포인트 관리',
    '동일 테스트셋 성능 비교와 ONNX 변환·모바일 모델 연동',
    'Android 네이티브 전환과 감지·녹화·운전자별 보정',
    '동의·통신 조건 기반 업로드와 소스별 개인정보 처리',
    '수집 API·관리 대시보드와 데이터 보존·스냅샷 관리',
    '현장 로그·추론 단계별 시간 분석과 단위·통합 테스트',
  ],
  techStack: {
    frontend: ['Kotlin', 'Jetpack Compose', 'CameraX', 'Flutter (프로토타입)', 'React', 'TypeScript', 'Vite'],
    backend: ['Python', 'Flask', 'SQLite', 'Room', 'DataStore', 'Retrofit', 'OkHttp'],
    ai: ['YOLO11n', 'Ultralytics', 'PyTorch', 'Roboflow', 'ONNX Runtime', 'ML Kit Face Mesh', 'MediaPipe', 'OpenCV'],
    infrastructure: ['Google Colab GPU', 'Google Drive (데이터·체크포인트)', 'WorkManager', '온디바이스 추론', '구조화 로그', 'Prometheus 형식 지표'],
    testing: ['pytest', 'JUnit', 'MockK', 'MockWebServer', 'Precision / Recall / IoU'],
  },
  responsibilities: [
    '운전자와 관리자의 요구를 나누고 감지·경보·이벤트 기록·조회 기능을 우선 범위로 정의',
    '전용 하드웨어 이식 전에 웹캠 환경에서 알고리즘을 검증하고 모바일 앱으로 확장하는 개발 순서 수립',
    '저조도·얼굴 가림·개인차·네트워크 단절을 실패 조건으로 정리하고 오경보·경보 지연·장시간 동작·전송 복구를 검증 항목으로 설정',
    '모바일 추론 비용과 운전석 환경의 감지 목적을 고려해 YOLO11n을 선택하고 COCO 사전학습 모델과 4클래스 커스텀 모델의 단일·듀얼 실행 방식 비교',
    'Roboflow 데이터 소스를 조사해 라벨 품질·촬영 환경·라이선스 조건을 검토하고 다운로드·병합 스크립트 구성',
    '서로 다른 라벨을 안전벨트 미착용·착용·흡연·휴대폰 4개 클래스로 통합하고 학습 데이터의 소스별 샘플링 비율을 조정',
    'Google Colab GPU와 Drive를 연결해 학습 데이터·가중치·실험별 결과를 관리하고 체크포인트 저장·재개 흐름 구성',
    'AdamW, 손실 가중치, 증강과 조기 종료 조건을 조정하며 학습하고 검출 위치 정확도와 저조도 조건의 회귀 비교',
    '학습된 모델의 클래스 순서와 모바일 런타임 호환성을 확인하고 ONNX 변환 후 앱 추론 경로에 연결',
    '안전벨트·휴대폰·흡연 감지 모델의 데이터 구성과 학습 조건을 조정하고 동일 테스트셋의 클래스별 지표·불일치 사례 비교',
    'Flutter의 영상 스트림·녹화 병행 제약을 검토하고 CameraX 기반 Android 감지·녹화 파이프라인 연결',
    '눈 개방 비율(EAR)의 평균·표준편차와 중립 머리 방향을 이용해 운전자별 보정 기준을 계산하고 표본 부족·얼굴 미검출 시 중단 처리',
    '카메라 렌즈 전환과 설정 반영, 이벤트 클립 및 주기 샘플 기록 흐름 구성',
    '사용자 동의와 공유 설정, Wi-Fi·LTE 상태, 전송 시간대와 일일 한도를 업로드 조건으로 구현',
    'Room 이벤트 저장과 WorkManager 작업, Retrofit 전송을 연결하고 실패 시 재시도·상태 관리',
    '전송 바이트·진행률·속도·예상 완료 시간을 화면에 표시하고 데이터 동기화 알림 구현',
    'Flask 수집 API와 해시 검증·중복 방지, 파트너별 데이터 조회·감사 기록·스냅샷 처리 구현',
    'React 관리자·파트너 화면에 업로드 조회, 보존 정책, 스냅샷 미리보기와 사용량 표시 구성',
    '카메라 소스별 얼굴 블러 정책·GPS 정밀도 축소·개인정보 필드 제거와 얼굴 검출 평가 하네스 구현',
    '업로드 정책과 상태 전이, HTTP 연동 및 평가 로직의 테스트·개발 문서 작성',
    '기기 내 파일 로그와 전처리·추론·후처리 시간 기록을 통해 현장 이슈를 사후 분석할 수 있는 수집 절차 구성',
  ],
  architecture: [
    '모델·데이터 준비: YOLO11n 선정, Roboflow 소스 확보, 4클래스 라벨 통합과 학습 샘플링',
    '학습·평가: Colab GPU·Drive 체크포인트, 동일 테스트셋 비교와 ONNX 변환',
    'Android 앱: CameraX 입력, ONNX·얼굴 모델 추론, 개인 보정·경보·녹화·Room 저장',
    '전송·개인정보: 동의·네트워크 조건, 소스별 처리, 업로드 큐·재시도·진행률',
    '수집·공유 서버: Flask API·SQLite·파일 저장, 해시·중복 검증과 스냅샷 관리',
    '관리·검증: React 대시보드, 감사·보존 정책, 얼굴 검출 평가·로그·테스트',
  ],
  links: [{ label: '프로젝트 저장소', type: 'github', status: 'internal', note: '개인 프로젝트의 비공개 저장소입니다. 원본 코드와 테스트 자료는 공개하지 않습니다.' }],
  screenshots: [
    { title: '초기 Android 앱 · 인식 상태와 측정 지표', source: 'local', presentation: 'phone', url: `${import.meta.env.BASE_URL}media/dms/android-early.webp`, alt: '얼굴을 블러 처리한 초기 Android 앱의 NORMAL 상태와 EAR·MAR·PERCLOS 측정 화면' },
    { title: '최종 프로토타입 · 눈 감김·졸음 테스트', source: 'local', presentation: 'phone', url: `${import.meta.env.BASE_URL}media/dms/prototype-drowsiness.webp`, alt: '얼굴을 블러 처리한 최종 프로토타입의 졸음 테스트와 ALARM 경보 화면' },
    { title: '최종 프로토타입 · 하품·졸음 테스트', source: 'local', presentation: 'phone', url: `${import.meta.env.BASE_URL}media/dms/prototype-yawn.webp`, alt: '얼굴을 블러 처리한 하품·졸음 테스트의 경보와 측정 지표 화면' },
    { title: '최종 프로토타입 · 휴대폰 사용 인식', source: 'local', presentation: 'phone', url: `${import.meta.env.BASE_URL}media/dms/prototype-phone.webp`, alt: '얼굴을 블러 처리한 휴대폰 사용 인식 테스트의 WARNING 경보와 객체 인식 박스 화면' },
    { title: '모델 선정·데이터 확보·Colab 학습 흐름도', source: 'local', url: `${import.meta.env.BASE_URL}media/dms-training-flow.svg`, alt: '모델 선정부터 데이터 통합, Colab 학습, 동일 테스트셋 평가, ONNX 변환과 앱 연동까지 재구성한 흐름도' },
    { title: '학습 환경·Android 앱·서버 구조도', source: 'local', url: `${import.meta.env.BASE_URL}media/dms-pipeline.svg`, alt: 'Colab에서 학습한 모델을 Android 앱에 전달하고 앱의 이벤트를 동의 기반 전송으로 서버·관리 웹에 연결하는 개념도' },
    { title: '모바일 전환과 검증 항목 개념도', source: 'local', url: `${import.meta.env.BASE_URL}media/dms-mobile-validation.svg`, alt: 'Flutter 제약에서 Android CameraX 구조로의 전환과 전송·개인정보·HTTP 검증 항목을 정리한 개념도' },
    { title: '구현 범위·검증 과제·확장 계획 로드맵', source: 'local', url: `${import.meta.env.BASE_URL}media/dms-roadmap.svg`, alt: '저장소에서 확인한 구현 범위, 추가 검증 과제와 아직 완료하지 않은 하드웨어·서비스 확장 계획을 구분한 로드맵' },
  ],
};

export const dmsPointDetails = [
  '모바일에서 실행할 경량 검출 모델로 YOLO11n을 사용했습니다. 범용 COCO 모델의 휴대폰 감지와 운전석 환경에 맞춘 커스텀 모델을 비교하고, 단일·듀얼 실행 모드로 감지 품질과 추론 자원 부담을 함께 검토했습니다. 메모리·배터리 절감 예상치를 실측 성과로 제시하지 않습니다.',
  'Roboflow의 안전벨트·흡연·휴대폰 데이터 소스를 확보하고 서로 다른 클래스명을 4개 공통 라벨로 매핑했습니다. 라벨 신뢰도·전처리 차이·라이선스 제약이 있는 후보는 제외하고, 고정 시드의 소스별 언더샘플링을 학습 분할에 적용했습니다. 검증·테스트 분할에는 같은 샘플링을 적용하지 않았습니다.',
  'Google Colab GPU에서 Ultralytics·PyTorch 기반 YOLO11n을 파인튜닝하고 데이터와 체크포인트를 Drive에 관리했습니다. Phase 4 기록은 A100·AdamW·최대 120 epochs 설정이며 조기 종료를 사용했습니다. box·dfl 손실과 증강 강도를 조정하고, 후속 저조도 실험에서는 성능 하락을 확인해 기하 증강을 줄이는 조건으로 수정했습니다. 설정한 epoch를 모두 실행했거나 후속 실험이 성공한 것으로 과장하지 않습니다.',
  '동일 테스트 이미지 1,693장의 Phase 3·4 비교 기록에서 전체 mAP50(객체 검출 평가 지표)은 0.718→0.841, 안전벨트 미착용은 0.443→0.744였습니다. 흡연은 0.825→0.822로 소폭 하락했습니다. 학습 후 클래스 순서를 확인하고 모바일 입력 크기·opset에 맞춰 ONNX로 변환해 앱에 연결했습니다. 수치는 오프라인 평가 결과이며 실제 주행 정확도를 뜻하지 않습니다.',
  'Flutter의 프레임 처리와 감지·녹화 병행 제약을 바탕으로 Kotlin·Compose·CameraX 구조로 전환했습니다. 미리보기·분석·녹화를 연결하고 눈 개방 비율(EAR)의 평균·표준편차와 중립 머리 방향으로 개인 보정 기준을 계산했습니다. 표본 부족·얼굴 미검출은 보정 중단 상태로 처리했습니다.',
  '동의·공유 설정, Wi-Fi·LTE·전송 시간대·한도를 판정하고 업로드 진행률·속도·예상 시간을 화면과 알림에 연결했습니다. 카메라 소스별 얼굴 블러, GPS 정밀도 축소와 개인정보 필드 제거를 분리했으며, 모든 영상이 완전히 익명화된다는 의미는 아닙니다.',
  '지속 큐·Room 이벤트 전송을 Flask API의 해시 검증·중복 방지 처리와 연결했습니다. React 관리자·파트너 화면에는 조회·감사·보존 정책과 스냅샷 미리보기·생성·삭제를 구성했습니다. 실제 파트너 인증 강화와 운영 배포는 별도 과제로 남겨 두었습니다.',
  '기기에 날짜별 파일 로그를 남기고 감지 상태·보정·경보·카메라 연결·이벤트 저장 시점을 함께 기록했습니다. 전처리·추론·후처리 시간을 나누어 병목을 분석할 수 있도록 하고, 동의·재시도·HTTP 처리와 평가 로직에 단위·통합 테스트를 구성했습니다.',
];

export const dmsPlanning = [
  {
    title: '대상 사용자와 문제 정의',
    detail: '운전자는 위험 신호를 즉시 알아차릴 수 있는 경보가 필요하고, 관리자는 발생한 이벤트와 기록을 확인할 수 있어야 한다고 보았습니다. 단일 감지 모델의 데모를 넘어 감지·알림·기록·조회가 이어지는 시스템을 목표로 정했습니다.',
  },
  {
    title: '핵심 기능부터 구현하는 범위 결정',
    detail: '졸음·주의 분산과 운전 행동 감지, 단계별 경보, 이벤트 기록·조회 기능을 우선했습니다. 데이터 수집에는 동의·재시도·보존 정책을 함께 구성했습니다. 운전자 코칭, 차량 데이터 연동과 보험 연계는 별도 확장 아이디어로 두고 구현 성과와 구분했습니다.',
  },
  {
    title: '소프트웨어 우선 검증과 현장 제약',
    detail: '전용 하드웨어를 먼저 확정하기보다 웹캠에서 알고리즘을 확인하고 모바일 환경으로 확장했습니다. 순간 깜빡임과 지속적인 눈 감김을 구분하고 하품·머리 방향·지속 시간을 함께 고려했습니다. 저조도·얼굴 가림·개인차·네트워크 단절을 검증 항목으로 정해 모델 지표뿐 아니라 오경보·지연·실패 복구도 살펴보도록 했습니다.',
  },
];

export const dmsRoadmap = [
  {
    stage: '01 / IMPLEMENTED',
    title: '저장소에서 확인한 구현 범위',
    detail: '모델 학습·비교와 ONNX 변환, Android 감지·녹화·개인 보정, 동의 기반 업로드, 개발용 수집 API와 관리 웹, 테스트·평가 도구를 구성했습니다.',
    boundary: '2026.04.22 커밋 기준입니다. 기능 구현이 실제 차량 안전성이나 운영 배포 완료를 의미하지는 않습니다.',
  },
  {
    stage: '02 / VALIDATION',
    title: '추가 검증·개선 과제',
    detail: '저조도·가림·개인차에 따른 오경보, 경보 지연, 장시간 실행 안정성과 전송 실패·복구를 평가 항목으로 두었습니다. 파트너 인증 강화와 실제 운영 환경 검증은 남은 과제입니다.',
    boundary: '오프라인 모델 평가와 주행 환경 검증을 구분합니다. 목표 수치나 테스트 계획을 달성 실적으로 표시하지 않습니다.',
  },
  {
    stage: '03 / PLANNED',
    title: '하드웨어·서비스 확장 계획',
    detail: 'Raspberry Pi·Hailo 기반 이식과 IR 카메라, 차량 전원·통신 대응을 검토했습니다. 클라우드 운영, CAN/DTG 차량 데이터 연동과 운전자 코칭은 후속 확장 방향입니다.',
    boundary: '초기 기획의 확장안이며 구현·도입 완료가 아닙니다. 대규모 파일럿, 보험 연계와 매출 전망은 현재 성과에서 제외했습니다.',
  },
];
