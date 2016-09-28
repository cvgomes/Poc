import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var ol: any;

@Component({
  templateUrl: 'map.html'
})
export class MapPage {
  constructor(public navCtrl: NavController) {}

  map: any;

  ionViewWillEnter() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([37.41, 8.82]),
        zoom: 4
      })
    });
  }
}
