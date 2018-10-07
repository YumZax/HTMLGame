var Display = class Display{

    constructor(objects){
        this.elementQueue = [];
        this.elementStyles = {}

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
        for (let i = this.elementQueue.length-1; i>=0; i--){
            let elem = this.elementQueue[i];
            let coords = elem.getCoords()
            this.ctx.fillStyle = elem.getStyle()
            this.ctx.fillRect(coords['x'], coords['y'], coords['w'], coords['h'])
        }
    }

    addToQueue(element){
        this.elementQueue.push(element)
    }

}

export {Display}