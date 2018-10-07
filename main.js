import {Display} from "./src/Display/Display.js"
import {Controls} from "./src/Controls/Controls.js"
import {Player} from "./src/Player/Player.js"

var main = function () {

    function refresh(display, controls) {
        controls.refresh()
        display.refresh()
    }
    var player = new Player(10, 550, 10, 10, "rgb(0,0,0)")
    var block = new Player(400, 400, 100, 100, "rgb(255,0,0)")
    var playerControls = new Controls(player)
    var display = new Display([player, block])
    window.setInterval(() => {
        refresh(display, playerControls)
        
    }, 40)

}

document.getElementsByTagName("body")[0].onload = main;