// configuration values
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 600;

const canvas = document.createElement("canvas");
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

// initialize interface for interacting with canvas
const context = canvas.getContext('2d');

const player = new Player();
const computer = new Computer();
const ball = new Ball(200, 300);

// indicator of what keys are currently pressed
const keysDown = {};

// render new calculated frame
const render = function () {
  context.fillStyle = "#FF00FF";
  context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  player.render();
  computer.render();
  ball.render();
};

// calculate new state of things
const update = function () {
  player.update();
  computer.update(ball);
  ball.update(player.paddle, computer.paddle);
};

const animateNextFrame = function () {
  update();
  render();
  window.requestAnimationFrame(animateNextFrame);
};

function Paddle(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.x_speed = 0;
  this.y_speed = 0;
}

// draws the paddle
Paddle.prototype.render = function () {
  context.fillStyle = "#0000FF";
  context.fillRect(this.x, this.y, this.width, this.height);
};

Paddle.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  this.x_speed = x;
  this.y_speed = y;
  if (this.x < 0) {
    this.x = 0;
    this.x_speed = 0;
  } else if (this.x + this.width > CANVAS_WIDTH) {
    this.x = CANVAS_WIDTH - this.width;
    this.x_speed = 0;
  }
};

function Computer() {
  this.paddle = new Paddle(175, 10, 50, 10);
}

// render computer paddle to canvas
Computer.prototype.render = function () {
  this.paddle.render();
};

// calculate new paddle location values
Computer.prototype.update = function (ball) {
  const x_pos = ball.x;
  let diff = -((this.paddle.x + (this.paddle.width / 2)) - x_pos);
  if (diff < 0 && diff < -4) {
    diff = -5;
  } else if (diff > 0 && diff > 4) {
    diff = 5;
  }
  this.paddle.move(diff, 0);
  if (this.paddle.x < 0) {
    this.paddle.x = 0;
  } else if (this.paddle.x + this.paddle.width > CANVAS_WIDTH) {
    this.paddle.x = CANVAS_WIDTH - this.paddle.width;
  }
};

function Player() {
  this.paddle = new Paddle(175, 580, 50, 10);
}

// render player paddle with new values to canvas
Player.prototype.render = function () {
  this.paddle.render();
};

// calculate new location of player paddle
Player.prototype.update = function () {
  for (const key in keysDown) {
    const value = Number(key);
    if (value == 37) {
        this.paddle.move(-4, 0);
    } else if (value == 39) {
        this.paddle.move(4, 0);
    } else {
        this.paddle.move(0, 0);
    }
  }
};

function Ball(x, y) {
  this.x = x;
  this.y = y;
  this.x_speed = 0;
  this.y_speed = 3;
}

// render Ball to canvas
Ball.prototype.render = function () {
  context.beginPath();
  context.arc(this.x, this.y, 5, 2 * Math.PI, false);
  context.fillStyle = "#000000";
  context.fill();
};

// calculate new location of Ball
Ball.prototype.update = function (paddle1, paddle2) {
  this.x += this.x_speed;
  this.y += this.y_speed;
  const top_x = this.x - 5;
  const top_y = this.y - 5;
  const bottom_x = this.x + 5;
  const bottom_y = this.y + 5;

  if (this.x - 5 < 0) {
    this.x = 5;
    this.x_speed = -this.x_speed;
  // ball has hit the side of the canvas, make it bounce
  } else if (this.x + 5 > CANVAS_WIDTH) {
    this.x = 395;
    this.x_speed = -this.x_speed;
  }

  // if the ball has made it to either player's goal, reset the ball to the center
  if (this.y < 0 || this.y > CANVAS_HEIGHT) {
    this.x_speed = 0;
    this.y_speed = 3;
    this.x = 200;
    this.y = 300;
  }

  if (top_y > 300) {
    if (top_y < (paddle1.y + paddle1.height) && bottom_y > paddle1.y && top_x < (paddle1.x + paddle1.width) && bottom_x > paddle1.x) {
        this.y_speed = -3;
        this.x_speed += (paddle1.x_speed / 2);
        this.y += this.y_speed;
    }
  } else {
    if (top_y < (paddle2.y + paddle2.height) && bottom_y > paddle2.y && top_x < (paddle2.x + paddle2.width) && bottom_x > paddle2.x) {
        this.y_speed = 3;
        this.x_speed += (paddle2.x_speed / 2);
        this.y += this.y_speed;
    }
  }
};

// add canvas to the DOM
document.body.appendChild(canvas);

// this starts the loop
window.requestAnimationFrame(animateNextFrame);

// Handle user interactions
window.addEventListener("keydown", function (event) {
  keysDown[event.keyCode] = true;
});
window.addEventListener("keyup", function (event) {
  delete keysDown[event.keyCode];
});
