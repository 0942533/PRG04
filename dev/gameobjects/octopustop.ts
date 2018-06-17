/// <reference path="../gamescreen/gameobject.ts"/>

class OctopusTop extends GameObject {
    private speedX: number

    constructor() {
        super("octopustop", 1500,40)

        //De snelheid waarmee octopustop naar links verplaatst
        this.speedX = -8
    }
    public update():void {
        this.x += this.speedX;

        //scherm groter dan breedte scherm? -> startleft functie uitvoeren
        if (this.x > window.innerWidth) {
            this.startLeft()
        }
        this.div.style.left = `${this.x}px`
        this.div.style.top = `${this.y}px`
    }
    private startLeft() {
        this.x = this.x = this.div.getBoundingClientRect().width * -1
    }
}