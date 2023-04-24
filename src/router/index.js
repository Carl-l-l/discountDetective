import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import SearchProductsView from '../views/SearchProductsView.vue'
import CartView from '../views/CartView.vue'
import ProductView from '../views/ProductView.vue'
import store from '../store/index.js'

function isLoggedIn() {
  if(!Object.keys(store.state.user).length == 0){
    return true
  }else{
    return '/'
  }
}

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
    component: LoginView,
    beforeEnter: (to, from, next) => {
      if(!Object.keys(store.state.user).length == 0){
        next('/')
      }else{
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'registers',
    component: RegisterView,
    beforeEnter: (to, from, next) => {
      if(!Object.keys(store.state.user).length == 0){
        next('/')
      }else{
        next()
      }
    }
  },
  {
    path: "/search-products",
    component: SearchProductsView,
  },
  {
    path: "/cart",
    component: CartView,
    beforeEnter: [isLoggedIn]
  },
  {
    path: "/product",
    component: ProductView,
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
