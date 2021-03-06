class PlayScreen {
    private game: Game
    private fishey: Fishey
    private div: HTMLElement
    private backgroundgame: BackgroundGame
    
    private scoreElement: HTMLElement
    private score: number = 0
    private change: number = 0.008

    private octopusbottom: OctopusBottom[] = []
    private octopustop: OctopusTop[] = []
    private star: Star[] = []

    constructor(g: Game) {
        this.game = g

        let a = document.getElementsByTagName("foreground")[0]

        //Wordt een div "hud" aangemaakt en in foreground geplaatst
        this.div = document.createElement("hud")
        a.appendChild(this.div)

        //Wordt een div "score" aangemaakt en in foreground geplaatst
        this.scoreElement = document.createElement("score")
        a.appendChild(this.scoreElement)
        this.scoreElement.innerHTML = "" + this.score

        this.fishey = new Fishey()
        this.backgroundgame = new BackgroundGame()
    }
    public update():void {
        //Random getal kleiner dan 0.008? -> nieuwe octopusbottom wordt aangemaakt
        if (Math.random() < this.change) {
            this.star.push(new Star())
        }
        if (Math.random() < this.change) {
            this.octopusbottom.push(new OctopusBottom())
        }
        if (Math.random() < this.change) {
            this.octopustop.push(new OctopusTop())
        }

        //Pushen van star
        for (let s of this.star) {
            if (this.checkCollision(this.fishey.getRectangle(),s.getRectangle())) {
                this.score ++
                this.scoreElement.innerHTML = "" + this.score;
                s.dead();
            }
            s.update();
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

        //Pushen van octopustop
        for (let t of this.octopustop) {
            //Fishey octopustop geraakt? -> screen wordt leeg gemaakt en gameoverscreen wordt getoond
            if (this.checkCollision(this.fishey.getRectangle(),t.getRectangle())) {
                this.game.emptyScreen();
                this.game.showGameOver(new GameOver(this.game));
            }
            t.update();
        }

        //Score gelijk aan 10? -> screen wordt leeggemaakt en gamewon scherm wordt getoond
        if(this.score == 10) {
            this.game.emptyScreen();
            this.game.showGameWon(new GameWon(this.game));
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
  