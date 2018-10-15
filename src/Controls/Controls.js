class Controls {

    constructor(player) {
        this.PLAYER_SPEED_X = 10
        this.PLAYER_SPEED_Y = 10
        this.player = player
        window.onkeydown = (e) => {
            switch (e.key) {
                case "ArrowUp": this.player.isMovingUp = true; break;
                case "ArrowLeft": this.player.isMovingLeft = true; break;
                case "ArrowRight": this.player.isMovingRight = true; break;
                case "ArrowDown": this.player.isMovingDown = true; break;
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



    }
}

export { Controls }