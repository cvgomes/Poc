import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroceriesComponent }   from './components/groceries.component';
import { ShoppingListComponent }   from './components/shoppingList/shoppingList.component';
import { MapComponent }   from './components/map/map.component';

const appRoutes: Routes = [
    {
        path: '',
        component: MapComponent,
        pathMatch: 'full'
    },
    {
        path: 'shelve',
        component: GroceriesComponent
    },
    {
        path: 'list',
        component: ShoppingListComponent
    },
    {
        path: 'map',
        component: MapComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
