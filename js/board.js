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
var getSquare = []
var roadBlocks = []


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
for(var i = 0; i < gameX * gameY; i += 1) {
  if(i > gameX && i < gameX * 2 - 1) {
    getSquare.push(trackSquares[i])
  }
  else if( i > gameX * 2 && i < gameX * 3 - 1 && i % 2 == 1 ) {
    getSquare.push(trackSquares[i])
  }
  else if( i > gameX * 3 && i < gameX * 4 - 1 ) {
    getSquare.push(trackSquares[i])
  }
  else if( i > gameX * 4 && i < gameX * 5 - 1 && i % 2 == 1 ) {
    getSquare.push(trackSquares[i])
  }
  else if( i > gameX * 5 && i < gameX * 6 - 1 ) {
    getSquare.push(trackSquares[i])
  }
  else if( i > gameX * 6 && i < gameX * 7 - 1 && i % 2 == 1 ) {
    getSquare.push(trackSquares[i])
  }
  else if( i > gameX * 7 && i < gameX * 8 - 1 ) {
    getSquare.push(trackSquares[i])
  }
}
for(var i = 0; i < gameX * gameY; i += 2){
  if(i > gameX * 2 && i < gameX * 3 - 1) {
    roadBlocks.push(trackSquares[i])
  }
  else if(i > gameX * 4 && i < gameX * 5 - 1) {
    roadBlocks.push(trackSquares[i])
  }
  else if(i > gameX * 6 && i < gameX * 7 - 1) {
    roadBlocks.push(trackSquares[i])
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
    else if (roadBlocks.posX <= guyX) {
      guyX += 10
    }
  }
  else if(keyState[39]) {
    guyX += 2
    if(guyX >= 464){
      guyX -= 2
    }
    else if (roadBlocks.posX >= guyX) {
      guyX -= 10
    }
  }
  else if (keyState[40]) {
    guyY += 2
    if(guyY >= 294) {
      guyY -= 2
    }
    else if (roadBlocks.posY >= guyY) {
      guyY -= 10
    }
  }
  else if (keyState[38]) {
    guyY -= 2
    if(guyY <= 40) {
      guyY += 2
    }
    else if (roadBlocks.posY <= guyY) {
      guyY += 10
    }
  }

  var player1 = $('.player')[0]
  player1.style.background = 'blue'
  player1.style.left = guyX + 'px'
  player1.style.top = guyY + 'px'
  // console.log('x: ' + guyX + ' y: ' + guyY)

  roadBlocks[0].posX = 82
  roadBlocks[0].posY = 82

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

bomb = {
  is: document.createElement('div'),
  number: 1,
  power: 1
}

plantBomb = function () {
  if(keyState[32] || keyState[13] || keyState[18]) {
    bomb.is.className = 'bomb'
    if (guyY < 60) {
      if (guyX < 60){
        getSquare[0].append(bomb.is)
      }
      if (guyX > 60 && guyX < 107){
          getSquare[1].append(bomb.is)
      }
      if (guyX > 107 && guyX < 147) {
        getSquare[2].append(bomb.is)
      }
      if (guyX > 147 && guyX < 187) {
        getSquare[3].append(bomb.is)
      }
      if (guyX > 187 && guyX < 227) {
        getSquare[4].append(bomb.is)
      }
      if (guyX > 227 && guyX < 267) {
        getSquare[5].append(bomb.is)
      }
      if (guyX > 267 && guyX < 307) {
        getSquare[6].append(bomb.is)
      }
      if (guyX > 307 && guyX < 347) {
        getSquare[7].append(bomb.is)
      }
      if (guyX > 347 && guyX < 387) {
        getSquare[8].append(bomb.is)
      }
      if (guyX > 387 && guyX < 427) {
        getSquare[9].append(bomb.is)
      }
      if (guyX > 427 && guyX < 467) {
        getSquare[10].append(bomb.is)
      }
    }
    if (guyY > 60 && guyY < 107) {
      if (guyX < 60) {
        getSquare[11].append(bomb.is)
      }
      if (guyX > 107 && guyX < 147) {
        getSquare[12].append(bomb.is)
      }
      if (guyX > 187 && guyX < 227) {
        getSquare[13].append(bomb.is)
      }
      if (guyX > 267 && guyX < 307) {
        getSquare[14].append(bomb.is)
      }
      if (guyX > 347 && guyX < 387) {
        getSquare[15].append(bomb.is)
      }
      if (guyX > 427 && guyX < 467) {
        getSquare[16].append(bomb.is)
      }
    }
    if (guyY > 107 && guyY < 147) {
      if (guyX < 60){
        getSquare[17].append(bomb.is)
      }
      if (guyX > 60 && guyX < 107){
          getSquare[18].append(bomb.is)
      }
      if (guyX > 107 && guyX < 147) {
        getSquare[19].append(bomb.is)
      }
      if (guyX > 147 && guyX < 187) {
        getSquare[20].append(bomb.is)
      }
      if (guyX > 187 && guyX < 227) {
        getSquare[21].append(bomb.is)
      }
      if (guyX > 227 && guyX < 267) {
        getSquare[22].append(bomb.is)
      }
      if (guyX > 267 && guyX < 307) {
        getSquare[23].append(bomb.is)
      }
      if (guyX > 307 && guyX < 347) {
        getSquare[24].append(bomb.is)
      }
      if (guyX > 347 && guyX < 387) {
        getSquare[25].append(bomb.is)
      }
      if (guyX > 387 && guyX < 427) {
        getSquare[26].append(bomb.is)
      }
      if (guyX > 427 && guyX < 467) {
        getSquare[27].append(bomb.is)
      }
    }
    if (guyY > 147 && guyY < 187) {
      if (guyX < 60) {
        getSquare[28].append(bomb.is)
      }
      if (guyX > 107 && guyX < 147) {
        getSquare[29].append(bomb.is)
      }
      if (guyX > 187 && guyX < 227) {
        getSquare[30].append(bomb.is)
      }
      if (guyX > 267 && guyX < 307) {
        getSquare[31].append(bomb.is)
      }
      if (guyX > 347 && guyX < 387) {
        getSquare[32].append(bomb.is)
      }
      if (guyX > 427 && guyX < 467) {
        getSquare[33].append(bomb.is)
      }
    }
    if (guyY > 187 && guyY < 227) {
      if (guyX < 60){
        getSquare[34].append(bomb.is)
      }
      if (guyX > 60 && guyX < 107){
          getSquare[35].append(bomb.is)
      }
      if (guyX > 107 && guyX < 147) {
        getSquare[36].append(bomb.is)
      }
      if (guyX > 147 && guyX < 187) {
        getSquare[37].append(bomb.is)
      }
      if (guyX > 187 && guyX < 227) {
        getSquare[38].append(bomb.is)
      }
      if (guyX > 227 && guyX < 267) {
        getSquare[39].append(bomb.is)
      }
      if (guyX > 267 && guyX < 307) {
        getSquare[40].append(bomb.is)
      }
      if (guyX > 307 && guyX < 347) {
        getSquare[41].append(bomb.is)
      }
      if (guyX > 347 && guyX < 387) {
        getSquare[42].append(bomb.is)
      }
      if (guyX > 387 && guyX < 427) {
        getSquare[43].append(bomb.is)
      }
      if (guyX > 427 && guyX < 467) {
        getSquare[44].append(bomb.is)
      }
    }
    if (guyY > 227 && guyY < 267) {
      if (guyX < 60) {
        getSquare[45].append(bomb.is)
      }
      if (guyX > 107 && guyX < 147) {
        getSquare[46].append(bomb.is)
      }
      if (guyX > 187 && guyX < 227) {
        getSquare[47].append(bomb.is)
      }
      if (guyX > 267 && guyX < 307) {
        getSquare[48].append(bomb.is)
      }
      if (guyX > 347 && guyX < 387) {
        getSquare[49].append(bomb.is)
      }
      if (guyX > 427 && guyX < 467) {
        getSquare[50].append(bomb.is)
      }
    }
    if (guyY > 267 && guyY < 307) {
      if (guyX < 60){
        getSquare[51].append(bomb.is)
      }
      if (guyX > 60 && guyX < 107){
          getSquare[52].append(bomb.is)
      }
      if (guyX > 107 && guyX < 147) {
        getSquare[53].append(bomb.is)
      }
      if (guyX > 147 && guyX < 187) {
        getSquare[54].append(bomb.is)
      }
      if (guyX > 187 && guyX < 227) {
        getSquare[55].append(bomb.is)
      }
      if (guyX > 227 && guyX < 267) {
        getSquare[56].append(bomb.is)
      }
      if (guyX > 267 && guyX < 307) {
        getSquare[57].append(bomb.is)
      }
      if (guyX > 307 && guyX < 347) {
        getSquare[58].append(bomb.is)
      }
      if (guyX > 347 && guyX < 387) {
        getSquare[59].append(bomb.is)
      }
      if (guyX > 387 && guyX < 427) {
        getSquare[60].append(bomb.is)
      }
      if (guyX > 427 && guyX < 467) {
        getSquare[61].append(bomb.is)
      }
    }
  }
  else if(keyState[16]) {
    bomb.is.className = 'bomb'
    if (guy2Y < 60) {
      if (guy2X < 60){
        getSquare[0].append(bomb.is)
      }
      if (guy2X > 60 && guy2X < 107){
          getSquare[1].append(bomb.is)
      }
      if (guy2X > 107 && guy2X < 147) {
        getSquare[2].append(bomb.is)
      }
      if (guy2X > 147 && guy2X < 187) {
        getSquare[3].append(bomb.is)
      }
      if (guy2X > 187 && guy2X < 227) {
        getSquare[4].append(bomb.is)
      }
      if (guy2X > 227 && guy2X < 267) {
        getSquare[5].append(bomb.is)
      }
      if (guy2X > 267 && guy2X < 307) {
        getSquare[6].append(bomb.is)
      }
      if (guy2X > 307 && guy2X < 347) {
        getSquare[7].append(bomb.is)
      }
      if (guy2X > 347 && guy2X < 387) {
        getSquare[8].append(bomb.is)
      }
      if (guy2X > 387 && guy2X < 427) {
        getSquare[9].append(bomb.is)
      }
      if (guy2X > 427 && guy2X < 467) {
        getSquare[10].append(bomb.is)
      }
    }
    if (guy2Y > 60 && guy2Y < 107) {
      if (guy2X < 60) {
        getSquare[11].append(bomb.is)
      }
      if (guy2X > 107 && guy2X < 147) {
        getSquare[12].append(bomb.is)
      }
      if (guy2X > 187 && guy2X < 227) {
        getSquare[13].append(bomb.is)
      }
      if (guy2X > 267 && guy2X < 307) {
        getSquare[14].append(bomb.is)
      }
      if (guy2X > 347 && guy2X < 387) {
        getSquare[15].append(bomb.is)
      }
      if (guy2X > 427 && guy2X < 467) {
        getSquare[16].append(bomb.is)
      }
    }
    if (guy2Y > 107 && guy2Y < 147) {
      if (guy2X < 60){
        getSquare[17].append(bomb.is)
      }
      if (guy2X > 60 && guy2X < 107){
          getSquare[18].append(bomb.is)
      }
      if (guy2X > 107 && guy2X < 147) {
        getSquare[19].append(bomb.is)
      }
      if (guy2X > 147 && guy2X < 187) {
        getSquare[20].append(bomb.is)
      }
      if (guy2X > 187 && guy2X < 227) {
        getSquare[21].append(bomb.is)
      }
      if (guy2X > 227 && guy2X < 267) {
        getSquare[22].append(bomb.is)
      }
      if (guy2X > 267 && guy2X < 307) {
        getSquare[23].append(bomb.is)
      }
      if (guy2X > 307 && guy2X < 347) {
        getSquare[24].append(bomb.is)
      }
      if (guy2X > 347 && guy2X < 387) {
        getSquare[25].append(bomb.is)
      }
      if (guy2X > 387 && guy2X < 427) {
        getSquare[26].append(bomb.is)
      }
      if (guy2X > 427 && guy2X < 467) {
        getSquare[27].append(bomb.is)
      }
    }
    if (guy2Y > 147 && guy2Y < 187) {
      if (guy2X < 60) {
        getSquare[28].append(bomb.is)
      }
      if (guy2X > 107 && guy2X < 147) {
        getSquare[29].append(bomb.is)
      }
      if (guy2X > 187 && guy2X < 227) {
        getSquare[30].append(bomb.is)
      }
      if (guy2X > 267 && guy2X < 307) {
        getSquare[31].append(bomb.is)
      }
      if (guy2X > 347 && guy2X < 387) {
        getSquare[32].append(bomb.is)
      }
      if (guy2X > 427 && guy2X < 467) {
        getSquare[33].append(bomb.is)
      }
    }
    if (guy2Y > 187 && guy2Y < 227) {
      if (guy2X < 60){
        getSquare[34].append(bomb.is)
      }
      if (guy2X > 60 && guy2X < 107){
          getSquare[35].append(bomb.is)
      }
      if (guy2X > 107 && guy2X < 147) {
        getSquare[36].append(bomb.is)
      }
      if (guy2X > 147 && guy2X < 187) {
        getSquare[37].append(bomb.is)
      }
      if (guy2X > 187 && guy2X < 227) {
        getSquare[38].append(bomb.is)
      }
      if (guy2X > 227 && guy2X < 267) {
        getSquare[39].append(bomb.is)
      }
      if (guy2X > 267 && guy2X < 307) {
        getSquare[40].append(bomb.is)
      }
      if (guy2X > 307 && guy2X < 347) {
        getSquare[41].append(bomb.is)
      }
      if (guy2X > 347 && guy2X < 387) {
        getSquare[42].append(bomb.is)
      }
      if (guy2X > 387 && guy2X < 427) {
        getSquare[43].append(bomb.is)
      }
      if (guy2X > 427 && guy2X < 467) {
        getSquare[44].append(bomb.is)
      }
    }
    if (guy2Y > 227 && guy2Y < 267) {
      if (guy2X < 60) {
        getSquare[45].append(bomb.is)
      }
      if (guy2X > 107 && guy2X < 147) {
        getSquare[46].append(bomb.is)
      }
      if (guy2X > 187 && guy2X < 227) {
        getSquare[47].append(bomb.is)
      }
      if (guy2X > 267 && guy2X < 307) {
        getSquare[48].append(bomb.is)
      }
      if (guy2X > 347 && guy2X < 387) {
        getSquare[49].append(bomb.is)
      }
      if (guy2X > 427 && guy2X < 467) {
        getSquare[50].append(bomb.is)
      }
    }
    if (guy2Y > 267 && guy2Y < 307) {
      if (guy2X < 60){
        getSquare[51].append(bomb.is)
      }
      if (guy2X > 60 && guy2X < 107){
          getSquare[52].append(bomb.is)
      }
      if (guy2X > 107 && guy2X < 147) {
        getSquare[53].append(bomb.is)
      }
      if (guy2X > 147 && guy2X < 187) {
        getSquare[54].append(bomb.is)
      }
      if (guy2X > 187 && guy2X < 227) {
        getSquare[55].append(bomb.is)
      }
      if (guy2X > 227 && guy2X < 267) {
        getSquare[56].append(bomb.is)
      }
      if (guy2X > 267 && guy2X < 307) {
        getSquare[57].append(bomb.is)
      }
      if (guy2X > 307 && guy2X < 347) {
        getSquare[58].append(bomb.is)
      }
      if (guy2X > 347 && guy2X < 387) {
        getSquare[59].append(bomb.is)
      }
      if (guy2X > 387 && guy2X < 427) {
        getSquare[60].append(bomb.is)
      }
      if (guy2X > 427 && guy2X < 467) {
        getSquare[61].append(bomb.is)
      }
    }
  }

  setTimeout (plantBomb, 50)
}

plantBomb()
moveGuy1()
moveGuy2()
