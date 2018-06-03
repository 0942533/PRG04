/// <reference path="fish.ts"/>

class Game {
    private fish:Fish

    constructor(){
        this.fish = new Fish()
        console.log("ik ben een vis")
        
        this.gameLoop()
    }

    private gameLoop() {
        this.fish.update()
        requestAnimationFrame(()=>this.gameLoop()) //Hiermee roept hij zich 60x per seconde aan

    }
}

window.addEventListener("load", () => new Game())