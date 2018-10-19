import {Display} from "./src/Display/Display.js"
import {Controls} from "./src/Controls/Controls.js"
import {Player} from "./src/Block/Player/Player.js"
import {Collider} from "./src/Collider/Collider.js"
import {Block} from './src/Block/Block.js'
import {EventManager} from './src/Event/EventManager.js'

const id = (() => {
    let currentId = 0;
    const map = new WeakMap();

    return (object) => {
        if (!map.has(object)) {
            map.set(object, ++currentId);
        }

        return map.get(object);
    };
})();

var main = function () {

    function refresh(display, controls, collider, eventManager) {
        collider.checkPlayerCollisions();
        controls.refresh();
        display.refresh();
        eventManager.refresh();
    }

    var player = new Player(400, 300, 10, 10, "rgb(0,0,0)")
    var block = new Block(400, 400, 100, 100, "rgb(255,0,0)")
    var display = new Display(player, [block])
    var eventManager = new EventManager(player, [], display);

    var playerControls = new Controls(player, [], eventManager)
    var collider = new Collider(player, [block])
    window.setInterval(() => {
        refresh(display, playerControls, collider, eventManager)
        
    }, 1000/60)

}

document.getElementsByTagName("body")[0].onload = main;