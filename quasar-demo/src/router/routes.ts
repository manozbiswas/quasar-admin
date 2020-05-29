import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/auth',
    component: () => import('layouts/guest/layout.vue'),
    children: [
      {
        path: 'login',
        component: () => import('pages/auth/login.vue')
      },
      {
        path: 'register',
        component: () => import('pages/auth/register.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }]
  },
  {
    path: '/about',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/About.vue') }]
  },

  {
    path: '/user',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/User.vue') }]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Dashboard.vue') , name:'dashboard'}],
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
