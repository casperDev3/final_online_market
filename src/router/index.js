import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Cart from '../views/Cart.vue'
import Delivery from '../views/Delivery.vue'

Vue.prototype.id_products = [];

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: Delivery
  },
  {
    path: '/payments',
    name: 'Payments',
    component: () => import('../views/Payments.vue')
  },
  {
    path: '/catalog/:category',
    name: 'Catalog',
    component: () => import('../views/Catalog.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
