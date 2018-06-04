class OctopusDown {
    private div: HTMLElement

    private x : number
    private y : number

    private xspeed : number

    constructor() {
        this.div = document.createElement("octopusdown")
        document.body.appendChild(this.div)

        this.y = 500

        this.xspeed = -10
        this.x = this.randomNumber(0, window.innerWidth);
    }

    public update () {
        this.x += this.xspeed;
        this.y

        if(this.x > window.innerWidth) {
            this.startRight();
        }

        this.div.style.left = `${this.x}px`;
        this.div.style.top = `${this.y}px`;
    }

    //Octopus class geeft zijn positie terug 
    public getRectangle() {
        return this.div.getBoundingClientRect()
    }
    randomNumber(min:number, max:number) {
        let a:number = Math.floor(Math.random() * (max - min + 3) ) + min;
        return a
    }
    private startRight() { 
        this.x = this.x = this.div.getBoundingClientRect().width * 2;
    }
}