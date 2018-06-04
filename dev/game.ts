/// <reference path="fish.ts"/>

class Game {
    private fish:Fish
    private octopus:Octopus[] = [] 
    private octopusdown:OctopusDown[] = [] 
    private level:number = 0.008;

    constructor(){
        this.fish = new Fish()
        console.log("ik ben een vis")
        
        this.gameLoop()
    }

    public checkCollision(a: ClientRect, b:ClientRect){
        return (a.left <= b.right &&
        b.left <= a.right &&
        a.top <= b.bottom &&
        b.top <= a.bottom)
    }

    private gameLoop() {
        if(Math.random() < this.level) {
            this.octopus.push(new Octopus()); 
            this.octopusdown.push(new OctopusDown()); 
        }
        for(let b of this.octopus) { 
            console.log("hoi") 

            let hit = this.checkCollision(b.getRectangle(),this.fish.getRectangle())
            if (hit == true) {
                console.log("game over!")
                this.fish.upSpeed = 0
            }
            b.update(); 
        }
        this.fish.update()

        for(let c of this.octopusdown) {
            let hit = this.checkCollision(c.getRectangle(),this.fish.getRectangle())
            if (hit == true) {
                console.log("game over!")
                this.fish.upSpeed = 0
            }
            c.update();
        }
        requestAnimationFrame(()=>this.gameLoop()) //Hiermee roept hij zich 60x per seconde aan
    }
}

window.addEventListener("load", () => new Game())