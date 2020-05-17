import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'

const routes = [
{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/home',
  name: 'home',
  component: () => import('../views/About.vue')
},
{
  path: '/find',
  name: 'find',
  component: () => import('../views/About.vue')
},
{
  path: '/order',
  name: 'order',
  component: () => import('../views/About.vue')
},
{
  path: '/mine',
  name: 'mine',
  component: () => import('../views/Test.vue')
},{
  path: '/home',
  name: 'home',
  component: () => import('../views/About.vue')
},
{
  path: '/about',
  name: 'About',
  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
},
{
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "test" */ '../views/Test.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
