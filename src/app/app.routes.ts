import { Routes } from '@angular/router';
import { FormComponent } from './registration/form/form.component';
import { LoginComponent } from './registration/login/login.component';
import { HomeComponent } from './registration/home/home.component';
import { SearchResultsComponent } from './registration/search-results/search-results.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'smart-shop/home', pathMatch:'full'
    },
    {
        path:'smart-shop/home',
        component: HomeComponent
    },
    {
        path:'smart-shop/register',
        component: FormComponent
    },
    {
        path:'smart-shop/login',
        component: LoginComponent
    },
    {
        path:'smart-shop/search/results',
        component: SearchResultsComponent
    }
];
