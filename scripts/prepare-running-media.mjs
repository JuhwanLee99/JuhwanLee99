import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = path.join(root, 'media-source/running');
const destination = path.join(root, 'public/media/running');
fs.mkdirSync(source, { recursive: true });
fs.mkdirSync(destination, { recursive: true });

// Preserve the supplied originals outside the public deployment directory.
for (const file of fs.readdirSync(path.join(root, 'public/media'))) {
  if (/^KakaoTalk_(Photo_2026-09-30-15-29-|Video_2026-09-30-15-30-16)/.test(file)) {
    const target = path.join(source, file);
    if (fs.existsSync(target)) throw new Error(`Source already exists: ${file}`);
    fs.renameSync(path.join(root, 'public/media', file), target);
  }
}

const names = [
  'race-2024-dallyeo-result', 'race-2024-dallyeo-ranking', 'evening-run',
  'everyday-run-log', 'race-samil-finish', 'race-samil-certificate',
  'race-seoul21k-certificate', 'race-seoul21k-medal', 'race-gangnam-finish',
  'race-gangnam-result', 'race-2025-dallyeo-result', 'race-peace-splits',
  'race-peace-medal', 'race-peace-finish', 'race-peace-certificate', 'race-global6k-certificate',
];
const files = fs.readdirSync(source).filter(file => file.startsWith('KakaoTalk_Photo_')).sort();
if (files.length !== names.length) throw new Error('Expected the 16 supplied running images.');

function ffmpeg(args) {
  execFileSync('ffmpeg', ['-v', 'error', ...args], { stdio: 'pipe' });
}

for (const [index, file] of files.entries()) {
  const name = names[index];
  const record = /result|ranking|certificate|splits|log/.test(name);
  const max = record ? 2000 : 1600;
  ffmpeg(['-i', path.join(source, file), '-vf', `scale=w='min(${max},iw)':h='min(${max},ih)':force_original_aspect_ratio=decrease`, '-frames:v', '1', '-c:v', 'libwebp', '-quality', record ? '90' : '84', '-map_metadata', '-1', '-y', path.join(destination, `${name}.webp`)]);
}

const video = path.join(source, 'KakaoTalk_Video_2026-09-30-15-30-16.mp4');
ffmpeg(['-i', video, '-map', '0:v:0', '-map', '0:a:0?', '-c', 'copy', '-map_metadata', '-1', '-movflags', '+faststart', '-y', path.join(destination, 'global6k-2026.mp4')]);
ffmpeg(['-ss', '2', '-i', video, '-vf', 'scale=1280:-2', '-frames:v', '1', '-c:v', 'libwebp', '-quality', '84', '-map_metadata', '-1', '-y', path.join(destination, 'global6k-2026-poster.webp')]);

const bytes = directory => fs.readdirSync(directory).reduce((sum, file) => sum + fs.statSync(path.join(directory, file)).size, 0);
console.log(`Running media prepared: ${(bytes(source) / 1048576).toFixed(1)} MB originals; ${(bytes(destination) / 1048576).toFixed(1)} MB web media.`);
