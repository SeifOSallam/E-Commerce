import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ItemComponent } from './item/item.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
    {
        path : '',
        component : ProductsComponent
    },
    {
        path: 'items/:id',
        component : ItemComponent
    },
    {
        path: 'register',
        component : RegisterPageComponent
    },
    {
        path: 'login',
        component : LoginPageComponent
    }
];
