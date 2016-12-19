window._ = require('lodash')
window.$ = window.jQuery = require('jquery')

window.Vue = require('vue/dist/vue.min.js')
window.VueRouter = require('vue-router/dist/vue-router.min.js')

Vue.use(VueRouter)

const User = {
  template: `<div>User {{ $route.params.id }}</div>`
}

const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User }
  ]
})

const app = new Vue({ router }).$mount('#app')
