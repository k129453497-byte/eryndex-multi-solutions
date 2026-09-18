# Eryndex Editorial Redesign — 2026-09-18

## Objective

以明亮、可信任且具有編輯節奏的企業網站語言，重新整理 Eryndex 一頁式官網。保留既有品牌 Logo、三套產品、互動 Demo、三語內容與既有功能，不複製參考網站的品牌或產品內容。

## References

- Fullinnotech：參考大字標題、英文 eyebrow、寬版章節、明亮科技漸層與雙欄能力卡片。
- Elias Net Corporate Site：參考置中 Hero、輕量導覽、圓角容器、柔和綠色氣氛與長頁敘事節奏。

## Eryndex interpretation

- 字型：Avenir Next／Inter 搭配 Noto Sans TC／PingFang TC，以高辨識無襯線字為主。
- 色彩：珍珠白、霧綠、淡藍紫為背景，保留 Space／Files／Shield 的珊瑚、藍、綠識別色。
- Hero：價值主張優先，產品素材作為空間感視覺，不讓圖片壓過文字。
- 產品：三套產品改為大型圓角故事卡，先呈現定位，再銜接可操作 Demo 與詳細功能。
- 解決方案／資源：改為可掃讀的圓角 disclosure cards，降低長頁的表格感。
- 文案：從「功能描述」改成「企業問題 → 工作改變 → 產品能力」的閱讀順序。

## Responsive principles

- Desktop：大字、寬留白、雙欄敘事。
- Mobile：Hero 文字與圖片分層；產品圖在上、內容在下；卡片與導覽維持單欄，避免水平捲動。

## Verification

- Astro check：PASS
- Production subpath build：PASS（59 pages）
- Static QA：PASS
- Localization regression：PASS
- Browser visual check：Desktop 1920px、Mobile 390px，無水平溢出與 console error。
