import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Member from '@/views/Member.vue'
import Blog from '@/views/Blog.vue'
import Gallary from '@/views/Gallary.vue'
import Article from '@/views/Article.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Member',
    name: 'Member',
    component: Member
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/Gallary',
    name: 'Gallary',
    component: Gallary
  },
  {
    path: '/Article',
    name: 'Article',
    component: Article
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
