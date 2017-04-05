var player1 = document.getElementById('one')
var player2 = $('#two')
var game = {
  player1: [
    left = 65,
    down = 83,
    right = 68,
    up = 87,
    bomb = 1,
    speed = "5px",
  ],
  player2: [
    left = 37,
    down = 40,
    right = 39,
    up = 38,
    bomb = 1,
    speed = "5px",
  ],
  bomb: [],
  block: [],
  metalBlock: []
}

    function Player() {
      this.x = 0
      this.y = 0
    }
