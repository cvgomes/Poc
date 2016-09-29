import { Component } from '@angular/core';
import imageModule = require("ui/image");
import cameraModule = require("camera");


@Component ({
    selector: "Camera",
    templateUrl: "pages/camera/camera.html"
})

export class CameraComponent {

    image = new imageModule.Image();

    photo(){
        cameraModule.takePicture().then(picture => {
            console.log("Result is an image source instance");
            this.image.imageSource = picture;
        });

    }
}