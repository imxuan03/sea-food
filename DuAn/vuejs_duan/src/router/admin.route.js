const requireAdminAuth = (to, from, next) => {
  try {

    const token = document.cookie.split(';').find(cookie => /\btoken\b/.test(cookie));
    if (token) {
      next();
    } else {
      next('/admin/auth/login');
    }
  } catch (error) {
    next('/admin/auth/login');
  }
};

const adminRoutes = [
  {
    path: '/admin/auth/login',
    name: 'login',
    component: () => import('@/views/admin/pages/login/Login.vue'),
  },
  {
    path: '/admin/dashboard',
    name: 'dashboard',
    component: () => import('@/views/admin/pages/sea_foods/Dashboard.vue'),
    beforeEnter: requireAdminAuth
  }
];

export default adminRoutes;
