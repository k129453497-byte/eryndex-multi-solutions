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

As requested on 2026-09-10, all content now lives on one page per language: products and interactive examples, solutions, services, full resource articles, about, contact, privacy and terms. Navigation uses section anchors; longer content expands inline. The 54 legacy inner-page URLs redirect to their corresponding sections. See [single-page change and verification](docs/SINGLE_PAGE_CHANGE.md).

The website uses Astro, TypeScript, shared components and static localized routes. Read the [architecture review](docs/ARCHITECTURE_REVIEW.md), [deployment guide](docs/DEPLOYMENT.md), and [QA report](docs/QA_REPORT.md) before review or publishing.

Run with Node.js 24 and pnpm 11:

```sh
pnpm install
pnpm dev --port 4321
```

Validation: `pnpm check`, `pnpm build`, `pnpm qa`.

Official masters remain unchanged. Optimized derivatives live separately in `public/assets/web/`. The Hero currently uses the approved static fallback; production motion remains pending loop verification. The contact form prepares an email draft and does not submit data.

The website is deployed with GitHub Pages. The active rendering entry is SinglePage.astro; Home, Products, ProductPage, Solutions, Services and Resources are retained historical multi-page components, not active routes. Browser checks are available; see INDEPENDENT_QA_REPORT.md and FIX_PASS_20260911.md for scope and remaining independent acceptance work. A deployment does not imply all accessibility or cross-browser checks passed.
