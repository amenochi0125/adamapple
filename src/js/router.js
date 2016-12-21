const router = new VueRouter({
  routes: [
    { path: '/',           component: require('./pages/home.vue') },
    { path: '/about',      component: require('./pages/about.vue') },
    { path: '/business',   component: require('./pages/business.vue') },
    { path: '/recruit',    component: require('./pages/recruit.vue') },
    { path: '/recruit_01', component: require('./pages/recruit_01.vue') },
    { path: '/recruit_02', component: require('./pages/recruit_02.vue') },
    { path: '/access',     component: require('./pages/access.vue') },
    { path: '/contact',    component: require('./pages/contact.vue') },
    { path: '/sitemap',    component: require('./pages/sitemap.vue') }
  ]
})

const app = new Vue({ router }).$mount('#app')
