class Fish {

    private div: HTMLElement
    
    private x: number
    private y: number

    private upkey: number

    public upSpeed: number = 0

    constructor() {
        this.div = document.createElement("fish")
        document.body.appendChild(this.div)

        this.upkey = 38

        this.x = 40
        this.y = 400

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

    public getRectangle() {
        return this.div.getBoundingClientRect()
    }

    private onKeyDown(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 8
                // console.log("ik spring!")
                break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = -8
                break
        }
    }

    public update() {
        let newY = this.y - this.upSpeed 

        // check of fishey binnen beeld blijft
        if (newY > 0 && newY + 100 < window.innerHeight) this.y = newY

        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

}