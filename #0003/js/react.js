Vue.createApp({
  data() {
    return {
      current: new Date(),
    };
  },
  // 起動時にタイマーを設定
  created() {
    // mdn setInterval => https://developer.mozilla.org/ja/docs/Web/API/setInterval
    // abcはどこにも定義されてないじゃん！って思うかもしれない
    // this.abcの意味としては、dataオプション(this)にabcプロパティを追加してるいイメージ
    this.abc = setInterval(() => {
      this.current = new Date();
    }, 1000);
  },
  // 終了前にタイマーを破棄
  beforeUnmount() {
    clearInterval(this.abc);
  },
  renderTracked(e) {
    console.log("renderTracked");
    console.log(this);
    console.log(e);
  },
  renderTriggered(e) {
    console.log("renderTriggered");
    console.log(e);
  },
}).mount("#app");
