//Set global variable that would contain the position, velocity and the html element "ball"

var velocityX;
var velocityY;
var positionX = [0,0,0,0,0,0,0,0,0,0];
var positionY = [0,0,0,0,0,0,0,0,0,0];
var ballId;
var reverseX = [false,false,false,false,false,false,false,false,false,false];
var reverseY = [false,false,false,false,false,false,false,false,false,false];

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

//write a function that can change the position of the html element "ball"

function moveBall(ballId, velocityX, velocityY) {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 1000;
  var Ymin = 0;
  var Ymax = 1000;

let index = ballId.slice(-1);

  var ball = document.getElementById(ballId);

if (!reverseX[index]){
positionX[index] = positionX[index] + velocityX;
} else positionX[index] = positionX[index] - velocityX;

ball.style.left = positionX[index] + 'px';

if (positionX[index] > Xmax){
    reverseX[index] = true;
    ball.style.background = getRandomColor;

} else if (positionX[index] < Xmin){
  reverseX[index] = false;
  ball.style.background = getRandomColor;

}

if (!reverseY[index]){
positionY[index] = positionY[index] + velocityY;
} else positionY[index] = positionY[index] - velocityY;

ball.style.top = positionY[index] + 'px';

if (positionY[index] > Ymax){
    reverseY[index] = true;
} else if (positionY[index] < Ymin){
    reverseY[index] = false;
}

}

// This call the moveBall function every 100ms
setInterval(() => moveBall("ball0", 10, 50), 100);
setInterval(() => moveBall("ball1", 30, 20), 100);
setInterval(() => moveBall("ball2", 80, 53), 100);
setInterval(() => moveBall("ball3", 40, 57), 100);
setInterval(() => moveBall("ball4", 10, 43), 100);
setInterval(() => moveBall("ball5", 88, 50), 100);
setInterval(() => moveBall("ball6", 14, 74), 100);
setInterval(() => moveBall("ball7", 65, 66), 100);
setInterval(() => moveBall("ball8", 90, 74), 100);
setInterval(() => moveBall("ball9", 45, 23), 100);