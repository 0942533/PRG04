/// <reference path="../gamescreen/gameobject.ts"/>

class Bubble extends GameObject {
    constructor() {
        super("bubble",Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight))
    }

    public update():void {
         // Elke keer wordt er 1 vanaf gehaald. (Bubbles gaan omhoog)
         this.y --
         this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
 
         // als y kleiner is dan -100, dan veranderd de y in 800
         if (this.y < -100){
             this.y = 800
         }
    }
}