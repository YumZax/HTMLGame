var Collider = class Collider{
    constructor(player, elems){
        this.offset = 10;
        this.player = player;
        this.elementQueue = [...elems];
    }

    checkPlayerCollisions(){
        for (let i in this.elementQueue){
                let collisions = this.collides(this.player.getCoords(), this.elementQueue[i].getCoords());
                this.player.collisions = collisions
                if (collisions.collidesLeft || collisions.collidesRight || collisions.collidesTop || collisions.collidesBottom){
                    return true;
                }
        }
        this.player.collides = false
        return false;
    }

    collides(iCoords, jCoords){
        let ix = iCoords['x']
        let iy = iCoords['y']
        let jx = jCoords['x']
        let jy = jCoords['y']
        let jh = jCoords['h']
        let jw = jCoords['w']
        let o = this.offset
        
        return {
          "right": (ix + o == jx && ix - o < jx + jw && iy >= jy && iy < jy+jh),
          "left": (ix == jx + jw && ix - o < jx + jw && iy >= jy && iy < jy+jh),
          "top": (iy == jy + jh && iy - o < jy + jh && ix >= jx && ix < jx + jw),
          "bottom": (iy + o == jy  && iy - o < jy + jh && ix >= jx && ix < jx + jw)
        }
    }
}

export {Collider};