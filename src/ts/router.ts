"use strict"

const router = new VueRouter()

Vue.component('child', {
  // プロパティを宣言します。
  props: ['message'],
  // 単なるデータのように、プロパティは内部テンプレートで使用することができ、
  // そして this.messageとして、vm の中で利用可能になります。
  template: '<span>{{ message }}</span>'
})

const app = new Vue({ router }).$mount('#app')
