//  1. Establish DOM References 
//     - Explicitly defining for my own sanity

let movementDisplay = document.getElementById("movement")
let game = document.getElementById("game")
let statusDisplay = document.getElementById("status")

//  2. Getting context for drawing on canvas ---> always "2d"

let ctx = game.getContext("2d")
game.setAttribute("height", getComputedStyle(game)["height"])
game.setAttribute("width", getComputedStyle(game)["width"])


//  3. Draw a filled box
//      - Determines the Fill Color
ctx.fillStyle = "white"
ctx.fillRect(10, 10, 100, 100)


//  4. Draw a line box
//      - Establishing Line Looks/Estetics
ctx.strokeStyle = "red"
ctx.lineWidth = 10; 
ctx.strokeRect(10, 10, 100, 100)

