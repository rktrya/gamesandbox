const canvas = document.getElementById('gamecanvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "grey.jpg";
var x = 10;
ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
ctx.fillRect(x, 50, 100,100);
ctx.drawImage(playerImage, 0, 0);