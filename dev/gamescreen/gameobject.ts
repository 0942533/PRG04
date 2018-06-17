class GameObject {
    protected x: number
    protected y: number
    protected div: HTMLElement

    constructor(type:string, x:number, y:number) {
        this.x = x
        this.y = y

        //Er wordt een div aangemaakt en deze wordt in de foreground geplaatst
        let z = document.getElementsByTagName("foreground")[0]
        this.div = document.createElement(type)
        z.appendChild(this.div)
    }

    public update():void {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px`
    }

    public getRectangle() {
        return this.div.getBoundingClientRect();
    }
}