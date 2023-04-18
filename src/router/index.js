import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import SearchProductsView from '../views/SearchProductsView.vue'
import CartView from '../views/CartView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'registers',
    component: RegisterView
  },
  {
    path: "/search-products",
    component: SearchProductsView,
  },
  {
    path: "/cart",
    component: CartView,
  },
  {
    path: "/:catchAll(.*)",
    component: HomeView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
