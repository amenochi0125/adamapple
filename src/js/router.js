const Header = require('./components/header.vue')
const Footer = require('./components/footer.vue')

const Home = require('./pages/home.vue')
const About = require('./pages/about.vue')
const Access = require('./pages/access.vue')
const Contact = require('./pages/contact.vue')
const Business = require('./pages/business.vue')
const Recruit = require('./pages/recruit.vue')
const Recruit01 = require('./pages/recruit_01.vue')
const Recruit02 = require('./pages/recruit_02.vue')
const Sitemap = require('./pages/sitemap.vue')

const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        header: Header,
        footer: Footer
      }
    },
    {
      path: '/about',
      components: {
        default: About,
        header: Header,
        footer: Footer
      }
    },
    {
      path: '/business',
      components: {
        default: Business,
        header: Header,
        footer: Footer
      }
    },
    {
      path: '/contents',
      components: {
        default: Business,
        header: Header,
        footer: Footer
      }
    },
    {
      path: '/recruit',
      components: {
        default: Recruit,
        header: Header,
        footer: Footer
      }
    },
    {
      path: '/recruit_01',
      components: {
        default: Recruit01,
        header: Header,
        footer: Footer
      }
    },
    {
      path: '/recruit_02',
      components: {
        default: Recruit02,
        header: Header,
        footer: Footer
      }
    },
    {
      path: '/access',
      components: {
        default: Access,
        header: Header,
        footer: Footer
      }
    },
    {
      path: '/contact',
      components: {
        default: Contact,
        header: Header,
        footer: Footer
      }
    },
    {
      path: '/sitemap',
      components: {
        default: Sitemap,
        header: Header,
        footer: Footer
      }
    }
  ]
})

const app = new Vue({ router }).$mount('#app')
