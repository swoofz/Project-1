var body = document.querySelector('body')
var container = document.createElement ('div')
var guy1 = document.createElement('div')
var guy2 = document.createElement('div')

guy1.className = 'player'
guy2.className = 'player'
container.className = "container"

body.append(container)


function createBoard (pos) {
  var mySquares = document.createElement('div')
  mySquares.className = 'squares'
  container.append(mySquares)
  return mySquares
}

function createBlocks () {
  var myBlock = document.createElement('div')
  myBlock.className = 'block'
  myBlock.style.backgroundColor = 'brown'
  return myBlock
}
// 5x5 with outside blocked so 4x4 inside with 1 colums and 1 row
// 5 = 1 , 7 = 2 row or colum 9 = 3
var gameX = 13 // greater than 4
var gameY = 9 //greater than 4
var squareSize = 43 // 42 - 45
var gameWidth = squareSize * gameX
container.style.width = gameWidth + 'px'
var trackSquares = []
var placeBlocks = []

// create board with gameX is how many squares left and right
// gameY is how many squares up and down
for(var i = 0; i < gameX * gameY; i += 1) {
  trackSquares.push(createBoard(i))
  placeBlocks.push(createBlocks(i))
  if(i < gameX) {
    trackSquares[i].append(placeBlocks[i])
  } // Border blocks
  else if( (i + gameX && i % gameX == 0 && i < gameX * gameY) ||
  (i + gameX * 2 - 1 && i % gameX == gameX -1 && i < gameX * gameY) ||
  (gameX * gameY - gameX < i && i < gameX * gameY) ){
    trackSquares[i].append(placeBlocks[i])
  }
  else if(i % 2 == 0 && gameX * 2 + 1 < i && i < gameX * gameY - (gameX * 2) - 2) {
    if ( (i % gameX == 2 || i % gameX == 4 || i % gameX == 6 || i % gameX === 8 || i % gameX == 10 ) ){
      trackSquares[i].append(placeBlocks[i])
    }
  }
}

container.append(guy1)
container.append(guy2)

var guyX = 462
var guyY = 292
var guy2X = 42
var guy2Y = 42

var keyState = {}
document.addEventListener('keydown',function(e){
  keyState[e.keyCode] = true
}, true)
document.addEventListener('keyup', function(e){
  keyState[e.keyCode] = false
}, true)

function moveGuy1() {
  if(keyState[37]){
    guyX -= 2
    if (guyX <= 40) {
      guyX += 2
    }
  }
  else if(keyState[39]) {
    guyX += 2
    if(guyX >= 464)
    guyX -= 2
  }
  else if (keyState[40]) {
    guyY += 2
    if(guyY >= 294) {
      guyY -= 2
    }
  }
  else if (keyState[38]) {
    guyY -= 2
    if(guyY <= 40) {
      guyY += 2
    }
  }

  var player1 = $('.player')[0]
  player1.style.background = 'blue'
  player1.style.left = guyX + 'px'
  player1.style.top = guyY + 'px'

  setTimeout(moveGuy1, 10)
}

function moveGuy2() {
  if(keyState[65]){
    guy2X-= 2
    if (guy2X <= 40) {
      guy2X += 2
    }
  }
  else if(keyState[68]) {
    guy2X += 2
    if (guy2X >= 464) {
      guy2X -= 2
    }
  }
  else if (keyState[83]) {
    guy2Y += 2
    if (guy2Y >= 294) {
      guy2Y -= 2
    }
  }
  else if (keyState[87]) {
    guy2Y-= 2
    if (guy2Y <= 40) {
      guy2Y += 2
    }
  }

  var player2 = $('.player')[1]
  player2.style.left = guy2X + 'px'
  player2.style.top = guy2Y + 'px'

  setTimeout(moveGuy2, 10)
}

bomb = document.createElement('div')
bomb.className = 'bomb'

checkWhere = function(position) {
  for (var i = 0; i < trackSquares.length; i += 1) {
    var square = trackSquares[i]
    if(square.position.gameX == position.gameX && square.position.gameY == position.gameY) {
      return square
    }
  }
}
// x: 42 y: 42, x:462 y: 292
// x + 40 = next val in the row
// y + 40 = next val in the colum
playerCoordinates = function () {
  if(keyState[13]) {
    console.log ('Blue coordinates x: ' + guyX,'y: ' + guyY)
    console.log ('Red corrdinates x: ' + guy2X,'y: ' + guy2Y)
  }

  setTimeout (playerCoordinates, 100)
}
playerCoordinates()

function plantBomb() {
  if(keyState[16]) {
    container.append(bomb)
    console.log("Shift pressed")
  }


  setTimeout(plantBomb, 150)
}

plantBomb()
moveGuy1()
moveGuy2()
