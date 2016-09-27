import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { routing }          from '../app.routing'

import { AppComponent }   from '../components/app.component';
import { GroceriesComponent }   from '../components/groceries.component';
import { ShoppingListComponent }   from '../components/shoppingList/shoppingList.component';
import { MapComponent }   from '../components/map/map.component';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        GroceriesComponent,
        ShoppingListComponent,
        MapComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
