# Eryndex Independent QA Report

## 1. 巡檢目標與正式結論

- 日期：2026-09-12（Asia/Taipei）。Repository：`k129453497-byte/eryndex-multi-solutions`。
- 分支：`feat/editorial-corporate-site`。
- **受驗 commit：`d85b67e1ade7ead26ba21f567b3c1c1fe640871f`**。
- 規格：[PRODUCT_FEATURE_PANELS_20260912.md](PRODUCT_FEATURE_PANELS_20260912.md)。本輪驗收 Owner 新增的六個特色介面，不是先前 QA-15 修正的重跑。
- **結論：PASS WITH CONDITIONS；本次特色介面變更尚未授予 Final Acceptance。**
- 六種介面已有可辨識差異，符合「不再共用 1/2/3 編號卡片」的視覺方向；側欄、選取事件、返回與基本鍵盤操作可用。
- 新增未結客觀問題：**CRITICAL 0、HIGH 0、MEDIUM 0、LOW 2（QA-17、QA-18）**。
- 原 `a657422` 範圍的 PASS／Final Acceptance 保留為[歷史結論](https://github.com/k129453497-byte/eryndex-multi-solutions/blob/80b2d72bc86eb59f1185a17fa2db460a960448e3/docs/INDEPENDENT_QA_REPORT.md)，不自動延伸到新提交，也不因新版問題倒改舊版歷史。
- QA 僅更新報告與必要證據；未修改產品、素材、規格、Developer Response，未部署或操作真實後端。

## 2. Source of Truth 與驗收方法

已 fetch 並確認本機 HEAD 與遠端 feature branch 均為上述 SHA，完整閱讀新增規格及程式差異。相較 `80b2d72` 僅新增功能規格、修改 ProductUI 與 pages.css，沒有更換 Master。沿用 Repository 已讀取的 README、Master Brief、design／product 文件與 DELIVERY_QA_WORKFLOW；不把聊天或 Developer 自測當成 PASS 證據。

Owner 通知正式部署完成；本輪唯讀核對 GitHub `gh-pages` 指標為 `424ace59423b937dbb9d03c554f6bb80c7dfa932`。**這不是部署後 HTTP／瀏覽器驗收，也不是通過依據。** 本次互動測試在獨立 checkout 的 production subpath build 執行，網址 `http://127.0.0.1:4379/eryndex-multi-solutions/`。[三語 HTTP 證據](qa-evidence/d85b67e/http-build.json)確認回應與本輪 dist 逐位元相同。

環境：macOS Codex Browser／Chromium，Node.js 24.19.0、pnpm 11.19.0。所有操作為內建示例。三語 × 三尺寸 × 六介面，共 **54 組介面、162 次項目選取**：第一項滑鼠點擊、第二項 Enter、第三項 Space，再返回主入口。每步記錄實際選取 class、焦點、可及狀態、視窗寬度及內容。

英文手機另對六個介面做連續 Tab／Shift+Tab／Enter／Space 進入、選取與返回，避免只以直接聚焦元素的測試推論 Tab 順序。另以繁中桌面、簡中平板、英文手機操作返回後的 Space 任務、Files 版本及 Shield 政策。

## 3. 六種介面與三語／三尺寸結果

### 視覺差異

| 介面 | 實際呈現與判定 | 桌面英文 | 平板簡中 | 手機繁中 |
|---|---|---|---|---|
| 團隊知識 | 中央 Team Memory 圓形核心與三個知識節點；手機核心置頂。與其他介面不同，PASS。 | [圖](qa-evidence/d85b67e/en-1440-knowledge.png) | [圖](qa-evidence/d85b67e/zh-cn-768-knowledge.png) | [圖](qa-evidence/d85b67e/zh-tw-390-knowledge.png) |
| 工作流程 | 提交／審核／發布標籤及箭頭；桌面／平板有串接線，手機改為直向步驟。仍使用卡片，但已呈現流程語意，並非原編號卡片，PASS。 | [圖](qa-evidence/d85b67e/en-1440-workflow.png) | [圖](qa-evidence/d85b67e/zh-cn-768-workflow.png) | [圖](qa-evidence/d85b67e/zh-tw-390-workflow.png) |
| 分享連結 | 分享範圍膠囊標籤、檔名、到期／內部狀態列，PASS。翻譯例外見 QA-17。 | [圖](qa-evidence/d85b67e/en-1440-sharing.png) | [圖](qa-evidence/d85b67e/zh-cn-768-sharing.png) | [圖](qa-evidence/d85b67e/zh-tw-390-sharing.png) |
| 備份與還原 | 垂直實線、備份／保留／演練節點與日期資料，PASS。選取回饋見 QA-18。 | [圖](qa-evidence/d85b67e/en-1440-backup.png) | [圖](qa-evidence/d85b67e/zh-cn-768-backup.png) | [圖](qa-evidence/d85b67e/zh-tw-390-backup.png) |
| 身分與裝置 | 人員縮寫、角色／裝置卡；KT 有不同色彩及驚嘆號，手機改單欄，PASS。 | [圖](qa-evidence/d85b67e/en-1440-identity.png) | [圖](qa-evidence/d85b67e/zh-cn-768-identity.png) | [圖](qa-evidence/d85b67e/zh-tw-390-identity.png) |
| 稽核紀錄 | 虛線事件流、時間、不同事件色彩及符號，與備份實線時間軸可區別，PASS。選取回饋見 QA-18。 | [圖](qa-evidence/d85b67e/en-1440-audit.png) | [圖](qa-evidence/d85b67e/zh-cn-768-audit.png) | [圖](qa-evidence/d85b67e/zh-tw-390-audit.png) |

手機 workflow 的橫向連線隱藏，保留步驟標籤與箭頭；沒有因改成直向而重新變成 1/2/3 通用卡片。不把更豐富動態、真實搜尋／流程執行或後端資料新增成未約定需求。

截圖是 viewport 局部畫面，不是全頁拼接；某些高內容需正常垂直捲動，桌面 App 擷取範圍可能小於 1440px。是否整頁 overflow 以實際 DOM 寬度及操作為準，不能把圖片右緣裁切當成網站錯誤。最終介面截圖在選取動畫結束後擷取；JSON 的逐步 computed style 是即時值，不拿過渡動畫中的顏色當成穩定狀態。QA-18 另有跨工具呼叫的穩定證據。

### 九組矩陣

「選取事件 PASS」表示三個項目依次成為唯一 selected；不等於選取回饋已完整可及。每組六個介面均受 QA-18 影響。

| 語言／尺寸 | 六入口／18 次選取事件／返回 | 鍵盤焦點保留 | 整頁 overflow／Console error | 文案 | 證據 |
|---|---|---|---|---|---|
| 繁中 1440×900 | PASS | PASS | 無／0 | PASS（本輪標籤） | [JSON](qa-evidence/d85b67e/zh-tw-1440-panels.json) |
| 簡中 1440×900 | PASS | PASS | 無／0 | FAIL QA-17 | [JSON](qa-evidence/d85b67e/zh-cn-1440-panels.json) |
| 英文 1440×900 | PASS | PASS | 無／0 | FAIL QA-17 | [JSON](qa-evidence/d85b67e/en-1440-panels.json) |
| 繁中 768×1024 | PASS | PASS | 無／0 | PASS（本輪標籤） | [JSON](qa-evidence/d85b67e/zh-tw-768-panels.json) |
| 簡中 768×1024 | PASS | PASS | 無／0 | FAIL QA-17 | [JSON](qa-evidence/d85b67e/zh-cn-768-panels.json) |
| 英文 768×1024 | PASS | PASS | 無／0 | FAIL QA-17 | [JSON](qa-evidence/d85b67e/en-768-panels.json) |
| 繁中 390×844 | PASS | PASS | 無／0 | PASS（本輪標籤） | [JSON](qa-evidence/d85b67e/zh-tw-390-panels.json) |
| 簡中 390×844 | PASS | PASS | 無／0 | FAIL QA-17 | [JSON](qa-evidence/d85b67e/zh-cn-390-panels.json) |
| 英文 390×844 | PASS | PASS | 無／0 | FAIL QA-17 | [JSON](qa-evidence/d85b67e/en-390-panels.json) |

- [英文手機連續鍵盤證據](qa-evidence/d85b67e/en-390-continuous-keyboard.json)：六入口 Enter 開啟、Tab 到項目、Space／Enter 選取、Shift+Tab 回主入口、Enter 返回；焦點保留在正確按鈕，3px outline，無鍵盤陷阱。
- [返回主功能 smoke](qa-evidence/d85b67e/return-primary-smoke.json)：三語分尺寸測試中，Space 任務數變為 1／2／1、Files 切 v2、Shield 改為需要進一步驗證。確認主功能真的可以操作，不只看 hidden class。
- [Astro check](qa-evidence/d85b67e/check.txt)：28 files，0 errors／warnings／hints；[build](qa-evidence/d85b67e/build.txt)：59 pages，PASS。
- [Static QA](qa-evidence/d85b67e/static-qa.txt)：294 links、258 asset references、6 Master、3 locales、54 redirects、contact draft，PASS。
- [Localization regression](qa-evidence/d85b67e/localization.txt)：PASS，但沒有捕捉新增動態 marker，不能抵銷 QA-17。

## 4. 發現問題、風險等級與影響範圍

### QA-17 — 新增介面標籤未依語言翻譯

- **Severity：LOW；Status：OPEN。Area：Feature panels／i18n。Viewport：三種。Language：英文、簡中。**
- **Description／Actual：**英文 Team knowledge 出現「語／交／規」，Workflows 出現「提交／審核／發布」，Shared links 出現「外部／內部／期限」，Backup & restore 出現「即時／驗證」。簡中相同位置仍使用「語、規、審核、發布、內部、即時、驗證」等繁體字。四個介面均在三尺寸重現。
- **Expected：**有功能含義的標籤使用該語言，簡中經正常轉換；不把文字當成不需翻譯的裝飾圖示。
- **Evidence：**九組 JSON 的 item text；[英文流程畫面](qa-evidence/d85b67e/en-1440-workflow.png)、[簡中備份畫面](qa-evidence/d85b67e/zh-cn-768-backup.png)。
- **原因定位：**`src/components/ProductUI.astro:429–432` 在 client script 寫死繁中 marker，未使用既有 translator／locale 資料；主要內容雖已翻譯，新增 marker 沒有跟隨。
- **反證與風險限制：**主要標題及詳細文案可讀、操作正常，並非整頁語言失效；因此列 LOW。Team Memory 是規格明示的核心名稱，本項不要求改品牌式核心字樣。
- **Recommended Fix：**將四組 marker 納入三語資料或使用有本地化可及名稱的中性圖示；擴充動態展開後的 locale 檢查，不以移除所有特色標籤規避需求。

### QA-18 — 項目選取缺少可及狀態，部分介面視覺回饋過弱

- **Severity：LOW；Status：OPEN。Area：Feature selection／accessibility。Viewport：三種。Language：三語。**
- **Description／Actual：**六種介面都能切換唯一 `.selected`，但按鈕沒有對應的程式可讀選取狀態或選取結果文字；初始 workflow 選取也只有 class。鍵盤焦點框只表達「目前焦點」，不能代替「哪個項目已選取」。
- **Expected：**選取後提供符合控制項語意的狀態及可辨識的持續視覺提示，焦點移走後仍能知道選中了哪一項。
- **Evidence：**九組 JSON 的 `ariaPressed:null`、selected 變化及焦點；source 的 click handler 只更新 class。另在英文手機選 Backup／Audit 第二項後點標題移走焦點，[穩定狀態 JSON](qa-evidence/d85b67e/selection-settled.json)確認選取項與其他項背景均 transparent、邊框相同，只有 `translateY(-2px)`；[備份畫面](qa-evidence/d85b67e/en-390-backup-selection-settled.png)、[稽核畫面](qa-evidence/d85b67e/en-390-audit-selection-settled.png)難以辨識第二項已選取。
- **原因定位：**`src/components/ProductUI.astro:444–445,456` 僅切換 selected；`src/styles/pages.css:640,649` 的透明背景／邊框覆寫通用 selected 樣式。視覺提示弱的實測聚焦在英文手機兩種時間軸，共用樣式適用其他語言／尺寸；不冒稱每組都做了移開焦點後的視覺詳測。
- **反證與風險限制：**162 次選取事件均成功，六種鍵盤流程可操作且焦點可見，沒有失焦或鍵盤陷阱。不是回復 QA-15 的舊失焦問題；未實測螢幕閱讀器，也不宣稱完成 WCAG audit。2px 位移確實存在，問題是缺少語意狀態及清楚回饋，不寫成「完全沒有任何視覺變化」。
- **Recommended Fix：**依互動模型提供 `aria-pressed` 或適當的單選語意，同步更新初始及後續選取；為 backup／audit 補足不依賴 hover／focus 的 selected 樣式。保留六種介面的不同外觀，不需要改產品定位。

## 5. 建議改善方式與手動確認

兩項皆為普通 i18n／互動可及性修正，**不需要 Owner 重新確認品牌方向**。由 Developer 依工作流程回應並提交修正；QA 不修改產品。

修正後聚焦複驗四組動態 marker 的英文／簡中、六種選取語意與初始化、備份／稽核移開焦點後的提示，以及三尺寸側欄／選取／返回 smoke。這是此次變更的首輪 QA，不把之前 QA-15 的兩個修正 cycle 累加到新 issue。

Owner 已部署不構成 WONTFIX 或風險接受。此報告沒有要求 QA 擅自回退部署；正式環境處置仍由 Owner／Developer 決定。

## 6. 評分與既有待辦

滿分 10。以下為 reviewer 判斷，非工具量測；未變部分沿用前輪評分，沒有將本輪視覺變更包裝成全站重新審查。

| 面向 | 分數 | 本輪判斷 |
|---|---:|---|
| Executive Visual | 8/10 | 官方構圖維持，特色介面保持既有視覺語言；未改 Master。 |
| One-page Narrative | 7/10 | 主敘事未改；長頁取捨仍屬既有 QA-04 待辦。 |
| Product Differentiation | 8/10 | 六個次要介面差異成立；文案及選取回饋仍有兩項 Low。 |
| Services Positioning | 9/10 | 沿用既有專業服務定位，未改為第四軟體。 |
| Solutions Clarity | 8/10 | 方案內容未改，沿用前輪範圍。 |
| Desktop | 8/10 | 六介面三語可操作，無整頁 overflow；QA-17／18 待修正。 |
| Tablet | 8/10 | 知識核心、流程軌道及時間線可辨識；同上待修正。 |
| Mobile | 7/10 | 單欄保留功能特色、鍵盤可操作；長頁閱讀成本及選取回饋仍有改善空間。 |

先前 QA-08／09／14／15／16 的限定 VERIFIED 保留在歷史報告。本輪沒有證據重開舊問題；QA-17 是新 marker 的翻譯問題，不把已修正的 Files「恢复」誤報成再次失敗。QA-04 長頁精簡、QA-12 歷史樣式隔離及 Hero motion 的既有待辦維持，不新增 Owner 決策或假稱已完成。

## 7. 可直接複製的驗證步驟

1. 載入指定語言，依次展開六個次要入口。
2. 點第一項、以 Enter 選第二項、Space 選第三項；確認唯一選取及可及狀態同步。
3. Tab／Shift+Tab 檢查可見焦點及返回主入口，返回後實際操作任務／版本／政策。
4. 英文／簡中檢查新增 marker；備份與稽核選第二項後點標題，確認焦點離開後仍能辨識選取。
5. 在 1440×900、768×1024、390×844 檢查內容、整頁寬度與 Console。

```sh
# 受驗提交的獨立 checkout；任一步失敗即停止，不部署。
set -eu
test "$(git rev-parse HEAD)" = "d85b67e1ade7ead26ba21f567b3c1c1fe640871f"
pnpm install --frozen-lockfile
pnpm check
SITE_URL=https://k129453497-byte.github.io BASE_PATH=/eryndex-multi-solutions pnpm build
BASE_PATH=/eryndex-multi-solutions pnpm qa
node scripts/qa-localization.mjs
```

預覽：`BASE_PATH=/eryndex-multi-solutions pnpm preview --port 4379`。若 checkout 是 QA 報告提交，使用獨立受驗 checkout 執行 SHA guard，不修改產品繞過驗證。

## 8. 未測範圍與驗收界線

- 本輪聚焦六個介面，沒有重新執行全站 Contact、SEO、效能、全部錨點／展開組合；歷史數據不當成新提交量測。
- Safari／Firefox／實體 iOS／Android、螢幕閱讀器、完整 WCAG／對比／200% zoom：NOT TESTED。
- 正式站 HTTP／瀏覽器部署驗證、真實分享／備份／身分／稽核後端、郵件寄送、field Web Vitals：NOT TESTED。
- 54 組互動矩陣皆使用本地示例。沒有驗證真實備份、存取政策或資安控制有效性。
- 本次新增範圍需 QA-17／QA-18 修正複驗後再判定 Final Acceptance。視覺方向通過不代表所有互動品質已無條件通過。

## 9. Rollback 與提交範圍

QA 沒有修改產品或部署，無產品 rollback 可執行。報告如需更正，以後續 QA 提交保留歷史，不刪檔、不 force-push。只提交本報告及 `docs/qa-evidence/d85b67e/`；既有其他未追蹤資料不納入。
