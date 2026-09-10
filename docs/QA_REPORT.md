# Eryndex Website — Review Build QA

最新狀態（2026-09-10）：已改為一頁式網站，根目錄及子目錄靜態檢查通過；本次瀏覽器已能連線，頁內導覽、產品／方案展開、政策自動展開及語言錨點已實測。具體範圍見 SINGLE_PAGE_CHANGE.md。以下為 2026-09-09 舊版檢查紀錄，不代表本次頁數或完整驗收結果。

日期：2026-09-09。狀態：程式與靜態產物驗證通過；瀏覽器 QA 受環境政策阻擋，尚未達成全部 production acceptance criteria。

## 已完成且有執行證據

- 完整讀取 8 份專案文件，檢視 6 個 Official Master Assets，記錄 17 項架構與設計審查。
- TypeScript / Astro check：0 errors、0 warnings、0 hints。
- 根目錄與 /eryndex-multi-solutions/ 子目錄兩種建置皆成功。
- 59 個 HTML：19 種內容頁 × 3 語言、預設首頁、404。
- 1,740 個連結參照、574 個素材參照：檔案與頁內錨點存在。
- 每頁唯一 H1、document language、title、description、canonical、四個語言 alternate；各語言內 title 不重複。
- 三語 sitemap 與 robots 存在。
- 六個 Master SHA-256 與基準 commit 7a14df0 位元組一致。
- Hero 與產品圖有兩種寬度的獨立 WebP 衍生檔；未改變構圖或品牌色。
- 聯絡草稿函式的 FormData 與 mailto 編碼測試通過；無自動傳送、無儲存、無虛假成功狀態。
- HTTP 預覽首頁與產品頁可回應 200。
- 原始碼沒有 Lorem Ipsum、假客戶、獎項、認證、見證或使用者數量聲稱。

## 瀏覽器檢查限制

瀏覽器工具數次回覆：無法確認 admin-enforced policy，拒絕存取 http://127.0.0.1:4321/。使用者已開啟該網址，但工具仍無法讀取 DOM、截圖或操作。未透過其他瀏覽器、CDP、截圖工具或間接方式規避政策。

因此以下尚未實測，不列為 PASS：

| 驗收項目    | 預定檢查                                                                |
| ----------- | ----------------------------------------------------------------------- |
| Desktop     | 1440×900：首頁視覺層級、Hero 構圖、所有產品頁、導覽與頁尾               |
| Tablet      | 820×1180：收合導覽、橫直版排版、產品示意可讀性                          |
| Mobile      | 390×844 與 320px 寬：無横向溢出、產品 UI 改排、表單與按鈕               |
| Keyboard    | 跳至內容、選單 Escape、語言選單、Tab 順序、操作後焦點                   |
| Interaction | Space 勾選／取消並移動任務；Files 搜尋、選取、示意還原；Shield 切換條件 |
| Contact     | 必填、email、空白內容、長度限制、草稿準備、複製失敗與成功               |
| i18n        | 在各頁切換語言維持路徑；英文長字串與簡體地域用語                        |
| Motion      | reduced-motion、正常模式的微動畫、200% 放大                             |
| Errors      | 瀏覽器 console 與實際 network error、圖片解碼                           |
| Performance | 行動裝置實際載入、LCP／CLS 等量測，未提供虛構分數                       |

## 設計自評（原始碼與內容層級）

1. Space / Files / Shield：分別為看板、檔案版本、條件式授權，資訊架構與互動模型不同；視覺效果仍待瀏覽器核對。
2. Services：全頁標示 Professional Services，採三階段流程，不列為第四產品。
3. Products / Solutions：產品描述独立能力，方案描述業務問題、分工與導入步驟。
4. Dashboard 依賴：Hero 為品牌主視覺；首頁只放一個代表性軟體體驗，產品頁才各自深入。
5. 模板感：採編輯式敘事、非等比例產品目錄、情境列表、服務時間軸；是否符合主管品味不能僅憑 build 宣稱。
6. Official Masters：原檔完整、衍生檔另存，無 AI 再生成、重上色或文字烙圖。
7. Warm Ivory：暖白與暖炭黑為底，產品色用於局部識別，服務以淡紫輔助。
8. Mobile：Hero 文字與主圖改為前後排列；產品 UI 單欄、側欄移除、選單收合，不只是縮小。
9. 三語：共用頁面樣板與內容資料；繁中與英文文案獨立，簡中透過 OpenCC 於建置時轉換，支援第三參數人工覆寫。

## 待完成／保留限制

- 完成上述瀏覽器 QA 前，不標記為 production-ready 或正式核准。
- Hero 目前為使用者允許的官方靜態 fallback；production video 的循環修復、WebM / MP4 與播放驗證尚未製作完成。
- 表單前端不寄信；後端接入與正式資料處理規則需另行實作。
- 簡體地域用語仍建議人工編輯校對；隱私與條款為本網站行為說明，正式商用契約需另行確認。
- 未修改正式網站、未啟用 GitHub Pages 部署。CI 範例附於 docs/ci/，尚未啟用。
