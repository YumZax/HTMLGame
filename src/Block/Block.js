class Block {
        
    constructor(x, y, w, h, style){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.isMovingUp = false;
        this.isMovingDown = false;
        this.isMovingLeft = false;
        this.isMovingRight = false;
        this.updated = false;
        this.collisions = {
            "top": false,
            "bottom": false, 
            "right": false, 
            "left": false, 
            "topRightCorner": false,
            "topLeftCorner": false,
            "bottomRightCorner": false,
            "bottomLeftCorner": false,
        };
        this.style = style
        
    }

    move(dx, dy){
        this.x += dx;
        this.y += dy;
        this.updated = true;
    }

    inflate(dw, dh){
        this.w += dw;
        this.h += dh;
    }

    getCoords(){
        return {
            "x": this.x,
            "y": this.y,
            "w": this.w,
            "h": this.h
        }
    }

    getDimensions(){
        return [this.w, this.h]
    }

    setUpdated(bool){
        this.updated = bool; 
    }

    getStyle(){
        return this.style;
    }
}

export {Block}