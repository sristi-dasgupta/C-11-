var ship, ship_moving;
var sea,backgroundImg;

function preload(){
ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
backgroundImg = loadImage("sea.png");
}

function setup(){
  createCanvas(600,400);

  sea = createSprite(400,200,50,50);
  sea.addImage("sea",backgroundImg);

  ship = createSprite(10,10,20,30);
  ship.addAnimation("running",ship_moving);
  ship.scale=0.3;
  ship.x=250;
  ship.y=260;

 

}

function draw() {
  background("sea.png");
  drawSprites();
}