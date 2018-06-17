class Game {
    private screen: any;

    constructor() {
        //Open het startscherm wanneer de pagina wordt geladen
        this.screen = new StartScreen(this)
        //Laat de game loopen
        this.gameLoop()
    }

    //Update het gamescherm in de gameloop
    private gameLoop():void {
        this.screen.update()
        requestAnimationFrame(() => this.gameLoop())
    }

    //Verwijder de elementen uit de voorgrond
    public emptyScreen() {
        let y = document.getElementsByTagName("foreground")[0]
        y.innerHTML = ""
    }

    //Laat het starscherm zien
    public showStartScreen(screen: StartScreen) {
        this.screen = screen
        this.screen.update()
    }

    //Laat het speelscherm zien
    public showPlayScreen(screen: PlayScreen) {
        this.screen = screen
        this.screen.update()
    }
}