// プリロードスクリプト
// レンダラープロセスが読み込まれる前に実行される
// DOM（window, documentなど）とNode.js環境の両方にアクセスできる
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) {
      element.innerText = text;
    }
  };

  for (const dependency of ['chrome', 'node', 'electron']) {
    // Node.jsのprocess.versionsオブジェクトにアクセスする
    replaceText(`${dependency}-version`, process.versions[dependency]);
  }
});
