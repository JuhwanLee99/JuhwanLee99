import type { ScreenshotItem } from '../types/project';

export const baseballMedia = (file: string) => `${import.meta.env.BASE_URL}media/baseball/${file}`;

export const baseballImages: ScreenshotItem[] = [
  { url: baseballMedia('on-the-field.webp'), title: '그라운드에서', alt: '배트와 헬멧을 갖추고 그라운드를 걷는 야구 활동 사진' },
  { url: baseballMedia('warmup.webp'), title: '타석을 준비하며', alt: '파란 유니폼을 입고 배트를 들고 있는 모습' },
  { url: baseballMedia('at-the-dugout.webp'), title: '경기를 기다리는 순간', alt: '헬멧을 쓰고 배트를 든 채 그라운드를 바라보는 모습' },
];

export const baseballVideos = [
  { id: 'outdoor-batting', title: '야외 타격 연습', duration: '5초', description: '야외 연습장에서 촬영한 타격 동작.', file: 'outdoor-batting.mp4', poster: 'outdoor-batting-poster.webp' },
  { id: 'indoor-batting', title: '실내 타격 연습', duration: '49초', description: '실내 연습장에서 반복한 타격 연습.', file: 'indoor-batting.mp4', poster: 'indoor-batting-poster.webp' },
];
