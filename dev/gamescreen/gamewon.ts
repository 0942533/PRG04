class GameWon {
    private game: Game;
    private bubbles: Bubble[] = []

    constructor(g: Game) {
        this.game = g;

        let a = document.getElementsByTagName("foreground")[0];

        //Functie generateObject voor het aanmaken van de bubbles wordt aangeroepen
        this.generateObject()

        let x = document.createElement("gamewon");
        a.appendChild(x);

        let l = document.createElement("againbutton");
        a.appendChild(l);
        l.addEventListener("click", () => this.clicked());
        l.innerHTML = "CONGRATULATIONS, YOU WON! Click here to play it again";
    }

    public update() {
        for (const b of this.bubbles) {
            b.update()
        }
    }
    //Geklikt op de againbutton? -> screen wordt geleegd en playscreen komt in beeld
    private clicked() {
        this.game.emptyScreen();
        this.game.showPlayScreen(new PlayScreen(this.game));
    }

    private generateObject() {
        // Er worden 20 bubbles aangemaakt
        for (let i = 0; i < 20; i++) {
            this.bubbles.push(new Bubble())
        }
    }
}
  