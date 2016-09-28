import { Component } from '@angular/core';
import {WebView, LoadEventData} from "ui/web-view";

@Component ({
    selector: "Map",
    templateUrl: "pages/map/map.nsml"
})

export class MapComponent {
    public mapWebViewSRC = "~/pages/map/ol.html";
}