var bg,bgImg;
var player, shooterImg, shooter_shooting;
var tanjiro_1, tanjiro_2, tanjiro_3
var rui
function preload(){
  
  shooterImg = loadImage("assets/tanjiro_1.png");
  shooter_shooting = loadImage("assets/tanjiro_1.png");
tanjiro_3Img= loadImage("assets/tanjiro_2.png");
  bgImg = loadImage("assets/bg.png");
 rui = loadImage("assets/rui.jpeg")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 4

 //  tanjiro_3 = createSprite(displayWidth-1150, displayHeight-300, 50, 50)
//tanjiro_3.addImage(tanjiro_3Img)
//tanjiro_3.scale = 0.1

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
 
  player.debug = true
   // player.debug = false
    // player.Debug =false
    // Player.debug = true

   //player.Collider("rectagle",0,0,300,300)
   //player.setcollider("rectangle",0,0)
    player.setCollider("rectangle",0,0,300,300)
  // player.Setcollider("rectangle",0,0,300,300)

}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30

}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("enter")){
 
  player.addImage(tanjiro_3Img)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("enter")){
    player.addImage(     shooter_shooting               );
 // player.addImage()
 //player.addImage(shooterImg)
// player.addImage(shooter_1.png)

}

drawSprites();

}




