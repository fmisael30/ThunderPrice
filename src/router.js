import Vue from 'vue'
import Router from 'vue-router'
import firebase from './firebase.js'

Vue.use(Router)

let router = new Router({

  mode: 'history',
  base: process.env.BASE_URL,

  scrollBehavior () {
    return { x: 0, y: 0 }
  },

  routes: [
    {
      path: '*',
      name: 'notFound',
      component: () => import(/* webpackChunkName: "notFound" */ './views/notFound.vue')
    },
    {
      path: '/',
      name: 'cover',
      component: () => import(/* webpackChunkName: "cover" */ './views/Cover.vue')
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: () => import(/* webpackChunkName: "inicio" */ './views/Inicio.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */ './views/Register.vue')
    },
    {
      path: '/recovery',
      name: 'recovery',
      component: () => import(/* webpackChunkName: "recovery" */ './views/Recovery.vue')
    },
    {
      path: '/productos/',
      name: 'productos',
      component: () => import(/* webpackChunkName: "productos" */ './views/Productos.vue')
    },
    {
      path: '/productos/producto/:Producto_id',
      name: 'productoDetalle',
      component: () => import(/* webpackChunkName: "productoDetalle" */ './views/Producto_detalle.vue')
    },
    {
      path: '/productos/producto/editar/:Producto_id',
      name: 'productoEditar',
      component: () => import(/* webpackChunkName: "productoEditar" */ './views/Producto_editar.vue'),
      meta: {
          requiresAuth: true
      }
    },
    {
      path: '/crud',
      name: 'crud',
      component: () => import(/* webpackChunkName: "crud" */ './views/CRUD.vue'),
      meta: {
          requiresAuth: true
      }
    },
    {
      path: '/Carrito',
      name: 'carrito',
      component: () => import(/* webpackChunkName: "carrito" */ './views/Carrito.vue'),
      meta: {
          requiresAuth: true
      }
    },
    {
      path: '/Checkout',
      name: 'checkout',
      component: () => import(/* webpackChunkName: "checkout" */ './views/Checkout.vue'),
      meta: {
          requiresAuth: true
      }
    },
    {
      path: '/Confirmation',
      name: 'confirmation',
      component: () => import(/* webpackChunkName: "confirmation" */ './views/Confirmation.vue'),
      meta: {
          requiresAuth: true
      }
    },
  ],



  

})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
      next('/login')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})

export default router

