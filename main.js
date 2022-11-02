// electronモジュールの読み込み commonjs形式
// app アプリケーションのイベントライフサイクルを制御
// BrowserWindow アプリケーションのウィンドウを作成し管理
const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
  // 新しいウィンドウを作成
  const window = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      // スクリプトのパスを通してレンダラープロセスにアタッチする
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  // index.htmlをBrowserWindowインスタンスに読み込ませる
  window.loadFile('index.html');
};

// appモジュールの'ready'イベント発生以降にブラウザウィンドウを作成
app.whenReady().then(() => {
  createWindow();
  // ウィンドウのライフサイクルの管理
  // アプリをactiveにした場合に開いているウィンドウがない場合は新しいウィンドウを開く(macOS)
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// ウィンドウのライフサイクルの管理
// 全ウィンドウを閉じたときにアプリを終了する（Windows, Linux)
app.on('window-all-closed', () => {
  // ユーザーがmacOS(darwin)でない場合
  if (process.platform !== 'darwin') {
    // アプリを終了する
    app.quit();
  }
});
