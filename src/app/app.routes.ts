import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductsComponent } from './components/products/products.component';
import { DetalleComponent } from './components/detalle/detalle.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'products',
        component: ProductsComponent,
        children: [
            // {
            //     path: ':id',
            //     component: DetalleComponent
            // },
            {
                path: 'detalle',
                component: DetalleComponent
            }
        ]
    },
    {
        path: '**',
        component: ErrorComponent
    },

];
