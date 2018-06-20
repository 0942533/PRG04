/// <reference path="../gamescreen/gameobject.ts"/>

class OctopusBottom extends GameObject {
    private speedX: number;

    constructor() {
        super("octopusbottom", 1500,500);

        //De snelheid waarmee octopusbottom naar links verplaatst
        this.speedX = -8
        this.x = window.innerWidth
    }
    public update():void {
        this.x += this.speedX;

        super.update()
    }
}