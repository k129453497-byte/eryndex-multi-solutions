# Product Demo Interaction Expansion

日期：2026-09-11  
類型：Owner-requested product demonstration enhancement

## Scope

- Space、Files、Shield 的三個側欄項目都改為可操作入口。
- 側欄次要功能會在同一產品視窗內切換為對應內容，維持一頁式網站與三產品架構。
- 手機保留水平功能選單，不再隱藏側欄入口。

## Space

- 任務採兩階段完成模型：待處理第一次勾選後移至進行中；進行中再次勾選後移至已完成。
- 已完成任務可取消勾選並回到進行中。
- 各欄數量與狀態訊息同步更新。
- 團隊知識提供文件主題示意；工作流程提供提交、審核與發布步驟示意。

## Files

- 每份檔案保存獨立的版本時間軸、建立時間、操作者與變更摘要。
- 預設品牌提案顯示 v3、v2、v1。
- 「回復前一版」從 v3 變更為 v2，再次操作為 v1；不再建立無限遞增的新版本。
- 歷史版本仍完整保留，最早版本時按鈕停用。
- 分享連結與備份還原入口提供對象、期限、備份點及演練資訊。

## Shield

- 存取政策維持條件切換與決策結果。
- 身分與裝置入口顯示角色、裝置狀態與待驗證對象。
- 稽核紀錄入口顯示允許、需要驗證及政策變更事件。

## Constraints

- 未修改 Official Master Assets。
- 未新增第四套軟體產品，Services 定位不變。
- 互動全部使用範例資料，不連接正式後端，也不宣稱產品功能已正式交付。
- 繁中、簡中、英文架構維持。

## Verification

- Astro type check、production subpath build、靜態 QA 與簡中詞彙檢查。
- 實際瀏覽器驗證 Space 兩階段流轉、Files v3 → v2 與三份版本紀錄。
- 實際點擊 Space、Files、Shield 共六個次要側欄入口並返回主要入口。
- 390×844 驗證側欄功能選單可見，頁面無水平溢出。
- 正式 QA 結論仍由 Independent QA Reviewer 決定。
