var body = document.querySelector('body')
var container = document.createElement ('div')
var guy1 = document.createElement('div')
var guy2 = document.createElement('div')

guy1.className = 'player'
guy2.className = 'player'
container.className = "container"

body.append(container)

function createBoard () {
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
function createBombs () {
  var myBomb = document.createElement('div')
  myBomb.className = "bomb"
  return myBomb
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
var bombDown = []

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
for(var i = 0; i < gameX * gameY; i += 2) {
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
for(var i = 0; i < getSquare.length; i += 1) {
  bombDown.push(createBombs(i))
}

container.append(guy1)
container.append(guy2)
guy1.alive = true
guy2.alive = true

var guyX = 462
var guyY = 292
var guy2X = 42
var guy2Y = 42
var bombPosX = 13

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
    if (( guyY >= stops[0].top)  && (guyY <= stops[0].bottom)) {
      if ( (guyX >= stops[0].left) || (guyX >= stops[1].left) || (guyX >= stops[2].left) || (guyX >= stops[3].left) || (guyX >= stops[4].left)) {
        guyX += 2
      }
    }
    if (( guyY >= stops[5].top)  && (guyY <= stops[5].bottom)) {
      if ( (guyX >= stops[0].left) || (guyX >= stops[1].left) || (guyX >= stops[2].left) || (guyX >= stops[3].left) || (guyX >= stops[4].left)) {
        guyX += 2
      }
    }
    if (( guyY >= stops[10].top)  && (guyY <= stops[10].bottom)) {
      if ( (guyX >= stops[0].left) || (guyX >= stops[1].left) || (guyX >= stops[2].left) || (guyX >= stops[3].left) || (guyX >= stops[4].left)) {
        guyX += 2
      }
    }
  }
  if(keyState[39]) {
    guyX += 2
    if(guyX >= 464){
      guyX -= 2
    }
    if (( guyY >= stops[0].top)  && (guyY <= stops[0].bottom)) {
      if ( (guyX <= stops[0].right) || (guyX >= stops[0].right) || (guyX >= stops[1].right) || (guyX >= stops[2].right) || (guyX >= stops[3].right) || (guyX >= stops[4].right)) {
        guyX -= 2
      }
    }
    if (( guyY >= stops[5].top)  && (guyY <= stops[5].bottom)) {
      if ( (guyX <= stops[0].right) || (guyX >= stops[0].right) || (guyX >= stops[1].right) || (guyX >= stops[2].right) || (guyX >= stops[3].right) || (guyX >= stops[4].right)) {
        guyX -= 2
      }
    }
    if (( guyY >= stops[10].top)  && (guyY <= stops[10].bottom)) {
      if ( (guyX <= stops[0].right) || (guyX >= stops[0].right) || (guyX >= stops[1].right) || (guyX >= stops[2].right) || (guyX >= stops[3].right) || (guyX >= stops[4].right)) {
        guyX -= 2
      }
    }
  }
  if (keyState[40]) {
    guyY += 2
    if(guyY >= 294) {
      guyY -= 2
    }
    if ( (guyX >= stops[0].left) && (guyX <= stops[0].right) ){
      if ((guyY >= stops[0].top) || (guyY >= stops[5].top) || (guyY >= stops[11].top)) {
        guyY -= 2
      }
    }
    if ( (guyX >= stops[1].left) && (guyX <= stops[1].right) ){
      if ((guyY >= stops[0].top) || (guyY >= stops[5].top) || (guyY >= stops[11].top)) {
        guyY -= 2
      }
    }
    if ( (guyX >= stops[2].left) && (guyX <= stops[2].right) ){
      if ((guyY >= stops[0].top) || (guyY >= stops[5].top) || (guyY >= stops[11].top)) {
        guyY -= 2
      }
    }
    if ( (guyX >= stops[3].left) && (guyX <= stops[3].right) ){
      if ((guyY >= stops[0].top) || (guyY >= stops[5].top) || (guyY >= stops[11].top)) {
        guyY -= 2
      }
    }
    if ( (guyX >= stops[4].left) && (guyX <= stops[4].right) ){
      if ((guyY >= stops[0].top) || (guyY >= stops[5].top) || (guyY >= stops[11].top)) {
        guyY -= 2
      }
    }
  }
  if (keyState[38]) {
    guyY -= 2
    if(guyY <= 40) {
      guyY += 2
    }
    if ( (guyX >= stops[0].left) && (guyX <= stops[0].right) ){
      if ((guyY >= stops[0].bottom) || (guyY >= stops[5].bottom) || (guyY >= stops[10].bottom)) {
        guyY += 2
      }
    }
    if ( (guyX >= stops[1].left) && (guyX <= stops[1].right) ){
      if ((guyY >= stops[0].bottom) || (guyY >= stops[5].bottom) || (guyY >= stops[10].bottom)) {
        guyY += 2
      }
    }
    if ( (guyX >= stops[2].left) && (guyX <= stops[2].right) ){
      if ((guyY >= stops[0].bottom) || (guyY >= stops[5].bottom) || (guyY >= stops[10].bottom)) {
        guyY += 2
      }
    }
    if ( (guyX >= stops[3].left) && (guyX <= stops[3].right) ){
      if ((guyY >= stops[0].bottom) || (guyY >= stops[5].bottom) || (guyY >= stops[10].bottom)) {
        guyY += 2
      }
    }
    if ( (guyX >= stops[4].left) && (guyX <= stops[4].right) ){
      if ((guyY >= stops[0].bottom) || (guyY >= stops[5].bottom) || (guyY >= stops[10].bottom)) {
        guyY += 2
      }
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
    guy2X -= 2
    if (guy2X <= 40) {
      guy2X += 2
    }
    if (( guy2Y >= stops[0].top)  && (guy2Y <= stops[0].bottom)) {
      if ( (guy2X >= stops[0].left) || (guy2X >= stops[1].left) || (guy2X >= stops[2].left) || (guy2X >= stops[3].left) || (guy2X >= stops[4].left)) {
        guy2X += 2
      }
    }
    if (( guy2Y >= stops[5].top)  && (guy2Y <= stops[5].bottom)) {
      if ( (guy2X >= stops[0].left) || (guy2X >= stops[1].left) || (guy2X >= stops[2].left) || (guy2X >= stops[3].left) || (guy2X >= stops[4].left)) {
        guy2X += 2
      }
    }
    if (( guy2Y >= stops[10].top)  && (guy2Y <= stops[10].bottom)) {
      if ( (guy2X >= stops[0].left) || (guy2X >= stops[1].left) || (guy2X >= stops[2].left) || (guy2X >= stops[3].left) || (guy2X >= stops[4].left)) {
        guy2X += 2
      }
    }
  }
  if(keyState[68]) {
    guy2X += 2
    if (guy2X >= 464) {
      guy2X -= 2
    }
    if (( guy2Y >= stops[0].top)  && (guy2Y <= stops[0].bottom)) {
      if ( (guy2X <= stops[0].right) || (guy2X >= stops[0].right) || (guy2X >= stops[1].right) || (guy2X >= stops[2].right) || (guy2X >= stops[3].right) || (guy2X >= stops[4].right)) {
        guy2X -= 2
      }
    }
    if (( guy2Y >= stops[5].top)  && (guy2Y <= stops[5].bottom)) {
      if ( (guy2X <= stops[0].right) || (guy2X >= stops[0].right) || (guy2X >= stops[1].right) || (guy2X >= stops[2].right) || (guy2X >= stops[3].right) || (guy2X >= stops[4].right)) {
        guy2X -= 2
      }
    }
    if (( guy2Y >= stops[10].top)  && (guy2Y <= stops[10].bottom)) {
      if ( (guy2X <= stops[0].right) || (guy2X >= stops[0].right) || (guy2X >= stops[1].right) || (guy2X >= stops[2].right) || (guy2X >= stops[3].right) || (guy2X >= stops[4].right)) {
        guy2X -= 2
      }
    }
  }
  if (keyState[83]) {
    guy2Y += 2
    if (guy2Y >= 294) {
      guy2Y -= 2
    }
    if ( (guy2X >= stops[0].left) && (guy2X <= stops[0].right) ){
      if ((guy2Y >= stops[0].top) || (guy2Y >= stops[5].top) || (guy2Y >= stops[11].top)) {
        guy2Y -= 2
      }
    }
    if ( (guy2X >= stops[1].left) && (guy2X <= stops[1].right) ){
      if ((guy2Y >= stops[0].top) || (guy2Y >= stops[5].top) || (guy2Y >= stops[11].top)) {
        guy2Y -= 2
      }
    }
    if ( (guy2X >= stops[2].left) && (guy2X <= stops[2].right) ){
      if ((guy2Y >= stops[0].top) || (guy2Y >= stops[5].top) || (guy2Y >= stops[11].top)) {
        guy2Y -= 2
      }
    }
    if ( (guy2X >= stops[3].left) && (guy2X <= stops[3].right) ){
      if ((guy2Y >= stops[0].top) || (guy2Y >= stops[5].top) || (guy2Y >= stops[11].top)) {
        guy2Y -= 2
      }
    }
    if ( (guy2X >= stops[4].left) && (guy2X <= stops[4].right) ){
      if ((guy2Y >= stops[0].top) || (guy2Y >= stops[5].top) || (guy2Y >= stops[11].top)) {
        guy2Y -= 2
      }
    }
  }
  if (keyState[87]) {
    guy2Y-= 2
    if (guy2Y <= 40) {
      guy2Y += 2
    }
    if ( (guy2X >= stops[0].left) && (guy2X <= stops[0].right) ){
      if ((guy2Y >= stops[0].bottom) || (guy2Y >= stops[5].bottom) || (guy2Y >= stops[10].bottom)) {
        guy2Y += 2
      }
    }
    if ( (guy2X >= stops[1].left) && (guy2X <= stops[1].right) ){
      if ((guy2Y >= stops[0].bottom) || (guy2Y >= stops[5].bottom) || (guy2Y >= stops[10].bottom)) {
        guy2Y += 2
      }
    }
    if ( (guy2X >= stops[2].left) && (guy2X <= stops[2].right) ){
      if ((guy2Y >= stops[0].bottom) || (guy2Y >= stops[5].bottom) || (guy2Y >= stops[10].bottom)) {
        guy2Y += 2
      }
    }
    if ( (guy2X >= stops[3].left) && (guy2X <= stops[3].right) ){
      if ((guy2Y >= stops[0].bottom) || (guy2Y >= stops[5].bottom) || (guy2Y >= stops[10].bottom)) {
        guy2Y += 2
      }
    }
    if ( (guy2X >= stops[4].left) && (guy2X <= stops[4].right) ){
      if ((guy2Y >= stops[0].bottom) || (guy2Y >= stops[5].bottom) || (guy2Y >= stops[10].bottom)) {
        guy2Y += 2
      }
    }
  }
  //Example

  var player2 = $('.player')[1]
  player2.style.left = guy2X + 'px'
  player2.style.top = guy2Y + 'px'

  setTimeout(moveGuy2, 10)
}

function Stop(number, top, bottom, right, left) {
  this.name = number
  this.top = top
  this.bottom = bottom
  this.right = right
  this.left = left
}
var stops = [
  new Stop(0, 50, 118, 118, 50),
  new Stop(1, 50, 118, 204, 132),
  new Stop(2, 50, 118, 288, 214),
  new Stop(3, 50, 118, 370, 298),
  new Stop(4, 50, 118, 456, 384),
  new Stop(5, 134, 202, 118, 50),
  new Stop(6, 134, 202, 204, 132),
  new Stop(7, 134, 202, 288, 214),
  new Stop(8, 134, 202, 370, 298),
  new Stop(9, 134, 202, 456, 384),
  new Stop(10, 216, 286, 118, 50),
  new Stop(11, 216, 286, 204, 132),
  new Stop(12, 216, 286, 288, 214),
  new Stop(13, 216, 286, 370, 298),
  new Stop(14, 216, 286, 456, 384),
]

bomb = {
  is: document.createElement('div'),
  number: 1,
  power: 10,
  explode: false
}

plantBomb = function (pos) {
  var fire = document.createElement('div')
  fire.className = 'fire'
  var $fire = $(fire)
  if(keyState[32] || keyState[13] || keyState[18]) {
    // if (guyY < 60) {
    //   if (guyX < 60){
    //     getSquare[0].append(bombDown[0])
    //     // getSquare[0].append(fire)
    //     // getSquare[1].append(fire)
    //     // getSquare[11].append(fire)
    //   }
    //   if (guyX > 60 && guyX < 107){
    //       getSquare[1].append(bombDown[1])
    //   }
    //   if (guyX > 107 && guyX < 147) {
    //     getSquare[2].append(bombDown[2])
    //   }
    //   if (guyX > 147 && guyX < 187) {
    //     getSquare[3].append(bombDown[3])
    //   }
    //   if (guyX > 187 && guyX < 227) {
    //     getSquare[4].append(bombDown[4])
    //   }
    //   if (guyX > 227 && guyX < 267) {
    //     getSquare[5].append(bombDown[5])
    //   }
    //   if (guyX > 267 && guyX < 307) {
    //     getSquare[6].append(bombDown[6])
    //   }
    //   if (guyX > 307 && guyX < 347) {
    //     getSquare[7].append(bombDown[7])
    //   }
    //   if (guyX > 347 && guyX < 387) {
    //     getSquare[8].append(bombDown[8])
    //   }
    //   if (guyX > 387 && guyX < 427) {
    //     getSquare[9].append(bombDown[9])
    //   }
    //   if (guyX > 427 && guyX < 467) {
    //     getSquare[10].append(bombDown[10])
    //   }
    // }
    // if (guyY > 60 && guyY < 107) {
    //   if (guyX < 60) {
    //     getSquare[11].append(bombDown[11])
    //   }
    //   if (guyX > 107 && guyX < 147) {
    //     getSquare[12].append(bombDown[12])
    //   }
    //   if (guyX > 187 && guyX < 227) {
    //     getSquare[13].append(bombDown[13])
    //   }
    //   if (guyX > 267 && guyX < 307) {
    //     getSquare[14].append(bombDown[14])
    //   }
    //   if (guyX > 347 && guyX < 387) {
    //     getSquare[15].append(bombDown[15])
    //   }
    //   if (guyX > 427 && guyX < 467) {
    //     getSquare[16].append(bombDown[16])
    //   }
    // }
    if (guyY > 107 && guyY < 147) {
      if (guyX < 60){
        getSquare[17].append(bombDown[17])
      }
      if (guyX > 60 && guyX < 107){
          getSquare[18].append(bombDown[18])
      }
      if (guyX > 107 && guyX < 147) {
        getSquare[19].append(bombDown[19])
      }
      if (guyX > 147 && guyX < 187) {
        getSquare[20].append(bombDown[20])
      }
      if (guyX > 187 && guyX < 227) {
        getSquare[21].append(bombDown[21])
      }
      if (guyX > 227 && guyX < 267) {
        getSquare[22].append(bombDown[22])
      }
      if (guyX > 267 && guyX < 307) {
        getSquare[23].append(bombDown[23])
      }
      if (guyX > 307 && guyX < 347) {
        getSquare[24].append(bombDown[24])
      }
      if (guyX > 347 && guyX < 387) {
        getSquare[25].append(bombDown[25])
      }
      if (guyX > 387 && guyX < 427) {
        getSquare[26].append(bombDown[26])
      }
      if (guyX > 427 && guyX < 467) {
        getSquare[27].append(bombDown[27])
      }
    }
    // if (guyY > 147 && guyY < 187) {
    //   if (guyX < 60) {
    //     getSquare[28].append(bombDown[28])
    //   }
    //   if (guyX > 107 && guyX < 147) {
    //     getSquare[29].append(bombDown[29])
    //   }
    //   if (guyX > 187 && guyX < 227) {
    //     getSquare[30].append(bombDown[30])
    //   }
    //   if (guyX > 267 && guyX < 307) {
    //     getSquare[31].append(bombDown[31])
    //   }
    //   if (guyX > 347 && guyX < 387) {
    //     getSquare[32].append(bombDown[32])
    //   }
    //   if (guyX > 427 && guyX < 467) {
    //     getSquare[33].append(bombDown[33])
    //   }
    // }
    // if (guyY > 187 && guyY < 227) {
    //   if (guyX < 60){
    //     getSquare[34].append(bombDown[34])
    //   }
    //   if (guyX > 60 && guyX < 107){
    //       getSquare[35].append(bombDown[35])
    //   }
    //   if (guyX > 107 && guyX < 147) {
    //     getSquare[36].append(bombDown[36])
    //   }
    //   if (guyX > 147 && guyX < 187) {
    //     getSquare[37].append(bombDown[37])
    //   }
    //   if (guyX > 187 && guyX < 227) {
    //     getSquare[38].append(bombDown[38])
    //   }
    //   if (guyX > 227 && guyX < 267) {
    //     getSquare[39].append(bombDown[39])
    //   }
    //   if (guyX > 267 && guyX < 307) {
    //     getSquare[40].append(bombDown[40])
    //   }
    //   if (guyX > 307 && guyX < 347) {
    //     getSquare[41].append(bombDown[41])
    //   }
    //   if (guyX > 347 && guyX < 387) {
    //     getSquare[42].append(bombDown[42])
    //   }
    //   if (guyX > 387 && guyX < 427) {
    //     getSquare[43].append(bombDown[43])
    //   }
    //   if (guyX > 427 && guyX < 467) {
    //     getSquare[44].append(bombDown[44])
    //   }
    // }
    // if (guyY > 227 && guyY < 267) {
    //   if (guyX < 60) {
    //     getSquare[45].append(bombDown[45])
    //   }
    //   if (guyX > 107 && guyX < 147) {
    //     getSquare[46].append(bombDown[46])
    //   }
    //   if (guyX > 187 && guyX < 227) {
    //     getSquare[47].append(bombDown[47])
    //   }
    //   if (guyX > 267 && guyX < 307) {
    //     getSquare[48].append(bombDown[48])
    //   }
    //   if (guyX > 347 && guyX < 387) {
    //     getSquare[49].append(bombDown[49])
    //   }
    //   if (guyX > 427 && guyX < 467) {
    //     getSquare[50].append(bombDown[50])
    //   }
    // }
    // if (guyY > 267 && guyY < 307) {
    //   if (guyX < 60){
    //     getSquare[51].append(bombDown[51])
    //   }
    //   if (guyX > 60 && guyX < 107){
    //       getSquare[52].append(bombDown[52])
    //   }
    //   if (guyX > 107 && guyX < 147) {
    //     getSquare[53].append(bombDown[53])
    //   }
    //   if (guyX > 147 && guyX < 187) {
    //     getSquare[54].append(bombDown[54])
    //   }
    //   if (guyX > 187 && guyX < 227) {
    //     getSquare[55].append(bombDown[55])
    //   }
    //   if (guyX > 227 && guyX < 267) {
    //     getSquare[56].append(bombDown[56])
    //   }
    //   if (guyX > 267 && guyX < 307) {
    //     getSquare[57].append(bombDown[57])
    //   }
    //   if (guyX > 307 && guyX < 347) {
    //     getSquare[58].append(bombDown[58])
    //   }
    //   if (guyX > 347 && guyX < 387) {
    //     getSquare[59].append(bombDown[59])
    //   }
    //   if (guyX > 387 && guyX < 427) {
    //     getSquare[60].append(bombDown[60])
    //   }
    //   if (guyX > 427 && guyX < 467) {
    //     getSquare[61].append(bombDown[61])
    //   }
    // }
    bombDown[secondRan].explode = true
    $(".bomb").fadeOut(3000, function () {
      if (bombDown[secondRan].explode == true) {
        guy2.alive = false
      }
      bomb.explode = true
      $(".bomb").fadeIn(1, function (){
        $(this).remove()
        bomb.explode = false
      })
    })
  }
  else if(keyState[16]) {
    // if (guy2Y < 60) {
    //   if (guy2X < 60){
    //     getSquare[0].append(bombDown[0])
    //   }
    //   if (guy2X > 60 && guy2X < 107){
    //       getSquare[1].append(bombDown[1])
    //   }
    //   if (guy2X > 107 && guy2X < 147) {
    //     getSquare[2].append(bombDown[2])
    //   }
    //   if (guy2X > 147 && guy2X < 187) {
    //     getSquare[3].append(bombDown[3])
    //   }
    //   if (guy2X > 187 && guy2X < 227) {
    //     getSquare[4].append(bombDown[4])
    //   }
    //   if (guy2X > 227 && guy2X < 267) {
    //     getSquare[5].append(bombDown[5])
    //   }
    //   if (guy2X > 267 && guy2X < 307) {
    //     getSquare[6].append(bombDown[6])
    //   }
    //   if (guy2X > 307 && guy2X < 347) {
    //     getSquare[7].append(bombDown[7])
    //   }
    //   if (guy2X > 347 && guy2X < 387) {
    //     getSquare[8].append(bombDown[8])
    //   }
    //   if (guy2X > 387 && guy2X < 427) {
    //     getSquare[9].append(bombDown[9])
    //   }
    //   if (guy2X > 427 && guy2X < 467) {
    //     getSquare[10].append(bombDown[10])
    //   }
    // }
    // if (guy2Y > 60 && guy2Y < 107) {
    //   if (guy2X < 60) {
    //     getSquare[11].append(bombDown[11])
    //   }
    //   if (guy2X > 107 && guy2X < 147) {
    //     getSquare[12].append(bombDown[12])
    //   }
    //   if (guy2X > 187 && guy2X < 227) {
    //     getSquare[13].append(bombDown[13])
    //   }
    //   if (guy2X > 267 && guy2X < 307) {
    //     getSquare[14].append(bombDown[14])
    //   }
    //   if (guy2X > 347 && guy2X < 387) {
    //     getSquare[15].append(bombDown[15])
    //   }
    //   if (guy2X > 427 && guy2X < 467) {
    //     getSquare[16].append(bombDown[16])
    //   }
    // }
    // if (guy2Y > 107 && guy2Y < 147) {
    //   if (guy2X < 60){
    //     getSquare[17].append(bombDown[17])
    //   }
    //   if (guy2X > 60 && guy2X < 107){
    //       getSquare[18].append(bombDown[18])
    //   }
    //   if (guy2X > 107 && guy2X < 147) {
    //     getSquare[19].append(bombDown[19])
    //   }
    //   if (guy2X > 147 && guy2X < 187) {
    //     getSquare[20].append(bombDown[20])
    //   }
    //   if (guy2X > 187 && guy2X < 227) {
    //     getSquare[21].append(bombDown[21])
    //   }
    //   if (guy2X > 227 && guy2X < 267) {
    //     getSquare[22].append(bombDown[22])
    //   }
    //   if (guy2X > 267 && guy2X < 307) {
    //     getSquare[23].append(bombDown[23])
    //   }
    //   if (guy2X > 307 && guy2X < 347) {
    //     getSquare[24].append(bombDown[24])
    //   }
    //   if (guy2X > 347 && guy2X < 387) {
    //     getSquare[25].append(bombDown[25])
    //   }
    //   if (guy2X > 387 && guy2X < 427) {
    //     getSquare[26].append(bombDown[26])
    //   }
    //   if (guy2X > 427 && guy2X < 467) {
    //     getSquare[27].append(bombDown[27])
    //   }
    // }
    // if (guy2Y > 147 && guy2Y < 187) {
    //   if (guy2X < 60) {
    //     getSquare[28].append(bombDown[28])
    //   }
    //   if (guy2X > 107 && guy2X < 147) {
    //     getSquare[29].append(bombDown[29])
    //   }
    //   if (guy2X > 187 && guy2X < 227) {
    //     getSquare[30].append(bombDown[30])
    //   }
    //   if (guy2X > 267 && guy2X < 307) {
    //     getSquare[31].append(bombDown[31])
    //   }
    //   if (guy2X > 347 && guy2X < 387) {
    //     getSquare[32].append(bombDown[32])
    //   }
    //   if (guy2X > 427 && guy2X < 467) {
    //     getSquare[33].append(bombDown[33])
    //   }
    // }
    // if (guy2Y > 187 && guy2Y < 227) {
    //   if (guy2X < 60){
    //     getSquare[34].append(bombDown[34])
    //   }
    //   if (guy2X > 60 && guy2X < 107){
    //       getSquare[35].append(bombDown[35])
    //   }
    //   if (guy2X > 107 && guy2X < 147) {
    //     getSquare[36].append(bombDown[36])
    //   }
    //   if (guy2X > 147 && guy2X < 187) {
    //     getSquare[37].append(bombDown[37])
    //   }
    //   if (guy2X > 187 && guy2X < 227) {
    //     getSquare[38].append(bombDown[38])
    //   }
    //   if (guy2X > 227 && guy2X < 267) {
    //     getSquare[39].append(bombDown[39])
    //   }
    //   if (guy2X > 267 && guy2X < 307) {
    //     getSquare[40].append(bombDown[40])
    //   }
    //   if (guy2X > 307 && guy2X < 347) {
    //     getSquare[41].append(bombDown[41])
    //   }
    //   if (guy2X > 347 && guy2X < 387) {
    //     getSquare[42].append(bombDown[42])
    //   }
    //   if (guy2X > 387 && guy2X < 427) {
    //     getSquare[43].append(bombDown[43])
    //   }
    //   if (guy2X > 427 && guy2X < 467) {
    //     getSquare[44].append(bombDown[44])
    //   }
    // }
    if (guy2Y > 227 && guy2Y < 267) {
      if (guy2X < 60) {
        getSquare[45].append(bombDown[45])
      }
      if (guy2X > 107 && guy2X < 147) {
        getSquare[46].append(bombDown[46])
      }
      if (guy2X > 187 && guy2X < 227) {
        getSquare[47].append(bombDown[47])
      }
      if (guy2X > 267 && guy2X < 307) {
        getSquare[48].append(bombDown[48])
      }
      if (guy2X > 347 && guy2X < 387) {
        getSquare[49].append(bombDown[49])
      }
      if (guy2X > 427 && guy2X < 467) {
        getSquare[50].append(bombDown[50])
      }
    }
    // if (guy2Y > 267 && guy2Y < 307) {
    //   if (guy2X < 60){
    //     getSquare[51].append(bombDown[51])
    //   }
    //   if (guy2X > 60 && guy2X < 107){
    //       getSquare[52].append(bombDown[52])
    //   }
    //   if (guy2X > 107 && guy2X < 147) {
    //     getSquare[53].append(bombDown[53])
    //   }
    //   if (guy2X > 147 && guy2X < 187) {
    //     getSquare[54].append(bombDown[54])
    //   }
    //   if (guy2X > 187 && guy2X < 227) {
    //     getSquare[55].append(bombDown[55])
    //   }
    //   if (guy2X > 227 && guy2X < 267) {
    //     getSquare[56].append(bombDown[56])
    //   }
    //   if (guy2X > 267 && guy2X < 307) {
    //     getSquare[57].append(bombDown[57])
    //   }
    //   if (guy2X > 307 && guy2X < 347) {
    //     getSquare[58].append(bombDown[58])
    //   }
    //   if (guy2X > 347 && guy2X < 387) {
    //     getSquare[59].append(bombDown[59])
    //   }
    //   if (guy2X > 387 && guy2X < 427) {
    //     getSquare[60].append(bombDown[60])
    //   }
    //   if (guy2X > 427 && guy2X < 467) {
    //     getSquare[61].append(bombDown[61])
    //   }
    // }
    bombDown[firstRan].explode = true
    $(".bomb").fadeOut(3000, function () {
      if (bombDown[firstRan].explode == true) {
        guy1.alive = false
      }
    bomb.explode = true
      $(".bomb").fadeIn(1, function (){
        $(this).remove()
        bomb.explode = false
      })
    })
  }


  setTimeout (plantBomb, 50)
}

// var r1 = []
// var r2 = []
// var r3 = []
// var r4 = []
// var r5 = []
// var r6 = []
// var r7 = []
// var c1 = []
// var c2 = []
// var c3 = []
// var c4 = []
// var c5 = []
// var c6 = []
// var c7 = []
// var c8 = []
// var c9 = []
// var c10 = []
// var c11 = []
//
// for(var i = 0; i < trackSquares.length; i += 1){
//   if (i > 13 && i < 25) {
//     r1.push(trackSquares[i])
//   }
//   if (i > 26 && i < 38 && i % 2 == 1) {
//     r2.push(trackSquares[i])
//   }
//   if (i > 39 && i < 51) {
//     r3.push(trackSquares[i])
//   }
//   if (i > 52 && i < 64 && i % 2 == 1) {
//     r4.push(trackSquares[i])
//   }
//   if (i > 65 && i < 77) {
//     r5.push(trackSquares[i])
//   }
//   if (i > 78 && i < 90 && i % 2 == 1) {
//     r6.push(trackSquares[i])
//   }
//   if (i > 91 && i < 103) {
//     r7.push(trackSquares[i])
//   }
// }
// for(var i = 0; i < trackSquares.length; i += 1) {
//   if (i > 13 && i < 103 && i % 13 == 1) {
//     c1.push(trackSquares[i])
//   }
//   if (i > 13 && i < 103 && i % 13 == 2 && i % 2 == 1) {
//     c2.push(trackSquares[i])
//   }
//   if (i > 13 && i < 103 && i % 13 == 3) {
//     c3.push(trackSquares[i])
//   }
//   if (i > 13 && i < 103 && i % 13 == 4 && i % 2 == 1) {
//     c4.push(trackSquares[i])
//   }
//   if (i > 13 && i < 103 && i % 13 == 5) {
//     c5.push(trackSquares[i])
//   }
//   if (i > 13 && i < 103 && i % 13 == 6 && i % 2 == 1) {
//     c6.push(trackSquares[i])
//   }
//   if (i > 13 && i < 103 && i % 13 == 7) {
//     c7.push(trackSquares[i])
//   }
//   if (i > 13 && i < 103 && i % 13 == 8 && i % 2 == 1) {
//     c8.push(trackSquares[i])
//   }
//   if (i > 13 && i < 103 && i % 13 == 9) {
//     c9.push(trackSquares[i])
//   }
//   if (i > 13 && i < 103 && i % 13 == 10 && i % 2 == 1) {
//     c10.push(trackSquares[i])
//   }
//   if (i > 13 && i < 103 && i % 13 == 11) {
//     c11.push(trackSquares[i])
//   }
// }

// function bombFire() {
//   var pos = $(bombDown).eq(r1)
//   var getFire = document.createElement('div')
//   getFire.className = 'fire'
//   var fire = $(getSquare)
//   fire.eq(pos).append(getFire).fadeIn(1000)
// }
// bombFire()


var $timer = $('#timer')
var countDown = setInterval(function () {
  $timer.html(parseInt($timer.text()) - 1)
  var end = $('#end')
  if (guy1.alive == false) {
    clearInterval(countDown)
    end.html('Game Over')
  }
  if (guy2.alive == false) {
    clearInterval(countDown)
    end.html('Game Over')
  }
  if ($timer.html() == 0){
    clearInterval(countDown)
    end.html('Game Over')
    // console.log('Wow you guys are bad. Tie')
  }
  checkWinner()
}, 1000)

function checkWinner() {
  if (guy1.alive == false && guy2.alive){
    alert("Red Wins")
  }
  if (guy1.alive && guy2.alive == false) {
	   alert('Blue Wins')
  }
  if (guy1.alive && guy2.alive && $timer.html() == 0) {
    alert('Tie')
  }
  if (guy1.alive == false && guy2.alive == false) {
    alert('Tie')
  }
}
var firstRan = Math.floor(Math.random() * 61)
var secondRan = Math.floor(Math.random() * 61)
bombDown[firstRan].explode = false
if (bombDown[firstRan].explode == true) {
  guy1.alive = false
}
if (bombDown[secondRan].explode == true) {
  guy2.alive = false
}

plantBomb()
moveGuy1()
moveGuy2()
