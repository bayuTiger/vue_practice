Vue.createApp({
  data() {
    return {
      message: 'こんにちは、世界！'
    };
  },
  mounted() {
    this.message = 'はじめまして、Vue.js！';
    // console.log(this.$el.textContent.includes(this.message));
    // 上のconsoleは「<div id  = "app">配下にmessageプロパティの内容が含まれるか」ということを表している
    // しかしこのままでは、Vueの非同期更新の仕様によりエラーになる

    // ビューへのデータ変更を待ってから、作用するためのメソッド
    // $nextTick(callback) callback: 更新後に処理すべき処理
    this.$nextTick(() => {
      // 文書ツリー(ここでは$elプロパティ)にアクセスするべきではないので、本当に文書ツリーからから得るべき情報か、考えてから使う
      console.log(this.$el.textContent.includes(this.message)); // Vue標準のメンバーには、接頭辞「$」が付与されている = $elはVue標準のメンバー
    });
  }
}).mount('#app');