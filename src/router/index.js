import Vue from 'vue';
import Router from 'vue-router';
import Boy from '../views/boy.vue';
import Girl from '../views/girl.vue';
import User from '../views/User.vue';

Vue.use(Router);

const routes = [
  {
    name: 'boy',
    path: '/boy', 
    component: Boy,
  },
  {
    name: 'girl',
    path: '/girl', 
    component: Girl,
  },
  {
    name: 'user',
    path: '/user/:id', 
    component: User,
  },
  {
    path: '/', 
    redirect: '/boy',
  }
];

export function createRouter() {
    return new Router({
        mode: 'history',
        fallback: false,
        // scrollBehavior: () => ({y: 0}),
        routes: routes
    });
}
