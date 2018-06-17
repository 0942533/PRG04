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
    return Game;
}());
var PlayScreen = (function () {
    function PlayScreen(g) {
        this.game = g;
    }
    return PlayScreen;
}());
window.addEventListener("load", function () { return new Game(); });
var StartScreen = (function () {
    function StartScreen(g) {
        var _this = this;
        this.bubbles = [];
        this.game = g;
        console.log("haaaii");
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