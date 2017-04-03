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
  myBlock.style.backgroundColor = 'black'
  return myBlock
}

var gameSize = 9 // needs to be odd to set the blocks in the right positions
var blockPos = blockStart * 2 //  second row start here, 2 + 1 * block is the next row
var blockStart = gameSize + 1 // first spot a non breakable block goes
var blockColums = (gameSize - 1) / 2
var manyBlocks = blockColums * blockColums // how many block will be on the board
var squareSize = 40 //needs to stay 40
var gameWidth = squareSize * gameSize + (gameSize * 2)
container.style.width = gameWidth + 'px'
var makeSquares = []
var makeBlocks = []

//first block is at gameSize plus 1, then second is double game size, then third is
//double gamesize plus gamesize, then four is double gamesize plus double gamesize.
//(i)*(n) n = n = gamesize, while i =


for(var i = 0; i < gameSize * gameSize; i += 1) {
  makeSquares.push(createBoard(i))
}

for (var i = 0; i < makeSquares.length; i += 1) {
  makeBlocks.push(createBlocks(i))
}

for (var i = 0; i < 4; i += 1) {
  if (i < 1) {
    makeSquares[10].append(makeBlocks[0])
    makeSquares[12].append(makeBlocks[1])
    makeSquares[14].append(makeBlocks[2])
    makeSquares[16].append(makeBlocks[3])
  }
  else if (i < 2) {
    makeSquares[28].append(makeBlocks[4])
    makeSquares[30].append(makeBlocks[5])
    makeSquares[32].append(makeBlocks[6])
    makeSquares[34].append(makeBlocks[7])

  }
  else if (i < 3) {
    makeSquares[46].append(makeBlocks[8])
    makeSquares[48].append(makeBlocks[9])
    makeSquares[50].append(makeBlocks[10])
    makeSquares[52].append(makeBlocks[11])
  }
  else if (i < 4) {
    makeSquares[64].append(makeBlocks[12])
    makeSquares[66].append(makeBlocks[13])
    makeSquares[68].append(makeBlocks[14])
    makeSquares[70].append(makeBlocks[15])
  }
}
container.append(guy1)
container.append(guy2)

var guyLeft = 0
var guyU = 0
var guy2L = 0
var guy2U = 0

    function movement(e) {
      //console.log(e.keyCode)
      var player1 = $('.player')[0]
      var player2 = $('.player')[1]
      if(e.keyCode == 68) {
        guyLeft += 5
        player1.style.left = guyLeft + 'px'
        if (guyLeft >= 335) {
          guyLeft -= 5
        }
      }
      else if (e.keyCode == 65) {
        guyLeft -= 5
        player1.style.left = guyLeft + 'px'
        if (guyLeft <= -0) {
          guyLeft += 5
        }
      }
      else if (e.keyCode == 83){
        guyU += 5
        player1.style.top = guyU + 'px'
        if(guyU >= 335) {
          guyU -= 5
        }
      }
      else if (e.keyCode == 87) {
        guyU -= 5
        player1.style.top = guyU + 'px'
        if(guyU <= -0) {
          guyU += 5
        }
      }
      // this affects the other objects movement and position
      else if (e.keyCode == 39) {
        guy2L += 5
        player2.style.left = guy2L + "px"
        if (guy2L >= 335) {
          guy2L -= 5
        }
      }
      else if (e.keyCode == 37) {
        guy2L -= 5
        player2.style.left = guy2L + "px"
        if(guy2L <= 0) {
          guy2L += 5
        }
      }
      else if (e.keyCode == 40) {
        guy2U += 5
        player2.style.top = guy2U + "px"
        if (guy2U >= 335) {
          guy2U -= 5
        }
      }
      else if (e.keyCode == 38) {
        guy2U -= 5
        player2.style.top = guy2U + "px"
        if(guy2U <= 0) {
          guy2U += 5
        }
      }
    }

document.onkeydown = movement
