import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { execFileSync } from 'node:child_process';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const output = join(root, 'public/media/dms');
const ffmpeg = process.env.FFMPEG_PATH || '/opt/homebrew/bin/ffmpeg';
const sources = '/var/folders/c1/qj781dlj689f54dtxpj55b240000gn/T';
mkdirSync(output, { recursive: true });

// Source screenshots are 1080 x 2400. Never copy unredacted inputs to public/.
// Downsampling destroys facial detail before smoothing; the mask is baked in.
const blur = (x, y, w, h) => `[0:v]split[base][face];[face]crop=${w}:${h}:${x}:${y},scale=8:10:flags=area,scale=${w}:${h}:flags=bilinear,gblur=sigma=35[redacted];[base][redacted]overlay=${x}:${y}[safe]`;
const run = args => execFileSync(ffmpeg, ['-hide_banner', '-loglevel', 'error', '-y', ...args], { stdio: 'inherit' });
const images = [
  ['codex-clipboard-ae4a544f-b3e5-46fb-bb44-f7585fc85b45.png', 'android-early.webp', [360, 570, 450, 550]],
  ['codex-clipboard-ce0091d6-7f19-4eaa-b4f7-591c70593b7e.png', 'prototype-drowsiness.webp', [400, 515, 410, 515]],
  ['codex-clipboard-0e7543a7-57e6-495f-b804-e3b418422388.png', 'prototype-yawn.webp', [450, 490, 405, 530]],
  ['codex-clipboard-07dc151d-4757-4725-8d9e-0f61addb558f.png', 'prototype-phone.webp', [435, 515, 390, 540]],
];
for (const [file, name, rect] of images) {
  run(['-i', join(sources, file), '-filter_complex', blur(...rect), '-map', '[safe]', '-frames:v', '1', '-c:v', 'libwebp', '-lossless', '1', '-compression_level', '6', '-map_metadata', '-1', join(output, name)]);
}

// A fixed safety region covers the head's movement throughout this short clip.
// No face-detector confidence gate: a missed detection cannot reveal the face.
const video = join(output, 'normal-drowsiness-blurred.mp4');
run(['-i', '/Users/juhwan/Downloads/일반_졸음.mp4', '-filter_complex', `${blur(350, 450, 490, 610)};[safe]fps=30,scale=720:1600[web]`, '-map', '[web]', '-map', '0:a?', '-c:v', 'libx264', '-preset', 'fast', '-crf', '23', '-pix_fmt', 'yuv420p', '-c:a', 'copy', '-map_metadata', '-1', '-map_chapters', '-1', '-movflags', '+faststart', video]);
run(['-ss', '9', '-i', video, '-frames:v', '1', '-c:v', 'libwebp', '-quality', '90', '-map_metadata', '-1', join(output, 'normal-drowsiness-poster.webp')]);
console.log('Prepared four redacted screenshots, a redacted video and its poster. Source files were not copied.');
