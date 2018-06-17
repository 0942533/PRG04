"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BackgroundGame = (function () {
    function BackgroundGame() {
        this.infiniteloop = new InfiniteLoop();
    }
    BackgroundGame.prototype.update = function () {
        this.infiniteloop.update();
    };
    return BackgroundGame;
}());
var InfiniteLoop = (function () {
    function InfiniteLoop() {
        this.xSpeed = 4;
        this.x = 30;
        this.y = innerHeight;
        var u = document.getElementsByTagName("foreground")[0];
        this.div = document.createElement("infiniteloop");
        u.appendChild(this.div);
    }
    InfiniteLoop.prototype.update = function () {
        this.Loop();
    };
    InfiniteLoop.prototype.Loop = function () {
        this.x -= this.xSpeed;
        this.div.style.top = "translate(" + this.y + "px)";
        this.div.style.backgroundPosition = this.x + "px 750px";
    };
    return InfiniteLoop;
}());
var GameObject = (function () {
    function GameObject(type, x, y) {
        this.x = x;
        this.y = y;
        var z = document.getElementsByTagName("foreground")[0];
        this.div = document.createElement(type);
        z.appendChild(this.div);
    }
    GameObject.prototype.update = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px";
    };
    GameObject.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    GameObject.prototype.dead = function () {
        this.div.remove();
    };
    return GameObject;
}());
var Bubble = (function (_super) {
    __extends(Bubble, _super);
    function Bubble() {
        return _super.call(this, "bubble", Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerHeight)) || this;
    }
    Bubble.prototype.update = function () {
        this.y--;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        if (this.y < -100) {
            this.y = 800;
        }
    };
    return Bubble;
}(GameObject));
var Fishey = (function (_super) {
    __extends(Fishey, _super);
    function Fishey() {
        var _this = _super.call(this, "fishey", 450, 450) || this;
        _this.upspeed = 0;
        _this.upkey = 38;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
        _this.update();
        return _this;
    }
    Fishey.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upspeed = 8;
                break;
        }
    };
    Fishey.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upspeed = -7;
                break;
        }
    };
    Fishey.prototype.update = function () {
        var newY = this.y - this.upspeed;
        if (newY > 60 && newY + 75 < window.innerHeight)
            this.y = newY;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Fishey;
}(GameObject));
var OctopusBottom = (function (_super) {
    __extends(OctopusBottom, _super);
    function OctopusBottom() {
        var _this = _super.call(this, "octopusbottom", 1500, 500) || this;
        _this.speedX = -8;
        return _this;
    }
    OctopusBottom.prototype.update = function () {
        this.x += this.speedX;
        if (this.x > window.innerWidth) {
            this.startLeft();
        }
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    };
    OctopusBottom.prototype.startLeft = function () {
        this.x = this.x = this.div.getBoundingClientRect().width * -1;
    };
    return OctopusBottom;
}(GameObject));
var OctopusTop = (function (_super) {
    __extends(OctopusTop, _super);
    function OctopusTop() {
        var _this = _super.call(this, "octopustop", 1500, 40) || this;
        _this.speedX = -8;
        return _this;
    }
    OctopusTop.prototype.update = function () {
        this.x += this.speedX;
        if (this.x > window.innerWidth) {
            this.startLeft();
        }
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    };
    OctopusTop.prototype.startLeft = function () {
        this.x = this.x = this.div.getBoundingClientRect().width * -1;
    };
    return OctopusTop;
}(GameObject));
var Star = (function (_super) {
    __extends(Star, _super);
    function Star() {
        var _this = _super.call(this, "star", 1500, Math.random() * window.innerHeight) || this;
        _this.speedX = -8;
        return _this;
    }
    Star.prototype.update = function () {
        this.x += this.speedX;
        if (this.y + this.getRectangle().height > window.innerHeight || this.y > 600) {
            this.startLeft();
            this.dead();
        }
        if (this.x > window.innerWidth) {
            this.startLeft();
        }
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    };
    Star.prototype.startLeft = function () {
        this.x = this.x = this.div.getBoundingClientRect().width * -1;
        this.y = 200 + Math.random() * (window.innerHeight - 100 - this.div.getBoundingClientRect().height);
    };
    return Star;
}(GameObject));
var Game = (function () {
    function Game() {
        this.screen = new StartScreen(this);
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.screen.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.emptyScreen = function () {
        var y = document.getElementsByTagName("foreground")[0];
        y.innerHTML = "";
    };
    Game.prototype.showStartScreen = function (screen) {
        this.screen = screen;
        this.screen.update();
    };
    Game.prototype.showPlayScreen = function (screen) {
        this.screen = screen;
        this.screen.update();
    };
    Game.prototype.showGameOver = function (screen) {
        this.screen = screen;
        this.screen.update();
    };
    Game.prototype.showGameWon = function (screen) {
        this.screen = screen;
        this.screen.update();
    };
    return Game;
}());
var GameOver = (function () {
    function GameOver(g) {
        var _this = this;
        this.bubbles = [];
        this.game = g;
        var a = document.getElementsByTagName("foreground")[0];
        this.generateObject();
        var b = document.createElement("gameover");
        a.appendChild(b);
        var c = document.createElement("againbutton");
        a.appendChild(c);
        c.addEventListener("click", function () { return _this.clicked(); });
        c.innerHTML = "GAME OVER! TRY AGAIN";
    }
    GameOver.prototype.update = function () {
        for (var _i = 0, _a = this.bubbles; _i < _a.length; _i++) {
            var b = _a[_i];
            b.update();
        }
    };
    GameOver.prototype.generateObject = function () {
        for (var i = 0; i < 20; i++) {
            this.bubbles.push(new Bubble());
        }
    };
    GameOver.prototype.clicked = function () {
        this.game.emptyScreen();
        this.game.showPlayScreen(new PlayScreen(this.game));
    };
    return GameOver;
}());
var GameWon = (function () {
    function GameWon(g) {
        var _this = this;
        this.bubbles = [];
        this.game = g;
        var a = document.getElementsByTagName("foreground")[0];
        this.generateObject();
        var x = document.createElement("gamewon");
        a.appendChild(x);
        var l = document.createElement("againbutton");
        a.appendChild(l);
        l.addEventListener("click", function () { return _this.clicked(); });
        l.innerHTML = "CONGRATULATIONS, YOU WON! Click here to play it again";
    }
    GameWon.prototype.update = function () {
        for (var _i = 0, _a = this.bubbles; _i < _a.length; _i++) {
            var b = _a[_i];
            b.update();
        }
    };
    GameWon.prototype.clicked = function () {
        this.game.emptyScreen();
        this.game.showPlayScreen(new PlayScreen(this.game));
    };
    GameWon.prototype.generateObject = function () {
        for (var i = 0; i < 20; i++) {
            this.bubbles.push(new Bubble());
        }
    };
    return GameWon;
}());
var PlayScreen = (function () {
    function PlayScreen(g) {
        this.score = 0;
        this.change = 0.008;
        this.octopusbottom = [];
        this.octopustop = [];
        this.star = [];
        this.game = g;
        var a = document.getElementsByTagName("foreground")[0];
        this.div = document.createElement("hud");
        a.appendChild(this.div);
        this.scoreElement = document.createElement("score");
        a.appendChild(this.scoreElement);
        this.scoreElement.innerHTML = "" + this.score;
        this.fishey = new Fishey();
        this.backgroundgame = new BackgroundGame();
    }
    PlayScreen.prototype.update = function () {
        if (Math.random() < this.change) {
            this.star.push(new Star());
        }
        if (Math.random() < this.change) {
            this.octopusbottom.push(new OctopusBottom());
        }
        if (Math.random() < this.change) {
            this.octopustop.push(new OctopusTop());
        }
        for (var _i = 0, _a = this.star; _i < _a.length; _i++) {
            var s = _a[_i];
            if (this.checkCollision(this.fishey.getRectangle(), s.getRectangle())) {
                this.score++;
                this.scoreElement.innerHTML = "" + this.score;
                s.dead();
            }
            s.update();
        }
        for (var _b = 0, _c = this.octopusbottom; _b < _c.length; _b++) {
            var b = _c[_b];
            var hit = this.checkCollision(this.fishey.getRectangle(), b.getRectangle());
            if (hit) {
                this.game.emptyScreen();
                this.game.showGameOver(new GameOver(this.game));
            }
            b.update();
        }
        for (var _d = 0, _e = this.octopustop; _d < _e.length; _d++) {
            var t = _e[_d];
            if (this.checkCollision(this.fishey.getRectangle(), t.getRectangle())) {
                this.game.emptyScreen();
                this.game.showGameOver(new GameOver(this.game));
            }
            t.update();
        }
        if (this.score == 10) {
            this.game.emptyScreen();
            this.game.showGameWon(new GameWon(this.game));
        }
        this.fishey.update();
        this.backgroundgame.update();
    };
    PlayScreen.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    return PlayScreen;
}());
window.addEventListener("load", function () { return new Game(); });
var StartScreen = (function () {
    function StartScreen(g) {
        var _this = this;
        this.bubbles = [];
        this.game = g;
        var a = document.getElementsByTagName("foreground")[0];
        var b = document.getElementsByTagName("background")[0];
        var c = document.createElement("background");
        b.appendChild(c);
        this.generateObject();
        var d = document.createElement("caughtfish");
        a.appendChild(d);
        var e = document.createElement("logo");
        a.appendChild(e);
        var f = document.createElement("startbutton");
        a.appendChild(f);
        f.addEventListener("click", function () { return _this.clicked(); });
        f.innerHTML = "START";
        var h = document.createElement("startsong");
        b.appendChild(h);
    }
    StartScreen.prototype.update = function () {
        for (var _i = 0, _a = this.bubbles; _i < _a.length; _i++) {
            var g = _a[_i];
            g.update();
        }
    };
    StartScreen.prototype.clicked = function () {
        this.game.emptyScreen();
        this.game.showPlayScreen(new PlayScreen(this.game));
    };
    StartScreen.prototype.generateObject = function () {
        for (var i = 0; i < 20; i++) {
            this.bubbles.push(new Bubble());
        }
    };
    return StartScreen;
}());
//# sourceMappingURL=main.js.map