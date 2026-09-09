# Eryndex Multi Solutions

Official source repository for the new Eryndex corporate website.

## Product architecture

- Eryndex Space — work, collaboration, projects, knowledge, automation
- Eryndex Files — file management, sharing, versions, backup, restore
- Eryndex Shield — identity, access, devices, permissions, security, audit
- Eryndex Services — implementation, migration, configuration, training, technical support, maintenance, customization, integration

`Eryndex Services` is not a fourth software product. Do not create an `Eryndex Support` software product; support belongs under Services.

## Brand direction

Warm ivory / off-white editorial design, large negative space, restrained translucent materials, soft natural light, and a high-end contemporary technology brand tone.

Product accents:
- Space: soft coral / Structure
- Files: pale cyan / Layers
- Shield: soft mint / Boundary
- Services: pale lavender / Human-Service layer

## Before implementation

Read these files in order:
1. `docs/ERYNDEX_WEBSITE_MASTER_BRIEF.md`
2. `docs/design/ASSET_GUIDE.md`
3. `docs/design/DESIGN_SYSTEM.md`
4. `docs/product/SPACE.md`
5. `docs/product/FILES.md`
6. `docs/product/SHIELD.md`
7. `docs/product/SERVICES.md`

The website architecture must support Traditional Chinese, Simplified Chinese, and English from the beginning.

## Website implementation

The website uses Astro, TypeScript, shared components and static localized routes. Read the [architecture review](docs/ARCHITECTURE_REVIEW.md), [deployment guide](docs/DEPLOYMENT.md), and [QA report](docs/QA_REPORT.md) before review or publishing.

Run with Node.js 24 and pnpm 11:

```sh
pnpm install
pnpm dev --port 4321
```

Validation: `pnpm check`, `pnpm build`, `pnpm qa`.

Official masters remain unchanged. Optimized derivatives live separately in `public/assets/web/`. The Hero currently uses the approved static fallback; production motion remains pending loop verification. The contact form prepares an email draft and does not submit data.

This implementation is ready for continued review, not marked as final production-approved: browser QA is currently blocked by an environment policy check. No production deployment has been performed.
