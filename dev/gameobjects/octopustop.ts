/// <reference path="../gamescreen/gameobject.ts"/>

class OctopusTop extends GameObject {
    private speedX: number

    constructor() {
        super("octopustop", 1500,40)

        //De snelheid waarmee octopustop naar links verplaatst
        this.speedX = -8
        this.x = window.innerWidth
    }
    public update():void {
        this.x += this.speedX;

        super.update()
    }
}