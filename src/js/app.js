require('./bootstrap')

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

// 共通関数
require('./common')
