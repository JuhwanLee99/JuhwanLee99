import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = path.join(root, 'media-source/baseball');
const destination = path.join(root, 'public/media/baseball');
fs.mkdirSync(source, { recursive: true });
fs.mkdirSync(destination, { recursive: true });
for (const file of fs.readdirSync(path.join(root, 'public/media'))) {
  if (/^KakaoTalk_(Photo_2026-09-30-15-35-12 |Video_2026-09-30-15-35-(24|42)\.mp4)/.test(file)) {
    const target = path.join(source, file);
    if (fs.existsSync(target)) throw new Error(`Source already exists: ${file}`);
    fs.renameSync(path.join(root, 'public/media', file), target);
  }
}
const ffmpeg = args => execFileSync('ffmpeg', ['-v', 'error', ...args], { stdio: 'pipe' });
for (const [index, name] of ['on-the-field', 'warmup', 'at-the-dugout'].entries()) {
  const original = path.join(source, `KakaoTalk_Photo_2026-09-30-15-35-12 ${String(index + 1).padStart(3, '0')}.jpeg`);
  ffmpeg(['-i', original, '-vf', "scale=w='min(1800,iw)':h='min(1800,ih)':force_original_aspect_ratio=decrease", '-frames:v', '1', '-c:v', 'libwebp', '-quality', '86', '-map_metadata', '-1', '-y', path.join(destination, `${name}.webp`)]);
}
for (const [suffix, name] of [['24', 'outdoor-batting'], ['42', 'indoor-batting']]) {
  const original = path.join(source, `KakaoTalk_Video_2026-09-30-15-35-${suffix}.mp4`);
  ffmpeg(['-i', original, '-map', '0:v:0', '-map', '0:a:0?', '-c', 'copy', '-map_metadata', '-1', '-movflags', '+faststart', '-y', path.join(destination, `${name}.mp4`)]);
  ffmpeg(['-ss', '1', '-i', original, '-vf', 'scale=1280:-2', '-frames:v', '1', '-c:v', 'libwebp', '-quality', '84', '-map_metadata', '-1', '-y', path.join(destination, `${name}-poster.webp`)]);
}
console.log('Prepared 3 baseball photos, 2 videos, and their poster images. Originals preserved in media-source/baseball.');
