var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  Rect1 = createSprite(100,100,50,50);
  Rect1.shapeColor = "green";
  Rect2 = createSprite(200,100,50,50);
  Rect2.shapeColor = "green";

  Rect3 = createSprite(300,100,50,50);
  Rect3.shapeColor = "green";
  Rect3.velocityX=1;
  Rect4 = createSprite(400,100,50,50);
  Rect4.shapeColor = "green";
  Rect4.velocityX=-1;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect, Rect1)){
 movingRect.shapeColor = "blue";
  Rect1. shapeColor= "blue"
}
  else{
movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  }
  bounce(Rect3,Rect4);
  drawSprites();
}
