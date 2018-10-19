import {Block} from "../Block.js"

class Player extends Block {
        
    constructor(x, y, w, h, style){
        super(x, y, w, h, style);
        this.facing = "right";        
    }

}

export {Player}