var Player = class Player {
        
    constructor(x, y, w, h, style){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.isMovingUp = false;
        this.isMovingDown = false;
        this.isMovingLeft = false;
        this.isMovingRight = false;
        this.updated = true;
        this.style = style
    }

    move(dx, dy){
        this.x += dx;
        this.y += dy;
        this.updated = true;
        //this.inflate(1, 1)
    }

    inflate(dw, dh){
        this.w += dw;
        this.h += dh;
    }

    getCoords(){
        return [this.x, this.y, this.w, this.h]
    }

    getDimensions(){
        return [this.w, this.h]
    }

    unsetUpdated(){
        this.updated = false; 
    }

    getStyle(){
        return this.style;
    }
}

export {Player}