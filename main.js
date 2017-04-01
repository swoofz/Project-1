var player1 = document.getElementById('player')
var container = document.getElementById('container')

    var guyLeft = 0
    var guyUp = 0

    function anim(e) {
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
        if (guyUp >= 335) {
          guyUp -= 10
        }
      }
      else if (e.keyCode == 87) {
        guyUp -= 10
        player1.style.top = guyUp + 'px'
        if (guyUp <= -21) {
          guyUp += 10
        }
      }
    }

document.onkeydown = anim
