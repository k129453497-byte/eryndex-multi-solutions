# Eryndex Developer QA Response

## Cycle 1

- 回應日期：2026-09-12（Asia/Taipei）
- Repository：`k129453497-byte/eryndex-multi-solutions`
- 分支：`feat/editorial-corporate-site`
- QA 基準報告 commit：`5eed96d`
- 修正 commit：`818b3e061b5e5937a5830eaa6b3c5bb2684f191f`
- Developer 結論：本輪五項均為客觀成立且不涉及品牌方向的缺陷，全部接受並修正。此文件不宣告 QA PASS，等待獨立 QA Regression Test。

## Issue Responses

### QA-14

- **Developer Assessment：**初次載入的版本按鈕與重新建立後的按鈕採不同事件綁定方式，導致初始 v2 無法操作，問題成立。
- **Decision：FIXED**
- **Reason：**版本時間軸從首次呈現起就應有一致操作行為。
- **Implementation：**改由穩定的版本歷史容器統一委派點擊事件，初始與後續重新建立的按鈕共用同一條切換流程。
- **Commit：**`818b3e061b5e5937a5830eaa6b3c5bb2684f191f`

### QA-15

- **Developer Assessment：**版本切換重建按鈕後，原焦點節點被移除，鍵盤焦點回到頁面本體，問題成立。
- **Decision：FIXED**
- **Reason：**鍵盤使用者切換版本後必須能持續辨識目前操作位置。
- **Implementation：**重新建立版本清單後，依所選版本將焦點移回對應的新按鈕；滑鼠與鍵盤均沿用相同流程。
- **Commit：**`818b3e061b5e5937a5830eaa6b3c5bb2684f191f`

### QA-09

- **Developer Assessment：**簡中檔案版本復原誤用「回复」，與資料復原語境不符，問題成立。
- **Decision：FIXED**
- **Reason：**此處應使用「恢复」，且不能以全域字詞替換影響一般訊息回覆語境。
- **Implementation：**只對 Files 復原按鈕、最早版本狀態與完成訊息加入簡中整句覆寫，並擴充 locale regression 防止「回复」再次出現。
- **Commit：**`818b3e061b5e5937a5830eaa6b3c5bb2684f191f`

### QA-08

- **Developer Assessment：**原生 constraint validation 可能在 submit listener 前中止提交，因此舊草稿與郵件連結未失效，問題成立。
- **Decision：FIXED**
- **Reason：**目前欄位內容一旦改變或驗證失敗，既有草稿就不再代表現在的需求，不應繼續顯示為可用。
- **Implementation：**建立統一草稿失效流程；在表單 input、change、capture invalid 與每次 submit 時隱藏舊結果、清空狀態及草稿，並將郵件入口重設為不含舊內容的基本地址。
- **Commit：**`818b3e061b5e5937a5830eaa6b3c5bb2684f191f`

### QA-16

- **Developer Assessment：**1100px media block 缺少結束括號，雖建置可完成，但原始 CSS 無法由格式解析器正確解析，問題成立。
- **Decision：FIXED**
- **Reason：**斷點範圍必須明確，避免後續樣式被意外納入同一 media query。
- **Implementation：**補齊外層 media block，並重新執行 Prettier parser、Astro check、production build 與靜態 QA。
- **Commit：**`818b3e061b5e5937a5830eaa6b3c5bb2684f191f`

## Developer Verification

- `pnpm exec prettier src/styles/pages.css --check`：PASS
- `pnpm check`：28 files，0 errors、0 warnings、0 hints
- production subpath build：PASS，59 pages
- `pnpm qa`：PASS（59 HTML、294 links、258 asset references、6 masters、3 locales、54 redirects、contact draft）
- `node scripts/qa-localization.mjs`：PASS，新增 Files「恢复」防回歸檢查
- `git diff --check`：PASS

## Regression Request

請獨立 QA 以 GitHub 最新提交重新執行聚焦 Regression Test：QA-14、QA-15、QA-09、QA-08、QA-16，以及三尺寸基本側欄／任務／版本回復 smoke。正式 PASS／Final Acceptance 由 QA Reviewer 判定。

## Cycle 2

- 回應日期：2026-09-12（Asia/Taipei）
- QA Regression report commit：`911a4f1`
- Developer Assessment：QA-15 的時間軸版本切換焦點已修正，但回復至 v1 時，原本聚焦的回復按鈕會停用，瀏覽器因而把焦點移回 BODY；獨立 QA 的剩餘判定客觀成立。
- Decision：**FIXED**
- Reason：回復功能雖然成功，鍵盤使用者仍應在最早版本完成後留在明確且可繼續操作的位置。
- Implementation：僅在回復結果為最早版本 v1 時，於時間軸重建及回復按鈕停用後，把焦點移到目前 v1 版本按鈕；v3→v2 時仍保留在可繼續使用的回復按鈕，不改變既有操作順序。
- Commit：`73fa89eb4dd5e46b576e2d36542900e2c7bce593`
- Regression Request：請獨立 QA 聚焦複驗 Files 鍵盤流程 v2→v1，確認畫面穩定後焦點位於 v1 時間軸按鈕；並做三尺寸基本 Files smoke。正式 PASS／Final Acceptance 仍由 QA Reviewer 判定。

## Feature panels — Fix cycle 1

- 回應日期：2026-09-12（Asia/Taipei）
- QA 報告 commit：`ec30f43`
- 修正 commit：`bd83880f50960605617d71005705e995187c306c`
- Developer 結論：QA-17 與 QA-18 均為客觀成立的低風險缺陷，接受並修正。本文件不宣告 QA PASS，等待獨立 QA Regression Test。

### QA-17

- **Developer Assessment：**團隊知識、工作流程、分享連結與備份還原的識別標記寫死為繁體中文，會在英文與簡中頁面留下未在地化字樣，問題成立。
- **Decision：FIXED**
- **Reason：**識別標記是產品介面文字的一部分，應與頁面語系一致，不能只翻譯標題與說明。
- **Implementation：**替四個功能入口加入繁中、英文、簡中三語標記資料，介面建立時依目前語系載入；身分裝置與稽核紀錄則保留原有語言中立符號。
- **Commit：**`bd83880f50960605617d71005705e995187c306c`

### QA-18

- **Developer Assessment：**功能項目只有視覺 class，未同步公開按下狀態；備份與稽核列表的透明背景又覆蓋一般選取樣式，焦點離開後不易辨識目前項目，問題成立。
- **Decision：FIXED**
- **Reason：**互動選取狀態必須同時具備可感知的視覺差異與可被輔助技術讀取的語意。
- **Implementation：**所有功能項目新增並同步更新 `aria-pressed`；工作流程預選項同步標示為已按下；備份與稽核列表新增持續可見的選取背景與邊線。
- **Commit：**`bd83880f50960605617d71005705e995187c306c`

### Developer Verification

- `pnpm check`：PASS
- production subpath build：PASS，59 pages
- `pnpm qa`：PASS（59 HTML、294 links、258 asset references、6 masters、3 locales、54 redirects、contact draft）
- `node scripts/qa-localization.mjs`：PASS
- `git diff --check`：PASS

### Regression Request

請獨立 QA 聚焦複驗 QA-17 與 QA-18：三語頁面的四組功能標記、六組功能項目的 `aria-pressed` 狀態，以及備份與稽核列表在焦點移開後仍可辨識的選取狀態。正式 PASS／Final Acceptance 仍由 QA Reviewer 判定。
