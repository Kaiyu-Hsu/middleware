## Middleware 練習
### Q1: 伺服器接收請求紀錄
- 時間戳記 (time-stamps) - 以當地時間 (台北) 顯示
- 請求的 HTTP 方法
- URL

### Q2: 伺服器回應的時間
能留下兩次時間戳記 (time-stamps)，分別為：

(1) 伺服器收到請求的時間戳記，如 2019-5-17 18:51:12
(2) 伺服器送出回應的時間，2019-5-17 18:59:23

## 工具 Tools
- [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/) - 開發環境
- [Express](https://www.npmjs.com/package/express) - 應用程式架構(version: 4.17.1)
- [npm](https://www.npmjs.com/package/npm) - a JavaScript package manager
- [nodemon](https://www.npmjs.com/package/nodemon) - 可讓網頁及時呈現套件

## 安裝步驟 Installation Steps
1. 按下此頁面Code按鈕後，複製本專案的URL
2. 打開終端機(terminal)，Clone本專案
`git clone https://github.com/Kaiyu-Hsu/middleware.git `
3. 進入存放專案的資料夾
`cd middleware`
4. 在終端機(terminal)，安裝npm套件
`npm install npm`
5. 在終端機(terminal)，安裝nodemon套件
`npm install nodemon`
6. 在終端機(terminal)，開啟網頁
`npm run dev`
7. 當Terminal出現`App running on port http://localhost:3000`，表示伺服器已啟動，請用瀏覽器開啟 http://localhost:3000 ，即可開始使用程式