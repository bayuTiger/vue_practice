Vue.createApp({
  data() {
    return {
      name: '', // 入力値
      upperName: '' // 表示する値
    };
  },
  // 遅延処理用のdelayFuncメソッドを準備
  created() {
    this.delayFunc = _.debounce(this.getUpper, 2000);
  },
  // nameプロパティが変化したときに、delayFuncを呼び出し
  watch: {
    name(newValue, oldValue) {
      this.delayFunc();
    }
  },
  methods: {
    // nameの値を大文字に変換したものを、upperNameプロパティに設定
    getUpper() {
      this.upperName = this.name.toUpperCase();
    }
  }
}).mount('#app');


// 算出プロパティの場合
// Vue.createApp({
//   data() {
//     return {
//       name: '',
//     };
//   },
//   computed: {
//     upperName() {
//       return this.name.toUpperCase();
//     }
//   },
// }).mount('#app');
