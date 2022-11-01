// electronモジュールの読み込み commonjs形式
// app アプリケーションのイベントライフサイクルを制御
// BrowserWindow アプリケーションのウィンドウを作成し管理
const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  // 新しいウィンドウを作成
  const window = new BrowserWindow({
    width: 800,
    height: 800,
  });
  // index.htmlをBrowserWindowインスタンスに読み込ませる
  window.loadFile('index.html');
};

// appモジュールの'ready'イベント発生以降にブラウザウィンドウを作成
app.whenReady().then(() => {
  createWindow();
});
