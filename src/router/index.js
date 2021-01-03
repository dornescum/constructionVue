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
        path: '/InscriereFirma',
        name: 'InscriereFirma',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/InscriereFirma.vue')
    },
    {
        path: '/Localizare',
        name: 'Localizare',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Localizare.vue')
    },
    {
        path: '/CautaFirma',
        name: 'CautaFirma',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/CautaFirma.vue')
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
        path: '/OficiuBirouriCadastru',
        name: 'OficiuBirouriCadastru',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/OficiuBirouriCadastru.vue')
    },
    {
        path: '/OficiuCadastru',
        name: 'OficiuCadastru',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/OficiuCadastru.vue')
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
