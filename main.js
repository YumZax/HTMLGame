import {Display} from "./src/Display/Display.js"
import {Controls} from "./src/Controls/Controls.js"
import {Player} from "./src/Block/Player/Player.js"
import {Collider} from "./src/Collider/Collider.js"
import {Block} from './src/Block/Block.js'
var main = function () {

    function refresh(display, controls, collider) {
        collider.checkPlayerCollisions();
        controls.refresh()
        display.refresh()
    }
    var player = new Player(400, 300, 10, 10, "rgb(0,0,0)")
    var block = new Block(400, 400, 100, 100, "rgb(255,0,0)")
    var playerControls = new Controls(player)
    var display = new Display(player, [block])
    var collider = new Collider(player, [block])
    window.setInterval(() => {
        refresh(display, playerControls, collider)
        
    }, 40)

}

document.getElementsByTagName("body")[0].onload = main;