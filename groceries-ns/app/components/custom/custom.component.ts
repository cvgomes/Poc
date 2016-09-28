import { Component } from "@angular/core";
import * as Geolocation from "nativescript-geolocation";

@Component({
    selector: "Custom",
    templateUrl: "components/custom/custom.nsml"
})

export class CustomComponent {

    private isGeolocationEnabled:string = "false";
    private currentLocation:any;

    public enableLocationTap() {
        if (!Geolocation.isEnabled()) {
            this.isGeolocationEnabled = "false";
            Geolocation.enableLocationRequest();
        }
        else {
            this.isGeolocationEnabled = "true";
        }

    }

    public getLocation() {
        Geolocation.getCurrentLocation({
                desiredAccuracy: 3,
                updateDistance: 10,
                maximumAge: 20000,
                timeout: 20000})
            .then(
                (location) => {
                    this.currentLocation = location;
                },
                (e) => {
                    console.log("Error: " + e.message);
                }
            );
    }
}