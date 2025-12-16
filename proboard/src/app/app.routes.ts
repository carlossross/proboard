import { Routes } from '@angular/router';
import { ShellComponent } from './core/shell/shell.component';
import { LoginPage } from './features/auth/login-page/login-page.component';
import { OopsPage } from './shared/ui/oops-page/oops-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: ShellComponent,
    // children: [
    //   {
    //     /**
    //      * -- users
    //      * -- projects
    //      */
    //   },
    // ],
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'oops',
    component: OopsPage,
  },
];
