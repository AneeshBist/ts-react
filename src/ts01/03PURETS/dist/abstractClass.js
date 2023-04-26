"use strict";
class TakePhoto {
    constructor(camerMode, filter) {
        this.camerMode = camerMode;
        this.filter = filter;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("received sepia filter");
    }
}
const Jimmy = new Instagram("test", "none", "hola");
