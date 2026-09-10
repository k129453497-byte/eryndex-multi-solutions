# Eryndex — 開發與部署

## 本機

需要 Node.js 22.12+（本次驗證 24.19）與 pnpm 11。

- pnpm install
- pnpm dev --port 4321
- 瀏覽 http://127.0.0.1:4321/

## 品質檢查

- pnpm check
- pnpm build
- pnpm qa

qa 是靜態產物與邏輯檢查，不能取代浏览器測試。參考 QA_REPORT.md 的實際完成狀態。

## 網站空間根目錄

以 SITE_URL 設為實際網域、BASE_PATH=/ 建置。將 dist 裡的內容上傳公開根目錄，不上傳 source、node_modules 或原始專案文件。

## 子目錄／GitHub Pages

例如：
SITE_URL=https://k129453497-byte.github.io BASE_PATH=/eryndex-multi-solutions pnpm build

BASE_PATH 同時控制素材、站內連結、語言切換、canonical 及 sitemap。換路徑後必須重建，不能只移動資料夾。

每條頁面路徑有真實 index.html，不需要 SPA rewrite。主機須支援目錄 index.html。404.html 是找不到頁面的備援。

目前為一頁式：/zh-tw/、/zh-cn/、/en/ 各包含完整網站，根目錄提供繁中版。站內導覽使用 #products、#solutions 等錨點。54 個舊內頁僅提供 noindex 轉向至對應區段，sitemap 只列三個語言主頁。

## 發布控制

此交付尚未發布正式環境。先完成桌機、平板、手機瀏覽器 QA 與主管檢視，再決定發布。docs/ci/validate.example.yml 提供 CI 範例，只驗證與產生 artifact，不會自動部署；目前 GitHub 憑證沒有 workflow 寫入權限，因此尚未啟用。

## 聯絡功能

表單只建立郵件草稿；目前不呼叫 API、不儲存、不寄送。後端介接集中於 src/lib/contact.ts；正式接入前需加上伺服器驗證、濫用防護、資料保存規則並更新隱私說明。

## Hero

目前使用正式 Hero 靜態素材衍生檔，production motion 尚未啟用。參考 docs/design/HERO_PRODUCTION.md。六個 Master 檔案完整保留。

## 三語內容

共用元件與 src/data/content.ts；繁體中文為主，英文有獨立文案，簡體中文在建置時由 OpenCC 詞彙轉換，translator 第三參數可覆寫地區用語。並未複製三套頁面樣板。簡體地域用語仍建議人工編輯校對。

## 回復

目前為獨立開發分支，舊網站倉庫不受影響。發布時保留前一份 dist artifact；若需回復，重新部署前一份完整 artifact，不混用不同版本的 _astro 資源。
