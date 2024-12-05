import { Routes } from '@angular/router';
import { LoginComponent } from './parents/login/login.component';
import { RegisterComponent } from './parents/register/register.component';
import { AdmLayoutComponent } from './parents/adm-layout/adm-layout.component';
import { MainClientesComponent } from './admin/adm-clientes/main-clientes/main-clientes.component';

export const routes: Routes = [
    { path: 'login',         component: LoginComponent },
    { path: 'register',      component: RegisterComponent },
    { path: 'home',          component: AdmLayoutComponent },
    { path: 'clientes',      component: MainClientesComponent},
    { path: '**',            redirectTo: 'login'}
];
