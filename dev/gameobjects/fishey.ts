/// <reference path="../gamescreen/gameobject.ts"/>

class Fishey extends GameObject{
    private upkey: number
    private upspeed: number = 0

    constructor() {
        super("fishey", 300, 450)

        //upkey wordt gelijk gesteld aan pijltjes toets ^
        this.upkey = 38
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));

        this.update()
    }

    private onKeyDown(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.upkey:
            this.upspeed = 8;
            break;
        }
    }
    private onKeyUp(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.upkey:
            this.upspeed = -7;
            break;
        }
    }
    public update() {
        let newY = this.y - this.upspeed 

        // check of fishey binnen beeld blijft
        if (newY > 60 && newY + 75 < window.innerHeight) this.y = newY

        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}