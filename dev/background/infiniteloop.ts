class InfiniteLoop {
    private x: number;
    private y: number;
    private div: HTMLElement;
    private xSpeed: number;
  
    constructor() {
      this.xSpeed = 4;
      this.x = 30;
      this.y = innerHeight;
      let u = document.getElementsByTagName("foreground")[0];
      this.div = document.createElement("infiniteloop");
      u.appendChild(this.div);
    }
  
    public update() {
      this.Loop();
    }
    private Loop() {
      this.x -= this.xSpeed;
      this.div.style.top = `translate(${this.y}px)`;
      this.div.style.backgroundPosition = this.x + `px 750px`;
    }
  }
  