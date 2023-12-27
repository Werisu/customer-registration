import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('@customer-registration/home').then((m) => m.HomeModule),
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('@customer-registration/customer-detail').then(
        (m) => m.customerDetailRoutes
      ),
  },
];
