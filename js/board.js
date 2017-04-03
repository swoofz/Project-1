var body = document.querySelector('body')
var container = document.createElement ('div')
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
