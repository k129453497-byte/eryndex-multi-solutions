# Product Feature Panels — 2026-09-12

## 目的

將六個次要產品入口從共用的編號卡片，改為能直接表達各功能特性的介面示意；不新增產品，也不改變 Space、Files、Shield 的既有定位。

## 六種介面

- Space／團隊知識：以中央 Team Memory 與三個知識節點呈現可延續的團隊脈絡。
- Space／工作流程：以提交、審核、發布三段流程軌道呈現狀態推進。
- Files／分享連結：以分享範圍、檔案與期限狀態列呈現外部連結管理。
- Files／備份與還原：以垂直還原點時間軸呈現最近備份、保留範圍與演練結果。
- Shield／身分與裝置：以人員及裝置信任卡呈現符合條件與待驗證狀態。
- Shield／稽核紀錄：以帶有事件類型色彩的時間流呈現允許、進一步驗證與政策變更。

## 互動與限制

- 六個入口皆可由產品側欄切換，選取介面項目會留下視覺狀態。
- 使用網站既有範例資料，不連接後端、不改動真實系統或檔案。
- 手機版改為單欄，知識核心、流程軌道與事件時間線保留辨識度。
- 本次沒有更換官方產品圖、Logo 或 Master 素材。

## Developer Verification

- Astro check：28 files，0 errors／warnings／hints。
- Production subpath build：59 pages。
- Static QA：59 HTML、294 links、258 asset references、6 Master、3 locales、54 redirects。
- Localization regression：PASS。
- 398px 瀏覽器實測：六個入口皆可切換，無整頁水平溢出。

正式視覺與跨尺寸驗收仍由獨立 QA Reviewer 判定。
