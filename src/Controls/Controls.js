var Controls = class Controls{

    constructor(player){
        this.PLAYER_SPEED_X = 10
        this.PLAYER_SPEED_Y = 10
        this.player = player
        window.onkeydown = (e) => {
            switch (e.key){
                case "ArrowUp": this.player.isMovingUp = true; break;
                case "ArrowLeft": this.player.isMovingLeft = true; break;
                case "ArrowRight": this.player.isMovingRight = true; break;
                case "ArrowDown": this.player.isMovingDown = true; break;
            }
        }

        window.onkeyup = (e) => {
            switch (e.key){
                case "ArrowUp": this.player.isMovingUp = false; break;
                case "ArrowLeft": this.player.isMovingLeft = false; break;
                case "ArrowRight": this.player.isMovingRight = false; break;
                case "ArrowDown": this.player.isMovingDown = false; break;
            }
        }
    }

    refresh(){
        if (this.player.isMovingUp) this.player.move(0, -this.PLAYER_SPEED_Y);
        if (this.player.isMovingLeft) this.player.move(-this.PLAYER_SPEED_X, 0);
        if (this.player.isMovingRight) this.player.move(this.PLAYER_SPEED_X, 0);
        if (this.player.isMovingDown) this.player.move(0, this.PLAYER_SPEED_Y);
    }
}

export {Controls}