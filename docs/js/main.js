"use strict";
var Fish = (function () {
    function Fish() {
        var _this = this;
        this.upSpeed = 0;
        this.div = document.createElement("fish");
        document.body.appendChild(this.div);
        this.upkey = 38;
        this.x = 40;
        this.y = 400;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Fish.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    Fish.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 8;
                break;
        }
    };
    Fish.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = -8;
                break;
        }
    };
    Fish.prototype.update = function () {
        var newY = this.y - this.upSpeed;
        if (newY > 0 && newY + 100 < window.innerHeight)
            this.y = newY;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Fish;
}());
var Game = (function () {
    function Game() {
        this.octopus = [];
        this.octopusdown = [];
        this.level = 0.008;
        this.fish = new Fish();
        console.log("ik ben een vis");
        this.gameLoop();
    }
    Game.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        if (Math.random() < this.level) {
            this.octopus.push(new Octopus());
            this.octopusdown.push(new OctopusDown());
        }
        for (var _i = 0, _a = this.octopus; _i < _a.length; _i++) {
            var b = _a[_i];
            console.log("hoi");
            var hit = this.checkCollision(b.getRectangle(), this.fish.getRectangle());
            if (hit == true) {
                console.log("game over!");
                this.fish.upSpeed = 0;
            }
            b.update();
        }
        this.fish.update();
        for (var _b = 0, _c = this.octopusdown; _b < _c.length; _b++) {
            var c = _c[_b];
            var hit = this.checkCollision(c.getRectangle(), this.fish.getRectangle());
            if (hit == true) {
                console.log("game over!");
                this.fish.upSpeed = 0;
            }
            c.update();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Octopus = (function () {
    function Octopus() {
        this.div = document.createElement("octopus");
        document.body.appendChild(this.div);
        this.y = 0;
        this.xspeed = -10;
        this.x = this.randomNumber(0, window.innerWidth);
    }
    Octopus.prototype.update = function () {
        this.x += this.xspeed;
        if (this.x > window.innerWidth) {
            this.startRight();
        }
        this.div.style.left = this.x + "px";
    };
    Octopus.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    Octopus.prototype.randomNumber = function (min, max) {
        var a = Math.floor(Math.random() * (max - min + 3)) + min;
        return a;
    };
    Octopus.prototype.startRight = function () {
        this.x = this.x = this.div.getBoundingClientRect().width * 2;
    };
    return Octopus;
}());
var OctopusDown = (function () {
    function OctopusDown() {
        this.div = document.createElement("octopusdown");
        document.body.appendChild(this.div);
        this.y = 500;
        this.xspeed = -10;
        this.x = this.randomNumber(0, window.innerWidth);
    }
    OctopusDown.prototype.update = function () {
        this.x += this.xspeed;
        this.y;
        if (this.x > window.innerWidth) {
            this.startRight();
        }
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    };
    OctopusDown.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    OctopusDown.prototype.randomNumber = function (min, max) {
        var a = Math.floor(Math.random() * (max - min + 3)) + min;
        return a;
    };
    OctopusDown.prototype.startRight = function () {
        this.x = this.x = this.div.getBoundingClientRect().width * 2;
    };
    return OctopusDown;
}());
//# sourceMappingURL=main.js.map