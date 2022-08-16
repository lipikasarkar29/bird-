var gameState = "Start"
var startPage, bg1, startbtn, startImg
function preload(){
    flappyBirdAnimation=loadAnimation("flappy bird1.png", "flappy bird2.png", "flappy bird3.png" );
    startPage=loadImage("startPage.png")
    startImg=loadImage("start.png")
    dayBg=loadImage("bg.png")
    nestImg=loadImage("nest.png")
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    bg1=createSprite(width/2, height/2);
    bg1.addImage(startPage)
    startbtn=createSprite(width/2,height/2+60);
    startbtn.addImage(startImg)
    startbtn.scale=2.5
    bg2=createSprite(width/2, height/2);
    bg2.addImage(dayBg)
    bg2.scale=3
    bg2.visible=false;
    flappyBird=createSprite(100, height/2)
    flappyBird.addAnimation("flyingBird", flappyBirdAnimation)
    flappyBird.scale=2
    flappyBird.visible=false;
    nest=createSprite(width-40,height/2)
    nest.addImage(nestImg)
    nest.debug=true
    nest.setCollider("circle",0,0,50)
    nest.scale=0.5
    nest.visible=false
}

function draw(){
    background("white")
if (gameState=="Start"){
    if (mousePressedOver(startbtn)){
        gameState="play";
    }
}

if (gameState=="play"){
    bg1.visible=false;
    startbtn.visible=false;
    bg2.visible=true;
    flappyBird.visible=true;
    nest.visible=true
  bg2.velocityX=-6
  if (bg2.x<0){
    bg2.velocityX=0;
    if (keyDown("RIGHT_ARROW")){
        flappyBird.x+=20;
    }
  }
    if (keyDown("space")){
        flappyBird.velocityY=-8
    }
    flappyBird.velocityY+=0.8

    if(flappyBird.isTouching(nest)){
        flappyBird.velocityY=0
        flappyBird.velocityX=0
    }

    nest.depth=flappyBird.depth
    flappyBird.depth+=1

}
    drawSprites()
}