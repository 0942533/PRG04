class PlayScreen {
    private game: Game;

    constructor(g: Game) {
      this.game = g;
  
    }
  }
  window.addEventListener("load", () => new Game());
  