class PlayScreen {
    private game: Game
    private fishey: Fishey
    private div: HTMLElement
    private backgroundgame: BackgroundGame
    
    private score: number = 0
    private change: number = 0.008

    private octopusbottom: OctopusBottom[] = []

    constructor(g: Game) {
        this.game = g

        let a = document.getElementsByTagName("foreground")[0]

        //Wordt een div "hud" aangemaakt en in foreground geplaatst
        this.div = document.createElement("hud")
        a.appendChild(this.div)

        //Wordt een div "score" aangemaakt en in foreground geplaatst
        this.div = document.createElement("score")
        a.appendChild(this.div)
        this.div.innerHTML = "" + this.score

        this.fishey = new Fishey()
        this.backgroundgame = new BackgroundGame()
    }
    public update():void {
        //Random getal kleiner dan 0.008? -> nieuwe octopusbottom wordt aangemaakt
        if (Math.random() < this.change) {
            this.octopusbottom.push(new OctopusBottom())
        }

        //Pushen van octopusbottom
        for (let b of this.octopusbottom) {
            let hit = this.checkCollision(this.fishey.getRectangle(),b.getRectangle())
            
            //Fishey octopusbottom geraakt? -> screen wordt leeg gemaakt en gameoverscreen wordt getoond
            if (hit) {
              this.game.emptyScreen()
              this.game.showGameOver(new GameOver(this.game))
            }
            b.update()
        }

        this.fishey.update()
        this.backgroundgame.update()
    }
    private checkCollision(a: ClientRect, b: ClientRect): boolean {
    return (
        a.left <= b.right &&
        b.left <= a.right &&
        a.top <= b.bottom &&
        b.top <= a.bottom)
    }
}
window.addEventListener("load", () => new Game())
  