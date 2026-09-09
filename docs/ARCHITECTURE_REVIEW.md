# Architecture & Design Review — 2026-09-09

已完整讀取 README、Master Brief、ASSET_GUIDE、DESIGN_SYSTEM、四份產品／服務文件，逐一檢視六個正式素材。基準 commit：7a14df0。

## 決策

沒有需要變更 Hard Constraints 或重大策略的 Proposal。保留六個主導覽、16 個主要頁面、三個獨立產品及專業服務。以下是可自主採用的設計與工程改善。

| 審查範圍                 | 判斷與實作                                                                               |
| ------------------------ | ---------------------------------------------------------------------------------------- |
| Brand positioning        | SMB 的工作、資訊與信任；AI 不作為品牌主軸。暖白、克制、可親近。                          |
| Product architecture     | Space / Files / Shield 均可獨立使用；服務不是第四產品。                                  |
| Information architecture | 保留全部主要頁面；每個方案顯示問題、產品分工、導入步驟及成果。                           |
| Homepage narrative       | 保留品牌 → 產品 → 軟體體驗 → 方案 → 服務 → 品牌理由 → 資源 → 聯絡的順序。                |
| Navigation               | 六個主導覽；行動版收合，語言切換保留所在頁面。                                           |
| Product storytelling     | 使用不同的工作模型：任務看板、檔案版本、存取政策。示意資料明確標示。                     |
| Solutions architecture   | 四種業務情境，清楚說明各產品的責任與組合，避免重複產品介紹。                             |
| Services positioning     | 三階段導入與持續支援，不使用第四張產品主視覺。                                           |
| Visual hierarchy         | 暖炭黑文字、象牙白底、局部珊瑚／青／薄荷識別；大字與留白，減少卡片堆疊。                 |
| Interaction / Motion     | 低幅度、短距離、只播放一次的淡入；影片可暫停，reduced-motion 使用靜態圖。                |
| Responsive               | 行動版 Hero 文字與完整主視覺分開；產品體驗縮減為可操作的主要資訊。                       |
| Accessibility            | 語意標籤、跳至內容、可見焦點、原生表單、鍵盤操作與動態訊息。                             |
| Performance              | Astro 靜態產生 HTML，少量原生瀏覽器程式；手機不載入影片，圖片衍生檔另存。                |
| SEO                      | 各頁三語 title / description / canonical / hreflang、sitemap、Open Graph。               |
| Frontend architecture    | Astro + TypeScript + CSS。依使用者授權自行選擇架構；既有 GitHub 專案不引入額外託管平台。 |
| Maintainability          | 單一頁面樣板、產品資料、語言字典、共用元件及集中 token；固定套件版本與 lockfile。        |
| Multilingual             | /zh-tw/、/zh-cn/、/en/；共用結構，所有介面與文案明確翻譯，產品名稱保持英文。             |

## Hero 與素材

原始檔不可覆寫。若 motion source 尚未通過循環驗證，採用官方靜態 Hero，並建立可接入 production WebM / MP4 的元件。不得把 source 當完成的 production 影片。Logo 使用原始檔及完整比例。

## 對外行為

聯絡表單僅準備郵件草稿，不顯示已寄出或已收到。正式 API 接入點集中在聯絡服務。隱私／條款描述此展示網站的實際行為，不冒稱產品契約或法律審核。發布到正式環境須另外核准；本次交付 build、preview、QA 與部署說明。
