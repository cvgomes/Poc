import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { MapComponent } from '../map/map.component';
import { CustomComponent } from '../../components/custom/custom.component';
import {CameraComponent} from "../camera/camera.component";

export class DataItem {
    constructor(public itemDesc: string) {}
}

@Component({
    templateUrl: 'pages/main/main.nsml',
    directives: [
        ListComponent,
        CustomComponent,
        MapComponent,
        CameraComponent
    ]
})

export class MainComponent {
    public items: Array<DataItem>;
    public data: any;

    constructor() {
        this.items = new Array<DataItem>();
        for (let i = 0; i < 5; i++) {
            this.items.push(new DataItem("item " + i));
        }
    }
}