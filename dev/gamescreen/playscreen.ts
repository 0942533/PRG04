class PlayScreen {
    private game: Game
    private backgroundgame: BackgroundGame

    constructor(g: Game) {
        this.game = g

        this.backgroundgame = new BackgroundGame()
    }
    public update():void {
        this.backgroundgame.update()
    }
}
window.addEventListener("load", () => new Game())
  