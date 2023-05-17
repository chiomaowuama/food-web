import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import cart from '../views/cart.vue'
import cartpage from '../views/cartpage.vue'
import paymentpage from '../views/paymentpage.vue'
import paymentoption from '../views/paymentoption.vue'
import transferpage from '../views/transferpage.vue'
import cardpart from '../views/cardpart.vue'
import confirmed from '@/views/confirmed.vue'
import signup from '@/views/signup.vue'
import loginpage from '@/views/loginpage.vue'
import forgotpassword from '@/views/forgotpassword.vue'
import codepassword from '@/views/codepassword.vue'
import resetpassword from '@/views/resetpassword.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage 
    },
    {
      path: '/fooddetail',
      name: 'fooddetail',
      component: () => import('../views/fooddetail.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/cartpage',
      name: 'cartpage',
      component: cartpage
    },
    {
      path: '/paymentpage',
      name: 'paymentpage',
      component: paymentpage
    },
    {
      path: '/paymentoption',
      name: 'paymentoption',
      component: paymentoption
    },
    {
      path: '/transferpage',
      name: 'transferpage',
      component: transferpage
    },
    {
      path: '/cardpart',
      name: 'cardpart',
      component: cardpart
    },
    {
      path: '/confirmed',
      name: 'confirmed',
      component: confirmed
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/loginpage',
      name: 'loginpage',
      component: loginpage
    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: forgotpassword
    },
    {
      path: '/codepassword',
      name: 'codepassword',
      component: codepassword
    },
    {
      path: '/resetpassword',
      name: 'restepassword',
      component: resetpassword
    },
   
  ]
})

export default router
