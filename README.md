# Fishey
Game for PRG04

- Verzamel 10 sterren en win de game! Kijk uit voor de octopusarmen anders is het game over.
- Het spel is te besturen met behulp van de pijltjestoets naar boven

### Speelbare game
https://stud.hosted.hr.nl/0942533/PRG04/docs/

### Installatie
1. Clone de respository
2. Run het project via localhost
3. En spelen/kijken maar!

### Checklist
- [x] De game heeft een startscherm
<img src="inleveropdracht/startscherm.png">

- [x] De game heeft een eindscherm
<img src="inleveropdracht/eindscherm2.png">
<img src="inleveropdracht/eindscherm1.png">

- [x] De game bevat geen bugs (voor zover ik weet)

### Toelichting OOP
- [x] Classes
Voor de elementen die ik op het scherm toon(fishey, bubbles, star etc.) heb ik classes gebruikt, zodat het overzichtelijk blijft. Een ander voordeel van classes is dat ze hergebruikt kunnen worden.
```
/// <reference path="../gamescreen/gameobject.ts"/>

class Bubble extends GameObject {
    constructor() {
        super("bubble",Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight))
    }

    public update():void {
         // Elke keer wordt er 1 vanaf gehaald. (Bubbles gaan omhoog)
         this.y --
         this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
 
         // als y kleiner is dan -100, dan veranderd de y in 800
         if (this.y < -100){
             this.y = 800
         }
    }
}
```
- [x] Encapsulation
```
voorbeeld code
```
- [x] Composition
```
voorbeeld code
```
- [x] Inheritance
```
voorbeeld code
```

### Klassendiagram
<img src="inleveropdracht/klassendiagram.png">

### Peer review
In week 6 heb ik op de game van Alara feedback gegeven: https://github.com/AlaraEdda/CMTTHE01-4-GAME/issues/1

### Extra uitdaging
Ik heb de volgende extra uitdagingen in mijn game verwerkt:
- [x] De game ziet er zeer verzorgd uit dankzij goed uitgewerkt UI design en artwork
<img src="inleveropdracht/design.png">
Het hele ontwerp van de game heb ik zelf getekend met behulp van Photoshop

- [x] De game gebruikt een externe library uit de lijst in deze modulewijzer
Voor de game heb ik de Howler library gebruikt voor het afspelen van muziek
