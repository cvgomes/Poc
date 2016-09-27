import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { ArticleData }  from '../services/in-memory-data.service';

import { AppComponent }     from '../components/app.component';
import { HomeComponent }    from '../components/home/home.component';
import { ShopComponent }    from '../components/shop/shop.component';
import { MapComponent }     from '../components/map/map.component';
import { ArticleService }   from '../services/article.service';
import { routing }          from '../app.routing'

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        InMemoryWebApiModule.forRoot(ArticleData)
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ShopComponent,
        MapComponent
    ],
    providers: [
        ArticleService
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
