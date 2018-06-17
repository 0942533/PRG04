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
    }

    //Verwijder de elementen uit de voorgrond
    private emptyScreen() {
        let y = document.getElementsByTagName("foreground")[0];
        y.innerHTML = "";
    }

    //Laat het starscherm zien
    private showStartScreen(screen: StartScreen) {
        this.screen = screen
        this.screen.update()
    }
}