import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { routing }          from '../app.routing'

import { AppComponent }   from '../components/app.component';
import { HomeComponent }   from '../components/home/home.component';
import { ShopComponent }   from '../components/shop/shop.component';
import { MapComponent }   from '../components/map/map.component';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ShopComponent,
        MapComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
