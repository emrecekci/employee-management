import { Router } from '@vaadin/router';
import '../components/employee-list/';
import '../components/employee-form/';

export const initRouter = () => {
  const outlet = document.querySelector('#outlet');
  if (!outlet) {
    console.error('#outlet bulunamadı!');
    return;
  }

  const router = new Router(outlet);

  router.setRoutes([
    { path: '/', redirect: '/employees' },
    { path: '/employees', component: 'employee-list' },
    { path: '/employees/add', component: 'employee-form' },
    { path: '/employees/edit/:id', component: 'employee-form' }
  ]);
};
