import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { RegisterPage } from './pages/customer/register-page/register-page';
import { HomePage } from './pages/home-page/home-page';


export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'login',
        component: LoginPage
    },
    {
        path: 'register',
        component: RegisterPage
    }
];
