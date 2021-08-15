var tomAnimation,tom;
var zombieF,zombieR,zombieL,zombieB,zombie;
var bg;  



function preload(){
  bg= loadImage("image/bg.png");
  tomAnimation = loadAnimation("image/tom/1.png","image/tom/2.png","image/tom/3.png","image/tom/4.png");
  zombieF = loadAnimation("image/zf1.png","image/zf2.png");
  zombieB = loadAnimation("image/zb1.png","image/zb2.png");
  zombieL = loadAnimation("image/zls1.png","image/zls2.png");
  zombieR = loadAnimation("image/zrs1.png","image/zb2.png");
}
function setup(){
canvas = createCanvas(windowWidth,windowHeight);


tom=createSprite(windowWidth/25,windowHeight/2,5,5);
tom.scale= 0.0205;
tom.addAnimation("tom",tomAnimation);

zombie = createSprite(windowWidth/2,windowHeight/2,10,10);
zombie.scale= 0.0205;
zombie.addAnimation("zombie",zombieB);

}
  

function draw(){
  background(bg);

  if (keyIsDown(87)) {
   tom.position.y = tom.position.y - 5
  }
  if (keyIsDown(83)) {
    tom.position.y = tom.position.y + 5
   }
   if (keyIsDown(68)) {
    tom.position.x = tom.position.x + 5
   }
   if (keyIsDown(65)) {
    tom.position.x = tom.position.x - 5
   }
drawSprites();
}