import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import ChatView from "@/views/ChatView.vue";
import SigninView from "@/views/SigninView.vue";
import SignupView from "@/views/SignupView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatView
  },
  {
    path: '/signin',
    name: 'signin',
    component: SigninView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
