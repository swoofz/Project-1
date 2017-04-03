var player1 = document.getElementById('one')
var player2 = $('#two')
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
var guyU = 0
var guy2L = 0
var guy2U = 0

    function movement(e) {
      //alert(e.keyCode)
      if(e.keyCode == 68) {
        guyLeft += 10
        player1.style.left = guyLeft + 'px'
      }
      else if (e.keyCode == 65) {
        guyLeft -= 10
        player1.style.left = guyLeft + 'px'
      }
      else if (e.keyCode == 83){
        guyU += 10
        player1.style.top = guyU + 'px'
      }
      else if (e.keyCode == 87) {
        guyU -= 10
        player1.style.top = guyU + 'px'
      }
      // this affects the other objects movement and position
      else if (e.keyCode == 39) {
        guy2L += 10
        player2.css({left: guy2L + "px"})
      }
      else if (e.keyCode == 37) {
        guy2L -= 10
        player2.css({left: guy2L + "px"})
      }
      else if (e.keyCode == 40) {
        guy2U += 10
        player2.css({top: guy2U + "px"})
      }
      else if (e.keyCode == 38) {
        guy2U -= 10
        player2.css({top: guy2U + "px"})
      }
    }
document.onkeydown = movement
