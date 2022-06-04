const app = Vue.createApp({
  beforeCreate: function() {
    console.log('beforeCreate...');
  },
  created: function() {
    console.log('created...');
  },
  beforeMount: function() {
    console.log('beforeMount...');
  },
  mounted: function() {
    console.log('mounted...');
  },
  // update系フックは書き換えが発生しないと呼び出されない
  beforeUpdate: function() {
    console.log('beforeUpdate...');
  },
  updated: function() {
    console.log('updated...');
  },
  beforeUnmount: function() {
    console.log('beforeUnmount...');
  },
  unmounted: function() {
    console.log('unmounted...');
  }
})

app.mount('#app');

setTimeout(function() {
  // beforeUnmountとunmountedのトリガーとなる、現在のアプリインスタンスを破棄するためのメソッド
  app.unmount();
}, 3000);