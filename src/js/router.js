const router = new VueRouter({
  routes: [
    { path: '/',           component: require('../vue/pages/home.vue') },
    { path: '/about',      component: require('../vue/pages/about.vue') },
    { path: '/business',   component: require('../vue/pages/business.vue') },
    { path: '/recruit',    component: require('../vue/pages/recruit.vue') },
    { path: '/recruit_01', component: require('../vue/pages/recruit_01.vue') },
    { path: '/recruit_02', component: require('../vue/pages/recruit_02.vue') },
    { path: '/access',     component: require('../vue/pages/access.vue') },
    { path: '/contact',    component: require('../vue/pages/contact.vue') },
    { path: '/sitemap',    component: require('../vue/pages/sitemap.vue') }
  ]
})

Vue.component('child', {
  // プロパティを宣言します。
  props: ['message'],
  // 単なるデータのように、プロパティは内部テンプレートで使用することができ、
  // そして this.messageとして、vm の中で利用可能になります。
  template: '<span>{{ message }}</span>'
})

const app = new Vue({ router }).$mount('#app')
