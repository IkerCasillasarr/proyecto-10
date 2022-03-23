var sea,ship;
var señor;
var seaImg,shipImg;
var señorImg;

function preload(){
  //descomentar el código para agregar la animación del barco 

  shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-1.png","ship-2.png",);
  señorImg = loadImage("señor.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Mover el fondo
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  señor = createSprite(120,151,30,30);
  señor.addImage(señorImg);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  señor.scale =0.09;
}

function draw() {
  background(0);
  sea.velocityX = -3;

  //descomentar el código para reiniciar el fondo
  if(sea.x < 0){
    sea.x = 0;
    sea.x = sea.width;
    sea.x = sea.width/8;
    sea.y = 200;
  }

 
  drawSprites();
}
