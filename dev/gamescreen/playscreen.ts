class PlayScreen {
    private game: Game
    private fishey: Fishey
    private div: HTMLElement
    private backgroundgame: BackgroundGame

    private score: number = 0

    constructor(g: Game) {
        this.game = g

        let a = document.getElementsByTagName("foreground")[0];

        //Wordt een div hud aangemaakt en in foreground geplaatst
        this.div = document.createElement("hud")
        a.appendChild(this.div)

        this.div = document.createElement("score");
        a.appendChild(this.div);
        this.div.innerHTML = "" + this.score;

        this.fishey = new Fishey();

        this.backgroundgame = new BackgroundGame()
    }
    public update():void {
        this.fishey.update();
        this.backgroundgame.update()
    }
}
window.addEventListener("load", () => new Game())
  