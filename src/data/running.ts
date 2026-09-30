import type { ScreenshotItem } from '../types/project';

export const runningMedia = (file: string) => `${import.meta.env.BASE_URL}media/running/${file}`;

type RunningImage = ScreenshotItem & { category: 'photo' | 'record' };

function photo(file: string, title: string, alt: string, category: RunningImage['category']): RunningImage {
  return { url: runningMedia(file), title, alt, category };
}

export const runningImages: RunningImage[] = [
  photo('race-samil-finish.webp', '3.1절 단축마라톤', '3.1절 단축마라톤 완주 후 기록 패널 앞에서 찍은 사진', 'photo'),
  photo('race-peace-finish.webp', '강남국제평화마라톤', '하프 완주 후 2시간 00분 22초 기록 패널과 함께 찍은 사진', 'photo'),
  photo('race-peace-medal.webp', '하프 완주 메달', '제22회 강남국제평화마라톤 완주 메달', 'photo'),
  photo('race-seoul21k-medal.webp', '더레이스 완주 메달', '2025 더레이스 서울 21K 대회 완주 메달을 든 사진', 'photo'),
  photo('race-gangnam-finish.webp', '10km 완주 후', '10km 기록 51분 20초가 적힌 완주 기록지와 음식', 'photo'),
  photo('evening-run.webp', '저녁 러닝', '밤 산책로에 비친 러너의 그림자', 'photo'),
  photo('everyday-run-log.webp', '일상 러닝 · 7.01km', '7.01km를 37분 26초에 달린 러닝 앱 기록', 'record'),
  photo('race-2024-dallyeo-result.webp', '2024 달려 · 5km', '2024 달려 5km 완주 기록 20분 58초', 'record'),
  photo('race-2024-dallyeo-ranking.webp', '2024 달려 · 순위', '2024 달려 5km 참가 순위 화면', 'record'),
  photo('race-samil-certificate.webp', '3.1절 단축마라톤 · 기록증', '2025년 3월 1일 10km 완주 기록 49분 50초', 'record'),
  photo('race-seoul21k-certificate.webp', '더레이스 · 10km 기록증', '2025년 4월 6일 더레이스 서울 21K의 10km 종목 완주 기록 50분 27초', 'record'),
  photo('race-gangnam-result.webp', '강남구육상연맹회장배 · 기록', '강남구육상연맹회장배육상 10km 완주 기록 51분 20초', 'record'),
  photo('race-2025-dallyeo-result.webp', '2025 달려 · 10km', '2025 달려 10km 완주 기록 49분 42초', 'record'),
  photo('race-peace-splits.webp', '하프 · 구간 기록', '강남국제평화마라톤 하프 완주 기록과 구간 기록', 'record'),
  photo('race-peace-certificate.webp', '하프 · 완주 기록증', '2025년 10월 3일 강남국제평화마라톤 하프 기록증 2시간 00분 22초', 'record'),
  photo('race-global6k-certificate.webp', 'GLOBAL 6K · 10km 기록증', '2026년 6월 20일 GLOBAL 6K FOR WATER 서울 10km 종목 기록증 54분 22초', 'record'),
];

export const distanceRecords = [
  { distance: '5 km', time: '20:58', event: '2024 달려', file: 'race-2024-dallyeo-result.webp' },
  { distance: '10 km', time: '49:42', event: '2025 달려', file: 'race-2025-dallyeo-result.webp' },
  { distance: 'Half', time: '2:00:22', event: '제22회 강남국제평화마라톤', file: 'race-peace-certificate.webp' },
] as const;

export type RaceDistance = '5km' | '10km' | '하프';
export const races: { id: string; name: string; date?: string; distance: RaceDistance; time: string; file: string }[] = [
  { id: 'global6k', name: 'GLOBAL 6K FOR WATER · 서울', date: '2026.06.20', distance: '10km', time: '54:22', file: 'race-global6k-certificate.webp' },
  { id: 'peace', name: '제22회 강남국제평화마라톤', date: '2025.10.03', distance: '하프', time: '2:00:22', file: 'race-peace-certificate.webp' },
  { id: 'dallyeo-2025', name: '2025 달려', date: '2025', distance: '10km', time: '49:42', file: 'race-2025-dallyeo-result.webp' },
  { id: 'seoul21k', name: '더레이스 서울 21K', date: '2025.04.06', distance: '10km', time: '50:27', file: 'race-seoul21k-certificate.webp' },
  { id: 'samil', name: '제74회 3.1절 단축마라톤', date: '2025.03.01', distance: '10km', time: '49:50', file: 'race-samil-certificate.webp' },
  { id: 'dallyeo-2024', name: '2024 달려', date: '2024', distance: '5km', time: '20:58', file: 'race-2024-dallyeo-result.webp' },
  { id: 'gangnam', name: '강남구육상연맹회장배육상', distance: '10km', time: '51:20', file: 'race-gangnam-result.webp' },
];
