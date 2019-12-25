import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../components/AllUsers.vue')

  },
  {
    path: '/user/:name',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '../components/User.vue')
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
