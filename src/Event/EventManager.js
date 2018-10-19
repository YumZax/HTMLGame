import {Bullet} from '../Block/Bullet/Bullet.js'


class EventManager {

    constructor(player, objects, display) {
        this.player = player
        this.elementQueue = [...objects]
        this.display = display;
    }

    refresh(){
        let elemsToDelete = []
        for (let i in this.elementQueue){
            this.elementQueue[i].refresh()
            if (this.elementQueue[i].needsRemoval){
                elemsToDelete.push(this.elementQueue[i])
            } 
        }
        if (elemsToDelete.length > 0){
            this.display.removeFromQueue(elemsToDelete);
            this.removeFromQueue(elemsToDelete);
        }
        
    }

    removeFromQueue(elemsToDelete){
        for (let i in elemsToDelete){
            this.elementQueue = this.elementQueue.filter(elem => elem.id !== elemsToDelete[i].id)
        } 
    }

    addEvent(eventName, eventOpts){
        let elem = null
        switch(eventName){
            case "fire_bullet": elem = new Bullet(eventOpts['xPlayer'], eventOpts['yPlayer'], eventOpts['wPlayer'], eventOpts['hPlayer'], eventOpts['facing']);  break;
        }
        this.display.addToQueue(elem)
        this.elementQueue.push(elem)
    }
}

export { EventManager }