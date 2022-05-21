// アプリインスタンスの生成
Vue.createApp({
  // データオブジェクトを参照
  data: function () {
    return {
      // ルートコンポーネントの動作オプション
      message: "皆さん、こんにちは！",
    };
  },
  // マウント
}).mount("#app");
