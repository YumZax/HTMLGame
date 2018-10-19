import {Block} from "../Block.js"

class Bullet extends Block {
        
    constructor(xPlayer, yPlayer, wPlayer, hPlayer, facing){
        const SPEED = 15;
        const WIDTH = 4;
        const HEIGHT = 10; 
        let w = null;
        let h = null;
        let x = null;
        let y = null;
        
        switch (facing){
            case "up":  w = WIDTH; h = HEIGHT; x = xPlayer + Math.round(wPlayer/2) - Math.round(WIDTH/2); y = yPlayer;  break;
            case "down": w = WIDTH; h = HEIGHT; x = xPlayer + Math.round(wPlayer/2) - Math.round(WIDTH/2); y = yPlayer + hPlayer; break;
            case "left":  w = HEIGHT; h = WIDTH; x = xPlayer; y = yPlayer + Math.round(hPlayer/2) - Math.round(WIDTH/2); break;
            case "right":  w = HEIGHT; h = WIDTH; x = xPlayer + wPlayer; y = yPlayer + Math.round(hPlayer/2) - Math.round(WIDTH/2); break;
        }

        
        let style = "rgb(0,0,0)" 
        super(x, y, w, h, style);        
        this.range = 200;

        this.xInitial = x;
        this.yInitial = y;
        this.needsRemoval = false;

        switch (facing){
            case "up": this.xSpeed = 0; this.ySpeed = -SPEED; break;
            case "down": this.xSpeed = 0; this.ySpeed = SPEED; break;
            case "left": this.xSpeed = -SPEED; this.ySpeed = 0; break;
            case "right": this.xSpeed = SPEED; this.ySpeed = 0; break;
        }


    }

    refresh(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (Math.abs(this.x - this.xInitial) >= this.range || Math.abs(this.y - this.yInitial) >= this.range){
            this.needsRemoval = true;
        }
    }
}

export {Bullet}