class Display{

    constructor(player, objects){
        this.player = player;
        this.elementQueue = [];
        this.elementStyles = {}
        this.tileMap = Array(3000).fill().map(()=>Array(3000).fill());
        this.ORIGIN_X = 400;
        this.ORIGIN_Y = 300;

        if (objects){
            for (let i in objects){
                this.elementQueue.push(objects[i])
            }
        }
        this.canvas = document.getElementById("gameCanvas")
        this.ctx = this.canvas.getContext("2d")

    }

    refresh(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = this.player.getStyle()
        this.ctx.fillRect(this.ORIGIN_X, this.ORIGIN_Y, 10, 10)
        for (let i = this.elementQueue.length-1; i>=0; i--){
            let elem = this.elementQueue[i];
            let coords = elem.getCoords()
            this.ctx.fillStyle = elem.getStyle()
            this.ctx.fillRect(coords['x']-this.player.x + this.ORIGIN_X, coords['y']-this.player.y + this.ORIGIN_Y, coords['w'], coords['h'])
        }
    }

    addToQueue(element){
        this.elementQueue.push(element)
    }

}

export {Display}