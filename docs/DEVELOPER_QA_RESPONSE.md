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
