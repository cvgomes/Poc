import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }   from './components/home/home.component';
import { ShopComponent }   from './components/shop/shop.component';
import { MapComponent }   from './components/map/map.component';

const appRoutes: Routes = [
    {
        path: '',
        component: ShopComponent,
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'shop',
        component: ShopComponent
    },
    {
        path: 'map',
        component: MapComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
