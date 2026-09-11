# Eryndex Website Delivery & Independent QA Workflow

本文件定義 Eryndex 官網的正式開發、獨立驗收與結案流程。GitHub Repository
`k129453497-byte/eryndex-multi-solutions` 是唯一 Source of Truth；聊天內容、未提交檔案與口頭狀態均不構成正式驗收依據。

## 1. 角色分離

### Lead Developer / Lead Product Designer

負責網站設計、UX、Frontend、Responsive、i18n、Accessibility implementation、Performance optimization、Bug Fix 與 QA issue response。Developer 不得同時擔任最終獨立 QA。

### Independent QA Reviewer

不得參與原始網站開發、修改網站程式、替 Developer 辯護，或只因 Build Success 判定 PASS。必須閱讀規格、實際操作網站、提供 Evidence 並執行 Regression Test。

### Owner

負責品牌、產品架構、主要客群、Official Master Assets、核心敘事及重大設計爭議的最終決策。

## 2. 必讀 Source of Truth

每位 Agent 開始前必須閱讀：

- `README.md`
- `docs/ERYNDEX_WEBSITE_MASTER_BRIEF.md`
- `docs/design/ASSET_GUIDE.md`
- `docs/design/DESIGN_SYSTEM.md`
- `docs/product/SPACE.md`
- `docs/product/FILES.md`
- `docs/product/SHIELD.md`
- `docs/product/SERVICES.md`
- `public/assets/`

必須遵守 Master Brief 的 Hard Constraints、Flexible Directions 與 Proposal Policy。

## 3. 官方產品架構與網站形式

- Eryndex Space：Organize Work／Structure／Coral。
- Eryndex Files：Preserve Information／Layers／Cyan。
- Eryndex Shield：Control Trust／Boundary／Mint。
- Eryndex Services：Professional Services／Lavender Human-Service Layer；不是第四套 Software Product。
- 禁止重新建立 Eryndex Support Product。
- 網站是一頁式 Corporate Website。不得因缺少獨立產品、方案或服務子頁判定缺頁。

驗收重點是 Section Flow、Anchor Navigation、Product Differentiation、Responsive、Visual Rhythm、Information Architecture、Conversion Flow、i18n、Accessibility 與 Performance。

## 4. 交付循環

`BUILD → SELF CHECK → INDEPENDENT QA → QA REPORT → DEVELOPER REVIEW → FIX → REGRESSION QA → FINAL ACCEPTANCE`

Milestone A（首頁結構與視覺方向）、B（三產品與 Services）、C（Responsive 與 i18n）、D（合併前版本）皆應主動呼叫 QA。已大致完成的網站可直接進入 Final Independent QA。

同一 Issue 最多自動進行三個完整 Fix／Regression Cycles。第三輪仍未通過時標記 `NEEDS OWNER DECISION`，記錄雙方立場、已嘗試修正、未通過原因、建議方案與風險，不再自動修改。

## 5. Independent QA 規格

至少實測 1440×900、768×1024、390×844，不得只讀 Source Code。檢查：

- Visual／Brand Quality、One-page Narrative、Navigation。
- Space／Files／Shield 差異化、Services 定位、Solutions 清晰度、Official Asset Usage。
- Desktop、Tablet、Mobile；繁中、簡中、英文。
- Accessibility、Performance、SEO、Contact Form、Console Errors、Broken Links、Code Quality。

Severity：`CRITICAL`、`HIGH`、`MEDIUM`、`LOW`；可另標 `KNOWN PENDING ITEM`、`NOT TESTED`。

每項 Issue 必須包含 Issue ID、Severity、Area、Viewport、Language、Description、Expected、Actual、Evidence、Recommended Fix。

正式 QA 結果只能由 Independent QA 更新至 `docs/INDEPENDENT_QA_REPORT.md`，並記錄受驗 commit。QA 不得直接修改網站或 `docs/DEVELOPER_QA_RESPONSE.md`。

## 6. Developer Response 規格

Developer 完整閱讀最新正式 QA Report 後，逐項判斷，不機械式接受所有建議。

狀態：`OPEN`、`ACCEPTED`、`FIXED`、`DISPUTED`、`WONTFIX`、`NEEDS OWNER DECISION`。

每項回應必須包含：

- Issue ID
- Developer Assessment
- Decision
- Reason
- Implementation
- Commit

客觀成立者接受、修正、測試、commit 後才標記 `FIXED`。純設計偏好可標記 `DISPUTED`；違反 Hard Constraints 的建議不得執行。重大爭議標記 `NEEDS OWNER DECISION`。

正式回應由 Developer 更新至 `docs/DEVELOPER_QA_RESPONSE.md` 並 push。完成後只標示等待 Regression QA，不得自行宣布 QA PASS。

## 7. Regression QA

QA 必須重新驗證每個 `FIXED` Issue，不得直接採信 Developer 陳述。結果使用：

- `VERIFIED`
- `FAILED REGRESSION`
- `PARTIALLY FIXED`
- `NOT TESTED`

失敗則交回 Developer，並累計該 Issue 的 cycle 次數。

## 8. Owner Escalation

只有下列情況中斷自動流程：

- 修改品牌定位、產品架構、主要客群或 Services 身份。
- 新增／取消產品或重新建立 Support Product。
- 替換 Official Master Assets 或大幅改變品牌 Art Direction。
- 放棄三語或大幅改變網站核心敘事。
- Developer 與 QA 對重大設計議題無法一致。
- 同一 HIGH／CRITICAL 經三輪仍無法解決。

Spacing、Typography、Responsive、Anchor、Mobile、Accessibility、Performance、CSS、Components、Animation、UI polish 與 i18n bug 由 Developer 自行完成。

## 9. PASS Gate 與評分

Independent QA 只有在 CRITICAL＝0、HIGH＝0、所有可測主要功能正常、三種主要 viewport 完成、產品差異化成立、Services 定位正確、三語主要內容正常、Anchor 正常、無重大 Console Error／Broken Link／Accessibility 阻擋，且無明顯 Generic SaaS Template 問題時，才可正式 PASS。

Final QA 必須提供以下客觀分數（滿分 10）：

- Executive Visual
- One-page Narrative
- Product Differentiation
- Services Positioning
- Solutions Clarity
- Desktop
- Tablet
- Mobile

Developer 不得代替 QA 給出最終 PASS 或調高分數。
