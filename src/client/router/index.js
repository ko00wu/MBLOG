import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const Home = () => import('../pages/home/index.vue')
const About = () => import('../pages/about/index.vue')
const Tags = () => import('../pages/tags/index.vue')

export function createRouter() {
  return new Router({
    mode: 'history',
    fallback: false,
    routes: [
      { path: '/about', component: About, name: 'About' },
      { path: '/tags', component: Tags, name: 'Tags' },
      { path: '/', component: Home, name: 'Home' }
    ]
  })
}
