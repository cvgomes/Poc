import {Component, OnInit} from '@angular/core';
import imageModule = require("ui/image");
import cameraModule = require("camera");
import { CameraOptions } from "camera";
import {Image} from "ui/image";
import {ImageFormat} from "ui/enums";


@Component ({
    selector: "Camera",
    templateUrl: "pages/camera/camera.html"
})

export class CameraComponent implements OnInit {

    image : Image;
    ngOnInit(){
        this.image = new imageModule.Image();
    }

    photo(){
        cameraModule.takePicture().then(picture => {
            console.log("Result is an image source instance");
            this.image.imageSource = picture;
            this.image.imageSource.saveToFile("./data",ImageFormat.jpeg);
        });
    }
}