class Controls {

    constructor(player, objects, eventMgr) {
        this.PLAYER_SPEED_X = 10
        this.PLAYER_SPEED_Y = 10
        this.player = player
        this.elementQueue = [...objects]
        this.eventMgr = eventMgr;

        window.onkeydown = (e) => {
            e.preventDefault();
            switch (e.key) {
                case "ArrowUp": this.player.isMovingUp = true; this.player.facing = "up"; break;
                case "ArrowLeft": this.player.isMovingLeft = true; this.player.facing = "left"; break;
                case "ArrowRight": this.player.isMovingRight = true; this.player.facing = "right"; break;
                case "ArrowDown": this.player.isMovingDown = true; this.player.facing = "down"; break;
                case " ": this.eventMgr.addEvent("fire_bullet", {
                    "facing": this.player.facing,
                    "xPlayer": this.player.x,
                    "yPlayer": this.player.y,
                    "wPlayer": this.player.w,
                    "hPlayer": this.player.h
                }); break;

            }
        }

        window.onkeyup = (e) => {
            switch (e.key) {
                case "ArrowUp": this.player.isMovingUp = false; break;
                case "ArrowLeft": this.player.isMovingLeft = false; break;
                case "ArrowRight": this.player.isMovingRight = false; break;
                case "ArrowDown": this.player.isMovingDown = false; break;
            }
        }
    }

    refresh() {
        let diagonalMove = false
        if (this.player.collisions['topLeftCorner'] && this.player.isMovingUp && this.player.isMovingLeft ||
            this.player.collisions['topRightCorner'] && this.player.isMovingUp && this.player.isMovingRight ||
            this.player.collisions['bottomLeftCorner'] && this.player.isMovingDown && this.player.isMovingLeft ||
            this.player.collisions['bottomRightCorner'] && this.player.isMovingDown && this.player.isMovingRight) {
            diagonalMove = true
        }

        if (!diagonalMove) {
            if (this.player.isMovingUp && !this.player.collisions['top']) this.player.move(0, -this.PLAYER_SPEED_Y);
            if (this.player.isMovingLeft && !this.player.collisions['left']) this.player.move(-this.PLAYER_SPEED_X, 0);
            if (this.player.isMovingRight && !this.player.collisions['right']) this.player.move(this.PLAYER_SPEED_X, 0);
            if (this.player.isMovingDown && !this.player.collisions['bottom']) this.player.move(0, this.PLAYER_SPEED_Y);
        }

        for (let i in this.elementQueue){
            if (this.elementQueue[i].isMovingUp && !this.elementQueue[i].collisions['top']) this.elementQueue[i].move(0, -this.elementQueue[i].ySpeed);
            if (this.elementQueue[i].isMovingLeft && !this.elementQueue[i].collisions['left']) this.elementQueue[i].move(-this.elementQueue[i].xSpeed, 0);
            if (this.elementQueue[i].isMovingRight && !this.elementQueue[i].collisions['right']) this.elementQueue[i].move(this.elementQueue[i].xSpeed, 0);
            if (this.elementQueue[i].isMovingDown && !this.elementQueue[i].collisions['bottom']) this.elementQueue[i].move(0, this.elementQueue[i].ySpeed);
        }


    }

    addToQueue(element){
        this.elementQueue.push(element)
    }
}

export { Controls }