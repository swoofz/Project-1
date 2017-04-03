var player1 = document.getElementById('one')
var player2 = $('#two')
var container = document.getElementById('container')
var game = {
  player1: {
    keyLeft: 65,
    keyDown: 83,
    KeyRight: 68,
    keyUp: 87,
    bomb: 1,
    speed: "5px",
  },
  player2: {
    keyLeft: 37,
    keyDown: 40,
    KeyRight: 39,
    keyUp: 38,
    bomb: 1,
    speed: "5px",
  },
  bomb: {},
  block: {},
  metalBlock: {}
}
var guyLeft = 0
var guyUp = 0

    function movement(e) {
      //alert(e.keyCode)
      if(e.keyCode == 68) {
        guyLeft += 10
        player1.style.left = guyLeft + 'px'
        if (guyLeft >= 450) {
          guyLeft -= 10
        }
      }
      else if (e.keyCode == 65) {
        guyLeft -= 10
        player1.style.left = guyLeft + 'px'
        if(guyLeft <= 0) {
          guyLeft += 10
        }
      }
      else if (e.keyCode == 83){
      guyUp += 10
      player1.style.top = guyUp + 'px'
        if (guyUp >= 450) {
          guyUp -= 10
        }
      }
      else if (e.keyCode == 87) {
        guyUp -= 10
        player1.style.top = guyUp + 'px'
        if (guyUp <= 0) {
          guyUp += 10
        }
      }
      // this affects the other objects movement
      else if (e.keyCode == 39) {
        guyLeft += 10
        player2.css({left: guyLeft + "px"})
      }
    }

document.onkeydown = movement
// document.onkeydown = moveplayer2
