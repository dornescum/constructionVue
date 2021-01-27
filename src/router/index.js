import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)




const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/SomeForm',
        name: 'SomeForm',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/SomeForm.vue')
    },
    {
        path: '/Location',
        name: 'Location',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Location.vue')
    },
    {
        path: '/SearchFor',
        name: 'SearchFor',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/SearchFor.vue')
    },
    {
        path: '/Contact',
        name: 'Contact',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
    },
    {
        path: '/OficiuB',
        name: 'OficiuB',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/OficiuB.vue')
    },
    {
        path: '/OficiuC',
        name: 'OficiuC',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/OficiuC.vue')
    },
    {
        path: '/CumFunctioneaza',
        name: 'CumFunctioneaza',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/CumFunctioneaza.vue')
    },
    {
        path: '/DespreNoi',
        name: 'DespreNoi',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/DespreNoi.vue')
    },
    {
        path: '/ParerileClientilor',
        name: 'ParerileClientilor',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/ParerileClientilor.vue')
    },

]

const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact',
})

export default router
