/// <reference path="../gamescreen/gameobject.ts"/>

class Star extends GameObject {
    private speedX:number

    constructor() {
        super("star", 1500, Math.random() * window.innerHeight)

         //De snelheid waarmee star naar links verplaatst
        this.speedX = -8
        this.x = window.innerWidth
    }

    public update() {
        this.x += this.speedX

        if (this.y + this.getRectangle().height > window.innerHeight || this.y >600) {
            this.startLeft()
            this.dead()
        }
        super.update()
    }

    private startLeft() {
        this.x = this.x = this.div.getBoundingClientRect().width * -1;
        this.y = 200 + Math.random() *(window.innerHeight - 100 - this.div.getBoundingClientRect().height);
    }
}