class BackgroundGame {
  private infiniteloop: InfiniteLoop;

  constructor() {
    this.infiniteloop = new InfiniteLoop();
  }

  public update() {
    this.infiniteloop.update();
  }
}
  