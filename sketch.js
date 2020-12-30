var gameState = "loginPage1"
var startButton,login1,login2;
var spaceship, alien , hero,ufo;
function preload() {
  bgIMg = loadImage("spacewarsBg.jpg")
  bgIMg1 = loadImage("spaceBg.jpg")
  heroImg = loadImage("playerShip1.png")
  alienImg = loadImage("alien1.png")
  ufoImg = loadImage("ufo1.png")
  

}

function setup() {
  createCanvas(750, 500);
  login1 = new LoginPage1();
  login1.display()
  hero  = createSprite(300,450,50,50)
  hero.addImage(heroImg)
  alien = createSprite(200,100,100,100)
  alien.addImage(alienImg)
  alien.scale  = 0.3
 ufo = createSprite(300,300,100,100)
  ufo.addImage(ufoImg)
  ufo.scale = 0.3
}

function draw() {
  
if(gameState==="playGame"){
 clear()
  background("red");
  game()
 
}

  
}
function game(){
  drawSprites();
 if(keyDown(UP_ARROW)){
  hero.y = hero.y  - 10
 }
 if(keyDown(LEFT_ARROW)){
  hero.x = hero.x  - 10
 }
 if(keyDown(RIGHT_ARROW)){
  hero.x = hero.x  + 10
 }
//  if(frameCount%60===0){
//    alien1
//  }
}