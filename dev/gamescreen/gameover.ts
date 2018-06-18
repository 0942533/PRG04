class GameOver {
    private game: Game
    private bubbles: Bubble[] = []

    constructor(g: Game) {
        this.game = g

        let a = document.getElementsByTagName("foreground")[0];

        //Roept de functie van het aanmaken van de bubbels aan
        this.generateObject()

        let b = document.createElement("gameover");
        a.appendChild(b);

        let c = document.createElement("againbutton");
        a.appendChild(c);
        c.addEventListener("click", () => this.clicked());
        c.innerHTML = "GAME OVER! TRY AGAIN";
    }

    public update():void {
        for (const b of this.bubbles) {
            b.update()
        }
    }

    private generateObject() {
        // Er worden 20 bubbles aangemaakt
        for (let i = 0; i < 20; i++) {
            this.bubbles.push(new Bubble())
        }
    }

    //Geklikt op de againbutton? -> screen wordt leeggemaakt en playscreen wordt getoond
    private clicked() {
        this.game.emptyScreen();
        this.game.showPlayScreen(new PlayScreen(this.game));
    }
}