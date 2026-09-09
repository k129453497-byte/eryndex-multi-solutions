# Hero production status

目前以 Official Hero Master 的獨立 WebP 衍生檔呈現，原始 PNG / MP4 未覆寫。手機與 reduced-motion 模式不下載影片。

Hero.astro 已建立 capability gate、poster、WebM / MP4 fallback、播放／暫停與頁面隱藏暫停。productionMotion 預設 false，避免請求不存在的 production 檔案。

啟用前：

1. 使用獨立工作檔剪輯 H3 source；檢視鏡位、材質、首尾狀態，不可直接假設 source 可循環。
2. 依動作規律剪出循環區間，必要時做短交疊；不能只設定 loop 就宣稱修復。
3. 分別輸出 public/assets/brand/hero/production/hero-loop.webm 與 hero-loop.mp4，移除音軌，MP4 使用 faststart。
4. 保留官方構圖與色彩，使用 poster fallback；新增資源須經實際解碼、首尾畫面與播放測試。
5. 桌機、手機、reduced-motion、save-data、autoplay blocked、載入失敗、暫停／繼續均通過後才啟用 productionMotion。

本次採用使用者明確允許的靜態 fallback 路徑。尚未產生或宣稱驗證完成 production video。
