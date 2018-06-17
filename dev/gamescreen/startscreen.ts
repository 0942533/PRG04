class StartScreen {
    private game: Game
    private bubbles: Bubble[] = []

    constructor(g:Game) {
        this.game = g
        console.log("haaaii")

        let a = document.getElementsByTagName("foreground")[0]
        let b = document.getElementsByTagName("background")[0]
        
        var c = document.createElement("background")
        b.appendChild(c)

        //Roept de functie van het aanmaken vna de bubbels aan
        this.generateObject()

        var d = document.createElement("caughtfish")
        a.appendChild(d)

        var e = document.createElement("logo")
        a.appendChild(e)

        var f = document.createElement("startbutton")
        a.appendChild(f);
        f.addEventListener("click", () => this.clicked())
        f.innerHTML = "START"
    }

    public update():void {
        //Update de bubbles
        for (const g of this.bubbles) {
            g.update()
        }
    }

    private clicked() {
        //Elementen uit de voorgrond worden weggehaald
        this.game.emptyScreen()
        this.game.showPlayScreen(new PlayScreen(this.game))
    }

    private generateObject() {
        //Er worden 20 bubbles aangemaakt
        for (let i = 0; i < 20; i++) {
            this.bubbles.push(new Bubble())
        }
    }
}