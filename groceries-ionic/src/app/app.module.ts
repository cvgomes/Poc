import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { AppComponent } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { ShopPage } from '../pages/shop/shop';
import { MapPage } from '../pages/map/map';

@NgModule({
  declarations: [
    AppComponent,
    TabsPage,
    HomePage,
    ShopPage,
    MapPage
  ],
  imports: [
    IonicModule.forRoot(AppComponent)
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    AppComponent,
    TabsPage,
    HomePage,
    ShopPage,
    MapPage
  ],
  providers: []
})
export class AppModule {}
