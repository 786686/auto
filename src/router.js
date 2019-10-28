import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    name: 'index',
    path: '/',
    component: () => import('./view/index'),
    meta: {
      title: '首页'
    }
  },
  {
    name: 'service',
    component: () => import('./view/service'),
    meta: {
      title: '我们的服务'
    }
  },
  {
    name: 'info',
    component: () => import('./view/info'),
    meta: {
      title: '资讯'
    }
  },
  {
    name: 'win',
    component: () => import('./view/win'),
    meta: {
      title: '共赢'
    }
  },
  {
    path: '*',
    redirect: '/'
  },
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ 
  mode:"history",
  routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
