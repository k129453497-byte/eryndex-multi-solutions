# Eryndex Official Asset Guide

## Official Master Assets

The following six files are the confirmed **Official Master Assets**. Preserve their original bytes and quality: do not regenerate, resize, recompress, transcode, or overwrite these masters. Web-optimized derivatives must be separate files.

| Asset | Original source | Repository path | Role |
|---|---|---|---|
| Logo | `k129453497-byte/eryndex-tactile-systems`: `client/public/brand/eryndex-logo.webp` | `public/assets/brand/logo/eryndex-logo.webp` | Official logo master; retain the original WebP format |
| Hero Master | `z-image-turbo_00074_.png` | `public/assets/brand/hero/eryndex-hero-master.png` | Official static Hero master |
| Hero H3 56 | `MiniMax_H3_00056_.mp4` | `public/assets/brand/hero/eryndex-hero-h3-source.mp4` | Official motion source; not the production video |
| Space Master | `Qwen_Edit_2511_00003_.png` | `public/assets/products/space/eryndex-space-master.png` | Official Space product master |
| Files Master | `Qwen_Edit_2511_00005_.png` | `public/assets/products/files/eryndex-files-master.png` | Official Files product master |
| Shield Master | `Qwen_Edit_2511_00008_.png` | `public/assets/products/shield/eryndex-shield-master.png` | Official Shield product master |

### Hero production derivatives — pending

Hero H3 Generation 56 is the preserved **source**, not a loop-fixed or production-ready video. In a later production step, perform the loop fix on a separate working copy, then create separate web-optimized **WebM / MP4 / poster** outputs. Verify the loop transition and playback, and provide a poster/static fallback before production use. Never overwrite `eryndex-hero-h3-source.mp4` or the static Hero master with these derivatives.

## Asset 001 — Hero
Purpose: Homepage brand hero visual.
Concept: Order / Flow / Technology / Human warmth.
Rules:
- Preserve large negative space for real HTML typography.
- Do not add text into the artwork.
- Do not recolor or replace with generated artwork.
- Do not overlay dashboard UI.
- Use video on capable devices and provide poster/static fallback.

## Asset 002 — Eryndex Space
Concept: Structure / Organize Work.
Accent: Soft Coral.
Rules:
- Official Product Master.
- Do not regenerate or substantially recolor.
- Do not add icons or text into the artwork.

## Asset 003 — Eryndex Files
Concept: Layers / Preserve Information.
Accent: Pale Cyan.
Rules:
- Official Product Master.
- Represents information states, versions, preservation and enterprise file management.
- Do not reduce the concept to generic cloud storage.

## Asset 004 — Eryndex Shield
Concept: Boundary / Control Trust.
Accent: Soft Mint.
Rules:
- Official Product Master.
- Do not add shield icons, padlocks, hacker imagery, cyberpunk effects, or neon security clichés.

## Services
Accent: Pale Lavender.
Services is not a fourth software product and must not receive a matching fourth Product Master visual. Use typography, layout, subtle motion, process design, restrained geometry, or natural SMB-oriented human imagery.

## Asset paths
The six Official Master Assets are stored at the exact paths above. Asset directories:
- `public/assets/brand/logo/`
- `public/assets/brand/hero/`
- `public/assets/products/space/`
- `public/assets/products/files/`
- `public/assets/products/shield/`
- `public/assets/services/`
- `public/assets/resources/`

Retain the four original PNG masters, the original WebP logo, and the original MP4 motion source without conversion or compression. Derive web-optimized formats separately.
