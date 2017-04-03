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
var gameSize = 9 // needs to be odd to set the blocks in the right positions
var squareSize = 40
var gameWidth = squareSize * gameSize + (gameSize * 2)
container.style.width = gameWidth + 'px'
makeSquares = []
boardColumns = []

//first block is at gameSize plus 1, then second is double game size, then third is
//double gamesize plus gamesize, then four is double gamesize plus double gamesize.
//(i)*(n) n = n = gamesize, while i =
//gamesize                    [1,3,5,7,9,11,13,15,16,17]
// how many colums per gamesize [0,1,2,3,4,5,6,7,8,9,10]

for(var i = 0; i < gameSize * gameSize; i += 1) {
  var myBlock = document.createElement('div')
  myBlock.className = 'block'
  myBlock.style.backgroundColor = 'black'
  // if (i == gameSize + 1) {
  //   mySquares.append(myBlock)
  // }
  makeSquares.push(createBoard(i))
}

for (var i = 1; i < makeSquares.length; i += 2) {
  boardColumns.push(i)
}



// mySquares.append(myBlock)
// return myBlock
