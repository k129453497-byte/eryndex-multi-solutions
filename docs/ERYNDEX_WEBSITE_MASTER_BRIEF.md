# Eryndex Website Master Brief

## Company
Eryndex / 智序科技 is a software technology company for SMB customers. Brand goal: high-end, clean, modern, reliable, professional, approachable, and design-led.

## Business model
Three independent software products plus professional services:
- Eryndex Space
- Eryndex Files
- Eryndex Shield
- Eryndex Services

Do not create a fourth Support product. Support is a Services capability.

## Audience
Small and medium businesses, roughly 10–300 employees, often without a large IT team. The experience should communicate simplicity, reliability, practical deployment, and ongoing assistance.

## Product differentiation
- Space answers: How the company works.
- Files answers: How the company manages and preserves information.
- Shield answers: How the company controls trust and access.

Each product must deliver standalone value and may integrate with the others.

## Solutions
Solutions are combinations of products for business scenarios, not extra products:
- Modern Work = Space + Files
- Information Protection = Files + Shield
- Secure Office = Space + Shield
- Complete Digital Workplace = Space + Files + Shield

## Services
Services cover implementation, migration, configuration, training, technical support, maintenance, customization, and system integration. Present them as three stages:
1. 導入你的環境
2. 配合你的工作方式
3. 持續陪企業運作

## Homepage flow
Current design direction:
1. Hero brand statement
2. Brand proposition
3. Three products
4. Product experience / representative software UI
5. Solutions
6. Eryndex Services
7. Why Eryndex
8. Resources / Insights
9. Final CTA
10. Footer

This order is a strong starting direction, not an absolute rule. It may be improved if a clearly better UX, brand narrative, or conversion structure is proposed under the Proposal Policy below.

## Main navigation
Current design direction:
產品 / 解決方案 / 服務 / 資源 / 關於我們 / 聯絡我們

Navigation structure may be improved if there is a strong UX or information-architecture reason, but major changes require a proposal first.

## Required pages
Current expected scope:
- Home
- Products Overview
- Eryndex Space
- Eryndex Files
- Eryndex Shield
- Solutions Overview
- Modern Work
- Information Protection
- Secure Office
- Complete Digital Workplace
- Eryndex Services
- Resources
- About Eryndex
- Contact
- Privacy
- Terms

Secondary page structure may be consolidated or reorganized if the alternative is clearly stronger and does not weaken product clarity or business credibility.

## Hero
Brand-first. Use the official Hero master/motion asset when available. Do not place dashboards, people, AI imagery, servers, or feature grids in the hero. Maintain large negative space for HTML typography.

## Product UI
Create credible HTML/CSS frontend mock interfaces, not AI-generated screenshots with fake text. Space, Files, and Shield should share a design system while looking functionally distinct.

## Language
Architecture must support Traditional Chinese, Simplified Chinese, and English. Traditional Chinese is primary. Product names remain English in all languages.

## Content rules
No Lorem Ipsum. Do not invent customer logos, awards, certifications, partner claims, user counts, or third-party endorsements. AI is a normal capability, not the company identity.

## Contact
Primary simulated contact: `contact@eryndex.com`. Phone is not public. Contact form may be functional in UI but does not need to actually send mail during the initial build.

# Decision Governance

## Hard Constraints
The following are Source-of-Truth decisions and must not be changed unilaterally during implementation:

1. Brand identity is Eryndex / 智序科技.
2. Primary audience is SMB customers.
3. Top-level software product architecture is Eryndex Space, Eryndex Files, and Eryndex Shield.
4. Eryndex Services is a professional-services layer, not a fourth software product.
5. Do not recreate Eryndex Support as a standalone product without explicit approval.
6. Space, Files, and Shield must remain independently valuable products, not modules that require one another.
7. Official Master Assets are authoritative brand assets and must not be replaced, regenerated, substantially recolored, or reinterpreted without explicit approval.
8. The visual direction must remain light, warm, editorial, premium, and restrained. Do not revert to dark SaaS, neon cyberpunk, generic AI-startup, hacker-security, or dashboard-everywhere aesthetics.
9. Traditional Chinese, Simplified Chinese, and English support is required. Product names remain English.
10. Do not fabricate customers, awards, certifications, usage numbers, partnerships, testimonials, or third-party trust claims.
11. AI remains a normal capability, not the company identity or primary positioning.

## Flexible Directions
The following are current design directions and may be challenged or improved:

- Homepage section order and grouping.
- Navigation details and menu grouping.
- Solutions naming and presentation.
- Services presentation and storytelling.
- Product-page section order.
- Amount and placement of representative Product UI.
- Interaction patterns and motion approach.
- Frontend framework and implementation architecture.
- Component architecture and design-system implementation.
- Responsive behavior and mobile storytelling.
- Copywriting, headlines, and supporting content, provided product meaning is preserved.
- Resource structure and content grouping.
- Secondary-page consolidation where UX improves.

The goal is not mechanical compliance. The goal is to build a better Eryndex website while preserving the confirmed business and brand foundation.

# Proposal Policy

If implementation reveals a clearly superior approach in UX, brand storytelling, product positioning, information architecture, conversion strategy, accessibility, performance, or engineering, do not ignore the improvement merely because this brief contains an existing direction.

For a meaningful proposal, document:

1. **Current Approach** — what the current brief asks for.
2. **Proposed Improvement** — the alternative.
3. **Why It Is Better** — UX, brand, technical, conversion, or maintainability rationale.
4. **What It Changes** — affected pages, components, content, or assets.
5. **Risks / Trade-offs** — what may be lost or become more complex.
6. **Recommendation** — whether to adopt it.

## May be adopted autonomously
Small improvements that do not alter a Hard Constraint may be implemented directly and recorded in the project notes. Examples include spacing refinements, responsive improvements, semantic HTML, accessibility fixes, component simplification, animation timing, performance optimization, or clearer microcopy.

## Requires approval before implementation
A proposal must be raised before making changes that materially affect:

- Brand positioning.
- Product architecture.
- Whether a product exists or does not exist.
- The role of Services.
- Main navigation strategy.
- Homepage core narrative.
- Major page removal or major scope changes.
- Official Master Asset usage.
- Core visual art direction.
- Primary audience.
- Multilingual requirements.

Do not silently implement these changes.

# Build Behavior

Before writing production code:

1. Read this brief and all files under `docs/design/` and `docs/product/`.
2. Inspect available official assets under `public/assets/`.
3. Distinguish Hard Constraints from Flexible Directions.
4. Identify any high-value proposal worth raising before implementation.
5. If no major proposal is necessary, proceed with the best implementation rather than stopping to ask for routine decisions.

During implementation:

- Exercise senior product-design and engineering judgment.
- Improve weak details autonomously where allowed.
- Record important deviations from the Current Design Direction.
- Do not use the brief as an excuse to preserve an obviously weaker UX.

Before declaring completion:

- Run self-QA across desktop, tablet, and mobile.
- Verify product differentiation.
- Verify Services is not presented as a fourth product.
- Check navigation, accessibility, reduced motion, performance, console errors, broken links, and multilingual architecture.
- Confirm the result still feels like a real contemporary technology company website rather than a generic SaaS template.

## Final design goal
The result must feel like a real contemporary technology company website, not a generic SaaS template. Overall intended rhythm is Abstract → Products → Software UI → Solutions → Services/Human → Brand → CTA, but a demonstrably better narrative structure may be proposed.
