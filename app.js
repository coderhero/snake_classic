let snake = [41, 40],
    direction = 1,
    food = 43,
    n,
    box = document.getElementById('canvas').getContext('2d');

function draw(seat, color) {
  box.fillStyle = color;
  box.fillRect(seat % 20 * 20 + 1, ~~(seat / 20) * 20 + 1, 18, 18);
}

document.onkeydown = function(event) {
  direction = snake[1] - snake[0] ==
  (n = [-1, -20, 1, 20][event.keyCode - 37] || direction)
};

!function() {
  snake.unshift(n = snake[0] + direction);
  
}
