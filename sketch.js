function setup() {
  createCanvas(800, 400);
  square1 = createSprite(400, 200, 50, 50);
  square1.shapeColor = "red";
  square2 = createSprite(340, 100, 50, 50);
  square2.shapeColor = "red";
}

function draw() {
  background("yellow");

  drawSprites();
  square2.y = mouseY;
  square2.x = mouseX;
  if (
    square1.x - square2.x <= square1.width / 2 + square2.width / 2 &&
    square2.x - square1.x <= square1.width / 2 + square2.width / 2 &&
    square1.y - square2.y <= square1.height / 2 + square2.height / 2 &&
    square2.y - square1.y <= square2.height / 2 + square1.height / 2
  ) {
    square1.shapeColor = "blue";
    square2.shapeColor = "blue";
  } else {
    square1.shapeColor = "red";
    square2.shapeColor = "red";
  }
}
